import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-red/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-red rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-accent-red/20">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">
                  VIJAY REDDY
                </span>
                <span className="text-xs tracking-[0.4em] font-medium text-accent-red">
                  VENNAM
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm italic">
              "Crafting a future where truth informs, education empowers, and
              innovation leads the way for South India."
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-red hover:text-white transition-all duration-500 group"
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-black tracking-[0.4em] text-white mb-10">
              Navigation
            </h4>
            <ul className="space-y-6">
              {["Identity", "Visions", "Journey", "Impact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 font-bold hover:text-accent-red transition-all flex items-center gap-4 group"
                  >
                    <div className="w-0 h-px bg-accent-red group-hover:w-6 transition-all duration-500"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Interaction */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-black tracking-[0.4em] text-white mb-10">
              Get In Touch
            </h4>
            <div className="glass p-8 rounded-3xl space-y-8 border-none bg-white/5 hover:bg-white/[0.08] transition-all duration-700">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-accent-red rounded-2xl flex items-center justify-center shadow-lg shadow-accent-red/20">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                    Official Email
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-accent-red transition-colors">
                    contact@vijayreddy.pro
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5">
                  <MapPin size={20} className="text-accent-red" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                    Base of Operations
                  </span>
                  <span className="text-sm font-bold text-white">
                    Hyderabad, Telangana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] uppercase font-black tracking-[0.3em] text-slate-500">
            <span>© 2026 Vijay Reddy Vennam</span>
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] group"
          >
            Back to top
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-accent-red transition-all">
              <ArrowRight size={18} className="-rotate-90" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
