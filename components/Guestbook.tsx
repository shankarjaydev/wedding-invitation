"use client";

import React, { useState, useEffect } from "react";
import { BlessingNote } from "@/types";
import { INITIAL_BLESSINGS } from "@/data/weddingDetails";
import { Heart, Sparkles, MessageCircle, Send } from "lucide-react";

export const Guestbook: React.FC<{
  onTriggerConfetti?: () => void;
}> = ({ onTriggerConfetti }) => {
  const [blessings, setBlessings] = useState<BlessingNote[]>(INITIAL_BLESSINGS);
  const [authorName, setAuthorName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_blessings");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBlessings([...parsed, ...INITIAL_BLESSINGS]);
        }
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const handleLike = (id: string) => {
    if (likedIds[id]) return;
    setLikedIds((prev) => ({ ...prev, [id]: true }));
    setBlessings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
    if (onTriggerConfetti) onTriggerConfetti();
  };

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) return;

    const newNote: BlessingNote = {
      id: "b-" + Date.now(),
      guestName: authorName.trim(),
      relation: relation.trim() || "Well-wisher",
      message: message.trim(),
      timestamp: "Just now",
      likes: 1,
    };

    const updated = [newNote, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem("wedding_blessings", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setAuthorName("");
    setRelation("");
    setMessage("");
    if (onTriggerConfetti) onTriggerConfetti();
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFF8E7] to-[#FFF0D0] text-stone-900 py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-serif tracking-widest uppercase mb-3 text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-vedic-crimson" />
            <span>Sacred Wishes &amp; Blessings</span>
          </div>

          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase">
            COMMUNITY BLESSINGS WALL
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-stone-600 mt-2 max-w-xl mx-auto">
            Leave your warm prayers and heartfelt wishes for Saravanan &amp; Valli.
          </p>
        </div>

        {/* Form to leave quick blessing */}
        <form
          onSubmit={handleAddBlessing}
          className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl max-w-2xl mx-auto mb-12 space-y-4"
        >
          <h3 className="font-cinzel text-base font-bold text-vedic-maroon flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-vedic-crimson" />
            <span>Write a Blessing Note</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Your Name (e.g. Anand Mama)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:ring-1 focus:ring-vedic-crimson"
            />
            <input
              type="text"
              placeholder="Relation (e.g. Friend, Uncle, Cousin)"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:ring-1 focus:ring-vedic-crimson"
            />
          </div>

          <textarea
            required
            rows={2}
            placeholder="Your warm blessings for the couple..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:ring-1 focus:ring-vedic-crimson"
          />

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-vedic-maroon hover:bg-vedic-crimson text-amber-200 font-cinzel text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Post Blessing to Wall</span>
          </button>
        </form>

        {/* Blessings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blessings.map((b) => {
            const isLiked = likedIds[b.id];
            return (
              <div
                key={b.id}
                className="bg-white rounded-2xl p-5 border border-amber-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel font-bold text-sm text-vedic-maroon">
                      {b.guestName}
                    </span>
                    <span className="text-[10px] uppercase font-sans font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      {b.relation}
                    </span>
                  </div>

                  <p className="font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                    &ldquo;{b.message}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-amber-100 text-[11px] text-stone-500">
                  <span>{b.timestamp}</span>

                  <button
                    onClick={() => handleLike(b.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                      isLiked
                        ? "bg-rose-100 text-rose-700 font-bold"
                        : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isLiked ? "fill-rose-600 text-rose-600" : "text-amber-800"
                      }`}
                    />
                    <span>{b.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

