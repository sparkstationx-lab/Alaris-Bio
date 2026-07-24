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
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import SEOManager from "./components/SEOManager";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [viewMode, setViewMode] = useState<"home" | "products-catalog" | "contact-page">("home");
  const [prefilledProduct, setPrefilledProduct] = useState<string>("");

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
    if (sectionId === "contact") {
      setViewMode("contact-page");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "products-catalog") {
      setViewMode("products-catalog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (viewMode !== "home") {
        setViewMode("home");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const offset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const handleRequestProposal = (productName?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    }
    setViewMode("contact-page");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900 antialiased">
      {/* On-Page SEO Dynamic Manager */}
      <SEOManager viewMode={viewMode} />

      {/* Dynamic Header Navbar */}

      <Navbar 
        activeSection={
          viewMode === "products-catalog"
            ? "products"
            : viewMode === "contact-page"
            ? "contact"
            : activeSection
        } 
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
        ) : viewMode === "contact-page" ? (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <ContactPage
              onBackToHome={() => {
                setViewMode("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              prefilledProduct={prefilledProduct}
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
            <Hero 
              onRequestProposal={() => handleNavigateSection("contact")}
              onNavigateSection={handleNavigateSection}
            />

            {/* Section 2: Services Selector tab list */}
            <Services onRequestProposal={() => handleNavigateSection("contact")} />

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
