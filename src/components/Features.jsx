import React from 'react';
import { Rocket, Code, Heart } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Vite + React deliver instant feedback while you build. No waiting, just flow.',
  },
  {
    icon: Code,
    title: 'Clean components',
    desc: 'Well-structured, focused pieces that scale with your project without clutter.',
  },
  {
    icon: Heart,
    title: 'Beautiful styling',
    desc: 'Tailwind CSS utilities make it easy to design delightful interfaces quickly.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why you’ll love this starter</h2>
        <p className="mx-auto mt-2 max-w-xl text-white/70">Opinionated defaults with room to grow. Copy, adapt, and ship faster.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white ring-1 ring-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
