"use client";

import React, { Suspense } from "react";
import { MangoBorder } from "./MangoBorder";
import { FallingPetals } from "./FallingPetals";
import { Hero } from "./Hero";
import { MonogramDivider } from "./MonogramDivider";
import { WeddingCelebrationCard } from "./WeddingCelebrationCard";
import { DivineBlessingsCard } from "./DivineBlessingsCard";
import { EventsCard } from "./EventsCard";
import { CountdownCard } from "./CountdownCard";
import { VenueCard } from "./VenueCard";
import { RSVPActionCard } from "./RSVPActionCard";
import { PersonalizedBanner } from "./PersonalizedBanner";

export const PraveenUIWedding: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f1e4] text-[#38121a]">
      <main className="royal-bg relative min-h-screen w-full overflow-hidden pb-12 shadow-[0_0_90px_rgba(56,18,26,.18)]">
        {/* Mango Leaves Swaying with Marigolds and Brass Bells */}
        <MangoBorder side="left" />
        <MangoBorder side="right" />

        {/* Floating Rose, Marigold & Akshatha Petals */}
        <FallingPetals />

        {/* Hero Section with Twilight Celestial Sky & Golden Temple Gopuram */}
        <Hero
          brideName="Sri Anusha"
          groomName="Sai Kiran Mohan"
          subtitle="With the divine blessings of our families, we cordially invite you to celebrate the wedding of"
          blessingWord="శుభమస్తు"
        />

        {/* Royal Burgundy & Gold Monogram Seal (S & S) */}
        <MonogramDivider monogram="S & S" />

        {/* Main 2-Column Responsive Card Grid */}
        <div className="relative z-30 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:gap-7 lg:grid-cols-2 lg:px-10">
          {/* Dynamic Personalized Guest Greeting if URL has ?guest=... */}
          <Suspense fallback={null}>
            <PersonalizedBanner />
          </Suspense>

          {/* Card 1: 22 November 2026 Celebration Details */}
          <WeddingCelebrationCard />

          {/* Card 2: Divine Blessings */}
          <DivineBlessingsCard />

          {/* Card 3: Auspicious Wedding Events */}
          <EventsCard />

          {/* Card 4: Countdown to 11:17 AM on 22nd Nov (commented out as requested) */}
          {/* <CountdownCard /> */}

          {/* Card 5: Venue & Map (Madhura Banquet Hall, KPHB) */}
          <VenueCard />

          {/* Card 6: Grace Us With Your Presence & RSVP */}
          <RSVPActionCard />
        </div>

        {/* Footer Credit */}
        <div className="relative z-30 px-8 pt-4 pb-10 text-center">
          <p className="text-[12px] uppercase tracking-[0.24em] text-[#966f22] font-cinzel font-bold">
            With Love &amp; Warm Regards
          </p>
          <p className="mt-1 text-[20px] text-[#5c1322] font-cursive" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Sai Kiran Mohan &amp; Sri Anusha
          </p>
        </div>
      </main>
    </div>
  );
};
