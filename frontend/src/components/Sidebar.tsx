import {
  LayoutDashboard,
  Search,
  ClipboardList,
  FileText,
  Server,
  Tag,
  FileBarChart,
  Settings,
  RefreshCw,
  Crosshair,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', badge: '36', active: true },
  { icon: Search, label: 'Temuan' },
  { icon: ClipboardList, label: 'Hasil Scan' },
  { icon: FileText, label: 'Evidence' },
  { icon: Server, label: 'Host' },
  { icon: Tag, label: 'Label' },
  { icon: FileBarChart, label: 'Report' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Crosshair size={18} color="#fff" />
        </div>
        <div className="logo-text">
          <h1>Hunt Dashboard</h1>
          <span>Vulnerability Tracking &amp; Recon</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={item.active ? 'active' : ''}
            onClick={(e) => e.preventDefault()}
          >
            <item.icon size={18} />
            {item.label}
            {item.badge && <span className="badge">{item.badge}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="settings-link" onClick={(e) => e.preventDefault()}>
          <Settings size={18} />
          Pengaturan
        </a>
        <div className="sidebar-update">
          <div className="update-avatar">
            <RefreshCw size={14} color="#fff" />
          </div>
          <div className="update-info">
            <div className="label">Update</div>
            <div className="date">27-Oct-2026</div>
            <div className="date">07:35:03 WIB</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
