"use client";

import React, { Suspense } from "react";
import { RSVPSection } from "@/components/RSVPModal";
import { Guestbook } from "@/components/Guestbook";
import { triggerWeddingConfetti } from "@/components/FlowerShower";
import { useSearchParams } from "next/navigation";

function RSVPContent() {
  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest") || searchParams?.get("name") || "";

  const handleTriggerConfetti = () => {
    triggerWeddingConfetti();
  };

  return (
    <div className="w-full">
      <RSVPSection
        defaultGuestName={guest}
        onTriggerConfetti={handleTriggerConfetti}
      />
      <Guestbook onTriggerConfetti={handleTriggerConfetti} />
    </div>
  );
}

export default function RSVPPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-cinzel text-vedic-maroon">Loading RSVP...</div>}>
      <RSVPContent />
    </Suspense>
  );
}

