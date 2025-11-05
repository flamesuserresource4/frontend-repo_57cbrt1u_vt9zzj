import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Scene as full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 left-1/2 h-[60vh] w-[70vw] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 50% 30%, rgba(59,130,246,0.25) 0%, rgba(124,58,237,0.2) 35%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      {/* Headline content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-extrabold tracking-tight md:text-7xl"
          style={{ textShadow: '0 0 18px rgba(59,130,246,0.25), 0 0 28px rgba(124,58,237,0.25)' }}
        >
          <span
            className="relative inline-block rounded-2xl px-6 py-3 text-white shadow-[0_0_40px_rgba(59,130,246,0.35),0_0_60px_rgba(124,58,237,0.35)] ring-1 ring-white/10"
            style={{
              background:
                'linear-gradient(135deg, rgba(13,17,23,0.95) 0%, rgba(10,10,10,0.95) 30%, rgba(37,99,235,0.9) 65%, rgba(124,58,237,0.9) 100%)',
            }}
          >
            Dzaky Ardiansyah
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-2xl text-balance text-[15px] text-white/85 md:text-lg"
          style={{ textShadow: '0 0 8px rgba(59,130,246,0.25), 0 0 14px rgba(124,58,237,0.25)' }}
        >
          Building the bridge between hardware and software.
        </motion.p>
      </div>
    </section>
  );
}
