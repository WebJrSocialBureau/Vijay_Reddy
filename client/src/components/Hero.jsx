import React from "react";
import { ArrowDown, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 font-sans"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-700/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-16 pb-12 lg:pt-20 lg:pb-20">
        <div className="order-2 lg:order-1">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 lg:mb-8 leading-[0.9] tracking-tighter">
              BEYOND THE <br />
              <span className="text-gradient font-serif italic">ORDINARY.</span>
            </h1>

            <p className="text-base md:text-xl text-slate-400 max-w-xl mb-8 lg:mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
              Vijay Reddy Vennam is a visionary media entrepreneur and
              technology innovator, dedicated to "Trust through Truth" and
              reshaping the landscape of South Indian media and education.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-6 items-center justify-center lg:justify-start">
              <a
                href="#identity"
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent-red transition-all group"
              >
                <button className="btn-premium">Explore The Vision</button>
              </a>
              <a
                href="#visions"
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent-red transition-all group"
              >
                Foundations
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="mt-10 lg:mt-16 flex items-center justify-center lg:justify-start gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-black">2025</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  Visionary of the Year
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-8 lg:pl-12">
                <span className="text-2xl lg:text-3xl font-black">CMD</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  Pravasa Media
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center w-full">
          <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-4/5 lg:aspect-3/4 max-h-[40vh] lg:max-h-none mx-auto lg:mr-0">
              <img
                src="/vijay.png"
                alt="Vijay Reddy Vennam"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block animate-bounce">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
