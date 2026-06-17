import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { trackAnchorClick, trackEvent, trackFAQOpen, trackSectorLinkClick } from '../../lib/analytics';

const C = {
  navy: '#0B1736',
  navyMid: '#132048',
  gold: '#C9A84C',
  cream: '#F5F1EA',
  textMuted: '#8a95b0',
  border: 'rgba(201,168,76,0.2)',
} as const;

const sectionLabel: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: C.gold,
  marginBottom: '16px',
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
  fontWeight: 700,
  color: C.cream,
  lineHeight: 1.2,
  marginBottom: '20px',
};

const h3Style: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: C.cream,
  marginBottom: '8px',
};

const pStyle: React.CSSProperties = {
  color: C.textMuted,
  marginBottom: '16px',
};

const HERO_TRUST = 'Sponsor licence and Skilled Worker support for construction employers.';

const COMMON_SITUATIONS = [
  'You want to sponsor a skilled construction worker from overseas.',
  'You need to check whether a proposed role is eligible under the Skilled Worker route.',
  'You are unsure which SOC code applies to the role.',
  'You want to hire a site manager, project manager, surveyor, engineer, technician or specialist tradesperson.',
  'You need to check whether the proposed salary and hours meet the relevant threshold.',
  'You are applying for a sponsor licence for the first time.',
  'You already hold a sponsor licence but want to review compliance risk.',
  'Your sponsored workers may work across different sites.',
  'You need to keep better records of work location, role, salary and right-to-work evidence.',
  'You want to avoid making an offer before confirming whether sponsorship is realistic.',
];

const HOME_OFFICE_CHECKS = [
  'the company is genuinely operating in the UK',
  'the proposed role is genuine',
  'the role is eligible for sponsorship',
  'the correct SOC code has been identified',
  'the proposed salary meets the relevant threshold and going rate',
  'the sponsored worker will be employed in the role described',
  'the work location or site arrangements are clear',
  'the key personnel are suitable',
  'the company can monitor sponsored workers',
  'the company can keep required records',
  'the company can report relevant changes when required',
  'the application is supported by appropriate business and role evidence',
];

const SUPPORT_AREAS = [
  {
    title: 'Sponsor licence readiness assessment',
    desc: 'We review your business, hiring need, proposed role and current HR/compliance setup to help identify whether the company is ready to apply.',
  },
  {
    title: 'Role and salary assessment',
    desc: 'We help assess whether the proposed role appears suitable for sponsorship, which occupation code may be relevant, and whether the salary, hours and duties need further review.',
  },
  {
    title: 'Document and evidence preparation',
    desc: 'We help identify and organise supporting documents for the sponsor licence application, including business, HR and role-related evidence.',
  },
  {
    title: 'Key personnel guidance',
    desc: 'We help you understand the roles of the Authorising Officer, Key Contact and Level 1 User, and why these roles matter for sponsor licence compliance.',
  },
  {
    title: 'Site and work-location considerations',
    desc: 'We help construction employers think through how work locations, project sites, reporting lines and role changes should be recorded and managed for sponsored workers.',
  },
  {
    title: 'Sponsor licence application support',
    desc: 'We support preparation of the sponsor licence application and help ensure the submission is structured, consistent and aligned with the company\'s hiring need.',
  },
  {
    title: 'Skilled Worker sponsorship support',
    desc: 'Once the licence is granted, we can help with Certificate of Sponsorship information, worker documentation and Skilled Worker visa preparation where required.',
  },
  {
    title: 'Compliance setup after approval',
    desc: 'We help organise worker records, visa dates, right-to-work evidence, reporting duties and compliance tasks so sponsorship is not managed through scattered emails, site folders and spreadsheets.',
  },
];

