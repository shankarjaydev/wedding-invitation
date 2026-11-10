"use client";

import React, { useState, useEffect } from "react";
import { SectionCard } from "./SectionCard";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-11-22T11:17:00+05:30");

function getCountdownUnits() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return [
    { value: String(days), label: "Days" },
    { value: String(hours).padStart(2, "0"), label: "Hours" },
    { value: String(mins).padStart(2, "0"), label: "Mins" },
    { value: String(secs).padStart(2, "0"), label: "Secs" },
  ];
}

export const CountdownCard: React.FC = () => {
  const [units, setUnits] = useState(getCountdownUnits);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setUnits(getCountdownUnits());
      setIsComplete(TARGET_DATE.getTime() - Date.now() <= 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SectionCard className="overflow-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#f3e8cc_100%)] px-6 py-8 text-center sm:px-8 sm:py-9 lg:col-span-2">
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,181,101,.16),transparent_42%)]" />

      {/* Top Gold Dividing Line */}
      <div className="absolute left-8 right-8 top-7 h-[1px] bg-gradient-to-r from-transparent via-[#c4a15b]/70 to-transparent" />

      <div className="relative z-10">
        <p className="mb-3 text-[11px] uppercase tracking-[0.36em] text-[#8c692d] font-cinzel">
          Countdown
        </p>

        <h2
          className="mx-auto max-w-4xl text-center text-[22px] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-[#3f2219] sm:text-[27px] md:text-[31px] lg:text-[32px] font-cinzel"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          The Auspicious Day Awaits
        </h2>

        {isComplete ? (
          <p className="mx-auto mt-6 max-w-xl text-[17px] font-medium leading-8 text-[#573728]/90 sm:text-[19px]">
            The blessed muhurtham has arrived. Thank you for showering your blessings upon Sai Kiran Mohan &amp; Sri Anusha.
          </p>
        ) : (
          <>
            <p className="mx-auto mt-5 max-w-[360px] text-[15px] font-medium leading-7 text-[#573728]/85 sm:text-[17px]">
              Counting down to the sacred hour of 11:17 AM when two souls unite as one.
            </p>

            {/* 4 Animated Countdown Boxes */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
              {units.map((unit, idx) => (
                <motion.div
                  key={unit.label}
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: idx * 0.15,
                    ease: "easeInOut",
                  }}
                  className="relative min-h-[86px] overflow-hidden rounded-[12px] border border-[#d8ba6b]/50 bg-[linear-gradient(180deg,#fffbf3_0%,#f3e8cc_100%)] px-1 py-4 shadow-[0_10px_22px_rgba(61,34,22,.09),inset_0_1px_0_rgba(255,255,255,.7)] sm:min-h-[96px] sm:px-2 sm:py-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,161,91,.11),transparent_60%)]" />
                  <div className="relative z-10">
                    <div
                      className="text-[24px] font-semibold tracking-wide text-[#7d5529] sm:text-3xl font-cinzel"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {unit.value}
                    </div>
                    <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#573728]/70 sm:text-[10px] sm:tracking-[0.24em]">
                      {unit.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </SectionCard>
  );
};
