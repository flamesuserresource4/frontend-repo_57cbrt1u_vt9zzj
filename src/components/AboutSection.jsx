import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { Sparkles } from 'lucide-react';

const underlineVariants = {
  initial: { backgroundPositionX: '0%' },
  animate: {
    backgroundPositionX: '200%',
    transition: { duration: 2.2, repeat: Infinity, ease: 'linear' },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <GlowCard className="shadow-[0_0_50px_rgba(108,0,255,0.25),0_0_80px_rgba(0,194,255,0.15)]">
        <div className="grid grid-cols-1 items-center gap-10 p-6 md:grid-cols-2 md:p-10">
          {/* Photo with gentle float + hover tilt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 md:order-none"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotateZ: -2, scale: 1.02 }}
              className="relative aspect-square w-full overflow-hidden rounded-2xl"
            >
              <img
                src="https://freeimage.host/i/KZYJysp"
                alt="Portrait"
                className="h-full w-full object-cover"
                style={{ filter: 'saturate(1.05) contrast(1.05)' }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  boxShadow:
                    'inset 0 0 50px rgba(0,0,0,0.5), 0 0 40px rgba(108,0,255,0.35), 0 0 80px rgba(0,194,255,0.25)'
                }}
              />
              {/* animated edge gradient sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-0.5 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(108,0,255,0.0) 0%, rgba(108,0,255,0.35) 25%, rgba(0,194,255,0.35) 75%, rgba(0,194,255,0.0) 100%)',
                  maskImage: 'linear-gradient(#000, #000)',
                }}
                animate={{ backgroundPositionX: ['0%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>

          {/* Text and animated bio */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
            className="flex flex-col"
          >
            <h2
              className="mb-3 text-3xl font-semibold text-[#CFCFFF] md:text-4xl"
              style={{
                textShadow: '0 0 14px rgba(108,0,255,0.45), 0 0 28px rgba(0,194,255,0.35)'
              }}
            >
              About Me
            </h2>
            {/* Animated glow underline */}
            <motion.div
              variants={underlineVariants}
              initial="initial"
              animate="animate"
              className="h-[3px] w-32 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(108,0,255,0) 0%, rgba(108,0,255,0.9) 25%, rgba(0,194,255,0.9) 75%, rgba(0,194,255,0) 100%)',
                backgroundSize: '200% 100%',
                boxShadow: '0 0 16px rgba(108,0,255,0.6), 0 0 22px rgba(0,194,255,0.45)'
              }}
            />

            {/* Icon divider */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="rounded-full bg-gradient-to-br from-[#6C00FF] to-[#00C2FF] p-[1px]"
              >
                <div className="rounded-full bg-[#0b0b12] p-2">
                  <Sparkles className="h-5 w-5 text-[#CFCFFF]" />
                </div>
              </motion.div>
              <div
                className="h-[1px] flex-1"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(108,0,255,0.0) 0%, rgba(108,0,255,0.6) 20%, rgba(0,194,255,0.6) 80%, rgba(0,194,255,0.0) 100%)',
                  boxShadow: '0 0 20px rgba(108,0,255,0.3), 0 0 40px rgba(0,194,255,0.25)'
                }}
              />
            </motion.div>

            {/* Animated bio with staggered lines and shimmer */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative mt-5 space-y-3 text-[15px] leading-relaxed text-[#CFCFFF] md:text-[16px]"
              style={{ textShadow: '0 0 10px rgba(108,0,255,0.35), 0 0 18px rgba(0,194,255,0.3)' }}
            >
              {/* Sweeping highlight overlay */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-md"
                style={{
                  background:
                    'linear-gradient(100deg, rgba(108,0,255,0.0) 20%, rgba(108,0,255,0.12) 40%, rgba(0,194,255,0.12) 60%, rgba(0,194,255,0.0) 80%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPositionX: ['0%', '200%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              <motion.p variants={textItem}>
                I’m a passionate Hardware & Software Engineer who loves building smart and efficient systems.
              </motion.p>
              <motion.p variants={textItem}>
                I design, assemble, and optimize both hardware and software to create seamless, connected technology experiences — from microcontrollers and embedded devices to web-based control systems.
              </motion.p>
              <motion.p variants={textItem}>
                Recently, I’ve been exploring creative HCI patterns, real‑time device telemetry, and resilient edge deployments.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </GlowCard>
    </section>
  );
}
