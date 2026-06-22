import { Link } from "react-router-dom";
import { DISCIPLINES } from "../data/disciplines.js";
import { useTrackerState } from "../hooks/useTrackerState.js";
import { AuthBar } from "../components/AuthBar.jsx";
import { StatsGrid } from "../components/StatsGrid.jsx";
import { computeOverallProgress } from "../utils/progress.js";
import { ProgressBar } from "../components/ProgressBar.jsx";
import { Tabs } from "../components/Tabs.jsx";
import { FilterRow } from "../components/FilterRow.jsx";
import { DisciplineHeader } from "../components/DisciplineHeader.jsx";
import { TopicsTable } from "../components/TopicsTable.jsx";
import { Loader } from "../components/Loader.jsx";
import { SaveIndicator } from "../components/SaveIndicator.jsx";
import "../styles/tracker.css";

export default function TrackerPage() {
  const tracker = useTrackerState();
  const disc = DISCIPLINES.find((d) => d.id === tracker.activeTab);
  const counts = tracker.countByStatus(disc.id);
  const done = (counts["2"] || 0) + (counts["4"] || 0);
  const percent = Math.round((done / disc.topics.length) * 100);

  return (
    <div className="app-shell">
      <header>
        <div className="logo-row">
          <div className="logo">BB · Agente de TI</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Tracker de Estudos · CESGRANRIO</div>
        </div>
        <h1>Controle de <span>Progresso</span></h1>
        <div className="filter-row" style={{ marginBottom: 0 }}>
          <Link className="filter-btn active" to="/guia.html" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
            Abrir guia completo
          </Link>
        </div>
      </header>

      <AuthBar
        authReady={tracker.authReady}
        currentUser={tracker.currentUser}
        onLogin={tracker.login}
        onRegister={tracker.register}
        onLogout={tracker.logout}
      />

      <StatsGrid getState={tracker.getState} />

      <ProgressBar percent={computeOverallProgress(tracker.getState)} />

      <Tabs activeTab={tracker.activeTab} onSelect={tracker.setActiveTab} countByStatus={tracker.countByStatus} />

      <FilterRow statusFilter={tracker.statusFilter} onChange={tracker.setStatusFilter} />

      {tracker.tabLoading ? (
        <Loader message="Carregando matéria..." />
      ) : (
        <>
          <DisciplineHeader disc={disc} done={done} total={disc.topics.length} percent={percent} />
          <TopicsTable
            disc={disc}
            statusFilter={tracker.statusFilter}
            getState={tracker.getState}
            onStateChange={tracker.setTopicState}
          />
        </>
      )}

      <SaveIndicator message={tracker.saveIndicator.message} saved={tracker.saveIndicator.saved} />
    </div>
  );
}
