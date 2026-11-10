"use client";

import React from "react";
import { motion } from "framer-motion";

const LANTERNS = [
  { left: "7%", top: "6%", size: 42, delay: 0 },
  { left: "72%", top: "5%", size: 50, delay: 0.5 },
  { left: "18%", top: "25%", size: 34, delay: 1.1 },
  { left: "83%", top: "28%", size: 38, delay: 0.7 },
  { left: "45%", top: "12%", size: 30, delay: 1.4 },
];

export const FloatingLanterns: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {LANTERNS.map((lantern, idx) => (
        <motion.div
          key={`lantern-${idx}`}
          className="absolute rounded-[48%] bg-[radial-gradient(circle_at_52%_54%,#fff5b8_0%,#ffe3a7_23%,#eaa0c7_57%,#d992bd_78%,rgba(217,146,189,.18)_100%)] opacity-80 shadow-[0_0_18px_rgba(255,220,164,.58),0_0_34px_rgba(223,147,192,.34)] blur-[0.2px]"
          style={{
            left: lantern.left,
            top: lantern.top,
            width: lantern.size,
            height: lantern.size * 1.25,
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [-3, 4, -3],
            opacity: [0.65, 0.88, 0.65],
          }}
          transition={{
            duration: 5.5,
            delay: lantern.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

