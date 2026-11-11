"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative z-30 h-full overflow-hidden rounded-[22px] border-2 border-[#d4af37]/65 bg-[linear-gradient(180deg,rgba(255,254,250,.98)_0%,rgba(253,248,238,.97)_50%,rgba(250,242,226,.98)_100%)] p-6 shadow-[0_22px_55px_rgba(56,18,26,.12),0_4px_16px_rgba(212,175,55,.14),inset_0_1px_1px_rgba(255,255,255,.95)] backdrop-blur-md sm:p-7 md:p-9 ${className}`}
    >
      {/* Inner Delicate Gold Filigree Border */}
      <div className="pointer-events-none absolute inset-[9px] rounded-[16px] border border-[#d4af37]/35" />

      {/* Top Gold Foil Shimmer Line */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent shadow-[0_0_8px_rgba(255,215,0,.7)]" />

      {/* 4 Ornate Traditional Gold Corner Brackets */}
      <div className="pointer-events-none absolute left-3.5 top-3.5 h-6 w-6 border-l-2 border-t-2 border-[#c59b27] rounded-tl-sm" />
      <div className="pointer-events-none absolute right-3.5 top-3.5 h-6 w-6 border-r-2 border-t-2 border-[#c59b27] rounded-tr-sm" />
      <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-6 w-6 border-b-2 border-l-2 border-[#c59b27] rounded-bl-sm" />
      <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-6 w-6 border-b-2 border-r-2 border-[#c59b27] rounded-br-sm" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};
