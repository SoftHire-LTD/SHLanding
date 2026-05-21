import { Link } from 'react-router-dom';
import BlogLayout from '../../blog/BlogLayout';
import { getBlogArticle, type FaqItem } from '../../../lib/blogData';
import { trackCTAClick } from '../../../lib/analytics';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  goldBg: 'rgba(201,168,76,0.10)',
  text: 'rgba(255,255,255,0.82)',
  textHigh: 'rgba(255,255,255,0.94)',
  textMuted: '#8a95b0',
  border: 'rgba(201,168,76,0.25)',
  borderSubtle: 'rgba(255,255,255,0.08)',
  card: '#0f1e45',
};

const h2: React.CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
  fontWeight: 700,
  color: '#ffffff',
  marginTop: '3rem',
  marginBottom: '0.875rem',
  scrollMarginTop: '6rem',
};
const h3: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '1.05rem',
  fontWeight: 600,
  color: C.gold,
  marginTop: '1.75rem',
  marginBottom: '0.6rem',
};
const p: React.CSSProperties = {
  color: C.text,
  fontSize: '0.95rem',
  lineHeight: 1.82,
  marginBottom: '1rem',
};
const intro: React.CSSProperties = {
  color: C.textHigh,
  fontSize: '1.05rem',
  lineHeight: 1.85,
  marginBottom: '1.25rem',
};
const ul: React.CSSProperties = {
  color: C.text,
  fontSize: '0.95rem',
  lineHeight: 1.8,
  marginBottom: '1rem',
  paddingLeft: '1.4rem',
};
const li: React.CSSProperties = { marginBottom: '0.35rem' };
const inlineLink: React.CSSProperties = { color: C.gold, textDecoration: 'none' };
const relatedBox: React.CSSProperties = {
  borderLeft: `3px solid ${C.gold}`,
  background: C.navyMid,
  borderRadius: '0 6px 6px 0',
  padding: '0.875rem 1.25rem',
  marginBottom: '2rem',
  fontSize: '0.9rem',
  color: C.text,
};
const softHireBox: React.CSSProperties = {
  background: C.goldBg,
  border: `1px solid ${C.border}`,
  borderRadius: '8px',
  padding: '1.75rem',
  marginTop: '1.5rem',
};

const faqs: FaqItem[] = [
  {
    question: 'How quickly do I need to respond to a suspension notice?',
    answer:
      "The notice will specify a deadline — typically 20 working days, though this can vary. Don't wait. The strongest responses are assembled in the first week, even if they're refined before submission.",
  },
  {
    question: 'Will my sponsored employees lose their visas?',
    answer:
      "Not automatically. Existing sponsored workers can generally continue working during the suspension period. However, if the suspension escalates to revocation, curtailment of their leave may follow — which is why resolving the suspension quickly matters for your workforce, not just your licence.",
  },
  {
    question: 'Can I assign Certificates of Sponsorship during suspension?',
    answer:
      'No. All new sponsorship activity is frozen. You cannot assign CoS, sponsor new workers, or progress pending sponsorship-based recruitment.',
  },
  {
    question: "What's the difference between suspension and revocation?",
    answer:
      "Suspension is temporary and investigative — the Home Office is looking into concerns and giving you a chance to respond. Revocation is final — your sponsorship permission is permanently removed. Suspension can be resolved; revocation typically cannot.",
  },
  {
    question: 'Is it worth getting legal advice?',
    answer:
      "It depends on the severity. For straightforward administrative issues, a well-prepared internal response may suffice. For serious allegations, unclear compliance positions, or tight deadlines, specialist immigration advice is usually worth the investment. The cost of a strong response is almost always less than the cost of revocation.",
  },
  {
    question: 'Can I reapply if my licence is revoked?',
    answer:
      "There is typically a cooling-off period before reapplication, and the Home Office will scrutinise any new application heavily. Prevention is significantly better than cure.",
  },
];

