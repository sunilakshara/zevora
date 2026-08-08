"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductHighlights() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const products = [
    {
      name: t.products.cardamom,
      tagline: t.products.cardamomDesc,
      image: "/images/cardamom.webp",
      size: "large",
      href: "/products",
    },
    {
      name: t.products.blackPepper,
      tagline: t.products.blackPepperDesc,
      image: "/images/black_pepper.webp",
      size: "small",
      href: "/products",
    },
    {
      name: t.products.cloves,
      tagline: t.products.clovesDesc,
      image: "/images/cloves.webp",
      size: "small",
      href: "/products",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs block mb-3">
              {t.products.tagline}
            </span>
            <h2 className="text-primary text-3xl md:text-5xl font-serif mb-4 leading-tight">
              {t.products.title}
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors group shrink-0"
          >
            <span>{t.products.viewAll}</span>
            <ArrowIcon
              size={18}
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${
                product.size === "large" ? "md:col-span-2 h-[380px] md:h-[500px]" : "h-[380px] md:h-[500px]"
              }`}
            >
              <Link href={product.href} className="block w-full h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full flex justify-between items-end">
                  <div className="max-w-md">
                    <span className="text-secondary font-medium uppercase tracking-[0.2em] text-[10px] block mb-2">
                      {t.products.tagline}
                    </span>
                    <h3 className="text-white text-2xl sm:text-3xl font-serif">
                      {product.name}
                    </h3>
                    <p className="text-white/75 mt-2 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary group-hover:text-primary-dark transition-all shrink-0">
                    <ArrowIcon size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
