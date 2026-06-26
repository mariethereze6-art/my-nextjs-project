// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav-links";

function isLinkActive(pathname, href) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F1E]/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="2xl:container mx-auto flex h-[72px] items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-[10px] font-black tracking-wider text-white shadow-md shadow-indigo-500/30 transition-all duration-300 group-hover:bg-indigo-400 group-hover:shadow-indigo-400/40">
            TN
          </span>
          <span className="text-[17px] font-black tracking-[-0.03em] text-white">
            Tech<span className="font-black text-indigo-400">Nova</span>
          </span>
        </Link>

        <div className="flex-1" />

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative py-1 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-px bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

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

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/[0.05] bg-[#0A0F1E]/98 px-4 py-6 backdrop-blur-2xl sm:px-6">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-3.5 text-sm font-medium transition-colors duration-200 ${
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                    style={{
                      borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    {link.label}
                    <svg className="h-3.5 w-3.5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}