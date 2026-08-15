"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function WhyChooseUsPage() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bentoItems = [
    {
      key: "expertise",
      title: t.whyChooseUs.items.expertiseTitle,
      desc: t.whyChooseUs.items.expertiseDesc,
      image: "/images/hero_enhanced_bg_hd.webp",
      span: "md:col-span-3",
    },
    {
      key: "products",
      title: t.whyChooseUs.items.productsTitle,
      desc: t.whyChooseUs.items.productsDesc,
      image: "/images/cardamom.webp",
      span: "md:col-span-3",
    },
    {
      key: "sourcing",
      title: t.whyChooseUs.items.sourcingTitle,
      desc: t.whyChooseUs.items.sourcingDesc,
      image: "/images/turmeric.webp",
      span: "md:col-span-3",
    },
    {
      key: "logistics",
      title: t.whyChooseUs.items.logisticsTitle,
      desc: t.whyChooseUs.items.logisticsDesc,
      image: "/images/logistics_ship.webp",
      span: "md:col-span-3",
    },
    {
      key: "quality",
      title: t.whyChooseUs.items.qualityTitle,
      desc: t.whyChooseUs.items.qualityDesc,
      image: "/images/black_pepper.webp",
      span: "md:col-span-2",
    },
    {
      key: "network",
      title: t.whyChooseUs.items.networkTitle,
      desc: t.whyChooseUs.items.networkDesc,
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",
      span: "md:col-span-4",
    },
    {
      key: "customer",
      title: t.whyChooseUs.items.customerTitle,
      desc: t.whyChooseUs.items.customerDesc,
      image: "/images/warehouse.webp",
      span: "md:col-span-3",
    },
    {
      key: "partnerships",
      title: t.whyChooseUs.items.partnershipsTitle,
      desc: t.whyChooseUs.items.partnershipsDesc,
      image: "/images/beverages.webp",
      span: "md:col-span-3",
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

  const titleWords = t.whyChooseUs.title.split(' ');
  
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-secondary/30" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_enhanced_bg_hd.webp"
            alt="Luxury Trade Background"
            fill
            className="object-cover opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background z-10"></div>
        </div>

        <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center mt-12 md:mt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center w-full"
          >
            {/* Sleek Modern Heading */}
            <h1 className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 uppercase leading-none overflow-hidden pb-4">
              <span className="font-serif font-semibold text-[#081C3A] text-5xl md:text-[64px] tracking-wide inline-flex whitespace-nowrap text-center">
                {titleWords[0]?.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              
              <span className="font-sans font-extrabold text-[#D4AF37] text-6xl md:text-[80px] lg:text-[96px] tracking-tight inline-flex whitespace-nowrap text-center mt-2 md:mt-0">
                {titleWords.slice(1).join(" ").split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Simple Premium Underline */}
            <motion.div 
              variants={lineVariants}
              className="h-[2px] w-[100px] bg-[#D4AF37] mt-8 mb-12 origin-center"
            ></motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed"
          >
            {t.whyChooseUs.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Luxury Bento Grid Section */}
      <section className="relative px-4 md:px-8 pb-32 z-20 -mt-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[400px]">
            {bentoItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index % 3) * 0.1, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className={`group relative rounded-[32px] overflow-hidden bg-charcoal/20 border border-black/5 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-700 ${item.span}`}
              >
                {/* Background Image with Parallax & Hover Zoom */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                  />
                  {/* Dark Navy Overlay - Lightens on Hover */}
                  <div className="absolute inset-0 bg-[#081C3A]/30 transition-colors duration-700 ease-in-out group-hover:bg-[#081C3A]/10 mix-blend-multiply"></div>
                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                  
                  {/* Gold Accent Line */}
                  <div className="w-0 h-[2px] bg-[#D4AF37] mb-6 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-16"></div>
                  
                  {/* Title */}
                  <div className="flex items-end justify-between transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
                    <h3 className="text-3xl md:text-4xl font-serif text-[#F8F6F2] leading-tight pr-4">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="overflow-hidden">
                    <p className="text-[#F8F6F2]/70 font-light mt-4 text-base md:text-lg leading-relaxed transform translate-y-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-hover:opacity-100 md:block hidden">
                      {item.desc}
                    </p>
                    <p className="text-[#F8F6F2]/70 font-light mt-4 text-sm leading-relaxed block md:hidden">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 rounded-[32px] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[32px]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
