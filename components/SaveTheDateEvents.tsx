"use client";

import React, { useState, useEffect } from "react";
import { VintageWeddingCar } from "./SVGs";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Calendar, Clock, MapPin, CheckCircle, ExternalLink, Download } from "lucide-react";

export const SaveTheDateEvents: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown to Muhurtham
  useEffect(() => {
    const weddingDate = new Date("2026-10-24T06:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Download .ics calendar event
  const handleDownloadICS = (eventName: string, dateStr: string, location: string) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Saravanan & Valli Wedding//EN
BEGIN:VEVENT
SUMMARY:${eventName} - Saravanan & Valli Wedding
DESCRIPTION:Auspicious wedding ceremony of Saravanan & Valli.
LOCATION:${location}
DTSTART:20261024T003000Z
DTEND:20261024T020000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${eventName.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const muhurtham = WEDDING_DATA.events.find((e) => e.id === "muhurtham")!;
  const reception = WEDDING_DATA.events.find((e) => e.id === "reception")!;

  return (
    <section
      id="events"
      className="relative w-full bg-gradient-to-b from-[#FADBD8] via-[#F5B7B1] to-[#F1948A] text-[#4A1525] py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold"
    >
      {/* Delicate Filigree Borders */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vedic-crimson via-vedic-gold to-vedic-crimson" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main "SAVE THE DATE" Header (Matching Frame 024) */}
        <div className="text-center mb-6">
          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl md:text-6xl text-[#78281F] font-bold tracking-[0.2em] uppercase drop-shadow-sm">
            SAVE THE DATE
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#922B21] mt-1">
            Mark your calendar to celebrate with us in Pollachi
          </p>
        </div>

        {/* Vintage Car Artwork (As shown in center of Frame 024) */}
        <div className="w-full max-w-md mx-auto my-2 transform hover:scale-105 transition-transform duration-500">
          <VintageWeddingCar />
        </div>

        {/* Live Countdown Timer */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/60 shadow-lg max-w-xl mx-auto my-8">
          <p className="text-center font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#78281F] uppercase mb-3">
            Countdown to the Sacred Muhurtham
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {[
              { label: "Days", val: timeLeft.days },
              { label: "Hours", val: timeLeft.hours },
              { label: "Minutes", val: timeLeft.minutes },
              { label: "Seconds", val: timeLeft.seconds },
            ].map((unit, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-white to-amber-50 rounded-xl p-2 sm:p-3 shadow-md border border-amber-200"
              >
                <span className="font-cinzel text-xl sm:text-3xl font-bold text-vedic-crimson block">
                  {String(unit.val).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-amber-900 uppercase tracking-wider block">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Events Layout: Subamuhurtham on Left, Reception on Right (Matching Frame 024) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {/* SUBAMUHURTHAM CARD */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-[#E6B0AA] shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between border-b border-[#E6B0AA] pb-3 mb-4">
              <div>
                <span className="text-[11px] font-sans font-bold tracking-widest text-[#78281F] uppercase bg-amber-100 px-2 py-0.5 rounded">
                  Sacred Vedic Ceremony
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#641E16] mt-1">
                  {muhurtham.name}
                </h3>
              </div>
              <span className="font-serif text-sm font-semibold text-[#922B21]">
                {muhurtham.tamilName}
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#4A1525]">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16] font-serif">{muhurtham.displayDate}</strong>
                  <span className="text-xs text-[#78281F]">Auspicious Muhurtham Day</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16]">{muhurtham.time}</strong>
                  <span className="text-xs text-[#922B21] font-medium">{muhurtham.auspiciousDetails}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16]">{muhurtham.location}</strong>
                  <span className="text-xs text-stone-600">{WEDDING_DATA.venue.address}, {WEDDING_DATA.venue.city}</span>
                </div>
              </div>

              <p className="text-xs text-[#4A1525]/85 italic pt-2 border-t border-rose-200">
                {muhurtham.description}
              </p>
            </div>

            <div className="mt-5 pt-4 flex items-center gap-3">
              <button
                onClick={() => handleDownloadICS("Subamuhurtham", muhurtham.date, muhurtham.location)}
                className="flex-1 py-2 px-3 rounded-lg bg-vedic-crimson hover:bg-vedic-maroon text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Calendar</span>
              </button>
              <a
                href={WEDDING_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-white hover:bg-amber-50 text-vedic-crimson border border-vedic-crimson/30 text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-all"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RECEPTION CARD */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-[#E6B0AA] shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between border-b border-[#E6B0AA] pb-3 mb-4">
              <div>
                <span className="text-[11px] font-sans font-bold tracking-widest text-[#78281F] uppercase bg-amber-100 px-2 py-0.5 rounded">
                  Evening Celebration
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#641E16] mt-1">
                  {reception.name}
                </h3>
              </div>
              <span className="font-serif text-sm font-semibold text-[#922B21]">
                {reception.tamilName}
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#4A1525]">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16] font-serif">{reception.displayDate}</strong>
                  <span className="text-xs text-[#78281F]">Celebration Evening</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16]">{reception.time}</strong>
                  <span className="text-xs text-[#922B21] font-medium">{reception.auspiciousDetails}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vedic-crimson shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#641E16]">{reception.location}</strong>
                  <span className="text-xs text-stone-600">{WEDDING_DATA.venue.address}, {WEDDING_DATA.venue.city}</span>
                </div>
              </div>

              <p className="text-xs text-[#4A1525]/85 italic pt-2 border-t border-rose-200">
                {reception.description}
              </p>
            </div>

            <div className="mt-5 pt-4 flex items-center gap-3">
              <button
                onClick={() => handleDownloadICS("Reception", reception.date, reception.location)}
                className="flex-1 py-2 px-3 rounded-lg bg-vedic-crimson hover:bg-vedic-maroon text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Calendar</span>
              </button>
              <a
                href={WEDDING_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-white hover:bg-amber-50 text-vedic-crimson border border-vedic-crimson/30 text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-all"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Central Venue Highlight Box (Matching Bottom of Frame 024) */}
        <div className="mt-8 text-center bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-amber-300 max-w-xl mx-auto shadow-md">
          <span className="text-xs font-cinzel font-bold tracking-widest text-[#78281F] uppercase block mb-1">
            Marriage Venue
          </span>
          <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#641E16]">
            {WEDDING_DATA.venue.name}
          </h4>
          <p className="text-xs sm:text-sm text-[#78281F] mt-1 font-serif">
            {WEDDING_DATA.venue.address}, {WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.state}
          </p>
          <p className="text-xs text-stone-600 italic mt-0.5">
            Landmark: {WEDDING_DATA.venue.landmark}
          </p>
        </div>
      </div>
    </section>
  );
};

