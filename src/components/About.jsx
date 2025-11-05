import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Code, Database, GitBranch, Cloud, Terminal } from 'lucide-react';

const stack = [
  { name: 'Embedded (ESP32 / AVR)', Icon: CircuitBoard },
  { name: 'C / C++', Icon: Code },
  { name: 'Python', Icon: Terminal },
  { name: 'IoT / MQTT', Icon: Cloud },
  { name: 'AI / TFLite', Icon: Cpu },
  { name: 'Databases', Icon: Database },
  { name: 'Version Control', Icon: GitBranch },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0a16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 bg-gradient-to-b from-purple-700/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center text-white/80"
        >
          I’m a hardware–software engineer who loves connecting physical systems with smart code. From embedded boards and firmware, to cloud APIs and AI on the edge—my focus is building reliable, elegant systems that feel futuristic and just work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h3 className="text-center text-xl font-semibold text-white/90">Tech Stack</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stack.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition"
              >
                <div className="absolute -inset-1 -z-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-indigo-600/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                  <span className="text-sm text-white/90">{name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
