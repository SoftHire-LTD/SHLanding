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
const checklistGroup: React.CSSProperties = {
  background: C.card,
  border: `1px solid ${C.borderSubtle}`,
  borderRadius: '8px',
  padding: '1.25rem 1.5rem',
  marginBottom: '1.25rem',
};

interface ChecklistItemProps {
  children: React.ReactNode;
}
const ChecklistItem = ({ children }: ChecklistItemProps) => (
  <li
    style={{
      display: 'flex',
      gap: '0.75rem',
      padding: '0.45rem 0',
      borderBottom: `1px solid ${C.borderSubtle}`,
      color: C.text,
      fontSize: '0.9rem',
      lineHeight: 1.65,
      listStyle: 'none',
    }}
  >
    <span style={{ color: C.gold, flexShrink: 0, marginTop: '1px', fontSize: '1rem' }}>☐</span>
    <span>{children}</span>
  </li>
);

const faqs: FaqItem[] = [
  {
    question: 'How much notice will I get before a compliance visit?',
    answer:
      "For announced visits, you will typically receive a few weeks' notice by letter or email. However, the Home Office can and does conduct unannounced visits with no prior notification. Post-licence visits in particular may be unannounced, especially where the visit is triggered by specific concerns or intelligence. The only reliable preparation strategy is maintaining continuous compliance readiness.",
  },
  {
    question: 'Can I refuse or reschedule a compliance visit?',
    answer:
      "Refusing a visit is likely to be treated as non-cooperation and could itself trigger enforcement action. Rescheduling an announced visit may be possible in limited circumstances, but the Home Office is under no obligation to accommodate requests. For unannounced visits, rescheduling is not an option — officials will expect access on the day they arrive.",
  },
  {
    question: 'Do auditors always interview sponsored workers?',
    answer:
      "Not always, but frequently. Worker interviews are a standard tool and may be conducted without the employer present. Auditors use them to verify that the employee's understanding of their role, duties, and salary is consistent with sponsorship records. You cannot script or coach employees for these interviews — and attempting to do so, if discovered, would create a serious credibility problem.",
  },
  {
    question: 'What if we identify compliance gaps during our own preparation?',
    answer:
      "Fix them before the visit and document that you did so. The Home Office looks more favourably on organisations that identify and remediate issues proactively than on those where the same issues are discovered by auditors. Self-identified and corrected gaps, supported by evidence of the remediation, demonstrate exactly the kind of compliance maturity the Home Office wants to see.",
  },
  {
    question: 'Are multi-site employers audited at every location?',
    answer:
      "Not necessarily at every location in a single visit, but auditors can and do visit satellite sites — and compliance standards are expected to be consistent across all locations. A common failure pattern is strong compliance at head office with significant gaps at operational sites. If you operate across multiple locations, your preparation must include those sites, not just your primary office.",
  },
  {
    question: 'What should I do immediately after the visit ends?',
    answer:
      "Document everything while it is fresh: what was asked, what documents were reviewed, what concerns were raised. If the auditors flagged specific issues during the visit, begin addressing them immediately — do not wait for the formal outcome letter. Early remediation strengthens your position regardless of what follows.",
  },
];

