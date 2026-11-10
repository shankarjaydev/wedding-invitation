"use client";

import React from "react";
import { MangoLeafToran, VerticalMarigoldStrand, HangingDiya } from "./SVGs";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Heart, Sparkles } from "lucide-react";

export const CoupleIntro: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#D81B60] via-[#C2185B] to-[#AD1457] text-white py-12 sm:py-20 px-4 overflow-hidden border-b-4 border-vedic-gold">
      {/* Mango Leaf Toran along the top (As in Frame 013-014) */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <MangoLeafToran />
      </div>

      {/* Vertical Marigold Garlands on Left & Right Margins */}
      <div className="absolute top-16 left-3 sm:left-8 z-10 pointer-events-none hidden xs:block">
        <VerticalMarigoldStrand flowersCount={10} />
      </div>
      <div className="absolute top-16 right-3 sm:right-8 z-10 pointer-events-none hidden xs:block">
        <VerticalMarigoldStrand flowersCount={10} />
      </div>

      {/* Decorative Traditional Lamp */}
      <div className="absolute top-8 left-12 hidden lg:block opacity-80 pointer-events-none">
        <HangingDiya chainHeight={100} />
      </div>
      <div className="absolute top-8 right-12 hidden lg:block opacity-80 pointer-events-none">
        <HangingDiya chainHeight={100} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pt-10 sm:pt-14 pb-4">
        {/* Top Tagline */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-amber-200/40 text-amber-100 text-xs sm:text-sm font-serif tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Kalyana Mandapam • Vedic Union</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
        </div>

        {/* Main Grid: Groom on Left, Weds in Center, Bride on Right */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
          {/* GROOM CARD (Columns 1 to 5) */}
          <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-amber-300/40 shadow-xl text-center flex flex-col items-center hover:bg-white/15 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 text-vedic-maroon font-cinzel font-bold text-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
              S
            </div>

            <p className="font-serif italic text-amber-200 text-sm tracking-wide mb-1">
              Son of
            </p>
            <p className="font-serif text-base sm:text-lg text-white font-semibold mb-3">
              {WEDDING_DATA.groom.parents}
            </p>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-widest text-amber-200 uppercase mt-1 mb-2 drop-shadow-md">
              {WEDDING_DATA.groom.name}
            </h3>

            <p className="text-xs sm:text-sm text-pink-100/90 font-serif max-w-xs leading-relaxed">
              {WEDDING_DATA.groom.bio}
            </p>

            <span className="mt-4 inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase bg-amber-400/30 text-amber-200 border border-amber-300/40">
              The Groom
            </span>
          </div>

          {/* CENTER "WEDS" CONNECTOR (Column 6) */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 border-4 border-vedic-crimson shadow-2xl flex flex-col items-center justify-center animate-pulse">
              <Heart className="w-4 h-4 fill-vedic-crimson text-vedic-crimson -mb-1" />
              <span className="font-cinzel text-vedic-maroon font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                WEDS
              </span>
            </div>
          </div>

          {/* BRIDE CARD (Columns 7 to 11) */}
          <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-amber-300/40 shadow-xl text-center flex flex-col items-center hover:bg-white/15 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-300 to-amber-300 text-vedic-maroon font-cinzel font-bold text-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
              V
            </div>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-widest text-amber-200 uppercase mt-1 mb-2 drop-shadow-md">
              {WEDDING_DATA.bride.name}
            </h3>

            <p className="font-serif italic text-amber-200 text-sm tracking-wide mb-1">
              Daughter of
            </p>
            <p className="font-serif text-base sm:text-lg text-white font-semibold mb-3">
              {WEDDING_DATA.bride.parents}
            </p>

            <p className="text-xs sm:text-sm text-pink-100/90 font-serif max-w-xs leading-relaxed">
              {WEDDING_DATA.bride.bio}
            </p>

            <span className="mt-4 inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase bg-amber-400/30 text-amber-200 border border-amber-300/40">
              The Bride
            </span>
          </div>
        </div>

        {/* Golden Ribbon Banner (As shown in Frame 016) */}
        <div className="mt-12 text-center">
          <div className="inline-block relative px-8 py-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-vedic-maroon rounded-full shadow-2xl border-2 border-vedic-gold">
            <span className="font-cinzel font-bold text-xs sm:text-base tracking-[0.2em] uppercase">
              INTRODUCING THE GROOM AND BRIDE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

