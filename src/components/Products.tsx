import React from 'react';
import { Users, Clock, Shield, UserCheck, ClipboardCheck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Users,
      title: 'Immigration Compliance',
      description: 'Streamline visa tracking, right-to-work verification, and sponsor license management with automated workflows.',
      status: 'Coming Soon',
      features: [
        'Automated visa expiry tracking',
        'Right-to-work verification',
        'Sponsor license management',
        'Compliance reporting dashboard'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Apply for Sponsor License',
      description: 'Step-by-step assistance and efficient management of your sponsor license application.',
      status: 'Available Now',
      features: [
        'Guided document preparation',
        'Automated eligibility checks',
        'Timeline and progress tracking',
        'Expert support to reduce approval times'
      ],
      link: '#contact'
    },
    {
      icon: UserCheck,
      title: 'Sponsored Recruitment Platform',
      description: 'Connect sponsor license holding companies with qualified candidates across software engineering, manufacturing, and medical practices.',
      status: 'Available Now',
      features: [
        'Verified sponsor employers',
        'Skills-based candidate matching',
        'Visa application support',
        'Industry-specific job boards'
      ],
      link: '#contact'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-200 max-w-3xl mx-auto">
            Specialized solutions for different regulatory domains, designed to eliminate manual processes
            and reduce compliance risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="card bg-accent-100 dark:bg-primary-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-accent-200 dark:border-primary-700 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-200 dark:bg-primary-700 p-3 rounded-lg mr-4">
                  <product.icon className="h-8 w-8 text-primary-700 dark:text-primary-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">{product.title}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                    product.status === 'Available Now'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-accent-300 text-primary-800'
                  }`}>
                    <Clock className="h-4 w-4 mr-1" />
                    {product.status}
                  </span>
                </div>
              </div>

              <p className="text-primary-600 dark:text-primary-200 mb-6 text-lg leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">Key Features:</h4>
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-accent-400 flex-shrink-0" />
                    <span className="text-primary-700 dark:text-primary-200">{feature}</span>
                  </div>
                ))}
              </div>

              {product.link ? (
                <a
                  href={product.link}
                  className="mt-8 w-full bg-primary-700 dark:bg-primary-600 text-white py-3 px-6 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-500 transition-colors font-semibold block text-center"
                >
                  Learn More
                </a>
              ) : (
                <a
                  href="#contact"
                  className="mt-8 w-full bg-primary-700 dark:bg-primary-600 text-white py-3 px-6 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-500 transition-colors font-semibold block text-center"
                >
                  Get Notified
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
