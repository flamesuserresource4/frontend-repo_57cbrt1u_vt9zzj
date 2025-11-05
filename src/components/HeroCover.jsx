import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette overlay to enhance readability - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          Fluid • Creative • Modern
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-white bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl">
          Smooth Particle Aesthetics
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          A dynamic background of vibrant pinks and purples with glowing gradient accents. Immerse your UI in motion.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="relative inline-flex items-center justify-center rounded-xl p-[2px]"
          >
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 opacity-60 blur-md" aria-hidden />
            <span className="relative rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              Explore Features
            </span>
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
