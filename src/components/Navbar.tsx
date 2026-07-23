/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Activity, ArrowRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Validated Models", href: "#models" },
    { name: "Quality & Standards", href: "#about" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90; // Floating navbar offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      const offset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-sky-600 to-blue-600 text-white shadow-md shadow-sky-600/20 transition-transform duration-300 group-hover:scale-105">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                <Activity className="w-1 h-1 text-white animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                Alaris <span className="text-sky-600 font-semibold">Bio</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase leading-none">
                Preclinical CRO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-slate-100/70 p-1 rounded-full border border-slate-200/60 flex items-center space-x-1 mr-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-white text-sky-600 shadow-xs border border-slate-200/50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={handleContactClick}
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
            className="md:hidden mt-3 pt-2 pb-4 border-t border-slate-100 space-y-1.5 animate-fade-in-up"
            id="mobile-menu"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-sky-50 text-sky-700 font-bold border-l-2 border-sky-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleContactClick}
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

