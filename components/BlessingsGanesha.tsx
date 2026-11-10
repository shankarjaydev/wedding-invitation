"use client";

import React from "react";
import { GaneshaEmblem, KolamPattern } from "./SVGs";
import { WEDDING_DATA } from "@/data/weddingDetails";

export const BlessingsGanesha: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#8B0000] via-[#A8182E] to-[#7B0818] text-white py-16 sm:py-24 px-4 overflow-hidden border-t-4 border-b-4 border-vedic-gold">
      {/* Perspective Carpet / Mandala Background Floor Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-wrap justify-around items-center">
        {Array.from({ length: 12 }).map((_, i) => (
          <KolamPattern key={i} className="text-amber-200 transform scale-125 sm:scale-150 m-4" />
        ))}
      </div>

      {/* Decorative Gold Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Sacred Lord Vinayagar (Ganesha) Golden Icon */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <GaneshaEmblem size={110} />
        </div>

        {/* Traditional Invocation Sanskrit / Tamil Line */}
        <p className="font-serif italic text-amber-200 text-xs sm:text-sm tracking-widest uppercase mb-3">
          || சுக்லாம்பரதரம் விஷ்ணும் சசிவர்ணம் சதுர்புஜம் ||
        </p>

        {/* Ancestral & Divine Blessings Section (As shown in Frame 010) */}
        <div className="space-y-2 mb-8">
          <p className="font-serif italic text-amber-200/90 text-sm sm:text-base tracking-wide">
            With the divine blessings of
          </p>
          <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 tracking-wider">
            {WEDDING_DATA.groom.grandparents}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100/80 font-serif">
            and the grace of our Kuladeivam &amp; Ishta Deivam
          </p>
        </div>

        {/* Dividing Gold Filigree */}
        <div className="flex items-center justify-center gap-3 w-full max-w-md my-4">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
          <div className="w-3 h-3 rotate-45 border border-amber-300 bg-vedic-gold" />
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
        </div>

        {/* Inviting Title (As shown in Frame 011) */}
        <div className="space-y-3 mt-4">
          <h2 className="font-samarkan font-serif text-3xl sm:text-4xl md:text-5xl text-amber-200 tracking-wide font-normal drop-shadow-md">
            Inviting
          </h2>

          <p className="font-serif text-base sm:text-xl text-amber-100 max-w-xl mx-auto leading-relaxed">
            We warmly invite you to join us in our wedding celebration and bestow your gracious blessings on the auspicious beginning of our new life together.
          </p>
        </div>
      </div>
    </section>
  );
};

