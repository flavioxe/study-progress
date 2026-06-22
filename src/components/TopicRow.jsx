import { STATUS_CONFIG } from "../data/disciplines.js";

export function TopicRow({ index, topic, discId, topicState, onStateChange }) {
  const status = STATUS_CONFIG.find((s) => s.key === topicState.status) || STATUS_CONFIG[0];
  const isObject = typeof topic === "object";

  return (
    <tr>
      <td className="col-index" style={{ width: 40, color: "var(--text-muted)", fontFamily: "'Space Mono',monospace", fontSize: 11 }}>
        {String(index + 1).padStart(2, "0")}
      </td>
      <td className="topic-name" data-label="Tópico">
        {isObject ? (
          <>
            <div>{topic.name}</div>
            <div className="topic-description">{topic.description}</div>
          </>
        ) : topic}
      </td>
      <td style={{ width: 150 }} data-label="Status">
        <div className="status-badge" style={{ background: status.bg, color: status.color }}>
          <select
            className="status-select"
            style={{ background: "transparent", border: "none", color: status.color, width: 135 }}
            value={topicState.status}
            onChange={(e) => onStateChange(discId, index, "status", e.target.value)}
          >
            {STATUS_CONFIG.map((sc) => (
              <option key={sc.key} value={sc.key} style={{ background: "#1e2435", color: sc.color }}>
                {sc.label}
              </option>
            ))}
          </select>
        </div>
      </td>
      <td style={{ width: 200 }} data-label="Anotações">
        <input
          className="note-input"
          type="text"
          placeholder="Anotação..."
          defaultValue={topicState.note || ""}
          onBlur={(e) => onStateChange(discId, index, "note", e.target.value)}
        />
      </td>
    </tr>
  );
}
