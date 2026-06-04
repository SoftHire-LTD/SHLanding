import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
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
const h3Style: React.CSSProperties = { fontSize: '1.1rem', fontWeight: 600, color: C.cream, marginBottom: '8px' };
const pStyle: React.CSSProperties = { color: C.textMuted, marginBottom: '16px' };

const STEPS = [
  { n: '1', title: 'Role and salary eligibility check', desc: 'We confirm your intended role qualifies under the Skilled Worker route and that your proposed salary meets or exceeds the current threshold. We flag any risks before you commit.' },
  { n: '2', title: 'Business eligibility verification', desc: 'We review your company registration, trading history and ownership structure to confirm eligibility and identify any gaps the Home Office might raise.' },
  { n: '3', title: 'HR compliance framework setup', desc: 'We implement right-to-work procedures, monitoring processes and record-keeping templates that meet Home Office standards for your type of hospitality business.' },
  { n: '4', title: 'Sponsor licence application', desc: 'We submit your full application via the Sponsorship Management System. Standard processing is 8 weeks; priority is 10 working days.' },
  { n: '5', title: 'Certificate of Sponsorship and visa support', desc: 'Once licensed, we issue Certificates of Sponsorship and support your overseas hires through the full Skilled Worker visa application process.' },
];

const FAQS = [
  { q: 'Can UK restaurants sponsor overseas chefs?', a: 'Yes. Restaurants can sponsor overseas chefs under the Skilled Worker visa provided they hold a sponsor licence and the role meets the relevant SOC code, salary threshold and skill level requirements. SoftHire carries out a pre-application eligibility check to confirm this.' },
  { q: 'Are chefs on the Shortage Occupation List?', a: 'As of 2024, chefs were removed from the UK Shortage Occupation List following the Migration Advisory Committee review. Standard Skilled Worker salary thresholds now apply, which means the minimum salary requirement is higher than it was previously.' },
  { q: 'What is the minimum salary to sponsor a chef?', a: 'The minimum salary to sponsor a chef (SOC 5434) is currently £30,960 per year, or the going rate for the role, whichever is higher. This reflects the 2024 threshold increases. SoftHire will confirm the exact requirement for your proposed role before application.' },
  { q: 'Can a single restaurant (not a chain) get a sponsor licence?', a: 'Yes. Individual restaurant businesses can obtain a sponsor licence provided they are a genuine trading business with the required HR processes. SoftHire regularly supports independent restaurant owners.' },
  { q: 'Can we sponsor kitchen staff on zero-hours contracts?', a: 'No. Sponsored workers must be employed on a contract that guarantees the required minimum salary. Zero-hours arrangements are not compatible with Skilled Worker sponsorship obligations.' },
  { q: 'What happens if a sponsored chef leaves?', a: 'If a sponsored worker leaves your employment, you must report this via the Sponsorship Management System within 10 working days. The worker must then find alternative sponsorship or leave the UK. SoftHire assists with all reporting obligations.' },
];

export default function SponsorLicenceRestaurantsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence for Restaurants | Sponsoring Chefs & Kitchen Staff | SoftHire"
        description="UK restaurants and hospitality businesses can sponsor overseas chefs under the Skilled Worker visa. SoftHire manages your sponsor licence application end to end."
        path="/sponsor-licence-restaurants"
        breadcrumb={[{ name: 'Sponsor Licence for Restaurants' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
            Hospitality &amp; Food · Sponsor Licence
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
            Sponsor Licence for<br />
            <em style={{ color: C.gold, fontStyle: 'italic' }}>Restaurants</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
            The UK faces a chronic hospitality skills shortage. A sponsor licence lets you recruit the
            world's best chefs and kitchen talent — legally and without the guesswork.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
              onClick={() => trackCTAClick('book_consultation', 'hero_restaurants')}
            >
              Get a Free Consultation
            </Link>
            <a href="#how-it-works" style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => trackAnchorClick('see_how_it_works', 'restaurants')}>
              See how it works →
            </a>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['IAA-Regulated', '97% Success Rate', 'Fixed-Fee', 'Independent & Chain Restaurants', 'Chefs & Management Roles'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: C.gold }}>✦</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Challenge + Who We Support ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
              <div>
                <div style={sectionLabel}>The Challenge</div>
                <h2 style={h2Style}>UK hospitality is short-staffed. International recruitment is the answer.</h2>
                <p style={pStyle}>
                  Post-Brexit, UK restaurants lost immediate access to EU labour pools. Combined with
                  the domestic cost-of-living crisis making hospitality careers less attractive, many
                  operators are struggling to fill critical kitchen roles.
                </p>
                <p style={pStyle}>
                  A sponsor licence opens the door to talent from every culinary tradition — from
                  specialist ethnic cuisine chefs to trained pastry professionals.
                </p>
                {/* Alert box */}
                <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.gold}`, borderRadius: '8px', padding: '24px 28px', marginTop: '8px' }}>
                  <p style={{ color: C.cream, fontSize: '0.95rem', margin: 0 }}>
                    <strong style={{ color: C.gold }}>Important:</strong> Chefs were removed from the
                    Shortage Occupation List in 2024. Standard Skilled Worker salary thresholds now
                    apply. SoftHire will assess whether your proposed role and salary structure
                    qualifies before you apply.
                  </p>
                </div>
              </div>
              <div>
                <h3 style={{ color: C.gold, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '20px' }}>
                  We support all types of food business
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Independent restaurants',
                    'Restaurant chains and groups',
                    'Ethnic and specialist cuisine restaurants',
                    'Fine dining establishments',
                    'Hotels and resort food & beverage',
                    'Catering companies',
                    'Dark kitchens and delivery-first operators',
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
            <h2 style={h2Style}>Which hospitality roles can be sponsored?</h2>
            <p style={{ ...pStyle, maxWidth: '680px' }}>
              A range of kitchen and management roles in hospitality qualify under the Skilled Worker
              route. Eligibility depends on SOC code, salary and role specification.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
              {[
                { soc: '5434', title: 'Chefs', desc: 'The most common role sponsored by restaurants. Minimum salary currently £30,960 or going rate. Must demonstrate relevant skills and experience.' },
                { soc: '1223', title: 'Restaurant & Catering Managers', desc: 'General managers and operations leads overseeing food service businesses. Higher salary thresholds apply.' },
                { soc: '5435', title: 'Cooks', desc: 'Specialist cooks, including pastry chefs and ethnic cuisine specialists. Eligibility depends on role specification.' },
                { soc: '1224', title: 'Publicans & Hospitality Managers', desc: 'Managers of licensed premises including bars, pubs and hospitality venues.' },
              ].map(({ soc, title, desc }) => (
                <div key={soc} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: C.gold, opacity: 0.4, lineHeight: 1, marginBottom: '16px' }}>{soc}</div>
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
            <h2 style={h2Style}>How SoftHire gets you sponsor-licensed</h2>
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
            <h2 style={h2Style}>Questions from restaurant owners</h2>
            <div>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => { if (openFAQ !== i) trackFAQOpen(faq.q, 'restaurants'); setOpenFAQ(openFAQ === i ? null : i); }}
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
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Your kitchen shouldn't run short because of paperwork.</h2>
          <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Book a free consultation. We'll check your eligibility, explain the salary requirements and
            give you a fixed-fee quote — all within 24 hours.
          </p>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
            onClick={() => trackCTAClick('book_consultation', 'cta_band_restaurants')}
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
                { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
                { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                  onClick={() => trackSectorLinkClick(to, 'restaurants')}
                >
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
