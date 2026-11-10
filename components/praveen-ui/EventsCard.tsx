"use client";

import React from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { UtensilsCrossed, Sparkles, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const EVENTS = [
  {
    title: "Subamuhurtham",
    date: "Sunday, 22nd November 2026",
    time: "11:17 AM (Auspicious Muhurtham)",
    Icon: Sparkles,
  },
  {
    title: "Kalyana Virundhu / Lunch",
    date: "Sunday, 22nd November 2026",
    time: "12:30 PM onwards",
    Icon: UtensilsCrossed,
  },
];

export const EventsCard: React.FC = () => {
  return (
    <SectionCard>
      {/* Heading */}
      <h2
        className="text-center text-[24px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#3f2219] sm:text-[28px] md:text-[32px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Wedding Events
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-5" />

      {/* Events List */}
      <div className="mt-6 space-y-3.5">
        {EVENTS.map((event, idx) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: idx % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[14px] border border-[#d8ba6b]/45 bg-[#fffaf0]/75 p-4 shadow-[0_12px_26px_rgba(61,34,22,.09),inset_0_1px_0_rgba(255,255,255,.68)]"
          >
            {/* Gold Left Stripe */}
            <div className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-[#b99145]/70" />

            {/* Corner Decorative Curve */}
            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-[#b99145]/8" />

            <div className="flex items-center gap-4">
              {/* Circular Icon Frame */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6b565]/60 bg-[#fff9ea] text-[#8b682e] shadow-[0_10px_22px_rgba(63,34,25,.10)]">
                <event.Icon size={20} strokeWidth={1.8} />
              </div>

              {/* Event Details */}
              <div className="text-left">
                <h3
                  className="text-[17px] font-semibold uppercase tracking-[0.08em] text-[#3f2219] font-cinzel"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {event.title}
                </h3>

                <p className="mt-1 flex items-center gap-2 text-[14px] font-medium text-[#573728]">
                  <Calendar size={13} />
                  <span>{event.date}</span>
                </p>

                <p className="mt-1 flex items-center gap-2 text-[14px] font-medium text-[#573728]">
                  <Clock size={13} />
                  <span>{event.time}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};
