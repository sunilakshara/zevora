"use client";

import TasteBeyondBordersHero from "@/components/sections/TasteBeyondBordersHero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductHighlights from "@/components/sections/ProductHighlights";
import { CheckCircle2, Globe2, Ship, Truck, ShieldCheck, Microscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Premium Hero Section matching user design */}
      <TasteBeyondBordersHero />

      {/* About Transition Section */}
      <AboutPreview />

      {/* Product Showcase Section */}
      <ProductHighlights />

      {/* Logistics Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-6 block">
              {t.logistics.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              {t.logistics.title1} <br />
              <span className="text-secondary-light">{t.logistics.title2}</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              {t.logistics.description}
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Ship,
                  title: t.logistics.seaCargoTitle,
                  desc: t.logistics.seaCargoDesc,
                },
                {
                  icon: Truck,
                  title: t.logistics.surfaceTitle,
                  desc: t.logistics.surfaceDesc,
                },
                {
                  icon: ShieldCheck,
                  title: t.logistics.docTitle,
                  desc: t.logistics.docDesc,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[580px] rounded-lg overflow-hidden border border-white/15 shadow-2xl group bg-primary-dark">
            <img
              src="/images/logistics_ship.webp"
              alt="Global Port & Shipping Logistics"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Luxury Stat Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-primary-dark/85 backdrop-blur-md p-6 border border-secondary/30 rounded-sm shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
                  <Ship size={24} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                      99.8%
                    </span>
                    <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">
                      {t.logistics.verified}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase block mt-0.5">
                    {t.logistics.onTimeRate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/warehouse.webp"
            alt="Warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">
            {t.nav.tasteBeyondBorders}
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-10 md:mb-12 max-w-2xl mx-auto">
            {t.footer.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary text-primary-dark font-bold px-8 md:px-10 py-4 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-secondary-light transition-colors"
            >
              {t.nav.requestQuote}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
