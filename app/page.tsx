const insights = [
  {
    title: 'How communities turn tacit knowledge into action',
    author: 'Aiden Moss',
    tags: ['knowledge', 'community', 'systems'],
    score: 96,
  },
  {
    title: 'Designing trust loops for collaborative intelligence',
    author: 'Leah Chen',
    tags: ['trust', 'governance', 'design'],
    score: 91,
  },
  {
    title: 'Why contribution incentives matter in social ecosystems',
    author: 'Samir Idris',
    tags: ['economics', 'incentives', 'growth'],
    score: 88,
  },
];

const signals = [
  'Community trust is rising among contributors',
  'Peer review is reducing low-quality noise',
  'Members are increasingly sharing actionable frameworks',
  'Knowledge discovery is becoming more strategic and less fragmented',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-row">
          <div className="brand-mark">W</div>
          <span>WISDOM NETWORK</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#mission">Mission</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#signals">Signals</a>
          <a href="/login" className="nav-link-button">Join</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Knowledge • Contribution • Trust</p>
          <h1>Build a living intelligence network.</h1>
          <p className="lead">
            WISDOM NETWORK connects people, insight, and systems into a sustainable ecosystem for learning,
            collaboration, and meaningful action.
          </p>

          <div className="cta-row">
            <a href="/dashboard" className="primary-button">Explore the platform</a>
            <a href="#mission" className="secondary-button">Learn the mission</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Network and ecosystem overview">
          <div className="node node-one">Ideas</div>
          <div className="node node-two">People</div>
          <div className="node node-three">Tools</div>
          <div className="node node-four">Impact</div>
          <div className="node node-center">Wisdom</div>
          <div className="connector c1" />
          <div className="connector c2" />
          <div className="connector c3" />
          <div className="connector c4" />
          <div className="connector c5" />
        </div>
      </section>

      <section id="mission" className="info-block">
        <div className="section-header">
          <p className="eyebrow">Mission</p>
          <h2>Turn collective insight into real-world momentum.</h2>
        </div>

        <div className="card-grid">
          <article className="feature-card">
            <h3>Share insight</h3>
            <p>Collect and distribute practical knowledge that helps people learn, decide, and act.</p>
          </article>
          <article className="feature-card">
            <h3>Build trust</h3>
            <p>Use review, contribution, and transparent governance to sustain quality and credibility.</p>
          </article>
          <article className="feature-card">
            <h3>Create sustainable value</h3>
            <p>Reward participation through meaningful exchange, access, and community-led collaboration.</p>
          </article>
        </div>
      </section>

      <section id="ecosystem" className="info-block alt">
        <div className="section-header">
          <p className="eyebrow">Ecosystem</p>
          <h2>Designed for adaptive, self-regulating growth.</h2>
        </div>

        <div className="pill-grid">
          <span>Knowledge capture</span>
          <span>Peer review</span>
          <span>Reputation loops</span>
          <span>Community circles</span>
          <span>Governance</span>
          <span>Value exchange</span>
        </div>
      </section>

      <section id="signals" className="signal-panel">
        <div className="section-header left-align">
          <p className="eyebrow">Live signals</p>
          <h2>Momentum is building.</h2>
        </div>

        <div className="signal-layout">
          <div className="signal-list">
            {signals.map((signal) => (
              <div className="signal-item" key={signal}>
                <span className="signal-dot" />
                <p>{signal}</p>
              </div>
            ))}
          </div>

          <div className="insight-list">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.title}>
                <div className="insight-topline">
                  <span>{insight.author}</span>
                  <strong>{insight.score}</strong>
                </div>
                <h3>{insight.title}</h3>
                <div className="tag-row">
                  {insight.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
