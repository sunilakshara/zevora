"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function SustainabilityPage() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const initiatives = [
    {
      key: "sourcing",
      num: "01",
      title: t.sustainabilityPage.sourcingTitle,
      desc: t.sustainabilityPage.sourcingDesc,
      image: "/images/turmeric.webp",
    },
    {
      key: "partnerships",
      num: "02",
      title: t.sustainabilityPage.partnershipsTitle,
      desc: t.sustainabilityPage.partnershipsDesc,
      image: "/images/beverages.webp",
    },
    {
      key: "packaging",
      num: "03",
      title: t.sustainabilityPage.packagingTitle,
      desc: t.sustainabilityPage.packagingDesc,
      image: "/images/combined_packaging.png",
    }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-secondary/30" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 bg-charcoal/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/world_map.webp"
            alt="Sustainability Background"
            fill
            className="object-cover opacity-5 scale-105"
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary tracking-tight leading-none mb-6"
          >
            {t.sustainabilityPage.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            className="w-24 h-[2px] bg-secondary mb-8 origin-center"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl md:text-3xl text-gray-600 font-serif max-w-2xl leading-relaxed italic text-[#D4AF37] mb-8"
          >
            "{t.sustainabilityPage.subtitle}"
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="max-w-4xl px-8 py-6 mt-4 md:px-12 rounded-2xl transition-all duration-700 hover:shadow-xl hover:bg-white/40 hover:-translate-y-1 backdrop-blur-sm border border-transparent hover:border-white/60 group cursor-default"
          >
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed tracking-wide text-center group-hover:text-primary transition-colors duration-500">
              {t.sustainabilityPage.introText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Title */}
      <div className="text-center py-20 bg-background">
         <h2 className="text-3xl md:text-5xl font-serif text-primary">{t.sustainabilityPage.initiativesTitle}</h2>
         <div className="w-16 h-1 bg-secondary mx-auto mt-8"></div>
      </div>

      {/* Offset Card Layout */}
      <section className="relative w-full pb-32 z-20 bg-background overflow-hidden px-4 md:px-12">
        <div className="max-w-[1400px] mx-auto space-y-32 md:space-y-48">
          {initiatives.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.key} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0 md:gap-8 relative shadow-2xl md:shadow-none rounded-3xl md:rounded-none`}>
                
                {/* Background Number */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0' : 'right-0'} text-[8rem] sm:text-[12rem] md:text-[20rem] font-serif font-bold text-gray-100 -z-10 select-none opacity-50 overflow-hidden`}>
                  {item.num}
                </div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`w-full md:w-3/5 relative h-[300px] md:h-[600px] rounded-t-3xl md:rounded-sm overflow-hidden shadow-xl md:shadow-2xl z-20 ${isEven ? 'md:-mr-16' : 'md:-ml-16'}`}
                >
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={true}
                    className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  />
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className={`w-full md:w-2/5 flex flex-col justify-center bg-white p-8 md:p-16 shadow-xl rounded-b-3xl md:rounded-sm z-30 mx-auto md:mx-0 ${isEven ? 'md:-ml-16 md:mt-32' : 'md:-mr-16 md:mt-32'}`}
                >
                  <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="w-12 h-[2px] bg-secondary mb-6"></div>
                  
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
