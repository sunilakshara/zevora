"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPreview() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      icon: Award,
      title: t.aboutPreview.pillar1Title,
      desc: t.aboutPreview.pillar1Desc,
    },
    {
      icon: Sparkles,
      title: t.aboutPreview.pillar2Title,
      desc: t.aboutPreview.pillar2Desc,
    },
    {
      icon: ShieldCheck,
      title: t.aboutPreview.pillar3Title,
      desc: t.aboutPreview.pillar3Desc,
    },
  ];

  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-[#FAF8F5] text-primary overflow-hidden">
      {/* Delicate Botanical Leaf Line Illustration in Background */}
      <div className="absolute top-8 left-4 w-72 h-72 opacity-15 pointer-events-none text-secondary">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M10,80 Q30,60 50,40 Q70,20 90,10" />
          <path d="M50,40 C45,30 35,25 25,30 C30,40 40,42 50,40 Z" />
          <path d="M65,25 C75,18 85,22 80,32 C70,30 65,25 65,25 Z" />
          <path d="M35,55 C25,50 18,58 22,68 C30,62 35,55 35,55 Z" />
          <path d="M75,15 C82,5 92,8 88,18 C80,16 75,15 75,15 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-semibold tracking-[0.3em] uppercase text-xs block mb-3"
          >
            {t.aboutPreview.tagline}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif text-primary tracking-tight mb-4"
          >
            {t.aboutPreview.title}
          </motion.h2>

          {/* Decorative Gold Star Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 my-5"
          >
            <div className="h-px w-16 bg-secondary/40" />
            <span className="text-secondary text-sm">✦</span>
            <div className="h-px w-16 bg-secondary/40" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4"
          >
            {t.aboutPreview.description}
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#F8F6F0] rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon
                    size={26}
                    className="text-secondary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
