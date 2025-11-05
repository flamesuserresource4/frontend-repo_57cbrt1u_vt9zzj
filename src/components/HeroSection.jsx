import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for vibe (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[60vh] w-[60vw] -translate-x-1/2 rounded-full blur-3xl"
             style={{
               background: 'radial-gradient(circle, rgba(108,0,255,0.25) 0%, rgba(0,194,255,0.12) 45%, rgba(0,0,0,0) 70%)'
             }} />
      </div>

      {/* Headline content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-extrabold tracking-tight text-white md:text-7xl"
          style={{ textShadow: '0 0 16px rgba(108,0,255,0.45), 0 0 30px rgba(0,194,255,0.35)' }}
        >
          Dzaky Ardiansyah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance text-[15px] text-[#CFCFFF]/90 md:text-lg"
          style={{ textShadow: '0 0 8px rgba(108,0,255,0.25), 0 0 16px rgba(0,194,255,0.2)' }}
        >
          Building the bridge between hardware and software
        </motion.p>
      </div>
    </section>
  );
}
