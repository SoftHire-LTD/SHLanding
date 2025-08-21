import { CheckCircle, FileText, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TalentSection = () => {
  const features = [
    {
      title: 'APPLY',
      subtitle: 'Get Your Sponsor License Fast and Hassle Free',
      description: 'Our guided portal simplifies every step, with final review by trusted immigration counsel.',
      icon: FileText,
      color: 'blue',
      delay: 0
    },
    {
      title: 'COMPLY',
      subtitle: 'Stay compliant - without moving a finger',
      description: 'Our software does the work.',
      icon: Shield,
      color: 'mint',
      delay: 0.2
    },
    {
      title: 'RECRUIT',
      subtitle: 'Connect with Global Talent',
      description: 'Access vetted international candidates ready to contribute to your business growth.',
      icon: Users,
      color: 'lavender',
      delay: 0.4
    }
  ];

  const getFeatureColors = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          gradient: 'from-blue-50 to-blue-100'
        };
      case 'mint':
        return {
          bg: 'bg-mint-100',
          text: 'text-mint-600',
          border: 'border-mint-200',
          gradient: 'from-mint-50 to-mint-100'
        };
      case 'lavender':
        return {
          bg: 'bg-lavender-100',
          text: 'text-lavender-600',
          border: 'border-lavender-200',
          gradient: 'from-lavender-50 to-lavender-100'
        };
      default:
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          gradient: 'from-blue-50 to-blue-100'
        };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-grey-50 to-blue-50/30 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-lavender-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-aqua-200/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
            TALENT SHOULDN'T STOP AT{' '}
            <span className="bg-gradient-to-r from-blue-500 to-mint-500 bg-clip-text text-transparent">
              BORDERS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Which is why SoftHire removes them. We use tech to streamline your Sponsor License application 
            and introduce you to vetted international candidates for your business.
          </p>
        </motion.div>

        {/* Human interaction section with real images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center space-x-8 mb-16"
        >
          <div className="flex flex-col items-center group">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80"
              alt="Employer"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
            />
            <span className="mt-2 text-sm text-charcoal-600 font-medium">Employer</span>
          </div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center"
          >
            <ArrowRight className="h-8 w-8 text-blue-500" />
          </motion.div>

          <div className="flex flex-col items-center group">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
              alt="Talent"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
            />
            <span className="mt-2 text-sm text-charcoal-600 font-medium">Talent</span>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getFeatureColors(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8 }}
                className={`relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border ${colors.border} shadow-md hover:shadow-2xl transition-all duration-500 group`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-10 w-10 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-4 leading-tight">{feature.subtitle}</h4>
                <p className="text-charcoal-700 text-lg leading-relaxed mb-6">{feature.description}</p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <CheckCircle className={`h-5 w-5 ${colors.text}`} />
                  <span className="text-charcoal-600 font-medium">Learn more</span>
                  <ArrowRight className={`h-4 w-4 ${colors.text}`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Global connection callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-grey-200 shadow-xl max-w-4xl mx-auto">
            <div className="flex justify-center -space-x-4 mb-8">
              {["https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/65.jpg",
                "https://randomuser.me/api/portraits/women/22.jpg"].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Global Talent"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Connect with Global Talent Today</h3>
            <p className="text-charcoal-700 text-lg">
              Join thousands of businesses already transforming their recruitment process
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentSection;
