import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, Globe, Quote } from "lucide-react";

const ImpactValues = () => {
  const values = [
    {
      title: "Trust through Truth",
      desc: "Building media institutions that operate on the bedrock of authentic information and absolute credibility.",
      icon: <ShieldCheck size={32} className="text-accent-red" />,
    },
    {
      title: "Strategic Innovation",
      desc: "Integrating cutting-edge technology with traditional systems to create future-proof solutions.",
      icon: <Zap size={32} className="text-accent-gold" />,
    },
    {
      title: "Social Empowerment",
      desc: "Creating educational benchmarks that nurture the next generation of Indian intellectual leadership.",
      icon: <Heart size={32} className="text-red-500" />,
    },
  ];

  return (
    <section
      id="impact"
      className="section-padding relative font-sans overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-red/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 mb-32 items-start">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 p-6 glass rounded-[2rem] w-fit group-hover:bg-accent-red/10 transition-colors"
              >
                {v.icon}
              </motion.div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter font-serif italic">
                {v.title}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed italic border-l border-white/10 pl-6 group-hover:border-accent-red transition-all duration-500">
                "{v.desc}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Quote - The Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: "1000px" }}
          className="relative rounded-[4rem] overflow-hidden bg-navy-950 p-12 md:p-32 text-center border border-white/5 group"
        >
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,40,40,0.1)_0%,transparent_70%)] animate-pulse group-hover:bg-[radial-gradient(circle_at_center,rgba(214,40,40,0.15)_0%,transparent_70%)] transition-colors duration-1000"></div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Quote size={64} className="text-accent-red opacity-20 mb-12" />
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-black italic mb-16 leading-tight tracking-tighter max-w-5xl font-serif">
              "Our vision isn't to fill seats—it's to nurture leaders who will
              redefine medicine, engineering, and innovation. We're not pursuing
              ranks; we're{" "}
              <motion.span
                whileHover={{ scale: 1.1, color: "#f77f00" }}
                className="text-accent-red cursor-pointer transition-colors duration-500"
              >
                shaping legacies
              </motion.span>{" "}
              that resonate far beyond classrooms."
            </h3>

            <div className="flex flex-col items-center">
              <span className="text-xs uppercase font-black tracking-[0.5em] text-accent-red mb-2">
                Vision Statement
              </span>
              <span className="text-2xl font-black text-white font-serif">
                Vijay Reddy Vennam
              </span>
              <div className="mt-8 flex items-center gap-6">
                <div className="w-12 h-px bg-white/10"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Globe size={20} className="text-slate-500" />
                </motion.div>
                <div className="w-12 h-px bg-white/10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactValues;
