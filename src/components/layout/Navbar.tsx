"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, t, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.markets, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const currentLangObj = languages.find((l) => l.code === locale) || languages[0];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-2xl border-b border-secondary/20"
          : "border-b border-white/5"
      }`}
      style={{ backgroundColor: '#04133b' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo — transparent PNG, blends with bg */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/logo.png"
            alt="Zevora Groupe Logo"
            className="h-24 md:h-28 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 2px 12px rgba(212,175,55,0.25))' }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${locale}${link.href === "/" ? "" : link.href}`}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors text-white/80 hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right CTA & Language */}
        <div className="hidden sm:flex items-center gap-5">
          <Link
            href={`/${locale}/contact`}
            className="border border-secondary text-secondary hover:bg-secondary hover:text-primary-dark text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm"
          >
            {t.nav.requestQuote}
          </Link>

          {/* Language Selector (Only EN, AR, FR) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-secondary transition-colors uppercase tracking-wider py-1 cursor-pointer"
              aria-label="Select Language"
            >
              <span>{currentLangObj.label}</span>
              <svg
                className={`w-3.5 h-3.5 text-secondary transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-primary-dark/95 backdrop-blur-md border border-secondary/30 rounded-sm shadow-2xl py-1.5 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLocale(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer ${
                      locale === l.code
                        ? "text-secondary bg-secondary/15 font-semibold"
                        : "text-white/80 hover:bg-secondary/20 hover:text-secondary"
                    }`}
                  >
                    <span>{l.label} ({l.name})</span>
                    {locale === l.code && <Check size={12} className="text-secondary" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle & Language */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded px-2 py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase transition-colors ${
                  locale === l.code
                    ? "bg-secondary text-primary-dark"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="text-white hover:text-secondary transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-dark text-white shadow-2xl p-6 md:hidden flex flex-col gap-4 border-t border-secondary/20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${locale}${link.href === "/" ? "" : link.href}`}
                className="text-base font-medium py-2 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="mt-4 w-full">
                {t.nav.requestQuote}
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
