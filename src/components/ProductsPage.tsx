/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PRODUCTS } from "../data";
import { ProductItem } from "../types";
import { 
  Check, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  X, 
  Pill,
  LayoutGrid,
  List,
  CheckCircle2,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductsPageProps {
  onBackToHome: () => void;
  onRequestProposal: (productName?: string) => void;
}

export default function ProductsPage({ onBackToHome, onRequestProposal }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedForm, setSelectedForm] = useState<string>("All");
  const [viewLayout, setViewLayout] = useState<"grid" | "table">("grid");
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const forms = ["All", "Tablets", "Capsules"];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesForm = 
      selectedForm === "All" || 
      product.form.toLowerCase() === selectedForm.toLowerCase();
      
    const matchesSearch = 
      product.sNo.toString().includes(searchQuery.trim()) ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.packing.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesForm && matchesSearch;
  });

  const tabletCount = PRODUCTS.filter(p => p.form === "Tablets").length;
  const capsuleCount = PRODUCTS.filter(p => p.form === "Capsules").length;

  return (
    <div className="min-h-screen bg-[#f0f7ff] bg-grid-pattern text-slate-900 font-sans pt-24 pb-20 relative">
      
      {/* Top Header / Sticky Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sky-100">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-sky-600 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-xs hover:border-sky-300 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-sky-600" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline-block text-xs font-mono text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60">
              Showing <strong className="text-sky-600">{filteredProducts.length}</strong> of {PRODUCTS.length} Products
            </span>
            <button
              onClick={() => onRequestProposal()}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-sky-600 rounded-full shadow-xs transition-all cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Section Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 flex flex-col space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>WHO-GMP Certified Catalog</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Product List
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">1200+ Approved Formulations</span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">Alu-Alu & Blister Packing</span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase shadow-2xs">WHO-GMP Batch Testing</span>
          </div>
        </motion.div>

        {/* Visual Product Catalog Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-900/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=80" 
            alt="Pharmaceutical Formulations Production Line"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-xl text-left">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-400/30 inline-block mb-3 backdrop-blur-md">
              WHO-GMP Grade Production
            </span>
            <h2 className="font-display text-2xl font-extrabold text-white tracking-tight leading-snug">
              Commercial Medicine Batches with Guaranteed 31-Day Turnaround
            </h2>
          </div>

          <div className="relative z-10 flex items-center space-x-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
              <span className="text-sky-400 font-extrabold text-xl block font-display">{tabletCount}</span>
              <span className="text-[10px] font-mono text-slate-200 uppercase font-semibold">Tablets</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
              <span className="text-sky-400 font-extrabold text-xl block font-display">{capsuleCount}</span>
              <span className="text-[10px] font-mono text-slate-200 uppercase font-semibold">Capsules</span>
            </div>
          </div>
        </motion.div>

        {/* Filter & Search Toolbar */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
          
          {/* Dosage Form Tabs */}
          <div className="flex items-center space-x-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {forms.map((form) => {
              const count = form === "All" ? PRODUCTS.length : form === "Tablets" ? tabletCount : capsuleCount;
              return (
                <button
                  key={form}
                  onClick={() => setSelectedForm(form)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    selectedForm === form
                      ? "bg-slate-900 text-white font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span>{form}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    selectedForm === form ? "bg-slate-800 text-sky-300" : "bg-slate-100 text-slate-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box & Layout Switcher */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by product name or packing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Layout Toggle */}
            <div className="hidden md:flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/80 shrink-0">
              <button
                onClick={() => setViewLayout("grid")}
                title="Grid View"
                className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewLayout === "grid" ? "bg-white text-sky-600 shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewLayout("table")}
                title="Table View"
                className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewLayout === "table" ? "bg-white text-sky-600 shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Products Display Area */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
            <Pill className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products matched "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Try checking for typos or clear search filters to view all products.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedForm("All"); }}
              className="px-4 py-2 bg-sky-50 text-sky-700 text-xs font-bold rounded-full border border-sky-100 hover:bg-sky-100 transition-all cursor-pointer"
            >
              Clear Search & Filters
            </button>
          </div>
        ) : viewLayout === "grid" ? (
          /* Responsive Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  key={product.sNo}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setActiveProduct(product)}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 text-left flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-300 transition-all duration-200 cursor-pointer group relative overflow-hidden"
                >
                  <div className="space-y-2.5">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-sky-50 text-sky-700 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-100">
                        #{product.sNo}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-semibold">
                        {product.form}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display font-bold text-base text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors leading-snug pt-1">
                      {product.name}
                    </h3>
                  </div>

                  {/* Packing & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
                    <div>
                      <span className="text-slate-400 text-[10px] font-mono uppercase block mb-0.5">Packing</span>
                      <span className="font-semibold text-slate-800 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 font-mono text-[11px]">
                        {product.packing}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRequestProposal(product.name);
                      }}
                      className="px-3 py-1.5 bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white rounded-lg text-xs font-bold transition-colors border border-sky-100 hover:border-sky-600 cursor-pointer flex items-center space-x-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Table View */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                    <th className="py-3.5 px-4 font-bold w-16">S.No</th>
                    <th className="py-3.5 px-6 font-bold">Product Name</th>
                    <th className="py-3.5 px-6 font-bold">Packing</th>
                    <th className="py-3.5 px-4 font-bold w-28">Form</th>
                    <th className="py-3.5 px-4 font-bold text-right w-32">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {filteredProducts.map((product) => (
                    <tr 
                      key={product.sNo} 
                      onClick={() => setActiveProduct(product)}
                      className="hover:bg-sky-50/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-sky-700">
                        #{product.sNo}
                      </td>
                      <td className="py-3 px-6 font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {product.name}
                      </td>
                      <td className="py-3 px-6 text-slate-700 font-mono text-xs">
                        <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60 font-semibold text-slate-800">
                          {product.packing}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="text-xs px-2 py-0.5 bg-slate-100 rounded-md font-medium">
                          {product.form}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRequestProposal(product.name);
                          }}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-all cursor-pointer inline-flex items-center space-x-1"
                        >
                          <span>Inquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Custom Sourcing Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 text-left flex flex-col md:flex-row items-center md:justify-between gap-6 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="flex items-start space-x-4 relative z-10">
            <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-1">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">Contract Manufacturing & Export</span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">Need Custom Formulations or Bulk Exports?</h4>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-mono font-bold uppercase">Custom Dosages</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-mono font-bold uppercase">Bulk Contract Production</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-sky-300 text-xs font-mono font-bold uppercase">Complete Dossier Support</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onRequestProposal()}
            className="w-full md:w-auto text-center px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap shrink-0 shadow-lg shadow-sky-500/20 hover:scale-105 flex items-center justify-center space-x-2 relative z-10 cursor-pointer"
          >
            <span>Request Bulk Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 bg-sky-50 text-sky-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-sky-100">
                      Product #{activeProduct.sNo}
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {activeProduct.form}
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {activeProduct.name}
                  </h2>
                </div>

                {/* Details Card */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                    <span className="text-slate-500 font-medium">Packing Specification</span>
                    <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200">
                      {activeProduct.packing}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                    <span className="text-slate-500 font-medium">Dosage Form</span>
                    <span className="font-bold text-slate-900">{activeProduct.form}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Quality Assurance</span>
                    <span className="font-bold text-emerald-600 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>WHO-GMP Certified</span>
                    </span>
                  </div>
                </div>

                {/* Info Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-mono font-semibold">Assay & Dissolution Tested</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-mono font-semibold">COA Provided per Batch</span>
                </div>

                {/* Modal CTA */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const name = activeProduct.name;
                      setActiveProduct(null);
                      onRequestProposal(name);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-full shadow-md shadow-sky-600/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Inquire for {activeProduct.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
