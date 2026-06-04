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

const DUTIES = [
  { title: 'Right-to-work checks', body: 'Before and periodically throughout employment. Must be completed using the correct method for the immigration status. Incorrect or missed checks are the most common cause of Home Office enforcement.' },
  { title: 'Reporting obligations', body: "Significant changes must be reported via the SMS within 10 working days: change of job title, salary reduction, change of working hours, or employee stops working. Departure from UK must also be reported." },
  { title: 'Record-keeping', body: 'Sponsor guidance requires specific documents to be held for each sponsored worker: passport copies, contact details, right-to-work evidence, and employment records. These must be available within 2 working days of a Home Office request.' },
  { title: 'Attendance monitoring', body: 'For sponsored workers on student or certain worker visas, you must monitor and report absences that exceed defined limits without authorisation.' },
  { title: 'Immigration Skills Charge', body: 'Paid at the time of CoS assignment. Sponsors must maintain records of ISC payments in case they are queried.' },
  { title: 'Licence renewal', body: 'Sponsor licences expire after 4 years and must be renewed before expiry. SoftHire schedules renewal reminders and handles the renewal application as part of the retainer.' },
];

const FAQS = [
  { q: 'How often does the Home Office conduct compliance visits?', a: 'There is no fixed schedule — the Home Office can visit at any time, with or without notice. Announced visits are more common for new sponsors. Unannounced visits typically follow a compliance concern or complaint. SoftHire keeps your records in a permanent state of readiness.' },
  { q: "What happens if I fail a Home Office compliance visit?", a: "Outcomes range from an action plan (requiring you to address compliance gaps) through to suspension or revocation of your sponsor licence. The severity depends on the nature and extent of non-compliance. SoftHire's retainer significantly reduces the likelihood of any adverse outcome." },
  { q: 'What records must I keep for each sponsored worker?', a: "You must hold: a copy of the worker's passport or travel document; the right-to-work evidence; their contact details; their employment contract; evidence of their qualifications (where required); and records of their absences. Records must be kept for the duration of sponsorship plus two years." },
  { q: 'What changes must I report via the Sponsor Management System?', a: 'You must report: the worker failing to start employment within 28 days of the CoS start date; the worker stopping work (including termination, resignation, or extended leave without pay); a change in job title, salary, or working hours; and the worker going missing or ceasing to have permission to work.' },
  { q: 'What is the Immigration Compliance Audit?', a: "SoftHire's compliance audit reviews all your sponsored workers' files, right-to-work records, and SMS reporting history against current sponsor guidance. We identify any gaps and provide a remediation plan before a Home Office visit occurs." },
  { q: 'Do I need a compliance retainer, or can I manage it internally?', a: "Larger organisations with dedicated HR teams often manage compliance internally after initial training. However, the sponsor guidance changes regularly and non-compliance costs are severe. A SoftHire retainer ensures you are always aligned with current requirements without diverting internal resource." },
];

export default function SponsorLicenceCompliancePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence Compliance Services | Ongoing Management | SoftHire"
        description="Protect your UK sponsor licence with SoftHire's compliance retainer. Right-to-work checks, SMS reporting, record-keeping, and audit readiness. IAA-regulated. Fixed monthly fee."
        path="/sponsor-licence-compliance"
        breadcrumb={[{ name: 'Sponsor Licence Compliance' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence Compliance Management',
          description: 'Ongoing sponsor licence compliance retainer for UK employers, covering right-to-work, SMS reporting, record-keeping, and audit preparation.',
          url: 'https://www.softhire.co.uk/sponsor-licence-compliance',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sponsor Compliance</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Sponsor Licence Compliance Management
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              Your sponsor licence can be suspended or revoked for compliance failures that happen long after approval. SoftHire's retainer keeps your right-to-work records, SMS reporting, and audit files in permanent readiness — so you never face enforcement alone.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/#contact"
                style={{ background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackBookAssessment('hero_sponsor_compliance')}
              >
                Get a compliance assessment
              </a>
              <a
                href="#what-we-manage"
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontWeight: 600, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackAnchorClick('what-we-manage', 'sponsor_compliance')}
              >
                What we manage
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Right-to-work record management', 'Monthly SMS reporting reviews', 'Compliance file audits', 'Immediate Home Office response', 'Fixed monthly retainer'].map((t) => (
              <span key={t} style={{ color: C.textMuted, fontSize: '0.83rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.gold }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── What we manage ── */}
        <section id="what-we-manage" style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>What we manage</div>
            <h2 style={h2Style}>Compliance obligations we handle for you</h2>
            <p style={pStyle}>Sponsor compliance is not a one-time task — it is a continuous set of obligations that run for the entire life of your sponsor licence. SoftHire's retainer covers all of them.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {DUTIES.map(({ title, body }) => (
                <div key={title} style={{ background: C.navyMid, border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ color: C.gold, fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{title}</div>
                  <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What happens if compliance fails ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <div style={sectionLabel}>The risks of non-compliance</div>
              <h2 style={h2Style}>What's at stake if your compliance lapses</h2>
              <p style={pStyle}>The Home Office can suspend your licence without notice if it believes your compliance has deteriorated. During suspension, you cannot assign new Certificates of Sponsorship — and your existing workers' status comes under review.</p>
              <p style={pStyle}>Revocation is the ultimate sanction. It is permanent, affects all sponsored workers, and results in immediate restrictions on recruiting from overseas. Most revocations follow a compliance visit that reveals systemic failures that were preventable.</p>
            </div>
            <div>
              <div style={sectionLabel}>SoftHire's compliance retainer</div>
              <h2 style={h2Style}>What's included in our ongoing service</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Monthly right-to-work record reviews',
                  'SMS reporting checklist and reminders',
                  'Quarterly compliance file audit',
                  'Annual sponsor licence renewal management',
                  'Home Office visit preparation and support',
                  'Immediate escalation for enforcement notices',
                  'Updates when Home Office guidance changes',
                  'Dedicated solicitor contact',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.75rem', color: C.textMuted, fontSize: '0.9rem' }}>
                    <span style={{ color: C.gold, marginTop: '2px', flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
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
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'sponsor_compliance'); }}
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
            <div style={sectionLabel}>Protect your licence</div>
            <h2 style={h2Style}>Get a free compliance health check</h2>
            <p style={pStyle}>We'll review your current compliance posture and identify any gaps — no obligation. Most employers discover at least one reportable event that hasn't been actioned.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_sponsor_compliance')}>
              Book a compliance review
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
                { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
                { to: '/sponsor-licence-care-homes', label: 'Sponsor Licence for Care Homes' },
                { to: '/sponsor-licence-checklist', label: 'Compliance Checklist' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'sponsor_compliance')}>
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
