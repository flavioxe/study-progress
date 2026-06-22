import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastProvider } from "./components/ToastProvider.jsx";
import TrackerPage from "./pages/TrackerPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/bb_agente_ti_tracker.html" replace />} />
          <Route path="/bb_agente_ti_tracker.html" element={<TrackerPage />} />
          <Route path="/guia.html" element={<GuidePage />} />
          <Route path="*" element={<Navigate to="/bb_agente_ti_tracker.html" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
