import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Identity", href: "#profile" },
    { name: "Visions", href: "#leadership" },
    { name: "Journey", href: "#timeline" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 font-sans ${
        isScrolled
          ? "py-4 bg-navy-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-accent-red rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-accent-red/20 group-hover:rotate-12 transition-transform duration-500">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter leading-none">
              VIJAY REDDY
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-accent-red">
              VENNAM
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 w-0 h-px bg-accent-red group-hover:w-full transition-all duration-500"
              ></motion.span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white p-2 glass rounded-lg"
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-navy-950 border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-bold flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight
                    size={20}
                    className="text-accent-red opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
