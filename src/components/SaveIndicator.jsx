export function SaveIndicator({ message, saved }) {
  return (
    <div className={`save-indicator ${saved ? "saved" : ""}`}>
      <div className="save-dot" />
      <span>{message || "Dados salvos automaticamente"}</span>
    </div>
  );
}
