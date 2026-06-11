import { ArrowRight, ShieldCheck } from 'lucide-react';
import { trackCTAClick } from '../lib/analytics';

const whyPillars = [
  {
    label: 'IAA-regulated. Accountable advice.',
    body: 'Immigration advice in the UK is legally restricted. SoftHire is authorised and regulated by the Immigration Advice Authority (IAA) — so the advice you receive is compliant, protected and professionally accountable. Not all providers can say the same.',
  },
  {
    label: 'Built around the employer journey, not the visa application.',
    body: 'Most immigration services start and end with the applicant. SoftHire is built around you — sponsor licence eligibility, key personnel setup, Certificate of Sponsorship assignment, document tracking, reporting duties and ongoing compliance. The full picture, not just the paperwork.',
  },
  {
    label: 'Fixed fee. No hourly surprises.',
    body: 'A clear process with fixed-fee support where possible. You know the cost, the steps and the risk points before anything is submitted — not after you\'ve already committed.',
  },
  {
    label: 'Compliance workflows, not just advice.',
    body: 'Sponsorship fails when information is scattered. SoftHire structures your documents, worker records, visa dates and compliance tasks so they\'re organised, tracked and ready for Home Office scrutiny — not assembled in a panic when a letter arrives.',
  },
  {
    label: 'Sector knowledge that matters.',
    body: 'We work specifically with care homes, tech startups, restaurants, universities and recruitment agencies. We already know the eligible SOC codes, the salary thresholds, the sector-specific failure points — and how to avoid them.',
  },
  {
    label: 'Beyond the licence. Long-term audit readiness.',
    body: 'Approval is the start. We help you stay compliant through right-to-work checks, visa expiry tracking, Home Office reporting duties and record-keeping standards — so when UKVI comes, you\'re ready.',
  },
];

const industries = [
  {
    title: 'Tech Startups',
    desc: 'Fast hiring cycles, equity-heavy packages and lean HR teams. We build compliance around your pace.',
    href: '/sponsor-licence-tech-startups',
  },
  {
    title: 'Care Homes',
    desc: 'CQC registration, Health and Care Worker visas, and the highest Home Office audit risk of any sector. We know what inspectors look for.',
    href: '/sponsor-licence-care-homes',
  },
  {
    title: 'Construction',
    desc: 'Project-based contracts, mobile workforces and high turnover create specific sponsorship risks. We help you stay compliant across every site.',
    href: '/#contact',
  },
  {
    title: 'Foreign Companies Expanding in the UK',
    desc: 'Bringing your own people into a new UK entity requires a sponsor licence before they can work here. We handle it alongside your incorporation.',
    href: '/sponsor-licence-for-foreign-companies',
  },
  {
    title: 'Education Providers',
    desc: 'Education providers managing international students, sponsored staff, visa records and immigration compliance responsibilities. We manage both compliance regimes so your institution stays audit-ready.',
    href: '/sponsor-licence-universities',
  },
];

const processSteps = [
  { num: '01', title: 'Assess', desc: 'We check whether your business and role are suitable.' },
  { num: '02', title: 'Prepare', desc: 'We collect documents and structure the application.' },
  { num: '03', title: 'Submit', desc: 'We support the sponsor licence or visa submission.' },
  { num: '04', title: 'Sponsor', desc: 'We help with CoS and Skilled Worker applications.' },
  { num: '05', title: 'Comply', desc: 'We help you stay audit-ready after approval.' },
];

const pricingCards = [
  {
    title: 'Sponsor Licence',
    price: 'From £1,500',
    unit: 'Fixed fee',
    items: [
      'Eligibility assessment',
      'Document preparation',
      'SMS application submission',
      'Home Office query handling',
      'Includes key personnel setup',
      'Priority processing available — 10 working days',
    ],
    cta: 'Get a quote',
    ctaHref: '/#contact',
    ctaTrack: 'pricing_sponsor_licence_quote',
    highlight: false,
  },
  {
    title: 'Skilled Worker Visa',
    price: 'From £800',
    unit: 'Per application',
    items: [
      'Certificate of Sponsorship assignment',
      'Visa application support',
      'Document review',
      'Pre-submission eligibility check',
      'In-country and overseas routes',
      'Requires active sponsor licence',
    ],
    cta: 'Get a quote',
    ctaHref: '/#contact',
    ctaTrack: 'pricing_skilled_worker_quote',
    highlight: true,
  },
  {
    title: 'Compliance Retainer',
    price: 'From £300',
    unit: '/month',
    items: [
      'Right-to-work record management',
      'Visa expiry tracking',
      'Home Office reporting duties',
      'Audit readiness reviews',
      'Ongoing sponsor duty guidance',
      'Cancel any time — no lock-in',
    ],
    cta: 'Get a quote',
    ctaHref: '/#contact',
    ctaTrack: 'pricing_compliance_retainer_quote',
    highlight: false,
  },
];

