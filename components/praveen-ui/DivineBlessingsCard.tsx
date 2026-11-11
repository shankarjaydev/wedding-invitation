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
