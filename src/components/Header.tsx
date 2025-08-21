import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <span className="hidden font-sans text-2xl font-bold bg-gradient-to-r from-blue-500 to-navy-800 bg-clip-text text-transparent">
              SoftHire
            </span>
            <img src="/logo.png" alt="SoftHire Logo" className="h-8 ml-2" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#products" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium">
              Products
            </a>
            <a href="/recruitment" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium">
              Recruitment
            </a>
            <a href="/#about" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium">
              Contact
            </a>
            <a href="/recruitment" className="btn btn--primary text-white">
              <span className="hidden md:inline text-white">Start Recruiting</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-charcoal-800 hover:text-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-grey-200 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="/#products" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                Products
              </a>
              <a href="/recruitment" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                Recruitment
              </a>
              <a href="/#about" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                About
              </a>
              <a href="#contact" className="text-charcoal-800 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                Contact
              </a>
              <div className="px-4">
                <a href="/recruitment" className="btn btn--primary w-full ">
                  <span className="text-white">Start Recruiting</span>
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
