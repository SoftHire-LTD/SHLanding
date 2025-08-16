import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section bg-gradient-to-br from-accent-100 via-white to-primary-100 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="h-display text-primary-900 dark:text-primary-100 mb-6">
            Simplify <br className="md:hidden" />
            Sponsorship <span className="text-accent-500">Compliance</span> &
            Recruitment
          </h1>

          <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-200 mb-8 leading-relaxed">
            SoftHire streamlines sponsor license applications and connects you with qualified global talent,
            helping businesses navigate compliance and recruitment with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/recruitment"
              className="btn btn--primary bg-primary-700 dark:bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-500 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
            >
              Find Sponsored Talent
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn btn--ghost border-2 border-accent-300 dark:border-primary-700 text-primary-700 dark:text-primary-200 px-8 py-4 rounded-xl hover:border-accent-400 dark:hover:border-primary-500 hover:text-accent-400 transition-all duration-200 font-semibold text-lg"
            >
              Apply for Sponsor License
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="font-medium">Efficient Sponsor License Applications</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="font-medium">Global Talent Matching</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="font-medium">Real-time Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
