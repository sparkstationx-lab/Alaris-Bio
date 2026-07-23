/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Activity, Mail, Phone, MapPin, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          
          {/* Brand block */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 text-slate-950 shadow-md shadow-sky-500/20">
                <Shield className="w-5 h-5" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-sky-200 border-2 border-slate-950 flex items-center justify-center">
                  <Activity className="w-1.5 h-1.5 text-slate-950 animate-pulse" />
                </div>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Alaris <span className="text-sky-400 font-medium">Bio</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Premium preclinical contract research organization (CRO) delivering rapid-turnaround in vivo oncology, ADME/pharmacokinetics, and safety toxicology for biotech sponsors.
            </p>
            <div className="text-[10px] font-mono tracking-wide text-slate-500 mt-2">
              © {currentYear} Alaris Biosciences, Inc. All rights reserved.
            </div>
          </div>

          {/* Navigation link sets */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              Preclinical Programs
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-sky-400 transition-colors">
                  Oncology & Immuno-Oncology
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-sky-400 transition-colors">
                  Rodent Pharmacokinetics (PK)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-sky-400 transition-colors">
                  Safety & Tolerability (MTD)
                </a>
              </li>
              <li>
                <a href="#models" onClick={(e) => handleLinkClick(e, "#models")} className="hover:text-sky-400 transition-colors">
                  Validated Cell-Line Models
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-sky-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#models" onClick={(e) => handleLinkClick(e, "#models")} className="hover:text-sky-400 transition-colors">
                  Validated Models
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-sky-400 transition-colors">
                  Facility Standards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-sky-400 transition-colors">
                  RFP Submission
                </a>
              </li>
            </ul>
          </div>

          {/* Facility Location Details */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-sans">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SSF Oyster Point Biotech Hub</span>
              </div>
              <div className="pl-6 text-slate-500">
                South San Francisco, CA 94080
              </div>
              <div className="flex items-center space-x-2 text-slate-300 pt-1">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>San Francisco Bay Area, USA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower disclosures panel */}
        <div className="pt-8 text-left space-y-4">
          <p className="text-[10px] text-slate-500 leading-relaxed font-sans max-w-4xl">
            <strong>Regulatory Disclaimer:</strong> Alaris Bio represents a preclinical contract research organization (CRO). All experimental procedures, cellular reconstitutions, and rodent dosing programs are directed exclusively for scientific drug-discovery research purposes and investigational profiling. Services are performed under strict IACUC animal care welfare boards. Alaris Bio does not supply services for human clinical diagnostic operations, medical treatments, or patient therapy decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-slate-500 font-mono gap-2 pt-2 border-t border-slate-900/60">
            <span>Security: Protected 256-bit encryption for all protocol submissions</span>
            <span>AAALAC and IACUC Ethics Principles Compliance Safeguard</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

