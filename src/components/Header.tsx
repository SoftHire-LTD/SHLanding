import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackNavClick, trackCTAClick } from '../lib/analytics';

const SECTOR_LINKS = [
  { to: '/sponsor-licence-care-homes', label: 'Care Homes' },
  { to: '/sponsor-licence-restaurants', label: 'Restaurants & Hospitality' },
  { to: '/sponsor-licence-tech-startups', label: 'Tech Startups' },
  { to: '/sponsor-licence-universities', label: 'Universities' },
  { to: '/immigration-compliance', label: 'Recruitment Agencies' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Brand */}
          <a href="/" className="flex items-center" aria-label="SoftHire home" onClick={() => trackNavClick('logo_home')}>
            <div className="flex items-center gap-2 bg-white rounded px-3 py-1.5">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-navy-900 text-white font-extrabold text-sm leading-none">S</span>
              <span className="font-bold text-base text-navy-900 tracking-tight">SoftHire</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <a href="/#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider" onClick={() => trackNavClick('how_it_works')}>
              How It Works
            </a>
            <a href="/#visas" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider" onClick={() => trackNavClick('visa_types')}>
              Visa Types
            </a>
            {/* Sectors dropdown */}
            <div className="relative" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)}>
              <button
                className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider bg-transparent border-none cursor-pointer"
                onClick={() => setSectorsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={sectorsOpen}
              >
                Sectors <ChevronDown className={`h-3.5 w-3.5 transition-transform ${sectorsOpen ? 'rotate-180' : ''}`} />
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50">
                  <div className="bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden">
                    {SECTOR_LINKS.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className="block px-4 py-3 text-sm text-white/70 hover:text-amber-400 hover:bg-white/5 transition-colors"
                        onClick={() => { setSectorsOpen(false); trackNavClick(`sector_${label.toLowerCase().replace(/ /g, '_')}`); }}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="/#about" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider" onClick={() => trackNavClick('about')}>
              About
            </a>
            <a href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider" onClick={() => trackNavClick('contact')}>
              Contact
            </a>
            <a
              href="/#contact"
              className="bg-amber-400 hover:bg-amber-300 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => trackCTAClick('get_started', 'header_desktop')}
            >
              Get Started
            </a>
          </nav>

          {/* Yoshki badge - desktop only */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <div style={{ width: '28px' }}>
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
            <span className="text-white/50 text-xs">Yoshki Partner</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => {
              const next = !isMenuOpen;
              setIsMenuOpen(next);
              if (next) trackNavClick('mobile_menu_open');
            }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-navy-900/95 backdrop-blur-xl rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-1">
              <a href="/#how-it-works" className="text-white/70 hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5" onClick={() => { setIsMenuOpen(false); trackNavClick('mobile_how_it_works'); }}>
                How It Works
              </a>
              <a href="/#visas" className="text-white/70 hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5" onClick={() => { setIsMenuOpen(false); trackNavClick('mobile_visa_types'); }}>
                Visa Types
              </a>
              <div className="px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Sectors</p>
                {SECTOR_LINKS.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block text-white/60 hover:text-amber-400 transition-colors text-sm py-2 pl-2"
                    onClick={() => { setIsMenuOpen(false); trackNavClick(`mobile_sector_${label.toLowerCase().replace(/ /g, '_')}`); }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <a href="/#about" className="text-white/70 hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5" onClick={() => { setIsMenuOpen(false); trackNavClick('mobile_about'); }}>
                About
              </a>
              <a href="/#contact" className="text-white/70 hover:text-white transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/5" onClick={() => { setIsMenuOpen(false); trackNavClick('mobile_contact'); }}>
                Contact
              </a>
              <div className="px-4 pt-2">
                <a href="/#contact" className="block bg-amber-400 hover:bg-amber-300 text-navy-900 font-semibold text-center px-5 py-3 rounded-xl transition-all duration-200" onClick={() => trackCTAClick('get_started', 'header_mobile')}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
