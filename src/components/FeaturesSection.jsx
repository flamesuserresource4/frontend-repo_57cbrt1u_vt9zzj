import React from 'react';
import { Sparkles, Rocket, Wand2, Star } from 'lucide-react';
import GradientGlowCard from './GradientGlowCard';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Clean Design',
      description:
        'A calm, distraction-free layout that focuses on content and readability.',
      icon: Sparkles,
    },
    {
      title: 'Subtle Accents',
      description:
        'Simple surfaces and soft contrast without neon effects or gradients.',
      icon: Wand2,
    },
    {
      title: 'Consistent Palette',
      description:
        'Neutral tones and clear hierarchy for a cohesive visual language.',
      icon: Star,
    },
    {
      title: 'Performance First',
      description:
        'Lightweight UI without canvas animations for smooth performance.',
      icon: Rocket,
    },
  ];

  return (
    <section id="features" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Refined, Minimal Features</h2>
          <p className="mt-3 text-white/70">
            Built with simplicity in mind — no particle backgrounds or glowing borders.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <GradientGlowCard key={i} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
