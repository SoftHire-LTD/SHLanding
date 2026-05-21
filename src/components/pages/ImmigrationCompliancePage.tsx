import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackFAQOpen, trackSectorLinkClick, trackAnchorClick } from '../../lib/analytics';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  cream: '#F5F1EA',
  textMuted: '#8a95b0',
  border: 'rgba(201,168,76,0.2)',
} as const;

const sectionLabel: React.CSSProperties = {
  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: C.gold, marginBottom: '16px',
};
const h2Style: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
  fontWeight: 700, color: C.cream, lineHeight: 1.2, marginBottom: '20px',
};
const h3Style: React.CSSProperties = {
  fontSize: '1.1rem', fontWeight: 600, color: C.cream, marginBottom: '8px',
};
const pStyle: React.CSSProperties = { color: C.textMuted, marginBottom: '16px' };
const cardStyle: React.CSSProperties = {
  background: C.navy, border: `1px solid ${C.border}`,
  borderRadius: '8px', padding: '32px 28px',
};

const FAQS = [
  {
    q: 'Are recruitment agencies liable for right to work breaches?',
    a: 'Yes. Where an agency supplies workers to a client, the agency typically bears primary responsibility for right to work checks at the point of placement. A civil penalty of up to £60,000 per illegal worker applies where checks were not conducted correctly, regardless of what the client represents.',
  },
  {
    q: 'What right to work checks must recruitment agencies carry out?',
    a: 'Before placing a worker, agencies must confirm right to work in the UK using one of three methods: manual document checks (using prescribed lists A and B documents), online checks via the Home Office Employer Checking Service share code, or digital checks via a certified Identity Service Provider (IDSP) for British and Irish citizens.',
  },
  {
    q: 'Can a recruitment agency hold a sponsor licence?',
    a: "Yes, but with restrictions. Agencies can hold a Worker sponsor licence to employ their own staff directly. However, agencies cannot use their own licence to sponsor workers who will be supplied to end-clients — the end client must hold the relevant licence. Attempting to circumvent this is a serious breach of sponsorship duties.",
  },
  {
    q: 'What digital right to work tools are acceptable?',
    a: 'Since April 2022, employers and agencies can use certified Identity Service Providers (IDSPs) for digital right to work checks on British and Irish citizens using their passport. For other nationalities, online checks using the Home Office share code system are required. Manual document checks remain valid across all nationalities.',
  },
  {
    q: "What should an agency do if a placed worker's visa expires?",
    a: "If you become aware that a worker's leave to remain has expired or will expire, you must stop supplying them and check their status immediately. If there is a statutory excuse from a previous compliant check, this provides a defence — but agencies should have follow-up monitoring processes in place for workers on time-limited visas.",
  },
  {
    q: 'Does right to work compliance apply to contractors and self-employed individuals?',
    a: 'Yes. Where an agency engages or supplies individuals under any contractual arrangement, they must confirm that person has the right to work in the UK. The structure of the engagement does not remove the compliance obligation.',
  },
];

