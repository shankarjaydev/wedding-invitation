"use client";

import React, { useState } from "react";
import { WEDDING_DATA } from "@/data/weddingDetails";
import { GaneshaEmblem, HangingDiya, KolamPattern } from "@/components/SVGs";
import { Send, Copy, Check, Share2, Sparkles, User, Heart, Printer, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PersonalizePage() {
  const [guestName, setGuestName] = useState("Karthik & Family");
  const [relation, setRelation] = useState("Dear Family");
  const [invitationTone, setInvitationTone] = useState<"traditional" | "friendly" | "formal">("traditional");
  const [copied, setCopied] = useState(false);

  // Generate URL
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://saravanan-weds-valli.com";
  const personalizedUrl = `${baseUrl}/?guest=${encodeURIComponent(guestName.trim() || "Guest")}&rel=${encodeURIComponent(relation)}`;

  // WhatsApp Pre-composed Message
  const getWhatsAppMessage = () => {
    if (invitationTone === "traditional") {
      return `🙏 *ஸ்ரீ கணேசாய நமஹ* 🙏\n\nDearest *${guestName}*,\n\nWith the divine blessings of our elders and the grace of the Almighty, we cordially invite you and your family to celebrate the sacred wedding of:\n\n✨ *SARAVANAN weds VALLI* ✨\n\n🗓 *Subamuhurtham:* Thursday, 24th October 2026 (6:00 AM – 7:30 AM)\n🎉 *Grand Reception:* Friday, 25th October 2026 (6:30 PM onwards)\n📍 *Venue:* Sri Padmavathi Thirumana Mandapam, Pollachi, Tamil Nadu\n\nKindly view your personalized digital wedding invitation & details here:\n👉 ${personalizedUrl}\n\nWe warmly await your gracious presence to bless the couple!\n— With warm regards,\n*Smt. Janani & Shri Vijay* &\n*Smt. Shalini & Shri Ajith Kumar*`;
    } else if (invitationTone === "friendly") {
      return `🎉 *We're Getting Married!* 🎉\n\nHey *${guestName}*,\n\nWe would love for you to be part of our big day as we tie the knot!\n\n💍 *Saravanan & Valli*\n🗓 *Dates:* October 24 & 25, 2026\n📍 *Place:* Pollachi, Tamil Nadu\n\nCheck out your personal wedding invite & RSVP:\n👉 ${personalizedUrl}\n\nSee you there with all your smiles! ❤️`;
    } else {
      return `Dear *${guestName}*,\n\nYou are cordially invited to grace the wedding ceremony of *Saravanan & Valli* on October 24 & 25, 2026 at Sri Padmavathi Thirumana Mandapam, Pollachi.\n\nPlease find your digital invitation here:\n${personalizedUrl}\n\nWarm Regards,\nThe Families of Saravanan & Valli`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalizedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#FFFBF0] text-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-crimson text-amber-200 text-xs font-serif tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Host Personalization Studio</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-samarkan font-serif text-3xl sm:text-5xl font-bold tracking-wide text-vedic-maroon uppercase">
            PERSONALIZE GUEST INVITATIONS
          </h1>

          <p className="font-serif italic text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Generate customized invitation links with guest names, pre-composed WhatsApp messages, and downloadable digital invitation cards.
          </p>
        </div>

        {/* Generator Controls & Live Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Controls (Columns 1 to 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl space-y-5">
            <h2 className="font-cinzel text-lg font-bold text-vedic-maroon flex items-center gap-2">
              <User className="w-5 h-5 text-vedic-crimson" />
              <span>Guest Details</span>
            </h2>

            <div>
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Guest / Family Name *
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Suresh Mama & Family, Priya & Anand"
                className="w-full px-4 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-vedic-crimson"
              />
              <span className="text-[11px] text-stone-500 italic mt-1 block">
                This name will be dynamically displayed on the invitation banner.
              </span>
            </div>

            <div>
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Relationship / Tag
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-vedic-crimson"
              >
                <option value="Dear Family">Dear Family</option>
                <option value="Respected Elder">Respected Elder</option>
                <option value="Dear Friend">Dear Friend</option>
                <option value="Beloved Cousin">Beloved Cousin</option>
                <option value="Honored Colleague">Honored Colleague</option>
                <option value="VIP Guest">VIP Guest</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Invitation Tone
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "traditional", label: "Traditional" },
                  { key: "friendly", label: "Warm & Casual" },
                  { key: "formal", label: "Formal" },
                ].map((t) => (
                  <button
                    type="button"
                    key={t.key}
                    onClick={() => setInvitationTone(t.key as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                      invitationTone === t.key
                        ? "bg-vedic-maroon text-amber-200 border-vedic-maroon font-bold shadow-sm"
                        : "bg-amber-50/60 text-stone-700 border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generated Link Box */}
            <div className="pt-2">
              <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Personalized Link
              </label>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 font-mono text-xs text-stone-800 break-all select-all">
                {personalizedUrl}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppShare}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-cinzel font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
              >
                <Share2 className="w-4 h-4" />
                <span>Share via WhatsApp</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full py-2.5 rounded-xl bg-vedic-maroon hover:bg-vedic-crimson text-amber-200 font-cinzel font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Invitation Link</span>
                  </>
                )}
              </button>

              <div className="flex gap-2">
                <Link
                  href={`/?guest=${encodeURIComponent(guestName.trim() || "Guest")}&rel=${encodeURIComponent(relation)}`}
                  target="_blank"
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-amber-50 border border-amber-300 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-vedic-crimson" />
                  <span>Test Link</span>
                </Link>

                <button
                  onClick={handlePrint}
                  className="py-2 px-4 rounded-xl bg-white hover:bg-amber-50 border border-amber-300 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-vedic-crimson" />
                  <span>Print Card</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Card Preview (Columns 6 to 12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-cinzel font-bold tracking-widest uppercase text-stone-500">
                Live Personalized E-Invite Card Preview
              </span>
              <span className="text-xs text-vedic-crimson font-serif font-medium">
                Multi-device Responsive
              </span>
            </div>

            {/* Traditional Digital Wedding Invitation Card */}
            <div className="bg-gradient-to-b from-[#8B0000] via-[#5E0B15] to-[#7B0818] text-white rounded-3xl p-6 sm:p-10 border-4 border-vedic-gold shadow-2xl relative overflow-hidden text-center">
              {/* Background Kolam Ornaments */}
              <div className="absolute top-4 left-4 opacity-20 pointer-events-none">
                <KolamPattern className="text-amber-200" />
              </div>
              <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                <KolamPattern className="text-amber-200" />
              </div>

              {/* Gold border inset */}
              <div className="border border-amber-300/40 rounded-2xl p-6 relative">
                {/* Lord Ganesha Icon */}
                <div className="flex justify-center mb-3">
                  <GaneshaEmblem size={80} />
                </div>

                <p className="font-serif italic text-amber-200 text-xs tracking-widest uppercase mb-2">
                  || ஸ்ரீ கணேசாய நமஹ ||
                </p>

                {/* Personalized Welcome */}
                <div className="bg-white/10 rounded-xl py-2 px-4 inline-block mb-4 border border-amber-300/30">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-300 block">
                    {relation}
                  </span>
                  <span className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                    {guestName || "Respected Guest"}
                  </span>
                </div>

                <p className="font-serif italic text-xs text-amber-100/90 max-w-md mx-auto mb-4 leading-relaxed">
                  With the divine blessings of our ancestors, we warmly invite you and your family to grace the auspicious marriage of
                </p>

                {/* Couple Names */}
                <div className="space-y-1 mb-4">
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-200 tracking-wider">
                    SARAVANAN
                  </h3>
                  <span className="font-serif italic text-sm text-amber-300 font-semibold block">
                    weds
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-200 tracking-wider">
                    VALLI
                  </h3>
                </div>

                {/* Event Highlights */}
                <div className="bg-black/30 rounded-xl p-4 border border-amber-300/20 max-w-md mx-auto text-xs space-y-2 text-amber-100">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="font-bold text-amber-200">Subamuhurtham:</span>
                    <span>Thu, 24th Oct 2026 (6:00 AM – 7:30 AM)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="font-bold text-amber-200">Grand Reception:</span>
                    <span>Fri, 25th Oct 2026 (6:30 PM onwards)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-amber-200">Venue:</span>
                    <span>Sri Padmavathi Mandapam, Pollachi</span>
                  </div>
                </div>

                <p className="font-serif italic text-[11px] text-amber-200/80 mt-4">
                  “Your gracious presence and blessings are our greatest gifts.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

