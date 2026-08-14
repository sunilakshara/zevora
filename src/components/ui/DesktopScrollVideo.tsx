"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DesktopScrollVideo() {
  const { locale } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalFrames = 240;
  const fps = 24;
  const frameInterval = 1000 / fps;

  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload all WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const padded = String(i).padStart(4, "0");
      img.src = `/desktop_frames/frame_${padded}.webp`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      imgs.push(img);
    }

    imagesRef.current = imgs;
  }, []);

  // Auto-play loop using requestAnimationFrame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let lastRenderTime = performance.now();
    let currentFrame = 0;

    const loop = (time: number) => {
      rafId = requestAnimationFrame(loop);
      
      const elapsed = time - lastRenderTime;

      // Only draw next frame if enough time has passed based on FPS
      if (elapsed > frameInterval && imagesRef.current.length > 0) {
        lastRenderTime = time - (elapsed % frameInterval);

        const img = imagesRef.current[currentFrame];
        if (img?.complete && img.naturalWidth > 0) {
          const cw = canvas.width;
          const ch = canvas.height;
          const ir = img.width / img.height;
          const cr = cw / ch;

          let sw = cw, sh = ch, ox = 0, oy = 0;
          if (cr > ir) {
            sh = cw / ir;
            oy = (ch - sh) / 2;
          } else {
            sw = ch * ir;
            ox = (cw - sw) / 2;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.clearRect(0, 0, cw, ch);
          ctx.drawImage(img, ox, oy, sw, sh);
        }

        currentFrame = (currentFrame + 1) % totalFrames;
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const loadPct = Math.round((imagesLoaded / totalFrames) * 100);
  const isReady = loadPct >= 5;

  return (
    <div className="hidden md:block relative w-full h-screen overflow-hidden bg-[#06111f]">
      {/* Loader */}
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-5 bg-[#06111f]">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-secondary/20 rounded-full" />
            <div className="absolute inset-0 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-secondary/70 text-xs font-light tracking-[0.35em] uppercase">
            Preparing High Fidelity Loop · {loadPct}%
          </p>
        </div>
      )}

      {/* Canvas Video Replacement */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isReady ? "opacity-90" : "opacity-0"}`}
      />

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
