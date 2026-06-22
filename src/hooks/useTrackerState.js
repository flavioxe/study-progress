import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, describeAuthError } from "../firebase/config.js";
import { DISCIPLINES } from "../data/disciplines.js";
import { useToast } from "./useToast.js";

const STORAGE_KEY = "bb_tracker_v2";

function key(discId, topicIdx) {
  return `${discId}:${topicIdx}`;
}

function localKey(discId) {
  return `${STORAGE_KEY}:${discId}`;
}

function getLocalValue(keyName) {
  try {
    return window.localStorage.getItem(keyName);
  } catch {
    return null;
  }
}

function setLocalValue(keyName, value) {
  try {
    window.localStorage.setItem(keyName, value);
  } catch {
    // Sem armazenamento local disponível; o Firestore segue como fonte principal.
  }
}

export function useTrackerState() {
  const toast = useToast();

  const stateRef = useRef({});
  const loadedRef = useRef(new Set());
  const userRef = useRef(null);
  const activeTabRef = useRef("ti");
  const saveTimeoutsRef = useRef({});
  const legacyRef = useRef({ checked: false, byDiscipline: null });

  const [, bump] = useReducer((c) => c + 1, 0);
  const [activeTab, setActiveTabState] = useState("ti");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentUser, setCurrentUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [tabLoading, setTabLoading] = useState(true);
  const [saveIndicator, setSaveIndicator] = useState({ message: "", saved: false });

  const getState = useCallback((discId, idx) => {
    return stateRef.current[key(discId, idx)] || { status: "0", note: "" };
  }, []);

  const migrateLegacyIfNeeded = useCallback(async () => {
    if (legacyRef.current.checked) return;
    legacyRef.current.checked = true;
    if (!userRef.current) return;
    try {
      const snap = await getDoc(doc(db, "studyProgress", userRef.current.uid));
      if (snap.exists() && snap.data().state) {
        const byDiscipline = {};
        Object.entries(snap.data().state).forEach(([k, v]) => {
          const sep = k.indexOf(":");
          const discId = k.slice(0, sep);
          const idx = k.slice(sep + 1);
          if (!byDiscipline[discId]) byDiscipline[discId] = {};
          byDiscipline[discId][idx] = v;
        });
        legacyRef.current.byDiscipline = byDiscipline;
      }
    } catch {
      // Migração é best-effort; segue sem dados legados se falhar.
    }
  }, []);

  const loadDisciplineState = useCallback(async (discId) => {
    if (loadedRef.current.has(discId)) return;

    let merged;
    const localRaw = getLocalValue(localKey(discId));
    try {
      merged = localRaw ? JSON.parse(localRaw) : {};
    } catch {
      merged = {};
    }

    const user = userRef.current;
    if (user) {
      const ref = doc(db, "studyProgress", user.uid, "disciplines", discId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        merged = snap.data().state || {};
        setLocalValue(localKey(discId), JSON.stringify(merged));
      } else if (Object.keys(merged).length) {
        await setDoc(ref, { state: merged, updatedAt: new Date().toISOString(), email: user.email || null }, { merge: true });
      } else {
        await migrateLegacyIfNeeded();
        const legacy = legacyRef.current.byDiscipline?.[discId];
        if (legacy) {
          merged = legacy;
          setLocalValue(localKey(discId), JSON.stringify(merged));
          await setDoc(ref, { state: merged, updatedAt: new Date().toISOString(), email: user.email || null }, { merge: true });
        }
      }
    }

    Object.entries(merged).forEach(([idx, value]) => {
      stateRef.current[key(discId, idx)] = value;
    });
    loadedRef.current.add(discId);
  }, [migrateLegacyIfNeeded]);

  const saveDisciplineState = useCallback(async (discId) => {
    const disc = DISCIPLINES.find((d) => d.id === discId);
    const data = {};
    disc.topics.forEach((_, i) => { data[i] = getState(discId, i); });
    setLocalValue(localKey(discId), JSON.stringify(data));

    const user = userRef.current;
    if (user) {
      const ref = doc(db, "studyProgress", user.uid, "disciplines", discId);
      await setDoc(ref, { state: data, updatedAt: new Date().toISOString(), email: user.email || null }, { merge: true });
    }
  }, [getState]);

  const scheduleSave = useCallback((discId) => {
    clearTimeout(saveTimeoutsRef.current[discId]);
    setSaveIndicator({ message: userRef.current ? "Sincronizando..." : "Salvando localmente...", saved: false });
    saveTimeoutsRef.current[discId] = setTimeout(async () => {
      try {
        await saveDisciplineState(discId);
        setSaveIndicator({ message: userRef.current ? "Dados sincronizados ✓" : "Dados salvos localmente ✓", saved: true });
        toast.success("Progresso salvo");
      } catch (error) {
        setSaveIndicator({ message: "Erro ao salvar", saved: false });
        toast.error(`Erro ao salvar: ${describeAuthError(error)}`);
      }
    }, 800);
  }, [saveDisciplineState, toast]);

  const setTopicState = useCallback((discId, idx, field, value) => {
    const k = key(discId, idx);
    if (!stateRef.current[k]) stateRef.current[k] = { status: "0", note: "" };
    stateRef.current[k][field] = value;
    bump();
    scheduleSave(discId);
  }, [scheduleSave]);

  const loadRemainingInBackground = useCallback(() => {
    const others = DISCIPLINES.map((d) => d.id).filter((id) => id !== activeTabRef.current);
    (async () => {
      for (const id of others) {
        try {
          await loadDisciplineState(id);
          bump();
        } catch (error) {
          toast.error(`Erro ao carregar ${id}: ${describeAuthError(error)}`);
        }
      }
    })();
  }, [loadDisciplineState, toast]);

  const bootstrapForUser = useCallback(async (user) => {
    userRef.current = user;
    stateRef.current = {};
    loadedRef.current = new Set();
    legacyRef.current = { checked: false, byDiscipline: null };
    setCurrentUser(user);
    setAuthReady(true);
    setTabLoading(true);
    try {
      await loadDisciplineState(activeTabRef.current);
      bump();
      loadRemainingInBackground();
    } catch (error) {
      toast.error(`Falha ao carregar dados: ${describeAuthError(error)}`);
    } finally {
      setTabLoading(false);
      setSaveIndicator({ message: user ? "Dados sincronizados com Firebase" : "Modo local ativo", saved: true });
    }
  }, [loadDisciplineState, loadRemainingInBackground, toast]);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      toast.error(`Persistência de login indisponível: ${describeAuthError(error)}`);
    });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      bootstrapForUser(user);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setActiveTab = useCallback(async (id) => {
    activeTabRef.current = id;
    setActiveTabState(id);
    if (!loadedRef.current.has(id)) {
      setTabLoading(true);
      try {
        await loadDisciplineState(id);
        bump();
      } catch (error) {
        toast.error(`Erro ao carregar matéria: ${describeAuthError(error)}`);
      } finally {
        setTabLoading(false);
      }
    }
  }, [loadDisciplineState, toast]);

  const login = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSaveIndicator({ message: "Login realizado com sucesso", saved: true });
    } catch (error) {
      const description = describeAuthError(error);
      setSaveIndicator({ message: `Falha no login: ${description}`, saved: false });
      toast.error(`Falha no login: ${description}`);
    }
  }, [toast]);

  const register = useCallback(async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSaveIndicator({ message: "Acesso criado com sucesso", saved: true });
    } catch (error) {
      const description = describeAuthError(error);
      setSaveIndicator({ message: `Falha ao criar acesso: ${description}`, saved: false });
      toast.error(`Falha ao criar acesso: ${description}`);
    }
  }, [toast]);

  const logout = useCallback(() => signOut(auth), []);

  const countByStatus = useCallback((discId) => {
    const disc = DISCIPLINES.find((d) => d.id === discId);
    const counts = { "0": 0, "1": 0, "2": 0, "3": 0, "4": 0 };
    disc.topics.forEach((_, i) => {
      const s = getState(discId, i).status;
      counts[s] = (counts[s] || 0) + 1;
    });
    return counts;
  }, [getState]);

  return {
    activeTab,
    setActiveTab,
    statusFilter,
    setStatusFilter,
    currentUser,
    authReady,
    tabLoading,
    saveIndicator,
    getState,
    setTopicState,
    countByStatus,
    login,
    register,
    logout,
  };
}
