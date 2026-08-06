"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-white pt-20 pb-10 border-t border-white/5" style={{ backgroundColor: '#04133b' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center mb-6 group">
            <img
              src="/logo.png"
              alt="Zevora Groupe"
              className="h-24 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 2px 12px rgba(212,175,55,0.25))' }}
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="/products" className="hover:text-secondary transition-colors">{t.nav.products}</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition-colors">{t.nav.markets}</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Global Offices */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.globalPresence}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> Cochin, India (HQ)</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> Dubai, UAE</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> Singapore</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.contactUs}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3"><Mail size={16} className="text-secondary shrink-0" /> contact@zevoragroupe.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-secondary shrink-0" /> +91 484 2345 678</li>
            <li className="flex gap-2 pt-4">
              <a href="#" aria-label="Social Link" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <ExternalLink size={16} />
              </a>
              <a href="#" aria-label="Global Network" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <Globe size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
        <p>{t.footer.rights}</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="/about" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
          <Link href="/about" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          <Link href="/about" className="hover:text-white transition-colors">{t.footer.compliance}</Link>
        </div>
      </div>
    </footer>
  );
}
