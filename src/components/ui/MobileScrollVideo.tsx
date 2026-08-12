"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MobileScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Track scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Keep a local ref of the scroll progress to update video in rAF
  const progressRef = useRef(0);
  
  // To handle the video loading state
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Subscribe to scroll progress and store it
    const unsubscribe = scrollYProgress.onChange((latest) => {
      progressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let lastTime = -1;

    // The core render loop
    const renderLoop = () => {
      // Only process if video is loaded and has a valid duration
      if (video.duration && !Number.isNaN(video.duration)) {
        // Calculate the target time based on scroll progress
        const targetTime = progressRef.current * video.duration;
        
        // Only update currentTime if it has changed enough to warrant an update
        // This prevents unnecessary DOM writes and improves smoothness
        if (Math.abs(lastTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
          lastTime = targetTime;
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Preload video and start loop
    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      // Optional: draw first frame immediately
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // Kick off the loop
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="md:hidden relative w-full"
      style={{ height: "150vh" }} // Allow scroll room to scrub through the video
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <video
          ref={videoRef}
          src="/videos/hero_scroll.mp4"
          className="w-full h-full object-cover opacity-90"
          playsInline
          muted
          preload="auto"
          // We don't autoplay, we scrub manually
        />
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-12 left-0 w-full px-6 z-20 text-center">
          <motion.h2 
            className="text-3xl font-serif text-white mb-2 shadow-sm"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]),
              y: useTransform(scrollYProgress, [0.1, 0.9], [20, -20])
            }}
          >
            Global Export Logistics
          </motion.h2>
          <motion.p 
            className="text-white/80 text-sm font-light tracking-wide shadow-sm"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])
            }}
          >
            Seamless supply chain operations.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
