/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROCESS_STEPS, FAQS } from "../data";
import { ShieldAlert, Award, ChevronDown, ChevronUp, ShieldCheck, CheckCircle2, Sparkles, Building2, Factory, Clock, FileCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const manufacturingStandards = [
    { title: "WHO-GMP Compliance", badge: "Certified Facilities" },
    { title: "1200+ Approved Formulations", badge: "DCGI Approved" },
    { title: "Ultra-Modern Testing Lab", badge: "Mandatory COA" },
    { title: "31-Day Delivery Policy", badge: "Time-Bound Dispatch" }
  ];

  const leadershipRoles = [
    { name: "Quality Assurance (QA)", tag: "cGMP Protocols", spec: "Batch Testing & COA Verification" },
    { name: "Quality Control (QC)", tag: "Ultra-Modern Lab", spec: "Assay & Dissolution Analysis" },
    { name: "Regulatory Affairs", tag: "DCGI & FSSAI", spec: "1200+ Approved Formulations" }
  ];

  return (
    <section id="about" className="py-24 bg-[#f0f7ff] bg-grid-pattern border-b border-sky-100/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-[11px] font-mono uppercase font-bold tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>cGMP Quality & Regulatory Framework</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Manufacturing Standards & Execution
          </h2>
        </motion.div>

        {/* Bento Grid Row 1: Quality Standards Overview + Technical Specs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16"
        >
          
          {/* Card 1: Quality Assurance & Certification */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between text-left relative overflow-hidden group">
            <div className="flex items-center space-x-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider">
                Quality Assurance Policy
              </span>
            </div>
            
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-6">
              Stringent Batch Protocols & Regulatory Integrity
            </h3>

            {/* Metric Chips Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {manufacturingStandards.map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between">
                  <span className="text-xs font-bold font-display text-slate-900 mb-1">{item.title}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100/80 text-sky-800 w-fit">{item.badge}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-mono">
              <span className="flex items-center space-x-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Defect Manufacturing</span>
              </span>
              <span className="bg-slate-100 px-2.5 py-1 rounded-full font-bold">Est. 2007</span>
            </div>
          </div>

          {/* Card 2: Plant Infrastructure Specs */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-950/10 flex flex-col justify-between relative overflow-hidden text-left group">
            {/* Background facility visual */}
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80" 
              alt="Controlled Air Handling Unit"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">Facility Specifications</span>
                <span className="px-2.5 py-0.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-[10px] font-mono backdrop-blur-md">
                  Gwalior • Nalagarh • Roorkee
                </span>
              </div>

              <h4 className="font-display text-xl font-extrabold text-white mb-6">
                Controlled Air Handling & QC Infrastructure
              </h4>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Air Handling Units (AHU)</span>
                  <span className="font-mono text-sky-400 font-bold">HEPA Filtered ISO 7</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Testing Protocols</span>
                  <span className="font-mono text-sky-400 font-bold">Assay & Dissolution</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800 text-xs">
                  <span className="text-slate-300 font-sans">Turnaround Time</span>
                  <span className="font-mono text-sky-400 font-bold">31 Working Days</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-slate-800/80 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700/50 flex items-center space-x-3">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-xs font-mono font-bold text-sky-200 uppercase">
                Separate Dedicated Nutraceutical Facilities
              </span>
            </div>
          </div>

        </motion.div>

        {/* Visual Manufacturing Facilities Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Infrastructure Highlights</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Production Units
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Facility 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs group hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80" 
                  alt="Gwalior Plant Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-sky-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                  Plant 1 — Gwalior (M.P.)
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="font-display font-bold text-base text-slate-900 mb-1">High-Capacity Solid Dosage Unit</h4>
                <p className="text-xs font-mono text-slate-600">Tablets, Hard Gelatin Capsules & Oral Liquids in PET bottles.</p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs group hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" 
                  alt="Nalagarh Plant Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-sky-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                  Plant 2 — Nalagarh (H.P.)
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="font-display font-bold text-base text-slate-900 mb-1">Excise-Free cGMP Nutra Plant</h4>
                <p className="text-xs font-mono text-slate-600">Veg Softgels, Effervescent Tablets & Dedicated Sachet Lines.</p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs group hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" 
                  alt="Roorkee Plant Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-sky-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                  Plant 3 — Roorkee (U.K.)
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="font-display font-bold text-base text-slate-900 mb-1">Derma & High-Speed Packaging</h4>
                <p className="text-xs font-mono text-slate-600">Ointments, Creams, Alu-Alu Blister & PVC Strip Packaging.</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bento Row 2: Operational Process Workflow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-2xs text-left mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Execution Workflow</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Third-Party Manufacturing Lifecycle
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-mono font-bold uppercase w-fit">
              6 Structured Phases
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div 
                key={step.step} 
                className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60 flex flex-col justify-between space-y-3 relative group hover:border-sky-300 hover:bg-sky-50/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-sky-600 uppercase">
                    Phase {step.step}
                  </span>
                  <span className="font-display font-extrabold text-2xl text-slate-200 group-hover:text-sky-200 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-slate-900">
                  {step.title}
                </h4>
                <span className="px-2.5 py-1 bg-white rounded-lg text-[11px] font-mono text-slate-700 border border-slate-200/80 font-medium">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bento Row 3: Technical Departments */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Operational Division</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Core Technical Departments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {leadershipRoles.map((dept, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xs flex flex-col justify-between text-left hover:border-sky-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-extrabold text-base text-slate-900">
                      {dept.name}
                    </span>
                    <span className="px-2 py-0.5 bg-sky-100 text-sky-800 font-mono text-[10px] font-bold rounded">
                      {dept.tag}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{dept.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bento Row 4: Client FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">Client Knowledgebase</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xs"
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
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-700 font-mono leading-relaxed border-t border-slate-100 pt-3 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{faq.answer}</span>
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
