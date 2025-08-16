import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-sans text-2xl font-bold text-accent-400">
                SoftHire
              </span>
            </div>
            <p className="text-primary-300 mb-6 max-w-md">
              Automating regulatory reporting end-to-end, from data collection to submission.
              Helping businesses navigate complex compliance requirements with confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full text-primary-400 hover:text-accent-400 hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-primary-400 hover:text-accent-400 hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-primary-400 hover:text-accent-400 hover:bg-primary-800 dark:hover:bg-primary-700 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Immigration Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
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
                <a href="#about" className="text-primary-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 dark:border-primary-700 mt-12 pt-8 text-center">
          <p className="text-primary-400">
            © 2025 SoftHire. All rights reserved. Building the future of regulatory compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
