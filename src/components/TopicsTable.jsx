import { TopicRow } from "./TopicRow.jsx";

export function TopicsTable({ disc, statusFilter, getState, onStateChange }) {
  const filteredTopics = disc.topics
    .map((topic, index) => ({ topic, index }))
    .filter(({ index }) => statusFilter === "all" || getState(disc.id, index).status === statusFilter);

  if (filteredTopics.length === 0) {
    return <div className="empty">Nenhum tópico com esse status nessa disciplina.</div>;
  }

  return (
    <div className="table-wrap">
      <table className="topics-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tópico</th>
            <th>Status</th>
            <th>Bizu</th>
            <th>Anotações</th>
          </tr>
        </thead>
        <tbody>
          {filteredTopics.map(({ topic, index }) => (
            <TopicRow
              key={index}
              index={index}
              topic={topic}
              discId={disc.id}
              topicState={getState(disc.id, index)}
              onStateChange={onStateChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
