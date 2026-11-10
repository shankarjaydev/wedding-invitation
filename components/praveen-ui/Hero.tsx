"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FloatingLanterns } from "./FloatingLanterns";

export interface HeroProps {
  brideName?: string;
  groomName?: string;
  subtitle?: string;
  blessingWord?: string;
}

export const Hero: React.FC<HeroProps> = ({
  brideName = "Sri Anusha",
  groomName = "Sai Kiran Mohan",
  subtitle = "With the divine blessings of our families, we cordially invite you to celebrate the wedding of",
  blessingWord = "శుభమస్తు",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax calculations
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.98]);

  const springConfig = { stiffness: 210, damping: 30, mass: 0.18 };
  const smoothY = useSpring(rawY, springConfig);
  const smoothScale = useSpring(rawScale, springConfig);

  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative z-30 min-h-[105svh] lg:min-h-[960px] flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Sky Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#3ba7ee_0%,#71bddd_46%,#e4e3e2_100%)] pointer-events-none" />

      {/* Sun/Aura Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_18%,rgba(255,255,255,.38),transparent_28%),radial-gradient(circle_at_74%_17%,rgba(255,214,190,.2),transparent_26%),linear-gradient(180deg,rgba(58,125,169,.05)_0%,transparent_42%,rgba(245,237,217,.88)_100%)] pointer-events-none" />

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:44px_44px] pointer-events-none" />

      {/* Floating Lanterns in Sky */}
      <FloatingLanterns />

      {/* Top Wedding Text Section (Always sits clearly above the Temple) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-40 mx-auto max-w-3xl px-6 pt-10 sm:pt-14 md:pt-16 pb-4 text-center text-white flex flex-col items-center"
      >
        {/* Soft Radial Glow behind text */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260px] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(28,46,58,.24)_0%,rgba(28,46,58,.10)_45%,transparent_75%)] blur-xl" />

        {/* Auspicious Invocation Lines */}
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.34em] text-white/95 drop-shadow-[0_2px_8px_rgba(28,43,54,.5)] font-cinzel">
          WITH THE DIVINE BLESSINGS OF OUR FAMILIES
        </p>

        <p className="mt-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_2px_6px_rgba(28,43,54,.4)]">
          WE CORDIALLY INVITE YOU TO CELEBRATE THE WEDDING OF
        </p>

        {/* Groom Name (Sai Kiran Mohan) */}
        <h1
          className="mt-3 text-[44px] xs:text-[52px] sm:text-[68px] md:text-[78px] lg:text-[88px] font-normal leading-tight text-white drop-shadow-[0_6px_20px_rgba(24,35,44,.6),0_0_16px_rgba(255,255,255,.3)] font-cursive"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {groomName}
        </h1>

        {/* and connector */}
        <div className="my-0.5 sm:my-1 flex items-center justify-center gap-3 w-40 opacity-90">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/70" />
          <span className="text-[13px] sm:text-[15px] font-serif italic text-white tracking-widest drop-shadow-[0_2px_6px_rgba(28,43,54,.4)]">
            and
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/70" />
        </div>

        {/* Bride Name (Sri Anusha) */}
        <h2
          className="text-[44px] xs:text-[52px] sm:text-[68px] md:text-[78px] lg:text-[88px] font-normal leading-tight text-white drop-shadow-[0_6px_20px_rgba(24,35,44,.6),0_0_16px_rgba(255,255,255,.3)] font-cursive"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {brideName}
        </h2>

        {/* Auspicious Telugu Blessing Word (శుభమస్తు) */}
        <p
          className="mt-3 text-[18px] sm:text-[21px] font-semibold text-white/95 drop-shadow-[0_3px_10px_rgba(18,29,38,.6)] tracking-wide"
          lang="te"
        >
          {blessingWord}
        </p>
      </motion.div>

      {/* Temple Gopuram Section (Cleanly positioned BELOW the text) */}
      <motion.div
        style={{ y: smoothY, scale: smoothScale }}
        className="relative z-20 w-full mt-auto flex justify-center will-change-transform transform-gpu -mb-4 sm:-mb-8 lg:-mb-12 pointer-events-none"
      >
        <div className="relative flex w-full justify-center will-change-transform transform-gpu">
          {/* Radiant Aura behind the temple */}
          <motion.div
            className="absolute left-1/2 top-[10%] h-56 w-56 -translate-x-1/2 rounded-full bg-[#f4cf96]/20 blur-3xl pointer-events-none"
            animate={{
              opacity: [0.35, 0.6, 0.35],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* South Indian Temple Gopuram - Sized and positioned below all text */}
          <img
            src="/assets/temple.png"
            alt="South Indian temple gopuram"
            className="relative z-10 h-auto max-h-[46svh] sm:max-h-[50svh] md:max-h-[54svh] lg:max-h-[620px] w-auto max-w-[440px] sm:max-w-[560px] md:max-w-[660px] lg:max-w-[760px] object-contain opacity-100 drop-shadow-[0_25px_42px_rgba(19,13,8,.38)] will-change-transform transform-gpu pointer-events-auto"
            width="2772"
            height="3508"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Bottom Fade Gradient into Royal Page Body */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-32 sm:h-40 bg-gradient-to-t from-[#f5edd9] via-[#f2ead4]/80 to-transparent pointer-events-none" />
    </motion.section>
  );
};
