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
    title: "Sai Kiran & Sri Anusha Kalyana Virundhu & Reception",
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
      {/* Top Sparkles Icon */}
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#d0ad60]/50 bg-[#fff9ea] text-[#9b7430] shadow-[0_10px_24px_rgba(77,43,21,.12)]">
        <Sparkles size={20} />
      </div>

      {/* Subtitle */}
      <p className="text-[11px] uppercase tracking-[0.32em] text-[#8c692d] font-cinzel">
        Wedding Celebration
      </p>

      {/* Date */}
      <h2
        className="mt-3 text-[28px] font-semibold uppercase tracking-[0.08em] text-[#3f2219] sm:text-[34px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Sunday, 22 November 2026
      </h2>

      {/* Divider */}
      <GoldDivider className="my-5" />

      {/* Muhurtham Time */}
      <p className="mt-4 flex items-center justify-center gap-2 text-[15px] sm:text-[16px] font-semibold text-[#8b0000]">
        <Clock size={16} className="text-[#8b0000]" />
        <span>Subamuhurtham at 11:17 AM</span>
      </p>

      {/* Lunch / Feast Time */}
      <p className="mt-2 flex items-center justify-center gap-2 text-[15px] font-medium text-[#573728]">
        <UtensilsCrossed size={15} />
        <span>Kalyana Virundhu / Lunch from 12:30 PM onwards</span>
      </p>

      {/* Venue */}
      <p className="mt-2 flex items-center justify-center gap-2 text-[15px] font-medium text-[#573728]">
        <MapPin size={15} />
        <span>Madhura Banquet Hall, 9th Phase, KPHB, Hyderabad</span>
      </p>

      {/* Invitation Description */}
      <p className="mx-auto mt-5 max-w-xl text-[14px] font-medium leading-7 text-[#573728]/85 sm:text-[15px]">
        Please join us on the auspicious morning of Sunday, 22 November to shower your love and blessings upon the couple as they embark on this sacred journey of eternal togetherness.
      </p>

      {/* Calendar Buttons */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {CALENDAR_EVENTS.map((item) => (
          <a
            key={item.type}
            href={getGoogleCalendarUrl(item)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9aa63]/60 bg-[#fff9ed]/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4b2f21] shadow-[0_10px_22px_rgba(71,43,17,.10),inset_0_1px_0_rgba(255,255,255,.72)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a57e37] hover:bg-[#fff5df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68a3a]/45"
            aria-label={`Add ${item.type} to Google Calendar`}
          >
            <Calendar size={15} />
            <span>{item.type === "muhurtham" ? "Add Muhurtham" : "Add Lunch & Virundhu"}</span>
          </a>
        ))}
      </div>
    </SectionCard>
  );
};
