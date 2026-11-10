"use client";

import React from "react";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Heart, Sparkles, Coffee, Users, Gem, Star } from "lucide-react";
import Link from "next/link";

export const LoveStory: React.FC = () => {
  const milestoneIcons = [Coffee, Users, Gem, Star];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5C242] via-[#E5A93C] to-[#D4AF37] text-amber-950 py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      {/* Golden Mandala Sunburst in Background (As seen in Frame 018-019) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-8 border-dashed border-amber-300/40 pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-4 border-amber-400/50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main "WHERE OUR STORY BEGINS" Header (Matching Frame 018-019) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-amber-800/20 text-xs font-serif tracking-widest uppercase mb-3 text-amber-950">
            <Heart className="w-3.5 h-3.5 fill-vedic-crimson text-vedic-crimson" />
            <span>Our Serendipitous Journey</span>
          </div>

          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-[0.15em] text-vedic-maroon uppercase drop-shadow-sm">
            WHERE OUR STORY BEGINS
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-amber-950 mt-2 max-w-xl mx-auto">
            From an arranged first conversation over Mylapore filter coffee to discovering our hearts beat in the exact same rhythm.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEDDING_DATA.story.map((milestone, i) => {
            const Icon = milestoneIcons[i % milestoneIcons.length];
            return (
              <div
                key={milestone.id}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border-2 border-amber-300/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-vedic-maroon text-amber-200 px-2.5 py-0.5 rounded-full">
                      {milestone.category}
                    </span>
                    <span className="text-xs font-serif font-semibold text-vedic-crimson">
                      {milestone.date}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-vedic-crimson shadow-inner mb-3">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-vedic-maroon mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center gap-1.5 text-xs text-amber-800 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Step {i + 1} of Destiny</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More Story CTA */}
        <div className="text-center mt-10">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-vedic-maroon text-amber-200 font-cinzel text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg hover:bg-vedic-crimson transition-all"
          >
            <span>Explore Full Gallery &amp; Journey</span>
            <Sparkles className="w-4 h-4 text-vedic-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

