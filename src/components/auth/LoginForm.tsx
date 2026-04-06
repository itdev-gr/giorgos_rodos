import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      window.location.href = data.redirect || '/dashboard';
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <a href="/">
          <img src="/assets/img/logo.svg" alt="Rhodes Boat Tours" style={{ height: 40, margin: '0 auto 24px' }} />
        </a>
        <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#113D48', marginBottom: 8 }}>
          Sign In
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#6b7c85' }}>Enter your credentials to access the dashboard</p>
      </div>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#991b1b', fontSize: '0.88rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#113D48', marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif' }}
            placeholder="you@example.com"
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#113D48', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif' }}
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: loading ? '#93c5d6' : '#1CA8CB',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: '0.9rem',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <a href="/" style={{ fontSize: '0.85rem', color: '#1CA8CB', textDecoration: 'none' }}>Back to website</a>
      </div>
    </div>
  );
}
