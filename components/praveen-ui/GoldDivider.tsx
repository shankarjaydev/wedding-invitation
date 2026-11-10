import React from "react";

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-[260px] items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c4a15b]/70" />
      <span className="h-2 w-2 rotate-45 rounded-[1px] border border-[#c4a15b]/75 bg-[#fff8e8]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c4a15b]/70" />
    </div>
  );
};

