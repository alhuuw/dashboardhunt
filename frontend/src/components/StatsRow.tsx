import {
  Shield,
  AlertOctagon,
  AlertTriangle,
  AlertCircle,
  Info,
  Bug,
} from 'lucide-react'
import { severityStats } from '../data/mock'

const iconMap: Record<string, typeof Shield> = {
  total: Bug,
  critical: AlertOctagon,
  high: AlertTriangle,
  medium: AlertCircle,
  low: Shield,
  info: Info,
}

export default function StatsRow() {
  return (
    <div className="stats-row">
      {severityStats.map((stat) => {
        const Icon = iconMap[stat.color] || Shield
        return (
          <div className="stat-card" key={stat.label}>
            <div className={`stat-icon ${stat.color}`}>
              <Icon size={20} />
            </div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        )
      })}
      <div className="scan-progress-card">
        <div className="scan-progress-ring">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="var(--border-color)"
              strokeWidth="4"
            />
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="url(#progress-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${0.5 * 2 * Math.PI * 20} ${2 * Math.PI * 20}`}
            />
            <defs>
              <linearGradient id="progress-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--accent-blue)" />
                <stop offset="100%" stopColor="var(--accent-purple)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="ring-text">50%</span>
        </div>
        <div className="scan-progress-info">
          <div className="label">Scan Berjalan</div>
          <div className="target">dari 8 target</div>
        </div>
      </div>
    </div>
  )
}
