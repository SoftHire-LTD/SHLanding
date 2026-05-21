import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackFAQOpen, trackSectorLinkClick, trackAnchorClick } from '../../lib/analytics';

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

const FAQS = [
  { q: 'Do UK universities need separate licences for students and staff?', a: "Yes. Universities typically hold two separate sponsor licences: a Student sponsor licence to enrol international students, and a Worker sponsor licence (Skilled Worker route) to employ overseas academics, researchers and professional services staff. Each has distinct compliance obligations." },
  { q: 'What is a UKVI compliance audit for universities?', a: 'UKVI conducts compliance visits to sponsor licence holders, including universities, to verify that they are meeting all sponsor duties. These can be announced or unannounced and assess record-keeping, attendance monitoring and reporting obligations for both students and staff.' },
  { q: 'What visa route do overseas academics use to work at UK universities?', a: 'Overseas academics typically use the Skilled Worker visa route under SOC 2311. Short-term visiting academics may use the Visitor visa. Senior academics of exceptional ability may qualify for the Global Talent visa, which is employer-independent and may be more appropriate for high-profile hires.' },
  { q: 'Can universities sponsor overseas PhD students as workers?', a: 'PhD students who perform demonstrable work (e.g. funded research roles, associate teaching roles) may be eligible for sponsorship as workers in addition to or instead of the Student route. The appropriate route depends on the nature of the role and funding structure.' },
  { q: 'What happens if a university loses its sponsor licence?', a: "Loss of a sponsor licence is existential for a university. It immediately affects the ability to enrol new international students and employ overseas staff, and existing sponsored individuals may have their leave curtailed. Proactive compliance is far less costly than remediation." },
  { q: 'Do post-92 universities face greater UKVI scrutiny?', a: 'Post-92 and smaller Higher Education providers are subject to the same UKVI compliance requirements as Russell Group universities but may have less developed compliance infrastructure. SoftHire works extensively with post-92 institutions to build robust, audit-ready processes.' },
];

