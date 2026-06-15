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

const HERO_TRUST = 'Sponsor licence and compliance workflows for care providers managing sponsored workers.';

const COMMON_SITUATIONS = [
  'You are applying for a sponsor licence for the first time.',
  'You already hold a sponsor licence and want to review compliance risk.',
  'You need to check whether a proposed care role can be sponsored.',
  'You want to review sponsored worker files before a Home Office visit.',
  'You are unsure whether your right-to-work records are complete.',
  'You need to track visa expiry dates across multiple sponsored workers.',
  'You need clearer processes for absences, work locations and role changes.',
  'You are concerned about reporting duties on the Sponsorship Management System.',
  'You have grown quickly and sponsorship records are now spread across different people or systems.',
  'You want to reduce reliance on spreadsheets and manual reminders.',
];

const HOME_OFFICE_CHECKS = [
  'the organisation is genuine and lawfully operating',
  'the provider is eligible to sponsor workers in the relevant care roles',
  'the sponsor has appropriate systems to monitor sponsored workers',
  'right-to-work checks and worker records are complete',
  'sponsored workers are doing the role stated on the Certificate of Sponsorship',
  'salaries, hours and duties match the sponsored role',
  'absences and changes are monitored properly',
  'work locations and reporting lines are clear',
  'relevant changes are reported when required',
  'the sponsor can produce documents quickly if requested',
];

const SUPPORT_AREAS = [
  {
    title: 'Sponsor licence readiness assessment',
    desc: 'We review your organisation, care setting, hiring need and current HR/compliance setup to identify whether the business is ready to apply or whether existing sponsorship processes need attention.',
  },
  {
    title: 'Sponsored worker file review',
    desc: 'We help review whether sponsored worker records are organised, complete and accessible, including identity documents, right-to-work evidence, contact details, role information and visa dates.',
  },
  {
    title: 'Role and salary assessment',
    desc: 'We help assess whether the proposed role appears suitable for sponsorship, which occupation code may be relevant, and whether the salary, hours and duties need further review.',
  },
  {
    title: 'Document and evidence preparation',
    desc: 'We help identify and organise supporting documents for sponsor licence applications, compliance reviews or internal audit preparation.',
  },
  {
    title: 'Reporting duty guidance',
    desc: 'We help care providers understand the types of changes that may need to be reported, including changes linked to role, salary, work location, absences, employment status or business circumstances.',
  },
  {
    title: 'Compliance workflow setup',
    desc: 'We help organise worker records, visa dates, right-to-work evidence, reporting duties and compliance tasks so sponsorship is not managed through scattered emails, folders and spreadsheets.',
  },
  {
    title: 'Home Office audit-readiness',
    desc: 'We help care providers prepare their sponsorship records and internal processes so they are better placed to respond if the Home Office requests information or conducts a compliance visit.',
  },
];

const PROCESS_STEPS = [
  {
    n: '1',
    title: 'Initial compliance assessment',
    desc: 'We review your current sponsor licence position, sponsored worker population and main compliance concerns.',
  },
  {
    n: '2',
    title: 'Worker record review',
    desc: 'We assess whether sponsored worker records, visa dates, right-to-work evidence and role information are organised and complete.',
  },
  {
    n: '3',
    title: 'Role and salary check',
    desc: 'We assess whether proposed or existing sponsored roles may need further review under the relevant immigration route.',
  },
  {
    n: '4',
    title: 'Document and process preparation',
    desc: 'We help organise documents, reporting processes, record-keeping duties and internal responsibilities.',
  },
  {
    n: '5',
    title: 'Sponsor licence or visa support',
    desc: 'Where needed, we support sponsor licence applications, Certificate of Sponsorship steps and visa preparation.',
  },
  {
    n: '6',
    title: 'Compliance workflow setup',
    desc: 'We help organise the records, deadlines and sponsor duties that matter after sponsorship begins.',
  },
];

