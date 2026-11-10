"use client";

import React, { useState } from "react";
import { SouthIndianFeastPlate } from "./SVGs";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Utensils, Coffee, Check, Sparkles } from "lucide-react";

export const TraditionalFeast: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5C242] via-[#FFAA00] to-[#E58900] text-amber-950 py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      {/* Decorative Gold Rangoli in background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-amber-800/20 text-xs font-serif tracking-widest uppercase mb-3 text-amber-950">
            <Utensils className="w-3.5 h-3.5 text-vedic-crimson" />
            <span>Kalyana Virundhu • Traditional Hospitality</span>
          </div>

          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase drop-shadow-sm">
            SAVOR THE CELEBRATION
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-amber-900 mt-2 max-w-xl mx-auto">
            A grand traditional South Indian feast prepared with sacred reverence, ghee, spices, and boundless warmth served on fresh banana leaves.
          </p>
        </div>

        {/* Central Authentic Masala Dosa Vector Plate (Matching Frame 021-022) */}
        <div className="w-full max-w-md mx-auto my-4 transform hover:scale-105 transition-transform duration-500">
          <SouthIndianFeastPlate />
        </div>

        {/* Menu Tabs: Morning Muhurtham Breakfast vs Royal Kalyana Sappadu */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex justify-center gap-2 p-1.5 bg-white/30 backdrop-blur-md rounded-full border border-amber-700/20 mb-6">
            {WEDDING_DATA.feastMenu.map((menu, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 sm:py-2.5 px-4 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider uppercase transition-all ${
                  activeTab === idx
                    ? "bg-vedic-maroon text-amber-200 shadow-md"
                    : "text-amber-950 hover:bg-white/30"
                }`}
              >
                {idx === 0 ? "Morning Virundhu" : "Royal Kalyana Sappadu"}
              </button>
            ))}
          </div>

          {/* Active Menu Content */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-amber-400 shadow-xl">
            <div className="flex items-center justify-between border-b border-amber-300 pb-3 mb-4">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-vedic-maroon">
                  {WEDDING_DATA.feastMenu[activeTab].category}
                </h3>
                <p className="text-xs text-amber-900 italic font-serif mt-0.5">
                  {WEDDING_DATA.feastMenu[activeTab].description}
                </p>
              </div>
              <Coffee className="w-6 h-6 text-vedic-crimson" />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {WEDDING_DATA.feastMenu[activeTab].items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80 text-amber-950 font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-vedic-crimson/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-vedic-crimson" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-3 border-t border-amber-200 flex items-center justify-between text-xs text-amber-900">
              <span className="flex items-center gap-1 font-serif">
                <Sparkles className="w-3.5 h-3.5 text-vedic-crimson" />
                Pure Vegetarian Traditional Cuisine
              </span>
              <span className="font-semibold text-vedic-maroon">
                Filter Coffee &amp; Pan Beeda Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

