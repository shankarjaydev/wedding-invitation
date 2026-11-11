"use client";

import React from "react";
import { motion } from "framer-motion";

export const MangoBorder: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const isLeft = side === "left";
  const containerClass = `absolute top-0 ${
    isLeft ? "left-0" : "right-0"
  } z-40 h-full w-[54px] overflow-hidden sm:w-[72px] lg:w-[100px] pointer-events-none`;

  return (
    <div className={containerClass} aria-hidden="true">
      {/* Hanging Golden Toran Thread */}
      <div
        className={`absolute top-0 ${
          isLeft ? "left-3 sm:left-4" : "right-3 sm:right-4"
        } h-full w-[2px] bg-gradient-to-b from-[#d4af37] via-[#ffd700]/70 to-[#b8860b]/40`}
      />

      {/* Swaying Mango Leaves with Marigold Flowers & Bells */}
      {Array.from({ length: 8 }).map((_, t) => (
        <React.Fragment key={`${side}-deco-${t}`}>
          {/* Mango Leaf */}
          <motion.div
            className={`absolute ${
              isLeft ? "-left-11 sm:-left-12" : "-right-11 sm:-right-12"
            } h-[126px] w-[66px] origin-center rounded-[84%_10%_84%_10%] bg-[radial-gradient(circle_at_70%_28%,rgba(255,248,180,.32)_0%,transparent_24%),linear-gradient(118deg,#143e24_0%,#2c693a_38%,#63904d_72%,#a8a25c_100%)] opacity-95 shadow-[inset_-12px_-10px_20px_rgba(10,32,18,.35),0_12px_28px_rgba(20,10,5,.15)] ring-1 ring-[#ffd700]/30 sm:h-[136px] sm:w-[72px] lg:h-[156px] lg:w-[82px]`}
            style={{
              top: `${t * 13 + 1}%`,
              transform: `rotate(${isLeft ? -40 : 40}deg) scale(${t % 2 ? 0.95 : 1})`,
            }}
            animate={{
              rotate: isLeft ? [-42, -37, -42] : [42, 37, 42],
            }}
            transition={{
              duration: 7 + (t % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Main Leaf Spine */}
            <div className="absolute left-1/2 top-3 h-[88%] w-[1.5px] -translate-x-1/2 rounded-full bg-[#fde3a7]/50" />
          </motion.div>

          {/* Marigold Flower (Orange & Gold) at stem joint */}
          <div
            className={`absolute ${
              isLeft ? "left-1 sm:left-2" : "right-1 sm:right-2"
            } h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[radial-gradient(circle_at_40%_40%,#ffd700_0%,#ff9f1c_55%,#d84a00_100%)] shadow-[0_2px_8px_rgba(216,74,0,.4)] border border-[#ffd700]/50 z-10`}
            style={{
              top: `${t * 13 + 5}%`,
            }}
          />

          {/* Hanging Brass Temple Bell on every other node */}
          {t % 2 === 1 && (
            <motion.div
              className={`absolute ${
                isLeft ? "left-3 sm:left-4" : "right-3 sm:right-4"
              } z-20 flex flex-col items-center`}
              style={{
                top: `${t * 13 + 8}%`,
              }}
              animate={{
                rotate: isLeft ? [-6, 6, -6] : [6, -6, 6],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="h-4 w-[1px] bg-[#d4af37]" />
              <div className="h-4 w-3.5 sm:h-5 sm:w-4 rounded-t-sm rounded-b-md bg-[radial-gradient(ellipse_at_35%_25%,#fff8db_0%,#ffd700_45%,#b8860b_85%)] shadow-[0_4px_10px_rgba(184,134,11,.45)] border border-[#ffe066]" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
