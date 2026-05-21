import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
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
              <div className="flex flex-col">
                <span className="text-xs tracking-[0.4em] font-medium text-accent-red">
                  VIJAY REDDY VENNAM
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm italic">
              "Crafting a future where truth informs, education empowers, and
              innovation leads the way for South India."
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jignesh-rana-324624b/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jignesh Rana LinkedIn"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-red hover:text-white transition-all duration-500 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.youtube.com/@BIGTVTeluguLive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Big TV Telugu YouTube"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-red hover:text-white transition-all duration-500 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.128C19.725 3.5 12 3.5 12 3.5s-7.725 0-9.378.558A3.01 3.01 0 0 0 .502 6.186 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 3.01 3.01 0 0 0 2.12 2.128C4.275 20.5 12 20.5 12 20.5s7.725 0 9.378-.558a3.01 3.01 0 0 0 2.12-2.128A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
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
            <div className="glass p-8 rounded-3xl space-y-8 border-none bg-white/5 hover:bg-white/8 transition-all duration-700">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-accent-red rounded-2xl flex items-center justify-center shadow-lg shadow-accent-red/20">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                    Official Email
                  </span>
                  <a
                    href="mailto:vijay@pravasamedia.com"
                    className="text-sm font-bold text-white group-hover:text-accent-red transition-colors"
                  >
                    vijay@pravasamedia.com
                  </a>
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

        {/* SocialBureau Credit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="https://www.bigtvlive.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block"
          >
            <img
              src="LOGO (2).png"
              alt="Big TV Logo"
              className="h-40 md:h-45 object-contain brightness-110 contrast-125"
            />
          </a>
        </motion.div>

        {/* Powered By (SocialBureau) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-row items-center gap-3 text-[9px] md:text-[11px] font-bold text-muted uppercase tracking-[0.2em] mt-6 justify-start w-full text-left">
            <span>POWERED BY</span>

            <a href="https://www.socialbureau.in/enquiry-form" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center">

              <img

                src="https://www.socialbureau.in/assets/logo.webp"

                alt="SocialBureau"

                className="h-5 md:h-8 w-auto"

              />

            </a>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-3xl border-accent-red/20 pl-8 md:pl-10 py-3">
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              © {new Date().getFullYear()} Vijay Reddy Vennam
            </p>
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
