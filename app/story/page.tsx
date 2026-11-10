"use client";

import React from "react";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Heart, Sparkles, Coffee, Calendar, MapPin, Quote, Camera } from "lucide-react";
import Link from "next/link";
import { CoupleIllustration, KolamPattern } from "@/components/SVGs";

export default function StoryPage() {
  const storyChapters = [
    {
      chapter: "Chapter 1",
      title: "Degree Coffee & Destined Conversations",
      date: "December 2024 • Mylapore, Chennai",
      summary:
        "What was intended as a quick traditional 20-minute meeting arranged by parents turned into a three-hour conversation over piping hot Kumbakonam degree filter coffee. Saravanan loved Valli's spontaneous laughter, and Valli admired Saravanan's calm sincerity.",
      highlight: "“I knew within thirty minutes that this wasn't just a meeting—it was the start of my forever.” — Saravanan",
    },
    {
      chapter: "Chapter 2",
      title: "The Meeting of Families & Unspoken Harmony",
      date: "August 2025 • Coimbatore",
      summary:
        "When both families gathered at Valli's ancestral home, the warmth in the room was instantaneous. Grandparents exchanged sweet memories of Tamil traditions, stories were shared over hot snacks, and smiles gave way to unanimous celebration.",
      highlight: "“Seeing our families laugh together like lifelong friends sealed everything in our hearts.” — Valli",
    },
    {
      chapter: "Chapter 3",
      title: "The Sacred Nichayathartham (Betrothal)",
      date: "January 2026 • Pollachi",
      summary:
        "Under the fragrant canopy of fresh jasmine and marigolds, the Lagna Patrika was read aloud by the family priest. Auspicious silver plates laden with Kanchipuram silk sarees, fruits, and gold were exchanged, officially proclaiming the upcoming wedding.",
      highlight: "“Blessed by ancient mantras and the elders' hands on our heads.”",
    },
    {
      chapter: "Chapter 4",
      title: "The Seven Sacred Steps (Sapthapadi)",
      date: "October 2026 • Pollachi Mandapam",
      summary:
        "Today, we stand on the threshold of our Vedic union. With Lord Ganesha's blessings and surrounded by our dearest family and friends, we prepare to take seven sacred steps around the holy fire.",
      highlight: "“Together for a lifetime of companionship, love, laughter, and service.”",
    },
  ];

  const galleryItems = [
    { title: "Sacred Kalasham & Puja", tag: "Tradition", caption: "Seeking the grace of deities during our Nichayathartham" },
    { title: "Filter Coffee at Mylapore", tag: "Memories", caption: "Where our very first laughter was shared" },
    { title: "Engagement Silks & Flowers", tag: "Rituals", caption: "Valli adorned in traditional vermilion Kanchipuram silk" },
    { title: "Temple Blessings", tag: "Devotion", caption: "Offering prayers at the historic Pollachi Subramanya Swami Temple" },
    { title: "Family Celebrations", tag: "Joy", caption: "Surrounded by cousins, aunts, uncles, and boundless love" },
    { title: "The Seven Sacred Vows", tag: "Vedic Union", caption: "Stepping into eternity hand in hand" },
  ];

  return (
    <div className="w-full bg-[#FFFBF0] text-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-crimson text-amber-200 text-xs font-serif tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Our Love Story &amp; Memories</span>
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          </div>

          <h1 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase">
            WHERE OUR STORY BEGINS
          </h1>

          <p className="font-serif italic text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            A journey of two souls bound by shared values, traditional roots, and timeless love.
          </p>
        </div>

        {/* Center Couple Illustration */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-xl max-w-2xl mx-auto">
          <CoupleIllustration />
          <div className="text-center mt-6">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-vedic-maroon">
              Saravanan &amp; Valli
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
              Engineer &amp; Designer • Coffee Lovers • Forever Partners
            </p>
          </div>
        </div>

        {/* The Couple Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Groom Bio */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-vedic-maroon text-amber-200 font-cinzel font-bold text-lg flex items-center justify-center shadow-md">
                S
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-vedic-maroon">
                  {WEDDING_DATA.groom.fullName}
                </h3>
                <span className="text-xs text-vedic-crimson font-serif font-medium">
                  {WEDDING_DATA.groom.education}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-700 font-serif leading-relaxed mb-4">
              {WEDDING_DATA.groom.bio}
            </p>

            <div className="bg-white/80 p-4 rounded-xl border border-amber-200 text-xs italic text-stone-600 font-serif flex items-start gap-2">
              <Quote className="w-4 h-4 text-vedic-gold shrink-0 mt-0.5" />
              <span>
                “Valli brings a gentle grace and joyful lightness to everything. I could not have imagined a more perfect partner to walk life's sacred path.”
              </span>
            </div>
          </div>

          {/* Bride Bio */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50/40 rounded-3xl p-6 sm:p-8 border-2 border-rose-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-vedic-crimson text-amber-200 font-cinzel font-bold text-lg flex items-center justify-center shadow-md">
                V
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-vedic-maroon">
                  {WEDDING_DATA.bride.fullName}
                </h3>
                <span className="text-xs text-vedic-crimson font-serif font-medium">
                  {WEDDING_DATA.bride.education}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-700 font-serif leading-relaxed mb-4">
              {WEDDING_DATA.bride.bio}
            </p>

            <div className="bg-white/80 p-4 rounded-xl border border-rose-200 text-xs italic text-stone-600 font-serif flex items-start gap-2">
              <Quote className="w-4 h-4 text-vedic-gold shrink-0 mt-0.5" />
              <span>
                “Saravanan's warmth, grounded nature, and quiet strength made me feel at home from the very first hour. I am blessed beyond measure.”
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Timeline Chapters */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="font-cinzel text-2xl font-bold text-vedic-maroon">
              Chapters of Our Journey
            </h3>
            <p className="text-xs text-stone-600 font-serif mt-1">
              Every step guided by providence and family blessings.
            </p>
          </div>

          <div className="space-y-6">
            {storyChapters.map((ch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 pb-3 mb-4">
                  <span className="text-xs font-bold font-cinzel text-vedic-crimson uppercase tracking-widest">
                    {ch.chapter}
                  </span>
                  <span className="text-xs font-serif text-stone-500 font-medium">
                    {ch.date}
                  </span>
                </div>

                <h4 className="font-cinzel text-xl font-bold text-vedic-maroon mb-2">
                  {ch.title}
                </h4>

                <p className="font-serif text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                  {ch.summary}
                </p>

                <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 text-xs italic text-amber-950 font-serif">
                  {ch.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rituals & Memories Gallery */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-serif text-amber-800 uppercase tracking-wider mb-1">
              <Camera className="w-4 h-4 text-vedic-crimson" />
              <span>Visual Moments</span>
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-vedic-maroon">
              Auspicious Moments &amp; Rituals
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md hover:shadow-xl transition-all group"
              >
                {/* Traditional Decorative Visual Card */}
                <div className="h-44 bg-gradient-to-tr from-vedic-maroon via-vedic-crimson to-amber-700 p-6 flex flex-col justify-between text-amber-100 relative overflow-hidden group-hover:scale-102 transition-transform">
                  <div className="absolute -right-4 -bottom-4 opacity-20">
                    <KolamPattern className="w-32 h-32 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-vedic-maroon px-2 py-0.5 rounded-full w-fit">
                    {item.tag}
                  </span>
                  <div>
                    <h5 className="font-cinzel font-bold text-lg text-white">
                      {item.title}
                    </h5>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            href="/rsvp"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-vedic-maroon hover:bg-vedic-crimson text-amber-200 font-cinzel font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Bless The Couple (RSVP)</span>
            <Sparkles className="w-4 h-4 text-vedic-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}

