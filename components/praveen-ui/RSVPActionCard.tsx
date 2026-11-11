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
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#fffdf9_0%,#f5e8c4_100%)] text-[#b8860b] shadow-[0_8px_20px_rgba(109,21,37,.1)]">
        <Sparkles size={20} />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[25px] font-bold uppercase leading-tight tracking-[0.08em] text-[#5c1322] sm:text-[29px] md:text-[33px] font-cinzel"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Grace Us With Your Presence
      </h2>

      {/* Divider */}
      <GoldDivider className="mt-4" />

      {/* Text */}
      <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-8 text-[#4a101b] sm:text-[18px]">
        Your gracious presence and heartfelt blessings will make our special day complete and will be cherished for a lifetime.
      </p>

      {/* Confirm on WhatsApp Button */}
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <motion.a
          href={WHATSAPP_CONFIRM_URL}
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border-2 border-[#d4af37] bg-[linear-gradient(180deg,#681d2c_0%,#3d0f19_100%)] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ffebad] shadow-[0_14px_32px_rgba(77,20,30,.28),inset_0_1px_0_rgba(255,215,0,.4)] transition-all duration-300 hover:bg-[#521321] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]/60 cursor-pointer"
          aria-label="Confirm attendance on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Confirm on WhatsApp</span>
        </motion.a>

        {/* Share Invitation Button */}
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#d4af37] bg-[linear-gradient(180deg,#fffdf9_0%,#f5e9ce_100%)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5c1322] shadow-[0_10px_24px_rgba(109,21,37,.12),inset_0_1px_0_rgba(255,255,255,.9)] transition-all duration-300 hover:bg-[#fff9ea] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 cursor-pointer"
          aria-label="Share wedding invitation"
        >
          <Share2 size={16} />
          <span>Share Invitation</span>
        </motion.button>
      </div>

      {shareFeedback && (
        <p className="mt-3 text-[13px] font-semibold text-[#8b0000]">
          {shareFeedback}
        </p>
      )}
    </SectionCard>
  );
};
