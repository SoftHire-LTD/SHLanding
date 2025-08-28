import { Users, Building2, Stethoscope, Code, Factory, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Contact from './Contact';

const Recruitment = () => {
  const targetIndustries = [
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Connect with top tech talent for development, DevOps, and engineering roles.',
      roles: ['Full Stack Developers', 'DevOps Engineers', 'Data Scientists', 'Product Managers'],
      color: 'blue'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Find skilled professionals for production, quality control, and engineering positions.',
      roles: ['Process Engineers', 'Quality Managers', 'Production Supervisors', 'Technical Specialists'],
      color: 'mint'
    },
    {
      icon: Stethoscope,
      title: 'Medical Practices',
      description: 'Recruit qualified healthcare professionals and medical support staff.',
      roles: ['Doctors & Specialists', 'Nurses', 'Medical Technicians', 'Healthcare Administrators'],
      color: 'lavender'
    }
  ];

  const getIndustryColors = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-white',
          border: 'border-blue-200',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600'
        };
      case 'mint':
        return {
          bg: 'bg-gradient-to-br from-mint-50 to-white',
          border: 'border-mint-200',
          iconBg: 'bg-mint-100',
          iconColor: 'text-mint-600'
        };
      case 'lavender':
        return {
          bg: 'bg-gradient-to-br from-lavender-50 to-white',
          border: 'border-lavender-200',
          iconBg: 'bg-lavender-100',
          iconColor: 'text-lavender-600'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-grey-200',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600'
        };
    }
  };

  return (
    <div className="min-h-screen bg-grey-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-aqua-200/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-lavender-300/10 rounded-full blur-xl floating-element" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sponsored Talent <span className="bg-gradient-to-r from-blue-400 to-mint-400 bg-clip-text text-transparent">Recruitment</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connect sponsor license holding companies with qualified candidates seeking sponsored employment opportunities across key industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="#contact"
                className="btn btn--primary group text-lg px-8 py-4"
              >
                For Companies
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn text-white border-2 border-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 text-lg px-8 py-4"
              >
                For Candidates
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="h-6 w-6 text-mint-400 flex-shrink-0" />
                <span className="font-medium">Verified Sponsors</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="h-6 w-6 text-lavender-300 flex-shrink-0" />
                <span className="font-medium">Skilled Candidates</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="h-6 w-6 text-aqua-200 flex-shrink-0" />
                <span className="font-medium">Compliance Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-mint-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-lavender-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Target Industries
            </h2>
            <p className="text-xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
              We specialize in connecting talent with opportunities across these high-demand sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetIndustries.map((industry, index) => {
              const colors = getIndustryColors(industry.color);
              return (
                <div
                  key={index}
                  className={`card ${colors.bg} ${colors.border} hover:shadow-xl transition-all duration-500 group`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`${colors.iconBg} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className={`h-8 w-8 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">{industry.title}</h3>
                  </div>

                  <p className="text-charcoal-700 mb-6 text-lg leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-navy-900 mb-4 text-lg">Popular Roles:</h4>
                    {industry.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-charcoal-700">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-grey-100 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-aqua-200/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-mint-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
              Our recruitment platform streamlines the sponsored employment process for both employers and candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Employers */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-grey-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-4 rounded-xl mr-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-navy-900">For Companies</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Access to pre-screened candidates with relevant skills</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Sponsor license verification and compliance tracking</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Automated visa status monitoring and alerts</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Streamlined interview and hiring process</span>
                </li>
              </ul>
            </div>

            {/* For Candidates */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-grey-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-lavender-100 p-4 rounded-xl mr-4">
                  <Users className="h-8 w-8 text-lavender-600" />
                </div>
                <h3 className="text-3xl font-bold text-navy-900">For Candidates</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Exclusive access to sponsored job opportunities</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Verified sponsor license holding employers</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Visa application guidance and support</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-lg leading-relaxed">Career development and skills matching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 leading-relaxed">
            Join our recruitment platform and connect with the right opportunities or talent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="btn btn--primary group text-lg px-8 py-4"
            >
              Register as Employer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 text-lg px-8 py-4"
            >
              Browse Jobs
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Recruitment;