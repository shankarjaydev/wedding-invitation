"use client";

import React from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { Sparkles, UtensilsCrossed, Calendar, MapPin, Clock } from "lucide-react";

interface CalendarEvent {
  title: string;
  type: "muhurtham" | "lunch";
  start: string;
  end: string;
  description: string;
}

const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    title: "Sai Kiran Mohan & Sri Anusha Wedding Muhurtham",
    type: "muhurtham",
    start: "20261122T111700",
    end: "20261122T133000",
    description: "Auspicious wedding ceremony of Sai Kiran Mohan & Sri Anusha at Madhura Banquet Hall, KPHB, Hyderabad.",
  },
  {
    title: "Sai Kiran & Sri Anusha Kalyana Vindhu& Reception",
    type: "lunch",
    start: "20261122T123000",
    end: "20261122T153000",
    description: "Wedding feast & lunch celebrating Sai Kiran Mohan & Sri Anusha.",
  },
];

const getGoogleCalendarUrl = (e: CalendarEvent) => {
  return `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${e.start}/${e.end}`,
    ctz: "Asia/Kolkata",
    location: "Madhura Banquet Hall, Flats 150/151, Vijetha Supermarket, 4th floor, 9th phase, KPHB, Hyderabad",
    details: `${e.description}`,
  }).toString()}`;
};

export const WeddingCelebrationCard: React.FC = () => {
  return (
    <SectionCard className="text-center lg:col-span-2">
      {/* Top Sparkles / Kalash Icon */}
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#fffdf7_0%,#f5e6be_100%)] text-[#9b6f1e] shadow-[0_12px_28px_rgba(109,21,37,.14)]">
        <Sparkles size={22} className="text-[#b8860b]" />
      </div>

      {/* Subtitle */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#966f22] font-cinzel">
        Sacred Matrimony
      </p>

      {/* Date */}
      <h2
        className="mt-3 text-[30px] font-bold uppercase tracking-[0.08em] text-[#5c1322] sm:text-[36px] font-cinzel drop-shadow-[0_1px_2px_rgba(255,255,255,.8)]"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Sunday, 22 November 2026
      </h2>

      {/* Divider */}
      <GoldDivider className="my-5" />

      {/* Muhurtham Time Badge */}
      <div className="mx-auto my-3 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/70 bg-[linear-gradient(90deg,rgba(255,248,225,.9)_0%,rgba(255,238,190,.9)_100%)] px-6 py-2.5 shadow-[0_4px_16px_rgba(109,21,37,.1)]">
        <Clock size={17} className="text-[#8b0000]" />
        <span className="text-[16px] sm:text-[17px] font-bold tracking-wide text-[#8b0000]">
          Subamuhurtham at 11:17 AM
        </span>
      </div>

      {/* Lunch / Feast Time */}
      <p className="mt-3 flex items-center justify-center gap-2 text-[15px] sm:text-[16px] font-medium text-[#4a101b]">
        <UtensilsCrossed size={16} className="text-[#b8860b]" />
        <span>Kalyana Vindhu/ Grand Wedding Feast from 12:30 PM onwards</span>
      </p>

      {/* Venue */}
      <p className="mt-2 flex items-center justify-center gap-2 text-[15px] font-medium text-[#4a101b]/90">
        <MapPin size={16} className="text-[#b8860b]" />
        <span>Madhura Banquet Hall, 9th Phase, KPHB, Hyderabad</span>
      </p>

      {/* Invitation Description */}
      <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-8 text-[#52222b] sm:text-[16px]">
        Please join us on the auspicious morning of Sunday, 22 November to shower your love and blessings upon the couple as they embark on this sacred journey of eternal togetherness.
      </p>

      {/* Calendar Buttons */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
        {CALENDAR_EVENTS.map((item) => (
          <a
            key={item.type}
            href={getGoogleCalendarUrl(item)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-[#d4af37] bg-[linear-gradient(180deg,#fffdf9_0%,#f5e9ce_100%)] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5c1322] shadow-[0_10px_24px_rgba(109,21,37,.12),inset_0_1px_0_rgba(255,255,255,.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b8860b] hover:bg-[#fff9ea] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 cursor-pointer"
            aria-label={`Add ${item.title} to Google Calendar`}
          >
            <Calendar size={14} className="text-[#b8860b]" />
            <span>Add {item.type === "muhurtham" ? "Muhurtham" : "Lunch"} to Calendar</span>
          </a>
        ))}
      </div>
    </SectionCard>
  );
};
