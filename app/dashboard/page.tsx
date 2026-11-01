const dashboardItems = [
  { label: 'Featured insights', value: '24' },
  { label: 'Active contributors', value: '318' },
  { label: 'Verified communities', value: '11' },
  { label: 'Trust score', value: '92%' },
];

const activity = [
  { title: 'Open research challenge: resilient knowledge systems', author: 'Maya Elson', time: '2h ago' },
  { title: 'Peer review workflow draft is live', author: 'Omar Kline', time: '4h ago' },
  { title: 'Community circle on ethical AI launched', author: 'Nia Brooks', time: '1d ago' },
  { title: 'Treasury allocation discussion is open', author: 'Theo Marsh', time: '2d ago' },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">W</div>
          <span>WISDOM NETWORK</span>
        </div>

        <nav className="sidebar-nav">
          <a href="/dashboard">Overview</a>
          <a href="/">Home</a>
          <a href="/login">Sign in</a>
        </nav>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Collective intelligence overview</h1>
          </div>
          <a href="/" className="primary-button small-button">Back to home</a>
        </header>

        <div className="stats-grid">
          {dashboardItems.map((item) => (
            <div className="stat-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="dashboard-panels">
          <div className="panel">
            <h2>Network activity</h2>
            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.author}</small>
                  </div>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h2>Working circles</h2>
            <div className="circle-list">
              <span>Research & synthesis</span>
              <span>Ethics & alignment</span>
              <span>Technology & tools</span>
              <span>Impact & outcomes</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
