import { useState } from "react";

export function AuthBar({ authReady, currentUser, onLogin, onRegister, onLogout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!authReady) {
    return (
      <div className="disc-header">
        <div className="disc-title">Conectando ao Firebase...</div>
      </div>
    );
  }

  if (currentUser) {
    return (
      <div className="disc-header">
        <div className="disc-title">Sincronização ativa</div>
        <div className="disc-meta">{currentUser.email || "Usuário autenticado"}</div>
        <button type="button" className="filter-btn active" onClick={onLogout}>Sair</button>
      </div>
    );
  }

  return (
    <div className="disc-header">
      <div>
        <div className="disc-title">Login pessoal</div>
        <div className="disc-meta">Use email e senha para salvar na nuvem</div>
      </div>
      <div className="auth-form">
        <input
          className="auth-input"
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="filter-btn active" onClick={() => onLogin(email.trim(), password)}>
          Entrar
        </button>
        <button type="button" className="filter-btn" onClick={() => onRegister(email.trim(), password)}>
          Criar acesso
        </button>
      </div>
    </div>
  );
}
