"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Calendar, Heart, MessageSquare, Send, Menu, X, Music, VolumeX, Share2 } from "lucide-react";

export const Navbar: React.FC<{
  onToggleMusic?: () => void;
  isPlayingMusic?: boolean;
  onTriggerConfetti?: () => void;
}> = ({ onToggleMusic, isPlayingMusic = false, onTriggerConfetti }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Invitation", icon: Heart },
    { href: "/events", label: "Auspicious Events", icon: Calendar },
    { href: "/story", label: "Our Story", icon: Sparkles },
    { href: "/rsvp", label: "RSVP & Blessings", icon: MessageSquare },
    { href: "/generate", label: "Personalize Link", icon: Send },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Saravanan & Valli Wedding Invitation",
          text: "You are cordially invited to celebrate the wedding of Saravanan & Valli!",
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Invitation link copied to clipboard!");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-vedic-crimson via-vedic-maroon to-vedic-crimson text-white shadow-xl border-b-2 border-vedic-gold/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Couple Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-vedic-gold flex items-center justify-center bg-vedic-maroon/80 shadow-md group-hover:scale-105 transition-transform">
              <span className="font-cinzel text-vedic-gold font-bold text-sm sm:text-base tracking-wider">
                S &amp; V
              </span>
            </div>
            <div>
              <span className="font-cinzel text-base sm:text-xl font-bold tracking-widest text-vedic-gold block">
                SARAVANAN &amp; VALLI
              </span>
              <span className="text-[10px] sm:text-xs text-amber-200/80 tracking-widest uppercase block -mt-0.5">
                Kalyana Vaibhogam • 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-vedic-gold text-vedic-maroon font-bold shadow-md shadow-vedic-gold/30"
                      : "text-amber-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Music Toggle */}
            {onToggleMusic && (
              <button
                onClick={onToggleMusic}
                aria-label={isPlayingMusic ? "Mute traditional music" : "Play traditional music"}
                className={`p-2 sm:px-3 sm:py-2 rounded-full flex items-center gap-1.5 text-xs font-medium border transition-all ${
                  isPlayingMusic
                    ? "bg-amber-400 text-vedic-maroon border-amber-300 shadow-md animate-pulse"
                    : "bg-white/10 text-amber-200 border-vedic-gold/40 hover:bg-white/20"
                }`}
                title={isPlayingMusic ? "Music playing (Click to mute)" : "Play traditional Nadaswaram music"}
              >
                {isPlayingMusic ? (
                  <>
                    <Music className="w-4 h-4 text-vedic-maroon animate-spin-slow" />
                    <span className="hidden sm:inline">Playing</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="hidden sm:inline">Music</span>
                  </>
                )}
              </button>
            )}

            {/* Confetti Petal Shower button */}
            {onTriggerConfetti && (
              <button
                onClick={onTriggerConfetti}
                className="p-2 sm:px-3 sm:py-2 rounded-full bg-vedic-gold/20 hover:bg-vedic-gold/30 text-amber-200 border border-vedic-gold/50 text-xs flex items-center gap-1.5 transition-all active:scale-95"
                title="Shower Rose & Marigold Petals"
              >
                <Sparkles className="w-4 h-4 text-vedic-gold" />
                <span className="hidden sm:inline">Bless</span>
              </button>
            )}

            {/* Share Invitation */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-vedic-gold/30 text-xs transition-all active:scale-95"
              title="Share this invitation"
              aria-label="Share invitation"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-amber-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-vedic-maroon/95 border-b border-vedic-gold/40 px-4 pt-2 pb-5 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-vedic-gold text-vedic-maroon font-bold"
                    : "text-amber-100 hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

