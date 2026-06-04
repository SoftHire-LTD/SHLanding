import { useState, useEffect } from 'react';

const CONSENT_KEY = 'softhire_cookie_consent';

function grantAnalytics() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
}

/**
 * GDPR/PECR cookie consent banner.
 *
 * - Checks localStorage on mount.
 * - If previously accepted, immediately upgrades GA4 consent to 'granted'.
 * - If not yet decided, renders a bottom banner.
 * - Accept  → stores 'accepted', grants GA4 analytics_storage.
 * - Decline → stores 'declined', GA4 stays denied.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      grantAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    grantAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#0f1e45',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        padding: '1rem 1.5rem',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.35)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: '0.875rem',
            margin: 0,
            flex: '1 1 300px',
            lineHeight: 1.6,
          }}
        >
          We use analytics cookies to understand how visitors use our site and to improve your
          experience. You can accept or decline below. See our{' '}
          <a
            href="/privacy-policy.pdf"
            style={{ color: '#C9A84C', textDecoration: 'underline' }}
          >
            Privacy Policy
          </a>{' '}
          for details.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={handleDecline}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.6)',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'inherit',
            }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            style={{
              background: '#C9A84C',
              border: 'none',
              color: '#0B1736',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 700,
              fontFamily: 'inherit',
            }}
          >
            Accept Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
