"use client";

import { motion } from "framer-motion";
import { Award, Users, Map, HeartHandshake, Search, ShieldCheck, Package, FileText, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:sticky lg:top-32"
          >
            <h1 className="text-3xl md:text-5xl font-serif text-primary mb-8 md:mb-10 leading-[1.15] max-w-lg">
              {t.aboutPage.storyTitle}
            </h1>
            <div className="space-y-6 text-gray-800 font-sans text-[16px] leading-[1.8] font-normal max-w-xl">
              <p>{t.aboutPage.storyP1}</p>
              <p>{t.aboutPage.storyP2}</p>
              <p>{t.aboutPage.storyP3}</p>
              <p>{t.aboutPage.storyP4}</p>
              <p>{t.aboutPage.storyP5}</p>
              <p>{t.aboutPage.storyP6}</p>
              
              <div className="pt-4 font-medium text-primary">
                <p>{t.aboutPage.storyHighlight1}</p>
                <p className="mt-2 text-xl font-serif text-secondary">{t.aboutPage.storyHighlight2}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image (Single Box) */}
          <div className="flex-1 w-full relative min-h-[500px] md:min-h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md aspect-[4/5] bg-[#F2F0EB] rounded-md shadow-2xl z-10 overflow-hidden group relative"
            >
              <Image 
                src="/images/about_story.webp"
                alt="Three friends"
                fill
                quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </motion.div>
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

        {/* Export Process Section */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary text-4xl font-serif mb-6">{t.exportProcess.title}</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { icon: Search, title: t.exportProcess.step1, step: "01" },
                { icon: ShieldCheck, title: t.exportProcess.step2, step: "02" },
                { icon: Package, title: t.exportProcess.step3, step: "03" },
                { icon: FileText, title: t.exportProcess.step4, step: "04" },
                { icon: Globe, title: t.exportProcess.step5, step: "05" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-6 shadow-xl group-hover:border-secondary transition-all duration-300 relative">
                    <item.icon size={32} className="text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-serif text-primary font-medium">{item.title}</h4>
                </motion.div>
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