const PROCESS_STEPS = [
  {
    n: '1',
    title: 'Initial assessment',
    desc: 'We review your company, hiring need and current sponsorship position.',
  },
  {
    n: '2',
    title: 'Role and salary check',
    desc: 'We assess whether the proposed construction role and salary need further review under the Skilled Worker route.',
  },
  {
    n: '3',
    title: 'Document preparation',
    desc: 'We help identify and organise the supporting documents needed for the sponsor licence application.',
  },
  {
    n: '4',
    title: 'Sponsor licence application support',
    desc: 'We support preparation of the sponsor licence application and related materials.',
  },
  {
    n: '5',
    title: 'Skilled Worker sponsorship',
    desc: 'Once licensed, we can help with Certificate of Sponsorship and Skilled Worker visa steps where required.',
  },
  {
    n: '6',
    title: 'Compliance setup',
    desc: 'We help organise the records, deadlines, work-location information and sponsor duties that matter after approval.',
  },
];

const FAQS = [
  {
    q: 'Can construction companies sponsor overseas workers?',
    a: 'Potentially, yes. A construction company can sponsor workers if it holds the correct sponsor licence and the proposed role is eligible under the Skilled Worker route. The role, salary, duties, employment structure and sponsor readiness all need to be checked. Employers should avoid assuming that a construction job title automatically qualifies for sponsorship.',
  },
  {
    q: 'Which construction roles can be sponsored?',
    a: 'It depends on the actual duties, seniority, skill level and salary. Some construction-related roles may be eligible, including certain managerial, engineering, surveying, technical or specialist roles. Other roles may not qualify. The correct approach is to assess the job description, responsibilities, working hours and proposed salary against current Skilled Worker requirements before making an offer.',
  },
  {
    q: 'Does the job title decide the SOC code?',
    a: 'No. The job title is relevant, but it is not decisive. The SOC code should reflect the worker\'s actual duties, responsibilities, seniority and working pattern. Similar job titles can fall under different occupation codes depending on what the worker actually does. SoftHire helps employers review the substance of the role before sponsorship steps are taken.',
  },
  {
    q: 'What salary does a sponsored construction worker need?',
    a: 'The required salary depends on the Skilled Worker threshold, the occupation-specific going rate, the worker\'s hours and any applicable exceptions. Employers should not rely on a generic figure without checking the specific role. Salary issues should be reviewed before assigning a Certificate of Sponsorship or agreeing final employment terms with the candidate.',
  },
  {
    q: 'Can sponsored construction workers move between sites?',
    a: 'Potentially, but site and work-location arrangements need to be managed carefully. Sponsors should keep accurate records of where sponsored workers are based and consider whether changes affect reporting duties or the sponsored role. Where work locations, reporting lines or duties change, the employer should review whether anything needs to be updated or reported.',
  },
  {
    q: 'What documents does a construction company need for a sponsor licence?',
    a: 'The documents depend on the business and circumstances. A construction company may need evidence of company registration, trading activity, business bank account, premises, contracts, employer registrations, HR systems and the genuine need for the role. The application should also show that the company can monitor sponsored workers and meet sponsor duties after approval.',
  },
  {
    q: 'What happens after the sponsor licence is approved?',
    a: 'Approval is not the end of the process. The employer must continue meeting sponsor duties, including record-keeping, monitoring sponsored workers, maintaining right-to-work evidence and reporting relevant changes. Construction companies should pay particular attention to work locations, site changes, role changes, salary records and worker contact details after sponsorship begins.',
  },
  {
    q: 'Can SoftHire help if we already have a sponsor licence?',
    a: 'Yes. SoftHire can help construction businesses review existing sponsored worker records, assess role and salary issues, organise visa and right-to-work evidence, and set up compliance workflows. This is useful where sponsorship has grown informally or where records are spread across HR, operations, site managers and finance teams.',
  },
];

