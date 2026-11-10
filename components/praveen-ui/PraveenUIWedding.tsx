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
    <div className="min-h-screen bg-[#e8dfca] text-[#3f2219]">
      <main className="royal-bg relative min-h-screen w-full overflow-hidden pb-10 shadow-[0_0_90px_rgba(43,28,19,.16)]">
        {/* Mango Leaves Swaying on Left & Right Borders */}
        <MangoBorder side="left" />
        <MangoBorder side="right" />

        {/* Floating Rose & Marigold Petals */}
        <FallingPetals />

        {/* Hero Section with South Indian Temple Gopuram Parallax */}
        <Hero
          brideName="Sri Anusha"
          groomName="Sai Kiran Mohan"
          subtitle="With the divine blessings of our families, we cordially invite you to celebrate the wedding of"
          blessingWord="శుభమస్తు"
        />

        {/* Monogram Separator (S & S) */}
        <MonogramDivider monogram="S & S" />

        {/* Main 2-Column Responsive Card Grid */}
        <div className="relative z-30 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-4 py-7 sm:px-6 md:gap-6 lg:grid-cols-2 lg:px-10">
          {/* Dynamic Personalized Guest Greeting if URL has ?guest=... */}
          <Suspense fallback={null}>
            <PersonalizedBanner />
          </Suspense>

          {/* Card 1: 22 November 2026 Celebration Details */}
          <WeddingCelebrationCard />

          {/* Card 2: Divine Blessings */}
          <DivineBlessingsCard />

          {/* Card 3: Wedding Events */}
          <EventsCard />

          {/* Card 4: Countdown to 11:17 AM on 22nd Nov */}
          <CountdownCard />

          {/* Card 5: Venue & Map (Madhura Banquet Hall, KPHB) */}
          <VenueCard />

          {/* Card 6: Grace Us With Your Presence & RSVP */}
          <RSVPActionCard />
        </div>

        {/* Footer Credit */}
        <div className="relative z-30 px-8 pb-8 text-center text-[12px] uppercase tracking-[0.18em] text-[#6b4a2e]/70 font-cinzel">
          With Love, Sai Kiran &amp; Sri Anusha❤️
        </div>
      </main>
    </div>
  );
};
