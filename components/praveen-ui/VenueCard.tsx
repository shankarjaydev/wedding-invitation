"use client";

import React from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { MapPin, Phone } from "lucide-react";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Madhura+Banquet+Hall+Flats+150+151+Vijetha+Supermarket+4th+floor+9th+phase+KPHB+Hyderabad";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Vijetha+Supermarket+KPHB+9th+phase+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const VenueCard: React.FC = () => {
  return (
    <SectionCard className="lg:col-span-2">
      {/* Heading */}
      <h2
        className="text-center text-[24px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#3f2219] sm:text-[28px] md:text-[32px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Venue
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-5" />

      {/* 2-Column Grid: Details Left, Map Right */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        {/* Left Information Card */}
        <div className="rounded-[14px] border border-[#d8ba6b]/50 bg-[linear-gradient(145deg,#fffaf0_0%,#efe0bd_100%)] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_12px_26px_rgba(61,34,22,.08)] sm:p-6 flex flex-col justify-between">
          <div>
            <MapPin className="mx-auto mb-3 text-[#8b682e]" size={22} />

            <h3
              className="text-[23px] font-semibold uppercase tracking-[0.08em] text-[#3f2219] font-cinzel"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Madhura Banquet Hall
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-[15px] font-medium leading-7 text-[#573728]">
              Flats 150/151, Vijetha Supermarket, 4th floor, 9th phase, KPHB, Hyderabad.
            </p>

            {/* Landmark & Assistance Box */}
            <div className="mt-6 rounded-[12px] border border-[#d8ba6b]/45 bg-[#fff9ed]/75 p-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8c692d] font-cinzel">
                Location Landmark
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[#3f2219]">
                Above Vijetha Supermarket, 4th Floor
              </p>
              <p className="mx-auto mt-2 max-w-xs text-[13px] leading-6 text-[#573728]/78">
                Valet parking and lift access available directly to the banquet hall.
              </p>
            </div>
          </div>

          <div>
            {/* Get Directions Button */}
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9aa63]/60 bg-[#fff9ed]/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4b2f21] shadow-[0_10px_22px_rgba(71,43,17,.10),inset_0_1px_0_rgba(255,255,255,.72)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a57e37] hover:bg-[#fff5df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68a3a]/45"
              aria-label="Get directions to Madhura Banquet Hall"
            >
              Get Directions
            </a>

            <p className="mx-auto mt-3 max-w-xs text-[12px] font-medium leading-5 text-[#573728]/70">
              On mobile, tap the map or directions button to open Google Maps navigation.
            </p>
          </div>
        </div>

        {/* Right Google Maps Iframe */}
        <div className="overflow-hidden rounded-[14px] border border-[#d8ba6b]/45 shadow-[0_16px_34px_rgba(61,34,22,.11)] min-h-[300px]">
          <iframe
            title="Wedding Venue Map"
            src={MAP_EMBED_URL}
            className="h-[300px] w-full border-0 sm:h-[360px] lg:h-full lg:min-h-[390px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionCard>
  );
};
