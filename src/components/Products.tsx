import { Users, Clock, Shield, UserCheck, ClipboardCheck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Users,
      title: 'Immigration Compliance',
      description: 'Streamline and automate all aspects of Sponsor License compliance',
      status: 'Coming Soon',
      features: [
        'Right to Work Checks',
        'Individual worker profiles, record-keeping',
        'HRIS integration',
        'automated real-time event-tracking and reporting',
        'CoS Issuance/Renewals',
        'Real-time regulatory updates'
      ],
      link: '#contact',
      accentColor: 'mint'
    },
    {
      icon: ClipboardCheck,
      title: 'Apply for Sponsor Licence',
      description: `End-to-end tech platform with step by step guidance and expert assistance on your sponsor licence application. Our technical expertise, online portal and on-going guidance can deliver a significant improvement in your application’s chances of success.`,
      status: 'Available Now',
      features: [
        'Guided form filling',
        'Automated eligibility checks',
        'Minimum salary calculator',
        'License fee calculator'
      ],
      link: '#contact',
      accentColor: 'lavender'
    },
    {
      icon: UserCheck,
      title: 'Sponsored Recruitment Platform',
      description: 'Connect sponsor license holding companies with qualified candidates across software engineering, manufacturing, and medical practices.',
      status: 'Available Now',
      features: [
        'Vetted candidates from around the world',
        'Ability to directly connect with candidates on online platform',
        'Recruiter assistance on request',
        'Candidates sorted by relevance',
        'Assistance with post-offer next steps',
        'Employee Visa assistance'
      ],
      link: '#contact',
      accentColor: 'aqua'
    }
  ];

  const getAccentClasses = (color: string) => {
    switch (color) {
      case 'mint':
        return 'border-mint-500/30 bg-gradient-to-br from-white to-mint-50';
      case 'lavender':
        return 'border-lavender-300/30 bg-gradient-to-br from-white to-lavender-50';
      case 'aqua':
        return 'border-aqua-200/30 bg-gradient-to-br from-white to-aqua-50';
      default:
        return 'border-grey-300 bg-white';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'mint':
        return 'bg-mint-100 text-mint-600';
      case 'lavender':
        return 'bg-lavender-100 text-lavender-600';
      case 'aqua':
        return 'bg-aqua-100 text-aqua-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <section id="products" className="section py-20 bg-grey-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-lavender-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-aqua-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed">
            Specialized solutions for different regulatory domains, designed to eliminate manual processes
            and reduce compliance risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`card ${getAccentClasses(product.accentColor)} hover:shadow-xl transition-all duration-500 flex flex-col group`}
            >
              <div className="flex items-center mb-6">
                <div className={`${getIconBg(product.accentColor)} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8" />
                </div>
                <div className="flex-1 ">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{product.title}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hidden ${product.status === 'Available Now'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-grey-200 text-charcoal-700 border border-grey-300'
                    }`}>
                    <Clock className="h-4 w-4 mr-1" />
                    {product.status}
                  </span>
                </div>
              </div>

              <p className="text-charcoal-700 mb-6 text-lg leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-navy-900 mb-4 text-lg">Key Features:</h4>
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {product.link ? (
                <a
                  href={product.link}
                  className="mt-auto w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold block text-center transform hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </a>
              ) : (
                <a
                  href="#contact"
                  className="mt-auto w-full bg-gradient-to-r from-charcoal-700 to-charcoal-800 text-white py-4 px-6 rounded-xl hover:from-charcoal-800 hover:to-navy-900 transition-all duration-300 font-semibold block text-center transform hover:scale-105 hover:shadow-lg"
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
