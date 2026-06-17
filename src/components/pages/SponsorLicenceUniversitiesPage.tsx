import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { trackFAQOpen, trackEvent } from '../../lib/analytics';

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

const PrimaryCTA = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={{ pathname: '/', hash: '#contact' }}
    style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', cursor: 'pointer' }}
    onClick={() => {
      sessionStorage.setItem('education_compliance_lead_source', 'hero');
      trackEvent('education_compliance_discussion_click', { event_category: 'cta', event_label: 'education_compliance_discussion_click', click_location: 'hero' });
      onClick?.();
    }}
  >
    {children}
  </Link>
);

const SecondaryCTA = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <a
    href="#workflow-review"
    style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }}
    onClick={() => {
      sessionStorage.setItem('education_compliance_lead_source', 'hero-secondary');
      trackEvent('education_workflow_review_click', { event_category: 'cta', event_label: 'education_workflow_review_click', click_location: 'hero-secondary' });
      onClick?.();
    }}
  >
    {children}
  </a>
);

const InternalTrackedLink = ({ to, label, location }: { to: string; label: string; location: string }) => (
  <Link
    to={to}
    style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
    onClick={() => trackEvent('education_internal_link_click', { event_category: 'internal_link', event_label: to, click_location: location })}
  >
    {label}
  </Link>
);

const FAQS = [
  { q: 'What immigration compliance duties do education providers have?', a: 'Education providers may have duties linked to Student sponsorship, Child Student sponsorship, Worker sponsorship or all of these. Duties can include record-keeping, monitoring, reporting relevant changes, maintaining accurate visa and contact information, and evidencing compliance decisions. The exact duties depend on the sponsor licence type and the institution\'s activities.' },
  { q: 'Can SoftHire help with Student sponsor compliance?', a: 'Yes. SoftHire can help education providers structure workflows around CAS records, enrolment, engagement, visa status, student contact details, reporting triggers and compliance evidence. The aim is to make immigration-sensitive information easier to monitor, retrieve and evidence, especially where data sits across admissions, registry, student services and compliance teams.' },
  { q: 'Can SoftHire help with sponsored staff compliance?', a: 'Yes. Education providers sponsoring staff may need support with role eligibility, SOC code considerations, salary checks, right-to-work evidence, visa expiry tracking, reporting duties and sponsored worker records. SoftHire helps organise staff sponsorship information so HR and compliance teams have clearer visibility over records, deadlines and risk points.' },
  { q: 'Is this only for universities?', a: 'No. The page is relevant to universities, colleges, independent schools, private education providers and other institutions managing international students or sponsored staff. The exact compliance issues will vary depending on the sponsor licence type, student population, staff sponsorship arrangements, internal systems and Home Office reporting duties.' },
  { q: 'How does SoftHire work with existing student record systems?', a: 'SoftHire is not designed to replace every existing student record or HR system. The aim is to help structure immigration compliance workflows around the data that already exists, making key records, reporting triggers, deadlines and decisions more visible. Where integration is possible, workflows can be designed around existing institutional systems.' },
  { q: 'How can education providers prepare for Home Office scrutiny?', a: 'Institutions should be able to produce accurate records, explain decisions, evidence reporting processes and show that sponsor duties are actively managed. Preparation usually involves reviewing records, clarifying ownership of compliance tasks, checking escalation routes and making sure immigration-sensitive data is accessible. SoftHire helps structure these workflows before pressure arises.' },
  { q: 'Can SoftHire help reduce avoidable visa refusal risk?', a: 'SoftHire can support better upstream immigration workflows, clearer records and more structured decision-making. That may help institutions identify issues earlier, but no provider should promise a particular refusal outcome. The goal is to reduce avoidable process weaknesses by making visa-related information, decisions and escalation points more visible and consistent.' },
  { q: 'Does SoftHire provide legal advice or just technology?', a: 'SoftHire combines structured compliance workflows with immigration support. The technology helps organise documents, deadlines, records and reporting tasks, but it does not replace professional immigration judgement where regulated advice is required. This is particularly important for institutions handling complex student, staff or sponsor compliance issues.' },
];

export default function SponsorLicenceUniversitiesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Immigration Compliance for Education Providers | SoftHire"
        description="Immigration compliance support for universities, colleges and education providers managing international students, sponsored staff, visa records and Home Office duties."
        path="/immigration-compliance-for-education-providers"
        breadcrumb={[{ name: 'Immigration Compliance for Education Providers', item: 'https://www.softhire.co.uk/immigration-compliance-for-education-providers' }]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Immigration Compliance Support for Education Providers',
          description: 'Comprehensive immigration compliance support for universities, colleges and education providers managing international students, sponsored staff, visa records and Home Office reporting duties.',
          url: 'https://www.softhire.co.uk/immigration-compliance-for-education-providers'
        }}
      />
      <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
            Education · Compliance
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
            Immigration Compliance Support for<br />
            <em style={{ color: C.gold, fontStyle: 'italic' }}>Education Providers</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
            SoftHire helps education providers manage immigration compliance across international students, sponsored staff, visa records and Home Office reporting duties with structured workflows and specialist support.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <PrimaryCTA>Discuss education immigration compliance</PrimaryCTA>
            <SecondaryCTA>Review your immigration compliance workflows</SecondaryCTA>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Structured Workflows', 'Student & Staff Compliance', 'Home Office Audit Ready', 'Cross-functional Support', 'Compliance Scoped'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: C.gold }}>✦</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Risk Management ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>The Challenge</div>
            <h2 style={h2Style}>Immigration compliance is now a continuous risk-management issue</h2>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              For education providers, immigration compliance is no longer just a visa administration task. Institutions may need to manage international student records, CAS processes, enrolment information, attendance and engagement data, visa expiry dates, sponsored staff records, right-to-work evidence and reporting duties across multiple teams and systems.
            </p>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              The risk is not always one dramatic failure. It is usually fragmentation: admissions data in one system, student engagement data in another, visa records in spreadsheets, staff sponsorship records in HR folders, and compliance decisions buried in email chains. SoftHire helps education providers bring structure to immigration compliance workflows so that student and staff sponsorship risks can be identified, monitored and evidenced more clearly.
            </p>
          </div>
        </section>

        {/* ── Common Situations ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Common Situations</div>
            <h2 style={h2Style}>Common education provider immigration situations</h2>
            <p style={{ ...pStyle, maxWidth: '680px' }}>SoftHire supports education providers in situations such as:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                'You sponsor international students under the Student or Child Student routes.',
                'You need clearer visibility across CAS, enrolment, engagement and visa records.',
                'You want to reduce avoidable visa refusal and compliance risk.',
                'You need to monitor international student progression and reporting triggers.',
                'You sponsor academic, technical or professional services staff.',
                'You need to track sponsored staff visa dates, right-to-work evidence and role changes.',
                'You want to connect admissions, compliance, student records, careers and HR data more effectively.',
                'You are preparing for a Home Office compliance assessment or audit.',
                'You need a more structured way to evidence immigration decisions.',
                'You want to move away from spreadsheets, email chains and fragmented compliance logs.',
              ].map((situation, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: C.gold, flexShrink: 0 }}>→</span>
                  <p style={{ ...pStyle, margin: 0, marginBottom: 0 }}>{situation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Stronger Workflows ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Strategic Framework</div>
            <h2 style={h2Style}>Why education providers need stronger compliance workflows</h2>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              Education providers often hold large volumes of immigration-sensitive data, but that data may sit across different departments. Admissions may hold offer and CAS information. Registry may hold enrolment and attendance information. Student services may handle visa queries. HR may hold sponsored staff records. Compliance teams may sit between all of them. That structure can create blind spots.
            </p>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              An institution may know what happened after a problem occurs, but have less visibility over which students, staff, departments or processes are creating future sponsor risk. SoftHire is designed to support a more structured approach: clearer records, clearer workflows, clearer escalation points and better audit-readiness.
            </p>
          </div>
        </section>

        {/* ── Student Sponsor Compliance ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Student Compliance</div>
            <h2 style={h2Style}>Student sponsor compliance</h2>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              Education providers sponsoring students must manage the duties linked to Student and Child Student sponsorship. That can include issuing CAS carefully, monitoring enrolment and engagement, keeping required records, reporting relevant changes and maintaining the standards expected of licensed sponsors.
            </p>
            <p style={{ ...pStyle, maxWidth: '820px', marginBottom: '32px' }}>
              SoftHire can help education providers structure workflows around:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {[
                'CAS information and decision records',
                'Visa and immigration status records',
                'Enrolment and attendance monitoring triggers',
                'Engagement and progression data',
                'Student contact details',
                'Reporting duty checklists',
                'Compliance escalation notes',
                'Evidence of decisions and interventions',
                'Audit-ready student sponsor records',
              ].map((item, i) => (
                <div key={i} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '6px', padding: '20px' }}>
                  <p style={{ ...pStyle, margin: 0, marginBottom: 0 }}>• {item}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, maxWidth: '820px', marginTop: '32px' }}>
              The aim is not to replace existing student record systems. It is to help institutions make immigration compliance data more visible, structured and easier to evidence.
            </p>
          </div>
        </section>

        {/* ── Sponsored Staff Compliance ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Staff Compliance</div>
            <h2 style={h2Style}>Sponsored staff compliance</h2>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              Education providers may also sponsor staff under the Skilled Worker route or other worker routes. This creates a separate but related compliance burden. Staff sponsorship may involve academic roles, researchers, IT specialists, compliance professionals, technicians, professional services managers or other specialist employees.
            </p>
            <p style={{ ...pStyle, maxWidth: '820px', marginBottom: '32px' }}>
              SoftHire helps education providers manage sponsored staff compliance, including:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              {[
                'Role and salary information',
                'SOC code review where required',
                'Right-to-work evidence',
                'Visa expiry tracking',
                'Sponsored staff records',
                'Work location and reporting line changes',
                'Reporting duty checklists',
                'Audit-readiness workflows',
              ].map((item, i) => (
                <div key={i} style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '6px', padding: '20px' }}>
                  <p style={{ ...pStyle, margin: 0, marginBottom: 0 }}>• {item}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              Worker sponsorship and student sponsorship are different regimes, but institutions often need both to be visible within a wider immigration compliance framework.
            </p>
          </div>
        </section>

        {/* ── Role Eligibility ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Role Assessment</div>
            <h2 style={h2Style}>Role eligibility, SOC codes and salary thresholds for sponsored staff</h2>
            <p style={{ ...pStyle, maxWidth: '820px' }}>
              Before sponsoring a staff member, education providers need to check whether the role is eligible under the relevant worker route, which SOC code is most appropriate, and whether the proposed salary meets the relevant threshold and going rate. The correct SOC code depends on the employee's actual duties, seniority, responsibilities and working pattern — not just the job title.
            </p>
            <p style={{ ...pStyle, maxWidth: '820px', marginBottom: '32px' }}>
              Education roles employers often ask about include:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {['Lecturers', 'Researchers', 'Academic specialists', 'IT and systems specialists', 'Laboratory technicians', 'Compliance officers', 'Professional services managers', 'Data and analytics staff', 'Student support or operations managers', 'Senior administrative or institutional roles'].map((role, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: C.gold }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: C.cream }}>{role}</span>
                </div>
              ))}
            </div>
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}
              onClick={() => {
                sessionStorage.setItem('education_compliance_lead_source', 'role-review-cta');
                trackEvent('education_staff_role_review_click', { event_category: 'cta', event_label: 'education_staff_role_review_click', click_location: 'role-section' });
              }}
            >
              Review a sponsored staff role
            </Link>
          </div>
        </section>

        {/* ── How SoftHire Helps ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our Services</div>
            <h2 style={h2Style}>How SoftHire helps education providers</h2>
            <p style={{ ...pStyle, maxWidth: '820px', marginBottom: '40px' }}>SoftHire supports education providers across student and staff immigration compliance workflows:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { title: 'Immigration compliance workflow mapping', desc: 'We help identify where immigration-sensitive data sits across admissions, registry, student services, HR and compliance functions.' },
                { title: 'Student sponsor record organisation', desc: 'We help structure records linked to CAS, enrolment, engagement, visa status, student contact details, reporting duties and compliance decisions.' },
                { title: 'Sponsored staff record organisation', desc: 'We help organise staff sponsorship records, including right-to-work evidence, visa dates, role information, salary details, SOC code considerations and reporting duty triggers.' },
                { title: 'Reporting duty checklists', desc: 'We help institutions structure the types of changes and events that may need review or reporting, so teams have clearer escalation points.' },
                { title: 'Audit-readiness support', desc: 'We help education providers prepare records and workflows so immigration compliance decisions can be evidenced more clearly if reviewed.' },
                { title: 'Role and salary assessment for staff sponsorship', desc: 'We help assess whether proposed sponsored staff roles need further review under the relevant worker route, including SOC code and salary considerations.' },
                { title: 'Technology-enabled compliance workflows', desc: 'We help education providers move away from fragmented spreadsheets and email chains by organising immigration compliance tasks, records and deadlines in a structured workflow.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                  <h3 style={h3Style}>{title}</h3>
                  <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Pricing</div>
            <h2 style={h2Style}>Pricing for education immigration compliance support</h2>
            <p style={{ ...pStyle, maxWidth: '820px', marginBottom: '40px' }}>
              Education providers vary significantly in size, systems and compliance complexity, so pricing is usually scoped after an initial discussion.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              {[
                {
                  title: 'Immigration compliance workflow review',
                  desc: 'Quoted based on institutional size, number of relevant teams, current systems and the scope of review required. This may include review of student sponsor workflows, staff sponsorship workflows, data ownership, reporting processes, escalation points and record-keeping practices.'
                },
                {
                  title: 'Sponsored staff role and salary assessment',
                  desc: 'Quoted separately depending on the role, worker route and level of review required. This may include review of job description, duties, salary, working hours, SOC code considerations and Certificate of Sponsorship information.'
                },
                {
                  title: 'Sponsor licence and compliance support',
                  desc: 'Quoted separately depending on whether the support relates to Student sponsorship, Worker sponsorship or both. This may include document review, process mapping, compliance workflow design and audit-readiness support.'
                },
                {
                  title: 'Ongoing compliance workflow setup',
                  desc: 'Quoted separately depending on the number of sponsored students or staff, integrations required and level of ongoing support. This may include visa expiry tracking, reporting duty checklists, staff or student record workflows, compliance task management and audit-ready records.'
                },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '28px', minHeight: '240px', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ ...h3Style, marginBottom: '12px' }}>{title}</h3>
                  <p style={{ ...pStyle, margin: 0, marginBottom: 0, flex: 1 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '28px', color: C.textMuted, fontSize: '0.9rem', fontStyle: 'italic' }}>
              <p style={{ margin: 0 }}>
                Important: Home Office fees, priority service fees, VAT and third-party costs are not included unless expressly stated. Final pricing is confirmed before work begins.
              </p>
            </div>
          </div>
        </section>

        {/* ── Fragmentation Quote ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: C.cream, lineHeight: 1.8, marginBottom: 0 }}>
              "Education compliance does not fail because one team is careless. It fails when data is fragmented. Admissions may understand the offer. Registry may understand enrolment. Student services may understand the visa issue. HR may understand the sponsored staff record. Compliance may understand the Home Office risk. But if those pieces do not connect, the institution may only see the problem after the risk has already developed."
            </p>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our Approach</div>
            <h2 style={h2Style}>Our process</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
              {[
                { num: '1', title: 'Initial compliance discussion', desc: 'We review your current immigration compliance position, sponsor type, key concerns and existing systems.' },
                { num: '2', title: 'Workflow mapping', desc: 'We identify where immigration-sensitive data sits across admissions, registry, student services, HR and compliance teams.' },
                { num: '3', title: 'Risk and gap review', desc: 'We assess where records, workflows, reporting triggers or escalation points may need clearer structure.' },
                { num: '4', title: 'Process and record design', desc: 'We help organise the records, checklists and workflows needed for student and/or staff sponsorship compliance.' },
                { num: '5', title: 'Staff sponsorship review where required', desc: 'Where the institution sponsors staff, we can help assess role, salary, SOC code and worker sponsorship issues.' },
                { num: '6', title: 'Compliance workflow setup', desc: 'We help structure the records, deadlines, tasks and audit trails that matter for ongoing sponsor compliance.' },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '28px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '28px', background: C.gold, color: C.navy, width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem' }}>
                    {num}
                  </div>
                  <h3 style={{ ...h3Style, marginTop: '12px' }}>{title}</h3>
                  <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose SoftHire ── */}
        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Why Choose Us</div>
            <h2 style={h2Style}>Why education providers choose SoftHire</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
              {[
                { icon: '🔗', title: 'We understand immigration compliance is cross-functional', desc: 'Education immigration compliance does not sit neatly in one department. Admissions, registry, student services, HR, careers and compliance teams may all hold part of the picture. SoftHire helps structure workflows around that reality.' },
                { icon: '👁️', title: 'We focus on visibility before problems escalate', desc: 'The aim is not just to respond when something goes wrong. It is to create better visibility over records, deadlines, reporting triggers and compliance gaps before they become institutional risk.' },
                { icon: '🎯', title: 'We support both student and staff sponsorship workflows', desc: 'Student sponsorship and worker sponsorship are different, but many education providers need to manage both. SoftHire helps institutions think about immigration compliance as a broader operational system rather than a set of disconnected visa tasks.' },
                { icon: '✓', title: 'Scope confirmed before work starts', desc: 'Education providers need clarity before engaging external support. We scope the work upfront, define the relevant workflows or records to be reviewed, and confirm pricing before work begins.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '28px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
                  <h3 style={h3Style}>{title}</h3>
                  <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>FAQ</div>
            <h2 style={h2Style}>Frequently asked questions</h2>
            <div style={{ marginTop: '40px' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => {
                      if (openFAQ !== i) trackFAQOpen(faq.q, 'education_provider');
                      setOpenFAQ(openFAQ === i ? null : i);
                    }}
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
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Build visibility before the risk appears.</h2>
          <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            If your institution sponsors international students or staff, the question is not only whether visas are being processed. The question is whether your records, reporting triggers, escalation routes and compliance decisions are visible, consistent and audit-ready. SoftHire can help you assess the position, identify workflow gaps and organise immigration compliance before issues become institutional risk.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <PrimaryCTA>Discuss education immigration compliance</PrimaryCTA>
            <SecondaryCTA>Review your immigration compliance workflows</SecondaryCTA>
          </div>
        </div>

        {/* ── Related Links ── */}
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Related Pages</div>
            <h2 style={h2Style}>Other sponsor licence and compliance services</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
              <InternalTrackedLink to="/sponsor-licence-compliance-for-care-homes" label="Care Provider Compliance" location="related-pages" />
              <InternalTrackedLink to="/sponsor-licence-for-construction-companies" label="Construction Companies" location="related-pages" />
              <InternalTrackedLink to="/sponsor-licence-restaurants" label="Restaurants & Hospitality" location="related-pages" />
              <InternalTrackedLink to="/sponsor-licence-application" label="Sponsor Licence Application" location="related-pages" />
              <InternalTrackedLink to="/skilled-worker-visa-employer" label="Skilled Worker Visa" location="related-pages" />
              <InternalTrackedLink to="/sponsor-licence-compliance" label="Compliance Retainer" location="related-pages" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
