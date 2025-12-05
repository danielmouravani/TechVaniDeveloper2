import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-primary-500 selection:text-white">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent-600/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-blue-500/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 grid-bg opacity-30"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Features />
          <Process />
          <Portfolio />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}