"use client";

import { motion } from "framer-motion";

export default function MobileScrollVideo() {
  return (
    <div className="md:hidden relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero_mobile.mp4" type="video/mp4" />
      </video>
      

        

    </div>
  );
}
