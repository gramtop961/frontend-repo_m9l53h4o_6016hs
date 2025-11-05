import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-fuchsia-500/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" />
          <span>Welcome to your new React + Tailwind app</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Hello World, beautifully presented
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          A clean starting point with a polished aesthetic. Explore a modern layout, subtle gradients, and reusable components to accelerate your next idea.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#cta" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:shadow md:text-base">Get Started</a>
          <a href="#features" className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 md:text-base">Learn More</a>
        </div>
      </div>
    </section>
  );
}
