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
    description: "Sacred Jeelakarra Bellam & Mangalyadharana Ceremony",
    Icon: Sparkles,
  },
  {
    title: "Kalyana Vindhu/ Lunch",
    date: "Sunday, 22nd November 2026",
    time: "12:30 PM onwards",
    description: "Traditional South Indian Festive Wedding Feast",
    Icon: UtensilsCrossed,
  },
];

export const EventsCard: React.FC = () => {
  return (
    <SectionCard>
      {/* Top Icon */}
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#fffdf9_0%,#f5e8c4_100%)] text-[#b8860b] shadow-[0_8px_20px_rgba(109,21,37,.1)]">
        <Calendar size={20} />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[25px] font-bold uppercase leading-tight tracking-[0.08em] text-[#5c1322] sm:text-[29px] md:text-[32px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Auspicious Events
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-4" />

      {/* Events List */}
      <div className="mt-6 space-y-4">
        {EVENTS.map((event, idx) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: idx % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[16px] border-2 border-[#d4af37]/60 bg-[linear-gradient(135deg,rgba(255,252,242,.95)_0%,rgba(252,243,222,.95)_100%)] p-5 shadow-[0_12px_28px_rgba(77,20,30,.09),inset_0_1px_0_rgba(255,255,255,.9)]"
          >
            {/* Deep Crimson Left Accent Stripe */}
            <div className="absolute inset-y-3 left-0 w-[4px] rounded-r-full bg-[#681d2c]" />

            {/* Corner Decorative Curve */}
            <div className="absolute bottom-0 right-0 h-18 w-18 rounded-tl-full bg-[#d4af37]/10" />

            <div className="flex items-center gap-4">
              {/* Circular Gold Icon Frame */}
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#fffdf9_0%,#f5e8c4_100%)] text-[#8b0000] shadow-[0_8px_20px_rgba(77,20,30,.12)]">
                <event.Icon size={22} strokeWidth={1.8} />
              </div>

              {/* Event Details */}
              <div className="text-left">
                <h3
                  className="text-[18px] font-bold uppercase tracking-[0.08em] text-[#5c1322] font-cinzel"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {event.title}
                </h3>

                <p className="mt-1 flex items-center gap-2 text-[14px] font-semibold text-[#8b0000]">
                  <Clock size={13} className="text-[#8b0000]" />
                  <span>{event.time}</span>
                </p>

                <p className="mt-1 flex items-center gap-2 text-[13px] font-medium text-[#4a101b]/80">
                  <Calendar size={13} className="text-[#b8860b]" />
                  <span>{event.date}</span>
                </p>

                <p className="mt-2 text-[12px] italic text-[#966f22]">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};
