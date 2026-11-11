"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { Sparkles } from "lucide-react";

export const PersonalizedBanner: React.FC = () => {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState<string | null>(null);
  const [relation, setRelation] = useState<string | null>(null);

  useEffect(() => {
    const guest = searchParams?.get("guest") || searchParams?.get("name");
    const rel = searchParams?.get("rel");
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
    if (rel) {
      setRelation(decodeURIComponent(rel));
    }
  }, [searchParams]);

  if (!guestName) {
    return null;
  }

  return (
    <div className="lg:col-span-2">
      <SectionCard className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37] bg-[linear-gradient(90deg,#681d2c_0%,#3d0f19_100%)] text-[#ffebad] text-[11px] font-bold tracking-widest uppercase mb-4 shadow-[0_4px_14px_rgba(104,29,44,.2)] font-cinzel">
          <Sparkles size={13} className="text-[#ffd700]" />
          <span>{relation ? `${relation} • Personal Invitation` : "Personal Invitation"}</span>
          <Sparkles size={13} className="text-[#ffd700]" />
        </div>

        <h2
          className="text-[28px] sm:text-[34px] font-bold text-[#5c1322] uppercase tracking-wide font-cinzel"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Dearest <span className="underline decoration-[#d4af37] decoration-2 underline-offset-4">{guestName}</span>
        </h2>

        <GoldDivider className="my-4" />

        <p className="mx-auto max-w-xl text-[16px] sm:text-[18px] font-medium leading-relaxed text-[#4a101b]">
          With the divine blessings of our families, we warmly invite you and your family to grace and celebrate the wedding ceremony of <strong>Sai Kiran Mohan &amp; Sri Anusha</strong>.
        </p>
      </SectionCard>
    </div>
  );
};
