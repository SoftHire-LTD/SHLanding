import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { trackCTAClick } from '../lib/analytics';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #0B1736 0%, #0E1F45 50%, #122050 100%)' }}
      aria-labelledby="hero-heading"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(100,149,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      {/* Glow blobs */}
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,100,200,0.18) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="absolute bottom-[-100px] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.09) 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p className="flex items-center gap-3 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="block w-6 h-px bg-amber-400" aria-hidden="true" />
              UK Employer Immigration Support
            </p>

            <h1 id="hero-heading" className="font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
              Sponsor licence and Skilled Worker compliance support for{' '}
              <span className="text-amber-400">UK employers</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl font-light">
              SoftHire helps UK businesses secure sponsor licences, manage Skilled Worker sponsorship, and stay audit-ready with fixed-fee immigration support and structured compliance workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: '#0B1736' }}
                onClick={() => trackCTAClick('book_sponsor_licence_assessment', 'hero')}
              >
                Book a sponsor licence assessment
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/sponsor-licence-application"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 border border-white/20"
                onClick={() => trackCTAClick('check_business_can_sponsor', 'hero')}
              >
                Check if your business can sponsor workers
              </a>
            </div>

            {/* IAA trust line */}
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="h-5 w-5 text-teal-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/60 text-sm">IAA-regulated immigration advice</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                'Sponsor Licence Applications',
                'Skilled Worker Visas',
                'Compliance Retainers',
                'Fixed Fees',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white/60 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats panel */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* IAA badge */}
            <div
              className="text-center px-6 py-5 rounded-2xl font-bold shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #E8A830, #D4920A)', color: '#0B1736' }}
              aria-label="IAA regulated immigration advice"
            >
              <span className="block text-3xl font-extrabold leading-none">IAA</span>
              <span className="text-sm mt-1 block opacity-80">Regulated Advice</span>
            </div>

            {[
              { num: 'Fixed Fee', label: 'Transparent pricing — know your costs before you commit' },
              { num: '24 hrs', label: 'Response commitment for all new enquiries' },
              { num: '1st time', label: 'Applications prepared for first-time approval' },
            ].map(({ num, label }) => (
              <div
                key={num}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 min-w-[200px] backdrop-blur-sm hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="text-amber-400 font-extrabold text-2xl leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>{num}</div>
                <div className="text-white/50 text-xs mt-1 leading-snug">{label}</div>
              </div>
            ))}

            {/* Compliance checklist */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 backdrop-blur-sm mt-2">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Employer Services</p>
              {[
                'Sponsor Licence Application',
                'Skilled Worker Visa Support',
                'Certificate of Sponsorship',
                'Right-to-Work Checks',
                'Compliance Retainer',
                'Home Office Audit Readiness',
              ].map((v) => (
                <div key={v} className="flex items-center gap-2 text-white/70 text-sm py-1">
                  <CheckCircle className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
