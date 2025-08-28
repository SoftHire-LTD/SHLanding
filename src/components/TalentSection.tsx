import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TalentSection = () => {
  const features = [
    {
      title: "APPLY",
      subtitle: "Get Your Sponsor License Fast and Hassle Free",
      description:
        "Our guided portal simplifies every step, with final review by trusted immigration counsel.",
      img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "COMPLY",
      subtitle: "Stay compliant - without moving a finger",
      description: "Our software does the work.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "RECRUIT",
      subtitle: "Connect with Global Talent",
      description:
        "Access vetted international candidates ready to contribute to your business growth.",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 pt-24 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
          TALENT SHOULDN'T STOP AT{" "}
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            BORDERS
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed mb-20">
          Which is why SoftHire removes them. We use tech to streamline your Sponsor
          License application and introduce you to vetted international candidates
          for your business.
        </p>
      </motion.div>

      {/* Feature sections */}
      <div className="space-y-32 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`flex flex-col lg:flex-row items-center gap-12 px-6 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-5xl font-extrabold text-navy-900 mb-4">{f.title}</h3>
              <h4 className="text-2xl font-semibold text-navy-900 mb-6">{f.subtitle}</h4>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                {f.description}
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-blue-600 font-medium cursor-pointer"
              >
                <CheckCircle className="h-5 w-5" />
                <span onClick={() => window.scrollTo({ top: document.getElementById("products")?.offsetTop, behavior: "smooth" })}>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Employer ↔ Talent Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center items-center space-x-8 mt-32 mb-24 hidden"
      >
        <div className="flex flex-col items-center group">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&q=80"
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
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80"
            alt="Talent"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
          />
          <span className="mt-2 text-sm text-charcoal-600 font-medium">Talent</span>
        </div>
      </motion.div>

      {/* Global callout */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pb-24 text-center mt-32"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 border border-grey-200 shadow-xl max-w-4xl mx-auto">
          <div className="flex justify-center -space-x-4 mb-8">
            {["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/44.jpg", "https://randomuser.me/api/portraits/men/65.jpg", "https://randomuser.me/api/portraits/women/22.jpg"].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Global Talent"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Connect with Global Talent Today
          </h3>
          <p className="text-charcoal-700 text-lg">
            Join thousands of businesses already transforming their recruitment process
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TalentSection;
