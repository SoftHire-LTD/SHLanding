import { Target, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate, reliable compliance solutions that you can trust.',
      color: 'mint'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Eliminate manual processes with intelligent, end-to-end automation.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients to understand their unique compliance needs.',
      color: 'lavender'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality regulatory technology solutions.',
      color: 'aqua'
    }
  ];

  const getIconClasses = (color: string) => {
    switch (color) {
      case 'mint':
        return 'bg-mint-100 text-mint-600';
      case 'blue':
        return 'bg-blue-100 text-blue-500';
      case 'lavender':
        return 'bg-lavender-100 text-lavender-600';
      case 'aqua':
        return 'bg-aqua-100 text-aqua-600';
      default:
        return 'bg-blue-100 text-blue-500';
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-mint-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-lavender-300/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-aqua-200/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            About SoftHire
          </h2>
          <p className="text-xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
            We're building the future of regulatory compliance technology. Our platform transforms
            complex regulatory requirements into streamlined, automated processes that save time,
            reduce risk, and ensure accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className={`${getIconClasses(value.color)} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
              <p className="text-charcoal-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-grey-50 to-blue-50/30 rounded-2xl p-8 md:p-12 shadow-xl border border-grey-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
              Why Choose SoftHire?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-navy-900 mb-4 text-lg">End-to-End Automation</h4>
                <p className="text-charcoal-700 leading-relaxed">
                  From initial data collection to final regulatory submission, our platform handles
                  every step of the compliance process.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-navy-900 mb-4 text-lg">Industry Expertise</h4>
                <p className="text-charcoal-700 leading-relaxed">
                  Built by compliance professionals who understand the challenges of regulatory
                  reporting in today's complex environment.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-navy-900 mb-4 text-lg">Scalable Solutions</h4>
                <p className="text-charcoal-700 leading-relaxed">
                  Whether you're a growing startup or an established enterprise, our platform
                  scales with your compliance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