function PrimaryCTA({ location }: { location: string }) {
  return (
    <Link
      to={{ pathname: '/', hash: '#contact' }}
      style={{
        background: C.gold,
        color: C.navy,
        fontWeight: 600,
        fontSize: '0.95rem',
        padding: '14px 28px',
        borderRadius: '4px',
        textDecoration: 'none',
      }}
      onClick={() => {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('construction_lead_source', location);
        }
        trackEvent('construction_role_check_click', {
          event_category: 'conversion',
          event_label: 'check_if_construction_role_can_be_sponsored',
          click_location: location,
        });
        trackEvent('construction_contact_form_start', {
          event_category: 'form',
          event_label: 'contact_start',
          click_location: location,
        });
      }}
    >
      Check if your construction role can be sponsored
    </Link>
  );
}

function SecondaryCTA({ location }: { location: string }) {
  return (
    <Link
      to={{ pathname: '/', hash: '#contact' }}
      style={{
        border: `1px solid ${C.border}`,
        color: C.cream,
        fontWeight: 600,
        fontSize: '0.95rem',
        padding: '14px 24px',
        borderRadius: '4px',
        textDecoration: 'none',
      }}
      onClick={() => {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('construction_lead_source', location);
        }
        trackEvent('construction_sponsor_assessment_click', {
          event_category: 'conversion',
          event_label: 'book_construction_sponsor_licence_assessment',
          click_location: location,
        });
      }}
    >
      Book a sponsor licence assessment
    </Link>
  );
}

function InternalTrackedLink({ to, label, location }: { to: string; label: string; location: string }) {
  return (
    <Link
      to={to}
      style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
      onClick={() => {
        trackEvent('construction_internal_link_click', {
          event_category: 'navigation',
          event_label: to,
          click_location: location,
          link_text: label,
        });
      }}
    >
      {label}
    </Link>
  );
}

