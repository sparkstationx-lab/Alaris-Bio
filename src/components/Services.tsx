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
  Send,
  Sparkle
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

  // Manufacturing Facilities
  const facilities = [
    {
      city: "Gwalior",
      state: "Madhya Pradesh",
      tag: "Primary High-Capacity Plant",
      desc: "State-of-the-art solid dosage & oral liquid manufacturing unit with ultra-modern QC labs."
    },
    {
      city: "Nalagarh",
      state: "Dist. Solan (Himachal Pradesh)",
      tag: "Excise-Free Hub",
      desc: "Dedicated cGMP facilities for Tablets, Capsules, and specialized Nutraceutical formulations."
    },
    {
      city: "Roorkee",
      state: "Uttarakhand",
      tag: "Advanced Pharma Zone",
      desc: "Specialized in Alu-Alu strip packaging, liquid orals, ointments, and topical creams."
    }
  ];

  // Dosage Forms
  const dosageForms = [
    {
      title: "Tablets",
      icon: Pill,
      badge: "Alu-Alu & PVC Strips",
      desc: "Coated, Uncoated, SR, Dispersible & Effervescent in new trending pack strip patterns."
    },
    {
      title: "Capsules",
      icon: Layers,
      badge: "Hard & Soft Veg Gelatin",
      desc: "Hard Gelatin, Soft Gelatin & 100% Veg Capsules with moisture-barrier packaging."
    },
    {
      title: "Oral Liquids",
      icon: Droplets,
      badge: "Custom PET Shapes",
      desc: "Syrups, suspensions & oral solutions with multiple PET bottle shape options."
    },
    {
      title: "Ointments",
      icon: FlaskConical,
      badge: "Creams & Topicals",
      desc: "Derma creams, gels, lotions & medicated ointments in sterile air environment."
    },
    {
      title: "Sachets",
      icon: Package,
      badge: "Single-Dose Packets",
      desc: "Moisture-proof sachets for effervescent powders, probiotics & drink mixes."
    }
  ];

  // Salient Features
  const salientFeatures = [
    {
      icon: Award,
      title: "1200+ Product Approvals",
      desc: "Extensive drug formulation library with trending Alu-Alu and PVC strip pack patterns."
    },
    {
      icon: FileCheck,
      title: "FSSAI & RDA Value Certified",
      desc: "Latest dietary supplement combinations formatted as per official RDA certifications."
    },
    {
      icon: Sparkles,
      title: "DCGI & New Drug Approvals",
      desc: "Latest molecule combination approvals continuously added for market relevance."
    },
    {
      icon: ShieldCheck,
      title: "Ultra-Modern QC Lab & COA",
      desc: "Stringent protocols with mandatory Certificate of Analysis (Assay & Dissolution) per batch."
    },
    {
      icon: Factory,
      title: "Segregated Nutraceutical Plant",
      desc: "Separate dedicated manufacturing facilities for food supplements & nutraceuticals."
    },
    {
      icon: Clock,
      title: "Strict Time-Bound Delivery",
      desc: "Unmatched service policies ensuring reliable, on-time batch dispatches every time."
    }
  ];

  // Therapeutic Segments
  const therapeuticSegments = [
    "Cardiac, Diabetic, Neuro & Psychotropic",
    "Hormonal & Endocrine Care",
    "Gynaecology, Infertility, Prostatic & Nephrology",
    "Ortho, Arthritis, Uric Acid & Hepatoprotective",
    "Oncology (Breast Cancer), Anemia & Anti-coagulants",
    "Anti-Infectives (Biotic, Viral, Fungal, Parasitic, Malarial)",
    "Dermatology, Hyperthyroidism, Thyroid & Obesity",
    "Gastro, Digestive Enzymes & Gallbladder",
    "Analgesic, Muscle Relaxant & Migraine",
    "Immunosuppressive, Asthma, Supplements & Alcoholism Care"
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#f0f7ff] bg-grid-pattern border-b border-sky-100/80 relative overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 flex flex-col space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-[11px] font-mono uppercase font-bold tracking-wider shadow-2xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Trusted Partner Since 2007</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contract & Third-Party Manufacturing
          </h2>
          
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Delivering high-quality drug formulations adhering to WHO-GMP standards across multiple dosage forms and therapeutic verticals.
          </p>
        </motion.div>

        {/* 🍱 BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* 1. BENTO CARD: Company Overview & Invitation (Col Span 12 or 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-900/40 shadow-xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-400/30 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>WHO-GMP Standards</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-emerald-400/30 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enquiries Open</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Comprehensive Manufacturing Excellence
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl">
                As a trusted pharmaceutical manufacturing partner since 2007, we offer end-to-end contract and third-party manufacturing services. We are delighted to invite enquiries for reliable, high-volume production backed by rigorous batch quality controls.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-xs text-slate-300 font-mono">
                <div>
                  <span className="text-sky-400 font-bold text-lg block">1200+</span>
                  <span className="text-[10px] text-slate-400 uppercase">Approvals</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-sky-400 font-bold text-lg block">3 Plants</span>
                  <span className="text-[10px] text-slate-400 uppercase">Locations</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-sky-400 font-bold text-lg block">31 Days</span>
                  <span className="text-[10px] text-slate-400 uppercase">Turnaround</span>
                </div>
              </div>

              <button
                onClick={handleEnquiryClick}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-2"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* 2. BENTO CARD: 31-Day Speed Guarantee (Col Span 12 or 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 text-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-sky-600/15 border border-sky-400/40 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 w-fit text-white mb-4">
                <Zap className="w-6 h-6 text-sky-200" />
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest text-sky-100 uppercase block mb-1">
                Guaranteed Turnaround
              </span>

              <h3 className="font-display text-3xl font-extrabold text-white tracking-tight mb-2">
                31 Working Days
              </h3>

              <p className="text-sky-50 text-xs font-sans leading-relaxed mb-4">
                Get your brand manufactured and delivered in 31 working days from artwork finalization.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-sky-100 font-sans border-t border-white/20 pt-4">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-200 shrink-0" />
                <span>Strict time-bound delivery policy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-200 shrink-0" />
                <span>Transparent order tracking & COA</span>
              </li>
            </ul>
          </motion.div>

          {/* 3. BENTO CARD: Manufacturing Locations (Col Span 12 or 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                  State-of-the-Art Facilities
                </h3>
                <span className="text-[11px] font-mono text-slate-500 uppercase">3 Strategic Manufacturing Hubs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
              {facilities.map((loc) => (
                <div 
                  key={loc.city} 
                  className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-300 hover:bg-sky-50/40 transition-colors"
                >
                  <div className="flex items-center space-x-1.5 text-sky-600 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-bold text-sm font-display text-slate-900">{loc.city}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1.5 font-medium">{loc.state}</span>
                  <p className="text-[11px] text-slate-600 leading-snug font-sans">{loc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. BENTO CARD: Dosage Forms Offered (Col Span 12 or 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Dosage Forms Offered
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Versatile Manufacturing Lines</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {dosageForms.map((item) => {
                const IconC = item.icon;
                return (
                  <div 
                    key={item.title} 
                    className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:bg-sky-50/50 hover:border-sky-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-xs font-display text-slate-900">{item.title}</span>
                        <IconC className="w-3.5 h-3.5 text-sky-600" />
                      </div>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-sky-100/80 text-sky-800 inline-block mb-1">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 5. BENTO CARD: Salient Features (Col Span 12 or 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-2 mb-5">
              <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                  Salient Manufacturing Features
                </h3>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Quality & Packaging Advantage</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {salientFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-slate-50/60 border border-slate-200/50 hover:bg-sky-50/40 hover:border-sky-200 transition-colors flex items-start space-x-3"
                  >
                    <div className="p-2 rounded-xl bg-white text-sky-600 border border-slate-200/80 shrink-0 mt-0.5 shadow-2xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 font-display mb-0.5">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 6. BENTO CARD: Therapeutic Segments (Col Span 12 or 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-12 lg:col-span-5 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/80 rounded-3xl p-6 sm:p-7 border border-sky-200/80 shadow-2xs flex flex-col justify-between"
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
                    className="px-2.5 py-1 rounded-xl bg-white/90 border border-sky-200/70 text-slate-800 text-[11px] font-semibold tracking-tight shadow-2xs hover:bg-sky-100/60 hover:text-sky-900 transition-colors"
                  >
                    • {seg}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-sky-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="flex items-center space-x-1 text-sky-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Custom Formulations Available</span>
              </span>
              <button
                onClick={handleEnquiryClick}
                className="text-sky-700 hover:text-sky-900 font-bold underline decoration-sky-300 underline-offset-2 cursor-pointer text-xs"
              >
                Inquire Range &rarr;
              </button>
            </div>
          </motion.div>

          {/* 7. BENTO CARD: Full Width Bottom CTA (Col Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 shrink-0">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl font-extrabold text-slate-900 tracking-tight">
                  Ready to launch or expand your medicine brand?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Contact our manufacturing team today for product lists, MOQ details, and competitive pricing quotes.
                </p>
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
