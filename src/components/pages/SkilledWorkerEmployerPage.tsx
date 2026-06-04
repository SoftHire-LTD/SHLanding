import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { trackFAQOpen, trackSectorLinkClick, trackAnchorClick, trackBookAssessment } from '../../lib/analytics';

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

const STEPS = [
  { n: '01', title: 'Obtain a sponsor licence', body: "To sponsor a Skilled Worker you must first hold a valid Worker sponsor licence. If you don't yet have one, SoftHire handles the full application on your behalf." },
  { n: '02', title: 'Confirm the role meets requirements', body: 'The job must appear on the Skilled Worker eligible occupations list and meet the current salary threshold (£38,700 as of April 2024, or the going rate for the occupation — whichever is higher). Health & Care Worker routes have different thresholds.' },
  { n: '03', title: 'Request a Certificate of Sponsorship', body: 'You assign a CoS to the worker via the SMS (Sponsor Management System). The CoS contains details of the role, salary, and employment start date. The worker uses it to make their visa application.' },
  { n: '04', title: 'Worker applies for their visa', body: "Once you've assigned the CoS, the worker applies online to UKVI. Typical processing is 3 weeks from inside the UK, 3 weeks from outside. SoftHire tracks the application on your behalf." },
  { n: '05', title: 'Worker arrives & compliance begins', body: 'Before the worker starts, you must complete a right-to-work check on their Biometric Residence Permit or digital status. Ongoing reporting and record-keeping obligations begin immediately.' },
];

const FAQS = [
  { q: 'What is the salary threshold for the Skilled Worker route in 2024/2025?', a: "From April 2024, the general Skilled Worker salary threshold increased to £38,700 per year (or the going rate for the occupation code — whichever is higher). Shortage occupation roles, new entrant roles, and Health & Care Workers have different rates. SoftHire's assessment confirms the exact threshold for your vacancy." },
  { q: 'What is the Immigration Skills Charge (ISC)?', a: 'The ISC is a levy paid by the sponsor (not the worker) when a CoS is assigned. The current rate is £1,000 per year (pro-rated to the CoS duration) for small businesses and charities, and £5,000 per year for medium and large businesses. Health and Care Worker visa sponsors are exempt.' },
  { q: "Can I pass the visa costs on to the worker?", a: 'You can pass on the visa application fee and the Immigration Health Surcharge (paid by the worker as part of their application). However, you cannot recoup the Immigration Skills Charge from the worker, and any arrangement to do so would breach sponsor duties.' },
  { q: 'How long does a Skilled Worker visa last?', a: 'Skilled Worker visas are typically granted for up to 5 years. Workers can apply for settlement (Indefinite Leave to Remain) after 5 years on the Skilled Worker route, provided they continue to meet requirements.' },
  { q: 'What are my obligations once a worker is sponsored?', a: 'Sponsors must maintain accurate right-to-work records, report any significant changes in the worker\'s employment (role, salary, working hours) within 10 working days, report if the worker fails to start or leaves, and keep contact details up to date. SoftHire\'s compliance retainer handles all of this.' },
  { q: 'Can I sponsor a worker for a part-time role?', a: 'Yes, provided the pro-rated salary meets the threshold and the occupation code permits it. The minimum salary cannot be reduced below the threshold by averaging hours across the week — each hour must be paid at the required rate.' },
];

export default function SkilledWorkerEmployerPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Skilled Worker Visa for Employers | Sponsor UK Workers | SoftHire"
        description="Sponsor overseas workers on the Skilled Worker visa route. SoftHire manages Certificate of Sponsorship, salary threshold checks, and ongoing employer compliance. IAA-regulated."
        path="/skilled-worker-visa-employer"
        breadcrumb={[{ name: 'Skilled Worker Visa for Employers' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Skilled Worker Visa Sponsorship for Employers',
          description: 'Managed Skilled Worker visa sponsorship service for UK employers, including Certificate of Sponsorship, salary threshold compliance, and ongoing sponsor duties.',
          url: 'https://www.softhire.co.uk/skilled-worker-visa-employer',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Employer Sponsorship</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Skilled Worker Visa for Employers
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              Sponsor overseas workers on the UK's Skilled Worker route. We handle salary threshold assessments, Certificate of Sponsorship assignments, and all your ongoing employer obligations — so you hire faster and stay compliant.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/#contact"
                style={{ background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackBookAssessment('hero_skilled_worker_employer')}
              >
                Book a free consultation
              </a>
              <a
                href="#how-it-works"
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontWeight: 600, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackAnchorClick('how-it-works', 'skilled_worker_employer')}
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Salary threshold assessment', 'CoS assignment & tracking', 'Right-to-work compliance', 'Ongoing reporting obligations', 'IAA-regulated solicitors'].map((t) => (
              <span key={t} style={{ color: C.textMuted, fontSize: '0.83rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.gold }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Key requirements ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Requirements overview</div>
            <h2 style={h2Style}>What employers need to know</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { title: 'Sponsor licence required', body: 'Every employer sponsoring a Skilled Worker must hold a valid sponsor licence issued by the Home Office. SoftHire can obtain one for you as part of the same service.' },
                { title: '2024 salary threshold: £38,700', body: 'The general threshold increased in April 2024. Lower rates apply for shortage occupations, new entrants under 26, and specific healthcare roles. We calculate the exact rate for your occupation code (SOC code).' },
                { title: 'Eligible occupation (SOC code)', body: "The role must appear on the Home Office's eligible occupations list at RQF Level 3 or above. We confirm your SOC code and eligibility before you invest in recruitment." },
                { title: 'Certificate of Sponsorship (CoS)', body: 'You assign a CoS to each worker via the Sponsor Management System. It documents the role, salary, start date, and your sponsorship details. The worker uses it to apply for their visa.' },
                { title: 'Right-to-work check', body: 'Before employment starts, you must check the worker\'s right to work using their BRP or digital immigration status. Failure to do so carries civil penalties of up to £60,000 per worker.' },
                { title: 'Ongoing reporting duties', body: 'You must report changes to employment terms, absences, and other reportable events via the SMS within 10 working days. Non-compliance risks suspension or revocation of your licence.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: C.navyMid, border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ color: C.gold, fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{title}</div>
                  <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our process</div>
            <h2 style={h2Style}>How we manage skilled worker sponsorship</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
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
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'skilled_worker_employer'); }}
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
            <div style={sectionLabel}>Start hiring</div>
            <h2 style={h2Style}>Ready to sponsor your first Skilled Worker?</h2>
            <p style={pStyle}>Book a free consultation. We'll confirm your salary threshold, SOC code eligibility, and give you a clear plan for getting your first sponsored worker in post.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_skilled_worker_employer')}>
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
                { to: '/certificate-of-sponsorship', label: 'Certificate of Sponsorship' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/sponsor-licence-cost', label: 'Sponsor Licence Costs' },
                { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'skilled_worker_employer')}>
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