export default function ImmigrationCompliancePage() {
  useEffect(() => {
    document.title =
      'Immigration Compliance for Recruitment Agencies | Right to Work & Sponsor Licence | SoftHire';
  }, []);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
          Recruitment &amp; Staffing · Compliance
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
          Immigration Compliance for<br />
          <em style={{ color: C.gold, fontStyle: 'italic' }}>Recruitment Agencies</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
          Placing the wrong candidate — or missing a right to work check — can cost your agency up to
          £60,000 per worker. SoftHire keeps your compliance infrastructure airtight.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
            onClick={() => trackCTAClick('book_consultation', 'hero_immigration_compliance')}
          >
            Book a Free Consultation
          </Link>
          <a href="#services" style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => trackAnchorClick('see_services', 'immigration_compliance')}>
            See our services →
          </a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          {['IAA-Regulated', '97% Success Rate', 'Right to Work Compliance', 'Candidate Visa Screening', 'Fixed-Fee'].map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: C.gold }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Risk / The Stakes ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>The Stakes</div>
          <h2 style={h2Style}>Immigration non-compliance is an existential risk for agencies</h2>
          <p style={{ ...pStyle, maxWidth: '680px' }}>
            Recruitment agencies occupy a unique and exposed position in the immigration compliance
            landscape. As the entity placing workers, you carry primary legal responsibility —
            regardless of what the client told you.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {[
              { stat: '£60,000', desc: 'Maximum civil penalty per illegal worker where right to work checks were not carried out correctly.' },
              { stat: '5 years', desc: 'Maximum custodial sentence for knowing facilitation of illegal working (criminal offence for directors).' },
              { stat: 'Public', desc: 'Employers receiving civil penalties are published on the Home Office public register — damaging to client relationships.' },
              { stat: 'Licence', desc: 'Agencies holding Gangmasters & Labour Abuse Authority (GLAA) licences risk revocation for immigration breaches.' },
            ].map(({ stat, desc }) => (
              <div key={stat} style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '24px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: C.gold, marginBottom: '8px' }}>{stat}</div>
                <p style={{ color: C.textMuted, fontSize: '0.9rem', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Services</div>
          <h2 style={h2Style}>What SoftHire does for recruitment agencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { icon: '✅', title: 'Right to Work Compliance Audit', desc: 'A full review of your current right to work check processes — identifying gaps, non-compliant documentation and systemic risks before they become penalties.' },
              { icon: '🔎', title: 'Candidate Immigration Screening', desc: "Pre-placement screening to determine each candidate's immigration status, visa conditions and right to work — so your consultants know the position before they make an introduction." },
              { icon: '📄', title: 'Compliance Policy & Process Design', desc: "Building right to work procedures, training materials and internal escalation frameworks tailored to your agency's size and sector specialisms." },
              { icon: '🏢', title: 'Sponsor Licence for Agency Own-Staff', desc: 'Where your agency directly employs international staff, we manage your Worker sponsor licence application, CoS allocation and ongoing compliance.' },
              { icon: '🤝', title: 'Client Immigration Advisory', desc: 'Supporting your clients with sponsor licence applications and compliance — delivered as a white-label or co-branded service under your agency brand.' },
              { icon: '🧾', title: 'Digital Right to Work Check Guidance', desc: 'Advising on compliant use of Identity Service Providers (IDSPs) and the Home Office online checking service for all candidate categories.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{icon}</div>
                <h3 style={h3Style}>{title}</h3>
                <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
            <div>
              <div style={sectionLabel}>Who We Work With</div>
              <h2 style={h2Style}>Built for agencies of every size and sector</h2>
              <p style={pStyle}>
                Whether you're a boutique technology recruiter or a large-scale industrial staffing
                firm, immigration compliance touches every placement you make. SoftHire adapts to
                your volume and sector.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Technology and engineering recruiters',
                  'Healthcare and nursing agencies',
                  'Construction and trades staffing firms',
                  'Hospitality and catering recruiters',
                  'Executive search firms',
                  'Industrial and logistics staffing companies',
                  'GLAA-licensed labour providers',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: C.cream, fontSize: '0.95rem' }}>
                    <span style={{ color: C.gold, flexShrink: 0, marginTop: '2px' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={sectionLabel}>How We Work</div>
              <h2 style={h2Style}>Retained, project-based or on-demand</h2>
              <p style={pStyle}>SoftHire works with agencies on whatever model fits your needs:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Retained:', desc: 'Ongoing compliance support, candidate screening volume and policy maintenance on a monthly retainer' },
                  { label: 'Project-based:', desc: 'One-off compliance audit, policy redesign or sponsor licence application' },
                  { label: 'On-demand:', desc: 'Complex individual candidate queries, urgent visa status checks or time-sensitive client advisory' },
                ].map(({ label, desc }) => (
                  <li key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: C.cream, fontSize: '0.95rem' }}>
                    <span style={{ color: C.gold, flexShrink: 0, marginTop: '2px' }}>✦</span>
                    <span><strong style={{ color: C.cream }}>{label}</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>FAQ</div>
          <h2 style={h2Style}>Immigration compliance questions for agencies</h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button
                  onClick={() => { if (openFAQ !== i) trackFAQOpen(faq.q, 'immigration_compliance'); setOpenFAQ(openFAQ === i ? null : i); }}
                  style={{ width: '100%', textAlign: 'left', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                  aria-expanded={openFAQ === i}
                >
                  <span style={{ fontWeight: 600, color: C.cream, fontSize: '1rem' }}>{faq.q}</span>
                  <span style={{ color: C.gold, flexShrink: 0, fontSize: '1.4rem', lineHeight: 1 }}>{openFAQ === i ? '−' : '+'}</span>
                </button>
                {openFAQ === i && (
                  <div style={{ paddingBottom: '24px', color: C.textMuted, fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '80px 5%', textAlign: 'center' }}>
        <div style={{ ...sectionLabel, textAlign: 'center' }}>Get Started</div>
        <h2 style={{ ...h2Style, textAlign: 'center' }}>
          Don't let a compliance gap cost you a client — or your licence.
        </h2>
        <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Book a free consultation. We'll review your current processes and show you exactly where
          your risk exposure is — in plain English, with a clear plan to fix it.
        </p>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
          onClick={() => trackCTAClick('book_consultation', 'cta_band_immigration_compliance')}
        >
          Book Free Consultation
        </Link>
      </div>

      {/* ── Related Links ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Also on SoftHire</div>
          <h2 style={h2Style}>Other sponsor licence services</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { to: '/sponsor-licence-care-homes', label: 'Sponsor Licence for Care Homes' },
              { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
              { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
              { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                onClick={() => trackSectorLinkClick(to, 'immigration_compliance')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
