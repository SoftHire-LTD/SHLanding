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
    question: 'How long is the cooling-off period before I can reapply after revocation?',
    answer:
      'The standard cooling-off period is 12 months from the date of revocation, though this can vary depending on the circumstances. When you do reapply, the Home Office will expect evidence that the compliance failures have been genuinely remedied — which typically means demonstrable investment in new processes and systems, not just assurances.',
  },
  {
    question: 'Can I transfer sponsored workers to another group entity to protect them?',
    answer:
      "If you have a connected entity that holds its own sponsor licence, it may be possible for that entity to sponsor affected workers. However, this requires that entity to meet all sponsorship requirements independently — it is not an automatic transfer. The timing is also critical, as curtailment windows are limited. This needs to be planned and executed quickly, with specialist advice.",
  },
  {
    question:
      "What happens to Certificates of Sponsorship I've already assigned but not yet used?",
    answer:
      "Unused CoS are effectively cancelled upon revocation. The allocation is lost, along with any associated fees. For employers with significant CoS allocations in progress, this represents an immediate sunk cost.",
  },
  {
    question: 'Can I challenge a revocation decision?',
    answer:
      "You can request an administrative review of the decision, but this is not an appeal in the traditional sense. The review is conducted by a different Home Office caseworker and assesses whether the original decision was made in accordance with the rules and guidance. It is not a fresh consideration of the merits. The success rate is not high, and the process does not suspend the effects of revocation while it is ongoing.",
  },
  {
    question: 'Are certain sectors more likely to face revocation?',
    answer:
      'Sectors with historically higher rates of compliance issues — including care, hospitality, food processing, and logistics — tend to face more frequent and intensive scrutiny. Multi-site operators in these sectors are particularly exposed because compliance quality often varies significantly between head office and individual sites. However, revocation can and does affect employers across all sectors.',
  },
  {
    question: 'Does revocation affect my ability to hire EU nationals?',
    answer:
      "No. Post-Brexit immigration rules require sponsorship for most overseas nationals, but EU nationals who hold settled or pre-settled status do not require sponsorship. Revocation affects your ability to sponsor new workers and maintain existing sponsorships — it does not prevent you from hiring individuals who already have independent permission to work in the UK.",
  },
];

