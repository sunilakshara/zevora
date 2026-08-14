"use client";

import { useRef } from "react";
import { motion, useScroll, Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1, delay: 0.8, ease: "easeInOut" }
    }
  };

  const titleWords = t.qualityPage.title.split(' ');
  const firstPart = titleWords.slice(0, titleWords.length - 1).join(" ");
  const lastPart = titleWords[titleWords.length - 1] || "";
  
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-secondary/30" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_enhanced_bg_hd.webp"
            alt="Quality and Compliance"
            fill
            className="object-cover opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10"></div>
        </div>

        <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center mt-12 md:mt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center w-full"
          >
            {/* Sleek Modern Heading */}
            <h1 className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 uppercase leading-none overflow-hidden pb-4">
              <span className="font-serif font-semibold text-[#081C3A] text-5xl md:text-[64px] tracking-wide inline-flex whitespace-nowrap text-center">
                {firstPart.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              
              <span className="font-sans font-extrabold text-[#D4AF37] text-6xl md:text-[80px] lg:text-[96px] tracking-tight inline-flex whitespace-nowrap text-center mt-2 md:mt-0">
                {lastPart.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Simple Premium Underline */}
            <motion.div 
              variants={lineVariants}
              className="h-[2px] w-[100px] bg-[#D4AF37] mt-8 mb-10 origin-center"
            ></motion.div>
          </motion.div>

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
            <div key={item.key} className={`max-w-[1600px] mx-auto px-4 md:px-12 ${index === 0 ? 'pt-8 md:pt-12 pb-16 md:pb-32' : 'py-16 md:py-32'}`}>
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