const FAQS = [
  {
    q: 'Can care homes sponsor overseas workers?',
    a: 'Potentially, yes, but the care provider must be eligible to sponsor the relevant role and must hold the correct sponsor licence before sponsorship can take place. The role, salary, duties, regulatory position and employer setup all need to be checked. Care sponsorship is scrutinised closely, so providers should avoid assuming a role can be sponsored without a proper review.',
  },
  {
    q: 'What sponsor duties do care providers have?',
    a: 'Care providers with a sponsor licence must comply with ongoing duties, including keeping accurate worker records, monitoring sponsored workers, maintaining right-to-work evidence and reporting relevant changes to the Home Office. These duties continue after the visa is granted. SoftHire helps care providers organise records, deadlines and internal responsibilities so compliance is actively managed.',
  },
  {
    q: 'What records should care providers keep for sponsored workers?',
    a: 'Sponsored worker records may include identity documents, visa status, right-to-work evidence, contact details, job description, salary details, work location, employment contract, absence records and evidence of recruitment where required. The exact record-keeping position depends on the worker and role. The key issue is that records should be accurate, accessible and maintained throughout sponsorship.',
  },
  {
    q: 'Can care workers bring dependants to the UK?',
    a: 'The dependant rules for care workers have changed and should be checked carefully before advice is given to a worker. Care providers should be cautious about making promises to candidates about family members joining them in the UK. SoftHire can help employers understand the current immigration position and avoid giving inaccurate information during recruitment.',
  },
  {
    q: 'What happens if a sponsored care worker changes role or location?',
    a: 'A change in role, salary, duties, work location or employment arrangement may trigger sponsor reporting duties or require further immigration review. The employer should not assume that all internal changes are harmless. SoftHire helps care providers assess whether a proposed change affects sponsorship and whether anything needs to be reported or documented.',
  },
  {
    q: 'How can a care provider prepare for a Home Office compliance visit?',
    a: 'A care provider should be able to produce sponsored worker records, right-to-work evidence, role information, salary details, absence records and reporting history quickly if requested. It should also be clear who is responsible for sponsor duties internally. SoftHire helps providers review records and organise sponsorship information before a request or visit creates pressure.',
  },
  {
    q: 'What happens if a care provider loses its sponsor licence?',
    a: 'If a sponsor licence is suspended or revoked, the organisation may lose the ability to sponsor workers and existing sponsored workers may be affected. This can create serious workforce and operational risk. Care providers should treat compliance as an ongoing responsibility and address gaps early rather than waiting for Home Office action.',
  },
  {
    q: 'Does SoftHire help with existing sponsored worker files?',
    a: 'Yes. SoftHire can help care providers review existing sponsored worker files, identify missing information, organise records and set up workflows for visa dates, right-to-work checks, reporting duties and audit-readiness. This is particularly useful where sponsorship has grown quickly and records are spread across multiple systems or team members.',
  },
  {
    q: 'Can SoftHire help if we already have a sponsor licence?',
    a: 'Yes. Many care providers need support after the licence is granted, especially where they already sponsor workers and want to improve compliance controls. SoftHire can help with sponsored worker file reviews, compliance workflow setup, role and salary checks, reporting duty guidance and preparation for possible Home Office scrutiny.',
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
          sessionStorage.setItem('care_compliance_lead_source', location);
        }
        trackEvent('care_compliance_review_click', {
          event_category: 'conversion',
          event_label: 'book_care_sponsor_compliance_review',
          click_location: location,
        });
        trackEvent('care_contact_form_start', {
          event_category: 'form',
          event_label: 'contact_start',
          click_location: location,
        });
      }}
    >
      Book a care sponsor compliance review
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
          sessionStorage.setItem('care_compliance_lead_source', location);
        }
        trackEvent('care_worker_records_check_click', {
          event_category: 'engagement',
          event_label: 'check_sponsored_worker_records',
          click_location: location,
        });
      }}
    >
      Check your sponsored worker records
    </Link>
  );
}

