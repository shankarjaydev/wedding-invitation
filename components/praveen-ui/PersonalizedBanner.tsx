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
      <SectionCard className="text-center bg-[linear-gradient(180deg,#fffaf0_0%,#f5e8cc_100%)] border-2 border-[#c4a15b]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3f2219] text-[#fff8e6] text-[10px] font-semibold tracking-widest uppercase mb-3 font-cinzel">
          <Sparkles size={12} className="text-[#c4a15b]" />
          <span>{relation ? `${relation} • Personal Invitation` : "Personal Invitation"}</span>
          <Sparkles size={12} className="text-[#c4a15b]" />
        </div>

        <h2
          className="text-[26px] sm:text-[32px] font-bold text-[#3f2219] uppercase tracking-wide font-cinzel"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Dearest <span className="underline decoration-[#c4a15b] decoration-2">{guestName}</span>
        </h2>

        <GoldDivider className="my-4" />

        <p className="mx-auto max-w-xl text-[15px] sm:text-[17px] font-medium leading-relaxed text-[#573728]">
          With the divine blessings of our families, we warmly invite you and your family to celebrate the wedding ceremony of <strong>Sai Kiran Mohan &amp; Sri Anusha</strong>.
        </p>
      </SectionCard>
    </div>
  );
};
