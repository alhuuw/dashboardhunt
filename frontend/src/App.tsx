import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatsRow from './components/StatsRow'
import LiveScanHeader from './components/LiveScanHeader'
import ActivityChart from './components/ActivityChart'
import TargetScan from './components/TargetScan'
import RecentFindings from './components/RecentFindings'
import LogTerminal from './components/LogTerminal'

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Topbar />
        <main className="main-content">
          <StatsRow />
          <LiveScanHeader />

          <div className="content-grid">
            <div>
              <ActivityChart />
              <div style={{ marginTop: 16 }}>
                <LogTerminal />
              </div>
            </div>
            <div className="right-panel">
              <TargetScan />
              <RecentFindings />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
