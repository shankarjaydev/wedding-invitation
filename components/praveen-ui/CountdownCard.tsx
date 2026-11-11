"use client";

import React from "react";

// CountdownCard commented out as requested. Uncomment whenever needed.
/*
import { useState, useEffect } from "react";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,181,101,.16),transparent_42%)]" />
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

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
              {units.map((unit) => (
                <motion.div
                  key={unit.label}
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-[14px] border border-[#d8ba6b]/60 bg-[#fffdfa] p-3 shadow-[0_10px_22px_rgba(61,34,22,.08),inset_0_1px_0_rgba(255,255,255,.9)] sm:p-4"
                >
                  <span
                    className="block text-[30px] font-semibold leading-none tracking-tight text-[#3f2219] sm:text-[38px] font-cinzel"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {unit.value}
                  </span>
                  <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-[#8c692d] font-cinzel">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </SectionCard>
  );
};
*/

export const CountdownCard: React.FC = () => {
  return null;
};
