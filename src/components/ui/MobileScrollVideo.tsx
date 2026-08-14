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
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero_mobile.mp4"
      />
      

        

    </div>
  );
}
