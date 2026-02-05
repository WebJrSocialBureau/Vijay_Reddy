import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Timeline = () => {
  const events = [
    { year: "2016", company: "Apnameds Ecommerce", role: "Director" },
    { year: "2021", company: "Winspire Campaigns", role: "Director" },
    {
      year: "2021",
      company: "Pravasa Media LLP (BIG TV)",
      role: "Designated Partner",
    },
    { year: "2022", company: "Vidlex Solutions", role: "Director" },
    { year: "2022", company: "Flipitt Digital Solutions", role: "Director" },
    { year: "2022", company: "Uvi Media Innovations", role: "Director" },
    { year: "2022", company: "Tag Quest LLP", role: "Designated Partner" },
    { year: "2025", company: "Elemental Media", role: "Director" },
    { year: "2025", company: "Adency Private Limited", role: "Director" },
    { year: "2026", company: "Big TV 24 X 7 LLP", role: "Designated Partner" },
  ];

  return (
    <section
      id="timeline"
      className="section-padding bg-navy-950/30 overflow-hidden font-sans"
    >
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 font-serif"
          >
            THE CORPORATE <br />
            <span className="text-accent-red italic">JOURNEY.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-center italic text-slate-500 font-medium"
          >
            A decade of strategic leadership and visionary expansion.
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Line - Progressive Drawing */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-accent-red via-navy-700 to-transparent opacity-30 origin-top"
          ></motion.div>

          <div className="space-y-16">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 5) * 0.1,
                }}
                className={`flex items-center w-full relative ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Area */}
                <div className="w-1/2 flex flex-col items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      border: "1px solid rgba(214, 40, 40, 0.3)",
                    }}
                    className={`glass-card max-w-sm w-full group hover:bg-navy-900 transition-all duration-700 ${i % 2 === 0 ? "md:mr-12 text-right" : "md:ml-12 text-left"}`}
                  >
                    <span className="text-accent-red font-black text-2xl block mb-2 font-serif italic">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent-red transition-colors font-serif">
                      {event.company}
                    </h3>
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500">
                      {event.role}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + (i % 5) * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-950 border-2 border-accent-red z-10 shadow-[0_0_20px_#d62828]"
                ></motion.div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
