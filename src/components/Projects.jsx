import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NeuroLink Board',
    desc:
      'Custom microcontroller interface bridging sensors with an AI-driven backend. ESP32 streams real-time data into a Python pipeline with a lightweight neural net for anomaly and intent detection.',
    tags: ['ESP32', 'Python', 'AI', 'Sensors', 'Realtime'],
    link: '#',
  },
  {
    title: 'EdgeVision',
    desc:
      'AI-powered edge camera on Raspberry Pi using TensorFlow Lite. Detects motion/objects and triggers Telegram alerts. Designed for low-power embedded deployments.',
    tags: ['Raspberry Pi', 'TFLite', 'Computer Vision', 'Telegram'],
    link: '#',
  },
  {
    title: 'CircuitCloud IDE',
    desc:
      'Web-based circuit simulation and firmware coding. Simulate Arduino circuits, edit C++ code, and run tests instantly with a fast WebAssembly engine.',
    tags: ['WebAssembly', 'TypeScript', 'Next.js', 'Arduino'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#070713] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 bg-gradient-to-b from-indigo-700/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/10 to-indigo-600/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(147,51,234,0.35)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative circuit lines */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border-2 border-purple-500/20 blur-[2px]" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-xl border-2 border-indigo-500/20 blur-[2px]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
