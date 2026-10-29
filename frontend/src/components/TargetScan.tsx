import { Crosshair, Plus, MoreHorizontal } from 'lucide-react'
import { targets } from '../data/mock'

export default function TargetScan() {
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>
          <Crosshair size={16} color="var(--accent-blue)" />
          Target Scan
        </h3>
        <button className="btn-add">
          <Plus size={12} /> Tambah Target
        </button>
      </div>

      <div className="target-summary">
        <div className="target-summary-item">
          <span className="ts-dot blue" />
          <span className="ts-value">800</span>
          <div className="ts-label">Total Target</div>
        </div>
        <div className="target-summary-item">
          <span className="ts-dot green" />
          <span className="ts-value">342</span>
          <div className="ts-label">Selesai</div>
        </div>
        <div className="target-summary-item">
          <span className="ts-dot yellow" />
          <span className="ts-value">458</span>
          <div className="ts-label">Dalam Proses</div>
        </div>
        <div className="target-summary-item">
          <span className="ts-dot red" />
          <span className="ts-value">4</span>
          <div className="ts-label">Error</div>
        </div>
      </div>

      <div className="target-list">
        {targets.map((t) => (
          <div className="target-item" key={t.host}>
            <span className={`target-dot ${t.dotClass}`} />
            <div className="target-info">
              <div className="target-host">{t.host}</div>
              <div className="target-status">{t.status}</div>
            </div>
            <div className="target-progress">
              <div className="target-bar">
                <div
                  className={`fill ${t.progress > 50 ? 'green' : t.progress > 20 ? 'blue' : 'yellow'}`}
                  style={{ width: `${t.progress}%` }}
                />
              </div>
              <span className="target-percent">{t.progress}%</span>
            </div>
            <span className="target-more">
              <MoreHorizontal size={14} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
