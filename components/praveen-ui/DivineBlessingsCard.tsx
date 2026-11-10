"use client";

import React from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { Sparkles } from "lucide-react";

export interface DivineBlessingsProps {
  blessingText?: string;
  subText?: string;
}

export const DivineBlessingsCard: React.FC<DivineBlessingsProps> = ({
  blessingText = "With the divine blessings of our families and beloved elders, we cordially request the honour of your gracious presence and blessings as Sai Kiran Mohan and Sri Anusha unite in holy matrimony.",
  subText = "May peace, health, boundless joy, and togetherness eternally grace this union.",
}) => {
  return (
    <SectionCard>
      <div className="text-center">
        {/* Top Icon */}
        <Sparkles className="mx-auto mb-3 text-[#9b7430]" size={22} />

        {/* Heading */}
        <h2
          className="text-center text-[24px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#3f2219] sm:text-[28px] md:text-[32px] font-cinzel"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          With Divine Blessings
        </h2>

        {/* Divider */}
        <GoldDivider className="mt-5" />

        {/* Couple Portrait in Ornate Mandap Arch */}
        <div className="mx-auto my-5 max-w-[260px] sm:max-w-[290px] overflow-hidden rounded-t-[140px] rounded-b-2xl border-2 border-[#d4af37]/70 p-1.5 shadow-[0_12px_28px_rgba(77,43,21,0.18)] bg-[#fffdf7]">
          <img
            src="/couple.jpg"
            alt="Sai Kiran Mohan & Sri Anusha"
            className="h-auto w-full rounded-t-[134px] rounded-b-xl object-cover shadow-inner"
            width={682}
            height={1024}
          />
        </div>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-8 text-[#573728] sm:text-[18px]">
          {blessingText}
        </p>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-md text-[14px] font-medium italic leading-7 text-[#8c692d]">
          {subText}
        </p>
      </div>
    </SectionCard>
  );
};
