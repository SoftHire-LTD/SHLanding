import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section section--dark section--decorative py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mint-500/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-lavender-300/20 rounded-full blur-xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-aqua-200/20 rounded-full blur-xl floating-element" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="h-display text-white mb-6 text-center">
            {/* Simplify <br className="md:hidden" />
            Sponsorship <span className="text-blue-500 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Compliance</span> &
            Recruitment */}
            RECRUIT GLOBAL TALENT.<br />
            AUTOMATE SPONSOR LICENCES.
          </h1>

          {/* Yoshki Badge with explanation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg px-5 py-2.5 border border-white/10 hover:border-white/20 transition-all">
              <div style={{ width: '35px', flexShrink: 0 }}>
                <div style={{ position: 'relative', paddingBottom: '152%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    id="myFrame"
                    src="https://cdn2.yoshki.com/badgeframe?10"
                    title="Yoshki Badge"
                    style={{
                      overflow: 'hidden',
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      backgroundColor: 'transparent',
                      top: '0px',
                      left: '0px',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                    }}
                  ></iframe>
                </div>
              </div>
              <span className="text-blue-100 text-sm font-medium">Yoshki Certified Partner</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed text-center max-w-3xl mx-auto hidden">
            SoftHire streamlines sponsor license applications and connects you with qualified global talent,
            helping businesses navigate compliance with confidence.
          </p>

          <div className="hero-cta justify-center mb-12">
            <a
              href="/candidates"
              className="btn btn--primary group"
            >
              For Candidates
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn text-white border-2 border-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <CheckCircle className="h-6 w-6 text-mint-400 flex-shrink-0" />
              <span className="font-medium">Efficient Sponsor License Applications</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <CheckCircle className="h-6 w-6 text-mint-400 flex-shrink-0" />
              <span className="font-medium">Global Talent Matching</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <CheckCircle className="h-6 w-6 text-mint-400 flex-shrink-0" />
              <span className="font-medium">Real-time Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
