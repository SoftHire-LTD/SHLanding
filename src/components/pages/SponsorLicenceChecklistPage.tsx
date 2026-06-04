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

const CHECKLIST_SECTIONS = [
  {
    title: 'Business eligibility',
    items: [
      'Business is genuinely trading or operating in the UK',
      'Business is registered at Companies House (or equivalent)',
      'No director or partner has unspent criminal convictions for relevant offences',
      'Business is not subject to insolvency proceedings',
      'You have not previously had a sponsor licence revoked in the last 12 months',
      'Proposed vacancy is genuine and exists at RQF Level 3 or above',
    ],
  },
  {
    title: 'Documents required',
    items: [
      'VAT registration certificate (if VAT registered)',
      'Evidence of Employer\'s Liability Insurance (minimum £5m cover)',
      'Companies House registration or equivalent (sole traders: HMRC registration)',
      'Latest accounts or bank statements (3 months)',
      'Evidence of PAYE scheme (letter from HMRC or payslips)',
      'Lease or ownership documents for your UK premises',
      'Evidence that the role exists (job description, organisational chart)',
      'Authorising Officer\'s employment contract or proof of directorship',
    ],
  },
  {
    title: 'Key personnel',
    items: [
      'Authorising Officer designated — senior, UK-based, legally working in the UK',
      'Key Contact designated — may be the same person or a separate individual',
      'Level 1 User designated to manage the SMS day-to-day',
      'All key contacts are eligible (no pending criminal proceedings)',
      'Key contacts have been briefed on their responsibilities',
    ],
  },
  {
    title: 'HR systems and processes',
    items: [
      'Right-to-work checking procedure is documented and operational',
      'System in place to track when sponsored workers\' leave expires',
      'Attendance and absence monitoring process in place',
      'HR records storage is compliant (accessible within 2 working days)',
      'Process defined for reporting changes to the Home Office within 10 working days',
      'Staff who will use the SMS have been trained',
    ],
  },
  {
    title: 'Post-approval readiness',
    items: [
      'SMS login details secured and access controlled',
      'First CoS allocation requested (if applicable)',
      'ISC payment method confirmed',
      'Recruitment pipeline ready for first sponsored hire',
      'Compliance calendar set up for reporting deadlines',
      'SoftHire retainer or internal compliance owner confirmed',
    ],
  },
];

const FAQS = [
  { q: 'Do I need all these documents before I can apply?', a: "Not necessarily — the exact documents required depend on your business type, trading history, and sector. The Home Office publishes a list of acceptable evidence but gives options in most categories. SoftHire's document preparation stage identifies exactly which evidence is needed for your specific application and collects it on your behalf." },
  { q: 'What if my business is new and doesn\'t have 3 months\' bank statements?', a: "New businesses can still apply, but you will need to provide alternative evidence of genuine trading — such as contracts with customers, letters of intent from clients, or evidence of significant investment. SoftHire structures the application narrative specifically for new or early-stage businesses." },
  { q: 'Does the Authorising Officer have to be a director?', a: 'Not necessarily. The Authorising Officer must be a senior employee who is based in the UK and legally working in the UK — a director, partner, or other senior person with genuine authority over the sponsored workers. They must not have any relevant unspent criminal convictions.' },
  { q: 'What HR systems does the Home Office expect to see?', a: "The Home Office doesn't require a specific HR software product. What matters is that you have documented processes for right-to-work checks, tracking workers' immigration status expiry dates, monitoring absence, and reporting changes. SoftHire provides a compliant HR process framework as part of the application preparation." },
  { q: "What happens if I'm missing some documents when I apply?", a: "Missing required documents are the most common reason for delays or additional information requests from the Home Office. Applying with incomplete documentation increases the risk of refusal. SoftHire's pre-application document review identifies any gaps well before submission." },
];

export default function SponsorLicenceChecklistPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Sponsor Licence Checklist 2024 | Documents & HR Requirements | SoftHire"
        description="The complete UK sponsor licence application checklist — business eligibility, required documents, key personnel, HR systems, and post-approval readiness. Updated for 2024/2025."
        path="/sponsor-licence-checklist"
        breadcrumb={[{ name: 'Sponsor Licence Checklist' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence Application Checklist',
          description: 'Complete UK sponsor licence application checklist covering documents, HR systems, and eligibility requirements for 2024/2025.',
          url: 'https://www.softhire.co.uk/sponsor-licence-checklist',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pre-application checklist — 2024/2025</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Sponsor Licence Application Checklist
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              Everything you need to have in order before submitting your UK sponsor licence application — business eligibility, required documents, HR systems, and key personnel.
            </p>
            <a
              href="/#contact"
              style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
              onClick={() => trackBookAssessment('hero_sponsor_licence_checklist')}
            >
              Get a free readiness assessment
            </a>
          </div>
        </section>

        {/* ── Checklists ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={sectionLabel}>Application readiness</div>
            <h2 style={h2Style}>Complete pre-application checklist</h2>
            <p style={pStyle}>Work through each section before submitting your application. SoftHire reviews every item as part of our document preparation service.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              {CHECKLIST_SECTIONS.map((section, si) => (
                <div key={section.title} style={{ border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenSection(openSection === si ? null : si)}
                    style={{ width: '100%', background: openSection === si ? C.navyMid : C.navy, border: 'none', color: C.cream, textAlign: 'left', padding: '1.25rem 1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700 }}
                  >
                    {section.title}
                    <span style={{ color: C.gold, fontSize: '1.2rem', flexShrink: 0 }}>{openSection === si ? '−' : '+'}</span>
                  </button>
                  {openSection === si && (
                    <div style={{ padding: '1.25rem 1.5rem', background: C.navyMid }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {section.items.map((item) => (
                          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.75rem', color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            <span style={{ width: '18px', height: '18px', border: `1.5px solid ${C.border}`, borderRadius: '3px', flexShrink: 0, marginTop: '2px', display: 'inline-block' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={sectionLabel}>FAQs</div>
            <h2 style={h2Style}>Common checklist questions</h2>
            <div style={{ marginTop: '1.5rem' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.borderSubtle}` }}>
                  <button
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'sponsor_licence_checklist'); }}
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
            <div style={sectionLabel}>Ready to apply?</div>
            <h2 style={h2Style}>Let SoftHire do the checklist for you</h2>
            <p style={pStyle}>Book a free 30-minute call. We'll work through the checklist with you, identify any gaps, and tell you exactly what you need to get approval — at no charge.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_sponsor_licence_checklist')}>
              Book a free readiness check
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
                { to: '/sponsor-licence-cost', label: 'Sponsor Licence Costs' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/certificate-of-sponsorship', label: 'Certificate of Sponsorship' },
                { to: '/skilled-worker-visa-employer', label: 'Skilled Worker Visa' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'sponsor_licence_checklist')}>
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
