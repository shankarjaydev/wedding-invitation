"use client";

import React from "react";
import Link from "next/link";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Heart, Sparkles, Send, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#40070E] via-[#2A0409] to-[#150204] text-white py-12 px-4 border-t-4 border-vedic-gold">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Monogram */}
        <div className="w-14 h-14 rounded-full border-2 border-vedic-gold flex items-center justify-center bg-vedic-crimson/80 shadow-lg">
          <span className="font-cinzel text-vedic-gold font-bold text-lg tracking-wider">
            S &amp; V
          </span>
        </div>

        {/* Auspicious Tamil Blessing Line */}
        <div className="space-y-1">
          <p className="font-serif italic text-amber-300 text-lg sm:text-xl">
            || எல்லாம் வல்ல இறைவனின் அருளால் மங்களம் உண்டாகட்டும் ||
          </p>
          <p className="text-xs sm:text-sm text-amber-100/80 font-serif">
            May the union of Saravanan &amp; Valli be blessed with endless happiness and prosperity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-amber-200 font-cinzel">
          <Link href="/" className="hover:text-white transition-colors">Home Invitation</Link>
          <Link href="/events" className="hover:text-white transition-colors">Auspicious Schedule</Link>
          <Link href="/story" className="hover:text-white transition-colors">Our Story</Link>
          <Link href="/rsvp" className="hover:text-white transition-colors">RSVP &amp; Blessings</Link>
          <Link href="/generate" className="hover:text-white transition-colors text-vedic-gold font-bold flex items-center gap-1">
            <span>Personalize for Guest</span>
            <Send className="w-3 h-3" />
          </Link>
        </div>

        {/* Venue Quick Address */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-amber-100/70 border-t border-amber-900/40 pt-4 w-full">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-vedic-gold" />
            <span>{WEDDING_DATA.venue.name}, {WEDDING_DATA.venue.city}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-vedic-gold" />
            <span>Help Desk: {WEDDING_DATA.venue.contactPhones[0]}</span>
          </div>
        </div>

        <p className="text-[11px] text-amber-200/50">
          Crafted with love for Saravanan &amp; Valli • October 2026
        </p>
      </div>
    </footer>
  );
};

