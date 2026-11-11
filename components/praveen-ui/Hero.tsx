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
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.98]);

  const springConfig = { stiffness: 210, damping: 30, mass: 0.18 };
  const smoothY = useSpring(rawY, springConfig);
  const smoothScale = useSpring(rawScale, springConfig);

  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-30 min-h-[105svh] lg:min-h-[980px] flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Sky Background Gradient - Royal Celestial Twilight Sunset to Temple Dusk */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#120516_0%,#28081f_18%,#48112a_36%,#782433_54%,#ad4d2e_72%,#df883f_86%,#f5c76c_95%,#fdf8ee_100%)] pointer-events-none" />

      {/* Sun/Aura Radial Gradients - Divine Halo & Temple Sanctum Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(255,225,140,0.55)_0%,rgba(240,150,40,0.25)_40%,transparent_70%),radial-gradient(circle_at_50%_18%,rgba(255,245,210,0.30)_0%,rgba(245,170,80,0.12)_45%,transparent_75%)] pointer-events-none" />

      {/* Golden Starlight & Celestial Shimmer Dust */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,235,170,.55)_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />

      {/* Floating Golden Temple Deepams / Lanterns */}
      <FloatingLanterns />

      {/* Top Wedding Text Section (Sits cleanly ABOVE the Temple) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-40 mx-auto max-w-3xl px-6 pt-10 sm:pt-14 md:pt-16 pb-4 text-center text-white flex flex-col items-center"
      >
        {/* Soft Royal Amber Glow behind text */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[min(92vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,10,25,.38)_0%,rgba(40,10,25,.18)_50%,transparent_80%)] blur-2xl" />

        {/* Lord Ganesha Invocation Top Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-3 flex items-center justify-center text-[#ffd700] drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-10 h-10 sm:w-12 sm:h-12 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 8C43 8 38 12 37 18C33 19 29 23 29 28C29 34 33 39 37 41C38 46 41 50 45 53C43 56 41 61 41 67C41 74 44 80 50 84C56 80 59 74 59 67C59 61 57 56 55 53C59 50 62 46 63 41C67 39 71 34 71 28C71 23 67 19 63 18C62 12 57 8 50 8ZM50 14C53 14 56 16 57 19C55 20 53 21 51 22C49 21 47 20 43 19C44 16 47 14 50 14ZM35 28C35 25 37 23 39 23C40 26 42 28 44 30C40 31 35 31 35 28ZM65 28C65 31 60 31 56 30C58 28 60 26 61 23C63 23 65 25 65 28ZM50 26C52 26 53 28 53 30C53 34 50 37 50 41C50 37 47 34 47 30C47 28 48 26 50 26Z" />
          </svg>
        </motion.div>

        {/* Auspicious Invocation Lines */}
        <p className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.38em] text-[#ffebad] drop-shadow-[0_2px_10px_rgba(20,5,15,.7)] font-cinzel">
          WITH THE DIVINE BLESSINGS OF OUR FAMILIES
        </p>

        <p className="mt-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-[#fde3a7]/90 drop-shadow-[0_2px_8px_rgba(20,5,15,.6)]">
          WE CORDIALLY INVITE YOU TO CELEBRATE THE WEDDING OF
        </p>

        {/* Groom Name (Sai Kiran Mohan) */}
        <h1
          className="mt-3 text-[46px] xs:text-[54px] sm:text-[70px] md:text-[82px] lg:text-[92px] font-normal leading-tight text-white drop-shadow-[0_4px_24px_rgba(255,215,0,.45),0_6px_22px_rgba(20,5,15,.8)] font-cursive"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {groomName}
        </h1>

        {/* and connector */}
        <div className="my-1 sm:my-1.5 flex items-center justify-center gap-3 w-48 opacity-95">
          <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#ffd700]/70 to-[#ffd700]" />
          <span className="text-[14px] sm:text-[16px] font-serif italic text-[#ffebad] tracking-widest drop-shadow-[0_2px_8px_rgba(20,5,15,.6)]">
            and
          </span>
          <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#ffd700]/70 to-[#ffd700]" />
        </div>

        {/* Bride Name (Sri Anusha) */}
        <h2
          className="text-[46px] xs:text-[54px] sm:text-[70px] md:text-[82px] lg:text-[92px] font-normal leading-tight text-white drop-shadow-[0_4px_24px_rgba(255,215,0,.45),0_6px_22px_rgba(20,5,15,.8)] font-cursive"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {brideName}
        </h2>

        {/* Auspicious Telugu Blessing Word (శుభమస్తు) */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#ffd700]/80" />
          <p
            className="text-[20px] sm:text-[23px] font-bold text-[#ffd700] drop-shadow-[0_0_16px_rgba(255,215,0,.65),0_3px_10px_rgba(20,5,15,.7)] tracking-wider"
            lang="te"
          >
            {blessingWord}
          </p>
          <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#ffd700]/80" />
        </div>
      </motion.div>

      {/* Majestic Golden Temple Gopuram Section (Positioned Below all text) */}
      <motion.div
        style={{ y: smoothY, scale: smoothScale }}
        className="relative z-20 w-full mt-auto flex justify-center will-change-transform transform-gpu -mb-3 sm:-mb-6 lg:-mb-10 pointer-events-none"
      >
        <div className="relative flex w-full justify-center will-change-transform transform-gpu">
          {/* Sacred Golden Surya / Halo behind the Temple Shikhara */}
          <motion.div
            className="absolute left-1/2 top-[5%] h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,225,130,0.55)_0%,rgba(240,150,40,0.28)_45%,transparent_75%)] blur-2xl pointer-events-none"
            animate={{
              opacity: [0.65, 0.95, 0.65],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Sanctum Doorway Beam - Divine light glowing from garbhagriha onto steps */}
          <motion.div
            className="absolute left-1/2 bottom-[10%] h-36 w-32 -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(255,240,160,0.7)_0%,rgba(255,185,50,0.3)_50%,transparent_85%)] blur-lg pointer-events-none"
            animate={{
              opacity: [0.75, 1, 0.75],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* South Indian Golden Temple Gopuram */}
          <img
            src="/assets/temple.png"
            alt="South Indian golden temple gopuram"
            className="relative z-10 h-auto max-h-[48svh] sm:max-h-[52svh] md:max-h-[56svh] lg:max-h-[640px] w-auto max-w-[420px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[720px] object-contain opacity-100 drop-shadow-[0_25px_50px_rgba(15,4,12,.55),0_0_35px_rgba(255,215,0,.2)] will-change-transform transform-gpu pointer-events-auto"
            width="1024"
            height="1536"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Bottom Soft Golden Mist blending into Royal Body */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-32 sm:h-44 bg-gradient-to-t from-[#fdfbf7] via-[#fbf6ec]/80 to-transparent pointer-events-none" />
    </motion.section>
  );
};
