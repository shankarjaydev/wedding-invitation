"use client";

import React from "react";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { Calendar, Clock, MapPin, Sparkles, Download, ExternalLink, Heart, Compass } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
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

  const rituals = [
    {
      title: "Mangalya Dharanam (மாங்கல்ய தாரணம்)",
      time: "6:45 AM (Auspicious Muhurtham)",
      desc: "The sacred tying of the Thirumangalyam (Thaali) around the bride's neck with three knots, symbolizing loyalty, devotion, and celestial union, to the divine crescendo of the Nadaswaram Ketti Melam.",
    },
    {
      title: "Kanyadaanam (கன்யாதானம்)",
      time: "6:15 AM",
      desc: "The bride's parents bestow their daughter's hand to the groom, seeking divine blessings with sacred water and coconut.",
    },
    {
      title: "Sapthapadi (சப்தபதி)",
      time: "7:00 AM",
      desc: "The seven sacred steps taken together around the holy Agni fire, exchanging seven eternal vows of friendship, nourishment, strength, and love.",
    },
    {
      title: "Ammi Midithal & Arundhati (அம்மி மிதித்தல்)",
      time: "7:20 AM",
      desc: "The groom places the bride's toe on a sacred grinding stone to symbolize unwavering rock-solid fidelity, followed by gazing at the celestial Arundhati star.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFBF0] text-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-crimson text-amber-200 text-xs font-serif tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auspicious Schedule &amp; Muhurtham</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase">
            WEDDING ITINERARY &amp; RITUALS
          </h1>

          <p className="font-serif italic text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            We rejoice in inviting you to all the sacred ceremonies celebrating the eternal union of Saravanan and Valli.
          </p>
        </div>

        {/* Vedic Panchangam Auspicious Details Banner */}
        <div className="bg-gradient-to-r from-vedic-crimson via-vedic-maroon to-vedic-crimson text-white rounded-2xl p-6 sm:p-8 border-2 border-vedic-gold shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-vedic-gold text-vedic-maroon px-2.5 py-0.5 rounded-full inline-block">
              Vedic Panchangam
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-200">
              Thursday, 24th October 2026 (Tamil Month: Aippasi)
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 font-serif leading-relaxed">
              <strong>Nakshatram:</strong> Swati Nakshatram • <strong>Lagnam:</strong> Tula Lagnam (Auspicious Dawn) • <strong>Tithi:</strong> Sukla Paksha Trayodashi
            </p>
          </div>

          <div className="shrink-0 text-center bg-white/10 rounded-xl p-4 border border-amber-300/40">
            <span className="block text-xs uppercase font-serif text-amber-200">Sacred Muhurtham Hour</span>
            <span className="font-cinzel text-2xl font-bold text-vedic-gold">6:00 AM – 7:30 AM</span>
            <span className="block text-[11px] text-amber-100 italic mt-0.5">Please arrive by 5:45 AM</span>
          </div>
        </div>

        {/* Chronological Event Cards */}
        <div className="space-y-8">
          {WEDDING_DATA.events.map((event, idx) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-100 pb-4 mb-5">
                <div>
                  <span className="text-xs font-bold tracking-wider text-vedic-crimson uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Ceremony {idx + 1}
                  </span>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-vedic-maroon mt-2">
                    {event.name}
                  </h2>
                </div>
                <span className="font-serif text-base font-semibold text-vedic-crimson">
                  {event.tamilName}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
                  <Calendar className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-medium text-stone-500">Date</span>
                    <strong className="block text-stone-900 font-serif text-sm">{event.displayDate}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
                  <Clock className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-medium text-stone-500">Timings</span>
                    <strong className="block text-stone-900 text-sm">{event.time}</strong>
                    <span className="text-[11px] text-vedic-crimson">{event.auspiciousDetails}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
                  <MapPin className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-medium text-stone-500">Location</span>
                    <strong className="block text-stone-900 text-sm">{event.location}</strong>
                    <span className="text-[11px] text-stone-500">Pollachi, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              <p className="font-serif text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2 text-xs text-amber-900 font-serif">
                  <Sparkles className="w-4 h-4 text-vedic-crimson" />
                  <span>Attire Suggestion: <strong>{event.attire}</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDownloadICS(event.name, event.date, event.location)}
                    className="py-2 px-4 rounded-xl bg-vedic-maroon hover:bg-vedic-crimson text-amber-200 text-xs font-cinzel font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Add to Calendar</span>
                  </button>

                  <a
                    href={WEDDING_DATA.venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-xl bg-white hover:bg-amber-50 text-vedic-maroon border border-amber-300 text-xs font-cinzel font-bold tracking-wider uppercase flex items-center gap-1 transition-all"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Vedic Muhurtham Rituals Step-by-Step */}
        <div className="bg-amber-50/80 rounded-3xl p-6 sm:p-10 border-2 border-amber-200">
          <div className="text-center mb-8">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-vedic-maroon">
              Sacred Muhurtham Vedic Rituals
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
              A deeper look into the timeless ceremonies performed during the wedding dawn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rituals.map((r, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel font-bold text-sm text-vedic-maroon">{r.title}</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono font-semibold">
                    {r.time}
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-serif leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <Link
            href="/rsvp"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-vedic-crimson hover:bg-vedic-maroon text-amber-200 font-cinzel font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Confirm Your Attendance (RSVP)</span>
            <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

