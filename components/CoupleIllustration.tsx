"use client";

import React from "react";
import { CoupleIllustration as CoupleSVG, VerticalMarigoldStrand } from "./SVGs";
import { Sparkles, Heart } from "lucide-react";

export const CoupleIllustrationSection: React.FC<{
  onTriggerConfetti?: () => void;
}> = ({ onTriggerConfetti }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FCE4EC] via-[#F8BBD0] to-[#F48FB1] text-[#4A1525] py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      {/* Background Soft Mandala Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border-8 border-amber-300/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-4 border-dashed border-amber-400/40 pointer-events-none" />

      {/* Hanging Marigold Garlands across the background (As seen in Frames 026-030) */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-85 z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <VerticalMarigoldStrand key={i} flowersCount={8} className="transform -translate-y-2 scale-90 sm:scale-100" />
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Gracious Request Heading (Matching Frame 026) */}
        <div className="mb-6 max-w-2xl px-4">
          <p className="font-serif italic text-base sm:text-2xl text-[#880E4F] leading-relaxed drop-shadow-sm font-medium">
            &ldquo;We Request your gracious presence on the Auspicious occasion of our marriage&rdquo;
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-[#880E4F]/40" />
            <span className="font-cinzel text-xs tracking-widest uppercase text-[#880E4F] font-semibold">
              Saravanan &amp; Valli
            </span>
            <div className="w-12 h-0.5 bg-[#880E4F]/40" />
          </div>
        </div>

        {/* 3D Animated Couple Vector Artwork */}
        <div className="relative w-full max-w-xl my-4 transform hover:scale-[1.02] transition-transform duration-500">
          <CoupleSVG />
        </div>

        {/* Traditional Blessing CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {onTriggerConfetti && (
            <button
              onClick={onTriggerConfetti}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-vedic-crimson to-vedic-maroon text-white font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-vedic-gold"
            >
              <Sparkles className="w-4 h-4 text-vedic-gold" />
              <span>Shower Flowers &amp; Blessings</span>
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
            </button>
          )}

          <a
            href="#events"
            className="px-6 py-3 rounded-full bg-white/80 hover:bg-white text-vedic-maroon font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all border border-vedic-gold/60"
          >
            View Muhurtham Timings
          </a>
        </div>
      </div>
    </section>
  );
};

