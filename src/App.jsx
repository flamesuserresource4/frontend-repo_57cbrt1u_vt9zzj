import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070c] text-white">
      {/* Global particle background (non-blocking) */}
      <ParticleBackground />

      {/* Existing sections preserved */}
      <Hero />
      <AboutSection />
      <Projects />
      <Contact />

      <footer className="py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} All rights reserved.</footer>
    </div>
  );
}
