import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070c] text-white">
      {/* Global particle background (non-blocking) */}
      <ParticleBackground />

      {/* Hero with Spline object */}
      <HeroSection />

      {/* About with photo left and bio right */}
      <AboutSection />

      {/* Keep existing site sections */}
      <Projects />
      <Contact />

      <footer className="py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} All rights reserved.</footer>
    </div>
  );
}
