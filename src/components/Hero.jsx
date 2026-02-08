import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 font-sans"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-700/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-48 pb-20 lg:pt-40">
        <div className="order-2 lg:order-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              BEYOND THE <br />
              <span className="text-gradient font-serif italic">ORDINARY.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium"
            >
              Vijay Reddy Vennam is a visionary media entrepreneur and
              technology innovator, dedicated to "Trust through Truth" and
              reshaping the landscape of South Indian media and education.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center"
            >
              <a
                href="#profile"
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent-red transition-all group"
              ><button className="btn-premium">Explore The Vision</button></a>
              <a
                href="#leadership"
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent-red transition-all group"
              >
                Foundations
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-black">2025</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  Visionary of the Year
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-12">
                <span className="text-3xl font-black">CMD</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  Pravasa Media
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            className="relative group w-full mx-auto"
          >
            {/* Image Frame */}
            <div className="absolute -inset-4 border border-white/5 rounded-[2rem] -z-10 group-hover:inset-0 transition-all duration-700"></div>
            <div className="absolute -inset-8 border border-white/5 rounded-[2.5rem] -z-10 delay-100 group-hover:inset-0 transition-all duration-700"></div>

            <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/50 aspect-[3/4]">
              <img
                src="/vijay.jpeg"
                alt="Vijay Reddy Vennam"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block group-hover:-translate-y-4 transition-transform duration-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent-red rounded-full animate-pulse shadow-[0_0_10px_#d62828]"></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-widest leading-none">
                    Leading Now
                  </span>
                  <span className="text-[10px] text-slate-400">
                    BIG TV 24x7
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
