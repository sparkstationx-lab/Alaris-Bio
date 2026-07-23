/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { ShieldAlert, Activity, HeartPulse, FlaskConical, CheckCircle2, ArrowUpRight, X, Sparkles } from "lucide-react";

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleConsultationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedServiceId(null);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 85;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId);

  return (
    <section id="services" className="py-24 bg-slate-50/70 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Fidelity Preclinical Platforms
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Targeted oncology model screens, pharmacokinetic mapping, and biomarker validation with PhD-led oversight.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Oncology & Immuno-Oncology (Wide Feature Card) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl -z-10 group-hover:bg-sky-200/40 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-sky-600 font-bold uppercase tracking-wider block">In Vivo Screening</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Oncology & Immuno-Oncology</h3>
                  </div>
                </div>
                <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-mono font-bold">
                  150+ Models
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Evaluate therapeutic efficacy and immune response mechanisms across syngeneic, human CDX, and PBMC-humanized mouse tumor models.
              </p>

              {/* Grid of bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {SERVICES[0].bulletPoints.slice(0, 4).map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Flow Cytometry & Caliper Endpoints</span>
              <button
                onClick={() => setSelectedServiceId("s-01")}
                className="inline-flex items-center space-x-1 text-xs font-bold text-sky-600 hover:text-sky-700 uppercase tracking-wider group/btn"
              >
                <span>Full Protocol Specs</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: Pharmacokinetics & ADME */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block">Bioanalytics</span>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Pharmacokinetics & ADME</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Single and repeat-dose PK profiling with blood microsampling and tissue harvesting in rodents.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["IV", "IP", "PO", "SC", "LC-MS/MS"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-mono font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Fast LC-MS/MS</span>
              <button
                onClick={() => setSelectedServiceId("s-02")}
                className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group/btn"
              >
                <span>Details</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 3: Tolerability & Toxicology */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider block">Safety Profile</span>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Tolerability & Toxicology</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Maximum Tolerated Dose (MTD) escalation and Dose-Range Finding (DRF) studies with full pathology.
              </p>

              <div className="space-y-2 mb-6">
                {SERVICES[2].bulletPoints.slice(0, 3).map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Histopathology</span>
              <button
                onClick={() => setSelectedServiceId("s-03")}
                className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider group/btn"
              >
                <span>Details</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Bento Card 4: Ex Vivo Assays & Biomarkers */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-600 font-bold uppercase tracking-wider block">Target Validation</span>
                    <h3 className="font-display text-xl font-bold text-slate-900">Ex Vivo Assays & Biomarkers</h3>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-mono font-bold">
                  High Precision
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                TIL isolation, multiplex cytokine Luminex profiling, RT-qPCR gene expression, and IHC tissue staining.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {SERVICES[3].bulletPoints.map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase">TILs & Cytokine Profiling</span>
              <button
                onClick={() => setSelectedServiceId("s-04")}
                className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider group/btn"
              >
                <span>Full Protocol Specs</span>
                <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Protocol Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-200 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">
                {selectedService.category} Platform
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                {selectedService.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-mono font-bold uppercase text-slate-400 block">Protocol Scope & Features</span>
                {selectedService.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-xs font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-500">Lead time: <strong className="text-slate-900">10-14 Days</strong></span>
                <button
                  onClick={handleConsultationClick}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-full text-xs font-bold shadow-md shadow-sky-600/20 transition-all"
                >
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