export default function SponsorLicenceUniversitiesPage() {
  useEffect(() => {
    document.title = 'Sponsor Licence for Universities | Student & Worker Sponsorship | SoftHire';
  }, []);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div style={{ background: C.navy, color: C.cream, lineHeight: 1.7, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', border: `1px solid ${C.gold}`, color: C.gold, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '2px', marginBottom: '28px' }}>
          Higher Education · Sponsor Licence
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.15, color: C.cream, maxWidth: '820px', marginBottom: '24px' }}>
          Sponsor Licence for<br />
          <em style={{ color: C.gold, fontStyle: 'italic' }}>Universities</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: C.textMuted, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
          Managing student and worker sponsorship simultaneously is complex. SoftHire provides the
          compliance infrastructure, audit support and immigration expertise that Higher Education
          institutions need.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
            onClick={() => trackCTAClick('book_consultation', 'hero_universities')}
          >
            Book a Consultation
          </Link>
          <a href="#services" style={{ border: `1px solid ${C.border}`, color: C.cream, padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => trackAnchorClick('see_services', 'universities')}>
            See our services →
          </a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '24px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          {['IAA-Regulated', '97% Success Rate', 'Student & Worker Sponsor Licences', 'UKVI Audit Readiness', 'Fixed-Fee'].map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: C.gold }}>✦</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: C.cream }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dual Routes ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>The Complexity</div>
          <h2 style={h2Style}>Universities manage two sponsor licences at once</h2>
          <p style={{ ...pStyle, maxWidth: '680px' }}>
            Most UK Higher Education institutions hold both a Student sponsor licence and a Worker
            sponsor licence — each with its own compliance obligations, reporting duties and audit risks.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '12px' }}>Student Route</div>
              <h3 style={h3Style}>Student Sponsor Licence</h3>
              <p style={{ ...pStyle, marginBottom: 0 }}>
                Required to enrol non-EEA students. Universities must track attendance, course
                progression and report students who discontinue or become non-compliant. Loss of
                Highly Trusted Sponsor status can be existential for international student recruitment.
              </p>
            </div>
            <div style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, marginBottom: '12px' }}>Worker Route</div>
              <h3 style={h3Style}>Worker Sponsor Licence</h3>
              <p style={{ ...pStyle, marginBottom: 0 }}>
                Required to employ overseas academics, researchers, professional services and
                technical staff. Roles must meet Skilled Worker SOC code and salary requirements.
                Different duties to Student route but often managed by the same compliance team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Services</div>
          <h2 style={h2Style}>What SoftHire does for universities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              { icon: '🎓', title: 'Student Sponsor Licence Applications', desc: 'New licence applications for emerging institutions, branch campuses and independent colleges seeking to recruit international students.' },
              { icon: '👨‍🔬', title: 'Academic Recruitment Visas', desc: 'Skilled Worker visa support for overseas professors, lecturers, post-doctoral researchers and visiting academics.' },
              { icon: '🔍', title: 'UKVI Audit Preparation', desc: 'Mock audit exercises, gap analysis and record remediation to ensure your institution is compliant ahead of a UKVI visit — announced or otherwise.' },
              { icon: '📋', title: 'Compliance Policy Development', desc: 'Drafting and implementing UKVI-compliant immigration policies, right-to-work procedures and sponsor duty frameworks for HR teams.' },
              { icon: '🌐', title: 'Global Talent Visa Support', desc: 'Guidance on the Global Talent route for world-leading researchers and academics — an alternative to Skilled Worker for exceptional candidates.' },
              { icon: '⚠️', title: 'Licence Downgrade & Revocation Response', desc: 'Urgent support for institutions facing licence suspension, downgrade or revocation — including representation and compliance remediation plans.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{icon}</div>
                <h3 style={h3Style}>{title}</h3>
                <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligible Academic Roles ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Eligible Academic Roles</div>
          <h2 style={h2Style}>Which academic roles can universities sponsor?</h2>
          <p style={{ ...pStyle, maxWidth: '680px' }}>
            A broad range of academic, research and professional services roles qualify for Skilled
            Worker sponsorship. Common SOC codes in Higher Education include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {[
              { title: 'Higher Education Teaching Professionals (SOC 2311)', desc: 'Lecturers, senior lecturers, professors and associate professors. The most commonly sponsored academic role.' },
              { title: 'Research Scientists & Academics (SOC 2111–2119)', desc: 'Postdoctoral researchers, senior research fellows and principal investigators across sciences and humanities.' },
              { title: 'IT and Systems Professionals (SOC 2130s)', desc: 'University IT staff, research computing specialists and data engineers supporting academic infrastructure.' },
              { title: 'Professional Services Roles', desc: 'Finance, legal, HR and technical roles that meet Skilled Worker thresholds and skill level requirements.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '32px 28px' }}>
                <h3 style={h3Style}>{title}</h3>
                <p style={{ ...pStyle, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 5%', background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>FAQ</div>
          <h2 style={h2Style}>Common questions from HE institutions</h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button
                  onClick={() => { if (openFAQ !== i) trackFAQOpen(faq.q, 'universities'); setOpenFAQ(openFAQ === i ? null : i); }}
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
        <h2 style={{ ...h2Style, textAlign: 'center' }}>Keep your institution audit-ready and compliant.</h2>
        <p style={{ color: C.textMuted, marginBottom: '36px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Book a consultation with our HE immigration specialists. We'll assess your current
          compliance posture and identify where the risks are — before UKVI does.
        </p>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          style={{ background: C.gold, color: C.navy, fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}
          onClick={() => trackCTAClick('book_consultation', 'cta_band_universities')}
        >
          Book Free Consultation
        </Link>
      </div>

      {/* ── Related Links ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={sectionLabel}>Also on SoftHire</div>
          <h2 style={h2Style}>Other sponsor licence services</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { to: '/sponsor-licence-care-homes', label: 'Sponsor Licence for Care Homes' },
              { to: '/sponsor-licence-tech-startups', label: 'Sponsor Licence for Tech Startups' },
              { to: '/sponsor-licence-restaurants', label: 'Sponsor Licence for Restaurants' },
              { to: '/immigration-compliance', label: 'Immigration Compliance for Agencies' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ border: `1px solid ${C.border}`, color: C.cream, fontSize: '0.85rem', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none' }}
                onClick={() => trackSectorLinkClick(to, 'universities')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
