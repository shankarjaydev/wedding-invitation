"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, Sparkles, Send } from "lucide-react";
import Link from "next/link";

export const PersonalizedGreeting: React.FC<{
  onTriggerConfetti?: () => void;
}> = ({ onTriggerConfetti }) => {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState<string | null>(null);
  const [relation, setRelation] = useState<string | null>(null);

  useEffect(() => {
    const guest = searchParams?.get("guest") || searchParams?.get("name");
    const rel = searchParams?.get("rel");
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
    if (rel) {
      setRelation(decodeURIComponent(rel));
    }
  }, [searchParams]);

  if (!guestName) {
    return (
      <div className="bg-amber-100/80 border-b border-amber-300 py-2 px-4 text-center text-xs text-amber-900 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-spin-slow" />
        <span>Hosting this event? You can create personalized invite links for individual guests:</span>
        <Link
          href="/generate"
          className="font-bold underline text-vedic-crimson hover:text-vedic-maroon flex items-center gap-1"
        >
          <span>Personalize Link</span>
          <Send className="w-3 h-3" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-vedic-crimson via-vedic-maroon to-vedic-crimson text-white py-4 px-4 sm:px-6 shadow-lg border-b-2 border-vedic-gold relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-vedic-gold text-vedic-maroon">
              {relation ? `${relation} • Honored Guest` : "Honored Guest"}
            </span>
            <span className="text-amber-200 text-xs italic">A Personal Invitation</span>
          </div>

          <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-amber-200 tracking-wide">
            Dearest <span className="text-white underline decoration-vedic-gold decoration-2 underline-offset-4">{guestName}</span>,
          </h2>

          <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl leading-relaxed">
            With the divine blessings of our ancestors and family, we warmly welcome you and your family to grace the sacred wedding of <strong>Saravanan &amp; Valli</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {onTriggerConfetti && (
            <button
              onClick={onTriggerConfetti}
              className="px-4 py-2 rounded-full bg-vedic-gold hover:bg-amber-300 text-vedic-maroon font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-vedic-crimson text-vedic-crimson" />
              <span>Send Blessings</span>
            </button>
          )}

          <Link
            href="/rsvp"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-vedic-gold/40 text-xs font-semibold tracking-wide transition-all"
          >
            RSVP Now
          </Link>
        </div>
      </div>
    </div>
  );
};

