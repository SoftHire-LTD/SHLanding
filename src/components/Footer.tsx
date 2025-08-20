import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-mint-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-aqua-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-lavender-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-sans text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                SoftHire
              </span>
            </div>
            <p className="text-blue-200 mb-8 max-w-md text-lg leading-relaxed">
              Automating regulatory reporting end-to-end, from data collection to submission.
              Helping businesses navigate complex compliance requirements with confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-400/30"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-400/30"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:support@softhire.com"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-400/30"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Immigration Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Sponsor License Application
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Recruitment Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-blue-300 text-lg">
            © 2025 SoftHire. All rights reserved. Building the future of regulatory compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
