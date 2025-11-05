import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070c] text-white">
      {/* Hero with Spline cover background and contrasting name badge */}
      <HeroSection />

      {/* About with photo left and bio right */}
      <AboutSection />

      {/* Work samples */}
      <Projects />

      {/* Contact section */}
      <Contact />

      <footer className="py-10 text-center text-sm text-white/60">
        © 2025 ZakiUhui
      </footer>
    </div>
  );
}
