/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Factory, 
  Pill, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  FileCheck, 
  Zap,
  Droplets,
  Package,
  Layers,
  HeartPulse,
  Send
} from "lucide-react";

export default function Services() {
  const handleEnquiryClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
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

  // Manufacturing Facilities (Minimal data)
  const facilities = [
    {
      city: "Gwalior",
      state: "Madhya Pradesh",
      badge: "High-Capacity Plant"
    },
    {
      city: "Nalagarh",
      state: "Solan, Himachal Pradesh",
      badge: "Excise-Free cGMP Hub"
    },
    {
      city: "Roorkee",
      state: "Uttarakhand",
      badge: "Advanced Pharma Zone"
    }
  ];

  // Dosage Forms (Minimal data)
  const dosageForms = [
    { title: "Tablets", icon: Pill, badge: "Alu-Alu & PVC Strips" },
    { title: "Capsules", icon: Layers, badge: "Hard & Soft Veg Gelatin" },
    { title: "Oral Liquids", icon: Droplets, badge: "Custom PET Shapes" },
    { title: "Ointments", icon: FlaskConical, badge: "Creams & Topicals" },
    { title: "Sachets", icon: Package, badge: "Single-Dose Packets" }
  ];

  // Salient Features (Minimal data)
  const salientFeatures = [
    { icon: Award, title: "1200+ Product Approvals", badge: "Drug Formulations" },
    { icon: FileCheck, title: "FSSAI & RDA Certified", badge: "Supplements" },
    { icon: Sparkles, title: "Latest DCGI Approvals", badge: "New Drug Combinations" },
    { icon: ShieldCheck, title: "Ultra-Modern QC Lab", badge: "Mandatory Batch COA" },
    { icon: Factory, title: "Segregated Nutra Unit", badge: "Dedicated Plants" },
    { icon: Clock, title: "31 Days Turnaround", badge: "Strict Delivery Policy" }
  ];

  // Therapeutic Segments (Minimal tags)
  const therapeuticSegments = [
    "Cardiac & Diabetic Care",
    "Neuro & Psychotropic",
    "Gynaecology & Nephrology",
    "Ortho, Arthritis & Uric Acid",
    "Oncology & Anemia Care",
    "Anti-Infectives & Biotics",
    "Dermatology & Thyroid",
    "Gastro & Digestive Enzymes",
    "Analgesic & Muscle Relaxant",
    "Immunosuppressive & Asthma"
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#f0f7ff] bg-grid-pattern border-b border-sky-100/80 relative overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-[11px] font-mono uppercase font-bold tracking-wider shadow-2xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>WHO-GMP Certified Partner Since 2007</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contract & Third-Party Manufacturing
          </h2>
        </motion.div>

        {/* 🍱 BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* 1. BENTO CARD: Company Overview & Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-900/40 shadow-xl relative overflow-hidden flex flex-col justify-between group h-full"
          >
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-400/30 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>WHO-GMP Standard</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-emerald-400/30 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3rd Party Enquiries Open</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
                End-to-End Pharmaceutical Manufacturing Services
              </h3>

              {/* Minimal Metric Chips instead of prose */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <span className="text-sky-400 font-extrabold text-2xl block font-display">1200+</span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Product Approvals</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <span className="text-sky-400 font-extrabold text-2xl block font-display">3</span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Manufacturing Hubs</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <span className="text-sky-400 font-extrabold text-2xl block font-display">31 Days</span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Dispatch Policy</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <span className="text-sky-400 font-extrabold text-2xl block font-display">QC COA</span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Every Batch Tested</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                Established 2007 • High Capacity Production
              </span>

              <button
                onClick={handleEnquiryClick}
                className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-2"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* 2. BENTO CARD: 31-Day Speed Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-sky-600/15 border border-sky-400/40 relative overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 w-fit text-white mb-4">
                <Zap className="w-6 h-6 text-sky-200" />
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest text-sky-100 uppercase block mb-1">
                Guaranteed Turnaround
              </span>

              <h3 className="font-display text-3xl font-extrabold text-white tracking-tight mb-4">
                31 Working Days
              </h3>

              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-4 border border-white/20">
                From Artwork Finalization
              </span>
            </div>

            <div className="space-y-2 border-t border-white/20 pt-4">
              <div className="flex items-center space-x-2 text-xs text-sky-50 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-200 shrink-0" />
                <span>Strict Time-Bound Dispatch Policy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-sky-50 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-200 shrink-0" />
                <span>Mandatory Assay & Dissolution COA</span>
              </div>
            </div>
          </motion.div>

          {/* 3. BENTO CARD: Manufacturing Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Manufacturing Locations
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">3 Production Facilities</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {facilities.map((loc) => (
                  <div 
                    key={loc.city} 
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-300 hover:bg-sky-50/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-1.5 text-sky-600 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="font-bold text-base font-display text-slate-900">{loc.city}</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 block mb-3">{loc.state}</span>
                    </div>
                    <span className="px-2 py-1 bg-sky-100/80 text-sky-800 text-[10px] font-mono font-bold rounded-lg uppercase tracking-wider text-center">
                      {loc.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. BENTO CARD: Dosage Forms Offered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Dosage Forms Offered
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Multiple Packaging Patterns</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dosageForms.map((item) => {
                  const IconC = item.icon;
                  return (
                    <div 
                      key={item.title} 
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:bg-sky-50/50 hover:border-sky-300 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm font-display text-slate-900">{item.title}</span>
                        <IconC className="w-4 h-4 text-sky-600" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-sky-100/80 text-sky-800 inline-block text-center">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 5. BENTO CARD: Salient Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Salient Features & Standards
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Quality & Regulatory Highlights</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {salientFeatures.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-sky-50/40 hover:border-sky-200 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-xl bg-white text-sky-600 border border-slate-200/80 shrink-0 shadow-2xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 font-display">
                          {feat.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-mono font-semibold rounded shrink-0">
                        {feat.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 6. BENTO CARD: Therapeutic Segments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-12 lg:col-span-5 bg-gradient-to-br from-sky-50/90 via-white to-blue-50/90 rounded-3xl p-6 sm:p-7 border border-sky-200/80 shadow-2xs flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl bg-sky-100 text-sky-700 border border-sky-200">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Therapeutic Segments
                  </h3>
                  <span className="text-[11px] font-mono text-sky-700 uppercase">Wide Spectrum General Range</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {therapeuticSegments.map((seg, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-xl bg-white border border-sky-200/70 text-slate-800 text-[11px] font-bold tracking-tight shadow-2xs hover:bg-sky-100/70 hover:text-sky-900 transition-colors"
                  >
                    • {seg}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-sky-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="flex items-center space-x-1 text-sky-700 font-mono text-[11px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Custom Formulations</span>
              </span>
              <button
                onClick={handleEnquiryClick}
                className="text-sky-700 hover:text-sky-900 font-bold underline decoration-sky-300 underline-offset-2 cursor-pointer text-xs"
              >
                Inquire Range &rarr;
              </button>
            </div>
          </motion.div>

          {/* 7. BENTO CARD: Full Width Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="md:col-span-12 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <h4 className="font-display text-lg font-extrabold text-slate-900 tracking-tight">
                  Ready to launch or expand your medicine brand?
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase">Product List</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase">MOQ Quotes</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleEnquiryClick}
              className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-sky-600/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center space-x-2"
            >
              <span>Submit 3rd Party Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
