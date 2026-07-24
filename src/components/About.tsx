/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROCESS_STEPS, TEAM, FAQS } from "../data";
import { ShieldAlert, Users, Award, BookOpen, ChevronDown, ChevronUp, Star, ShieldCheck, CheckCircle2, Sparkles, Building2, Microchip, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="about" className="py-24 bg-[#f0f7ff] bg-grid-pattern border-b border-sky-100/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Facility & Quality Standards</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uncompromising Veterinary Care & Data Integrity
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Operating under 100% IACUC oversight in AAALAC-standard barrier facilities with board-certified veterinary monitoring.
          </p>
        </motion.div>

        {/* Bento Grid Row 1: Facility Narrative + Specs + Image */}
        <motion.div 
          id="gallery"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20"
        >
          
          {/* Card 1: Ethics & Care Narrative */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-2">100% IACUC Oversight</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                High-Quality Care Drives Reliable Preclinical Data
              </h3>
              <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                Our positive-pressure, HEPA-filtered Venti-rack barrier facilities operate under 100% IACUC oversight and 24/7 veterinary monitoring to eliminate experimental variance and deliver regulatory-compliant data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Pathogen-Free Barrier</span>
                  <span className="text-[10px] text-slate-500">PCR sentinel diagnostics</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                <Award className="w-5 h-5 text-sky-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">AAALAC Compliance</span>
                  <span className="text-[10px] text-slate-500">Full protocol registration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Laboratory Image & Tech Spec Dark Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-950/10 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">Facility Specs</span>
                <span className="px-2.5 py-0.5 bg-sky-500/10 border border-sky-500/20 text-sky-300 rounded-full text-[10px] font-mono">
                  ABSL-1 & ABSL-2
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-white mb-4">
                Sterile Climate-Controlled Barrier Environment
              </h4>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Air Exchange Rate</span>
                  <span className="font-mono text-sky-400 font-bold">15-20 HEPA cycles / hr</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Light Cycle Regulations</span>
                  <span className="font-mono text-sky-400 font-bold">12h Light / 12h Dark</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Water Filtration Systems</span>
                  <span className="font-mono text-sky-400 font-bold">RO + Autoclaved</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/70 rounded-2xl p-4 border border-slate-700/50 flex items-start space-x-3">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-normal">
                Strict environmental control eliminates baseline experimental noise and light-cycle disruptions across study cohorts.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Bento Row 2: Workflow Lifecycle Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm text-left mb-20"
        >
          <div className="max-w-2xl mb-10">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Operational Efficiency</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Preclinical Workflow Lifecycle
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-sans mt-1">
              Structured from protocol intake to IND-ready data delivery to ensure zero study delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/70 flex flex-col space-y-3 relative group hover:border-sky-300 hover:bg-white transition-all duration-300"
              >
                <span className="absolute top-4 right-4 font-display font-extrabold text-3xl text-slate-200 group-hover:text-sky-100 transition-colors">
                  0{step.step}
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-600 uppercase">
                  Phase {step.step}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bento Row 3: Science Leadership Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Scientific Oversight</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Lead Scientific Investigators
            </h3>
            <p className="text-slate-600 font-sans text-xs sm:text-sm mt-1">
              PhD and DVM led leadership directing pharmacology, veterinary care, and bioanalytical operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col space-y-4 text-left hover:border-sky-300 transition-all duration-300">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center font-display font-bold text-sky-700 text-sm shadow-xs shrink-0">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-display font-bold text-sm text-slate-900 leading-none">
                      {member.name}, <span className="text-sky-600 font-semibold">{member.credentials}</span>
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-1">
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bento Row 4: Client FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Client FAQs</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between px-6 py-4 font-display text-sm font-bold text-slate-900 text-left focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4.5 h-4.5 text-sky-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-3 animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

