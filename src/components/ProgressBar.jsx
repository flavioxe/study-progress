export function ProgressBar({ percent }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-label">
        <span>Progresso geral</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
