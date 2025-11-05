import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070c]">
      {/* Smooth particle background across the site */}
      <ParticleBackground />

      {/* Hero with interactive Spline scene */}
      <HeroSection />

      {/* About Me section with glowing accents */}
      <AboutSection />

      {/* Footer spacing */}
      <div className="h-16" />
    </div>
  );
}
