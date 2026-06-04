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
  { n: '01', title: 'Establish your UK presence', body: "A non-UK company must have a genuine UK presence to sponsor workers. This means incorporating a UK subsidiary, branch, or entity through Companies House. We work alongside your corporate lawyers to structure the entity correctly for immigration purposes." },
  { n: '02', title: 'Appoint a UK-based Authorising Officer', body: "The Authorising Officer must be employed by and legally resident in the UK. For an overseas company expanding into the UK, this is often the first UK hire, a relocated director, or a locally-recruited senior manager. SoftHire advises on eligibility." },
  { n: '03', title: 'Gather overseas business evidence', body: "The Home Office requires evidence that your overseas parent is a genuine operating business — accounts, registration documents, evidence of clients, and trading history. We prepare this evidence package alongside the UK application documents." },
  { n: '04', title: 'Apply for the sponsor licence', body: "We submit the sponsor licence application through the SMS with all supporting documentation. For overseas-parent applications, we include a cover letter explaining the corporate structure and why the UK entity genuinely needs to sponsor overseas workers." },
  { n: '05', title: 'Set up compliance from day one', body: "New UK entities of overseas companies are subject to enhanced scrutiny. SoftHire establishes your right-to-work procedures, HR records system, and reporting processes before your first worker starts, ensuring you pass any early compliance visit." },
];

const FAQS = [
  { q: 'Can a foreign company get a UK sponsor licence without a UK entity?', a: "No. The Home Office requires the sponsoring entity to be based in the UK. An overseas company must incorporate a UK subsidiary, branch, or other legal entity before applying for a sponsor licence. The UK entity must be genuinely operational — a dormant or shell entity will not qualify." },
  { q: 'What counts as evidence of genuine trading for a new UK entity?', a: "For a newly incorporated UK entity of an overseas parent, the Home Office accepts: evidence of the parent company's trading activity; contracts with UK clients or suppliers; evidence of an office lease; payroll evidence; and a credible business plan showing why UK operations require sponsored workers. SoftHire structures this evidence package for maximum credibility." },
  { q: 'Can we sponsor intra-company transfers from our overseas offices?', a: "Yes, provided you hold a sponsor licence and the worker meets the eligibility criteria for the Intra-Company Transfer (ICT) or Senior or Specialist Worker route. ICT applies to workers moving between linked companies (parent, subsidiary, or related) where the overseas employer is linked to the UK sponsor." },
  { q: 'Does the Authorising Officer need to be based in the UK full-time?', a: "Yes. The Authorising Officer must be legally employed by the UK entity, legally resident in the UK, and must not be excluded from the role due to criminal convictions. Part-time arrangements are acceptable provided the person is genuinely UK-based." },
  { q: 'How long does it take for a new overseas-parent entity to get a sponsor licence?', a: "Standard processing is approximately 8 weeks. For new UK entities, the Home Office may conduct more thorough scrutiny of the evidence provided. Priority processing (approximately 10 working days) is available. SoftHire recommends allowing 12 weeks from entity incorporation to licence approval to account for document gathering time." },
  { q: 'Can a sole trader or freelancer from overseas get a sponsor licence?', a: "No. Sponsor licences are only granted to organisations — not individuals acting as sole traders in their own name. A foreign national who wants to establish a UK business and sponsor workers must incorporate a UK company first." },
];

export default function SponsorLicenceForeignCompaniesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence for Foreign Companies Expanding to UK | SoftHire"
        description="UK sponsor licence for overseas companies and foreign businesses. We guide you through entity setup, Authorising Officer requirements, and the full Home Office application. IAA-regulated."
        path="/sponsor-licence-for-foreign-companies"
        breadcrumb={[{ name: 'Sponsor Licence for Foreign Companies' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence for Foreign Companies',
          description: 'UK sponsor licence application service for overseas businesses expanding to the UK, including entity structure advice, Authorising Officer requirements, and Home Office submission.',
          url: 'https://www.softhire.co.uk/sponsor-licence-for-foreign-companies',
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 100%)` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.goldBg, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ color: C.gold, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>International business expansion</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, maxWidth: '760px', marginBottom: '1.25rem' }}>
              Sponsor Licence for Foreign Companies Expanding to the UK
            </h1>
            <p style={{ ...pStyle, fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              If you're an overseas business setting up in the UK and need to bring your team with you — or recruit overseas talent into your new UK entity — SoftHire navigates the unique requirements that apply to foreign-owned UK employers.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/#contact"
                style={{ background: C.gold, color: C.navy, fontWeight: 700, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackBookAssessment('hero_foreign_companies')}
              >
                Get a free eligibility assessment
              </a>
              <a
                href="#our-process"
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontWeight: 600, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
                onClick={() => trackAnchorClick('our-process', 'foreign_companies')}
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['UK entity structure advice', 'Overseas parent evidence packages', 'ICT & Skilled Worker routes', 'Early compliance setup', 'IAA-regulated solicitors'].map((t) => (
              <span key={t} style={{ color: C.textMuted, fontSize: '0.83rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.gold }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Key challenges ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Unique challenges</div>
            <h2 style={h2Style}>What makes overseas-parent applications different</h2>
            <p style={pStyle}>Foreign businesses expanding to the UK face additional scrutiny that UK-founded employers do not. The Home Office looks carefully at the commercial rationale for the UK entity and whether it is genuinely operational — not just a vehicle for getting staff into the country.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { title: 'UK entity requirement', body: "A sponsor licence is granted to a UK-based entity. Your overseas company must incorporate a UK subsidiary, branch, or LLP before applying. The UK entity must be genuinely operational." },
                { title: 'Authorising Officer must be UK-based', body: "The Authorising Officer cannot be based overseas. For companies whose senior leadership is all abroad, this requires either relocating a director or appointing a senior UK-based manager to take on the role." },
                { title: 'Evidence of genuine UK trading', body: "For newly established UK entities, the Home Office requires compelling evidence that the UK business is real and the roles being sponsored are genuine. Applicants without this evidence face higher refusal risk." },
                { title: 'Intra-Company Transfer route', body: "If you want to move existing employees from your overseas offices to the UK, the Intra-Company Transfer (Senior or Specialist Worker) route may be available alongside or instead of the Skilled Worker route." },
                { title: 'Enhanced compliance scrutiny', body: "New UK entities with overseas parents often receive compliance visits sooner than purely UK businesses. The Home Office verifies that the UK operation is genuine and that compliance systems are in place." },
                { title: 'TUPE and employment law considerations', body: "Bringing workers from an overseas entity to a UK entity may involve TUPE (if acquiring a UK business), employment contract novation, and payroll restructuring. We coordinate with your employment lawyers where needed." },
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
        <section id="our-process" style={{ padding: '80px 5%', background: C.navyMid }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our process</div>
            <h2 style={h2Style}>How SoftHire manages the application for foreign companies</h2>
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
                    onClick={() => { setOpenFAQ(openFAQ === i ? null : i); trackFAQOpen(f.q, 'foreign_companies'); }}
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
            <div style={sectionLabel}>Start your UK expansion</div>
            <h2 style={h2Style}>Ready to bring your team to the UK?</h2>
            <p style={pStyle}>Book a free 30-minute consultation. We'll assess your entity structure, confirm which visa routes apply to your staff, and give you a timeline and cost breakdown for your UK expansion.</p>
            <a href="/#contact" style={{ display: 'inline-block', background: C.gold, color: C.navy, fontWeight: 700, padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '1rem' }} onClick={() => trackBookAssessment('cta_foreign_companies')}>
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
                { to: '/skilled-worker-visa-employer', label: 'Skilled Worker Visa for Employers' },
                { to: '/sponsor-licence-compliance', label: 'Compliance Retainer' },
                { to: '/certificate-of-sponsorship', label: 'Certificate of Sponsorship' },
                { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }} onClick={() => trackSectorLinkClick(to, 'foreign_companies')}>
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
