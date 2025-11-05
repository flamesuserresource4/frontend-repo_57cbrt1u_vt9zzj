import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, Instagram, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a16] py-24 text-white">
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
          Contact
        </motion.h2>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <User className="h-5 w-5 text-purple-400" />
            <span className="text-sm text-white/80">Dzaky Ardiansyah</span>
          </div>
          <a
            href="https://github.com/LahJaki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Github className="h-5 w-5 text-white" />
            <span className="text-sm text-white/80">github.com/LahJaki</span>
          </a>
          <a
            href="https://t.me/LahJaki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Send className="h-5 w-5 text-cyan-400" />
            <span className="text-sm text-white/80">@LahJaki</span>
          </a>
          <a
            href="https://instagram.com/LahJaki"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Instagram className="h-5 w-5 text-pink-400" />
            <span className="text-sm text-white/80">@LahJaki</span>
          </a>
          <a
            href="mailto:DzakyyArdiansyahh@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5 text-red-400" />
            <span className="text-sm text-white/80">DzakyyArdiansyahh@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
