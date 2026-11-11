import React from "react";

export const MonogramDivider: React.FC<{ monogram?: string }> = ({ monogram = "S & S" }) => {
  return (
    <div className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-center px-6 pt-7">
      <div className="flex w-full items-center justify-center gap-3">
        <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#d4af37]/30" />
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border-2 border-[#b8860b] bg-[#fffaf0] shadow-[0_0_12px_rgba(212,175,55,.35)]" />
        
        {/* Royal Burgundy & Gold Monogram Seal */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[radial-gradient(circle_at_35%_35%,#681d2c_0%,#3d0f19_100%)] text-[12px] font-bold tracking-[0.2em] text-[#ffebad] shadow-[0_12px_28px_rgba(61,15,25,.24),inset_0_1px_1px_rgba(255,215,0,.6)] font-cinzel">
          {monogram}
        </span>

        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border-2 border-[#b8860b] bg-[#fffaf0] shadow-[0_0_12px_rgba(212,175,55,.35)]" />
        <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#d4af37]/30" />
      </div>
    </div>
  );
};
