export function DisciplineHeader({ disc, done, total, percent }) {
  return (
    <div className="disc-header">
      <div className="disc-dot" style={{ background: disc.color }} />
      <div className="disc-title">{disc.name}</div>
      <div className="disc-progress">
        <div className="disc-progress-fill" style={{ background: disc.color, width: `${percent}%` }} />
      </div>
      <span className="priority-tag" style={{ background: disc.pBg, color: disc.pColor }}>{disc.priority}</span>
      <div className="disc-meta">{done}/{total} tópicos · {disc.questions}q · {disc.points}pts</div>
    </div>
  );
}
