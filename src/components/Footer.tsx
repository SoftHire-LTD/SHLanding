import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-navy-800 border border-navy-700 rounded-lg px-4 py-2">
                <img 
                  src="/logo-picture_CHaM3jFR.png" 
                  alt="SoftHire Logo" 
                  className="h-8 w-auto scale-x-200" 
                />
              </div>
            </div>
            <p className="text-navy-300 mb-6 max-w-md">
              Automating regulatory reporting end-to-end, from data collection to submission. 
              Helping businesses navigate complex compliance requirements with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-navy-300 hover:text-white transition-colors">
                  Immigration Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-white transition-colors">
                  FCA Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-navy-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center">
          <p className="text-navy-400">
            © 2025 SoftHire. All rights reserved. Building the future of regulatory compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
