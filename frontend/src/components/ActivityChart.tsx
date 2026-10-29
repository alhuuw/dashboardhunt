import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import {
  Monitor,
  Wifi,
  TrendingUp,
  Users,
  Bug,
  ChevronDown,
} from 'lucide-react'
import { chartData, miniStats } from '../data/mock'

const miniIcons: Record<string, typeof Monitor> = {
  blue: Monitor,
  cyan: Wifi,
  green: TrendingUp,
  purple: Users,
  red: Bug,
}

const timeFilters = ['1 Jam', '6 Jam', '24 Jam', '7 Hari']

export default function ActivityChart() {
  const [activeTab, setActiveTab] = useState('Grafik')
  const [activeTime, setActiveTime] = useState('24 Jam')

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div className="tabs-row" style={{ marginBottom: 0 }}>
          {['Grafik', 'Log Terminal'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          <div className="dropdown-trigger">
            Semua Host <ChevronDown size={14} />
          </div>
          <div className="time-filter">
            {timeFilters.map((t) => (
              <button
                key={t}
                className={`time-btn ${activeTime === t ? 'active' : ''}`}
                onClick={() => setActiveTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mini-stats">
        {miniStats.map((s) => {
          const Icon = miniIcons[s.icon] || Monitor
          return (
            <div className="mini-stat" key={s.label}>
              <div className={`mini-icon ${s.icon}`}>
                <Icon size={16} />
              </div>
              <div>
                <div className="mini-value">{s.value}</div>
                <div className="mini-label">{s.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="gradDiscan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradAktif" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradTemuan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border-color)"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              axisLine={{ stroke: 'var(--border-color)' }}
              tickLine={false}
              interval={3}
            />
            <YAxis
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 8,
                fontSize: 12,
                color: 'var(--text-primary)',
              }}
              labelStyle={{ color: 'var(--text-secondary)', marginBottom: 4 }}
              itemStyle={{ padding: '2px 0' }}
            />
            <Area
              type="monotone"
              dataKey="hostDiscan"
              name="Host discan"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#gradDiscan)"
              dot={false}
              activeDot={{ r: 4, fill: '#8b5cf6' }}
            />
            <Area
              type="monotone"
              dataKey="hostAktif"
              name="Host aktif"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#gradAktif)"
              dot={false}
              activeDot={{ r: 4, fill: '#22c55e' }}
            />
            <Area
              type="monotone"
              dataKey="temuanBaru"
              name="Temuan baru"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#gradTemuan)"
              dot={false}
              activeDot={{ r: 4, fill: '#ef4444' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
