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
        return 'bg-gradient-to-br from-mint-100 to-mint-200 text-mint-600 border-mint-200/50';
      case 'blue':
        return 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-500 border-blue-200/50';
      case 'lavender':
        return 'bg-gradient-to-br from-lavender-100 to-lavender-200 text-lavender-600 border-lavender-200/50';
      case 'aqua':
        return 'bg-gradient-to-br from-aqua-100 to-aqua-200 text-aqua-600 border-aqua-200/50';
      default:
        return 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-500 border-blue-200/50';
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
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 items-center justify-center">
          <div className="mb-8 w-full">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-900 via-blue-600 to-navy-900 bg-clip-text text-transparent mb-6">
              About SoftHire
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-mint-400 to-lavender-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-white via-blue-50/30 to-mint-50/30 rounded-3xl p-8 border border-blue-100/50 shadow-xl backdrop-blur-sm">
              <p className="text-xl text-charcoal-700 leading-relaxed">
                At SoftHire, we make global hiring <span className="font-semibold text-blue-600">simple, compliant, and fast</span>.
                We help UK businesses unlock access to international talent by streamlining every step of
                the journey — from applying for a sponsor licence, to staying compliant with Home Office
                rules, to recruiting skilled workers from around the world. And we help deserving candidates
                who want to bring their skills to the UK by matching them with relevant employers and
                assisting them in their visa and relocation process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white via-mint-50/30 to-lavender-50/30 rounded-3xl p-8 border border-mint-100/50 shadow-xl backdrop-blur-sm">
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Built by entrepreneurs with experience in <span className="font-semibold text-mint-600">law, compliance, and technology</span>, SoftHire was
                created to solve a pressing problem: UK companies face skill shortages but struggle with the
                complexity of immigration compliance. Our platform combines automation, legal expertise,
                and recruitment support so businesses can focus on <span className="font-semibold text-lavender-600">growth — not red tape</span>.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="relative max-w-5xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-mint-50 rounded-3xl p-10 border border-blue-200/30 mx-auto mb-8 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-mint-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-lavender-200/20 to-aqua-200/20 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Mission</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-mint-400 mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-6 max-w-3xl mx-auto">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-charcoal-700 font-medium leading-relaxed">
                      Enable businesses to hire the best people, wherever they are.
                    </p>
                  </div>
                </div>

                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-mint-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-mint-400 to-mint-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-charcoal-700 font-medium leading-relaxed">
                      Simplify compliance with smart, automated tools.
                    </p>
                  </div>
                </div>

                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-lavender-400 to-lavender-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-charcoal-700 font-medium leading-relaxed text-start">
                      Bridge global talent gaps so the UK remains competitive in a fast-changing world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto mt-12 max-w-5xl justify-center items-center bg-gradient-to-r from-navy-50 to-blue-50 rounded-2xl p-6 border border-navy-100/50 shadow-lg">
            <p className="text-xl text-navy-800 font-semibold">
              If you are considering recruiting internationally –
              <a className="text-blue-600" href="#contact"> please get in touch</a>.
            </p>
          </div>
        </div>


        {/* Enhanced Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Values</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-mint-400 to-lavender-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-grey-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 text-center h-full">
                  <div className={`${getIconClasses(value.color)} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border-2`}>
                    <value.icon className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h4>
                  <p className="text-charcoal-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Why Choose Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-grey-50 via-blue-50/20 to-mint-50/20 rounded-3xl p-12 md:p-16 shadow-2xl border border-grey-200/50">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-mint-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-lavender-200/10 to-aqua-200/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 via-blue-600 to-navy-900 bg-clip-text text-transparent mb-6">
                Why Choose SoftHire?
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-mint-400 to-lavender-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">End-to-End Automation</h4>
                  <p className="text-charcoal-700 leading-relaxed">
                    From initial data collection to final regulatory submission, our platform handles
                    every step of the compliance process.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-mint-100/50 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <div className="bg-gradient-to-br from-mint-100 to-mint-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-mint-500 rounded-lg"></div>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Industry Expertise</h4>
                  <p className="text-charcoal-700 leading-relaxed">
                    Built by compliance professionals who understand the challenges of regulatory
                    reporting in today's complex environment.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-lavender-100/50 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-lavender-500 rounded-lg"></div>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-4 text-xl">Scalable Solutions</h4>
                  <p className="text-charcoal-700 leading-relaxed">
                    Whether you're a growing startup or an established enterprise, our platform
                    scales with your compliance needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
