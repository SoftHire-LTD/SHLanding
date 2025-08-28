import { CheckCircle, FileText, Shield, Users, ArrowRight } from 'lucide-react';

const TalentSection = () => {
  const features = [
    {
      title: 'APPLY',
      subtitle: 'Get Your Sponsor License Fast and Hassle Free',
      description: 'Our guided portal simplifies every step, with final review by trusted immigration counsel.',
      icon: FileText,
      color: 'blue',
      delay: '0s'
    },
    {
      title: 'COMPLY',
      subtitle: 'Stay compliant - without moving a finger',
      description: 'Our software does the work.',
      icon: Shield,
      color: 'mint',
      delay: '0.2s'
    },
    {
      title: 'RECRUIT',
      subtitle: 'Connect with Global Talent',
      description: 'Access vetted international candidates ready to contribute to your business growth.',
      icon: Users,
      color: 'lavender',
      delay: '0.4s'
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
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-lavender-300/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-aqua-200/10 rounded-full blur-xl floating-element" style={{ animationDelay: '4s' }}></div>

        {/* Animated geometric shapes */}
        <div className="absolute top-10 right-1/4 w-16 h-16 border-2 border-blue-200/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-mint-200/20 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight animate-fade-in-up">
            TALENT SHOULDN'T STOP AT{' '}
            <span className="bg-gradient-to-r from-blue-500 to-mint-500 bg-clip-text text-transparent">
              BORDERS
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Which is why SoftHire removes them. We use tech to streamline your Sponsor License application
            and introduce you to vetted international candidates for your business.
          </p>

          {/* Human interaction images */}
          <div className="flex justify-center items-center space-x-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">👨‍💼</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-charcoal-600 font-medium">Employer</div>
            </div>

            <div className="flex-1 flex justify-center">
              <ArrowRight className="h-8 w-8 text-blue-500 animate-pulse" />
              <div className="mx-4 flex space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-mint-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-lavender-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <ArrowRight className="h-8 w-8 text-blue-500 animate-pulse" />
            </div>

            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-br from-mint-100 to-mint-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">👩‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-charcoal-600 font-medium">Talent</div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getFeatureColors(feature.color);
            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 group animate-fade-in-up`}
                style={{ animationDelay: feature.delay }}
              >
                {/* Icon and title */}
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-10 w-10 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-navy-900 mb-4 leading-tight">
                  {feature.subtitle}
                </h4>

                <p className="text-charcoal-700 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Interactive elements */}
                <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className={`h-5 w-5 ${colors.text}`} />
                  <span className="text-charcoal-600 font-medium">Learn more</span>
                  <ArrowRight className={`h-4 w-4 ${colors.text} transform group-hover:translate-x-1 transition-transform`} />
                </div>

                {/* Hover animation overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional interaction section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-grey-200/50 shadow-xl max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-8 mb-8">
              {/* Global talent representation */}
              <div className="flex -space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold">🌍</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold">👨‍💻</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold">👩‍⚕️</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-aqua-400 to-aqua-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white font-bold">👨‍🔧</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Connect with Global Talent Today
            </h3>
            <p className="text-charcoal-700 text-lg">
              Join thousands of businesses already transforming their recruitment process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentSection; 