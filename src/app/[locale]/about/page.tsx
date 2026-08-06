"use client";

import { motion } from "framer-motion";
import { Award, Users, Map, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-32">
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              {t.aboutPage.heritageTag}
            </span>
            <h1 className="text-primary text-5xl font-serif mb-8 leading-tight">
              {t.aboutPage.title1} <br />
              <span className="text-secondary italic">{t.aboutPage.title2}</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.aboutPage.p1}
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              {t.aboutPage.p2}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-serif text-primary block mb-2">30+</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">
                  {t.aboutPage.yearsExcellence}
                </span>
              </div>
              <div>
                <span className="text-4xl font-serif text-primary block mb-2">42</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">
                  {t.aboutPage.countriesReached}
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-2xl border border-gray-100 group">
            <img
              src="/images/turmeric.webp"
              alt="Our Story - Pure Indian Harvest"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Values Grid */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-primary text-4xl font-serif mb-6">{t.aboutPage.valuesTitle}</h2>
            <p className="text-gray-500">{t.aboutPage.valuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Award, title: t.aboutPage.val1Title, text: t.aboutPage.val1Desc },
              { icon: Users, title: t.aboutPage.val2Title, text: t.aboutPage.val2Desc },
              { icon: Map, title: t.aboutPage.val3Title, text: t.aboutPage.val3Desc },
              { icon: HeartHandshake, title: t.aboutPage.val4Title, text: t.aboutPage.val4Desc },
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-sm border border-gray-100 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary transition-all duration-300">
                  <value.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-serif text-primary mb-3">{value.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="bg-primary p-12 md:p-24 rounded-sm text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                {t.logistics.title1} <br />
                <span className="text-secondary">{t.logistics.title2}</span>
              </h2>
              <p className="text-white/70 mb-12 leading-relaxed">
                {t.logistics.description}
              </p>
              <ul className="space-y-4">
                {[t.logistics.seaCargoTitle, t.logistics.surfaceTitle, t.logistics.docTitle].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/warehouse.webp" className="rounded-sm aspect-square object-cover" alt="Climate-controlled storage" />
              <img src="/images/logistics_ship.webp" className="rounded-sm aspect-square object-cover mt-8" alt="Direct port connectivity" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