function InternalTrackedLink({ to, label, location }: { to: string; label: string; location: string }) {
  return (
    <Link
      to={to}
      style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
      onClick={() => {
        trackEvent('care_internal_link_click', {
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

export default function SponsorLicenceCareHomesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Sponsor Licence Compliance for Care Homes | SoftHire"
        description="Sponsor licence and compliance support for care providers managing sponsored workers, right-to-work records, visa expiry dates and Home Office duties."
        path="/sponsor-licence-compliance-for-care-homes"
        ogImage="https://www.softhire.co.uk/og-image.jpg"
        breadcrumb={[
          {
            name: 'Sponsor Licence Compliance for Care Homes',
            item: 'https://www.softhire.co.uk/sponsor-licence-compliance-for-care-homes',
          },
        ]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        serviceInfo={{
          name: 'Sponsor Licence Compliance Support for Care Providers',
          description:
            'Sponsor licence and compliance support for care providers managing sponsored workers, right-to-work records, visa expiry dates and Home Office sponsor duties.',
          url: 'https://www.softhire.co.uk/sponsor-licence-compliance-for-care-homes',
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
            Care Sector · Sponsor Compliance
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
            Sponsor Licence Compliance Support for Care Providers
          </h1>
          <p style={{ fontSize: '1.05rem', color: C.textMuted, maxWidth: '760px', marginBottom: '14px', fontWeight: 300 }}>
            SoftHire helps care providers manage sponsor licence applications, sponsored worker records and ongoing Home Office compliance duties with structured immigration support and compliance workflows.
          </p>
          <p style={{ fontSize: '0.95rem', color: C.textMuted, maxWidth: '760px', marginBottom: '40px' }}>{HERO_TRUST}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <PrimaryCTA location="hero" />
            <SecondaryCTA location="hero" />
          </div>
        </section>

        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Compliance-led support', 'Fixed fees where possible', 'Structured record workflows', 'Audit-readiness focus', 'No guaranteed outcomes language'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: C.gold }}>*</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Sponsorship Compliance for Care Providers</div>
            <h2 style={h2Style}>Compliance pressure usually appears after sponsorship starts</h2>
            <p style={pStyle}>
              Care providers operate in one of the most scrutinised areas of UK sponsorship. Sponsoring workers in the care sector is not only about assigning a Certificate of Sponsorship or supporting a visa application. It also requires accurate records, clear HR processes, right-to-work checks, visa expiry monitoring, reporting of relevant changes and the ability to evidence compliance if the Home Office asks.
            </p>
            <p style={pStyle}>
              For care homes and adult social care providers, the real risk often appears after sponsorship starts: worker records become fragmented, visa dates are missed, absences are not tracked consistently, and key documents are spread across emails, spreadsheets and HR folders.
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              SoftHire helps care providers treat sponsorship as an ongoing compliance process, not a one-off visa transaction.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Common Care Sponsorship Situations</div>
            <h2 style={h2Style}>Where care providers usually need support</h2>
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
            <div style={sectionLabel}>Why Care Providers Need Stronger Sponsor Compliance</div>
            <h2 style={h2Style}>Sponsor duties continue after licence grant</h2>
            <p style={pStyle}>
              Sponsor licence compliance does not end when the licence is granted. Care providers must continue to manage records, monitor sponsored workers and report certain changes to the Home Office. This can become difficult where there are multiple workers, shift patterns, changing work locations, high staff turnover or stretched internal teams.
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              The Home Office can take action if a sponsor breaches, or is suspected of breaching, its sponsor duties. For care providers, that risk can affect workforce planning, continuity of care, recruitment and the ability to sponsor workers in the future. SoftHire helps care providers identify gaps early and organise sponsorship information before it becomes urgent.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>What the Home Office May Look At</div>
            <h2 style={h2Style}>Can you evidence sponsorship control quickly?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {HOME_OFFICE_CHECKS.map((item) => (
                <div key={item} style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px', background: C.navy }}>
                  <p style={{ ...pStyle, marginBottom: 0, color: C.cream, fontSize: '0.95rem' }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, marginTop: '22px', marginBottom: 0 }}>
              A sponsor licence is an ongoing responsibility. Care providers should be able to show that sponsored worker records are accurate, accessible and actively maintained.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Role Eligibility, SOC Codes and Salary Thresholds</div>
            <h2 style={h2Style}>Role title alone is not enough</h2>
            <p style={pStyle}>
              Before sponsoring a worker, care providers need to check whether the role is eligible, which SOC code is most appropriate, and whether the proposed salary meets the relevant threshold and going rate.
            </p>
            <p style={pStyle}>
              The correct SOC code depends on the worker&apos;s actual duties, seniority, responsibilities, working pattern and location, not just the job title. Care roles can also be affected by sector-specific requirements and changes to immigration policy, so assumptions should be checked before assigning a Certificate of Sponsorship.
            </p>
            <p style={pStyle}>
              Roles often queried include care workers and home carers, senior care workers, care managers, nursing or health-related roles, occupational or therapy-related roles, compliance or registered manager roles, and support or supervisory roles in care settings.
            </p>
            <p style={{ ...pStyle, marginBottom: '22px' }}>
              SoftHire helps care providers review role eligibility, salary requirements and sponsorship risk before proceeding with a sponsor licence, Certificate of Sponsorship or visa application.
            </p>
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              style={{
                display: 'inline-block',
                background: C.gold,
                color: C.navy,
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '13px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  sessionStorage.setItem('care_compliance_lead_source', 'role_eligibility');
                }
                trackEvent('care_role_check_click', {
                  event_category: 'engagement',
                  event_label: 'check_if_care_role_can_be_sponsored',
                  click_location: 'role_eligibility',
                });
                trackEvent('care_booking_click', {
                  event_category: 'conversion',
                  event_label: 'booking_click',
                  click_location: 'role_eligibility',
                });
              }}
            >
              Check if your care role can be sponsored
            </Link>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>How SoftHire Helps Care Providers</div>
            <h2 style={h2Style}>Support across licence and compliance lifecycle</h2>
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
            <div style={sectionLabel}>Pricing for Care Sponsor Licence and Compliance Support</div>
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
                <h3 style={h3Style}>Sponsored worker file review</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately depending on the number of sponsored workers and review depth. May include right-to-work evidence, visa dates, contact details, role information, salary records, work location records and compliance gaps.
                </p>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Compliance workflow setup</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately based on organisation size, sponsored worker volume and support level. May include worker record setup, visa expiry tracking, reporting duty checklists and audit-readiness workflows.
                </p>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '24px' }}>
                <h3 style={h3Style}>Skilled Worker or Health and Care Worker support</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>
                  Quoted separately depending on worker, role and visa requirements. May include role and salary review, Certificate of Sponsorship information, worker document review and visa preparation support.
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
                trackEvent('care_pricing_cta_click', {
                  event_category: 'engagement',
                  event_label: 'pricing_to_mid_cta',
                  click_location: 'pricing',
                });
                trackAnchorClick('pricing_to_cta', 'care_compliance');
              }}
            >
              Continue to compliance review booking
            </a>
          </div>
        </section>

        <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Why Records Fail</div>
            <h2 style={h2Style}>Sponsorship does not usually fail because of one missing form</h2>
            <p style={pStyle}>Sponsorship does not usually fail because of one missing form. It fails because records fall apart.</p>
            <p style={pStyle}>
              For care providers, the problem is often not the original sponsor licence application. It is what happens months later. A worker&apos;s visa expiry date sits in someone&apos;s calendar. Right-to-work evidence is saved in a folder no one checks. Absence records are handled inconsistently. A role change is discussed internally but not assessed for reporting. Sponsored worker files look complete until the Home Office asks for them.
            </p>
            <p style={pStyle}>SoftHire helps organise your sponsorship compliance in one place, from licence application through to ongoing audit-readiness.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {[
                'sponsor licence document checklists',
                'sponsored worker file records',
                'visa and right-to-work expiry tracking',
                'role and salary information capture',
                'work location and contact detail records',
                'absence and change monitoring prompts',
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
            <div style={{ ...sectionLabel, textAlign: 'center' }}>Mid-Page Action</div>
            <h2 style={{ ...h2Style, textAlign: 'center' }}>Managing sponsored care workers? Review compliance now</h2>
            <p style={{ ...pStyle, maxWidth: '760px', margin: '0 auto 30px' }}>
              If your care business sponsors workers, the key question is whether your records, right-to-work evidence, visa dates, reporting processes and internal responsibilities would stand up to scrutiny if reviewed.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <PrimaryCTA location="mid_page" />
              <SecondaryCTA location="mid_page" />
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={sectionLabel}>Why Care Providers Choose SoftHire</div>
            <h2 style={h2Style}>Built for high-scrutiny sponsorship operations</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'We focus on compliance, not just visa processing',
                  desc: 'Care sponsorship is not only about getting a visa granted. The real risk is whether worker records, reporting duties and compliance processes hold up after sponsorship begins. We help care providers manage ongoing duties behind the licence.',
                },
                {
                  title: 'We help identify gaps before the Home Office does',
                  desc: 'It is better to find missing records, unclear reporting lines or visa tracking problems during an internal review than during a Home Office request or visit. SoftHire helps care providers review early and organise what needs attention.',
                },
                {
                  title: 'We understand high-volume sponsored worker management',
                  desc: 'Care providers often manage multiple sponsored workers across roles, shifts and locations. We help structure sponsorship information so teams are not relying entirely on memory, spreadsheets or scattered HR folders.',
                },
                {
                  title: 'Fixed fee confirmed before work starts',
                  desc: 'Care providers need cost clarity. Sponsor licence application support starts from GBP 1,500 with scope confirmed before work begins. Home Office fees, priority service fees, VAT and third-party costs are excluded unless expressly stated.',
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
            <h2 style={h2Style}>Common compliance questions from care providers</h2>
            <div>
              {FAQS.map((faq, i) => (
                <div key={faq.q} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => {
                      if (openFAQ !== i) {
                        trackFAQOpen(faq.q, 'care_compliance');
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
            <p style={pStyle}>
              Explore related support for licence application, visa sponsorship and compliance.
            </p>
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
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/sponsor-licence-compliance-for-care-providers"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('care_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/sponsor-licence-compliance-for-care-providers',
                      click_location: 'required_links',
                      link_text: 'Future article: sponsor licence compliance for care providers',
                    });
                  }}
                >
                  Future article: Sponsor licence compliance for care providers
                </a>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/sponsored-worker-records-checklist"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('care_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/sponsored-worker-records-checklist',
                      click_location: 'required_links',
                      link_text: 'Future article: sponsored worker records checklist',
                    });
                  }}
                >
                  Future article: Sponsored worker records checklist
                </a>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
                <a
                  href="/home-office-compliance-visit-care-provider"
                  style={{ color: C.gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onClick={() => {
                    trackEvent('care_internal_link_click', {
                      event_category: 'navigation',
                      event_label: '/home-office-compliance-visit-care-provider',
                      click_location: 'required_links',
                      link_text: 'Future article: home office compliance visit care provider',
                    });
                  }}
                >
                  Future article: Home Office compliance visit care provider
                </a>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '82px 5%', textAlign: 'center' }}>
          <div style={{ ...sectionLabel, textAlign: 'center' }}>Final CTA</div>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Check your compliance before the Home Office does</h2>
          <p
            style={{
              color: C.textMuted,
              marginBottom: '30px',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            SoftHire can help you assess the position early, identify risk points and organise sponsorship records before the process becomes urgent.
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
                { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
                { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
                { to: '/sponsor-licence-universities', label: 'Sponsor Licence for Universities' },
                { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                  onClick={() => trackSectorLinkClick(to, 'care_compliance_page')}
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
