const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "0", label: "Não iniciados" },
  { key: "3", label: "Precisa revisar" },
  { key: "1", label: "Em andamento" },
  { key: "2", label: "Estudados" },
];

export function FilterRow({ statusFilter, onChange }) {
  return (
    <div className="filter-row">
      <span className="filter-label">Filtrar por status:</span>
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          type="button"
          className={`filter-btn ${statusFilter === filter.key ? "active" : ""}`}
          onClick={() => onChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
