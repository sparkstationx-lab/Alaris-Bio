/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PreclinicalModels from "./components/PreclinicalModels";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [viewMode, setViewMode] = useState<"home" | "products-catalog">("home");

  // Scroll spy to highlight active sections in the sticky navigation header
  useEffect(() => {
    if (viewMode !== "home") return;

    const handleScroll = () => {
      const sections = ["home", "services", "products", "models", "about", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for active triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === "models" ? "products" : section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode]);

  const handleNavigateSection = (sectionId: string) => {
    if (viewMode !== "home") {
      setViewMode("home");
    }
  };

  const [prefilledProduct, setPrefilledProduct] = useState<string>("");

  const handleRequestProposal = (productName?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    }
    setViewMode("home");
    setTimeout(() => {
      const contactEl = document.querySelector("#contact");
      if (contactEl) {
        const offset = 90;
        const elementPosition = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };


  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900 antialiased">
      {/* Dynamic Header Navbar */}
      <Navbar 
        activeSection={viewMode === "products-catalog" ? "products" : activeSection} 
        onNavigateSection={handleNavigateSection}
      />

      {/* Main View Container */}
      <AnimatePresence mode="wait">
        {viewMode === "products-catalog" ? (
          <motion.div
            key="products-catalog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <ProductsPage 
              onBackToHome={() => {
                setViewMode("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onRequestProposal={handleRequestProposal}
            />
          </motion.div>
        ) : (
          <motion.main 
            key="home-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Section 1: Hero Banner */}
            <Hero />

            {/* Section 2: Services Selector tab list */}
            <Services />

            {/* Section 3: Featured 3 Products list with View All button */}
            <PreclinicalModels 
              onViewAllProducts={() => {
                setViewMode("products-catalog");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} 
            />

            {/* Section 4: Facilities, Ethical IACUC compliance, and FAQs */}
            <About />

            {/* Section 5: Request for Proposal inquiry form */}
            <ContactForm prefilledProduct={prefilledProduct} />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Corporate Footer and disclaimers */}
      <Footer onNavigateSection={handleNavigateSection} />
    </div>
  );
}
