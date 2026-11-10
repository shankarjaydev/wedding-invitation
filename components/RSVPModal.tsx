"use client";

import React, { useState, useEffect } from "react";
import { RSVPSubmission } from "@/types";
import { CheckCircle2, Heart, Send, Sparkles, User, Phone, Users } from "lucide-react";

export const RSVPSection: React.FC<{
  onTriggerConfetti?: () => void;
  defaultGuestName?: string;
}> = ({ onTriggerConfetti, defaultGuestName = "" }) => {
  const [name, setName] = useState(defaultGuestName);
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "maybe">("yes");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [events, setEvents] = useState<string[]>(["muhurtham", "reception"]);
  const [dietary, setDietary] = useState<"traditional-veg" | "jain" | "standard">("traditional-veg");
  const [blessingMessage, setBlessingMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultGuestName) {
      setName(defaultGuestName);
    }
  }, [defaultGuestName]);

  const toggleEvent = (id: string) => {
    if (events.includes(id)) {
      setEvents(events.filter((e) => e !== id));
    } else {
      setEvents([...events, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const submission: RSVPSubmission = {
      id: "rsvp-" + Date.now(),
      name,
      phone,
      attending,
      guestCount: attending === "yes" ? guestCount : 0,
      events,
      dietaryPreference: dietary,
      blessingMessage,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
      existing.unshift(submission);
      localStorage.setItem("wedding_rsvps", JSON.stringify(existing));

      // Also add to guestbook if message is provided
      if (blessingMessage.trim()) {
        const blessings = JSON.parse(localStorage.getItem("wedding_blessings") || "[]");
        blessings.unshift({
          id: "b-" + Date.now(),
          guestName: name,
          relation: "Dear Guest",
          message: blessingMessage,
          timestamp: "Just now",
          likes: 1,
        });
        localStorage.setItem("wedding_blessings", JSON.stringify(blessings));
      }
    } catch {
      // Storage error fallback
    }

    setSubmitted(true);
    if (onTriggerConfetti) {
      onTriggerConfetti();
    }
  };

  return (
    <section id="rsvp" className="relative w-full bg-gradient-to-b from-[#8B0000] via-[#5E0B15] to-[#40070E] text-white py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-amber-300/30 text-amber-200 text-xs font-serif tracking-widest uppercase mb-3">
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Celebrate With Us</span>
          </div>

          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-amber-200 uppercase">
            RSVP &amp; ATTENDANCE
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-amber-100/90 mt-2 max-w-xl mx-auto">
            Your gracious presence will fill our hearts with joy. Kindly let us know if you can make it by October 10th, 2026.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-vedic-gold text-center space-y-4 shadow-2xl animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-vedic-gold text-vedic-maroon mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-200">
              Nandri &amp; Thank You, {name}!
            </h3>

            <p className="font-serif text-amber-100 text-sm sm:text-base max-w-lg mx-auto">
              {attending === "yes"
                ? `We are overjoyed that you and your family (${guestCount} guests) will be joining us to bless Saravanan & Valli!`
                : "Thank you for letting us know and sending your heartfelt blessings to Saravanan & Valli."}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-cinzel font-bold tracking-wider uppercase transition-all"
              >
                Update Response
              </button>
              {onTriggerConfetti && (
                <button
                  onClick={onTriggerConfetti}
                  className="px-6 py-2.5 rounded-full bg-vedic-gold text-vedic-maroon text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bless Again</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-amber-300/40 shadow-2xl space-y-6"
          >
            {/* Guest Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-amber-300 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh & Family"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/30 border border-amber-300/40 text-white placeholder-amber-200/40 text-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                  WhatsApp / Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-amber-300 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/30 border border-amber-300/40 text-white placeholder-amber-200/40 text-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold"
                  />
                </div>
              </div>
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-2">
                Will you be gracing the occasion? *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "yes", label: "Joyfully Attending", sub: "Yes, count us in!" },
                  { key: "maybe", label: "Tentative", sub: "Will confirm soon" },
                  { key: "no", label: "Sending Blessings", sub: "Regretfully decline" },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.key}
                    onClick={() => setAttending(opt.key as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      attending === opt.key
                        ? "bg-vedic-gold text-vedic-maroon border-vedic-gold font-bold shadow-md"
                        : "bg-black/25 text-amber-100 border-amber-300/30 hover:bg-black/40"
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-cinzel font-bold">{opt.label}</span>
                    <span className="block text-[10px] opacity-80 mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {attending !== "no" && (
              <>
                {/* Number of Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                      Number of Guests Attending
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-amber-300 absolute left-3 top-3.5 pointer-events-none" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/30 border border-amber-300/40 text-white text-sm focus:outline-none focus:border-vedic-gold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n} className="bg-vedic-maroon text-white">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                      Dietary Preference
                    </label>
                    <select
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-amber-300/40 text-white text-sm focus:outline-none focus:border-vedic-gold"
                    >
                      <option value="traditional-veg" className="bg-vedic-maroon text-white">
                        Traditional South Indian Vegetarian
                      </option>
                      <option value="jain" className="bg-vedic-maroon text-white">
                        Jain Vegetarian (No Onion / Garlic)
                      </option>
                      <option value="standard" className="bg-vedic-maroon text-white">
                        No Special Preference
                      </option>
                    </select>
                  </div>
                </div>

                {/* Events Attending */}
                <div>
                  <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-2">
                    Events You Plan to Attend
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "muhurtham", name: "Subamuhurtham (Oct 24 Dawn)" },
                      { id: "nalangu", name: "Nalangu & Oonjal (Oct 24 Afternoon)" },
                      { id: "reception", name: "Grand Reception (Oct 25 Evening)" },
                    ].map((ev) => {
                      const selected = events.includes(ev.id);
                      return (
                        <button
                          type="button"
                          key={ev.id}
                          onClick={() => toggleEvent(ev.id)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-serif font-medium border flex items-center gap-2 transition-all ${
                            selected
                              ? "bg-amber-400 text-vedic-maroon border-amber-300 font-bold"
                              : "bg-black/20 text-amber-100 border-amber-200/30 hover:bg-black/40"
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[10px] ${
                              selected ? "bg-vedic-crimson text-white" : "border border-amber-200"
                            }`}
                          >
                            {selected ? "✓" : ""}
                          </span>
                          <span>{ev.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Blessings Message */}
            <div>
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                Send Heartfelt Blessings to Saravanan &amp; Valli
              </label>
              <textarea
                rows={3}
                value={blessingMessage}
                onChange={(e) => setBlessingMessage(e.target.value)}
                placeholder="Share your warmest prayers, advice, or blessings for the lovely couple..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-amber-300/40 text-white placeholder-amber-200/40 text-sm focus:outline-none focus:border-vedic-gold"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-vedic-gold via-yellow-300 to-vedic-gold text-vedic-maroon font-cinzel font-bold text-sm tracking-[0.15em] uppercase shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm RSVP &amp; Send Blessings</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

