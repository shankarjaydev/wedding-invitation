"use client";

import React from "react";
import { HangingDiya, TempleGopuram } from "./SVGs";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroTemple: React.FC<{
  onScrollToBlessings?: () => void;
}> = ({ onScrollToBlessings }) => {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen bg-gradient-to-b from-[#70B4DE] via-[#A0D2EB] to-[#E1F1F8] flex flex-col justify-between items-center overflow-hidden pt-8 pb-4">
      {/* Subtle cloud textures in sky */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-24 bg-white/60 rounded-full blur-2xl" />
        <div className="absolute top-24 right-16 w-96 h-32 bg-white/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-28 bg-white/40 rounded-full blur-2xl" />
      </div>

      {/* Floating Hanging Diya Lamps - Left Side (Varying Chain Heights) */}
      <div className="absolute top-0 left-2 sm:left-8 lg:left-16 flex items-start gap-3 sm:gap-6 z-20 pointer-events-none">
        <HangingDiya chainHeight={120} className="scale-75 sm:scale-100" />
        <HangingDiya chainHeight={180} className="scale-90 sm:scale-110 -ml-2" />
        <HangingDiya chainHeight={140} className="hidden sm:flex scale-80" />
      </div>

      {/* Floating Hanging Diya Lamps - Right Side (Varying Chain Heights) */}
      <div className="absolute top-0 right-2 sm:right-8 lg:right-16 flex items-start gap-3 sm:gap-6 z-20 pointer-events-none">
        <HangingDiya chainHeight={150} className="hidden sm:flex scale-80" />
        <HangingDiya chainHeight={110} className="scale-75 sm:scale-100" />
        <HangingDiya chainHeight={190} className="scale-90 sm:scale-110 -ml-2" />
      </div>

      {/* Center Hero Heading & Couple Typography */}
      <div className="relative z-20 text-center max-w-2xl px-4 pt-12 sm:pt-16 pb-4 flex flex-col items-center">
        {/* Sacred Om / Invocation */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-amber-800/20 text-amber-950 font-serif text-xs sm:text-sm tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          <span>|| ஸ்ரீ கணேசாய நமஹ || ஸ்ரீ மங்களம் ||</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
        </div>

        {/* Groom Name */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-[#2C4A6F] drop-shadow-sm uppercase">
          SARAVANAN
        </h1>

        {/* Weds Connector Badge */}
        <div className="my-2 sm:my-3 relative flex items-center justify-center">
          <div className="w-20 sm:w-28 h-px bg-gradient-to-r from-transparent via-[#2C4A6F]/60 to-transparent" />
          <span className="font-serif italic text-base sm:text-xl text-[#78350F] px-4 font-semibold tracking-wider">
            weds
          </span>
          <div className="w-20 sm:w-28 h-px bg-gradient-to-r from-transparent via-[#2C4A6F]/60 to-transparent" />
        </div>

        {/* Bride Name */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-[#2C4A6F] drop-shadow-sm uppercase">
          VALLI
        </h2>

        {/* Wedding Date Subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-base font-serif tracking-widest text-[#5C3D2E] uppercase font-medium">
          October 24 &amp; 25, 2026 • Pollachi, Tamil Nadu
        </p>

        {/* Quick Scroll Indicator */}
        <button
          onClick={onScrollToBlessings}
          className="mt-6 inline-flex flex-col items-center gap-1 text-[#2C4A6F] hover:text-[#183153] transition-all group"
          aria-label="Scroll to enter the wedding temple"
        >
          <span className="text-[11px] font-sans tracking-widest uppercase text-[#5C3D2E]/80 group-hover:text-[#5C3D2E]">
            Step into the Auspicious Ceremony
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#78350F]" />
        </button>
      </div>

      {/* Majestic South Indian Temple Gopuram at Base */}
      <div className="relative z-10 w-full flex justify-center -mb-2">
        <TempleGopuram className="transform translate-y-1 sm:translate-y-2" />
      </div>
    </section>
  );
};

