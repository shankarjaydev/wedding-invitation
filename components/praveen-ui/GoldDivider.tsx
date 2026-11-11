import React from "react";

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-[280px] items-center justify-center gap-2.5 ${className}`}
      aria-hidden="true"
    >
      <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/65 to-[#d4af37]" />
      
      {/* Sacred Traditional Lotus & Diamond Ornament */}
      <span className="flex items-center gap-1.5 text-[#b8860b]">
        <span className="h-1.5 w-1.5 rotate-45 border border-[#d4af37] bg-[#fff8e8]" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#b8860b] drop-shadow-[0_1px_2px_rgba(212,175,55,.4)]" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C12 3 10.5 7.5 7 9C3.5 10.5 2 12.5 2 12.5C2 12.5 6.5 13.5 8 16.5C9.5 19.5 12 21.5 12 21.5C12 21.5 14.5 19.5 16 16.5C17.5 13.5 22 12.5 22 12.5C22 12.5 20.5 10.5 17 9C13.5 7.5 12 3 12 3Z" />
        </svg>
        <span className="h-1.5 w-1.5 rotate-45 border border-[#d4af37] bg-[#fff8e8]" />
      </span>

      <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/65 to-[#d4af37]" />
    </div>
  );
};
