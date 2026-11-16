"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About me", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Work", href: "#work" },
    { name: "Music", href: "#music" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-cream-dark transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo with 4-point star */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-2xl font-bold font-display text-charcoal tracking-tight group"
        >
          <span className="text-terracotta text-2xl group-hover:rotate-45 transition-transform duration-300">
            ✦
          </span>
          <span className="font-serif font-black text-2xl sm:text-3xl text-charcoal">
            Jashanpreet Singh
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-charcoal/80 hover:text-forest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-mustard text-charcoal hover:bg-mustard-hover transition-all duration-200 shadow-sm active:scale-95"
          >
            Get in touch!
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-bold bg-mustard text-charcoal"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-cream-dark px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal hover:text-forest py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
