const About = () => {
  const trustStats = [
    { icon: "🇬🇧", num: "IAA", label: "Regulated by the UK Immigration Advice Authority" },
    { icon: "⚡", num: "3 wks", label: "Average time from first contact to submission-ready application" },
    { icon: "🎯", num: "97%", label: "UK visa success rate — published openly, not hidden in the small print" },
    { icon: "💷", num: "Fixed", label: "Fee pricing with zero hidden costs. Know exactly what you will pay before you start" },
  ];

  const testimonials = [
    {
      text: "I was terrified of getting my student visa wrong and losing my place at Manchester. SoftHire made the whole process feel manageable — I knew exactly what was needed at every step and my visa came through in 19 days.",
      name: "Priya S.",
      role: "MSc Data Science · University of Manchester",
      avatar: "PS",
    },
    {
      text: "We were scaling fast and needed to hire three engineers from outside the EU. SoftHire got our Sponsor Licence sorted in under three weeks and managed all three Skilled Worker applications. Game changer for our People team.",
      name: "James T.",
      role: "Head of People · Series B Fintech, London",
      avatar: "JT",
    },
    {
      text: "My sister had a refusal from another agent. SoftHire reviewed her case, identified exactly what went wrong, and we reapplied successfully. The case dashboard meant I could follow every update without chasing anyone.",
      name: "Chidi O.",
      role: "LLB Law · University of Coventry",
      avatar: "CO",
    },
  ];

  return (
    <>
      {/* TRUST STATS */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#0E1F45' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Why SoftHire</p>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Built for the<br />
              <span className="text-amber-400">moments that matter.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mt-3 max-w-xl mx-auto">
              A UK visa application is not just paperwork. It is your career, your education, your family. We treat it that way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {trustStats.map(({ icon, num, label }) => (
              <div
                key={num}
                className="rounded-2xl border border-white/10 p-6 flex flex-col transition-all duration-300 hover:border-amber-400/25 hover:-translate-y-1"
                style={{ background: '#172859' }}
              >
                <span className="text-3xl mb-3" aria-hidden="true">{icon}</span>
                <span className="text-amber-400 font-extrabold text-3xl leading-none mb-2" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>{num}</span>
                <span className="text-white/55 text-sm leading-relaxed">{label}</span>
              </div>
            ))}
          </div>

          {/* About text */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>About SoftHire</h3>
              <p className="text-white/65 leading-relaxed mb-5">
                At SoftHire, we make global hiring <strong className="text-white">simple, compliant, and fast</strong>. We help UK businesses unlock access to international talent by streamlining every step — from applying for a sponsor licence, to staying compliant with Home Office rules, to recruiting skilled workers from around the world.
              </p>
              <p className="text-white/65 leading-relaxed">
                We also help deserving candidates who want to bring their skills to the UK by assisting them through every visa type — from Student Visas and Graduate Visas to Skilled Worker Visas, Dependant Visas, and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>Our Mission</h3>
              <div className="flex flex-col gap-3">
                {[
                  "Enable businesses to hire the best people, wherever they are.",
                  "Simplify compliance with smart, automated tools.",
                  "Bridge global talent gaps so the UK remains competitive in a fast-changing world.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/8">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl border border-amber-400/20 bg-amber-400/5">
                <p className="text-white/80 text-sm">
                  Considering recruiting internationally?{" "}
                  <a href="#contact" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">Get in touch</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0B1736' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">What People Say</p>
            <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontFamily: "'Syne', 'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Real people.<br />
              <span className="text-amber-400">Real journeys.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border border-white/10 p-6 flex flex-col transition-all duration-300 hover:border-amber-400/25 hover:-translate-y-1"
                style={{ background: '#172859' }}
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="SoftHire" />
                <div className="text-amber-400 text-5xl font-extrabold leading-none opacity-20 mb-3" aria-hidden="true">"</div>
                <div className="text-amber-400 text-sm mb-3" aria-label="5 out of 5 stars">
                  <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    ★★★★★
                  </span>
                </div>
                <p className="text-white/75 text-sm leading-relaxed flex-grow mb-5" itemProp="reviewBody">{t.text}</p>
                <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm" itemProp="name">{t.name}</div>
                    <div className="text-white/45 text-xs">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
