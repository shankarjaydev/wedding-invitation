"use client";

import React, { useState } from "react";
import { SectionCard } from "./SectionCard";
import { GoldDivider } from "./GoldDivider";
import { MessageCircle, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_CONFIRM_URL =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "Hi Sai Kiran & Sri Anusha, We are delighted to join your wedding celebration on 22nd November at Madhura Banquet Hall, KPHB! Looking forward to blessing you both."
  );

const INVITATION_SHARE_TEXT = `🌸 Wedding Invitation 🌸

We cordially invite you and your family to celebrate the wedding of

💕 Sai Kiran Mohan & Sri Anusha

📅 Sunday, 22nd November 2026
🕚 Muhurtham – 11:17 AM
📍 Madhura Banquet Hall, Flats 150/151, Vijetha Supermarket, 4th floor, 9th phase, KPHB, Hyderabad

✨ Tap the link below to open our digital wedding invitation with all event & venue details ✨
`;

export const RSVPActionCard: React.FC = () => {
  const [shareFeedback, setShareFeedback] = useState("");

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const fullText = `${INVITATION_SHARE_TEXT}\n${shareUrl}`;

    const shareData = {
      title: "Sai Kiran Mohan & Sri Anusha Wedding Invitation",
      text: fullText,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareFeedback("");
        return;
      }
      await navigator.clipboard.writeText(fullText);
      setShareFeedback("Invitation message copied to clipboard!");
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        setShareFeedback("Share from your browser menu");
      }
    }
  };

  return (
    <SectionCard className="text-center lg:col-span-2">
      {/* Icon */}
      <Sparkles className="mx-auto mb-3 text-[#8b682e]" size={22} />

      {/* Heading */}
      <h2
        className="text-center text-[24px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#3f2219] sm:text-[28px] md:text-[32px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Grace Us With Your Presence
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-5" />

      {/* Text */}
      <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-8 text-[#573728] sm:text-[18px]">
        Your gracious presence and heartfelt blessings will make our special day complete and will be cherished for a lifetime.
      </p>

      {/* Confirm on WhatsApp Button */}
      <motion.a
        href={WHATSAPP_CONFIRM_URL}
        target="_blank"
        rel="noreferrer"
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.03 }}
        className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c7a158] bg-[#291410] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#fff8e6] shadow-[0_15px_34px_rgba(41,20,16,.24),inset_0_1px_0_rgba(255,255,255,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a1c16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a158]/55 cursor-pointer"
        aria-label="Confirm attendance on WhatsApp"
      >
        <MessageCircle size={18} />
        <span>Confirm on WhatsApp</span>
      </motion.a>

      {/* Share Invitation Button & Status */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9aa63]/60 bg-[#fff9ed]/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4b2f21] shadow-[0_10px_22px_rgba(71,43,17,.10),inset_0_1px_0_rgba(255,255,255,.72)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a57e37] hover:bg-[#fff5df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68a3a]/45 cursor-pointer"
          aria-label="Share wedding invitation"
        >
          <Share2 size={15} />
          <span>Share Invitation</span>
        </button>

        {shareFeedback && (
          <p className="mt-2 text-[12px] font-medium text-[#573728]/70">
            {shareFeedback}
          </p>
        )}
      </div>
    </SectionCard>
  );
};
