"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MobileScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalFrames, setTotalFrames] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Track scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Keep a local ref of the scroll progress
  const progressRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Update progress ref when scroll changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      progressRef.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Load images
  useEffect(() => {
    // 120fps extraction resulted in exactly 1200 frames
    const frameCount = 1200;
    setTotalFrames(frameCount);

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Preload frames in batches to avoid overwhelming mobile browser network/memory
    let currentBatch = 0;
    const batchSize = 50;

    const loadBatch = (start: number) => {
      const end = Math.min(start + batchSize - 1, frameCount);
      for (let i = start; i <= end; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(4, '0');
        img.src = `/mobile_frames/frame_${frameNum}.webp`;
        
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          
          // Load next batch when current is done
          if (loadedCount % batchSize === 0 && loadedCount < frameCount) {
            loadBatch(loadedCount + 1);
          }
        };
        
        img.onerror = () => {
          // If a frame fails, just increment so we don't stall the batch loader
          loadedCount++;
          setImagesLoaded(loadedCount);
          if (loadedCount % batchSize === 0 && loadedCount < frameCount) {
            loadBatch(loadedCount + 1);
          }
        };

        loadedImages.push(img);
      }
    };

    // Start loading first batch
    loadBatch(1);
    
    imagesRef.current = loadedImages;
  }, []);

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      if (imagesRef.current.length > 0 && totalFrames > 0) {
        // Calculate target frame index
        const targetFrame = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progressRef.current * totalFrames))
        );
        
        // Only redraw if frame changed
        if (targetFrame !== lastRenderedFrame) {
          const img = imagesRef.current[targetFrame];
          if (img && img.complete && img.naturalWidth > 0) {
            // Draw image to cover canvas (like object-fit: cover)
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            
            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasRatio > imgRatio) {
              drawHeight = canvas.width / imgRatio;
              offsetY = (canvas.height - drawHeight) / 2;
            } else {
              drawWidth = canvas.height * imgRatio;
              offsetX = (canvas.width - drawWidth) / 2;
            }

            // High quality drawing for smooth results
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            lastRenderedFrame = targetFrame;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [totalFrames]);

  // Determine loaded percentage for the loader
  const loadPercentage = totalFrames > 0 ? Math.round((imagesLoaded / totalFrames) * 100) : 0;
  const isReady = loadPercentage > 10; // Start showing once 10% is loaded to avoid long wait

  return (
    <div 
      ref={containerRef} 
      className="md:hidden relative w-full"
      style={{ height: "200vh" }} // Extra height for a longer, slower scroll scrub through the 120fps video
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        
        {/* Loader */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
            <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
            <p className="text-secondary/80 text-xs tracking-widest uppercase">Optimizing 120FPS ({loadPercentage}%)</p>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={720}
          height={1280}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-90' : 'opacity-0'}`}
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
