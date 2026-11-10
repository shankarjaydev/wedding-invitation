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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative z-30 h-full overflow-hidden rounded-[18px] border border-[#d1ad5e]/45 bg-[linear-gradient(180deg,rgba(255,252,244,.95)_0%,rgba(247,238,214,.95)_100%)] p-5 shadow-[0_18px_45px_rgba(58,32,24,.11),inset_0_1px_0_rgba(255,255,255,.78)] backdrop-blur-md sm:p-6 md:p-8 ${className}`}
    >
      {/* Inset Border Frame */}
      <div className="pointer-events-none absolute inset-[7px] rounded-[13px] border border-[#7d4d2d]/10" />

      {/* Top Gold Gradient Line */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d8ba6b]/70 to-transparent" />

      {/* 4 Ornate Gold Corner Brackets */}
      <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#c4a15b]/38" />
      <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#c4a15b]/38" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#c4a15b]/28" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#c4a15b]/28" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

