"use client";

import { motion } from "framer-motion";

export default function MobileScrollVideo() {
  return (
    <div className="md:hidden relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-90"
      >
        <source src="/videos/hero_mobile.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Text Content */}
      <div className="absolute bottom-16 left-0 w-full px-6 z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-serif text-white mb-3 shadow-sm"
        >
          Global Export Logistics
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-base font-light tracking-wide shadow-sm"
        >
          Seamless supply chain operations.
        </motion.p>
      </div>
    </div>
  );
}
