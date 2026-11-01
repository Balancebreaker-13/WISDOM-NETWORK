export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="brand-row">
          <div className="brand-mark">W</div>
          <span>WISDOM NETWORK</span>
        </div>

        <h1>Join the network</h1>
        <p>Build knowledge, trust, and meaningful collaboration.</p>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit" className="primary-button full-width">Sign in</button>
        </form>

        <a href="/dashboard" className="link-button">Continue to dashboard</a>
      </div>
    </main>
  );
}
