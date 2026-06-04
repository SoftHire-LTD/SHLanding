import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { trackCTAClick, trackFAQOpen, trackSectorLinkClick, trackAnchorClick, trackBookAssessment } from '../../lib/analytics';

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
  { n: '01', title: 'Eligibility assessment', body: "We review your business type, trading status, HR policies, and proposed hires to confirm eligibility before a single form is completed. Most refusals are avoidable at this stage." },
  { n: '02', title: 'Document preparation', body: "We gather and review all required evidence: VAT & Companies House records, HR system documentation, right-to-work procedures, and your Authorising Officer's employment evidence." },
  { n: '03', title: 'SMS application submission', body: "We submit through the Home Office Sponsor Management System and manage all correspondence. Your assigned solicitor handles any Home Office queries immediately." },
  { n: '04', title: 'Decision & priority processing', body: "Standard processing is approximately 8 weeks. We can request priority processing (10 working days) where it's available, saving months of waiting time." },
  { n: '05', title: 'Post-approval setup', body: "We configure your SMS account, designate Key Contacts, set up right-to-work record systems, and deliver a compliance framework to keep your licence safe from day one." },
];

const FAQS = [
  { q: 'Who needs a UK sponsor licence?', a: 'Any UK employer who wants to recruit a worker from outside the UK (or outside the EEA for roles requiring sponsorship) must hold a valid sponsor licence. This includes recruiting through the Skilled Worker, Intra-Company Transfer, or Health and Care Worker routes.' },
  { q: 'How long does the sponsor licence application take?', a: 'Standard processing typically takes 8 weeks from the date of submission. Priority processing (available for a fee) reduces this to approximately 10 working days. SoftHire recommends starting the application at least 3 months before your intended recruitment date.' },
  { q: 'How much does a sponsor licence cost?', a: 'The Home Office application fee is £536 for small or charitable sponsors and £1,476 for medium/large businesses. Priority processing costs an additional £500. Annual Immigration Skills Charge of £1,000 per year (small) or £5,000 per year (large) applies per sponsored worker. SoftHire charges a fixed professional fee — contact us for a quote.' },
  { q: 'Can a new company or startup apply for a sponsor licence?', a: 'Yes. New businesses and startups can apply, but the Home Office scrutinises them more closely. You will need to demonstrate genuine trading activity, a real vacancy, adequate HR processes, and a credible business plan. SoftHire prepares new businesses specifically for this enhanced scrutiny.' },
  { q: 'What are the most common reasons sponsor licence applications are refused?', a: 'The most common reasons are: failure to demonstrate genuine HR processes; inability to evidence that the vacancy is a genuine role; Authorising Officer not meeting seniority requirements; inadequate right-to-work checking procedures; and inconsistencies between documents submitted.' },
  { q: 'What happens after I get a sponsor licence?', a: "After approval you will be listed on the Home Office's register of licensed sponsors and can start assigning Certificates of Sponsorship (CoS). You will also have ongoing compliance obligations — record-keeping, right-to-work checks, and reporting duties — which SoftHire can manage on your behalf through our compliance retainer." },
  { q: 'How long is a sponsor licence valid?', a: 'Sponsor licences are issued for 4 years initially and can be renewed before expiry. Renewal is straightforward for compliant sponsors.' },
];