export default function SponsorLicenceConstructionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence for Construction Companies | SoftHire"
        description="Sponsor licence support for construction companies checking Skilled Worker role eligibility, SOC codes, salary thresholds and sponsor compliance duties."
        path="/sponsor-licence-for-construction-companies"
        ogImage="https://www.softhire.co.uk/og-image.jpg"
        breadcrumb={[
          {
            name: 'Sponsor Licence for Construction Companies',
            item: 'https://www.softhire.co.uk/sponsor-licence-for-construction-companies',
          },
        ]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence Support for Construction Companies',
          description:
            'Sponsor licence support for construction companies checking Skilled Worker role eligibility, SOC codes, salary thresholds and sponsor compliance duties.',
          url: 'https://www.softhire.co.uk/sponsor-licence-for-construction-companies',
        }}
      />

      <div
        style={{
          background: C.navy,
          color: C.cream,
          lineHeight: 1.7,
          fontSize: '16px',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              border: `1px solid ${C.gold}`,
              color: C.gold,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '2px',
              marginBottom: '28px',
            }}
          >
            Construction Sector · Sponsor Licence
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: C.cream,
              maxWidth: '900px',
              marginBottom: '24px',
            }}
          >
            Sponsor Licence Support for Construction Companies
          </h1>
          <p style={{ fontSize: '1.05rem', color: C.textMuted, maxWidth: '760px', marginBottom: '14px', fontWeight: 300 }}>
            SoftHire helps construction businesses assess Skilled Worker role eligibility, prepare sponsor licence applications, and manage the compliance duties that come with sponsoring international workers.
          </p>
          <p style={{ fontSize: '0.95rem', color: C.textMuted, maxWidth: '760px', marginBottom: '40px' }}>{HERO_TRUST}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <PrimaryCTA location="hero" />
            <SecondaryCTA location="hero" />
          </div>
        </section>

        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Role eligibility focus', 'SOC code assessment', 'Site records support', 'Compliance-led approach', 'Fixed fees where possible'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: C.gold }}>*</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Sponsorship Planning for Construction Employers</div>
            <h2 style={h2Style}>Check the role before you commit to a candidate</h2>
            <p style={pStyle}>
              Construction businesses often face urgent hiring pressure, specialist skills shortages and fast-moving project timelines. But sponsorship cannot be treated as a last-minute hiring fix. Before sponsoring a worker, the employer needs to check whether the role is eligible, whether the correct SOC code has been identified, whether the proposed salary meets the relevant threshold and going rate, and whether the business can manage sponsor duties after approval.
            </p>
            <p style={pStyle}>
              This is especially important in construction because job titles can be broad, duties can vary between sites, and employment arrangements may need careful review. SoftHire helps construction companies approach sponsorship as both a role eligibility and compliance process, not just a visa application.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Common Construction Sponsorship Situations</div>
            <h2 style={h2Style}>Where construction employers usually need support</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {COMMON_SITUATIONS.map((item) => (
                <div key={item} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '16px 18px', background: C.navy }}>
                  <p style={{ ...pStyle, marginBottom: 0, color: C.cream }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Can Construction Companies Apply for a Sponsor Licence?</div>
            <h2 style={h2Style}>Yes, but readiness matters</h2>
            <p style={pStyle}>
              Yes, a construction company can apply for a sponsor licence if it can show that it is a genuine organisation, has a genuine role to sponsor, has suitable key personnel, and can meet sponsor duties. The application should clearly explain the business, the role, the need for the worker, and the systems in place to manage sponsored workers.
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              Construction companies should be especially careful where the role involves changing sites, mixed duties, project-based work or unclear employment arrangements. SoftHire helps construction employers assess readiness before applying, so role, salary and compliance issues can be identified early.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>What the Home Office May Look At</div>
            <h2 style={h2Style}>Sponsor licence scrutiny in construction</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {HOME_OFFICE_CHECKS.map((item) => (
                <div key={item} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px', background: C.navy }}>
                  <p style={{ ...pStyle, marginBottom: 0, color: C.cream, fontSize: '0.95rem' }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, marginTop: '22px', marginBottom: 0 }}>
              A sponsor licence is not just permission to hire. It creates ongoing duties. Construction employers should think about worker records, site changes and reporting duties before sponsorship begins.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Role Eligibility, SOC Codes and Salary Thresholds</div>
            <h2 style={h2Style}>Job title alone is not enough</h2>
            <p style={pStyle}>
              Before sponsoring a worker, construction employers need to check whether the role is eligible under the Skilled Worker route, which SOC code is most appropriate, and whether the proposed salary meets the relevant threshold and going rate.
            </p>
            <p style={pStyle}>
              The correct SOC code depends on the worker&apos;s actual duties, seniority, responsibilities, qualifications, supervision level and working pattern, not just the job title. A "site supervisor", "technician" or "project lead" role can mean different things depending on the business and the actual work being performed.
            </p>
            <p style={pStyle}>
              Construction roles employers often ask about include: construction project managers, site managers, civil engineers, quantity surveyors, engineering technicians, building services engineers, specialist trades supervisors or forepersons, health and safety managers, and technical or project delivery roles.
            </p>
            <p style={{ ...pStyle, marginBottom: '22px' }}>
              SoftHire helps construction businesses review role eligibility, salary requirements and sponsorship risk before proceeding with a sponsor licence, Certificate of Sponsorship or visa application.
            </p>
            <PrimaryCTA location="role_eligibility" />
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>How SoftHire Helps Construction Companies</div>
            <h2 style={h2Style}>Support across the sponsor licence journey</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {SUPPORT_AREAS.map((item) => (
                <div key={item.title} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '22px', background: C.navy }}>
                  <h3 style={h3Style}>{item.title}</h3>
                  <p style={{ ...pStyle, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Pricing for Construction Sponsor Licence Support</div>
            <h2 style={h2Style}>Fixed fees where possible, clear scope before start</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Sponsor licence application support</h3>
                <p style={{ color: C.gold, fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>From GBP 1,500</p>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Includes sponsor licence readiness review, document checklist, key personnel guidance, application preparation support and structured submission support.
                </p>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Role and salary assessment</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately where a detailed review is required. May include review of job description, duties, seniority, proposed salary, working hours, site arrangements and possible SOC code options.
                </p>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Skilled Worker sponsorship support</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately depending on worker, role and visa requirements. May include role and salary review, Certificate of Sponsorship information, worker document review and visa preparation support.
                </p>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Compliance workflow setup</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately based on number of sponsored workers and support level. May include worker record setup, visa expiry tracking, site/work-location records and audit-readiness workflows.
                </p>
              </div>
            </div>
            <p style={{ ...pStyle, marginTop: '20px', marginBottom: '18px' }}>
              Important: Home Office fees, priority service fees, VAT and third-party costs are not included unless expressly stated. Final pricing is confirmed before work begins.
            </p>
            <a
              href="#contact-cta-middle"
              style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              onClick={() => {
                trackEvent('construction_pricing_cta_click', {
                  event_category: 'engagement',
                  event_label: 'pricing_to_mid_cta',
                  click_location: 'pricing',
                });
                trackAnchorClick('pricing_to_cta', 'construction');
              }}
            >
              Continue to sponsor licence assessment booking
            </a>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Sponsorship Risk in Construction</div>
            <h2 style={h2Style}>Often starts with the role description</h2>
            <p style={pStyle}>
              Construction businesses often use practical job titles that make sense internally but do not map neatly onto immigration rules. A worker may be called a supervisor, technician, installer, specialist or project lead, but the Home Office will look at the actual duties, salary, skill level and sponsored role.
            </p>
            <p style={pStyle}>
              The risk is committing to a candidate before checking whether the role qualifies. SoftHire helps organise your sponsorship process in one place, from role assessment and sponsor licence preparation through to ongoing audit-readiness.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {[
                'sponsor licence document checklists',
                'application progress tracking',
                'role and salary information capture',
                'candidate document collection',
                'visa and right-to-work expiry tracking',
                'sponsored worker records',
                'site and work-location records',
                'compliance task reminders',
                'reporting duty checklists',
                'audit-ready record organisation',
              ].map((item) => (
                <div key={item} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '12px 14px', background: C.navy }}>
                  <p style={{ ...pStyle, marginBottom: 0, color: C.cream }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, marginTop: '18px', marginBottom: 0 }}>
              The technology supports the process. It does not replace professional immigration judgement where regulated advice is required.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Our Process</div>
            <h2 style={h2Style}>From assessment to operational control</h2>
            <div style={{ marginTop: '40px' }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.n} style={{ display: 'flex', gap: '24px', marginBottom: '28px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '44px',
                      height: '44px',
                      border: `1px solid ${C.gold}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: C.gold,
                    }}
                  >
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

        <section id="contact-cta-middle" style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ ...sectionLabel, textAlign: 'center', display: 'none' }}>Mid-Page Action</div>
            <h2 style={{ ...h2Style, textAlign: 'center' }}>Hiring a construction worker from overseas?</h2>
            <p style={{ ...pStyle, maxWidth: '760px', margin: '0 auto 30px' }}>
              Check the role before you commit to a candidate. Before making an offer, agreeing a start date or assigning a Certificate of Sponsorship, it is worth checking whether the role is eligible, whether the SOC code is right, and whether the proposed salary works under the Skilled Worker route.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <PrimaryCTA location="mid_page" />
              <SecondaryCTA location="mid_page" />
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Why Construction Companies Choose SoftHire</div>
            <h2 style={h2Style}>Built for construction employer needs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'We tell you if the role may not qualify — before you make the offer',
                  desc: 'Sponsorship should be checked before you commit to a candidate. We review the role, salary, duties and sponsorship position early, so you do not move forward with an offer that may not work under the Skilled Worker route.',
                },
                {
                  title: 'We understand construction roles are not always straightforward',
                  desc: 'Construction job titles can be broad, and actual duties often vary between projects and sites. We help identify the role, salary and evidence issues that need review before a sponsor licence or visa application is prepared.',
                },
                {
                  title: 'We help with compliance beyond the application',
                  desc: 'Construction sponsors may need to manage sponsored workers across changing sites, projects and reporting lines. We help organise worker records, visa dates and compliance tasks so the sponsor licence is easier to manage after approval.',
                },
                {
                  title: 'Fixed fee confirmed before work starts',
                  desc: 'Construction businesses need cost clarity. Our sponsor licence application support starts from GBP 1,500 with scope confirmed before work begins. Home Office fees and third-party costs are excluded unless expressly stated.',
                },
              ].map((card) => (
                <div key={card.title} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '22px' }}>
                  <h3 style={h3Style}>{card.title}</h3>
                  <p style={{ ...pStyle, marginBottom: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Frequently Asked Questions</div>
            <h2 style={h2Style}>Common sponsorship questions from construction employers</h2>
            <div>
              {FAQS.map((faq, i) => (
                <div key={faq.q} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => {
                      if (openFAQ !== i) {
                        trackFAQOpen(faq.q, 'construction');
                      }
                      setOpenFAQ(openFAQ === i ? null : i);
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '24px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                    aria-expanded={openFAQ === i}
                  >
                    <h3 style={{ margin: 0, fontWeight: 600, color: C.cream, fontSize: '1rem' }}>{faq.q}</h3>
                    <span style={{ color: C.gold, flexShrink: 0, fontSize: '1.4rem', lineHeight: 1 }}>{openFAQ === i ? '-' : '+'}</span>
                  </button>
                  {openFAQ === i && (
                    <div style={{ paddingBottom: '24px', color: C.textMuted, fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Required Service Links</div>
            <h2 style={h2Style}>Related sponsor licence services and guidance</h2>
            <p style={pStyle}>Explore related support for licence application, visa sponsorship and compliance.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <InternalTrackedLink to="/sponsor-licence-application" label="Sponsor Licence Application" location="required_links" />
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <InternalTrackedLink to="/skilled-worker-visa-employer" label="Skilled Worker Visa for Employers" location="required_links" />
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <InternalTrackedLink to="/sponsor-licence-compliance" label="Sponsor Licence Compliance" location="required_links" />
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <InternalTrackedLink to="/sponsor-licence-cost" label="Sponsor Licence Cost" location="required_links" />
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <InternalTrackedLink to="/" label="Contact / Booking" location="required_links" />
              </div>
              {/* <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/can-construction-companies-sponsor-overseas-workers"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('construction_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/can-construction-companies-sponsor-overseas-workers',
                      click_location: 'required_links',
                      link_text: 'Future article: can construction companies sponsor overseas workers',
                    });
                  }}
                >
                  Future article: Can construction companies sponsor overseas workers
                </a>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/soc-codes-for-construction-sponsorship"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('construction_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/soc-codes-for-construction-sponsorship',
                      click_location: 'required_links',
                      link_text: 'Future article: SOC codes for construction sponsorship',
                    });
                  }}
                >
                  Future article: SOC codes for construction sponsorship
                </a>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/sponsor-compliance-for-construction-companies"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('construction_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/sponsor-compliance-for-construction-companies',
                      click_location: 'required_links',
                      link_text: 'Future article: sponsor compliance for construction companies',
                    });
                  }}
                >
                  Future article: Sponsor compliance for construction companies
                </a>
              </div> */}
            </div>
          </div>
        </section>

        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '82px 5%', textAlign: 'center' }}>
          <div style={{ ...sectionLabel, textAlign: 'center' }}>Final CTA</div>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Ready to assess your construction sponsorship position?</h2>
          <p
            style={{
              color: C.textMuted,
              marginBottom: '30px',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            SoftHire can help you assess the position early, identify risk points and understand the next steps before the process becomes urgent.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <PrimaryCTA location="final_cta" />
            <SecondaryCTA location="final_cta" />
          </div>
        </div>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Also on SoftHire</div>
            <h2 style={h2Style}>Other sponsor licence services</h2>
            <p style={pStyle}>We support employers across sectors navigating UK immigration and compliance.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { to: '/sponsor-licence-compliance-for-care-homes', label: 'Sponsor Licence for Care Providers' },
                { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
                { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
                { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                  onClick={() => trackSectorLinkClick(to, 'construction_page')}
                >
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
