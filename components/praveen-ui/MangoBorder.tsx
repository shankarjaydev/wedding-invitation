"use client";

import React from "react";
import { motion } from "framer-motion";

export const MangoBorder: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const isLeft = side === "left";
  const containerClass = `absolute top-0 ${
    isLeft ? "left-0" : "right-0"
  } z-40 h-full w-[54px] overflow-hidden sm:w-[68px] lg:w-[96px]`;

  return (
    <div className={containerClass} aria-hidden="true">
      {Array.from({ length: 7 }).map((_, t) => (
        <motion.div
          key={`${side}-leaf-${t}`}
          className={`absolute ${
            isLeft ? "-left-12" : "-right-12"
          } h-[120px] w-[64px] origin-center rounded-[82%_10%_82%_10%] bg-[radial-gradient(circle_at_70%_28%,rgba(238,236,157,.28)_0%,transparent_24%),linear-gradient(118deg,#173f27_0%,#2f6f3e_36%,#6f9a58_70%,#b3ac69_100%)] opacity-90 shadow-[inset_-14px_-10px_20px_rgba(14,39,22,.28),inset_12px_8px_16px_rgba(239,241,196,.16),0_14px_32px_rgba(33,22,12,.10)] ring-1 ring-[#d8bd7a]/16 sm:h-[128px] sm:w-[68px] lg:h-[148px] lg:w-[78px]`}
          style={{
            top: `${t * 14 + 2}%`,
            transform: `rotate(${isLeft ? -42 : 42}deg) scale(${t % 2 ? 0.94 : 1})`,
          }}
          animate={{
            rotate: isLeft ? [-43, -38, -43] : [43, 38, 43],
          }}
          transition={{
            duration: 7 + (t % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main Leaf Spine */}
          <div className="absolute left-1/2 top-3 h-[86%] w-[1px] -translate-x-1/2 rounded-full bg-[#e6d58e]/46" />
          {/* Side Veins */}
          <div
            className={`absolute left-1/2 top-8 h-[1px] w-8 origin-left bg-[#e6d58e]/20 ${
              isLeft ? "-rotate-[28deg]" : "rotate-[28deg]"
            }`}
          />
          <div
            className={`absolute left-1/2 top-14 h-[1px] w-9 origin-left bg-[#e6d58e]/18 ${
              isLeft ? "-rotate-[22deg]" : "rotate-[22deg]"
            }`}
          />
          <div
            className={`absolute left-1/2 top-20 h-[1px] w-8 origin-left bg-[#e6d58e]/16 ${
              isLeft ? "-rotate-[18deg]" : "rotate-[18deg]"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

