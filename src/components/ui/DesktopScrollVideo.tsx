"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DesktopScrollVideo() {
  const { locale } = useParams();

  return (
    <div className="hidden md:block relative w-full h-screen overflow-hidden bg-[#06111f]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero_desktop.mp4" type="video/mp4" />
      </video>
      




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
    </div>
  );
}
