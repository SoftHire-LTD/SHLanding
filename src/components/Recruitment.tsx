import React from 'react';
import { Users, Building2, Stethoscope, Code, Factory, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Recruitment = () => {
  const targetIndustries = [
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Connect with top tech talent for development, DevOps, and engineering roles.',
      roles: ['Full Stack Developers', 'DevOps Engineers', 'Data Scientists', 'Product Managers']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Find skilled professionals for production, quality control, and engineering positions.',
      roles: ['Process Engineers', 'Quality Managers', 'Production Supervisors', 'Technical Specialists']
    },
    {
      icon: Stethoscope,
      title: 'Medical Practices',
      description: 'Recruit qualified healthcare professionals and medical support staff.',
      roles: ['Doctors & Specialists', 'Nurses', 'Medical Technicians', 'Healthcare Administrators']
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-100 via-white to-navy-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Sponsored Talent <span className="text-gold-500">Recruitment</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-600 mb-8 leading-relaxed">
              Connect sponsor license holding companies with qualified candidates seeking sponsored employment opportunities across key industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/#contact"
                className="bg-navy-700 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
              >
                Join as Employer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="border-2 border-gold-300 text-navy-700 px-8 py-4 rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all duration-200 font-semibold text-lg"
              >
                Find Sponsored Jobs
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-navy-700">
                <CheckCircle className="h-5 w-5 text-gold-400" />
                <span className="font-medium">Verified Sponsors</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-navy-700">
                <CheckCircle className="h-5 w-5 text-gold-400" />
                <span className="font-medium">Skilled Candidates</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-navy-700">
                <CheckCircle className="h-5 w-5 text-gold-400" />
                <span className="font-medium">Compliance Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Target Industries
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              We specialize in connecting talent with opportunities across these high-demand sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetIndustries.map((industry, index) => (
              <div key={index} className="bg-gold-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gold-200">
                <div className="flex items-center mb-6">
                  <div className="bg-navy-200 p-3 rounded-lg mr-4">
                    <industry.icon className="h-8 w-8 text-navy-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">{industry.title}</h3>
                </div>
                
                <p className="text-navy-600 mb-6 text-lg leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-navy-900 mb-3">Popular Roles:</h4>
                  {industry.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-gold-400 flex-shrink-0" />
                      <span className="text-navy-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our recruitment platform streamlines the sponsored employment process for both employers and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Employers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gold-200">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-navy-700 mr-3" />
                <h3 className="text-2xl font-bold text-navy-900">For Employers</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Access to pre-screened candidates with relevant skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Sponsor license verification and compliance tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Automated visa status monitoring and alerts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Streamlined interview and hiring process</span>
                </li>
              </ul>
            </div>

            {/* For Candidates */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gold-200">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-navy-700 mr-3" />
                <h3 className="text-2xl font-bold text-navy-900">For Candidates</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Exclusive access to sponsored job opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Verified sponsor license holding employers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Visa application guidance and support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700">Career development and skills matching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-navy-600 mb-8">
            Join our recruitment platform and connect with the right opportunities or talent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-navy-700 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
            >
              Register as Employer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border-2 border-gold-300 text-navy-700 px-8 py-4 rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all duration-200 font-semibold text-lg"
            >
              Browse Jobs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;