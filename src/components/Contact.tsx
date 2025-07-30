import React, { useState, useRef } from 'react';
import { Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  });
  const [subscribed, setSubscribed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        '/api/support/contact-us',
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
      } else {
        console.error('Failed to send message');
      }
    } catch (err) {
      console.error('Failed to send message', err);
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Ready to transform your regulatory compliance? Contact us to learn more about 
            our upcoming products and how we can help your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Let's Connect</h3>

            <div className="mt-12 p-6 bg-gold-100 rounded-xl border border-gold-300">
              <h4 className="font-semibold text-navy-900 mb-3">Stay Updated</h4>
              <p className="text-navy-600 mb-4">
                Be the first to know when our products launch. Join our mailing list for updates 
                and early access opportunities.
              </p>
              <button
                onClick={handleSubscribe}
                className="bg-navy-700 text-white px-6 py-2 rounded-lg hover:bg-navy-800 transition-colors font-medium flex items-center justify-center"
              >
                {subscribed && <Check className="h-5 w-5 mr-2" />}
                Subscribe to Updates
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gold-400 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gold-400 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-navy-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gold-400 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gold-400 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your compliance needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-navy-700 text-white py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors font-semibold flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
