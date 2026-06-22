import { DISCIPLINES } from "../data/disciplines.js";

export function StatsGrid({ getState }) {
  const totalTopics = DISCIPLINES.reduce((sum, d) => sum + d.topics.length, 0);
  let studied = 0, reviewing = 0, inProgress = 0, revised = 0;

  DISCIPLINES.forEach((d) => {
    d.topics.forEach((_, i) => {
      const s = getState(d.id, i).status;
      if (s === "2") studied++;
      if (s === "3") reviewing++;
      if (s === "1") inProgress++;
      if (s === "4") revised++;
    });
  });

  const cards = [
    { value: totalTopics, label: "Total de tópicos", color: "var(--accent)" },
    { value: inProgress, label: "Em andamento", color: "var(--status-1-t)" },
    { value: studied, label: "Estudados", color: "var(--status-2-t)" },
    { value: reviewing, label: "Para revisar", color: "var(--status-3-t)" },
    { value: revised, label: "Revisados", color: "var(--status-4-t)" },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div className="stat-card" key={card.label}>
          <div className="stat-num" style={{ color: card.color }}>{card.value}</div>
          <div className="stat-label">{card.label}</div>
        </div>
      ))}
    </div>
  );
}
