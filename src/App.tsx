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

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy to highlight active sections in the sticky navigation header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "models", "about", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for active triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900 antialiased">
      {/* Dynamic Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Corporate Sections */}
      <main className="relative">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Services Selector tab list */}
        <Services />

        {/* Section 3: Tumor Models list */}
        <PreclinicalModels />

        {/* Section 4: Facilities, Ethical IACUC compliance, and FAQs */}
        <About />

        {/* Section 5: Request for Proposal inquiry form */}
        <ContactForm />
      </main>

      {/* Corporate Footer and disclaimers */}
      <Footer />
    </div>
  );
}
