/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Award, ShieldCheck, Clock, Zap, Activity, Microscope, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 sm:pt-40 pb-20 flex items-center justify-center overflow-hidden border-b border-slate-200/60 bg-slate-950 text-white"
    >
      {/* Full-width High-Resolution Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2400&q=85"
          alt="Preclinical Bio Laboratory"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 animate-fade-in"
        />
        {/* Subtle, sophisticated gradient overlays for high contrast and light-blue ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 bg-slate-900/80 backdrop-blur-md border border-sky-400/30 rounded-full px-4 py-1.5 mb-8 shadow-lg shadow-sky-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          <span className="text-xs font-mono tracking-wider text-sky-200 font-bold uppercase">
            Facility Status: Active & Onboarding Studies
          </span>
        </motion.div>

        {/* Bold Impactful Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl"
        >
          Alaris <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-200">Biosciences</span>
        </motion.h1>

        {/* Refined Center-Aligned Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 sm:mt-5 text-xs sm:text-sm font-mono font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-sky-300/90 uppercase text-center max-w-3xl"
        >
          YOUR TRUSTED THIRD-PARTY MEDICINE MANUFACTURER
        </motion.div>


        {/* Primary Call-to-Action Buttons (Center Aligned) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={(e) => handleScrollTo(e, "#services")}
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-sm"
          >
            <span>Contact Us</span>
          </button>
        </motion.div>

        {/* Trust Badges / Stats Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <span className="font-display text-2xl font-extrabold text-sky-400 block">1200+</span>
            <span className="text-xs font-sans text-slate-300 mt-1 block">Product Approvals</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <span className="font-display text-2xl font-extrabold text-white block">WHO-GMP</span>
            <span className="text-xs font-sans text-slate-300 mt-1 block">Certified Facilities</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <span className="font-display text-2xl font-extrabold text-sky-400 block">31 Days</span>
            <span className="text-xs font-sans text-slate-300 mt-1 block">Guaranteed Turnaround</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <span className="font-display text-2xl font-extrabold text-white block">100%</span>
            <span className="text-xs font-sans text-slate-300 mt-1 block">QC & COA Compliance</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

