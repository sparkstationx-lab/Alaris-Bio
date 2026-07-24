/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Upload, FileText, CheckCircle, Trash2, Send, Clock, Sparkles, ArrowRight } from "lucide-react";
import { InquiryFormState } from "../types";

interface ContactFormProps {
  prefilledProduct?: string;
}

export default function ContactForm({ prefilledProduct }: ContactFormProps) {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: prefilledProduct ? `Inquiry regarding: ${prefilledProduct}` : "",
    interestedService: "Oncology",
    urgency: "Medium (1-3 months)",
  });

  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiry regarding: ${prefilledProduct}`
      }));
    }
  }, [prefilledProduct]);


  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryCode, setInquiryCode] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle drag and drop files
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleTriggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert("Please fill in all required fields (*).");
      return;
    }

    setIsSubmitting(true);

    // Simulate server side transmission
    setTimeout(() => {
      const code = "ALB-" + Math.floor(100000 + Math.random() * 900000);
      setInquiryCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      interestedService: "Oncology",
      urgency: "Medium (1-3 months)",
    });
    setUploadedFile(null);
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#eef6ff] bg-grid-pattern border-b border-sky-100/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
        >
          
          {/* Contact Details Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-mono uppercase font-bold tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Request For Proposal</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Submit Third-Party Manufacturing Requirement
              </h2>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">3rd Party Enquiries</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">MOQ & Price Quotes</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">Fast Proposal Turnaround</span>
              </div>
            </div>

            {/* Quick contact pointers */}
            <div className="space-y-5">
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 transition-all">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Official Sales Email</span>
                  <a href="mailto:Sales.alarisbio@gmail.com" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                    Sales.alarisbio@gmail.com
                  </a>
                  <span className="text-[10px] text-slate-500 mt-0.5">Quick commercial response turnaround</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 transition-all">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Direct Contact (Mr. Amit Bhalla)</span>
                  <a href="tel:+919753204758" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                    +91-9753204758
                  </a>
                  <span className="text-[10px] text-slate-500 mt-0.5">Mon – Sat, 9:00 AM – 6:30 PM IST</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-200 transition-all">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Registered Office</span>
                  <span className="text-sm font-bold text-slate-900">
                    5, Basantkunj, Ramaua Triangle
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    NH44, Jhansi Agra Highway, Gwalior 474006, M.P.
                  </span>
                </div>
              </div>

            </div>

            {/* Visual Facility Image Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs relative group h-44">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
                alt="cGMP Pharmaceutical Manufacturing Cleanroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[11px] font-mono font-bold text-sky-200">
                  WHO-GMP Facility • Fast Quotation
                </span>
                <span className="px-2 py-0.5 rounded bg-sky-500 text-slate-950 text-[10px] font-mono font-bold uppercase">
                  31 Days Delivery
                </span>
              </div>
            </div>

            {/* Quality badge footer */}
            <div className="bg-slate-900 text-slate-300 rounded-3xl p-5 flex items-center space-x-4 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-300 font-sans">
                <span className="text-white font-bold block mb-0.5">31-Day Guaranteed Turnaround</span>
                <span className="text-[11px] font-mono text-sky-300">Fast batch dispatches from artwork finalization</span>
              </div>
            </div>
          </div>

          {/* Form Interactive Panel (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm h-full flex flex-col justify-center">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Jenkins"
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@biopharma.com"
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Company / Institution <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Bio Inc."
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (650) 555-0143"
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Primary Interested Service
                      </label>
                      <select
                        value={formData.interestedService}
                        onChange={(e) => setFormData({ ...formData, interestedService: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      >
                        <option value="Oncology">Oncology & Immuno-Oncology</option>
                        <option value="Pharmacokinetics">Pharmacokinetics / ADME</option>
                        <option value="Toxicology">Tolerability / Toxicology</option>
                        <option value="Ex Vivo">Ex Vivo Assays / Biomarkers</option>
                      </select>
                    </div>

                    {/* Program Urgency */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 font-sans">
                        Program Startup Timeline
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                        className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      >
                        <option value="Urgent (Within 1 month)">Urgent (Within 1 month)</option>
                        <option value="Medium (1-3 months)">Medium (1-3 months)</option>
                        <option value="Exploratory (>3 months)">Exploratory (&gt;3 months)</option>
                      </select>
                    </div>
                  </div>

                  {/* Program Description */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 font-sans">
                      Brief Study Details / Dosing Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline study endpoints, cell lines requested, dose pathways, or special laboratory analysis requests..."
                      className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-y"
                    />
                  </div>

                  {/* File upload Section */}
                  <div className="flex flex-col space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 font-sans">
                      Upload Protocol Draft or Target Datasheet
                    </span>
                    
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={handleTriggerFileInput}
                      className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-1 select-none ${
                        isDragActive
                          ? "border-sky-500 bg-sky-50/50"
                          : uploadedFile
                          ? "border-slate-300 bg-slate-50"
                          : "border-slate-200 hover:border-sky-400 hover:bg-slate-50/80"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                      />
                      
                      {!uploadedFile ? (
                        <>
                          <Upload className="w-5 h-5 text-slate-400" />
                          <span className="text-xs text-slate-600 font-sans">
                            <span className="text-sky-600 font-bold">Click to upload</span> or drag and drop file
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            PDF, Word, Excel, or slides up to 10MB
                          </span>
                        </>
                      ) : (
                        <div className="flex items-center space-x-3 w-full justify-between px-2 text-left">
                          <div className="flex items-center space-x-2.5 overflow-hidden">
                            <FileText className="w-5 h-5 text-sky-600 shrink-0" />
                            <div className="flex flex-col overflow-hidden">
                              <span className="text-xs font-bold text-slate-900 truncate">
                                {uploadedFile.name}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFile();
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submission CTA button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 disabled:opacity-50 shadow-md shadow-sky-500/20 hover:scale-[1.01] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin mr-2" />
                          <span>Submitting Secure RFP...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-1" />
                          <span>Submit Preclinical RFP Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* Success screen */
                <div className="text-center py-8 px-4 flex flex-col items-center justify-center space-y-5 animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shadow-xs border border-sky-100">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-sky-600 uppercase font-bold block">
                      Study Proposal Initiated
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                      Thank You, {formData.name.split(" ")[0]}!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
                      Your preclinical inquiry has been registered securely. Our study scheduling coordinators will review your parameters immediately.
                    </p>
                  </div>

                  {/* Inquiry details box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left w-full max-w-md space-y-2.5">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200/60">
                      <span className="text-slate-400 font-mono">Reference Code</span>
                      <span className="font-mono font-bold text-sky-600">{inquiryCode}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200/60">
                      <span className="text-slate-400 font-mono">Institution</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[200px]">
                        {formData.company}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-mono">Primary Service</span>
                      <span className="font-semibold text-slate-900">{formData.interestedService}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                    <button
                      onClick={resetForm}
                      className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
                    >
                      New Inquiry
                    </button>
                    <a
                      href="#home"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full py-3 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 text-center font-bold text-xs uppercase tracking-wider rounded-full transition-colors shadow-xs"
                    >
                      Back To Top
                    </a>
                  </div>

                </div>
              )}

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