export default function SponsorLicenceSuspended() {
  const meta = getBlogArticle('sponsor-licence-suspended-what-happens')!;

  return (
    <BlogLayout meta={meta} faqs={faqs}>
      {/* Intro */}
      <p style={intro}>
        A sponsor licence suspension doesn't mean your sponsorship arrangements are over. But the
        way you respond in the days that follow will largely determine whether they survive.
      </p>
      <p style={p}>
        Most employers who receive a suspension notice react in one of two ways: panic, or
        dismissal. Both are wrong. Suspension is an investigative measure — the Home Office has
        identified compliance concerns and wants to look more closely before deciding what happens
        next. That makes it serious. It also makes it recoverable — provided the response is
        structured, evidence-led, and fast.
      </p>
      <p style={p}>
        This guide explains what suspension means in practice, what triggers it, what it costs,
        and — critically — what to do in the first 48 hours.
      </p>

      {/* Section 1 */}
      <h2 id="what-suspension-means" style={h2}>
        What Does Sponsor Licence Suspension Actually Mean?
      </h2>
      <p style={p}>
        Suspension means the Home Office has temporarily paused your sponsorship permissions while
        it investigates compliance concerns.
      </p>
      <p style={p}>
        You remain a licence holder in a technical sense. But your ability to use the licence is
        frozen. In practice, you will be unable to:
      </p>
      <ul style={ul}>
        <li style={li}>Assign new Certificates of Sponsorship (CoS)</li>
        <li style={li}>Sponsor new overseas workers</li>
        <li style={li}>Progress any sponsorship-based recruitment</li>
      </ul>
      <p style={p}>
        This is not the same as revocation. The distinction is critical. Suspension is
        investigative and temporary. Revocation is a final enforcement outcome — the permanent
        removal of your ability to sponsor workers. Suspension can be resolved. Revocation, in
        most cases, cannot.
      </p>

      {/* Section 2 */}
      <h2 id="why-licences-get-suspended" style={h2}>
        Why Licences Get Suspended
      </h2>
      <p style={p}>
        The triggers are well-established. But the pattern behind most suspensions is less obvious
        than employers expect.
      </p>

      <h3 style={h3}>Sponsor Duty Failures</h3>
      <p style={p}>
        Licensed sponsors carry a range of ongoing obligations: record-keeping, reporting, right
        to work compliance, and monitoring responsibilities for every sponsored worker.
      </p>
      <p style={p}>Common failures include:</p>
      <ul style={ul}>
        <li style={li}>
          Not reporting a sponsored employee's resignation, dismissal, or prolonged unauthorised
          absence
        </li>
        <li style={li}>Failing to notify significant salary changes</li>
        <li style={li}>Incomplete or inaccessible employee records</li>
        <li style={li}>Weak right to work documentation</li>
        <li style={li}>Outdated sponsor management system (SMS) information</li>
      </ul>
      <p style={p}>
        A single missed report won't normally trigger suspension. But a pattern of failures — or
        evidence that nobody in the organisation clearly owns these obligations — will.
      </p>

      <h3 style={h3}>Genuine Vacancy Concerns</h3>
      <p style={p}>
        The Home Office expects every sponsored role to be real. The vacancy must reflect a
        legitimate operational need, with duties and salary that align with the sponsorship basis
        on which the visa was granted. Red flags include generic or inflated job descriptions,
        duties that don't match the selected SOC code, and salaries inconsistent with the stated
        role.
      </p>

      <h3 style={h3}>Compliance Visit Findings</h3>
      <p style={p}>
        A significant proportion of suspensions follow a Home Office compliance visit. During
        these audits, officials assess HR systems, employee files, reporting history, right to
        work compliance, and the organisation's general understanding of sponsor duties. They may
        also interview sponsored workers directly. Where serious deficiencies are found,
        suspension commonly follows.
      </p>

      <h3 style={h3}>External Intelligence</h3>
      <p style={p}>
        Enforcement can also be triggered by allegations of illegal working, whistleblower
        reports, payroll inconsistencies, or complaints from employees or third parties. The Home
        Office does not need to prove misconduct before suspending a licence — suspension is often
        used precisely to create the space for further investigation.
      </p>

      {/* Section 3 */}
      <h2 id="first-48-hours" style={h2}>
        The First 48 Hours: What To Do Immediately
      </h2>
      <p style={p}>
        This is where most employers either set themselves up for recovery or make the situation
        materially worse.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1rem' }}>
        {[
          {
            n: 1,
            title: 'Read the Suspension Notice in Full — Twice',
            body: "The suspension notice is not a generic warning. It sets out specific concerns, the evidence or allegations being relied upon, and a deadline for your response. It defines the scope of the compliance dispute. Treat it as a legal document, not an administrative letter.",
          },
          {
            n: 2,
            title: 'Lock Down Your Compliance Records',
            body: "Before you respond to anything, secure your current position. Pull together sponsored worker files, SMS records, reporting logs, right to work documentation, payroll records, and employment contracts. You need to know the actual state of your compliance — not what you assume it to be.",
          },
          {
            n: 3,
            title: 'Establish Who Owns the Response',
            body: "This is not an HR-only problem. Effective responses typically require input from HR, operations, finance, and whoever manages day-to-day sponsor licence administration. Assign a single point of ownership for coordinating the response.",
          },
          {
            n: 4,
            title: 'Communicate Internally — Carefully',
            body: "Your sponsored employees will likely hear about the suspension. Be factual: explain that the licence is under review, that their employment and existing visa status are not immediately affected, and that you will keep them informed. Do not speculate on outcomes.",
          },
          {
            n: 5,
            title: 'Assess Whether You Need External Support',
            body: "Not every suspension requires external legal advice. But if the allegations are serious, if you're unsure about the strength of your compliance position, or if the response deadline is tight, this is not the time to economise. The cost of a strong response is a fraction of the cost of revocation.",
          },
        ].map(({ n, title, body }) => (
          <div
            key={n}
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '1.25rem',
              background: C.card,
              border: `1px solid ${C.borderSubtle}`,
              borderRadius: '8px',
            }}
          >
            <span
              style={{
                background: C.gold,
                color: C.navy,
                fontWeight: 700,
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '0.82rem',
                marginTop: '2px',
              }}
            >
              {n}
            </span>
            <div>
              <p style={{ margin: '0 0 0.4rem', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                {title}
              </p>
              <p style={{ ...p, marginBottom: 0 }}>{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 4 */}
      <h2 id="operations-during-suspension" style={h2}>
        What Happens to Your Operations During Suspension
      </h2>

      <h3 style={h3}>Recruitment Freezes</h3>
      <p style={p}>
        The most immediate commercial impact is the inability to assign new CoS. For employers
        actively recruiting internationally — particularly in care, engineering, healthcare,
        technology, and hospitality — this creates a hard stop on pipeline activity. Offers
        conditional on sponsorship cannot be progressed. Candidates may withdraw. Recruitment
        timelines slip.
      </p>

      <h3 style={h3}>Existing Sponsored Workers</h3>
      <p style={p}>
        Current sponsored employees can generally continue working during the investigation.
        Their immigration status does not automatically become invalid because the employer's
        licence has been suspended. However, the position is not entirely stable. Issues can arise
        where visa extensions are approaching, role changes require sponsorship action, or the
        suspension later escalates into revocation.
      </p>

      <h3 style={h3}>The Cost Dimension</h3>
      <p style={p}>
        Employers tend to underestimate the financial exposure. Suspension costs compound quickly:
      </p>
      <ul style={ul}>
        <li style={li}>Legal and advisory fees for preparing the compliance response</li>
        <li style={li}>
          Recruitment delay costs — stalled hires against critical vacancies, agency fees for
          interim cover, lost productivity
        </li>
        <li style={li}>CoS wastage — allocated certificates that cannot be actioned</li>
        <li style={li}>
          Retention risk — sponsored workers who begin exploring alternative employers as a hedge
          against revocation
        </li>
        <li style={li}>
          Internal resource diversion — senior HR, legal, and leadership time redirected to
          managing the response
        </li>
      </ul>
      <p style={p}>
        For mid-sized employers, the total cost of a suspension — even one that is successfully
        resolved — can run well into five figures.
      </p>

      <h3 style={h3}>Duration and Uncertainty</h3>
      <p style={p}>
        There is no fixed statutory timeframe. Duration depends on the seriousness of the
        concerns, the quality of the employer's response, whether additional investigation or site
        visits are required, and Home Office operational capacity. Some suspensions resolve within
        weeks. Others extend for months. The uncertainty itself creates operational strain that
        compounds over time.
      </p>

      {/* Section 5 */}
      <h2 id="possible-outcomes" style={h2}>
        Possible Outcomes
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            background: C.card,
            border: `1px solid rgba(100,200,100,0.2)`,
            borderTop: '3px solid rgba(100,200,100,0.6)',
            borderRadius: '8px',
            padding: '1.25rem',
          }}
        >
          <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
            Suspension Lifted
          </p>
          <p style={{ ...p, marginBottom: 0, fontSize: '0.88rem' }}>
            Where the Home Office is satisfied with the employer's explanation and remediation,
            the licence is reinstated. Normal sponsorship permissions resume. This is the target
            outcome for every employer in this position.
          </p>
        </div>
        <div
          style={{
            background: C.card,
            border: `1px solid rgba(255,200,50,0.2)`,
            borderTop: `3px solid ${C.gold}`,
            borderRadius: '8px',
            padding: '1.25rem',
          }}
        >
          <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
            Licence Downgraded
          </p>
          <p style={{ ...p, marginBottom: 0, fontSize: '0.88rem' }}>
            The Home Office may conclude that compliance concerns exist but don't justify full
            revocation. This can result in a downgrade from A-rating to B-rating, or other
            remedial measures. Disruptive, but survivable.
          </p>
        </div>
        <div
          style={{
            background: C.card,
            border: `1px solid rgba(220,60,60,0.25)`,
            borderTop: '3px solid rgba(220,60,60,0.7)',
            borderRadius: '8px',
            padding: '1.25rem',
          }}
        >
          <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
            Sponsor Licence Revoked
          </p>
          <p style={{ ...p, marginBottom: 0, fontSize: '0.88rem' }}>
            Where the Home Office concludes the organisation cannot be trusted to meet sponsor
            obligations, revocation follows. This removes sponsorship permission entirely and
            triggers curtailment proceedings for affected sponsored workers.
          </p>
        </div>
      </div>
      <p style={p}>
        This is the outcome that justifies taking suspension seriously from the first hour.
      </p>

      {/* Section 6 */}
      <h2 id="building-the-response" style={h2}>
        Building the Response
      </h2>
      <p style={p}>
        A good response is not a letter of apology. It is a structured, evidence-led submission
        that addresses the specific concerns raised and demonstrates that the organisation has
        both corrected the issues and put systems in place to prevent recurrence.
      </p>

      <h3 style={h3}>Address Each Allegation Individually</h3>
      <p style={p}>
        The suspension notice sets out specific concerns. Your response should address each one
        separately, with evidence. Generic assurances about "commitment to compliance" carry no
        weight.
      </p>

      <h3 style={h3}>Lead With Evidence, Not Narrative</h3>
      <p style={p}>
        Supporting documentation matters more than explanations. Employment contracts, payroll
        records, attendance logs, internal reporting records, right to work documentation, and
        organisational policies all form part of a credible response.
      </p>

      <h3 style={h3}>Show Remediation, Not Just Denial</h3>
      <p style={p}>
        The Home Office expects to see that problems have been corrected. If reporting obligations
        were missed, show the new process. If records were incomplete, show the updated files. If
        SMS governance was unclear, show the revised ownership structure. Simply denying concerns
        is rarely enough.
      </p>

      <h3 style={h3}>Be Professional and Proportionate</h3>
      <p style={p}>
        Emotional, vague, or adversarial responses rarely help. The tone should be factual,
        structured, and focused on demonstrating compliance capability.
      </p>

      {/* Section 7 */}
      <h2 id="reducing-suspension-risk" style={h2}>
        Reducing Suspension Risk: What Actually Works
      </h2>
      <p style={p}>
        The most common root cause of sponsor licence problems is not deliberate non-compliance.
        It is fragmented operational ownership.
      </p>
      <p style={p}>
        Immigration compliance in most organisations sits awkwardly between HR, operations,
        finance, and legal — with no single function clearly owning the end-to-end process.
        Reporting obligations get missed not because anyone intended to breach them, but because
        nobody was certain it was their responsibility.
      </p>
      <p style={p}>The employers who avoid suspension tend to share a few characteristics:</p>
      <ul style={ul}>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Clear ownership</strong> — one named individual or
          function owns sponsor compliance, with defined accountability
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Structured reporting processes</strong> — not
          dependent on institutional memory or ad hoc reminders
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Organised employee records</strong> — accessible,
          current, and audit-ready at any point
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Regular internal audits</strong> — proactive
          compliance reviews, not reactive scrambles after a Home Office letter arrives
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Trained teams</strong> — HR and operational staff
          who understand what sponsor duties require
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Robust right to work controls</strong> — systematic
          checks, not paper exercises
        </li>
      </ul>

      <div style={relatedBox}>
        <Link
          to="/blog/home-office-compliance-visit-preparation"
          style={inlineLink}
        >
          How to prepare for a Home Office compliance visit →
        </Link>
      </div>

      {/* Section 8 */}
      <h2 id="how-softhire-helps" style={h2}>
        How SoftHire Helps
      </h2>
      <p style={p}>
        Every suspension trigger described in this article — missed reporting deadlines,
        inconsistent records, unclear SMS ownership, poor audit readiness — stems from the same
        root cause: immigration compliance managed through spreadsheets, email chains, and
        institutional memory rather than structured systems.
      </p>
      <p style={p}>
        SoftHire replaces that fragile manual layer with a compliance infrastructure designed
        around the way sponsor duties actually work:
      </p>
      <div style={softHireBox}>
        <ul style={{ ...ul, marginBottom: 0 }}>
          <li style={li}>
            Automated reporting workflows that flag obligations before they become breaches
          </li>
          <li style={li}>
            Structured employee records mapped to Home Office audit requirements, not internal HR
            convenience
          </li>
          <li style={li}>
            Clear compliance ownership with audit trails that demonstrate governance to regulators
          </li>
          <li style={li}>
            Deadline tracking and escalation so that no reporting obligation depends on someone
            remembering
          </li>
        </ul>
      </div>
      <p style={{ ...p, marginTop: '1rem' }}>
        The organisations that avoid suspension aren't necessarily more diligent. They have better
        systems.
      </p>
      <p style={p}>
        If your organisation holds a sponsor licence — or is applying for one — and you want to
        understand where your compliance gaps are,{' '}
        <Link to={{ pathname: '/', hash: '#contact' }} style={inlineLink} onClick={() => trackCTAClick('get_in_touch', 'blog_body_suspension')}>
          get in touch
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
