import { DISCIPLINES } from "../data/disciplines.js";

const TAB_LABELS = {
  portugues: "Português",
  ingles: "Inglês",
};

function tabLabel(disc) {
  if (TAB_LABELS[disc.id]) return TAB_LABELS[disc.id];
  const words = disc.name.split(" ");
  return words[0] + (words.length > 2 ? "..." : "");
}

export function Tabs({ activeTab, onSelect, countByStatus }) {
  return (
    <div className="tabs">
      {DISCIPLINES.map((d) => {
        const counts = countByStatus(d.id);
        const done = (counts["2"] || 0) + (counts["4"] || 0);
        return (
          <button
            key={d.id}
            type="button"
            className={`tab ${d.id === activeTab ? "active" : ""}`}
            onClick={() => onSelect(d.id)}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, display: "inline-block" }} />
            {tabLabel(d)}
            <span className="badge">{done}/{d.topics.length}</span>
          </button>
        );
      })}
    </div>
  );
}
