import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <span className="font-sans text-2xl font-bold text-accent-400">SoftHire</span>

          {/* Desktop Navigation */}
          <nav className="navbar hidden md:flex items-center space-x-8">
            <a href="#products" className="text-[#0B1220] hover:text-brand-600 transition-colors font-medium">
              Products
            </a>
            <a href="/recruitment" className="text-[#0B1220] hover:text-brand-600 transition-colors font-medium">
              Recruitment
            </a>
            <a href="#about" className="text-[#0B1220] hover:text-brand-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-[#0B1220] hover:text-brand-600 transition-colors font-medium">
              Contact
            </a>
            <a href="/recruitment" className="btn btn--primary">
              Start Recruiting
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-200 bg-primary-900">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-white hover:text-accent-400 transition-colors font-medium">
                Products
              </a>
              <a href="/recruitment" className="text-white hover:text-accent-400 transition-colors font-medium">
                Recruitment
              </a>
              <a href="#about" className="text-white hover:text-accent-400 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-white hover:text-accent-400 transition-colors font-medium">
                Contact
              </a>
                <a href="/recruitment" className="btn btn--primary">
                  Start Recruiting
                </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
