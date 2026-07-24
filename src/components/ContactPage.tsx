/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  User, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Factory, 
  PhoneCall,
  ExternalLink
} from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
  prefilledProduct?: string;
}

export default function ContactPage({ onBackToHome, prefilledProduct }: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    inquiryType: "Third-Party Manufacturing",
    productOrSubject: prefilledProduct || "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      inquiryType: "Third-Party Manufacturing",
      productOrSubject: "",
      message: ""
    });
  };

  const manufacturingUnits = [
    {
      unit: "Plant 1 — Primary Facility",
      city: "Gwalior",
      state: "Madhya Pradesh",
      badge: "Solid Dosage & Liquids",
      specs: ["Tablets & Capsules", "Liquid Orals", "QC & Micro Lab"]
    },
    {
      unit: "Plant 2 — Excise-Free Hub",
      city: "Nalagarh",
      state: "Dist. Solan, Himachal Pradesh",
      badge: "cGMP Nutra Plant",
      specs: ["Veg Gel Capsules", "Effervescent Tablets", "Sachet Packaging"]
    },
    {
      unit: "Plant 3 — Derma & Packaging",
      city: "Roorkee",
      state: "Uttarakhand",
      badge: "Advanced Pharma Zone",
      specs: ["Ointments & Creams", "Alu-Alu & PVC Strips", "Sterile Processing"]
    }
  ];

  const inquiryCategories = [
    "Third-Party Manufacturing",
    "PCD Pharma Franchise",
    "Bulk Drug Formulations",
    "Custom Packaging & Artwork",
    "FSSAI & RDA Supplements",
    "Export & Regulatory Dossier"
  ];

  return (
    <div className="pt-24 pb-20 bg-[#f0f7ff] bg-grid-pattern min-h-screen text-slate-900">
      
      {/* Top Header Bar / Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-sky-600 bg-white hover:bg-sky-50 px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-sky-600 font-bold uppercase">Contact & Enquiries</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-[11px] font-mono uppercase font-bold tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Direct Commercial Communication Channel</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact & Third-Party Enquiries
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">
              Response &lt; 2 Business Hours
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">
              3 Manufacturing Facilities
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">
              31-Day Dispatch Guarantee
            </span>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: Contact Directory & Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bento Card 1: Key Contact Representative & Corporate Office */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-400/30">
                  Head of Business & Enquiries
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Available Now</span>
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight">
                    MR. AMIT BHALLA
                  </h3>
                  <span className="text-xs font-mono text-sky-300 block">Commercial Lead & Executive Contact</span>
                </div>
              </div>

              {/* Contact Specs */}
              <div className="space-y-3.5 border-t border-slate-800 pt-5 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-sans leading-relaxed">
                    5, Basantkunj, Ramaua Triangle, NH44, Jhansi Agra Highway, Gwalior 474006, M.P., India
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href="tel:+919753204758" className="text-slate-200 hover:text-sky-300 font-mono font-bold transition-colors">
                    +91-9753204758
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href="mailto:Sales.alarisbio@gmail.com" className="text-slate-200 hover:text-sky-300 font-mono font-bold transition-colors">
                    Sales.alarisbio@gmail.com
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-slate-800">
                <a
                  href="tel:+919753204758"
                  className="px-3.5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919753204758?text=Hello%20Alaris%20Biosciences%2C%20I%20have%20a%20third-party%20manufacturing%20inquiry"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Bento Card 2: 3 Manufacturing Units */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-left"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-5 h-5 text-sky-600" />
                <h3 className="font-display text-base font-bold text-slate-900">
                  Manufacturing Plant Locations
                </h3>
              </div>

              <div className="space-y-3">
                {manufacturingUnits.map((plant, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs font-display text-slate-900">{plant.city}, {plant.state}</span>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">{plant.badge}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {plant.specs.map((sp, i) => (
                        <span key={i} className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                          • {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bento Card 3: Business Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs text-left"
            >
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-sky-600" />
                <h3 className="font-display text-base font-bold text-slate-900">
                  Business Hours & Support
                </h3>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Monday — Saturday</span>
                  <span className="font-bold text-slate-900">09:00 AM – 06:30 PM IST</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-bold text-amber-700">On-Call Emergency Dispatch</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-600">Average Turnaround</span>
                  <span className="font-bold text-sky-700">&lt; 2 Business Hours</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Inquiry Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md text-left"
          >
            <div className="mb-6 border-b border-slate-100 pb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-mono font-bold uppercase">
                Official RFP Form
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                Submit Your Product Requirement
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-sky-50/50 rounded-2xl border border-sky-200 my-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  Inquiry Submitted Successfully
                </h3>
                <p className="text-xs text-slate-600 font-mono mb-6">
                  Our commercial coordinator will review your requirements and respond within 2 business hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase rounded-full hover:bg-sky-600 transition-colors cursor-pointer"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                    Select Requirement Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryCategories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setFormData({ ...formData, inquiryType: cat })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                          formData.inquiryType === cat
                            ? "bg-slate-900 text-white font-bold shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Health Pharma"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Specific Product / Formulation Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Paracetamol + Aceclofenac Tablets / Custom Syrup"
                    value={formData.productOrSubject}
                    onChange={(e) => setFormData({ ...formData, productOrSubject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Requirement Details / Batch Size / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify target quantity, packaging preferences (Alu-Alu, PVC strip), or custom specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Processing Requirement...</span>
                    ) : (
                      <>
                        <span>Submit 3rd Party Requirement</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </div>
  );
}
