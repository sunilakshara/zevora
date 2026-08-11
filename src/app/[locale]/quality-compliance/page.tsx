"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function QualityCompliancePage() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pillars = [
    {
      key: "assurance",
      num: "01",
      title: t.qualityPage.assuranceTitle,
      desc: t.qualityPage.assuranceDesc,
      image: "/images/black_pepper.webp",
    },
    {
      key: "lab",
      num: "02",
      title: t.qualityPage.labTestingTitle,
      desc: t.qualityPage.labTestingDesc,
      image: "/images/warehouse.webp",
    },
    {
      key: "documentation",
      num: "03",
      title: t.qualityPage.documentationTitle,
      desc: t.qualityPage.documentationDesc,
      image: "/images/logistics_ship.webp",
    },
    {
      key: "standards",
      num: "04",
      title: t.qualityPage.standardsTitle,
      desc: t.qualityPage.standardsDesc,
      image: "/images/cinnamon.webp",
    }
  ];

  const titleWords = t.qualityPage.title.split(' ');
  
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-secondary/30" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/cardamom.webp"
            alt="Quality Background"
            fill
            className="object-cover opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10"></div>
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center mt-20">
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary tracking-tight leading-none uppercase"
            >
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block mr-4">
                  {i === titleWords.length - 1 ? <span className="text-secondary italic font-light">{word}</span> : word}
                </span>
              ))}
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            className="w-32 h-[1px] bg-secondary mb-10 origin-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">{t.qualityPage.commitmentTitle}</h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              {t.qualityPage.commitmentDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Zig-Zag Editorial Layout */}
      <section className="relative w-full pb-32 z-20 bg-background overflow-hidden">
        {pillars.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.key} className="max-w-[1600px] mx-auto px-4 md:px-12 py-16 md:py-32">
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full md:w-5/12 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                  {/* Subtle luxurious overlay */}
                  <div className="absolute inset-0 border border-black/10 z-10 pointer-events-none"></div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-7/12 flex flex-col justify-center md:pl-10"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl md:text-8xl font-serif text-charcoal/5 font-bold tracking-tighter">
                      {item.num}
                    </span>
                    <div className="w-16 h-[2px] bg-secondary mt-4"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </motion.div>

              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
