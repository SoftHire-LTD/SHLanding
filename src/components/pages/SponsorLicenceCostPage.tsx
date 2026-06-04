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
const pStyle: React.CSSProperties = { color: C.textMuted, lineHeight: 1.75, fontSize: '0.97rem', marginBottom: '1rem' };

const FEES = [
  {
    category: 'Home Office Application Fee',
    items: [
      { label: 'Small or charitable sponsor', amount: '£536', note: 'One-off application fee' },
      { label: 'Medium or large sponsor', amount: '£1,476', note: 'One-off application fee' },
      { label: 'Priority processing (optional)', amount: '+£500', note: '~10 working days vs 8 weeks' },
    ],
  },
  {
    category: 'Immigration Skills Charge (per worker, per year)',
    items: [
      { label: 'Small employer or charity', amount: '£1,000/yr', note: 'Paid when CoS is assigned' },
      { label: 'Medium or large employer', amount: '£5,000/yr', note: 'Paid when CoS is assigned' },
      { label: 'Health and Care Worker visa', amount: 'Exempt', note: 'No ISC applies' },
    ],
  },
  {
    category: 'Visa Application Fees (paid by worker)',
    items: [
      { label: 'Skilled Worker visa (3 years or less, outside UK)', amount: '£827', note: 'Per application' },
      { label: 'Skilled Worker visa (over 3 years, outside UK)', amount: '£1,636', note: 'Per application' },
      { label: 'Immigration Health Surcharge (per year)', amount: '£1,035/yr', note: 'Paid by worker' },
    ],
  },
  {
    category: 'SoftHire Professional Fees',
    items: [
      { label: 'Sponsor licence application (fixed fee)', amount: 'From £1,500', note: 'Includes full document preparation' },
      { label: 'Compliance retainer (monthly)', amount: 'From £350/mo', note: 'For up to 10 sponsored workers' },
      { label: 'CoS assignment (per worker)', amount: 'From £250', note: 'Includes right-to-work guidance' },
    ],
  },
];

const FAQS = [
  { q: 'Can a small business get a sponsor licence more cheaply?', a: "Yes — small businesses and charities pay the lower Home Office application fee of £536 (vs £1,476 for medium/large). They also pay a reduced Immigration Skills Charge of £1,000 per worker per year instead of £5,000. The Home Office's definition of 'small' for these purposes generally follows the Companies Act definition." },
  { q: 'Is the Immigration Skills Charge tax deductible?', a: 'The ISC is generally deductible as a business expense for UK corporation tax purposes, as it is a cost directly incurred in recruiting employees. You should confirm this with your accountant as part of your employment cost planning.' },
  { q: 'Who pays the worker\'s visa application fee?', a: "The worker pays their own visa application fee and Immigration Health Surcharge. You can choose to reimburse these as part of a relocation package — this is a commercial decision, not a legal requirement. However, you cannot recoup the Immigration Skills Charge from the worker." },
  { q: 'Are there ongoing costs after initial approval?', a: "Yes. The main ongoing costs are: Immigration Skills Charge per worker per year; the worker's annual IHS (paid by the worker); any CoS assignment fees you pay SoftHire; and sponsor licence renewal fees every 4 years (same as the initial application fee)." },
  { q: "What if I can't afford the upfront ISC for multiple workers?", a: "The ISC is paid per Certificate of Sponsorship assigned, so the cost is spread across individual hires rather than paid in one lump sum. For a small employer hiring 5 workers, the total ISC would be £5,000 per year, spread across the CoS assignments. SoftHire can model the total cost for your planned recruitment." },
  { q: 'Do Health and Care Worker visa sponsors pay a lower fee?', a: "Health and Care Worker visa sponsors are exempt from the Immigration Skills Charge entirely. The Home Office application fee remains the same. Workers on the Health and Care Worker route also pay a lower visa application fee and are exempt from the IHS (from November 2023 onwards)." },
];

export default function SponsorLicenceCostPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="UK Sponsor Licence Cost 2024 | Full Fee Breakdown | SoftHire"
        description="Complete breakdown of UK sponsor licence costs for 2024/2025 — Home Office fees, Immigration Skills Charge, visa application fees, and SoftHire's fixed professional fees. No surprises."
        path="/sponsor-licence-cost"
        breadcrumb={[{ name: 'Sponsor Licence Cost' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'UK Sponsor Licence Cost Guide',
          description: 'Transparent breakdown of all UK sponsor licence costs including Home Office fees, Immigration Skills Charge, and professional service fees.',
          url: 'https://www.softhire.co.uk/sponsor-licence-cost',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cost Guide — 2024/2025</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Sponsor Licence Cost Breakdown
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              Every cost involved in obtaining and maintaining a UK sponsor licence, explained clearly — Home Office fees, the Immigration Skills Charge, visa costs, and SoftHire's transparent professional fees.
            </p>
            <a
              href="/#contact"
              style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
              onClick={() => trackBookAssessment('hero_sponsor_licence_cost')}
            >
              Get a personalised cost estimate
            </a>
          </div>
        </section>

        {/* ── Fee tables ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={sectionLabel}>Full cost breakdown</div>
            <h2 style={h2Style}>All fees at a glance</h2>
            <p style={pStyle}>Costs are accurate for 2024/2025 and are subject to change when the Home Office updates its schedule. SoftHire confirms current fees at the start of every instruction.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {FEES.map(({ category, items }) => (
                <div key={category}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, color: C.gold, marginBottom: '0.75rem', letterSpacing: '0.03em' }}>{category}</h3>
                  <div style={{ border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', overflow: 'hidden' }}>
                    {items.map(({ label, amount, note }, idx) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: idx % 2 === 0 ? C.navyMid : C.navy, flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <div style={{ color: C.cream, fontWeight: 600, fontSize: '0.9rem' }}>{label}</div>
                          <div style={{ color: C.textMuted, fontSize: '0.8rem' }}>{note}</div>
                        </div>
                        <div style={{ color: C.gold, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', textAlign: 'right' }}>{amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={sectionLabel}>FAQs</div>
            <h2 style={h2Style}>Frequently asked questions about costs</h2>
            <div style={{ marginTop: '1.5rem' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.borderSubtle}` }}>
                  <button
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'sponsor_licence_cost'); }}
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
        <section style={{ padding: '80px 5%', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={sectionLabel}>Get a quote</div>
            <h2 style={h2Style}>How much will it cost for your business?</h2>
            <p style={pStyle}>Every employer's situation is different. Book a free 30-minute call and we'll give you a precise cost breakdown for your specific circumstances, including the number of workers you plan to sponsor and whether priority processing makes sense for your timeline.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_sponsor_licence_cost')}>
              Get a personalised quote
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
                { to: '/sponsor-licence-checklist', label: 'Sponsor Licence Checklist' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/certificate-of-sponsorship', label: 'Certificate of Sponsorship' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'sponsor_licence_cost')}>
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
