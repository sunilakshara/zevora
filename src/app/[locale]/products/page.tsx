"use client";

import { motion } from "framer-motion";
import { Search, Download, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ProductsPage() {
  const { t, isRTL, locale } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const products = [
    {
      name: t.products.cardamom,
      desc: t.products.cardamomDesc,
      origin: "Idukki, Kerala, India",
      grades: ["8mm+ Bold", "7-8mm Extra Bold", "FAQ Grade"],
      metricName: "Essential Oil",
      metricVal: "8.5% Min",
      moisture: "< 10%",
      image: "/images/cardamom.webp",
    },
    {
      name: t.products.blackPepper,
      desc: t.products.blackPepperDesc,
      origin: "Malabar Coast, Kerala",
      grades: ["TGSEB Extra Bold", "TGEB Bold", "Garbled"],
      metricName: "Piperine",
      metricVal: "5.0% - 6.5%",
      moisture: "< 11%",
      image: "/images/black_pepper.webp",
    },
    {
      name: t.products.turmeric,
      desc: t.products.turmericDesc,
      origin: "Salem / Alleppey, India",
      grades: ["Polished Fingers", "Bulbs", "Ground"],
      metricName: "Curcumin",
      metricVal: "5.5% - 6.5%",
      moisture: "< 9%",
      image: "/images/turmeric.webp",
    },
    {
      name: t.products.cloves,
      desc: t.products.clovesDesc,
      origin: "Kerala & South India",
      grades: ["Handpicked Select", "Grade 1"],
      metricName: "Eugenol",
      metricVal: "18% Min",
      moisture: "< 11%",
      image: "/images/cloves.webp",
    },
    {
      name: t.products.cinnamon,
      desc: t.products.cinnamonDesc,
      origin: "Kerala, India & Sri Lanka",
      grades: ["ALBA", "C5 Special", "H1", "Quillings"],
      metricName: "Volatile Oil",
      metricVal: "2.5% Min",
      moisture: "< 14%",
      image: "/images/cinnamon.webp",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            {t.products.tagline}
          </span>
          <h1 className="text-primary text-5xl font-serif mb-8">{t.products.title}</h1>
          <p className="text-gray-600 max-w-2xl text-base sm:text-lg mb-8 leading-relaxed">
            {t.products.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-10 bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden bg-primary-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest text-primary uppercase rounded-sm">
                  {product.origin}
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-serif text-primary mb-4">{product.name}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed font-sans text-sm sm:text-base">
                    {product.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-10">
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
                        {t.products.grade}
                      </span>
                      <p className="text-sm font-medium text-primary">{product.grades.join(" / ")}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
                        {product.metricName}
                      </span>
                      <p className="text-sm font-medium text-primary">
                        {product.metricVal}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
                        Moisture
                      </span>
                      <p className="text-sm font-medium text-primary">{product.moisture}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest block mb-1">
                        Standard
                      </span>
                      <p className="text-sm font-medium text-primary flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-green-600 shrink-0" /> Global Benchmarks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link href={`/${locale}/contact`} className="flex-1">
                    <Button variant="primary" className="w-full flex justify-between items-center py-4 px-6 group cursor-pointer">
                      <span>{t.products.inquireNow}</span>
                      <ArrowIcon size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
