/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PRODUCTS } from "../data";
import { ProductItem } from "../types";
import { Sparkles, ArrowRight, PackageSearch, Pill, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface PreclinicalModelsProps {
  onViewAllProducts?: () => void;
}

export default function PreclinicalModels({ onViewAllProducts }: PreclinicalModelsProps) {
  // Select 6 featured products from diverse therapeutic lines
  const featuredProducts: ProductItem[] = [
    PRODUCTS.find(p => p.sNo === 10) || PRODUCTS[0], // Artemether + Lumefantrine
    PRODUCTS.find(p => p.sNo === 19) || PRODUCTS[1], // Capecitabine
    PRODUCTS.find(p => p.sNo === 36) || PRODUCTS[2], // Everolimus
    PRODUCTS.find(p => p.sNo === 80) || PRODUCTS[3], // Rifaximin
    PRODUCTS.find(p => p.sNo === 23) || PRODUCTS[4], // Co-Enzyme Q10
    PRODUCTS.find(p => p.sNo === 69) || PRODUCTS[5], // Pancreatin Minimicrospheres
  ];

  return (
    <section id="products" className="py-24 bg-[#eef6ff] bg-grid-pattern border-b border-sky-100/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 flex flex-col space-y-3"
        >
          <div className="inline-flex items-center justify-center space-x-2 self-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Product Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            DCGI Approved Pharmaceutical Products &amp; Formulations
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">WHO-GMP Certified</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">Assay & Dissolution Tested</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-mono font-bold uppercase shadow-2xs">Custom Packaging Options</span>
          </div>
        </motion.div>

        {/* Featured Visual Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-900/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=80" 
            alt="DCGI approved pharmaceutical formulations and blister strip packaging manufactured at Alaris Biosciences"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-xl text-left">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-400/30 inline-block mb-3 backdrop-blur-md">
              1200+ DCGI Approved Formulations
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Commercial Scale Medicine Batches with Complete COA Assurance
            </h3>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
              <span className="text-sky-400 font-extrabold text-lg block font-display">100%</span>
              <span className="text-[9px] font-mono text-slate-200 uppercase font-semibold">Quality COA</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
              <span className="text-sky-400 font-extrabold text-lg block font-display">Alu-Alu / PVC</span>
              <span className="text-[9px] font-mono text-slate-200 uppercase font-semibold">Blister Strip</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={product.sNo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 text-left flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-300 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-100">
                    S.No #{product.sNo}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-semibold">
                    {product.form}
                  </span>
                </div>

                <div className="flex items-start space-x-3 pt-1">
                  <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0 mt-0.5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Specification / Packing Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 text-[10px] font-mono uppercase">Packing:</span>
                  <span className="font-semibold text-slate-800 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 font-mono">
                    {product.packing}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-600 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>GMP Quality</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button: View All 103 Products */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={onViewAllProducts}
            className="group inline-flex items-center space-x-2.5 px-8 py-4 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-slate-950/10 hover:shadow-sky-600/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <PackageSearch className="w-4 h-4 text-sky-300 group-hover:text-white transition-colors" />
            <span>View All 103 Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
