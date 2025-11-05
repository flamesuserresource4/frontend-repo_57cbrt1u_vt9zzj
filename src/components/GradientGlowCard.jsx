import React from 'react';

export default function GradientGlowCard({ title, description, icon }) {
  const Icon = icon || (() => null);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition hover:bg-white/10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
