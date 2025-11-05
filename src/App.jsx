import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="mx-auto max-w-6xl px-4 pb-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">About this page</h3>
            <p className="mt-2 text-white/70">
              This is a friendly “Hello World” experience dressed up with thoughtful design touches. Use it as a foundation for landing pages, product sites, or documentation.
            </p>
          </div>
        </section>
        <section id="cta" className="mx-auto max-w-6xl px-4 pb-24">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 p-8 text-center backdrop-blur md:flex-row md:text-left">
            <div>
              <h4 className="text-2xl font-bold">Ready to build something great?</h4>
              <p className="mt-1 text-white/70">Start editing components and ship your idea today.</p>
            </div>
            <a href="#" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:shadow">
              Create Your First Feature
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
