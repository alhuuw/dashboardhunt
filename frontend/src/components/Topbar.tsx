import { Search, Settings, RefreshCw, Bell, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={14} className="search-icon" />
        <input
          type="text"
          placeholder="Cari host, path, label, IP, atau keyword..."
        />
        <span className="search-shortcut">⌘ K</span>
      </div>

      <div className="topbar-actions">
        <button title="Pengaturan">
          <Settings size={16} />
        </button>
        <button title="Refresh">
          <RefreshCw size={16} />
        </button>
        <button title="Notifikasi" style={{ position: 'relative' }}>
          <Bell size={16} />
          <span
            style={{
              position: 'absolute',
              top: 6,
              right: 6,
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--severity-critical)',
            }}
          />
        </button>
      </div>

      <div className="topbar-user">
        <span className="online-dot" />
        <div className="user-avatar">A</div>
        <span className="user-name">aktif - disdukcapil.padang.go.id</span>
        <ChevronDown size={14} color="var(--text-muted)" />
      </div>
    </header>
  )
}
