"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";

export default function DesktopScrollVideo() {
  const { locale } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalFrames, setTotalFrames] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Subscribe to scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      progressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Preload all WebP frames
  useEffect(() => {
    const frameCount = 1200; // 120fps × 10s
    setTotalFrames(frameCount);

    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
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

  // Canvas render loop — tied to requestAnimationFrame for buttery 120fps feel
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let lastFrame = -1;

    const loop = () => {
      if (imagesRef.current.length > 0 && totalFrames > 0) {
        const targetFrame = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progressRef.current * totalFrames))
        );

        if (targetFrame !== lastFrame) {
          const img = imagesRef.current[targetFrame];
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
            lastFrame = targetFrame;
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [totalFrames]);

  const loadPct = totalFrames > 0 ? Math.round((imagesLoaded / totalFrames) * 100) : 0;
  const isReady = loadPct >= 5;

  // Animated text opacities
  const taglineOpacity = useTransform(scrollYProgress, [0.02, 0.1, 0.45, 0.55], [0, 1, 1, 0]);
  const taglineY       = useTransform(scrollYProgress, [0.02, 0.1, 0.45, 0.55], [30, 0, 0, -30]);
  const headlineOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.45, 0.55], [0, 1, 1, 0]);
  const headlineY       = useTransform(scrollYProgress, [0.05, 0.15, 0.45, 0.55], [40, 0, 0, -40]);
  const descOpacity     = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const ctaOpacity      = useTransform(scrollYProgress, [0.48, 0.58], [0, 1]);

  // Subtle scroll progress bar at the bottom
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      // hidden on mobile, full-screen on desktop
      className="hidden md:block relative w-full"
      style={{ height: "500vh" }} // 5x viewport = slow cinematic scroll
    >
      {/* Sticky canvas viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#06111f]">

        {/* Loader */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-5 bg-[#06111f]">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-secondary/20 rounded-full" />
              <div className="absolute inset-0 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-secondary/70 text-xs font-light tracking-[0.35em] uppercase">
              Preparing 120 FPS · {loadPct}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
        />

        {/* Subtle bottom fade only */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Left-aligned hero text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none px-16 max-w-6xl">
          <motion.span
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="block text-secondary text-xs tracking-[0.4em] uppercase font-medium mb-5"
          >
            Zevora Groupe · Global Logistics
          </motion.span>

          <motion.h1
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="text-white font-serif text-5xl xl:text-7xl leading-tight mb-6 max-w-3xl"
          >
            Precision at Every
            <span className="block text-secondary italic">Point of Delivery</span>
          </motion.h1>

          <motion.p
            style={{ opacity: descOpacity }}
            className="text-white/60 text-base xl:text-lg max-w-xl leading-relaxed font-light"
          >
            From warehouse floor to global port, Zevora Groupe operates a seamless supply chain
            trusted across 42 countries and 5 continents.
          </motion.p>
        </div>

        {/* Bottom-right CTA — permanently pinned, always visible */}
        <div className="absolute bottom-12 right-12 z-50">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-4 bg-secondary text-primary text-xs font-black tracking-[0.3em] uppercase px-10 py-5 shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.4)] hover:bg-secondary/90 hover:shadow-[0_8px_60px_rgba(0,0,0,0.7),0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 cursor-pointer"
          >
            Discover More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Scroll progress bar at very bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
          <motion.div
            style={{ width: progressBarWidth }}
            className="h-full bg-secondary/80 origin-left"
          />
        </div>

        {/* Scroll hint at start */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-white/40 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
