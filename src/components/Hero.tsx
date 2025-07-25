import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gold-100 via-white to-navy-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            Automate <br className="md:hidden" />
            Sponsor-Licence Filings <span className="text-gold-500">Now</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-600 mb-8 leading-relaxed">
            SoftHire streamlines compliance from data collection to submission, 
            helping businesses navigate complex regulatory requirements with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-navy-700 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="border-2 border-gold-300 text-navy-700 px-8 py-4 rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all duration-200 font-semibold text-lg"
            >
              Learn More
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-navy-700">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="font-medium">Automated Data Collection</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-navy-700">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="font-medium">Real-time Compliance</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-navy-700">
              <CheckCircle className="h-5 w-5 text-gold-400" />
              <span className="font-medium">Seamless Submission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
