"use client";

import React from "react";
import { motion } from "framer-motion";

export const FallingPetals: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden opacity-85" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, t) => {
        const type = t % 3;
        let bg = "bg-[linear-gradient(135deg,#c41e3a_0%,#8b0000_60%,#4a000d_100%)]"; // Rose
        let shadow = "shadow-[0_2px_8px_rgba(139,0,0,.35)]";
        let width = 8 + (t % 4);
        let height = 12 + (t % 5);
        let rounded = "rounded-[70%_15%_70%_15%]";

        if (type === 1) {
          // Marigold Petal
          bg = "bg-[linear-gradient(135deg,#ffb703_0%,#fb8500_65%,#d45d00_100%)]";
          shadow = "shadow-[0_2px_8px_rgba(251,133,0,.35)]";
          width = 7 + (t % 3);
          height = 14 + (t % 4);
          rounded = "rounded-[60%_20%_60%_20%]";
        } else if (type === 2) {
          // Sacred Golden Akshatha / Jasmine bud
          bg = "bg-[linear-gradient(135deg,#fff8db_0%,#ffd700_70%,#d4af37_100%)]";
          shadow = "shadow-[0_2px_6px_rgba(212,175,55,.45)]";
          width = 5 + (t % 3);
          height = 7 + (t % 3);
          rounded = "rounded-full";
        }

        return (
          <motion.span
            key={`petal-${t}`}
            className={`absolute ${rounded} ${bg} ${shadow}`}
            initial={{
              y: -80,
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: 1700,
              x: t % 2 ? [0, 40, -22, 32] : [0, -38, 20, -30],
              rotate: t % 2 ? 340 : -300,
              opacity: [0, 0.9, 0.75, 0],
            }}
            transition={{
              duration: 14 + (t % 7),
              repeat: Infinity,
              delay: t * 0.4,
              ease: "linear",
            }}
            style={{
              left: `${(t * 31 + 7) % 100}%`,
              width,
              height,
            }}
          />
        );
      })}
    </div>
  );
};
