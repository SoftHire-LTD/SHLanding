import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackFAQOpen, trackSectorLinkClick, trackAnchorClick } from '../../lib/analytics';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  navyLight: '#1e2f5e',
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
const h3Style: React.CSSProperties = { fontSize: '1.1rem', fontWeight: 600, color: C.cream, marginBottom: '8px' };
const pStyle: React.CSSProperties = { color: C.textMuted, marginBottom: '16px' };

const STEPS = [
  { n: '1', title: 'Eligibility check — same day', desc: 'We confirm your company structure, shareholding and role requirements qualify. If there are gaps, we tell you clearly what to fix and how.' },
  { n: '2', title: 'Lean HR compliance setup', desc: 'We build right-to-work processes and record-keeping templates designed for a lean People function — not a corporate HR department. Quick to implement, Home Office-compliant.' },
  { n: '3', title: 'Application submitted — priority if needed', desc: 'We submit your full application via the Sponsorship Management System. Priority processing is 10 working days. Standard is 8 weeks.' },
  { n: '4', title: 'CoS assigned and visa application supported', desc: 'Once licensed, we assign Certificates of Sponsorship and support visa applications for your hires — covering both overseas and in-country candidates.' },
  { n: '5', title: 'Compliance maintained as you scale', desc: 'As your headcount grows, your compliance obligations grow. We provide a scalable framework and are on hand for every new hire, extension and corporate change.' },
];

const FAQS = [
  { q: 'Can a pre-revenue startup get a sponsor licence?', a: 'Yes. The Home Office does not require profitability or revenue. A startup must demonstrate it is a genuine trading organisation with appropriate HR systems and the capacity to pay the sponsored worker at or above the relevant salary threshold.' },
  { q: 'What is the minimum salary for sponsored software developers?', a: 'Software developers and programmers (SOC 2136) must be paid at least £40,880 per year or the going rate for the role, whichever is higher. New entrant rates may apply for qualifying candidates with less experience.' },
  { q: 'Can equity or bonuses count towards the salary threshold?', a: 'No. Only guaranteed basic salary and certain fixed allowances count. Equity, bonuses and commission are excluded from the threshold calculation — a common issue for early-stage startups offering equity-heavy packages.' },
  { q: 'How quickly can a startup get a sponsor licence?', a: 'Standard Home Office processing is 8 weeks. Priority processing is 10 working days at additional cost. Where a candidate is already in the UK on another valid visa, their employment can sometimes begin while the licence is processing.' },
  { q: 'What happens to sponsored employees if the startup is acquired?', a: "A TUPE transfer or acquisition does not automatically invalidate a sponsored worker's visa, but the new employer must hold or obtain a sponsor licence and the worker's details must be updated on the Sponsorship Management System. SoftHire supports startups through corporate transactions and exits." },
  { q: 'Do we need a dedicated HR team to hold a sponsor licence?', a: 'No. You need an Authorising Officer and a Key Contact (these can be the same person, often a founder or COO), plus documented right-to-work and monitoring processes. SoftHire builds and maintains these for you.' },
];

