import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/60 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Hello Jane</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#cta" className="rounded-md bg-white/10 px-3 py-1.5 text-white backdrop-blur transition hover:bg-white/20">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
