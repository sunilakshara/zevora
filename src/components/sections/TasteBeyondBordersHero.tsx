"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Package, Users, Ship, Leaf, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TasteBeyondBordersHero() {
  const { t, isRTL } = useLanguage();

  const stats = [
    {
      icon: Globe,
      value: t.stats.stat1Value,
      label: t.stats.stat1Label,
      sublabel: t.stats.stat1Sublabel,
    },
    {
      icon: Package,
      value: t.stats.stat2Value,
      label: t.stats.stat2Label,
      sublabel: t.stats.stat2Sublabel,
    },
    {
      icon: Users,
      value: t.stats.stat3Value,
      label: t.stats.stat3Label,
      sublabel: t.stats.stat3Sublabel,
    },
    {
      icon: Ship,
      value: t.stats.stat4Value,
      label: t.stats.stat4Label,
      sublabel: t.stats.stat4Sublabel,
    },
    {
      icon: Leaf,
      value: t.stats.stat5Value,
      label: t.stats.stat5Label,
      sublabel: t.stats.stat5Sublabel,
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full bg-[#081C3A] text-white flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background Graphic Asset with Pouch & Ship on Right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_enhanced_bg_hd.webp"
          alt="Zevora Groupe - Taste Beyond Borders"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Soft edge ambient blend on the left over dark sea area */}
        <div className="absolute inset-0 pointer-events-none w-full md:w-3/5 bg-gradient-to-r from-[#081C3A] via-[#081C3A]/70 to-transparent left-0" />
      </div>

      {/* Main Hero Content - Always anchored on the left over dark sea background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & Action Buttons */}
          <div dir={isRTL ? "rtl" : "ltr"} className="lg:col-span-7 max-w-xl xl:max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#D4AF37] font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm block mb-3"
            >
              {t.hero.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight mb-4"
            >
              <span className="text-white">{t.hero.title1}</span> <br />
              <span className="text-[#D4AF37]">{t.hero.title2}</span>
            </motion.h1>

            {/* Gold Star Divider with Clean Lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`flex items-center gap-3 my-5 ${isRTL ? "origin-right" : "origin-left"}`}
            >
              <div className="h-[1px] w-14 bg-[#D4AF37]/50" />
              <span className="text-[#D4AF37] text-sm leading-none">✦</span>
              <div className="h-[1px] w-14 bg-[#D4AF37]/50" />
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-sans"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#081C3A] font-bold text-xs tracking-[0.18em] uppercase px-7 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 group cursor-pointer"
              >
                <span>{t.hero.exploreProducts}</span>
                <ArrowIcon
                  size={15}
                  className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Spacing for the Cargo Ship & Packaging Graphic */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
        </div>
      </div>

      {/* Floating Stats / Trust Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-10 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border border-[#D4AF37]/25 bg-[#081C3A]/70 backdrop-blur-xl rounded-sm p-5 sm:p-6 lg:p-7 shadow-2xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#D4AF37]/20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 ${
                  idx !== 0 ? "pt-3 sm:pt-0 sm:pl-4 sm:rtl:pl-0 sm:rtl:pr-4 lg:pl-6 lg:rtl:pl-0 lg:rtl:pr-6" : ""
                }`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <stat.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-sans text-white/70 leading-tight">
                    <span className="block font-medium">{stat.label}</span>
                    <span>{stat.sublabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