const testimonials = [
  {
    text: 'We needed a sponsor licence for our care home in under six weeks. SoftHire handled everything — the application was approved first time with no queries from the Home Office.',
    name: 'Registered Manager',
    role: 'Residential care home, West Midlands',
    avatar: 'RM',
  },
  {
    text: 'As a tech startup with no dedicated HR team, we had no idea where to start. SoftHire gave us a clear process, fixed costs, and our licence was approved on the first application.',
    name: 'Co-Founder',
    role: 'Series A technology company, London',
    avatar: 'CF',
  },
  {
    text: 'We were expanding our headquarters to the UK and needed to bring three senior employees across. SoftHire handled the sponsor licence and all three visa applications simultaneously — no delays, no surprises.',
    name: 'Head of People',
    role: 'International technology company',
    avatar: 'HP',
  },
];

const About = () => {
  return (
    <>
      {/* SECTION 4 — WHY EMPLOYERS CHOOSE SOFTHIRE */}
      <section id="why-softhire" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,100,200,0.10) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Why SoftHire</p>
            <h2 className="text-white font-bold leading-tight tracking-tight mb-4" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Why employers choose SoftHire
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Sponsoring international workers isn't just a visa process — it's a compliance system. Getting the licence is step one. Maintaining it is the job. SoftHire handles both.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPillars.map((p) => (
              <div key={p.label} className="rounded-2xl border border-white/10 p-6 flex flex-col gap-3 hover:border-amber-400/25 hover:-translate-y-1 transition-all duration-300" style={{ background: '#172859' }}>
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
                <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>{p.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRIES */}
      <section id="industries" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.07) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Industries We Support</p>
            <h2 className="text-white font-bold leading-tight tracking-tight mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Sector knowledge<br />
              <span className="text-amber-400">that matters.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              SoftHire supports UK employers and institutions where international hiring, sponsorship and immigration compliance need to be managed carefully.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div key={ind.title} className="rounded-2xl border border-white/10 p-6 flex flex-col gap-4 hover:border-amber-400/25 hover:-translate-y-1 transition-all duration-300" style={{ background: '#0E1F45' }}>
                <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>{ind.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-grow">{ind.desc}</p>
                <a
                  href={ind.href}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors mt-auto"
                  aria-label={`Learn more about ${ind.title}`}
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,100,200,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              From first call to<br />
              <span className="text-amber-400">fully compliant.</span>
            </h2>
          </div>
          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-6 py-6 group transition-all duration-200 hover:pl-2 ${i < processSteps.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400 text-xs font-bold group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-200" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <span style={{ color: 'inherit' }}>{step.num}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRICING */}
      <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.07) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-white font-bold leading-tight tracking-tight mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Transparent pricing.<br />
              <span className="text-amber-400">No hourly surprises.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Know the cost, the steps and the risk points before anything is submitted.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${card.highlight ? 'border-amber-400/50' : 'border-white/10'}`}
                style={{ background: card.highlight ? 'linear-gradient(135deg, #1a3a8f, #172859)' : '#172859' }}
              >
                {card.highlight && (
                  <span className="inline-block bg-amber-400 text-[#0B1736] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">Most popular</span>
                )}
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">{card.title}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-white font-extrabold text-3xl leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>{card.price}</span>
                </div>
                <p className="text-white/50 text-sm mb-6">{card.unit}</p>
                <ul className="flex flex-col gap-2.5 flex-grow mb-7">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 ${card.highlight ? 'bg-amber-400 hover:bg-amber-300 text-[#0B1736]' : 'bg-white/8 hover:bg-white/15 text-white border border-white/20'}`}
                  onClick={() => trackCTAClick(card.ctaTrack, 'pricing_section')}
                >
                  {card.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TRUST AND REGULATION */}
      <section id="trust" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Opening line */}
          <div className="mb-14 max-w-3xl">
            <p className="text-white/80 text-xl leading-relaxed font-light">
              You're not just hiring an immigration service. You're trusting someone with your{' '}
              <span className="text-white font-semibold">licence to operate.</span>
            </p>
          </div>

          {/* IAA Regulation block */}
          <div className="rounded-2xl border border-amber-400/20 p-8 mb-10" style={{ background: 'rgba(232,168,48,0.04)' }}>
            <div className="flex items-start gap-4 mb-6">
              <ShieldCheck className="h-8 w-8 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">IAA Regulation</p>
                <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>Authorised and regulated by the Immigration Advice Authority</h3>
              </div>
            </div>
            <p className="text-white/65 text-base leading-relaxed max-w-3xl mb-8">
              Immigration advice in the UK is a legally restricted activity. Only authorised individuals and organisations can provide it lawfully. SoftHire is IAA-regulated — meaning our advice is professionally accountable, our conduct is governed by a statutory framework, and you have formal recourse if something goes wrong. Many providers operating in this space are not regulated. That matters.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { symbol: '✦', heading: 'Professional accountability', body: 'We operate under a statutory code of conduct. Every piece of advice we give is regulated.' },
                { symbol: '✦', heading: 'Formal complaints process', body: 'If something goes wrong, you have recourse to the Immigration Advice Authority — an independent statutory body.' },
                { symbol: '✦', heading: 'Legal protection', body: 'Regulated advice carries professional indemnity coverage. Unregulated advice does not.' },
              ].map((col) => (
                <div key={col.heading} className="rounded-xl border border-white/10 p-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-amber-400 text-lg mb-2" aria-hidden="true">{col.symbol}</p>
                  <h4 className="text-white font-semibold text-sm mb-2">{col.heading}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{col.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder credibility */}
          <div className="rounded-2xl border border-white/10 p-8 mb-10" style={{ background: '#172859' }}>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Founder Credibility</p>
            <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>Founded by a lawyer.</h3>
            <p className="text-white/65 text-base leading-relaxed max-w-3xl">
              SoftHire was built by an Oxford-trained, IAA-regulated solicitor with a decade of transactional legal experience across international law firms and financial institutions. We understand compliance because we've lived it — on both sides of the table.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">What Clients Say</p>
            <h3 className="text-white font-bold text-2xl mb-8" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>
              Real cases.<br /><span className="text-amber-400">Real results.</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <article
                  key={t.avatar}
                  className="rounded-2xl border border-white/10 p-6 flex flex-col transition-all duration-300 hover:border-amber-400/25 hover:-translate-y-1"
                  style={{ background: '#172859' }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="itemReviewed" content="SoftHire" />
                  <div className="text-amber-400 text-5xl font-extrabold leading-none opacity-20 mb-3" aria-hidden="true">"</div>
                  <div className="text-amber-400 text-sm mb-3" aria-label="5 out of 5 stars">
                    <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      ★★★★★
                    </span>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed flex-grow mb-5" itemProp="reviewBody">{t.text}</p>
                  <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm" itemProp="name">{t.name}</div>
                      <div className="text-white/45 text-xs">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Data & Confidentiality + Response Commitment */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl border border-white/10 p-7" style={{ background: '#172859' }}>
              <h4 className="text-white font-bold text-base mb-3">Data &amp; Confidentiality</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Your data is handled with the same rigour we apply to your case. All client information is processed in accordance with UK GDPR. Documents shared with SoftHire are stored securely and never passed to third parties without your explicit consent. Immigration matters involve sensitive personal data — we treat them accordingly.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-7" style={{ background: '#172859' }}>
              <h4 className="text-white font-bold text-base mb-3">Response Commitment</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                We respond to all new enquiries within 24 hours. You'll speak directly with a regulated adviser — not a call centre, not an automated triage system. If your situation is urgent, tell us and we'll prioritise accordingly.
              </p>
            </div>
          </div>

          {/* Closing CTA */}
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a3a8f 0%, #0B1736 50%, #1a3a8f 100%)', border: '1px solid rgba(232,168,48,0.2)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232,168,48,0.08) 0%, transparent 70%)' }} aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>Ready to get started?</h3>
              <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
                Book a free consultation. We'll assess your situation, explain your options and confirm your next steps — all within 24 hours. No commitment required.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: '#0B1736' }}
                onClick={() => trackCTAClick('book_free_consultation', 'closing_cta')}
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
