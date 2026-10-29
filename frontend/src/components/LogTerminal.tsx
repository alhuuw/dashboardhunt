import { Search, Pause, Trash2, Maximize2 } from 'lucide-react'
import { logEntries } from '../data/mock'

export default function LogTerminal() {
  return (
    <div className="log-section">
      <div className="log-header">
        <div className="log-title">
          Log Scan (Live) <span className="live-dot" />
        </div>
        <div className="log-controls">
          <select defaultValue="all">
            <option value="all">Semua Level</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="info">Info</option>
          </select>
          <div style={{ position: 'relative' }}>
            <Search
              size={12}
              style={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
            <input
              className="log-search"
              type="text"
              placeholder="Cari di log..."
            />
          </div>
          <button className="log-control-btn" title="Pause">
            <Pause size={13} />
          </button>
          <button className="log-control-btn" title="Clear">
            <Trash2 size={13} />
          </button>
          <button className="log-control-btn" title="Fullscreen">
            <Maximize2 size={13} />
          </button>
        </div>
      </div>

      <div className="log-terminal">
        {logEntries.map((entry, i) => (
          <div className="log-line" key={i}>
            <span className="log-time">[{entry.time}]</span>
            <span className={`log-level ${entry.level}`}>
              {entry.level.toUpperCase()}
            </span>
            <span className="log-msg">
              [{entry.id}] {entry.msg}
              {entry.highlight && (
                <span className={entry.highlightClass}> {entry.highlight}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
