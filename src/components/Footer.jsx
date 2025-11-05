import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center md:flex-row md:text-left">
        <p className="text-sm text-white/60">© {year} Hello World. All rights reserved.</p>
        <div className="text-sm text-white/60">
          Built with React, Vite, and Tailwind.
        </div>
      </div>
    </footer>
  );
}
