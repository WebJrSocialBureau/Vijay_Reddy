import React from "react";
import { motion } from "framer-motion";
import {
  Tv,
  GraduationCap,
  ArrowUpRight,
  Globe,
  TrendingUp,
} from "lucide-react";

const Leadership = () => {
  const foundations = [
    {
      title: "BIG TV",
      tagline: "24/7 Satellite News",
      desc: "Revolutionizing Telugu and Malayalam news markets with a commitment to authenticity and real-time reporting.",
      icon: <Tv size={32} />,
      link: "https://www.bigtvlive.com",
      accent: "from-accent-red to-red-600",
    },
    {
      title: "BIG Academy",
      tagline: "Academic Excellence",
      desc: "Setting the national benchmark for integrated educational systems, nurturing future leaders in Medicine and Engineering.",
      icon: <GraduationCap size={32} />,
      link: "https://bigacademyedu.com",
      accent: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <section
      id="visions"
      className="section-padding overflow-hidden font-sans"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase font-black tracking-[0.4em] text-accent-red mb-6 block">
              Foundational Leadership
            </span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter font-serif">
              DRIVING THE <br />
              <span className="text-gradient underline decoration-accent-red decoration-4 transition-all hover:decoration-8 italic">
                FUTURE.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-slate-500 max-w-sm font-medium"
          >
            A diverse ecosystem of ventures designed to inform, educate, and
            empower the citizens of tomorrow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {foundations.map((item, i) => (
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
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-navy-950 p-12 flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all duration-700"
            >
              {/* Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-1000`}
              ></div>

              <div className="relative z-10 flex justify-between items-start">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="p-4 glass rounded-2xl group-hover:bg-white/10 transition-colors"
                >
                  {item.icon}
                </motion.div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0 text-white">
                  <span className="text-[10px] uppercase font-black tracking-widest ">
                    Global Reach
                  </span>
                  <Globe size={12} className="text-accent-red" />
                </div>
              </div>

              <div className="relative z-10">
                <a href={item.link} target="_blank">
                <span className="text-xs uppercase tracking-widest text-accent-red font-bold mb-4 block">
                  {item.tagline}
                </span>
                <h3 className="text-4xl font-black text-white mb-6 group-hover:tracking-wider transition-all duration-700 font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-400 mb-8 max-w-xs transition-colors group-hover:text-white leading-relaxed">
                  {item.desc}
                </p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group/btn cursor-pointer w-fit"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-navy-950 transition-all duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover/btn:opacity-100 transition-all duration-500">
                    View Ecosystem
                  </span>
                </motion.div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Stats Bar */}
        <div className="mt-20 py-12 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            {
              label: "Audience Reach",
              value: "Multi-Market",
              icon: <TrendingUp size={16} />,
            },
            {
              label: "Operational",
              value: "24/7 Dynamic",
              icon: <Globe size={16} />,
            },
            {
              label: "Core Principle",
              value: "Trust via Truth",
              icon: <Tv size={16} />,
            },
            {
              label: "Standard",
              value: "National Bench",
              icon: <GraduationCap size={16} />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center md:items-start gap-4 group"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-accent-red opacity-30 group-hover:opacity-100 transition-all"
              >
                {stat.icon}
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-accent-red transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
