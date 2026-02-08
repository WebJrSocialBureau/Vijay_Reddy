import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "Years of Vision", value: "10+" },
    { label: "Enterprises Built", value: "12" },
    { label: "Social Impact", value: "National" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="profile"
      className="section-padding bg-navy-950/50 relative font-sans"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Section Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight font-serif italic"
              >
                THE MAN <br />
                <span className="text-accent-red">BEHIND THE VISION.</span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="h-px w-24 bg-white/10 mb-8"
              ></motion.div>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 mb-8 font-medium"
              >
                Vijaya Kanth Reddy Vennam is not just a leader; he is a catalyst
                for change. His journey from global pharmaceutical ventures in
                the USA to pioneering digital media in India reflects a
                relentless pursuit of excellence.
              </motion.p>

              <div className="flex flex-col gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-6 group cursor-default"
                  >
                    <span className="text-4xl font-black text-accent-red opacity-50 group-hover:text-white/30 group-hover:opacity-100 transition-all duration-500">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Details Content */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col justify-between"
            >
              <div>
                <Award size={40} className="text-accent-gold mb-8" />
                <h3 className="text-2xl font-bold mb-4 font-serif">
                  Visionary of the Year 2025
                </h3>
                <p className="text-sm">
                  Recognized at the Hybiz TV Media Awards for groundbreaking
                  contributions to the digital and electronic media landscape in
                  India.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-accent-gold">
                <Zap size={14} className="fill-accent-gold" />
                Setting National Benchmarks
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card border-none bg-accent-red p-0 overflow-hidden relative"
            >
              <div className="p-8 relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Briefcase size={40} className="text-white mb-8" />
                  <h3 className="text-2xl font-bold mb-4 text-white font-serif">
                    Media Leadership
                  </h3>
                  <p className="text-white/80 text-sm">
                    As CMD of Pravasa Media (BIG TV), he has established a 24/7
                    credible news source built on the principle of "Trust
                    through Truth."
                  </p>
                </div>
                <a href="https://bigtvlive.com" target="_blank"><img src="/BigTvLive.png" alt="bigtv" className="w-30 h-auto object-cover py-5" /></a>
              </div>
              <motion.div
                animate={{
                  scaleOrigin: [1, 1.1, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full"
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card md:col-span-2"
            >
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    icon: GraduationCap,
                    title: "Education Impact",
                    desc: "Integrating Intermediate education with IIT-level training through BIG Academy.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Global Exposure",
                    desc: "Strong background in Business Administration and Pharmacy from international markets.",
                  },
                  {
                    icon: Briefcase,
                    title: "Director Roles",
                    desc: "Managing diverse portfolios across IT, Business Services, and Media sectors.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="space-y-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px]">
                      <item.icon size={16} className="text-accent-red" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
