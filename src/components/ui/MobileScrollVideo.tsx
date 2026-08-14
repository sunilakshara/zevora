"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileScrollVideo() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="md:hidden relative w-full h-screen overflow-hidden bg-[#06111f]">
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
      <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />

      {/* Mobile-optimized content layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6 z-10 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-secondary text-[10px] tracking-[0.4em] uppercase font-medium mb-4"
        >
          Zevora Groupe
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white font-serif text-4xl leading-[1.1] mb-6"
        >
          Precision at
          <span className="block text-secondary italic mt-2">Every Point</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-sm max-w-sm leading-relaxed font-light px-4"
        >
          Trusted across 42 countries and 5 continents for seamless supply chain delivery.
        </motion.p>
      </div>

      {/* Centered bottom CTA for mobile */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-16 left-0 right-0 flex justify-center z-50 px-6"
      >
        <Link
          href={`/${locale}/products`}
          className="w-full max-w-[280px] flex items-center justify-center gap-4 bg-secondary text-primary text-[10px] font-black tracking-[0.3em] uppercase px-8 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.4)] cursor-pointer"
        >
          Discover More
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