export default function SponsorLicenceTechStartupsPage() {
  useEffect(() => {
    document.title = 'Sponsor Licence for Tech Startups | Skilled Worker Visas for Startups | SoftHire';
  }, []);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
          Tech &amp; Startups · Sponsor Licence
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
          Sponsor Licence for<br />
          <em style={{ color: C.gold, fontStyle: 'italic' }}>Tech Startups</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
          The best engineers aren't always in the UK. SoftHire gets you sponsor-licensed fast so you
          can hire globally, compliantly, and without slowing your roadmap.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
            onClick={() => trackCTAClick('book_consultation', 'hero_tech_startups')}
          >
            Get a Free Consultation
          </Link>
          <a href="#how-it-works" style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => trackAnchorClick('see_how_it_works', 'tech_startups')}>
            See how it works →
          </a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          {['IAA-Regulated', '97% Success Rate', 'Fixed-Fee', 'Works for Pre-Revenue Startups', 'Founder-Led Immigration'].map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: C.gold }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem + Stages ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
            <div>
              <div style={sectionLabel}>The Problem</div>
              <h2 style={h2Style}>Great candidates don't stop at borders. Your hiring process shouldn't either.</h2>
              <p style={pStyle}>
                London, Manchester and Edinburgh produce world-class tech talent — but so does every
                city from Lagos to Lahore. The startups winning the talent war have one thing their
                competition doesn't: a sponsor licence.
              </p>
              <p style={pStyle}>
                Without one, you're limited to UK/settled workers in an already constrained market.
                With one, you can make offers to global candidates in days, not months.
              </p>
              <p style={pStyle}>
                SoftHire is built for startups. We understand your pace, your lean HR function, and
                the fact that your lead engineers can't wait eight weeks while paperwork piles up.
              </p>
              {/* Highlight box */}
              <div style={{ background: C.navyLight, borderLeft: `3px solid ${C.gold}`, padding: '24px 28px', borderRadius: '0 8px 8px 0', marginTop: '8px' }}>
                <p style={{ color: C.cream, margin: 0 }}>
                  <strong style={{ color: C.gold }}>Founder note:</strong> SoftHire was built by a
                  lawyer-founder who understands startup constraints. We've designed our process to
                  work around your sprint cycles, not against them.
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ color: C.gold, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '20px' }}>
                We work with startups at every stage
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Pre-seed and seed stage companies',
                  'Series A and Series B',
                  'VC-backed and bootstrapped startups',
                  'Y Combinator and accelerator alumni',
                  'Scale-ups expanding UK headcount',
                  'Startups with no dedicated People team',
                  'Companies acquiring talent via TUPE',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: C.cream, fontSize: '0.95rem' }}>
                    <span style={{ color: C.gold, flexShrink: 0, marginTop: '2px' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligible Roles ── */}
      <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Eligible Roles</div>
          <h2 style={h2Style}>Which tech roles can startups sponsor?</h2>
          <p style={{ ...pStyle, maxWidth: '680px' }}>
            Most senior technical and product roles qualify for sponsorship under the Skilled Worker
            route. Common SOC codes for the tech sector include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { icon: '⌨️', title: 'Software Developers (SOC 2136)', desc: 'Backend, frontend, full-stack. The most commonly sponsored tech role. Minimum salary £40,880 or going rate.' },
              { icon: '🔬', title: 'Data Scientists (SOC 2425)', desc: 'ML engineers, data analysts and AI researchers. High demand, strong eligibility.' },
              { icon: '🔧', title: 'IT Project & Programme Managers (SOC 1136)', desc: 'Technical PMs and engineering leads. Eligible under the Skilled Worker route.' },
              { icon: '🔐', title: 'Cybersecurity Specialists (SOC 2139)', desc: 'Security engineers and penetration testers. Strong labour market case for sponsorship.' },
              { icon: '📐', title: 'UX/UI Designers (SOC 2166)', desc: 'Product designers and UX researchers may qualify depending on the role specification.' },
              { icon: '☁️', title: 'IT Systems Architects (SOC 2135)', desc: 'Cloud architects, infrastructure engineers and DevOps leads.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{icon}</div>
                <h3 style={h3Style}>{title}</h3>
                <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Our Process</div>
          <h2 style={h2Style}>Sponsor-licensed without slowing you down</h2>
          <div style={{ marginTop: '48px' }}>
            {STEPS.map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: '28px', marginBottom: '40px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', border: `1px solid ${C.gold}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 700, color: C.gold }}>
                  {step.n}
                </div>
                <div>
                  <h3 style={h3Style}>{step.title}</h3>
                  <p style={{ ...pStyle, marginBottom: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>FAQ</div>
          <h2 style={h2Style}>What founders ask us most</h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button
                  onClick={() => { if (openFAQ !== i) trackFAQOpen(faq.q, 'tech_startups'); setOpenFAQ(openFAQ === i ? null : i); }}
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
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Stop losing hires to visa uncertainty.</h2>
        <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Book a free consultation. We'll assess your eligibility and give you a fixed-fee quote
          within 24 hours — so you can make that offer with confidence.
        </p>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
          onClick={() => trackCTAClick('book_consultation', 'cta_band_tech_startups')}
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
              { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
              { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
              { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                onClick={() => trackSectorLinkClick(to, 'tech_startups')}
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
