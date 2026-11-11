"use client";

import React from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { MapPin, Navigation } from "lucide-react";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Madhura+Banquet+Hall+Flats+150+151+Vijetha+Supermarket+4th+floor+9th+phase+KPHB+Hyderabad";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Vijetha+Supermarket+KPHB+9th+phase+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const VenueCard: React.FC = () => {
  return (
    <SectionCard className="lg:col-span-2">
      {/* Top Icon */}
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#fffdf9_0%,#f5e8c4_100%)] text-[#b8860b] shadow-[0_8px_20px_rgba(109,21,37,.1)]">
        <MapPin size={22} className="text-[#8b0000]" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[25px] font-bold uppercase leading-tight tracking-[0.08em] text-[#5c1322] sm:text-[29px] md:text-[32px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Wedding Venue
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-4" />

      {/* 2-Column Grid: Details Left, Map Right */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        {/* Left Information Card */}
        <div className="rounded-[18px] border-2 border-[#d4af37]/60 bg-[linear-gradient(145deg,#fffdfa_0%,#f8ebd0_100%)] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_12px_28px_rgba(77,20,30,.08)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#966f22] font-cinzel">
              KPHB, Hyderabad
            </span>

            <h3
              className="mt-2 text-[24px] sm:text-[26px] font-bold uppercase tracking-[0.08em] text-[#5c1322] font-cinzel"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Madhura Banquet Hall
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-[15px] font-medium leading-7 text-[#4a101b]">
              Flats 150/151, Vijetha Supermarket, 4th floor, 9th phase, KPHB, Hyderabad.
            </p>

            {/* Landmark & Assistance Box */}
            <div className="mt-5 rounded-[14px] border border-[#d4af37]/50 bg-[#fffdf9]/80 p-4 text-center shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#966f22] font-cinzel">
                Location Landmark
              </p>
              <p className="mt-1 text-[15px] font-bold text-[#681d2c]">
                Above Vijetha Supermarket (4th Floor)
              </p>
              <p className="mx-auto mt-2 max-w-xs text-[13px] leading-6 text-[#52222b]/80">
                Elevator lift access and ample parking available directly to the banquet hall.
              </p>
            </div>
          </div>

          <div className="mt-6">
            {/* Get Directions Button */}
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border-2 border-[#d4af37] bg-[linear-gradient(180deg,#681d2c_0%,#420f1a_100%)] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ffebad] shadow-[0_12px_28px_rgba(77,20,30,.28),inset_0_1px_0_rgba(255,215,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#521321] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]/60 cursor-pointer"
              aria-label="Get directions to Madhura Banquet Hall"
            >
              <Navigation size={16} />
              <span>Get Directions</span>
            </a>

            <p className="mx-auto mt-3 max-w-xs text-[12px] font-medium leading-5 text-[#681d2c]/75">
              Tap to open live turn-by-turn navigation in Google Maps.
            </p>
          </div>
        </div>

        {/* Right Embedded Interactive Map */}
        <div className="relative min-h-[290px] overflow-hidden rounded-[18px] border-2 border-[#d4af37]/60 shadow-[0_14px_32px_rgba(77,20,30,.12)]">
          <iframe
            title="Madhura Banquet Hall KPHB Location"
            src={MAP_EMBED_URL}
            className="h-full w-full border-0 min-h-[290px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionCard>
  );
};
