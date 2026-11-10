"use client";

import React, { useState } from "react";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { MapPin, Navigation, Phone, Copy, Check, Car, Train, Plane } from "lucide-react";

export const VenueMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}, ${WEDDING_DATA.venue.city}, ${WEDDING_DATA.venue.state}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF9E6] via-[#FFFDF5] to-[#FFF3D6] text-stone-900 py-16 sm:py-24 px-4 overflow-hidden border-b-4 border-vedic-gold">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-serif tracking-widest uppercase mb-3 text-amber-900">
            <MapPin className="w-3.5 h-3.5 text-vedic-crimson" />
            <span>Sacred Destination</span>
          </div>

          <h2 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase">
            VENUE &amp; REACHING POLLACHI
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-stone-600 mt-2 max-w-xl mx-auto">
            Surrounded by coconut groves and temple bells, Pollachi welcomes you with pure South Indian warmth.
          </p>
        </div>

        {/* Venue Information Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full inline-block mb-2">
                Mandapam &amp; Banquet
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-vedic-maroon">
                {WEDDING_DATA.venue.name}
              </h3>
              <p className="text-sm text-stone-700 font-serif mt-2 leading-relaxed">
                {WEDDING_DATA.venue.address}, {WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.state}
              </p>
              <p className="text-xs text-amber-900 font-medium italic mt-1">
                Landmark: {WEDDING_DATA.venue.landmark}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={WEDDING_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-vedic-crimson hover:bg-vedic-maroon text-white font-cinzel font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="py-3 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-vedic-maroon border border-amber-300 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Helpdesk */}
            <div className="pt-4 border-t border-amber-100">
              <p className="text-xs font-cinzel font-bold uppercase text-stone-500 mb-2">
                Hospitality &amp; Help Desk
              </p>
              <div className="space-y-1.5 text-xs text-stone-700">
                {WEDDING_DATA.venue.contactPhones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 hover:text-vedic-crimson transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-vedic-crimson" />
                    <span className="font-mono font-medium">{phone}</span>
                    <span className="text-stone-400 text-[10px]">({i === 0 ? "Family Coordinator" : "Travel Desk"})</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Travel Assistance Guide */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-md">
              <h4 className="font-cinzel text-base font-bold text-vedic-maroon mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-vedic-crimson" />
                <span>Travel &amp; Transit Guide</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                  <Plane className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">By Air (Coimbatore International Airport - CJB)</strong>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Approximately 48 km from venue (~1 hour 15 mins drive via NH 83). Taxis and mandapam shuttle cars available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                  <Train className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">By Train (Pollachi Junction - POY &amp; Coimbatore Junction)</strong>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Pollachi Railway Junction is just 3.5 km away (10 mins auto-rickshaw). Regular trains connect from Chennai, Madurai, and Palakkad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                  <Car className="w-5 h-5 text-vedic-crimson shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">By Road &amp; Parking</strong>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Directly on Pollachi Main Road with spacious valet parking for 250+ cars and bus parking bays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mandapam Amenities Pill List */}
            <div className="bg-amber-100/60 rounded-2xl p-4 border border-amber-300/80 flex flex-wrap items-center justify-around gap-2 text-xs font-serif text-amber-950 font-medium">
              <span>✓ Air Conditioned Hall</span>
              <span>•</span>
              <span>✓ Valet Car Parking</span>
              <span>•</span>
              <span>✓ Wheelchair Accessible</span>
              <span>•</span>
              <span>✓ Guest Accommodation Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

