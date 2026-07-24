/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Activity, MapPin, Mail, Phone, User, ChevronRight } from "lucide-react";

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export default function Footer({ onNavigateSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.slice(1);
    
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    }

    setTimeout(() => {
      const targetElement = document.querySelector(href) || (href === "#products" ? document.querySelector("#models") : null);
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          
          {/* Brand & About Block */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center">
              <img
                src="/LOGO.png"
                alt="Alaris Biosciences"
                referrerPolicy="no-referrer"
                className="h-10 sm:h-11 w-auto max-w-[240px] object-contain filter brightness-110 drop-shadow-[0_2px_10px_rgba(2,132,199,0.2)]"
              />
            </div>

            <div>
              <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase mb-2">
                About Us
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-md">
                Established in 2007, we are a well-established pharmaceutical manufacturing group with a strong commitment to quality and innovation. Our journey began with our first manufacturing unit located in the industrial area of Gwalior.
              </p>
            </div>

            <div className="text-[10px] font-mono tracking-wide text-slate-500 pt-1">
              © {currentYear} Alaris Biosciences, Inc. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, "#about")} 
                  className="inline-flex items-center space-x-1.5 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, "#services")} 
                  className="inline-flex items-center space-x-1.5 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contract/Third Manufacturing</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, "#contact")} 
                  className="inline-flex items-center space-x-1.5 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Block */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="flex items-center space-x-2.5 text-slate-200 font-semibold">
                <User className="w-4 h-4 text-sky-400 shrink-0" />
                <span>MR. AMIT BHALLA</span>
              </div>
              <div className="flex items-start space-x-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  5, Basantkunj, Ramaua Triangle, NH44, jhansi Agra highway Gwalior 474006
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href="mailto:Sales.alarisbio@gmail.com" 
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Sales.alarisbio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href="tel:+919753204758" 
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  +91-9753204758
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower disclosures panel */}
        <div className="pt-8 text-left space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-slate-500 font-mono gap-2 pt-2 border-t border-slate-900/60">
            <span>Alaris Biosciences — Quality & Innovation in Medicine Manufacturing</span>
            <span>WHO-GMP & ISO Quality Principles Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
