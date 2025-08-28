import { useState, useRef } from 'react';
import { Send, Check, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  });
  const [subscribed, setSubscribed] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_CONTACT_ENDPOINT + '/support/contact-us',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            companyName: formData.companyName,
            email: formData.email,
            message: formData.message
          })
        }
      );

      if (response.ok) {
        console.log('Message sent');
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          companyName: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      } else {
        console.error('Failed to send message');
      }
    } catch (err) {
      console.error('Failed to send message', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    formRef.current?.querySelector('input')?.focus();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-grey-100 to-blue-50/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-lavender-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-aqua-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your regulatory compliance? Contact us to learn more about
            our upcoming products and how we can help your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-8">Let's Connect</h3>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                <a href="mailto:support@softhire.com" className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Email Us</h4>
                    <p className="text-charcoal-700">support@softhire.com</p>
                  </div>
                </a>

                <a href="tel:+447404497570" className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="bg-mint-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-mint-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Call Us</h4>
                    <p className="text-charcoal-700">+447404497570</p>
                  </div>
                </a>

                <a href='https://www.google.com/maps/place/London,+United+Kingdom' target='_blank' className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-grey-200/50 hover:shadow-lg transition-all duration-300 hidden">
                  <div className="bg-lavender-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-lavender-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Visit Us</h4>
                    <p className="text-charcoal-700">London, United Kingdom</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-mint-50 to-white rounded-2xl p-8 border border-mint-200/50 shadow-lg">
              <h4 className="text-xl font-bold text-navy-900 mb-4">Stay Updated</h4>
              <p className="text-charcoal-700 mb-6 leading-relaxed">
                Be the first to know when our products launch. Join our mailing list for updates
                and early access opportunities.
              </p>
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center transform hover:scale-105 hover:shadow-lg w-full"
              >
                {subscribed && <Check className="h-5 w-5 mr-2" />}
                Subscribe to Updates
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-grey-200/50 shadow-xl">
            {/* Success Message */}
            {messageSent && (
              <div className="mb-6 bg-gradient-to-r from-mint-50 to-mint-100 border border-mint-200 rounded-xl p-4 flex items-center space-x-3">
                <div className="bg-mint-500 rounded-full p-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-mint-700">Thank you!</h4>
                  <p className="text-mint-600 text-sm">We will respond to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-grey-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-grey-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  required
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-navy-900 mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-grey-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-grey-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80"
                  placeholder="Tell us about your compliance needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-navy-900 to-charcoal-800 text-white py-4 px-6 rounded-xl hover:from-charcoal-800 hover:to-navy-800 transition-all duration-300 font-semibold flex items-center justify-center group transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
