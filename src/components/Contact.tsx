import { useState, useRef } from 'react';
import { Send, Check, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', companyName: '', message: '' });
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
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) }
      );
      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: '', email: '', companyName: '', message: '' });
        setTimeout(() => setMessageSent(false), 5000);
      }
    } catch (err) {
      console.error('Failed to send message', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    formRef.current?.querySelector('input')?.focus();
  };

  const inputCls = "w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 text-sm";
  const labelCls = "block text-white/70 text-sm font-medium mb-2";

  return (
    <>
      {/* CTA STRIP */}
      <aside
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ borderTop: '1px solid rgba(232,168,48,0.2)', borderBottom: '1px solid rgba(232,168,48,0.2)' }}
        style={{ background: 'linear-gradient(135deg, #1a3a8f 0%, #0B1736 50%, #1a3a8f 100%)' }}
        aria-label="Get started with SoftHire"
      >
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Ready to start your UK visa journey?
            </h2>
            <p className="text-white/60 mt-2 text-base">Free consultation. No commitment. Clear next steps in 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="#contact" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-navy-900 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap" style={{ color: '#0B1736' }}>
              Book a free call <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/00447585198493" rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white border border-white/20 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">
              WhatsApp us
            </a>
          </div>
        </div>
      </aside>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'rgba(46,196,182,0.07)' }} />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-2xl" style={{ background: 'rgba(232,168,48,0.07)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Get in Touch
            </h2>
            <p className="text-white/60 text-base mt-3 max-w-xl mx-auto">
              Ready to navigate UK immigration? Contact us — we respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-2xl">Let us Connect</h3>

              <a href="mailto:support@softhire.com" className="flex items-center gap-4 rounded-xl px-5 py-4 border border-white/10 hover:border-amber-400/30 transition-all duration-200 group" style={{ background: '#172859' }}>
                <div className="bg-amber-400/15 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Email Us</div>
                  <div className="text-white/55 text-sm">support@softhire.com</div>
                </div>
              </a>

              <a href="tel:+447404497570" className="flex items-center gap-4 rounded-xl px-5 py-4 border border-white/10 hover:border-amber-400/30 transition-all duration-200 group" style={{ background: '#172859' }}>
                <div className="bg-teal-400/15 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Call Us</div>
                  <div className="text-white/55 text-sm">+44 7404 497 570</div>
                </div>
              </a>

              <div className="rounded-xl px-5 py-5 border border-white/10" style={{ background: '#172859' }}>
                <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                <p className="text-white/55 text-sm mb-4 leading-relaxed">
                  Be the first to know when new features launch. Join our mailing list for updates and early access.
                </p>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-amber-400 hover:bg-amber-300 font-semibold py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  style={{ color: '#0B1736' }}
                >
                  {subscribed && <Check className="h-4 w-4" />}
                  Subscribe to Updates
                </button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl border border-white/10 p-8" style={{ background: '#172859' }}>
              {messageSent && (
                <div className="mb-6 rounded-xl p-4 flex items-center gap-3 bg-teal-400/10 border border-teal-400/25">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-teal-400 text-sm">Thank you!</div>
                    <div className="text-white/60 text-xs">We will respond within 24 hours.</div>
                  </div>
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputCls} required />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} required />
                </div>
                <div>
                  <label htmlFor="companyName" className={labelCls}>Company Name</label>
                  <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="message" className={labelCls}>Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={inputCls + " resize-none"} placeholder="Tell us about your visa or compliance needs..." required />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-300 font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ color: '#0B1736' }}
                >
                  {isSubmitting ? (
                    <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />Sending...</>
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
