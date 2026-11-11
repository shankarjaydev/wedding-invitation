"use client";

import React from "react";
import { motion } from "framer-motion";

const DEEPAMS = [
  { left: "6%", top: "7%", size: 36, delay: 0 },
  { left: "76%", top: "6%", size: 44, delay: 0.6 },
  { left: "15%", top: "26%", size: 28, delay: 1.2 },
  { left: "84%", top: "24%", size: 34, delay: 0.8 },
  { left: "48%", top: "11%", size: 26, delay: 1.5 },
  { left: "26%", top: "35%", size: 22, delay: 2.1 },
  { left: "70%", top: "34%", size: 24, delay: 1.8 },
];

export const FloatingLanterns: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {DEEPAMS.map((item, idx) => (
        <motion.div
          key={`deepam-${idx}`}
          className="absolute flex items-center justify-center"
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size * 1.35,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, idx % 2 === 0 ? 8 : -8, 0],
            rotate: [-4, 4, -4],
            opacity: [0.75, 0.98, 0.75],
          }}
          transition={{
            duration: 6 + (idx % 3),
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer Golden Aura Glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,235,160,0.85)_0%,rgba(255,180,40,0.55)_40%,rgba(212,120,20,0.2)_70%,transparent_100%)] blur-[2px] shadow-[0_0_24px_rgba(255,215,0,0.7)]" />

          {/* Inner Sacred Flame Core */}
          <div className="relative h-2/3 w-1/2 rounded-[50%_50%_35%_35%] bg-[radial-gradient(circle_at_50%_30%,#ffffff_0%,#fff2a8_45%,#f59e0b_85%)] shadow-[0_0_12px_#ffedd5]" />
        </motion.div>
      ))}
    </div>
  );
};
