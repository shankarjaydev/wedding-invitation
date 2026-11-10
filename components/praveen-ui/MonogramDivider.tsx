import React from "react";

export const MonogramDivider: React.FC<{ monogram?: string }> = ({ monogram = "S & S" }) => {
  return (
    <div className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-center px-6 pt-7">
      <div className="flex w-full items-center justify-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4a15b]/60 to-[#c4a15b]/25" />
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-[#b99145]/70 bg-[#fff8e8] shadow-[0_0_18px_rgba(196,161,91,.22)]" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b99145]/70 bg-[#fff8e8] text-[11px] font-semibold tracking-[0.16em] text-[#7d5529] shadow-[0_10px_24px_rgba(71,43,17,.12)]">
          {monogram}
        </span>
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-[#b99145]/70 bg-[#fff8e8] shadow-[0_0_18px_rgba(196,161,91,.22)]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c4a15b]/60 to-[#c4a15b]/25" />
      </div>
    </div>
  );
};
