import { CheckCircle } from 'lucide-react';

const serveCards = [
  {
    tag: 'For Students',
    title: 'Got your UK university offer? We will get you there.',
    desc: 'Specialist support for international students navigating the UK Student Visa — from document checklist to biometrics to arrival, wherever you are applying from.',
    items: ['UK Student Visa — worldwide applicants welcome', 'Partner & Dependant Visa add-on', 'Post-study Graduate Visa', 'Fixed fee — know what you will pay'],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop&crop=top',
    imgAlt: 'International students at a UK university campus',
  },
  {
    tag: 'For Employers',
    title: 'Hire globally. Leave the visa to us.',
    desc: 'We help UK businesses — from startups to established universities — obtain Sponsor Licences and manage every Skilled Worker Visa application.',
    items: ['Sponsor Licence applications', 'Skilled Worker Visa management', 'Ongoing compliance retainer', 'University & institution partnerships'],
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop&crop=top',
    imgAlt: 'Diverse employer team in a UK office',
  },
  {
    tag: 'For Employees',
    title: 'Relocating to the UK? Focus on your new role.',
    desc: 'Your employer is sponsoring you — but you still need your visa handled correctly. We manage every step end-to-end so you can focus on what comes next.',
    items: ['Skilled Worker Visa applications', 'Certificate of Sponsorship guidance', 'Family & dependant applications', 'Right to work verification'],
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop&crop=top',
    imgAlt: 'Professional preparing to relocate to the UK',
  },
];

const steps = [
  { num: '01', title: 'Tell us your situation', desc: 'Answer a few smart questions and our system identifies exactly which UK visa you need and what it will cost — no ambiguity, no jargon.' },
  { num: '02', title: 'Upload your documents', desc: 'Our platform tells you exactly what you need. Upload securely, and we check everything — flagging issues before they reach the Home Office.' },
  { num: '03', title: 'We build your application', desc: 'Our advisers prepare and review your complete application pack. AI handles the repetition; humans handle the legal judgement.' },
  { num: '04', title: 'Track it in real time', desc: 'No more chasing emails. Your case dashboard shows exactly where your application is — every step, every status update, in real time.' },
];

const TalentSection = () => {
  return (
    <>
      {/* WHO WE SERVE */}
      <section id="who-we-help" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Who We Help</p>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              UK visa support.<br />
              <span className="text-amber-400">For everyone going places.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mt-3 max-w-2xl">
              Whether you are a student with a UK university offer, an employer scaling globally, or an employee starting a new chapter — SoftHire handles every UK visa application end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1 rounded-2xl overflow-hidden border border-white/10">
            {serveCards.map((card) => (
              <div
                key={card.tag}
                className="flex flex-col p-8 transition-all duration-300 hover:bg-white/5 group"
                style={{ background: '#0E1F45' }}
              >
                <div className="w-full h-44 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={card.img}
                    alt={card.imgAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,31,69,0.7) 0%, transparent 60%)' }} aria-hidden="true" />
                </div>
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">{card.tag}</p>
                <h3 className="text-white font-bold text-xl leading-snug mb-3" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{card.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap py-4" style={{ background: '#E8A830' }} aria-hidden="true">
        <div className="inline-block animate-marquee">
          {['UK Student Visas', 'Skilled Worker Visas', 'Sponsor Licences', 'Graduate Visas', 'Partner & Dependant Visas', 'University Partnerships', 'Compliance Monitoring'].map((item, i) => (
            <span key={i} className="inline-block mx-8 font-bold text-sm uppercase tracking-widest" style={{ color: '#0B1736' }}>
              {item} <span style={{ opacity: 0.3, marginLeft: '0.5rem', marginRight: '0.5rem' }}>◆</span>
            </span>
          ))}
          {['UK Student Visas', 'Skilled Worker Visas', 'Sponsor Licences', 'Graduate Visas', 'Partner & Dependant Visas', 'University Partnerships', 'Compliance Monitoring'].map((item, i) => (
            <span key={`b${i}`} className="inline-block mx-8 font-bold text-sm uppercase tracking-widest" style={{ color: '#0B1736' }}>
              {item} <span style={{ opacity: 0.3, marginLeft: '0.5rem', marginRight: '0.5rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(46,100,200,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Steps */}
            <div>
              <div className="mb-10">
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
                <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  From confused<br />
                  to <span className="text-amber-400">confirmed</span> —<br />
                  in weeks, not months.
                </h2>
                <p className="text-white/60 text-base leading-relaxed mt-3 max-w-md">
                  Our technology removes the complexity. Our advisers handle the judgement. You just need to answer our questions.
                </p>
              </div>

              <div className="flex flex-col">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`flex gap-5 py-5 group transition-all duration-200 hover:pl-2 ${i < steps.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-full border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400 text-xs font-bold group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-200" style={{ fontFamily: "'Syne', sans-serif" }}>
                      <span className="group-hover:text-navy-900" style={{}}>{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard mockup */}
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: '#172859' }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10" style={{ background: 'rgba(11,23,54,0.8)' }}>
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/40 text-xs ml-2">SoftHire Case Dashboard</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {[
                  { label: 'Identity Verification', pct: 100, status: 'Complete' },
                  { label: 'Financial Evidence', pct: 95, status: '95%' },
                  { label: 'English Language', pct: 88, status: '88%' },
                ].map(({ label, pct, status }) => (
                  <div key={label} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs text-white/50">
                      <span>{label}</span>
                      <span className="text-amber-400 font-semibold">{status}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #2EC4B6, #E8A830)' }} />
                    </div>
                  </div>
                ))}
                {[
                  { label: 'TB Test Certificate', badge: 'Action Required', color: 'text-amber-400 bg-amber-400/15' },
                  { label: 'Adviser Review', badge: 'In Progress', color: 'text-teal-400 bg-teal-400/15' },
                  { label: 'Home Office Submission', badge: 'Scheduled', color: 'text-blue-400 bg-blue-400/15' },
                ].map(({ label, badge, color }) => (
                  <div key={label} className="flex items-center justify-between rounded-xl px-4 py-3 border border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="text-white/60 text-sm">{label}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}>{badge}</span>
                  </div>
                ))}
                <div className="mt-2 flex items-center gap-2 text-white/50 text-xs">
                  <CheckCircle className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  Real-time updates — no chasing required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentSection;
