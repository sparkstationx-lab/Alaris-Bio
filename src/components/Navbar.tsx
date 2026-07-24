/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Shield, Activity, ArrowRight, ChevronDown, Factory } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigateSection?: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigateSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (onNavigateSection) {
      onNavigateSection(href.slice(1));
    }

    // Scroll smoothly after slight delay if view switches
    setTimeout(() => {
      const targetElement = document.querySelector(href) || (href === "#products" ? document.querySelector("#models") : null);
      if (targetElement) {
        const offset = 90; // Floating navbar offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-300">
      <nav
        id="navbar"
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 py-2 px-4 sm:px-6"
            : "bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-md shadow-slate-900/5 py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center group focus:outline-none"
          >
            <img
              src="/LOGO.png"
              alt="Alaris Biosciences"
              referrerPolicy="no-referrer"
              className="h-8 sm:h-9 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-slate-100/70 p-1 rounded-full border border-slate-200/60 flex items-center space-x-1 mr-2">
              
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === "home"
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === "about"
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                About
              </a>

              {/* Services with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className={`inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    activeSection === "services"
                      ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-sky-600" : ""}`} />
                </a>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl p-2 z-50 animate-fade-in-up">
                    <a
                      href="#services"
                      onClick={(e) => handleLinkClick(e, "#services")}
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-sky-50/80 transition-colors group text-left"
                    >
                      <div className="p-2 rounded-lg bg-sky-100/80 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors block">
                          Third-Party Manufacturing / Contract Manufacturing
                        </span>
                        <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                          WHO-GMP certified pharmaceutical production & formulation services
                        </span>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Products */}
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, "#products")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === "products" || activeSection === "models"
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                Products
              </a>

              {/* Gallery */}
              <a
                href="#gallery"
                onClick={(e) => handleLinkClick(e, "#gallery")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === "gallery"
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                Gallery
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === "contact"
                    ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                Contact
              </a>

            </div>

            {/* Request Proposal CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-sky-600 rounded-full shadow-sm shadow-slate-950/20 transition-all duration-300 hover:shadow-md hover:shadow-sky-600/20 active:scale-95"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-3 pt-2 pb-4 border-t border-slate-100 space-y-1 animate-fade-in-up text-left"
            id="mobile-menu"
          >
            {/* Home */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className={`block px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeSection === "home"
                  ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Home
            </a>

            {/* About */}
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
              className={`block px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeSection === "about"
                  ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              About
            </a>

            {/* Services Dropdown in Mobile */}
            <div>
              <div className="flex items-center justify-between px-4 py-2">
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className={`text-xs font-semibold transition-all ${
                    activeSection === "services"
                      ? "text-sky-700 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Services
                </a>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Sub-menu item */}
              <div className="pl-6 pr-2 py-1 space-y-1 border-l border-slate-200 ml-4 mb-1">
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl text-[11px] font-medium text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
                >
                  <Factory className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Third-Party Manufacturing / Contract Manufacturing</span>
                </a>
              </div>
            </div>

            {/* Products */}
            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, "#products")}
              className={`block px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeSection === "products" || activeSection === "models"
                  ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Products
            </a>

            {/* Gallery */}
            <a
              href="#gallery"
              onClick={(e) => handleLinkClick(e, "#gallery")}
              className={`block px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeSection === "gallery"
                  ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Gallery
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={`block px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeSection === "contact"
                  ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Contact
            </a>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex w-full items-center justify-center px-4 py-2.5 rounded-full text-center text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm"
              >
                Request Proposal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
