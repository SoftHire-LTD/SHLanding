import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ background: '#091430' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl" style={{ background: 'rgba(46,196,182,0.06)' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'rgba(232,168,48,0.06)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/SoftHire_footer.svg" alt="SoftHire Logo" className="h-7" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="font-bold text-xl text-white hidden sm:block">Soft<span className="text-amber-400">Hire</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Global Mobility. Made Human. UK-regulated immigration services for students, employers, and employees.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['IAA Regulated', 'University Trusted', 'Fixed Fees'].map((b) => (
                <span key={b} className="text-xs text-white/45 border border-white/15 px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {/* Yoshki Badge */}
              <div className="rounded-xl bg-white/8 border border-white/15 p-2 hover:border-amber-400/30 transition-all duration-200" style={{ width: '44px' }}>
                <div style={{ position: 'relative', paddingBottom: '152%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://cdn2.yoshki.com/badgeframe?10"
                    title="Yoshki Certified Partner Badge"
                    style={{ overflow: 'hidden', border: '0px', margin: '0px', padding: '0px', backgroundColor: 'transparent', top: '0px', left: '0px', width: '100%', height: '100%', position: 'absolute' }}
                  />
                </div>
              </div>
              <a href="#" className="p-2.5 rounded-xl bg-white/8 border border-white/15 text-white/60 hover:text-white hover:bg-blue-500/20 transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/8 border border-white/15 text-white/60 hover:text-white hover:bg-blue-500/20 transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:support@softhire.com" className="p-2.5 rounded-xl bg-white/8 border border-white/15 text-white/60 hover:text-white hover:bg-blue-500/20 transition-all duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                'UK Student Visa', 'Dependant Visa', 'Graduate Visa',
                'Skilled Worker Visa', 'Sponsor Licence', 'Compliance Retainer',
              ].map((s) => (
                <li key={s}>
                  <a href="#visas" className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-200">{s}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Who We Help */}
          <nav aria-label="Who we help">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Who We Help</h3>
            <ul className="flex flex-col gap-3">
              {[
                'International Students', 'Students from India', 'Students from Nigeria',
                'Partners & Dependants', 'UK Employers', 'Employees Relocating',
              ].map((s) => (
                <li key={s}>
                  <a href="#who-we-help" className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-200">{s}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About SoftHire', href: '#about' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'Privacy Policy', href: '/privacy-policy.pdf' },
                { label: 'Terms of Service', href: '/terms-of-service.pdf' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-200">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">&copy; {year} SoftHire Ltd. All rights reserved.</p>
          <p className="text-white/25 text-xs text-center">
            Registered in England &amp; Wales · IAA Regulated · Immigration advice is regulated by the Immigration Advice Authority
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
