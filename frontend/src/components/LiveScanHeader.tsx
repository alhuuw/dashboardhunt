import { Radar, StopCircle } from 'lucide-react'

export default function LiveScanHeader() {
  return (
    <div className="live-section">
      <div className="live-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'var(--gradient-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Radar size={22} color="#fff" />
          </div>
          <div>
            <div className="live-title">
              <h2>Aktivitas Scan (Live)</h2>
              <span className="live-dot" />
            </div>
            <div className="live-subtitle">Pemindaian berjalan secara real-time</div>
          </div>
        </div>

        <div className="live-meta">
          <div className="live-meta-item">
            <span className="meta-label">Waktu berjalan</span>
            <span className="meta-value">02:14:37</span>
          </div>
          <div className="live-meta-item">
            <span className="meta-label">Target</span>
            <span className="meta-value">800 host</span>
          </div>
          <div className="live-progress-bar">
            <span className="meta-label" style={{ marginRight: 4 }}>Progress</span>
            <div className="bar">
              <div className="fill" style={{ width: '42%' }} />
            </div>
            <span className="percent">42%</span>
          </div>
          <button className="btn-stop-scan">
            <StopCircle size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
            Hentikan Scan
          </button>
        </div>
      </div>
    </div>
  )
}
