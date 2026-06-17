"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Footer", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F1E]/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center px-10">

        {/* Logo — left anchored */}
        <a href="#home" className="group flex items-center gap-3 shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-white font-black text-[10px] tracking-wider shadow-md shadow-indigo-500/30 transition-all duration-300 group-hover:shadow-indigo-400/40 group-hover:bg-indigo-400">
            TN
          </span>
          <span className="text-[17px] font-black tracking-[-0.03em] text-white">
            Tech<span className="text-indigo-400 font-black">Nova</span>
          </span>
        </a>

        {/* Spacer — pushes nav to the far right */}
        <div className="flex-1" />

        {/* Desktop Nav — far right, generous item spacing */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-1 text-[13px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  {/* Underline slide-in */}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="ml-6 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
        >
          {isOpen ? (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/[0.05] bg-[#0A0F1E]/98 backdrop-blur-2xl px-10 py-6">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                  style={{ borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  {link.label}
                  <svg className="h-3.5 w-3.5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
