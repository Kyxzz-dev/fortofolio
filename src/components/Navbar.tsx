"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavbarData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface NavbarProps {
  data?: NavbarData;
}

export default function Navbar({ data = portfolioData.nav }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { logoText, logoHighlight = ".", items = [] } = data;

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight">
          {logoText}
          {logoHighlight && (
            <span className="text-purple-500">{logoHighlight}</span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button + Dropdown */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 transition-colors hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Floating Dropdown Box */}
          {isOpen && (
            <div className="absolute right-0 top-10 w-44 rounded-2xl border border-white/10 bg-zinc-900/95 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}