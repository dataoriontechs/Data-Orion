/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Diferenciais from './components/Diferenciais';
import AreasAtuacao from './components/AreasAtuacao';
import Depoimentos from './components/Depoimentos';
import WorkProcess from './components/WorkProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

export default function App() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="data-orion-tech-root" className="min-h-screen bg-dark-bg text-gray-100 flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Dynamic Sticky Header */}
      <Navbar />

      {/* Main Structural Page Flow */}
      <main className="flex-grow">
        {/* Banner with customized CTAs */}
        <Hero onNavigate={handleScrollToSection} />

        {/* History of the company and CEO detail cards */}
        <About />

        {/* Dynamic services overview grids */}
        <Services />

        {/* Interactive portfolio catalog with live filters and modal previews */}
        <Projects />

        {/* Core company differentials list & dynamically incrementing statistics */}
        <Diferenciais />

        {/* bento grid of action market segments */}
        <AreasAtuacao />

        {/* Interactive feedback carousel */}
        <Depoimentos />

        {/* Vertical/Horizontal step progress flow */}
        <WorkProcess />

        {/* Expandable questions accordions */}
        <FAQ />

        {/* Advanced contact form + local database storage view */}
        <Contact />
      </main>

      {/* Corporate compliance footer */}
      <Footer />

      {/* Floating CTA anchors */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
