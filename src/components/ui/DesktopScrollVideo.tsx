"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DesktopScrollVideo() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hidden md:block relative w-full h-screen overflow-hidden bg-[#06111f]">
      {/* Native Hardware-Accelerated Video */}
      {mounted && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-[5] pointer-events-none" />

      {/* Left-aligned hero text */}
      <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none px-16 max-w-6xl z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-secondary text-xs tracking-[0.4em] uppercase font-medium mb-5"
        >
          Zevora Groupe · Global Logistics
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white font-serif text-5xl xl:text-7xl leading-tight mb-6 max-w-3xl"
        >
          Precision at Every
          <span className="block text-secondary italic">Point of Delivery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base xl:text-lg max-w-xl leading-relaxed font-light"
        >
          From warehouse floor to global port, Zevora Groupe operates a seamless supply chain
          trusted across 42 countries and 5 continents.
        </motion.p>
      </div>

      {/* Bottom-right CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 right-12 z-50"
      >
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-4 bg-secondary text-primary text-xs font-black tracking-[0.3em] uppercase px-10 py-5 shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.4)] hover:bg-secondary/90 hover:shadow-[0_8px_60px_rgba(0,0,0,0.7),0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 cursor-pointer"
        >
          Discover More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
