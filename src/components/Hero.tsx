import { ArrowRight, CheckCircle } from 'lucide-react';

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
              UK-Regulated Global Mobility
            </p>

            <h1 id="hero-heading" className="font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
              UK visas.<br />
              Handled by <span className="text-amber-400">experts.</span><br />
              Powered by <span className="text-teal-400">technology.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl font-light">
              SoftHire is the UK's smartest immigration service — IAA-regulated visa support for international students, employers hiring global talent, and anyone navigating the UK system.
            </p>

            {/* Yoshki Certified Partner */}
            <div className="flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 w-fit">
              <div style={{ width: '28px', flexShrink: 0 }}>
                <div style={{ position: 'relative', paddingBottom: '152%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://cdn2.yoshki.com/badgeframe?10"
                    title="Yoshki Certified Partner Badge"
                    style={{
                      overflow: 'hidden', border: '0px', margin: '0px', padding: '0px',
                      backgroundColor: 'transparent', top: '0px', left: '0px',
                      width: '100%', height: '100%', position: 'absolute',
                    }}
                  />
                </div>
              </div>
              <span className="text-white/80 text-sm font-medium">Yoshki Certified Partner</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-navy-900 font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: '#0B1736' }}
              >
                Start your journey
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#how-it-works"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-base font-medium transition-colors duration-200"
              >
                <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs" aria-hidden="true">▶</span>
                See how it works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                'IAA Regulated',
                'University Trusted',
                'Fixed Fees',
                'Student Specialists',
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
            {/* 97% badge */}
            <div
              className="text-center px-6 py-5 rounded-2xl text-navy-900 font-bold shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #E8A830, #D4920A)' }}
              aria-label="97 percent UK visa success rate"
            >
              <span className="block text-4xl font-extrabold leading-none">97%</span>
              <span className="text-sm mt-1 block opacity-80">Visa Success Rate</span>
            </div>

            {[
              { num: '2,400+', label: 'Students reached the UK with SoftHire' },
              { num: '3 wks', label: 'Average time contact-to-submission' },
              { num: 'IAA', label: 'UK Immigration Advice Authority regulated' },
            ].map(({ num, label }) => (
              <div
                key={num}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 min-w-[200px] backdrop-blur-sm hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="text-amber-400 font-extrabold text-2xl leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>{num}</div>
                <div className="text-white/50 text-xs mt-1 leading-snug">{label}</div>
              </div>
            ))}

            {/* Feature checklist */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 backdrop-blur-sm mt-2">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">All Visa Types Supported</p>
              {[
                'UK Student Visa',
                'Graduate Visa',
                'Skilled Worker Visa',
                'Dependant Visa',
                'Sponsor Licence',
                'Compliance Retainer',
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
