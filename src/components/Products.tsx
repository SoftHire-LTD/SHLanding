import React from 'react';
import { Users, Building2, Clock, Shield } from 'lucide-react';

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
      icon: Building2,
      title: 'FCA Compliance',
      description: 'Comprehensive regulatory reporting for financial services, ensuring adherence to FCA requirements.',
      status: 'Coming Soon',
      features: [
        'Regulatory return automation',
        'Risk assessment tools',
        'Audit trail management',
        'Real-time compliance monitoring'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Specialized solutions for different regulatory domains, designed to eliminate manual processes 
            and reduce compliance risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gold-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gold-200">
              <div className="flex items-center mb-6">
                <div className="bg-navy-200 p-3 rounded-lg mr-4">
                  <product.icon className="h-8 w-8 text-navy-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">{product.title}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-300 text-navy-800 mt-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {product.status}
                  </span>
                </div>
              </div>
              
              <p className="text-navy-600 mb-6 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-navy-900 mb-3">Key Features:</h4>
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-gold-400 flex-shrink-0" />
                    <span className="text-navy-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-navy-700 text-white py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors font-semibold">
                Get Notified
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
