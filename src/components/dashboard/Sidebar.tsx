import { useState } from 'react';

interface SidebarProps {
  role: 'admin' | 'user';
  currentPath: string;
  userName: string;
}

const adminLinks = [
  { label: 'Overview', href: '/dashboard/admin', icon: 'fas fa-chart-line' },
  { label: 'Bookings', href: '/dashboard/admin/bookings', icon: 'fas fa-calendar-check' },
  { label: 'Tours', href: '/dashboard/admin/tours', icon: 'fas fa-ship' },
  { label: 'Contacts', href: '/dashboard/admin/contacts', icon: 'fas fa-envelope' },
  { label: 'Users', href: '/dashboard/admin/users', icon: 'fas fa-users' },
];

const userLinks = [
  { label: 'Overview', href: '/dashboard/user', icon: 'fas fa-chart-line' },
  { label: 'My Bookings', href: '/dashboard/user/bookings', icon: 'fas fa-calendar-check' },
  { label: 'Calendar', href: '/dashboard/user/calendar', icon: 'fas fa-calendar' },
  { label: 'My Tours', href: '/dashboard/user/tours', icon: 'fas fa-ship' },
];

export default function Sidebar({ role, currentPath, userName }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const links = role === 'admin' ? adminLinks : userLinks;

  const isActive = (href: string) => {
    if (href === '/dashboard/admin' || href === '/dashboard/user') {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Mobile toggle - hidden on desktop via CSS, shown on mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="sb-toggle"
        style={{
          position: 'fixed', top: 16, left: 16, zIndex: 100,
          width: 40, height: 40, borderRadius: 8,
          background: '#113D48', color: '#fff', border: 'none',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: '1.1rem',
        }}
      >
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
      </button>

      {/* Mobile overlay backdrop - always in DOM, visibility controlled by CSS */}
      <div
        className={`sb-overlay ${open ? 'sb-overlay-visible' : ''}`}
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          zIndex: 40, transition: 'opacity 0.3s ease',
        }}
      />

      <aside
        style={{
          width: 260, minHeight: '100vh', background: '#113D48',
          color: '#fff', display: 'flex', flexDirection: 'column',
          position: 'fixed', left: 0, top: 0, zIndex: 50,
        }}
        className={`sb-aside ${open ? 'sb-open' : ''}`}
      >
        {/* Logo */}
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff' }}>
            <img src="/assets/img/logo-white-clean.svg" alt="Rhodes Boat Tours" style={{ height: 36 }} />
          </a>
        </div>

        {/* Role badge */}
        <div style={{ padding: '16px 20px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: 20,
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
            background: role === 'admin' ? 'rgba(28,168,203,0.2)' : 'rgba(255,181,57,0.2)',
            color: role === 'admin' ? '#7DD4E8' : '#FFB539',
          }}>
            {role}
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0 12px' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 8, marginBottom: 4,
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                color: isActive(link.href) ? '#fff' : 'rgba(255,255,255,0.6)',
                background: isActive(link.href) ? 'rgba(28,168,203,0.15)' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              <i className={link.icon} style={{ width: 20, textAlign: 'center', fontSize: '0.85rem' }} />
              {link.label}
            </a>
          ))}
        </nav>

        {/* User info + logout */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>{userName}</div>
          <form method="POST" action="/api/auth/logout">
            <button
              type="submit"
              style={{
                width: '100%', padding: '10px', borderRadius: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <i className="fas fa-sign-out-alt" style={{ marginRight: 8 }} /> Sign Out
            </button>
          </form>
        </div>
      </aside>

      <style>{`
        /* Desktop: hide toggle and overlay */
        .sb-toggle { display: none; }
        .sb-overlay { display: none; }
        .sb-aside { transition: transform 0.3s ease; }

        @media (max-width: 768px) {
          .sb-toggle { display: flex !important; }
          .sb-aside { transform: translateX(-100%); }
          .sb-aside.sb-open { transform: translateX(0) !important; }
          .sb-overlay { display: none; pointer-events: none; opacity: 0; }
          .sb-overlay.sb-overlay-visible { display: block !important; pointer-events: auto; opacity: 1; }
        }
      `}</style>
    </>
  );
}