export default function ComplianceVisitPreparation() {
  const meta = getBlogArticle('home-office-compliance-visit-preparation')!;

  return (
    <BlogLayout meta={meta} faqs={faqs}>
      {/* Intro */}
      <p style={intro}>
        A Home Office compliance visit is not a formality. It is the single event most likely to
        determine whether your sponsor licence continues, gets suspended, or is revoked entirely.
      </p>
      <p style={p}>
        The problem is not that employers take compliance visits lightly. Most take them very
        seriously — once they know one is coming. The problem is that the preparation window is
        often too short to fix structural weaknesses, and the things that create the worst
        impressions are rarely the things employers expect.
      </p>
      <p style={p}>
        Compliance visits are not primarily about documents. They are about whether the Home
        Office believes your organisation has functioning systems and genuine operational control
        over its sponsorship obligations. Documents are evidence of that. But so is how your team
        responds to questions, how quickly you can retrieve information, and whether different
        people in your organisation tell a consistent story about how compliance works.
      </p>
      <p style={p}>
        This guide covers what actually happens during a compliance visit, what auditors focus on
        in practice, the preparation checklist that matters, and the mistakes that most commonly
        turn a routine audit into an enforcement event.
      </p>

      {/* Section 1 */}
      <h2 id="what-is-a-compliance-visit" style={h2}>
        What Is a Compliance Visit?
      </h2>
      <p style={p}>
        A compliance visit is a Home Office audit of your organisation's ability to meet its
        sponsor licence obligations. It can cover any aspect of your sponsorship arrangements —
        record-keeping, reporting, right to work compliance, vacancy legitimacy, SMS governance,
        and the operational reality of how sponsored workers are employed.
      </p>
      <p style={p}>
        Visits may be announced or unannounced. Pre-licence visits are standard for new
        applicants. Post-licence visits can happen at any time during the life of your licence,
        with no requirement for advance notice. Some are triggered by specific intelligence or
        complaints. Others are routine.
      </p>
      <p style={p}>
        The officials conducting the visit are assessing a simple question: does this organisation
        operate like a competent, trustworthy sponsor? Everything that follows — the document
        requests, the interviews, the operational questions — is in service of answering that.
      </p>

      {/* Section 2 */}
      <h2 id="announced-vs-unannounced" style={h2}>
        Announced vs Unannounced: What to Expect
      </h2>

      <h3 style={h3}>Announced Visits</h3>
      <p style={p}>
        You will receive advance notice, typically by letter or email, specifying the date and
        sometimes the scope. This gives you a preparation window — usually a few weeks — but it
        is not an invitation to fabricate compliance. Auditors know what a hastily assembled file
        looks like. The preparation window is for organising and presenting evidence of compliance
        that already exists, not for creating it from scratch.
      </p>

      <h3 style={h3}>Unannounced Visits</h3>
      <p style={p}>
        Officials arrive without prior notification. This is where genuine compliance maturity is
        tested. Unannounced visits reveal the actual state of your systems — not the version you
        would present with two weeks' notice. If your compliance depends on preparation rather
        than embedded process, an unannounced visit will expose that immediately.
      </p>
      <p style={{ ...p, fontStyle: 'italic', color: C.textHigh }}>
        An announced visit tests whether your compliance can be demonstrated. An unannounced
        visit tests whether your compliance actually exists.
      </p>

      {/* Section 3 */}
      <h2 id="what-auditors-focus-on" style={h2}>
        What Auditors Actually Focus On
      </h2>
      <p style={p}>
        Employers tend to prepare for compliance visits by assembling documents. That is necessary
        but insufficient. Understanding what auditors are actually evaluating — and the impressions
        that carry disproportionate weight — is what separates adequate preparation from effective
        preparation.
      </p>

      <h3 style={h3}>The First 30 Minutes Matter Most</h3>
      <p style={p}>
        First impressions in compliance visits are remarkably sticky. Within the first half hour,
        auditors are forming a judgement about whether this is an organisation that controls its
        sponsor obligations or one that is scrambling. Three things shape that initial impression
        more than anything else:
      </p>
      <ul style={ul}>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Can you produce a sponsored worker list immediately?</strong>{' '}
          Not in ten minutes — immediately. A current, accurate list of all sponsored workers with
          CoS reference numbers, start dates, visa expiry dates, and role details. If this cannot
          be produced on the spot, the visit begins on the back foot.
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Does the authorising officer know they are the authorising officer?</strong>{' '}
          This sounds absurd, but it happens regularly. If the AO cannot explain basic reporting
          obligations, the credibility damage is immediate and difficult to recover from.
        </li>
        <li style={li}>
          <strong style={{ color: '#fff' }}>Is there a clear answer to "who is responsible for sponsor compliance"?</strong>{' '}
          Not a vague reference to "HR handles it." A named individual, a defined process, an
          explanation of how reporting obligations are tracked and discharged.
        </li>
      </ul>

      <h3 style={h3}>Document and Record Assessment</h3>
      <p style={p}>
        Auditors will review sponsored worker files, typically requesting a selection. They are
        checking for:
      </p>
      <ul style={ul}>
        <li style={li}>Passport copies — current, legible, complete biographical data pages</li>
        <li style={li}>
          Right to work evidence — compliant initial checks with documented dates, follow-up
          checks completed where required
        </li>
        <li style={li}>
          Employment contracts — matching the role, salary, and working conditions declared on
          the CoS
        </li>
        <li style={li}>
          Salary evidence — payslips confirming the actual salary matches what was sponsored
        </li>
        <li style={li}>Current contact details for each sponsored worker</li>
        <li style={li}>Absence and attendance records with evidence of monitoring</li>
      </ul>
      <p style={p}>
        The standard they are applying is not "does this file exist?" It is "could this file
        withstand scrutiny?" An employment contract that lists a different job title from the CoS,
        a payslip showing a salary below the sponsored amount, a right to work check dated after
        the employment start date — these are the details that turn a file review into a
        compliance concern.
      </p>

      <h3 style={h3}>Reporting History Review</h3>
      <p style={p}>
        Auditors will assess whether your organisation has been meeting its reporting obligations.
        The gap they are looking for is between what HR records show happened and what the SMS
        shows was reported. If HR records indicate a sponsored worker resigned three months ago
        but no SMS report was filed, that is not an administrative delay. That is a compliance
        failure.
      </p>

      <h3 style={h3}>Sponsored Worker Interviews</h3>
      <p style={p}>
        Auditors may interview sponsored workers directly, usually without the employer present.
        They are checking whether the employee's account of their role, duties, salary, and
        working conditions is consistent with what was declared on the CoS. Inconsistencies are
        damaging — a worker who describes duties materially different from their job description,
        or who states a salary different from what payroll records show, raises immediate
        credibility concerns about the employer's vacancy integrity.
      </p>

      <h3 style={h3}>Operational and Governance Questions</h3>
      <p style={p}>
        Beyond documents, auditors will probe how compliance is managed in practice. Typical
        questions include:
      </p>
      <ul style={ul}>
        <li style={li}>How do you track reporting deadlines?</li>
        <li style={li}>What happens when a sponsored worker's visa is approaching expiry?</li>
        <li style={li}>Who is responsible for right to work follow-up checks?</li>
        <li style={li}>How do you monitor sponsored worker attendance?</li>
        <li style={li}>What process do you follow when a sponsored worker changes role?</li>
        <li style={li}>How are new managers briefed on sponsor obligations?</li>
      </ul>
      <p style={p}>
        The answers they are evaluating are not the policy answers. They are the operational
        answers — what actually happens, not what the handbook says should happen.
      </p>

      {/* Section 4 */}
      <h2 id="preparation-checklist" style={h2}>
        The Preparation Checklist
      </h2>
      <p style={p}>
        This checklist is designed to be worked through systematically in advance of an announced
        visit, and maintained on an ongoing basis so that unannounced visits are survivable
        without notice.
      </p>

      <h3 style={h3}>SMS and Governance</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            All named SMS users (authorising officer, Level 1 User, Level 2 Users) are current
            employees in roles where they can discharge their responsibilities
          </ChecklistItem>
          <ChecklistItem>
            The authorising officer can explain sponsor duties and describe how compliance is
            managed operationally
          </ChecklistItem>
          <ChecklistItem>
            Business details on the SMS — registered address, trading name, nature of business,
            key personnel — are accurate and current
          </ChecklistItem>
          <ChecklistItem>
            There is a named individual responsible for day-to-day sponsor compliance, and that
            person can articulate the role clearly
          </ChecklistItem>
          <ChecklistItem>
            Any organisational changes in the last 12 months (ownership, structure, directors,
            addresses) have been reported
          </ChecklistItem>
        </div>
      </ul>

      <h3 style={h3}>Sponsored Worker Records</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            A complete, current list of all sponsored workers can be produced within minutes —
            including CoS reference numbers, start dates, visa expiry dates, job titles, and
            salaries
          </ChecklistItem>
          <ChecklistItem>
            For each sponsored worker, the following are on file and accessible: passport copy,
            right to work evidence, employment contract, salary evidence, contact details
          </ChecklistItem>
          <ChecklistItem>
            Employment contracts match CoS details — job title, SOC code, salary, working hours,
            work location
          </ChecklistItem>
          <ChecklistItem>
            Payroll records confirm actual salaries match sponsored amounts
          </ChecklistItem>
          <ChecklistItem>
            Files are organised consistently, not scattered across email, shared drives, and
            individual desktops
          </ChecklistItem>
        </div>
      </ul>

      <h3 style={h3}>Right to Work Compliance</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            Initial right to work checks were completed before employment commenced, with
            documented check dates
          </ChecklistItem>
          <ChecklistItem>
            Follow-up checks are scheduled and tracked for workers with time-limited permission
          </ChecklistItem>
          <ChecklistItem>
            There is a documented process for right to work checking, with a named process owner
          </ChecklistItem>
          <ChecklistItem>
            Check records include the method used, the documents seen, the date, and who
            conducted the check
          </ChecklistItem>
          <ChecklistItem>
            Expired documents have been followed up and records updated
          </ChecklistItem>
        </div>
      </ul>

      <h3 style={h3}>Reporting Obligations</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            All reportable events in the last 12 months have been filed — resignations,
            dismissals, absences over 10 working days, salary changes, role changes, visa issues
          </ChecklistItem>
          <ChecklistItem>Reports were filed within required timeframes</ChecklistItem>
          <ChecklistItem>
            There is no gap between what HR records show happened and what the SMS reflects
          </ChecklistItem>
          <ChecklistItem>
            There is a defined process for identifying reportable events and ensuring they reach
            whoever files the SMS report
          </ChecklistItem>
          <ChecklistItem>The process does not depend on a single individual remembering</ChecklistItem>
        </div>
      </ul>

      <h3 style={h3}>Vacancy Integrity</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            Each sponsored worker's actual duties match the role described on their CoS
          </ChecklistItem>
          <ChecklistItem>Salaries being paid match salaries that were declared</ChecklistItem>
          <ChecklistItem>SOC codes remain appropriate for the work being performed</ChecklistItem>
          <ChecklistItem>
            Any role evolution since the original sponsorship has been assessed for compliance
            implications
          </ChecklistItem>
          <ChecklistItem>
            Workers have not been moved to materially different roles without sponsorship action
          </ChecklistItem>
        </div>
      </ul>

      <h3 style={h3}>Site and Operational Readiness</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <div style={checklistGroup}>
          <ChecklistItem>
            If you operate multiple sites, compliance standards are consistent across all
            locations — not just head office
          </ChecklistItem>
          <ChecklistItem>
            Operational managers at each site understand basic sponsor obligations and know who
            to escalate to
          </ChecklistItem>
          <ChecklistItem>
            Sponsored workers at each site can be identified and their files accessed remotely
            if needed
          </ChecklistItem>
          <li
            style={{
              display: 'flex',
              gap: '0.75rem',
              padding: '0.45rem 0',
              color: C.text,
              fontSize: '0.9rem',
              lineHeight: 1.65,
              listStyle: 'none',
            }}
          >
            <span style={{ color: C.gold, flexShrink: 0, marginTop: '1px', fontSize: '1rem' }}>
              ☐
            </span>
            <span>
              There are no sponsored workers at locations not declared to the Home Office
            </span>
          </li>
        </div>
      </ul>

      {/* Section 5 */}
      <h2 id="mistakes-to-avoid" style={h2}>
        The Mistakes That Turn Visits Into Enforcement Events
      </h2>
      <p style={p}>
        Most compliance visits do not result in suspension or revocation. The ones that do tend
        to share a pattern — and it is rarely about the severity of any single issue.
      </p>

      <h3 style={h3}>Inconsistency Across the Organisation</h3>
      <p style={p}>
        The auditor hears one explanation from the authorising officer, a different version from
        HR, and a third from the operational manager. The policy says one thing; the practice is
        something else. The head office is compliant; the regional sites are not. Inconsistency
        signals that nobody is truly in control of the process.
      </p>

      <h3 style={h3}>Inability to Retrieve Information Quickly</h3>
      <p style={p}>
        If basic records take 30 minutes to locate, auditors do not conclude that you have a
        filing problem. They conclude that you do not have functioning systems. The inability to
        produce a sponsored worker list, a right to work record, or a reporting log promptly —
        particularly during an unannounced visit — is one of the strongest negative signals an
        audit can generate.
      </p>

      <h3 style={h3}>The Authorising Officer Problem</h3>
      <p style={p}>
        An authorising officer who cannot explain sponsor duties, who was appointed as a
        formality, or who has left the business entirely tells the Home Office that compliance
        governance is superficial. This is one of the most common and most avoidable failures.
      </p>

      <h3 style={h3}>Defensiveness</h3>
      <p style={p}>
        Employers who respond to audit questions with defensiveness, deflection, or hostility
        make the auditor's job harder and their own position worse. The most effective approach
        is factual and cooperative: here is what we do, here is the evidence, here is how we
        address gaps where they exist. Auditors are human. An organisation that demonstrates
        genuine engagement with its obligations — even imperfectly — creates a materially better
        impression than one that treats the visit as adversarial.
      </p>

      {/* Section 6 */}
      <h2 id="after-the-visit" style={h2}>
        After the Visit: What Happens Next
      </h2>
      <p style={p}>
        Following the visit, the Home Office will reach a view on your compliance position. Three
        broad outcomes are possible.
      </p>
      <ul style={ul}>
        <li style={{ ...li, marginBottom: '0.6rem' }}>
          <strong style={{ color: '#fff' }}>No further action.</strong> The visit identified no
          material concerns, or concerns were minor and addressed during the visit itself. Your
          licence continues normally.
        </li>
        <li style={{ ...li, marginBottom: '0.6rem' }}>
          <strong style={{ color: '#fff' }}>Action plan or downgrade.</strong> The Home Office
          identifies compliance weaknesses but does not consider them severe enough to justify
          suspension or revocation. You may be placed on an action plan with specific improvement
          requirements, or downgraded from an A-rating to a B-rating.
        </li>
        <li style={{ ...li, marginBottom: '0.6rem' }}>
          <strong style={{ color: '#fff' }}>Suspension or revocation.</strong> Where serious
          compliance failures are identified — particularly systemic ones — the Home Office may
          suspend the licence pending further investigation or proceed directly to revocation.
        </li>
      </ul>
      <p style={p}>
        The outcome frequently depends less on the compliance issues themselves and more on
        whether the Home Office believes the organisation has the systems and intent to operate
        as a competent sponsor going forward. That belief is shaped significantly by what happens
        during the visit.
      </p>

      <div style={relatedBox}>
        <Link to="/blog/sponsor-licence-suspended-what-happens" style={inlineLink}>
          What happens if your sponsor licence is suspended →
        </Link>
      </div>

      {/* Section 7 */}
      <h2 id="how-softhire-helps" style={h2}>
        How SoftHire Helps
      </h2>
      <p style={p}>
        The preparation checklist above works — but only if the underlying compliance
        infrastructure supports it. An employer who needs two weeks of intensive preparation
        before a compliance visit does not have a compliance system. They have a compliance
        project that runs periodically and decays between cycles.
      </p>
      <p style={p}>
        SoftHire builds the infrastructure layer that makes audit readiness a default state
        rather than an event:
      </p>
      <div style={softHireBox}>
        <ul style={{ ...ul, marginBottom: 0 }}>
          <li style={li}>
            Centralised sponsored worker records structured to Home Office audit requirements —
            so the "produce a complete list in minutes" test is passed automatically, not through
            last-minute assembly
          </li>
          <li style={li}>
            Automated reporting workflows that bridge the gap between HR events and SMS reports —
            directly closing the most common audit failure
          </li>
          <li style={li}>
            Right to work tracking with scheduled follow-ups, documented audit trails, and clear
            ownership — so compliance doesn't depend on someone remembering to check a
            spreadsheet
          </li>
          <li style={li}>
            SMS governance monitoring that flags when named users change, business details drift,
            or organisational changes go unreported
          </li>
          <li style={li}>
            Ongoing compliance visibility that replaces the cycle of neglect-and-scramble with
            continuous oversight
          </li>
        </ul>
      </div>
      <p style={{ ...p, marginTop: '1rem' }}>
        The employers who are genuinely ready for an unannounced visit are not the ones who
        prepare hardest. They are the ones whose systems make preparation unnecessary.
      </p>
      <p style={p}>
        If you hold a sponsor licence and want to understand how audit-ready you actually are,{' '}
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          style={inlineLink}
          onClick={() =>
            trackCTAClick('get_in_touch', 'blog_body_compliance_visit')
          }
        >
          get in touch
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
