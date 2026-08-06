"use client";

import { motion } from "framer-motion";
import { Ship, Truck, ShieldCheck, Microscope, Package, Globe, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Ship,
      title: t.servicesPage.service1Title,
      description: t.servicesPage.service1Desc,
    },
    {
      icon: Globe,
      title: t.servicesPage.service2Title,
      description: t.servicesPage.service2Desc,
    },
    {
      icon: Microscope,
      title: t.servicesPage.service3Title,
      description: t.servicesPage.service3Desc,
    },
    {
      icon: Package,
      title: t.servicesPage.service4Title,
      description: t.servicesPage.service4Desc,
    },
    {
      icon: ShieldCheck,
      title: t.servicesPage.service5Title,
      description: t.servicesPage.service5Desc,
    },
    {
      icon: Truck,
      title: t.servicesPage.service6Title,
      description: t.servicesPage.service6Desc,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-20">
          <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            {t.servicesPage.tagline}
          </span>
          <h1 className="text-primary text-4xl sm:text-5xl font-serif mb-6 leading-tight">
            {t.servicesPage.title1} <br />
            <span className="text-secondary italic">{t.servicesPage.title2}</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {t.servicesPage.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 border border-gray-100 hover:border-secondary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#F8F6F0] rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans mb-8">
                  {service.description}
                </p>
              </div>
              <Link
                href="/contact"
                className="text-[11px] font-bold tracking-widest text-secondary uppercase flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-50"
              >
                <span>{t.servicesPage.learnMore}</span>
                <ArrowIcon size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-24 md:mt-32 bg-primary-dark p-8 sm:p-12 md:p-20 text-white rounded-sm relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              {t.servicesPage.customTitle}
            </h2>
            <p className="text-white/70 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.servicesPage.customSubtitle}
            </p>
            <Link href="/contact" className="inline-block">
              <Button variant="secondary" size="lg" className="cursor-pointer">
                {t.servicesPage.customButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
