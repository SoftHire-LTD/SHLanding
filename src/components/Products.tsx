import { ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../lib/analytics';

const services = [
  {
    label: 'Sponsor Licence Applications',
    heading: 'Apply for a sponsor licence with a clearer, more structured process.',
    desc: 'SoftHire helps employers assess readiness, gather the right supporting documents, prepare the application, and understand the Home Office compliance expectations before submission.',
    techHeading: 'How the technology helps:',
    techItems: [
      'Guided document collection',
      'Application progress tracking',
      'Key personnel checklist',
      'Evidence management',
      'Audit-ready application record',
    ],
    cta: 'Start your sponsor licence assessment',
    ctaHref: '/#contact',
    ctaTrack: 'start_sponsor_licence_assessment',
  },
  {
    label: 'Skilled Worker Sponsorship',
    heading: 'Sponsor international workers with greater clarity on role eligibility, salary requirements and Certificate of Sponsorship steps.',
    desc: 'SoftHire helps employers assess whether a role and candidate are suitable for sponsorship, prepare Skilled Worker visa materials, and manage the process from CoS to visa application support.',
    techHeading: 'How the technology helps:',
    techItems: [
      'Role and salary eligibility workflow',
      'CoS information capture',
      'Candidate document collection',
      'Visa timeline tracking',
      'Centralised worker record',
    ],
    cta: 'Check a Skilled Worker role',
    ctaHref: '/skilled-worker-visa-employer',
    ctaTrack: 'check_skilled_worker_role',
  },
  {
    label: 'Sponsor Compliance',
    heading: 'Stay on top of your sponsor duties after the licence is approved.',
    desc: 'SoftHire helps employers monitor sponsored workers, maintain required records, track visa and right-to-work expiry dates, and prepare for Home Office compliance checks.',
    techHeading: 'How the technology helps:',
    techItems: [
      'Visa and document expiry reminders',
      'Sponsor duty checklists',
      'Worker record management',
      'Compliance task tracking',
      'Audit trail for key actions',
    ],
    cta: 'Book a compliance health check',
    ctaHref: '/sponsor-licence-compliance',
    ctaTrack: 'book_compliance_health_check',
  },
];

const Products = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.07) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-white font-bold leading-tight tracking-tight mb-2" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Everything you need to sponsor.<br />
            <span className="text-amber-400">Nothing you don't.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 max-w-xl">
            From first application to ongoing compliance — structured support at every stage of the employer sponsorship journey.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <article
              key={svc.label}
              className="rounded-2xl border border-white/10 p-7 flex flex-col transition-all duration-300 hover:border-amber-400/30 hover:-translate-y-1"
              style={{ background: '#172859' }}
            >
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">{svc.label}</p>
              <h3 className="text-white font-bold text-base leading-snug mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>{svc.heading}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{svc.desc}</p>

              <div className="border-t border-white/10 pt-5 mb-5 flex-grow">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">{svc.techHeading}</p>
                <ul className="flex flex-col gap-2">
                  {svc.techItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/65 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={svc.ctaHref}
                className="inline-flex items-center gap-2 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-[#0B1736] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 border border-amber-400/30 hover:border-amber-400 mt-auto w-fit"
                onClick={() => trackCTAClick(svc.ctaTrack, 'services_section')}
              >
                {svc.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
