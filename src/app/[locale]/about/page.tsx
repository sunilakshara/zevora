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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-primary-dark text-white p-8 rounded-md border-l-4 border-secondary relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10">
                <p className="font-serif text-lg md:text-xl leading-relaxed italic opacity-90">
                  "{t.aboutPage.p2}"
                </p>
              </div>
            </motion.div>
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

        {/* Product Categories Section */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary text-4xl font-serif mb-4">Product Categories</h2>
            <div className="w-12 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Spices */}
            <div>
              <h3 className="text-2xl font-serif text-primary mb-8 border-b pb-4">Spices</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { name: "Black Pepper", img: "/images/black_pepper.webp" },
                  { name: "Cardamom", img: "/images/cardamom.webp" },
                  { name: "Turmeric", img: "/images/turmeric.webp" },
                  { name: "Cinnamon", img: "/images/cinnamon.webp" },
                  { name: "Cloves", img: "/images/cloves.webp" },
                ].map((item) => (
                  <div key={item.name} className="group relative overflow-hidden rounded-md shadow-md aspect-square bg-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <span className="text-white font-medium tracking-wide">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Seafood", img: "/images/seafood.webp" },
                { name: "Food & Beverages", img: "/images/beverages.webp" },
              ].map((cat) => (
                <div key={cat.name} className="group relative overflow-hidden rounded-md shadow-md h-64 md:h-80 bg-primary-dark">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent flex flex-col items-center justify-center p-6 group-hover:from-primary-dark/80 transition-colors duration-500">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-lg">{cat.name}</h3>
                    
                    <div className="overflow-hidden">
                      <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-secondary text-xs font-bold uppercase tracking-[0.2em] rounded-sm transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
