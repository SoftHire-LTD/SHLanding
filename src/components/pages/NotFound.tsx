import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home } from 'lucide-react';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  cream: '#F5F1EA',
  textMuted: '#8a95b0',
  borderSubtle: 'rgba(255,255,255,0.08)',
  border: 'rgba(201,168,76,0.25)',
};

const QUICK_LINKS = [
  { to: '/sponsor-licence-application', label: 'Sponsor Licence Application' },
  { to: '/skilled-worker-visa-employer', label: 'Skilled Worker Visa for Employers' },
  { to: '/sponsor-licence-compliance', label: 'Compliance Services' },
  { to: '/blog', label: 'Immigration Blog' },
  { to: '/', label: 'Homepage' },
];

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | SoftHire</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div
        style={{
          minHeight: '100vh',
          background: C.navy,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5% 1.5rem',
          textAlign: 'center',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 'clamp(5rem, 15vw, 8rem)',
            fontWeight: 800,
            color: C.gold,
            lineHeight: 1,
            fontFamily: "'Syne', sans-serif",
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            color: C.cream,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            marginBottom: '1rem',
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            color: C.textMuted,
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            fontSize: '1rem',
          }}
        >
          The page you're looking for doesn't exist or has moved. Here are some useful links to
          get you back on track.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
            width: '100%',
            maxWidth: '380px',
            marginBottom: '2rem',
          }}
        >
          {QUICK_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.875rem 1.25rem',
                background: C.navyMid,
                border: `1px solid ${C.borderSubtle}`,
                borderRadius: '8px',
                color: C.cream,
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.border)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.borderSubtle)}
            >
              {label}
              <ArrowRight style={{ width: '1rem', height: '1rem', color: C.gold }} />
            </Link>
          ))}
        </div>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: C.gold,
            color: C.navy,
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}
        >
          <Home style={{ width: '1rem', height: '1rem' }} />
          Back to Home
        </Link>
      </div>
    </>
  );
}
