"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="text-white pt-20 pb-10 border-t border-white/5" style={{ backgroundColor: '#04133b' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href={`/${locale}`} className="block mb-6 group">
            <div className="relative h-24 w-48 flex shrink-0">
              <Image
                src="/logo.png"
                alt="Zevora Groupe"
                fill
                quality={100}
                className="object-contain object-left"
                style={{ filter: 'drop-shadow(0 2px 12px rgba(212,175,55,0.25))' }}
              />
            </div>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href={`/${locale}/products`} className="hover:text-secondary transition-colors">{t.nav.products}</Link></li>
            <li><Link href={`/${locale}/services`} className="hover:text-secondary transition-colors">{t.nav.markets}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:text-secondary transition-colors">{t.nav.about}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Global Offices */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.globalPresence}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> Cochin, India (HQ)</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> Dubai, UAE</li>
            <li className="flex gap-3"><MapPin size={16} className="text-secondary shrink-0 mt-0.5" /> France</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-6">{t.footer.contactUs}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3"><Mail size={16} className="text-secondary shrink-0" /> contact@zevoragroupe.com</li>
            <li className="flex gap-3 items-start"><Phone size={16} className="text-secondary shrink-0 mt-1" /> 
              <div>
                <div>WhatsApp: +91 9544433282</div>
              </div>
            </li>
            <li className="flex gap-2 pt-4">
              <a href="https://www.instagram.com/zevora_groupe?igsh=MTU4dzBtdjYyMTM2Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/1YTRQh8sQ7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://youtube.com/@zevoragroupe_official?si=0sHm5QBaccDiWN5k" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/company/zevora-groupe-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
        <p>{t.footer.rights}</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t.footer.privacy}</Link>
          <Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t.footer.terms}</Link>
          <Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t.footer.compliance}</Link>
        </div>
      </div>
    </footer>
  );
}
