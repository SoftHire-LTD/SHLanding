import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type FilterType = 'all' | 'students' | 'employers' | 'employees';

interface VisaCard {
  type: string;
  name: string;
  desc: string;
  price: string;
  categories: FilterType[];
  link: string;
}

const visaCards: VisaCard[] = [
  { type: 'Students', name: 'UK Student Visa', desc: 'Full-service application management from CAS number to biometrics. We work with students applying from anywhere in the world.', price: 'From £299 fixed fee', categories: ['students'], link: '#contact' },
  { type: 'Students + Partners', name: 'Dependant Visa', desc: 'Bring your partner or family to the UK alongside your student visa. Bundled with your main application for a seamless process.', price: 'From £249 per dependant', categories: ['students'], link: '#contact' },
  { type: 'Post-Study', name: 'Graduate Visa', desc: 'Stay in the UK and work for 2 years after graduation. We handle this for existing clients at near-zero effort.', price: 'From £199 fixed fee', categories: ['students'], link: '#contact' },
  { type: 'Employers', name: 'Sponsor Licence', desc: 'Get your UK Sponsor Licence so you can hire international talent. Our gateway product — everything else follows from this.', price: 'From £1,500 fixed fee', categories: ['employers'], link: '#contact' },
  { type: 'Employers + Employees', name: 'Skilled Worker Visa', desc: 'End-to-end management of Skilled Worker Visa applications for each sponsored employee. Trackable, transparent, fast.', price: 'From £800 per application', categories: ['employers', 'employees'], link: '#contact' },
  { type: 'Employees', name: 'Certificate of Sponsorship', desc: 'Expert guidance on Certificate of Sponsorship requirements, ensuring your COS is issued correctly and on time.', price: 'Included with Skilled Worker', categories: ['employees'], link: '#contact' },
  { type: 'Employers — Ongoing', name: 'Compliance Retainer', desc: 'Stay audit-ready with ongoing sponsor licence compliance management — reporting duties, visa expiry alerts, and document management.', price: 'From £300/month', categories: ['employers'], link: '#contact' },
  { type: 'Personal', name: 'Personal & Family Visa', desc: 'Support for personal and family visas including spouse, partner, and dependant applications for those joining family in the UK.', price: 'From £249 fixed fee', categories: ['employees'], link: '#contact' },
];

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Students', value: 'students' },
  { label: 'Employers', value: 'employers' },
  { label: 'Employees', value: 'employees' },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const visible = visaCards.filter((c) => activeFilter === 'all' || c.categories.includes(activeFilter));

  return (
    <section id="visas" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.07) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-white font-bold leading-tight tracking-tight mb-2" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Every UK visa type.<br /><span className="text-amber-400">One platform.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3 max-w-xl">
            From first-time student visas to employer sponsor licences — we handle every application end-to-end with fixed fees and no hidden surprises.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter visa types by audience">
          {filters.map((f) => (
            <button key={f.value} role="tab" aria-selected={activeFilter === f.value} onClick={() => setActiveFilter(f.value)}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 ${activeFilter === f.value ? 'bg-amber-400 border-amber-400 font-semibold' : 'bg-transparent text-white/60 border-white/20 hover:border-amber-400/50 hover:text-white'}`}
              style={activeFilter === f.value ? { color: '#0B1736' } : {}}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((card) => (
            <article key={card.name} className="rounded-2xl border border-white/10 p-6 flex flex-col transition-all duration-300 hover:border-amber-400/25 hover:-translate-y-1" style={{ background: '#172859' }}>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">{card.type}</p>
              <h3 className="text-white font-bold text-lg mb-2 leading-snug">{card.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">{card.desc}</p>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/50 text-xs">{card.price}</span>
                <a href={card.link} className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors" aria-label={`Get started with ${card.name}`}>
                  Get started <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
