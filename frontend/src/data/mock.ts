export const severityStats = [
  { label: 'Total Temuan', value: 234, color: 'total' },
  { label: 'Critical', value: 7, color: 'critical' },
  { label: 'High', value: 107, color: 'high' },
  { label: 'Medium', value: 36, color: 'medium' },
  { label: 'Low', value: 72, color: 'low' },
  { label: 'Info', value: 12, color: 'info' },
]

export const miniStats = [
  { label: 'Total Host', value: '800', icon: 'blue' },
  { label: 'Host Discan', value: '342', icon: 'cyan' },
  { label: 'Progress', value: '42%', icon: 'green' },
  { label: 'Host Aktif', value: '28', icon: 'purple' },
  { label: 'Vulnerability', value: '12', icon: 'red' },
]

export const chartData = Array.from({ length: 25 }, (_, i) => {
  const hour = (6 + i) % 24
  const label = `${String(hour).padStart(2, '0')}:00`
  const base = Math.sin(i * 0.3) * 20 + 50
  return {
    time: label,
    hostDiscan: Math.round(base + Math.random() * 30),
    hostAktif: Math.round(base * 0.4 + Math.random() * 15),
    temuanBaru: Math.round(Math.random() * 10 + 2),
  }
})

export const targets = [
  { host: 'absenpiket.smknsituraja.sch.id', status: 'Scanning...', progress: 72, dotClass: 'scanning' },
  { host: 'banjarbarukota.go.id', status: 'Scanning...', progress: 64, dotClass: 'scanning' },
  { host: 'cpanel.diskominfo.tapinkab.go.id', status: 'Scanning...', progress: 31, dotClass: 'scanning' },
  { host: 'ekinerja.langkatkab.go.id', status: 'Pending...', progress: 0, dotClass: 'pending' },
]

export const findings = [
  { host: 'absenpiket.smknsituraja.sch.id', path: '/db.sql', time: '13:19', severity: 'critical' as const },
  { host: 'banjarbarukota.go.id', path: '/.env', time: '12:48', severity: 'high' as const },
  { host: 'cpanel.diskominfo.tapinkab.go.id', path: '/.svn/entries', time: '11:02', severity: 'medium' as const },
  { host: 'ekinerja.langkatkab.go.id', path: '/.git/HEAD', time: '10:41', severity: 'high' as const },
  { host: 'mail.depo100-bonus100.pn-dumai.go.id', path: '/.env', time: '09:12', severity: 'low' as const },
]

export const logEntries = [
  { time: '07:35:12', level: 'info', id: '234/800', msg: 'Scanning 103.148.72.10 ...' },
  { time: '07:35:12', level: 'info', id: '234/800', msg: 'Resolving absenpiket.smknsituraja.sch.id ... 200 OK', highlight: '(93ms)', highlightClass: 'highlight-green' },
  { time: '07:35:13', level: 'high', id: '235/800', msg: '103.148.72.10 - /db.sql (HTTP 200)', isAlert: true },
  { time: '07:35:14', level: 'info', id: '236/800', msg: 'Scanning banjarbarukota.go.id ...' },
  { time: '07:35:14', level: 'info', id: '236/800', msg: 'GET /.env - 200 OK', highlight: '(124ms)', highlightClass: 'highlight-green' },
  { time: '07:35:15', level: 'critical', id: '236/800', msg: 'banjarbarukota.go.id - /.env (Sensitive Data Exposed)', isAlert: true },
  { time: '07:35:16', level: 'info', id: '237/800', msg: 'Scanning cpanel.diskominfo.tapinkab.go.id ...' },
  { time: '07:35:17', level: 'medium', id: '237/800', msg: 'cpanel.diskominfo.tapinkab.go.id - /.svn/entries (HTTP 200)' },
  { time: '07:35:18', level: 'info', id: '238/800', msg: 'Scanning ekinerja.langkatkab.go.id ...' },
  { time: '07:35:19', level: 'high', id: '238/800', msg: 'ekinerja.langkatkab.go.id - /.git/HEAD (Repository Exposed)' },
  { time: '07:35:20', level: 'info', id: '239/800', msg: 'Checking open ports ... 22/tcp closed, 80/tcp open, 443/tcp open' },
  { time: '07:35:21', level: 'low', id: '239/800', msg: 'mail.depo100-bonus100.pn-dumai.go.id - Server header disclosure' },
  { time: '07:35:22', level: 'info', id: '240/800', msg: 'Scanning rylva.my.id ...' },
  { time: '07:35:23', level: 'info', id: '240/800', msg: 'GET /login.php - 302 Found', highlight: '(198ms)', highlightClass: 'highlight-green' },
  { time: '07:35:25', level: 'info', id: '241/800', msg: 'Scanning api.xxx.go.id ...' },
]
