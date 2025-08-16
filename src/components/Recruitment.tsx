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
    <div className="min-h-screen bg-white dark:bg-primary-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-100 via-white to-primary-100 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 dark:text-primary-100 mb-6 leading-tight">
              Sponsored Talent <span className="text-accent-500">Recruitment</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-200 mb-8 leading-relaxed">
              Connect sponsor license holding companies with qualified candidates seeking sponsored employment opportunities across key industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/#contact"
                className="bg-primary-700 dark:bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-500 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
              >
                Join as Employer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="border-2 border-accent-300 dark:border-primary-700 text-primary-700 dark:text-primary-200 px-8 py-4 rounded-xl hover:border-accent-400 dark:hover:border-primary-500 hover:text-accent-400 transition-all duration-200 font-semibold text-lg"
              >
                Find Sponsored Jobs
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
                <CheckCircle className="h-5 w-5 text-accent-400" />
                <span className="font-medium">Verified Sponsors</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
                <CheckCircle className="h-5 w-5 text-accent-400" />
                <span className="font-medium">Skilled Candidates</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-200">
                <CheckCircle className="h-5 w-5 text-accent-400" />
                <span className="font-medium">Compliance Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-24 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Target Industries
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-200 max-w-3xl mx-auto">
              We specialize in connecting talent with opportunities across these high-demand sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetIndustries.map((industry, index) => (
              <div
                key={index}
                className="card card--elevated bg-accent-100 dark:bg-primary-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-accent-200 dark:border-primary-700"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary-200 dark:bg-primary-700 p-3 rounded-lg mr-4">
                    <industry.icon className="h-8 w-8 text-primary-700 dark:text-primary-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">{industry.title}</h3>
                </div>

                <p className="text-primary-600 dark:text-primary-200 mb-6 text-lg leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Popular Roles:</h4>
                  {industry.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-accent-400 flex-shrink-0" />
                      <span className="text-primary-700 dark:text-primary-200">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-primary-100 dark:bg-primary-800">
        <div aria-hidden="true" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 'auto' }}>
            <path d="M0,120 C360,0 1080,0 1440,120 L1440,0 L0,0 Z" fill="var(--bg-light)"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-200 max-w-3xl mx-auto">
              Our recruitment platform streamlines the sponsored employment process for both employers and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Employers */}
            <div className="card card--tight bg-white dark:bg-primary-700 rounded-xl p-8 shadow-sm border border-accent-200 dark:border-primary-600">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary-700 dark:text-primary-200 mr-3" />
                <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">For Employers</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Access to pre-screened candidates with relevant skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Sponsor license verification and compliance tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Automated visa status monitoring and alerts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Streamlined interview and hiring process</span>
                </li>
              </ul>
            </div>

            {/* For Candidates */}
            <div className="card card--tight bg-white dark:bg-primary-700 rounded-xl p-8 shadow-sm border border-accent-200 dark:border-primary-600">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary-700 dark:text-primary-200 mr-3" />
                <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">For Candidates</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Exclusive access to sponsored job opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Verified sponsor license holding employers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Visa application guidance and support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700 dark:text-primary-200">Career development and skills matching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-200 mb-8">
            Join our recruitment platform and connect with the right opportunities or talent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-700 dark:bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-500 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
            >
              Register as Employer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border-2 border-accent-300 dark:border-primary-700 text-primary-700 dark:text-primary-200 px-8 py-4 rounded-xl hover:border-accent-400 dark:hover:border-primary-500 hover:text-accent-400 transition-all duration-200 font-semibold text-lg"
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