"use client";

import React from "react";
import { motion } from "framer-motion";

export const FallingPetals: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden opacity-80" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, t) => (
        <motion.span
          key={`petal-${t}`}
          className="absolute h-3 w-2 rounded-[70%_10%_70%_10%] bg-[linear-gradient(135deg,rgba(255,202,209,.86)_0%,rgba(230,147,162,.72)_48%,rgba(196,149,70,.48)_100%)] shadow-[0_2px_8px_rgba(155,83,82,.18)]"
          initial={{
            y: -80,
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: 1600,
            x: t % 2 ? [0, 36, -18, 28] : [0, -34, 16, -26],
            rotate: t % 2 ? 280 : -240,
            opacity: [0, 0.85, 0.7, 0],
          }}
          transition={{
            duration: 15 + (t % 8),
            repeat: Infinity,
            delay: t * 0.45,
            ease: "linear",
          }}
          style={{
            left: `${(t * 37 + 9) % 100}%`,
            width: 7 + (t % 4),
            height: 11 + (t % 5),
          }}
        />
      ))}
    </div>
  );
};

