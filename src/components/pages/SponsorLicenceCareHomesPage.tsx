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
const h3Style: React.CSSProperties = { fontSize: '1.1rem', fontWeight: 600, color: C.cream, marginBottom: '8px' };
const pStyle: React.CSSProperties = { color: C.textMuted, marginBottom: '16px' };

const STEPS = [
  { n: '1', title: 'Free eligibility assessment', desc: 'We review your CQC registration, business structure and intended roles to confirm eligibility and identify any gaps before you apply.' },
  { n: '2', title: 'Document preparation and HR audit', desc: 'We prepare all required supporting evidence — including HR system review, right to work processes and Authorising Officer designation — to meet Home Office standards.' },
  { n: '3', title: 'Sponsor licence application submission', desc: 'We submit your application through the Home Office Sponsor Management System and handle any queries. Standard processing is 8 weeks; priority is 10 working days.' },
  { n: '4', title: 'Certificate of Sponsorship and visa support', desc: 'Once licensed, we assign Certificates of Sponsorship for your workers and support their Health and Care Worker visa applications, including pre-entry and in-country routes.' },
  { n: '5', title: 'Ongoing compliance and audit readiness', desc: 'We provide a compliance framework covering record-keeping, SMS reporting duties and annual compliance reviews — keeping your licence safe between Home Office visits.' },
];

const FAQS = [
  { q: 'Can care homes sponsor overseas workers?', a: 'Yes. Care homes can sponsor overseas care workers and nurses under the Health and Care Worker visa provided they hold a sponsor licence and are registered with the Care Quality Commission (CQC).' },
  { q: 'What is the Health and Care Worker visa?', a: 'It is a lower-cost, expedited route within the Skilled Worker visa for eligible roles in CQC-regulated adult social care. Application fees are reduced and the Immigration Health Surcharge is exempt for eligible workers. It covers roles such as Care Workers (SOC 6145) and Registered Nurses (SOC 2231).' },
  { q: 'How long does it take to get a sponsor licence for a care home?', a: 'Standard Home Office processing is 8 weeks. Priority processing takes 10 working days at an additional fee. SoftHire prepares your full application to minimise queries and maximise approval speed.' },
  { q: 'Does a care home need to be CQC-registered to sponsor workers?', a: 'Yes. For workers to access the Health and Care Worker visa route, the employer must be a CQC-registered adult social care provider. Residential care homes and domiciliary care agencies both qualify if appropriately registered.' },
  { q: 'What are the ongoing compliance obligations for care home sponsors?', a: 'Sponsors must maintain HR records, carry out right to work checks, monitor worker attendance and immigration status, report changes via the Sponsorship Management System, and keep records available for Home Office inspection at any time.' },
  { q: 'What happens if the Home Office carries out an unannounced visit?', a: "The Home Office can conduct compliance visits without notice. Sponsors must demonstrate that all HR obligations are being met. SoftHire's compliance framework ensures your records are inspection-ready at all times." },
];

export default function SponsorLicenceCareHomesPage() {
  useEffect(() => {
    document.title = 'Sponsor Licence for Care Homes | UK Immigration for Care Sector | SoftHire';
  }, []);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
          Care Sector · Sponsor Licence
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
          Sponsor Licence for<br />
          <em style={{ color: C.gold, fontStyle: 'italic' }}>Care Homes</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
          Recruit overseas care workers and nurses compliantly. SoftHire handles your sponsor licence
          application and keeps your care home audit-ready — so you can focus on delivering care.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
            onClick={() => trackCTAClick('book_consultation', 'hero_care_homes')}
          >
            Get a Free Consultation
          </Link>
          <a href="#how-it-works" style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => trackAnchorClick('see_how_it_works', 'care_homes')}>
            See how it works →
          </a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          {['IAA-Regulated', '97% Success Rate', 'Fixed-Fee — No Surprises', 'Free Consultation in 24 Hours', 'CQC-Aligned Compliance'].map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: C.gold }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Challenge + Who We Help ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
            <div>
              <div style={sectionLabel}>The Challenge</div>
              <h2 style={h2Style}>The UK care sector runs on international talent</h2>
              <p style={pStyle}>
                With over 150,000 care worker vacancies in England alone, many care homes and
                domiciliary care providers now look overseas to fill critical roles. A UK sponsor
                licence is the legal gateway to hiring internationally.
              </p>
              <p style={pStyle}>
                Without one, you cannot issue a Certificate of Sponsorship (CoS) — meaning you
                cannot legally employ candidates on a Skilled Worker or Health and Care Worker visa.
                Getting it wrong puts your CQC registration and your business at risk.
              </p>
              <p style={{ ...pStyle, marginBottom: 0 }}>
                SoftHire exists to remove that risk. We handle your licence application from end to
                end, and stay on to support ongoing compliance.
              </p>
            </div>
            <div>
              <h3 style={{ color: C.gold, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '20px' }}>
                Who we help in the care sector
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Residential care homes',
                  'Nursing homes',
                  'Domiciliary care agencies',
                  'Supported living providers',
                  'NHS-commissioned care providers',
                  'Live-in care companies',
                  'Care home groups and chains',
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
          <h2 style={h2Style}>Which roles can care homes sponsor?</h2>
          <p style={{ ...pStyle, maxWidth: '680px' }}>
            The Health and Care Worker visa covers a defined set of roles in CQC-regulated adult
            social care. Key eligible occupations include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { soc: '6145', title: 'Care Workers & Home Carers', desc: 'The most commonly sponsored role. Minimum salary threshold applies (currently £23,200 or going rate, whichever is higher).' },
              { soc: '6146', title: 'Senior Care Workers', desc: 'Supervisory care staff. Eligible under the Health and Care Worker visa for CQC-registered providers.' },
              { soc: '2231', title: 'Registered Nurses', desc: 'Nursing home staff. Must be registered with the NMC. Higher salary threshold applies.' },
              { soc: '2232', title: 'Occupational Therapists', desc: 'Allied health professionals supporting rehabilitation and daily living.' },
            ].map(({ soc, title, desc }) => (
              <div key={soc} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: C.gold, opacity: 0.4, lineHeight: 1, marginBottom: '16px' }}>{soc}</div>
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
          <h2 style={h2Style}>From application to first hire — we handle it</h2>
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
          <h2 style={h2Style}>Common questions from care home operators</h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button
                  onClick={() => { if (openFAQ !== i) trackFAQOpen(faq.q, 'care_homes'); setOpenFAQ(openFAQ === i ? null : i); }}
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
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Ready to sponsor your first care worker?</h2>
        <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Book a free, no-obligation consultation. We'll assess your eligibility, explain the process
          and give you a fixed-fee quote — all within 24 hours.
        </p>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
          onClick={() => trackCTAClick('book_consultation', 'cta_band_care_homes')}
        >
          Book Free Consultation
        </Link>
      </div>

      {/* ── Related Links ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Also on SoftHire</div>
          <h2 style={h2Style}>Other sponsor licence services</h2>
          <p style={{ ...pStyle }}>We support employers across every sector navigating UK immigration.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
              { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
              { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
              { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                onClick={() => trackSectorLinkClick(to, 'care_homes')}
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
