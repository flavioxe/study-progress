import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import guideMarkdown from "../data/guia-completo-bb-agente-ti.md?raw";
import "../styles/guide.css";

export default function GuidePage() {
  return (
    <div className="guide-body">
      <div className="guide-shell">
        <div className="guide-topbar">
          <div>
            <div className="guide-title">Guia Completo</div>
            <div className="guide-muted">Markdown completo renderizado localmente na própria página</div>
          </div>
          <Link className="guide-back" to="/bb_agente_ti_tracker.html">Voltar ao tracker</Link>
        </div>

        <article className="guide-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{guideMarkdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
