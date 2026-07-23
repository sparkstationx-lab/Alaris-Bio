/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { VALIDATED_MODELS } from "../data";
import { Check, ShieldCheck, Search, Filter, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PreclinicalModels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");

  const types = ["All", "Syngeneic", "Human CDX"];

  const filteredModels = VALIDATED_MODELS.filter((model) => {
    const matchesType = selectedType === "All" || model.type.toLowerCase().includes(selectedType.toLowerCase());
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.hostStrain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.standardTreatments.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesSearch;
  });

  return (
    <section id="models" className="py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col space-y-3">
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Characterized Library</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pre-Validated Tumor & Host Models
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Growth kinetics, immune characterization, and standard-of-care benchmark datasets across syngeneic and CDX model lines.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedType === type
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/80 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, origin, or treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>

        </div>

        {/* Bento Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredModels.map((model) => (
              <motion.div 
                layout
                key={model.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 text-left flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-300 transition-all duration-300"
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
                      {model.name}
                    </span>
                    <span className="px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-100">
                      {model.type}
                    </span>
                  </div>

                  {/* Subinfo grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs border-y border-slate-100 py-3 font-sans">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase leading-none mb-1">Host Strain</span>
                      <span className="font-semibold text-slate-800">{model.hostStrain}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase leading-none mb-1">Tumor Origin</span>
                      <span className="font-semibold text-slate-800">{model.origin}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-slate-400 block text-[10px] font-mono uppercase leading-none mb-1">Growth Kinetics</span>
                      <span className="font-semibold text-slate-800">{model.growthRate}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-slate-400 block text-[10px] font-mono uppercase leading-none mb-1">Doubling Time</span>
                      <span className="font-semibold text-sky-600">{model.doublingTimeDays} Days</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {model.description}
                  </p>
                </div>

                {/* Controls Treatments */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider block">
                    Standard-of-Care Benchmarks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {model.standardTreatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 bg-slate-50 border border-slate-200/80 text-slate-700 rounded-lg text-[10px] font-semibold"
                      >
                        <Check className="w-3 h-3 text-sky-600 shrink-0" />
                        <span>{treatment}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom In Vivo Models Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 text-left flex flex-col md:flex-row items-center md:justify-between gap-6 shadow-xl shadow-slate-950/10">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">Custom Sourcing & Pilot Screens</span>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">Need a Custom Cell Line or Specific Host Strain?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-sans leading-relaxed">
                We routinely perform custom cell-line sourcing, expansion, and pilot tolerability screens to validate new models for sponsor studies.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto text-center px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap shrink-0 shadow-md shadow-sky-500/20 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Inquire Custom Models</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

