import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { trackFAQOpen, trackSectorLinkClick, trackBookAssessment } from '../../lib/analytics';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  goldBg: 'rgba(201,168,76,0.1)',
  cream: '#F5F1EA',
  textMuted: '#8a95b0',
  border: 'rgba(201,168,76,0.2)',
  borderSubtle: 'rgba(255,255,255,0.08)',
} as const;

const sectionLabel: React.CSSProperties = { color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' };
const h2Style: React.CSSProperties = { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: C.cream, lineHeight: 1.25, marginBottom: '1rem' };
const h3Style: React.CSSProperties = { fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: C.cream, marginBottom: '0.5rem' };
const pStyle: React.CSSProperties = { color: C.textMuted, lineHeight: 1.75, fontSize: '0.97rem', marginBottom: '1rem' };

const COS_TYPES = [
  {
    type: 'Defined CoS',
    when: 'When the worker is applying for a visa from outside the UK, or applying to switch from certain visa categories inside the UK.',
    key: 'Requires prior approval from the Home Office. You must request a specific number of defined CoS allocations in advance via the SMS. Each request is assessed individually.',
    validity: 'Valid for 3 months from the date of issue. The worker must make their visa application within this period.',
  },
  {
    type: 'Undefined CoS',
    when: 'When the worker is already in the UK on a visa that permits them to switch to the Skilled Worker route without leaving.',
    key: 'No prior Home Office approval needed. You can assign an undefined CoS directly from your annual CoS allocation.',
    validity: 'Valid for 3 months from the date of issue.',
  },
];

const STEPS = [
  { n: '01', title: 'Confirm your CoS allocation', body: 'Your sponsor licence comes with an initial CoS allocation. If you need more, you can request additional CoS via the SMS — undefined CoS at any time, defined CoS requiring individual approval.' },
  { n: '02', title: 'Identify the correct visa route', body: 'Confirm the worker needs a Skilled Worker CoS (most common), a Health and Care Worker CoS, an Intra-Company Transfer CoS, or another route. Each uses a different CoS type with different salary rules.' },
  { n: '03', title: 'Complete the CoS record in SMS', body: "Fill in the worker's details, the job title, SOC code, salary, and contract start date. Every field must be accurate — errors invalidate the CoS and require cancellation and reissue." },
  { n: '04', title: 'Assign and communicate the CoS reference', body: "Once assigned, the worker receives a unique CoS reference number. They enter this reference into their visa application. The CoS is not a physical document — it's an electronic record." },
  { n: '05', title: 'Monitor the CoS validity', body: 'The worker must apply for their visa before the CoS expires (3 months). SoftHire tracks expiry dates and follows up if applications are delayed.' },
];

const FAQS = [
  { q: 'What is a Certificate of Sponsorship?', a: "A Certificate of Sponsorship is not a physical certificate — it's an electronic record in the Home Office's Sponsor Management System that contains the details of the job you're offering to an overseas worker. The worker uses the CoS reference number as part of their visa application." },
  { q: 'How do I request a Certificate of Sponsorship allocation?', a: "Defined CoS allocations require a formal request through the SMS, where you justify how many you need and for which roles. The Home Office assesses each request. Undefined CoS are available from your existing allocation. SoftHire manages both types of allocation request as part of our service." },
  { q: 'Can I cancel a Certificate of Sponsorship once assigned?', a: "Yes. You can cancel a CoS via the SMS. You should cancel a CoS if the worker decides not to proceed, if the role changes materially, or if an error is discovered. Once cancelled, the worker cannot use it to apply for a visa. A new CoS must be issued." },
  { q: 'What happens if a Certificate of Sponsorship expires?', a: "If the worker doesn't apply for a visa before the CoS expires, the CoS becomes invalid. You will need to issue a new CoS, which consumes another allocation. SoftHire tracks all CoS expiry dates to prevent this." },
  { q: 'Can I use a Certificate of Sponsorship to extend a worker\'s visa?', a: "Yes. When a sponsored worker needs to extend their Skilled Worker visa, you assign a new CoS for the extension application. This follows the same process as the original assignment but typically uses an undefined CoS if the worker is already in the UK." },
  { q: 'What salary do I need to put on the Certificate of Sponsorship?', a: "The salary on the CoS must meet the current Skilled Worker salary threshold (£38,700 general threshold from April 2024, or the going rate for the occupation — whichever is higher). Lower rates may apply for shortage occupations, new entrants, or Health and Care Workers. Putting an incorrect salary on the CoS is a serious compliance error." },
];

export default function CertificateOfSponsorshipPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Certificate of Sponsorship (CoS) Explained | UK Employer Guide | SoftHire"
        description="Understand how UK Certificates of Sponsorship work — defined vs undefined CoS, how to assign them, validity periods, and common errors. Managed by IAA-regulated solicitors."
        path="/certificate-of-sponsorship"
        breadcrumb={[{ name: 'Certificate of Sponsorship' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Certificate of Sponsorship Management',
          description: 'Managed Certificate of Sponsorship assignment service for UK employers, including defined and undefined CoS, allocation requests, and error correction.',
          url: 'https://www.softhire.co.uk/certificate-of-sponsorship',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Employer sponsorship guide</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Certificate of Sponsorship (CoS)
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              A Certificate of Sponsorship is the key document your overseas worker needs to apply for a UK visa. We manage CoS assignments, allocation requests, and validity tracking — so errors and delays don't derail your hiring timeline.
            </p>
            <a
              href="/#contact"
              style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
              onClick={() => trackBookAssessment('hero_cos')}
            >
              Get help with your CoS
            </a>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Defined & undefined CoS', 'Allocation requests', 'Salary threshold verification', 'SOC code confirmation', 'Expiry tracking'].map((t) => (
              <span key={t} style={{ color: C.textMuted, fontSize: '0.83rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.gold }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── CoS Types ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Types of CoS</div>
            <h2 style={h2Style}>Defined vs undefined Certificate of Sponsorship</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              {COS_TYPES.map(({ type, when, key, validity }) => (
                <div key={type} style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '1.75rem' }}>
                  <h3 style={{ ...h3Style, color: C.gold }}>{type}</h3>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ color: C.cream, fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>When to use</div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{when}</p>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ color: C.cream, fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>Key requirement</div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{key}</p>
                  </div>
                  <div>
                    <div style={{ color: C.cream, fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>Validity</div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{validity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to assign ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Assignment process</div>
            <h2 style={h2Style}>How SoftHire assigns a Certificate of Sponsorship</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ background: C.navy, border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', padding: '1.75rem' }}>
                  <div style={{ color: C.gold, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.75rem' }}>{s.n}</div>
                  <h3 style={h3Style}>{s.title}</h3>
                  <p style={{ ...pStyle, marginBottom: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={sectionLabel}>FAQs</div>
            <h2 style={h2Style}>Frequently asked questions</h2>
            <div style={{ marginTop: '1.5rem' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.borderSubtle}` }}>
                  <button
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'certificate_of_sponsorship'); }}
                    style={{ width: '100%', background: 'none', border: 'none', color: C.cream, textAlign: 'left', padding: '1.25rem 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontFamily: 'inherit', fontSize: '0.97rem', fontWeight: 600 }}
                  >
                    {f.q}
                    <span style={{ color: C.gold, fontSize: '1.2rem', flexShrink: 0 }}>{openFAQ === i ? '−' : '+'}</span>
                  </button>
                  {openFAQ === i && <p style={{ ...pStyle, paddingBottom: '1.25rem' }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '80px 5%', textAlign: 'center', background: C.navyMid }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={sectionLabel}>Get started</div>
            <h2 style={h2Style}>Need a Certificate of Sponsorship assigned?</h2>
            <p style={pStyle}>SoftHire manages CoS assignments for new and existing sponsor licence holders. We verify the salary threshold, SOC code, and all CoS fields before submission.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_cos')}>
              Book a free consultation
            </a>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section style={{ padding: '80px 5%', borderTop: `1px solid ${C.borderSubtle}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Also on SoftHire</div>
            <h2 style={h2Style}>Related services</h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { to: '/sponsor-licence-application', label: 'Sponsor Licence Application' },
                { to: '/skilled-worker-visa-employer', label: 'Skilled Worker Visa' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/sponsor-licence-cost', label: 'Sponsor Licence Costs' },
                { to: '/sponsor-licence-checklist', label: 'Application Checklist' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'certificate_of_sponsorship')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
