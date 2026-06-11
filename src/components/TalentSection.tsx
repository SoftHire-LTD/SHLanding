const TalentSection = () => {
  return (
    <>
      {/* SECTION 2 — PROBLEM FRAMING */}
      <section id="why-sponsor" className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,168,48,0.07) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            You found the right person.<br />
            <span className="text-amber-400">Now comes the hard part.</span>
          </h2>
          <div className="text-white/65 text-lg leading-relaxed space-y-5">
            <p>
              Hiring internationally requires a sponsor licence, compliant HR systems, accurate records, Certificates of Sponsorship, right-to-work checks and ongoing Home Office reporting. A mistake at any stage can mean delays, refusals, or losing your licence entirely.
            </p>
            <p className="text-white/80 font-medium text-xl">
              SoftHire handles all of it — so you can make the hire.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap py-4" style={{ background: '#E8A830' }} aria-hidden="true">
        <div className="inline-block animate-marquee">
          {['Sponsor Licence Applications', 'Skilled Worker Visas', 'Certificate of Sponsorship', 'Right-to-Work Checks', 'Compliance Retainers', 'Home Office Audit Readiness', 'Key Personnel Setup'].map((item, i) => (
            <span key={i} className="inline-block mx-8 font-bold text-sm uppercase tracking-widest" style={{ color: '#0B1736' }}>
              {item} <span style={{ opacity: 0.3, marginLeft: '0.5rem', marginRight: '0.5rem' }}>◆</span>
            </span>
          ))}
          {['Sponsor Licence Applications', 'Skilled Worker Visas', 'Certificate of Sponsorship', 'Right-to-Work Checks', 'Compliance Retainers', 'Home Office Audit Readiness', 'Key Personnel Setup'].map((item, i) => (
            <span key={`b${i}`} className="inline-block mx-8 font-bold text-sm uppercase tracking-widest" style={{ color: '#0B1736' }}>
              {item} <span style={{ opacity: 0.3, marginLeft: '0.5rem', marginRight: '0.5rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TalentSection;
