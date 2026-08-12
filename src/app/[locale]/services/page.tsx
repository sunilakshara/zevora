"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin, Landmark, Warehouse, Network, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesPage() {
  const { t, isRTL, locale } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const regions = [
    {
      id: "europe",
      icon: Landmark,
      title: t.marketsPage.europe,
      description: t.marketsPage.europeDesc,
      watermark: "EU",
      color: "from-blue-900/5 via-transparent to-transparent",
      borderColor: "hover:border-blue-500/20",
      iconColor: "text-blue-600",
    },
    {
      id: "gcc",
      icon: Warehouse,
      title: t.marketsPage.gcc,
      description: t.marketsPage.gccDesc,
      watermark: "ME",
      color: "from-amber-900/5 via-transparent to-transparent",
      borderColor: "hover:border-secondary/30",
      iconColor: "text-secondary",
    },
    {
      id: "us",
      icon: Globe2,
      title: t.marketsPage.us,
      description: t.marketsPage.usDesc,
      watermark: "US",
      color: "from-red-900/5 via-transparent to-transparent",
      borderColor: "hover:border-red-500/20",
      iconColor: "text-red-600",
    },
    {
      id: "canada",
      icon: MapPin,
      title: t.marketsPage.canada,
      description: t.marketsPage.canadaDesc,
      watermark: "CA",
      color: "from-slate-800/5 via-transparent to-transparent",
      borderColor: "hover:border-slate-400/20",
      iconColor: "text-slate-600",
    },
    {
      id: "apac",
      icon: Network,
      title: t.marketsPage.apac,
      description: t.marketsPage.apacDesc,
      watermark: "AP",
      color: "from-emerald-900/5 via-transparent to-transparent",
      borderColor: "hover:border-emerald-500/20",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-6 block">
              {t.marketsPage.tagline}
            </span>
            <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight">
              {t.marketsPage.title1} <br />
              <span className="text-secondary font-sans font-extrabold not-italic tracking-tight">{t.marketsPage.title2}</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              {t.marketsPage.description}
            </p>
          </motion.div>
        </header>

        {/* Dynamic World Map Section */}
        <section className="mb-32 relative">
          <div className="absolute inset-0 bg-primary-dark/5 rounded-3xl blur-3xl -z-10" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] md:aspect-[21/9] border border-gray-100"
          >
            <img 
              src="/images/world_map.webp" 
              alt="Global Export Map" 
              className="w-full h-full object-cover"
            />
            {/* Map Overlay Gradient for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
              <div className="flex gap-8 md:gap-16">
                <div>
                  <span className="block text-3xl md:text-5xl font-serif text-white mb-1">42+</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Countries Reached</span>
                </div>
                <div>
                  <span className="block text-3xl md:text-5xl font-serif text-white mb-1">5</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Continents</span>
                </div>
              </div>
              <Link href={`/${locale}/contact`}>
                <Button variant="secondary" className="shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {t.marketsPage.customButton}
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Regions Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl font-serif">Regions We Serve</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden bg-white p-8 md:p-10 border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-700 ${region.borderColor}`}
              >
                {/* Giant Typographic Watermark */}
                <div className="absolute -bottom-8 -right-4 text-[12rem] font-serif font-black text-gray-50 group-hover:text-gray-100 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none z-0 tracking-tighter leading-none">
                  {region.watermark}
                </div>
                
                {/* Premium corner glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[320px]">
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white border border-gray-100 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 relative overflow-hidden">
                       <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                       <region.icon size={24} className={`${region.iconColor} relative z-10 group-hover:text-secondary transition-colors duration-500`} />
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{region.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base pr-8 group-hover:text-gray-700 transition-colors duration-500">
                      {region.description}
                    </p>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-primary uppercase group-hover:text-secondary transition-all cursor-pointer">
                    <Link href={`/${locale}/products`} className="flex items-center gap-4 w-full h-full">
                      <span className="relative overflow-hidden flex items-center gap-2">
                        <span>Explore</span>
                        <div className="w-8 h-px bg-primary/30 group-hover:w-16 group-hover:bg-secondary transition-all duration-500" />
                      </span>
                      <ArrowIcon size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-primary p-12 md:p-24 text-center rounded-2xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {t.marketsPage.customTitle}
            </h2>
            <p className="text-white/70 mb-12 text-lg">
              {t.marketsPage.customSubtitle}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button variant="secondary" size="lg" className="px-10 py-5 text-sm">
                {t.marketsPage.customButton}
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
