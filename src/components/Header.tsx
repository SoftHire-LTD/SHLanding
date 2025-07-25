import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 shadow-sm border-b border-gold-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-8 w-8 text-gold-500" />
            <span className="text-white font-semibold text-2xl">SoftHire</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-white hover:text-gold-400 transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-white hover:text-gold-400 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-gold-400 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-navy-700 text-white px-6 py-2 rounded-lg hover:bg-navy-800 transition-colors font-medium">
              Get Started
            </button>
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
          <div className="md:hidden py-4 border-t border-gold-200 bg-navy-900">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-white hover:text-gold-400 transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="text-white hover:text-gold-400 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-white hover:text-gold-400 transition-colors font-medium">
                Contact
              </a>
              <button className="bg-navy-700 text-white px-6 py-2 rounded-lg hover:bg-navy-800 transition-colors font-medium w-fit">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
