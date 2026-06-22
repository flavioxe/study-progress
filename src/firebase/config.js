import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5sK2mocTOB04GyrOFM8Ya6OKZjYmL4So",
  authDomain: "study-progress-7000c.firebaseapp.com",
  projectId: "study-progress-7000c",
  storageBucket: "study-progress-7000c.firebasestorage.app",
  messagingSenderId: "220786454851",
  appId: "1:220786454851:web:e2714126605a61deda7ff6",
  measurementId: "G-C45M7KTYCX",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export function describeAuthError(error) {
  if (!error || !error.code) return "erro-desconhecido";
  if (error.code === "auth/operation-not-allowed") return "email-senha-nao-habilitado";
  if (error.code === "auth/invalid-credential") return "email-ou-senha-invalidos";
  if (error.code === "auth/invalid-email") return "email-invalido";
  if (error.code === "auth/missing-password") return "senha-obrigatoria";
  if (error.code === "auth/weak-password") return "senha-fraca";
  if (error.code === "auth/email-already-in-use") return "email-ja-cadastrado";
  if (error.code === "permission-denied") return "firestore-sem-permissao";
  return error.code;
}
