"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { FlowerShower, triggerWeddingConfetti } from "@/components/FlowerShower";
import { Footer } from "@/components/Footer";

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [flowerShowerActive, setFlowerShowerActive] = useState(true);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  const handleTriggerConfetti = () => {
    triggerWeddingConfetti();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      {/* Falling Flower Petal Background Canvas */}
      <FlowerShower active={flowerShowerActive} />

      {/* Navigation Bar */}
      <Navbar
        onToggleMusic={toggleMusic}
        isPlayingMusic={isPlayingMusic}
        onTriggerConfetti={handleTriggerConfetti}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Floating Music Synthesizer Player */}
      <MusicPlayer isPlaying={isPlayingMusic} onToggle={toggleMusic} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