export default function WhySponsorLicencesRevoked() {
  const meta = getBlogArticle('why-sponsor-licences-get-revoked')!;

  return (
    <BlogLayout meta={meta} faqs={faqs}>
      {/* Intro */}
      <p style={intro}>
        Sponsor licence revocation is the most severe enforcement outcome the Home Office can
        impose on a licensed sponsor. Unlike suspension, which is temporary and investigative,
        revocation is final. Your ability to sponsor overseas workers ends. Existing sponsored
        employees face curtailment. Recruitment pipelines collapse. And rebuilding from this
        position is significantly harder — and more expensive — than most employers anticipate.
      </p>
      <p style={p}>
        Yet revocation rarely arrives without warning. In the majority of cases, the compliance
        weaknesses that ultimately triggered enforcement were visible months or years before the
        Home Office acted. The missed reports, the incomplete files, the unclear ownership of
        sponsor duties — these accumulate quietly until a compliance visit, an audit, or an
        external complaint brings them into focus all at once.
      </p>
      <p style={p}>
        This guide covers the triggers that most commonly lead to revocation, what the real
        commercial consequences look like, and — most importantly — the compliance audit framework
        that allows employers to identify and close gaps before regulators find them.
      </p>

      {/* Section 1 */}
      <h2 id="what-revocation-means" style={h2}>
        What Does Sponsor Licence Revocation Actually Mean?
      </h2>
      <p style={p}>
        Revocation means the Home Office has concluded that your organisation cannot be trusted to
        meet the obligations that come with sponsor status. It is not a warning. It is not an
        invitation to improve. It is the withdrawal of sponsorship permission.
      </p>
      <p style={p}>In practical terms:</p>
      <ul style={ul}>
        <li style={li}>Your organisation can no longer assign Certificates of Sponsorship</li>
        <li style={li}>All new sponsorship-based recruitment stops immediately</li>
        <li style={li}>
          Existing sponsored workers may face curtailment — their permission to remain in the UK
          shortened, requiring them to find alternative sponsorship, switch immigration category,
          or leave the country
        </li>
        <li style={li}>
          Reapplication is subject to a cooling-off period and significantly heightened scrutiny
        </li>
      </ul>
      <p style={p}>
        The difference between suspension and revocation is not merely one of severity. Suspension
        is the Home Office asking a question: "Is there a compliance problem here?" Revocation is
        the Home Office answering it: "Yes, and we don't believe this organisation can fix it."
      </p>

      {/* Section 2 */}
      <h2 id="why-licences-get-revoked" style={h2}>
        The Triggers: Why Licences Get Revoked
      </h2>
      <p style={p}>
        Revocation is almost never caused by a single mistake. The Home Office is making a
        judgement about institutional capability — whether the organisation has functioning
        systems, genuine oversight, and the operational discipline to meet sponsor obligations on
        an ongoing basis.
      </p>

      <h3 style={h3}>Systematic Sponsor Duty Failures</h3>
      <p style={p}>
        Licensed sponsors carry ongoing compliance obligations that extend well beyond the initial
        application: reporting relevant changes in a sponsored worker's circumstances, maintaining
        prescribed records, and monitoring immigration compliance across all sponsored employment.
      </p>
      <p style={p}>
        The most common failures are prosaic: not reporting a resignation or dismissal within the
        required timeframe, missing prolonged unauthorised absences, failing to notify salary or
        role changes. Individually, these might attract a warning. But when they form a pattern —
        three missed reports over six months, a cluster of incomplete files, reporting obligations
        that nobody in the organisation can explain — the Home Office stops seeing administrative
        slip-ups and starts seeing governance failure.
      </p>
      <p style={p}>
        A missed report is correctable. A pattern of missed reports tells the Home Office that
        compliance is not embedded in how the business operates. That is what drives revocation.
      </p>

      <h3 style={h3}>Genuine Vacancy and Sponsorship Integrity Concerns</h3>
      <p style={p}>
        The Home Office expects every sponsored role to reflect a real operational need, with
        duties and salary consistent with the basis on which the visa was granted. Red flags
        include inflated job titles, vague job descriptions, duties that don't match the selected
        SOC code, and evidence that workers are performing materially different functions from
        those declared. Where the Home Office concludes that sponsorship is being used to
        facilitate migration rather than fill genuine vacancies, trust erodes rapidly.
      </p>

      <h3 style={h3}>Right to Work Compliance Failures</h3>
      <p style={p}>
        Sponsors are expected to operate compliant right to work processes as an ongoing system
        with audit trails, documented ownership, and repeat checks where required. Failures
        typically include incomplete initial checks, expired documentation that was never followed
        up, and absence of any documented process ownership. Where illegal working concerns emerge
        alongside sponsor compliance issues, the Home Office's posture shifts materially.
      </p>

      <h3 style={h3}>Failed Compliance Visits</h3>
      <p style={p}>
        A Home Office compliance visit is often the moment where accumulated weaknesses become
        visible simultaneously. Some of the most damaging impressions arise not from technical
        breaches, but from operational confusion: staff unable to explain sponsor processes,
        contradictory accounts from different teams, inability to retrieve key records under time
        pressure. For multi-site employers, this is a particularly acute risk — compliance may
        exist at head office but dissolve entirely at site level.
      </p>

      <h3 style={h3}>Unreported Organisational Changes</h3>
      <p style={p}>
        Corporate events — acquisitions, mergers, restructures, ownership changes, office
        relocations — frequently create overlooked sponsor compliance obligations. Businesses
        naturally focus on commercial execution during these transitions, and sponsor licence
        duties get deprioritised or missed entirely. A change of ownership that isn't reported, a
        restructure that alters the employing entity without updating the SMS, an office move that
        renders the licence address incorrect — these can each independently trigger enforcement
        action.
      </p>

      <h3 style={h3}>Fragmented Compliance Ownership</h3>
      <p style={p}>
        This is the root cause that underpins most of the triggers above. Not the missed report
        itself, but the fact that nobody clearly owned the obligation to file it. In most
        organisations, immigration compliance sits awkwardly between HR, legal, operations, and
        finance. HR assumes legal is handling reporting. Legal assumes HR is managing records.
        Operational managers don't know sponsor duties exist. The SMS has a named Level 1 User
        who left the business eighteen months ago. The Home Office does not see this as
        unfortunate. It sees it as a reason to withdraw sponsor status.
      </p>

      {/* Section 3 */}
      <h2 id="what-revocation-costs" style={h2}>
        What Revocation Actually Costs
      </h2>
      <p style={p}>
        Employers tend to think about revocation in regulatory terms. The commercial reality is
        often worse than the compliance event itself.
      </p>

      <h3 style={h3}>Direct Costs</h3>
      <p style={p}>
        The immediate financial exposure includes legal and advisory fees for any administrative
        review challenge, recruitment rebuild costs for roles that can no longer be filled through
        sponsorship, emergency agency or contractor spend to cover staffing gaps, and wasted CoS
        allocation fees for certificates that were assigned but can never be actioned.
      </p>

      <h3 style={h3}>Workforce Disruption</h3>
      <p style={p}>
        Revocation doesn't just prevent future hiring. It destabilises your existing sponsored
        workforce. Curtailment gives affected workers a limited window to find alternative
        sponsorship or leave the UK. In practice, this means your most internationally mobile
        employees — often in specialist or hard-to-fill roles — begin exploring alternatives
        immediately. The retention damage frequently extends beyond sponsored workers themselves.
      </p>

      <h3 style={h3}>Reapplication Costs and Constraints</h3>
      <p style={p}>
        Revocation is not easily reversed. There is typically a cooling-off period before a fresh
        application can be submitted, and the Home Office will apply significantly heightened
        scrutiny to any organisation that has previously had a licence revoked. For mid-sized
        employers, the total cost of revocation — direct expenses, workforce disruption,
        productivity loss, reapplication investment — can comfortably reach six figures.
      </p>

      <h3 style={h3}>Reputational Damage</h3>
      <p style={p}>
        Internally, revocation raises difficult questions about governance, leadership oversight,
        and compliance discipline. Externally, it can affect client confidence, investor
        perception, and the organisation's ability to attract talent. In regulated sectors, it may
        also trigger scrutiny from other regulators who view immigration compliance as an
        indicator of broader operational governance.
      </p>

      {/* Section 4 */}
      <h2 id="quarterly-compliance-audit" style={h2}>
        The Quarterly Compliance Audit: A Practical Framework
      </h2>
      <p style={p}>
        The employers who avoid revocation are not the ones who respond best to enforcement
        action. They are the ones who surface and fix problems before regulators ever see them.
      </p>
      <p style={p}>
        This framework is designed to be run quarterly by whoever owns sponsor compliance in your
        organisation. The point is not to produce a report — it is to identify gaps while they
        are still correctable.
      </p>

      <h3 style={h3}>Reporting Obligations</h3>
      <p style={p}>
        Pull a list of all sponsored workers. For each, verify: have all reportable events in the
        last quarter actually been reported? Resignations, dismissals, absences exceeding 10
        consecutive working days, salary changes, role changes — cross-reference against HR
        records and payroll. The most common gap is between HR knowing something happened and the
        SMS being updated to reflect it.
      </p>

      <h3 style={h3}>Employee Records</h3>
      <p style={p}>
        Select a random sample of sponsored worker files — at least 20%, or all of them if you
        have fewer than 25. For each, check: passport copy on file and current, right to work
        evidence complete and in date, employment contract matching the CoS details, salary
        evidence consistent with what was declared. If you cannot assemble a complete file for
        any sponsored worker within 15 minutes, your records are not audit-ready.
      </p>

      <h3 style={h3}>SMS Governance</h3>
      <p style={p}>
        Confirm that all named SMS users are still with the organisation and still in roles where
        they can discharge their responsibilities. Verify that the authorising officer, Level 1
        User, and Level 2 Users are correctly recorded. Check that business details — registered
        address, trading name, key personnel — are current. SMS governance failures are among the
        easiest problems to fix and among the most common to overlook.
      </p>

      <h3 style={h3}>Right to Work Controls</h3>
      <p style={p}>
        Review your right to work checking process end-to-end. Are initial checks being completed
        before employment starts? Are follow-up checks scheduled and tracked for employees with
        time-limited permission? Is there a documented audit trail? Is there a named process
        owner? If the answer to any of these is "I think so, but I'd need to check," the process
        is not robust enough.
      </p>

      <h3 style={h3}>Vacancy Integrity</h3>
      <p style={p}>
        For each currently sponsored role, verify that the employee's actual duties match what
        was described on the CoS application, that the salary being paid matches what was
        declared, and that the SOC code is still appropriate. Role drift — where duties evolve
        organically away from what was originally sponsored — is one of the hardest issues to
        catch without deliberate periodic review.
      </p>

      <h3 style={h3}>Organisational Changes</h3>
      <p style={p}>
        Has anything changed in the last quarter that should have been reported? New directors,
        ownership changes, office moves, restructures, trading name changes? Map these against SMS
        reporting requirements and confirm notifications were filed.
      </p>

      <p style={{ ...p, fontStyle: 'italic', color: C.textHigh }}>
        If this audit surfaces no issues, you have reasonable confidence in your compliance
        position. If it surfaces problems, you have found them on your own terms — which is always
        preferable to the Home Office finding them on theirs.
      </p>

      <div style={relatedBox}>
        <Link
          to="/blog/home-office-compliance-visit-preparation"
          style={inlineLink}
        >
          How to prepare for a Home Office compliance visit →
        </Link>
      </div>

      {/* Section 5 */}
      <h2 id="how-softhire-helps" style={h2}>
        How SoftHire Helps
      </h2>
      <p style={p}>
        Every revocation trigger described in this article traces back to the same structural
        problem: compliance obligations managed through manual processes, institutional memory,
        and systems that were never designed for regulatory oversight.
      </p>
      <p style={p}>
        SoftHire replaces that fragile infrastructure with sponsor compliance systems built around
        how Home Office obligations actually work:
      </p>
      <div style={softHireBox}>
        <ul style={{ ...ul, marginBottom: 0 }}>
          <li style={li}>
            Automated reporting workflows that surface reportable events from HR data and flag
            them before deadlines pass — directly addressing the systematic reporting failures
            that drive most revocations
          </li>
          <li style={li}>
            Structured employee records mapped to Home Office audit requirements, with
            completeness tracking that identifies gaps before a compliance visit does
          </li>
          <li style={li}>
            SMS governance monitoring that tracks named users, business details, and
            organisational changes — closing the oversight gap that catches employers during
            corporate transitions
          </li>
          <li style={li}>
            Right to work compliance tracking with scheduled follow-up checks, documented audit
            trails, and clear process ownership
          </li>
          <li style={li}>
            Quarterly audit support that makes the framework described above operational rather
            than aspirational
          </li>
        </ul>
      </div>
      <p style={{ ...p, marginTop: '1rem' }}>
        The organisations that avoid revocation are not more diligent. They have infrastructure
        where others have spreadsheets.
      </p>
      <p style={p}>
        If you hold a sponsor licence and want to understand where your compliance gaps are,{' '}
        <Link to={{ pathname: '/', hash: '#contact' }} style={inlineLink} onClick={() => trackCTAClick('get_in_touch', 'blog_body_revocation')}>
          get in touch
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
