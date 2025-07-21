import React from 'react';
import { Target, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate, reliable compliance solutions that you can trust.'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Eliminate manual processes with intelligent, end-to-end automation.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients to understand their unique compliance needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality regulatory technology solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            About SoftHire
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            We're building the future of regulatory compliance technology. Our platform transforms 
            complex regulatory requirements into streamlined, automated processes that save time, 
            reduce risk, and ensure accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-gold-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-navy-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{value.title}</h3>
              <p className="text-navy-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gold-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              Why Choose SoftHire?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-navy-900 mb-3">End-to-End Automation</h4>
                <p className="text-navy-600">
                  From initial data collection to final regulatory submission, our platform handles 
                  every step of the compliance process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Industry Expertise</h4>
                <p className="text-navy-600">
                  Built by compliance professionals who understand the challenges of regulatory 
                  reporting in today's complex environment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Scalable Solutions</h4>
                <p className="text-navy-600">
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