export default function SponsorLicenceApplicationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence Application UK | How to Apply | SoftHire"
        description="Apply for a UK sponsor licence with IAA-regulated solicitors. Fixed-fee application service, document preparation, and full SMS submission. Get approved in as little as 10 working days."
        path="/sponsor-licence-application"
        breadcrumb={[{ name: 'Sponsor Licence Application' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence Application',
          description: 'Managed sponsor licence application service for UK employers, including eligibility assessment, document preparation, and Home Office SMS submission.',
          url: 'https://www.softhire.co.uk/sponsor-licence-application',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>UK Employer Immigration</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Sponsor Licence Application
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              Fixed-fee, IAA-regulated sponsor licence applications for UK employers. We handle eligibility assessment, document preparation, and full Home Office submission — so you can focus on hiring the talent you need.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/#contact"
                style={{ background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackBookAssessment('hero_sponsor_licence_application')}
              >
                Get a free eligibility check
              </a>
              <a
                href="#how-it-works"
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontWeight: 600, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackAnchorClick('how-it-works', 'sponsor_licence_application')}
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['IAA-regulated solicitors', 'Fixed transparent fees', 'Applications in as little as 10 working days', 'End-to-end document preparation', 'Post-approval compliance setup'].map((t) => (
              <span key={t} style={{ color: C.textMuted, fontSize: '0.83rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.gold }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <div style={sectionLabel}>What is a sponsor licence?</div>
              <h2 style={h2Style}>Your legal gateway to hiring overseas talent</h2>
              <p style={pStyle}>A UK sponsor licence — formally a Worker sponsor licence — is the permission granted by the Home Office that allows a UK employer to recruit workers from outside the UK on skilled visa routes, including the Skilled Worker and Health and Care Worker routes.</p>
              <p style={pStyle}>Without a sponsor licence, UK employers cannot legally engage overseas workers who require sponsorship. The licence is issued for four years and requires ongoing compliance with the Home Office's sponsor guidance.</p>
            </div>
            <div>
              <div style={sectionLabel}>Who needs one?</div>
              <h2 style={h2Style}>Any employer hiring from outside the UK</h2>
              <p style={pStyle}>You need a sponsor licence if you want to hire workers who are nationals of non-EEA countries (or EEA nationals who arrived after December 2020 without settled status). This covers most overseas recruitment in skilled roles.</p>
              <p style={pStyle}>Exceptions exist for nationals with existing leave to remain that allows work, and for some roles below the skill threshold. SoftHire's eligibility assessment will confirm exactly what you need before you spend anything.</p>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our process</div>
            <h2 style={h2Style}>How SoftHire manages your application</h2>
            <p style={pStyle}>From your first call to post-approval compliance setup — we handle every step.</p>
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

        {/* ── Eligibility requirements ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Eligibility requirements</div>
            <h2 style={h2Style}>Does your business qualify?</h2>
            <p style={pStyle}>The Home Office applies strict eligibility criteria. SoftHire checks each of these before your application is submitted.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { title: 'Genuine UK business', body: 'You must be a legitimate UK-based employer — sole traders, partnerships, limited companies, charities, and public bodies all qualify provided they are genuinely trading.' },
                { title: 'No outstanding legal issues', body: "Any director, partner, or senior person found to have unspent criminal convictions for immigration offences, fraud, or labour abuse will result in refusal. We identify any risks early." },
                { title: 'Genuine vacancy', body: 'The role must genuinely exist and meet the skill level threshold (RQF Level 3 or above). You cannot apply to sponsor a hypothetical position.' },
                { title: 'Adequate HR systems', body: 'The Home Office requires you to demonstrate that you can maintain compliant right-to-work checking and tracking of sponsored workers. We help you build and document these systems.' },
                { title: 'Suitable Authorising Officer', body: 'You must appoint an Authorising Officer — a senior person employed by and legally resident in the UK — who takes on accountability for the sponsorship arrangements.' },
                { title: 'No previous licence refusal/revocation', body: "If a previous sponsor licence was refused or revoked, the Home Office may apply a 'cooling off' period. SoftHire assesses whether a cooling-off period applies before proceeding." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: C.navyMid, border: `1px solid ${C.borderSubtle}`, borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ color: C.gold, fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{title}</div>
                  <p style={{ ...pStyle, marginBottom: 0, fontSize: '0.87rem' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={sectionLabel}>FAQs</div>
            <h2 style={h2Style}>Frequently asked questions</h2>
            <div style={{ marginTop: '1.5rem' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.borderSubtle}` }}>
                  <button
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'sponsor_licence_application'); }}
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
            <div style={sectionLabel}>Get started</div>
            <h2 style={h2Style}>Ready to apply for your sponsor licence?</h2>
            <p style={pStyle}>Book a free 30-minute eligibility call. We'll confirm whether you qualify, walk you through the process, and provide a fixed-fee quote — no obligation.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_sponsor_licence_application')}>
              Book a free consultation
            </a>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section style={{ padding: '80px 5%', borderTop: `1px solid ${C.borderSubtle}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Also on SoftHire</div>
            <h2 style={h2Style}>Other sponsor licence services</h2>
            <p style={pStyle}>From sector-specific applications to ongoing compliance management.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { to: '/skilled-worker-visa-employer', label: 'Skilled Worker Visa for Employers' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/sponsor-licence-cost', label: 'Sponsor Licence Cost Breakdown' },
                { to: '/sponsor-licence-checklist', label: 'Sponsor Licence Checklist' },
                { to: '/certificate-of-sponsorship', label: 'Certificate of Sponsorship' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'sponsor_licence_application')}>
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
