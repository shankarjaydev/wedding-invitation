"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, VolumeX, Volume2, Sparkles } from "lucide-react";

export const MusicPlayer: React.FC<{
  isPlaying: boolean;
  onToggle: () => void;
}> = ({ isPlaying, onToggle }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mohanam / Kalyani Carnatic Raga scale frequencies (Hz) for Shehnai/Flute melody
  // Sa, Ri2, Ga3, Pa, Dha2, Sa'
  const ragaNotes = [
    261.63, // C4 (Sa)
    293.66, // D4 (Ri)
    329.63, // Ga (G4)
    392.0,  // Pa (G4)
    440.0,  // Dha (A4)
    523.25, // Sa' (C5)
    587.33, // Ri' (D5)
    659.25, // Ga' (E5)
  ];

  // Melodic phrase of South Indian Mangala Vaadhyam
  const melodyScore = [
    { noteIdx: 0, duration: 0.6 },
    { noteIdx: 1, duration: 0.4 },
    { noteIdx: 2, duration: 0.8 },
    { noteIdx: 3, duration: 0.6 },
    { noteIdx: 4, duration: 0.6 },
    { noteIdx: 5, duration: 1.0 },
    { noteIdx: 4, duration: 0.4 },
    { noteIdx: 3, duration: 0.5 },
    { noteIdx: 2, duration: 0.6 },
    { noteIdx: 1, duration: 0.6 },
    { noteIdx: 0, duration: 1.2 },
    { noteIdx: 2, duration: 0.5 },
    { noteIdx: 3, duration: 0.7 },
    { noteIdx: 5, duration: 1.4 },
  ];

  const playNote = (ctx: AudioContext, freq: number, startTime: number, duration: number) => {
    // Shehnai / Flute harmonic synthesis
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);

    // Warm overtone for Indian reed/wind instrument
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    // Envelope
    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, startTime + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.05, startTime + duration * 0.7);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  };

  const playDrone = (ctx: AudioContext) => {
    // Tambura Tanpura drone (Sa & Pa)
    const baseFreq = 130.81; // C3
    const fifthFreq = 196.0;  // G3

    [baseFreq, fifthFreq, baseFreq * 2].forEach((f, i) => {
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = "sine";
      droneOsc.frequency.setValueAtTime(f, ctx.currentTime);

      droneGain.gain.setValueAtTime(0.02 / (i + 1), ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);

      droneOsc.start();
    });
  };

  const scheduleMelodyLoop = (ctx: AudioContext) => {
    if (!isPlayingRef.current) return;

    let timeOffset = ctx.currentTime + 0.1;
    melodyScore.forEach((item) => {
      const freq = ragaNotes[item.noteIdx] || 261.63;
      playNote(ctx, freq, timeOffset, item.duration);
      timeOffset += item.duration + 0.05;
    });

    const totalDuration = (timeOffset - ctx.currentTime) * 1000;
    loopTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelodyLoop(ctx);
      }
    }, totalDuration);
  };

  useEffect(() => {
    isPlayingRef.current = isPlaying;

    if (isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      playDrone(ctx);
      scheduleMelodyLoop(ctx);
    } else {
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    }

    return () => {
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl border-2 transition-all duration-300 ${
          isPlaying
            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-vedic-maroon border-vedic-gold shadow-amber-500/50 scale-105"
            : "bg-vedic-maroon/90 text-amber-200 border-vedic-gold/60 hover:bg-vedic-crimson backdrop-blur-md"
        }`}
        aria-label={isPlaying ? "Mute traditional music" : "Play traditional wedding music"}
      >
        {isPlaying ? (
          <>
            <div className="w-6 h-6 rounded-full bg-vedic-maroon text-amber-300 flex items-center justify-center animate-spin-slow">
              <Music className="w-3.5 h-3.5" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-[11px] font-cinzel font-bold leading-tight">
                Nadaswaram Melody
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-vedic-maroon font-semibold">
                Tap to Mute
              </span>
            </div>
            <Volume2 className="w-4 h-4 text-vedic-maroon animate-pulse" />
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-amber-300" />
            <div className="text-left hidden sm:block">
              <span className="block text-[11px] font-cinzel font-bold leading-tight">
                Play Music
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-amber-200/80">
                Traditional Vaadhyam
              </span>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

