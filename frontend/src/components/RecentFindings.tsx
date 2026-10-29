import { AlertTriangle } from 'lucide-react'
import { findings } from '../data/mock'

export default function RecentFindings() {
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>
          <AlertTriangle size={16} color="var(--severity-high)" />
          Temuan Terbaru
        </h3>
        <button className="btn-view-all">Lihat Semua →</button>
      </div>

      <div className="findings-list">
        {findings.map((f, i) => (
          <div className="finding-item" key={i}>
            <span className={`finding-dot ${f.severity}`} />
            <div className="finding-info">
              <div className="finding-host">{f.host}</div>
              <div className="finding-path">{f.path}</div>
            </div>
            <div className="finding-meta">
              <span className="finding-time">{f.time}</span>
              <span className={`severity-badge ${f.severity}`}>{f.severity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
