import React from "react";

// Hanging Brass Diya Lamp with chain and animated flame
export const HangingDiya: React.FC<{
  className?: string;
  chainHeight?: number;
  glow?: boolean;
}> = ({ className = "", chainHeight = 160, glow = true }) => {
  return (
    <div className={`relative flex flex-col items-center ${className} origin-top animate-sway-lamp`}>
      {/* Golden Brass Chain */}
      <svg
        width="14"
        height={chainHeight}
        viewBox={`0 0 14 ${chainHeight}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brassChainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#8D6E63" />
          </linearGradient>
        </defs>
        {/* Chain Links */}
        {Array.from({ length: Math.floor(chainHeight / 14) }).map((_, i) => (
          <ellipse
            key={i}
            cx="7"
            cy={i * 14 + 7}
            rx="4"
            ry="6"
            fill="none"
            stroke="url(#brassChainGrad)"
            strokeWidth="2.5"
          />
        ))}
        {/* Connection Hook */}
        <circle cx="7" cy={chainHeight} r="3" fill="#D4AF37" />
      </svg>

      {/* Brass Lamp Body & Flame */}
      <div className="relative -mt-1 flex flex-col items-center">
        {/* Sacred Flame */}
        <div className="relative mb-0.5">
          {glow && (
            <div className="absolute -inset-2 bg-amber-400/50 rounded-full blur-md animate-pulse-glow" />
          )}
          <svg width="22" height="34" viewBox="0 0 22 34" className="overflow-visible animate-flame-flicker">
            <defs>
              <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF3D00" />
                <stop offset="40%" stopColor="#FF9100" />
                <stop offset="85%" stopColor="#FFEA00" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <filter id="flameBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
            </defs>
            <path
              d="M11 2 C13 9 19 15 19 23 C19 29 15 33 11 33 C7 33 3 29 3 23 C3 15 9 9 11 2 Z"
              fill="url(#flameGrad)"
              filter="url(#flameBlur)"
            />
            {/* Inner White-hot core */}
            <path
              d="M11 12 C12 17 15 21 15 25 C15 29 13 31 11 31 C9 31 7 29 7 25 C7 21 10 17 11 12 Z"
              fill="#FFFDE7"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Diya Bowl (Traditional South Indian Thookku Vilakku Brass Plate) */}
        <svg width="68" height="42" viewBox="0 0 68 42" className="drop-shadow-lg">
          <defs>
            <linearGradient id="brassBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3B0" />
              <stop offset="25%" stopColor="#F5B800" />
              <stop offset="65%" stopColor="#B37D14" />
              <stop offset="100%" stopColor="#66460B" />
            </linearGradient>
            <linearGradient id="rimHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B37D14" />
              <stop offset="50%" stopColor="#FFF3B0" />
              <stop offset="100%" stopColor="#B37D14" />
            </linearGradient>
          </defs>
          {/* Top Rim of Diya */}
          <ellipse cx="34" cy="10" rx="32" ry="7" fill="url(#brassBowlGrad)" stroke="#5A3A05" strokeWidth="1" />
          <ellipse cx="34" cy="9" rx="28" ry="4" fill="#3E2723" opacity="0.6" />
          <ellipse cx="34" cy="8" rx="24" ry="3" fill="#BF360C" opacity="0.5" />

          {/* Diya Body */}
          <path
            d="M4 10 C6 24 16 34 34 34 C52 34 62 24 64 10 Z"
            fill="url(#brassBowlGrad)"
            stroke="#5A3A05"
            strokeWidth="1.2"
          />

          {/* Ornate Base & Bell Drop */}
          <path d="M28 34 L40 34 L36 38 L32 38 Z" fill="url(#brassBowlGrad)" />
          <circle cx="34" cy="40" r="2.5" fill="#F5B800" stroke="#5A3A05" strokeWidth="0.8" />

          {/* Engraved Traditional Ornamentation line */}
          <path
            d="M10 18 Q34 26 58 18"
            fill="none"
            stroke="url(#rimHighlight)"
            strokeWidth="1.5"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </div>
  );
};

// Lord Vinayagar / Ganesha Auspicious Golden Emblem
export const GaneshaEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 120,
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-yellow-400/25 blur-xl rounded-full" />
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="relative drop-shadow-[0_4px_16px_rgba(212,175,55,0.7)]"
      >
        <defs>
          <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="30%" stopColor="#FFD700" />
            <stop offset="70%" stopColor="#E5A93C" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo / Aura circles */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="url(#ganeshaGold)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ganeshaGold)" strokeWidth="0.8" opacity="0.4" />

        {/* Stylized South Indian Ganesha Form (Om-shaped Ganesha) */}
        {/* Crown / Mukut */}
        <path
          d="M44 14 L50 6 L56 14 L53 22 L47 22 Z"
          fill="url(#ganeshaGold)"
          stroke="#5D4037"
          strokeWidth="0.8"
        />
        <circle cx="50" cy="11" r="1.5" fill="#E34234" />

        {/* Head & Broad Brow */}
        <path
          d="M32 26 C36 21 64 21 68 26 C72 32 68 38 60 40 C56 41 54 44 54 48 C54 56 60 62 62 68 C64 74 60 80 52 82 C44 84 38 78 38 72 C38 64 46 58 46 52 C46 46 40 44 36 38 C32 34 30 30 32 26 Z"
          fill="none"
          stroke="url(#ganeshaGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#goldGlow)"
        />

        {/* Ear Left (Supakarna) */}
        <path
          d="M33 28 C22 30 18 42 28 50 C32 54 36 50 36 44"
          fill="none"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Ear Right */}
        <path
          d="M67 28 C78 30 82 42 72 50 C68 54 64 50 64 44"
          fill="none"
          stroke="url(#ganeshaGold)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Auspicious Tilak / Thiruman on Forehead */}
        <line x1="50" y1="24" x2="50" y2="34" stroke="#E34234" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="50" cy="36" r="2" fill="#E34234" />
        <line x1="44" y1="26" x2="56" y2="26" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="45" y1="29" x2="55" y2="29" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />

        {/* Trunk Modak curve (holding sacred sweets) */}
        <circle cx="52" cy="74" r="3.5" fill="url(#ganeshaGold)" stroke="#8D6E63" strokeWidth="0.8" />
        {/* Sacred Eye */}
        <circle cx="43" cy="34" r="1.5" fill="#3E2723" />
        <circle cx="57" cy="34" r="1.5" fill="#3E2723" />

        {/* Tusk (Danta) */}
        <path d="M42 42 L36 46" stroke="url(#ganeshaGold)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M58 42 L62 44" stroke="url(#ganeshaGold)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Majestic South Indian Temple Gopuram
export const TempleGopuram: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full flex justify-center items-end ${className}`}>
      <svg
        viewBox="0 0 900 640"
        className="w-full max-w-4xl h-auto drop-shadow-2xl overflow-visible"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="templeSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5EA6D6" />
            <stop offset="60%" stopColor="#9BD1F2" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>

          {/* Gopuram Terracotta Stone */}
          <linearGradient id="gopuramStone" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C442A" />
            <stop offset="25%" stopColor="#B35B3B" />
            <stop offset="50%" stopColor="#D97A52" />
            <stop offset="75%" stopColor="#B35B3B" />
            <stop offset="100%" stopColor="#8C442A" />
          </linearGradient>

          {/* Pillar Granite */}
          <linearGradient id="granitePillar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D4327" />
            <stop offset="40%" stopColor="#9C6644" />
            <stop offset="70%" stopColor="#B07D5A" />
            <stop offset="100%" stopColor="#5E381E" />
          </linearGradient>

          {/* Sacred Kalasam Gold */}
          <linearGradient id="kalasamGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C49000" />
          </linearGradient>

          {/* Tier Accent Blue/Green (Authentic South Indian Rajagopuram polychrome) */}
          <linearGradient id="tierAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E657D" />
            <stop offset="50%" stopColor="#4A8EA8" />
            <stop offset="100%" stopColor="#2E657D" />
          </linearGradient>
        </defs>

        {/* Background Distant Gopurams */}
        <g opacity="0.45">
          <polygon points="120,420 150,220 180,220 210,420" fill="#7FA9C6" />
          <polygon points="690,420 720,220 750,220 780,420" fill="#7FA9C6" />
        </g>

        {/* Main Central Rajagopuram (Pyramidal Dravidian Tower) */}
        <g id="CentralRajagopuram">
          {/* Base Plinth / Upapeedam */}
          <rect x="250" y="520" width="400" height="70" fill="url(#gopuramStone)" rx="2" />
          <rect x="230" y="570" width="440" height="30" fill="#6E331E" />
          <rect x="210" y="590" width="480" height="20" fill="#4E2313" />

          {/* Tier 1 (Lowest Broad Tier) */}
          <polygon points="270,520 630,520 610,460 290,460" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="2" />
          <rect x="285" y="475" width="330" height="12" fill="url(#tierAccent)" />
          {/* Miniature Niches (Koodus) */}
          {[310, 350, 390, 430, 470, 510, 550].map((x, i) => (
            <g key={i}>
              <rect x={x} y="490" width="22" height="26" fill="#4A2012" rx="4" />
              <circle cx={x + 11} cy="488" r="8" fill="url(#kalasamGold)" />
            </g>
          ))}

          {/* Tier 2 */}
          <polygon points="295,460 605,460 585,405 315,405" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="1.5" />
          <rect x="310" y="420" width="280" height="10" fill="url(#tierAccent)" />
          {[335, 380, 425, 470, 515, 550].map((x, i) => (
            <g key={i}>
              <rect x={x} y="432" width="18" height="22" fill="#3D1A0D" rx="3" />
              <circle cx={x + 9} cy="430" r="6" fill="url(#kalasamGold)" />
            </g>
          ))}

          {/* Tier 3 */}
          <polygon points="320,405 580,405 560,355 340,355" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="1.5" />
          <rect x="335" y="370" width="230" height="9" fill="url(#tierAccent)" />
          {[355, 400, 445, 490, 530].map((x, i) => (
            <g key={i}>
              <rect x={x} y="380" width="16" height="20" fill="#3D1A0D" rx="3" />
              <circle cx={x + 8} cy="378" r="5" fill="url(#kalasamGold)" />
            </g>
          ))}

          {/* Tier 4 */}
          <polygon points="345,355 555,355 540,310 360,310" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="1.5" />
          <rect x="358" y="322" width="184" height="8" fill="url(#tierAccent)" />
          {[375, 415, 455, 495, 525].map((x, i) => (
            <g key={i}>
              <rect x={x} y="330" width="14" height="18" fill="#3D1A0D" rx="3" />
              <circle cx={x + 7} cy="328" r="4.5" fill="url(#kalasamGold)" />
            </g>
          ))}

          {/* Tier 5 */}
          <polygon points="365,310 535,310 520,270 380,270" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="1.5" />
          <rect x="378" y="280" width="144" height="7" fill="url(#tierAccent)" />

          {/* Tier 6 */}
          <polygon points="385,270 515,270 500,235 400,235" fill="url(#gopuramStone)" stroke="#5B2917" strokeWidth="1.2" />

          {/* Tier 7 (Crown Barrel Vault / Sala Shikhara) */}
          <path
            d="M395 235 C400 190 420 180 450 180 C480 180 500 190 505 235 Z"
            fill="url(#gopuramStone)"
            stroke="#5B2917"
            strokeWidth="1.5"
          />
          {/* Sala Arch ridge */}
          <path
            d="M410 215 C425 195 475 195 490 215 Z"
            fill="url(#kalasamGold)"
          />

          {/* 7 Golden Sacred Kalasams on Peak (Stupis) */}
          {[420, 430, 440, 450, 460, 470, 480].map((x, i) => (
            <g key={i} className="animate-pulse-glow">
              <path
                d={`M${x - 2} 180 L${x + 2} 180 L${x + 3} 170 L${x} 160 L${x - 3} 170 Z`}
                fill="url(#kalasamGold)"
                stroke="#B8860B"
                strokeWidth="0.5"
              />
              <circle cx={x} cy="160" r="1.5" fill="#FFE082" />
            </g>
          ))}

          {/* Main Sanctum Doorway / Mahadwaram */}
          <g id="TempleDoor">
            {/* Ornate Door Arch */}
            <path
              d="M400 590 L400 500 C400 470 500 470 500 500 L500 590 Z"
              fill="#2A1208"
              stroke="url(#kalasamGold)"
              strokeWidth="3"
            />
            {/* Brass Clad Teak Door Panels */}
            <rect x="408" y="505" width="38" height="85" fill="#5D2614" stroke="#8D6E63" strokeWidth="1" />
            <rect x="454" y="505" width="38" height="85" fill="#5D2614" stroke="#8D6E63" strokeWidth="1" />
            {/* Brass Bell Studs on Door */}
            {[520, 540, 560, 580].map((y, idx) => (
              <g key={idx}>
                <circle cx="427" cy={y} r="2.5" fill="url(#kalasamGold)" />
                <circle cx="473" cy={y} r="2.5" fill="url(#kalasamGold)" />
              </g>
            ))}
            {/* Auspicious Red Carpet leading out */}
            <polygon points="410,590 490,590 540,640 360,640" fill="#B71C1C" />
            <polygon points="425,590 475,590 515,640 385,640" fill="#D32F2F" />
            {/* Gold border on carpet */}
            <line x1="360" y1="640" x2="410" y2="590" stroke="url(#kalasamGold)" strokeWidth="3" />
            <line x1="540" y1="640" x2="490" y2="590" stroke="url(#kalasamGold)" strokeWidth="3" />
          </g>
        </g>

        {/* Left Carved Stone Yali Pillar */}
        <g id="LeftPillar" transform="translate(40, 160)">
          {/* Pillar Shaft */}
          <rect x="30" y="80" width="110" height="380" fill="url(#granitePillar)" stroke="#3E2723" strokeWidth="2" />
          {/* Ornate Capital & Bracket (Potikai) */}
          <path
            d="M10 80 C20 40 80 40 140 30 L160 80 Z"
            fill="url(#granitePillar)"
            stroke="#3E2723"
            strokeWidth="2"
          />
          {/* Carved Yali / Lion Figure Silhouette */}
          <path
            d="M40 220 C20 200 20 150 45 130 C60 115 90 120 100 140 C110 160 120 190 105 230 C95 250 60 250 40 220 Z"
            fill="#543118"
            stroke="#3E2723"
            strokeWidth="1.5"
          />
          {/* Base */}
          <rect x="15" y="460" width="140" height="40" fill="#4A2810" />
        </g>

        {/* Right Carved Stone Yali Pillar */}
        <g id="RightPillar" transform="translate(720, 160)">
          <rect x="0" y="80" width="110" height="380" fill="url(#granitePillar)" stroke="#3E2723" strokeWidth="2" />
          <path
            d="M130 80 C120 40 60 40 0 30 L-20 80 Z"
            fill="url(#granitePillar)"
            stroke="#3E2723"
            strokeWidth="2"
          />
          <path
            d="M100 220 C120 200 120 150 95 130 C80 115 50 120 40 140 C30 160 20 190 35 230 C45 250 80 250 100 220 Z"
            fill="#543118"
            stroke="#3E2723"
            strokeWidth="1.5"
          />
          <rect x="-15" y="460" width="140" height="40" fill="#4A2810" />
        </g>
      </svg>
    </div>
  );
};

// Mango Leaves (Mavilai) & Marigold (Sevvanthi) Garland / Toran
export const MangoLeafToran: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-auto drop-shadow-md overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="50%" stopColor="#43A047" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
          <linearGradient id="marigoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="60%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#F57F17" />
          </linearGradient>
          <linearGradient id="marigoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB74D" />
            <stop offset="60%" stopColor="#F57C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          <linearGradient id="marigoldRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A80" />
            <stop offset="60%" stopColor="#D50000" />
            <stop offset="100%" stopColor="#B71C1C" />
          </linearGradient>
        </defs>

        {/* Rope / Thread */}
        <path
          d="M0 15 Q300 45 600 15 Q900 45 1200 15"
          fill="none"
          stroke="#F57F17"
          strokeWidth="4"
          strokeDasharray="6,3"
        />

        {/* Hanging Marigold Garlands & Mango Leaves Pattern */}
        {Array.from({ length: 16 }).map((_, i) => {
          const x = i * 78 + 30;
          return (
            <g key={i} className="origin-top hover:scale-105 transition-transform duration-300">
              {/* Mango Leaf */}
              <path
                d={`M${x} 18 Q${x - 14} 55 ${x} 82 Q${x + 14} 55 ${x} 18 Z`}
                fill="url(#mangoLeafGrad)"
                stroke="#1B5E20"
                strokeWidth="1"
              />
              <line x1={x} y1="18" x2={x} y2="78" stroke="#81C784" strokeWidth="1" />

              {/* Marigold Flower on top */}
              <circle cx={x} cy={20} r="10" fill={i % 2 === 0 ? "url(#marigoldOrange)" : "url(#marigoldYellow)"} />
              <circle cx={x} cy={20} r="6" fill={i % 2 === 0 ? "url(#marigoldYellow)" : "url(#marigoldOrange)"} />
              <circle cx={x} cy={20} r="2.5" fill="#E65100" />

              {/* Red Rose Bud accent every 3 leaves */}
              {i % 3 === 0 && (
                <circle cx={x} cy={34} r="7" fill="url(#marigoldRed)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Side Vertical Marigold Strands (Malar Maalai)
export const VerticalMarigoldStrand: React.FC<{
  className?: string;
  flowersCount?: number;
}> = ({ className = "", flowersCount = 12 }) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {Array.from({ length: flowersCount }).map((_, i) => {
        const isOrange = i % 2 === 0;
        return (
          <div
            key={i}
            className="w-8 h-8 rounded-full flex items-center justify-center shadow-md relative"
            style={{
              background: isOrange
                ? "radial-gradient(circle, #FFE082 15%, #FFA000 65%, #E65100 100%)"
                : "radial-gradient(circle, #FFF9C4 20%, #FDD835 60%, #F57F17 100%)",
            }}
          >
            {/* Flower Petal Ruffles */}
            <div className="absolute inset-1 rounded-full border border-amber-600/30 opacity-70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-900/30" />
          </div>
        );
      })}
    </div>
  );
};

// South Indian Traditional Feast: Masala Dosa on Banana Leaf Plate
export const SouthIndianFeastPlate: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 500 340"
        className="w-full max-w-md h-auto drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Black Plate / Dish */}
          <radialGradient id="plateGrad" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#2A2A2A" />
            <stop offset="95%" stopColor="#151515" />
            <stop offset="100%" stopColor="#0A0A0A" />
          </radialGradient>

          {/* Fresh Banana Leaf Green */}
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#689F38" />
            <stop offset="50%" stopColor="#7CB342" />
            <stop offset="100%" stopColor="#33691E" />
          </linearGradient>

          {/* Crispy Golden Roast Dosa */}
          <linearGradient id="dosaCrust" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#D48834" />
            <stop offset="25%" stopColor="#E2A64E" />
            <stop offset="50%" stopColor="#BA6B22" />
            <stop offset="75%" stopColor="#E8B868" />
            <stop offset="100%" stopColor="#8D4C13" />
          </linearGradient>

          {/* Chutney Colors */}
          <radialGradient id="coconutChutney" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </radialGradient>
          <radialGradient id="tomatoChutney" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FF6E40" />
            <stop offset="70%" stopColor="#D84315" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>
          <radialGradient id="sambarBowl" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="70%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>
        </defs>

        {/* Cast Iron / Stone Round Plate */}
        <ellipse cx="250" cy="170" rx="220" ry="145" fill="url(#plateGrad)" stroke="#424242" strokeWidth="5" />
        <ellipse cx="250" cy="170" rx="205" ry="132" fill="#1C1C1C" />

        {/* Fresh Banana Leaf liner */}
        <ellipse cx="250" cy="170" rx="195" ry="122" fill="url(#leafGrad)" />
        {/* Leaf midrib & veins */}
        <line x1="80" y1="170" x2="420" y2="170" stroke="#8BC34A" strokeWidth="2.5" opacity="0.6" />
        {[130, 180, 230, 280, 330, 380].map((vx, vi) => (
          <g key={vi} opacity="0.35">
            <line x1={vx} y1="170" x2={vx + 25} y2="80" stroke="#DCEDC8" strokeWidth="1.2" />
            <line x1={vx} y1="170" x2={vx + 25} y2="260" stroke="#DCEDC8" strokeWidth="1.2" />
          </g>
        ))}

        {/* Authentic South Indian Masala Dosa Roll (Crispy Ghee Roast) */}
        <g id="DosaRoll" transform="rotate(-15 250 160)">
          {/* Main Dosa Cone / Cylinder */}
          <path
            d="M120 135 C170 100 340 100 400 150 C380 185 220 205 130 170 Z"
            fill="url(#dosaCrust)"
            stroke="#6D3B0F"
            strokeWidth="2"
          />
          {/* Crispy golden ghee roast blisters / porosity marks */}
          <ellipse cx="230" cy="140" rx="25" ry="10" fill="#7A3E0F" opacity="0.45" />
          <ellipse cx="300" cy="145" rx="35" ry="12" fill="#5E2C06" opacity="0.4" />
          <ellipse cx="170" cy="155" rx="20" ry="8" fill="#8D4C13" opacity="0.5" />

          {/* Potato Masala filling peeking out */}
          <path
            d="M125 150 C135 150 145 165 135 175 C125 175 115 160 125 150 Z"
            fill="#FBC02D"
            stroke="#F57F17"
            strokeWidth="1.5"
          />
          <circle cx="128" cy="162" r="2" fill="#388E3C" />
          <circle cx="132" cy="166" r="1.5" fill="#D32F2F" />
        </g>

        {/* 3 Traditional Chutney Katoris (Steel/Ceramic Bowls) */}
        {/* Sambar Bowl */}
        <g id="SambarBowl" transform="translate(130, 75)">
          <circle cx="28" cy="28" r="26" fill="#37474F" stroke="#78909C" strokeWidth="3" />
          <circle cx="28" cy="28" r="23" fill="url(#sambarBowl)" />
          {/* Coriander & Mustard seed tadka */}
          <circle cx="25" cy="24" r="2" fill="#2E7D32" />
          <circle cx="32" cy="29" r="1" fill="#212121" />
          <circle cx="22" cy="31" r="1" fill="#212121" />
        </g>

        {/* Tomato Chutney Bowl */}
        <g id="TomatoBowl" transform="translate(195, 60)">
          <circle cx="26" cy="26" r="24" fill="#37474F" stroke="#78909C" strokeWidth="3" />
          <circle cx="26" cy="26" r="21" fill="url(#tomatoChutney)" />
          <circle cx="23" cy="22" r="1.5" fill="#212121" />
        </g>

        {/* Coconut Chutney Bowl */}
        <g id="CoconutBowl" transform="translate(345, 185)">
          <circle cx="26" cy="26" r="24" fill="#37474F" stroke="#78909C" strokeWidth="3" />
          <circle cx="26" cy="26" r="21" fill="url(#coconutChutney)" />
          {/* Curry leaves & mustard seed seasoning */}
          <path d="M22 24 Q26 21 29 25" stroke="#2E7D32" strokeWidth="2" fill="none" />
          <circle cx="21" cy="27" r="1" fill="#212121" />
          <circle cx="28" cy="22" r="1" fill="#212121" />
        </g>

        {/* Lemon wedge & Green Chilli garnish */}
        <g transform="translate(230, 240)">
          <path d="M0 0 C15 -5 25 10 10 20 Z" fill="#C0CA33" stroke="#9E9D24" strokeWidth="1" />
          <path d="M20 5 C35 15 40 25 35 30" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};

// Vintage Classic Car Illustration (Save The Date Card)
export const VintageWeddingCar: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 460 260"
        className="w-full max-w-sm h-auto drop-shadow-xl overflow-visible"
      >
        <defs>
          {/* Vintage Teal/Pastel Green Body */}
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#80CBC4" />
            <stop offset="30%" stopColor="#4DB6AC" />
            <stop offset="70%" stopColor="#00897B" />
            <stop offset="100%" stopColor="#004D40" />
          </linearGradient>

          {/* Chrome Bumpers & Grille */}
          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CFD8DC" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#90A4AE" />
          </linearGradient>

          {/* Windshield Reflection */}
          <linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F7FA" />
            <stop offset="50%" stopColor="#B2EBF2" />
            <stop offset="100%" stopColor="#80DEEA" />
          </linearGradient>
        </defs>

        {/* Tires */}
        <g id="Wheels">
          <rect x="65" y="160" width="45" height="55" rx="8" fill="#212121" />
          <rect x="350" y="160" width="45" height="55" rx="8" fill="#212121" />
        </g>

        {/* Car Cabin & Roof */}
        <path
          d="M125 105 L155 45 L305 45 L335 105 Z"
          fill="url(#carBodyGrad)"
          stroke="#004D40"
          strokeWidth="2"
        />

        {/* Front Windshield Glass */}
        <path
          d="M135 100 L162 52 L298 52 L325 100 Z"
          fill="url(#windshieldGlass)"
          stroke="#00695C"
          strokeWidth="2"
        />
        {/* Rearview mirror */}
        <rect x="224" y="55" width="12" height="6" rx="2" fill="#37474F" />

        {/* Hood & Main Body (Front View Vintage Saloon) */}
        <path
          d="M50 135 C50 115 80 105 130 105 L330 105 C380 105 410 115 410 135 L415 175 C415 185 405 190 390 190 L70 190 C55 190 45 185 45 175 Z"
          fill="url(#carBodyGrad)"
          stroke="#004D40"
          strokeWidth="2.5"
        />

        {/* Classic Chrome Grille */}
        <rect x="115" y="135" width="230" height="42" rx="6" fill="#263238" stroke="url(#chromeGrad)" strokeWidth="3" />
        {/* Horizontal Grille slats */}
        {[142, 149, 156, 163, 170].map((gy, gi) => (
          <line key={gi} x1="120" y1={gy} x2="340" y2={gy} stroke="url(#chromeGrad)" strokeWidth="1.8" />
        ))}

        {/* Twin Dual Chrome Headlights */}
        {/* Left Headlights */}
        <g transform="translate(68, 132)">
          <circle cx="16" cy="18" r="16" fill="url(#chromeGrad)" stroke="#546E7A" strokeWidth="2" />
          <circle cx="16" cy="18" r="12" fill="#FFFDE7" />
          <circle cx="44" cy="18" r="14" fill="url(#chromeGrad)" stroke="#546E7A" strokeWidth="2" />
          <circle cx="44" cy="18" r="10" fill="#FFFDE7" />
        </g>
        {/* Right Headlights */}
        <g transform="translate(320, 132)">
          <circle cx="16" cy="18" r="14" fill="url(#chromeGrad)" stroke="#546E7A" strokeWidth="2" />
          <circle cx="16" cy="18" r="10" fill="#FFFDE7" />
          <circle cx="44" cy="18" r="16" fill="url(#chromeGrad)" stroke="#546E7A" strokeWidth="2" />
          <circle cx="44" cy="18" r="12" fill="#FFFDE7" />
        </g>

        {/* Chrome Front Bumper */}
        <path
          d="M40 185 C40 180 70 180 230 180 C390 180 420 180 420 185 L415 198 C415 204 395 205 230 205 C65 205 45 204 45 198 Z"
          fill="url(#chromeGrad)"
          stroke="#78909C"
          strokeWidth="1.5"
        />

        {/* Wedding License Plate: "S & V 2026" */}
        <rect x="185" y="186" width="90" height="22" rx="3" fill="#FFF9C4" stroke="#D4AF37" strokeWidth="1.5" />
        <text
          x="230"
          y="202"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#8B0000"
          fontFamily="Cinzel, serif"
        >
          S &amp; V 2026
        </text>

        {/* Wedding Floral Garland on Hood */}
        <path
          d="M80 130 Q230 155 380 130"
          fill="none"
          stroke="#FF8F00"
          strokeWidth="6"
          strokeDasharray="8,4"
        />
        <circle cx="230" cy="144" r="8" fill="#E91E63" />
        <circle cx="210" cy="140" r="6" fill="#FFC107" />
        <circle cx="250" cy="140" r="6" fill="#FFC107" />
      </svg>
    </div>
  );
};

// South Indian Wedding Couple (3D Animated Stylized Portrait)
export const CoupleIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Soft Aura */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-300/30 via-rose-200/40 to-transparent rounded-full blur-2xl" />

      <svg
        viewBox="0 0 600 480"
        className="w-full max-w-lg h-auto drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Bride Saree Silk Red & Gold */}
          <linearGradient id="sareeSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C2185B" />
            <stop offset="40%" stopColor="#D81B60" />
            <stop offset="80%" stopColor="#880E4F" />
          </linearGradient>
          <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          {/* Groom Silk Shirt Cream & White */}
          <linearGradient id="groomSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>

          {/* Skin Tones */}
          <radialGradient id="brideSkin" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFE0B2" />
            <stop offset="70%" stopColor="#FFCC80" />
            <stop offset="100%" stopColor="#FFA726" />
          </radialGradient>
          <radialGradient id="groomSkin" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFCC80" />
            <stop offset="70%" stopColor="#FFA726" />
            <stop offset="100%" stopColor="#FB8C00" />
          </radialGradient>

          {/* Hair */}
          <linearGradient id="darkHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#37474F" />
            <stop offset="50%" stopColor="#212121" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* Wedding Garland (Maalai) Red & Jasmine White */}
          <radialGradient id="roseGarland" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF5252" />
            <stop offset="70%" stopColor="#D50000" />
            <stop offset="100%" stopColor="#880E4F" />
          </radialGradient>
          <radialGradient id="jasmineGarland" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#FFE082" />
          </radialGradient>
        </defs>

        {/* BRIDE (Left side facing right) */}
        <g id="BrideCharacter" transform="translate(100, 40)">
          {/* Long Braid with Golden Kunjalam & Jasmine Flowers (Mallipoo) */}
          <g id="BrideHairBraid">
            <path
              d="M100 160 C80 200 65 260 75 340 C85 350 95 340 90 280 C88 230 110 180 120 160 Z"
              fill="url(#darkHair)"
            />
            {/* Strands of fresh Jasmine flowers (Gajra / Mallipoo) wrapped around hair */}
            {[140, 155, 175, 195, 215, 240, 265, 290].map((my, mi) => (
              <g key={mi} transform={`translate(${85 - mi * 2}, ${my})`}>
                <circle cx="0" cy="0" r="7" fill="#FFFFFF" stroke="#FFF59D" strokeWidth="1" />
                <circle cx="6" cy="3" r="6" fill="#FFFFFF" />
                <circle cx="-5" cy="4" r="6" fill="#FFF9C4" />
                <circle cx="1" cy="7" r="5" fill="#FFFFFF" />
              </g>
            ))}
            {/* Gold Head Ornament (Nethi Chutti / Maang Tikka) */}
            <path d="M125 108 L142 122" stroke="url(#goldZari)" strokeWidth="3" />
            <circle cx="143" cy="123" r="5" fill="url(#goldZari)" />
          </g>

          {/* Bride Saree Body */}
          <path
            d="M90 260 C90 230 130 220 170 230 C200 240 210 270 215 360 C150 370 100 370 85 360 Z"
            fill="url(#sareeSilk)"
          />
          {/* Gold Saree Pallu & Border */}
          <path
            d="M120 230 Q170 280 200 350"
            fill="none"
            stroke="url(#goldZari)"
            strokeWidth="14"
          />
          <path
            d="M120 230 Q170 280 200 350"
            fill="none"
            stroke="#880E4F"
            strokeWidth="2"
            strokeDasharray="3,3"
          />

          {/* Bride Arm & Bangles */}
          <path
            d="M135 250 C160 270 190 270 230 250"
            stroke="url(#brideSkin)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Gold & Red Glass Bangles */}
          {[205, 212, 219, 226].map((bx, bi) => (
            <line
              key={bi}
              x1={bx}
              y1="255"
              x2={bx + 3}
              y2="265"
              stroke={bi % 2 === 0 ? "url(#goldZari)" : "#C2185B"}
              strokeWidth="3.5"
            />
          ))}

          {/* Bride Neck & Gold Jewelry (Haaram & Choker) */}
          <path d="M130 180 L140 235 L160 235 L165 180 Z" fill="url(#brideSkin)" />
          {/* Choker */}
          <path d="M132 195 Q145 208 158 198" fill="none" stroke="url(#goldZari)" strokeWidth="5" />
          {/* Long Gold Temple Jewelry Haram */}
          <path d="M130 205 Q146 230 162 208" fill="none" stroke="url(#goldZari)" strokeWidth="4" />
          <circle cx="146" cy="225" r="4.5" fill="url(#goldZari)" />

          {/* Bride Face Profile */}
          <path
            d="M125 125 C120 155 125 175 140 185 C155 192 170 185 172 165 C175 145 160 115 138 115 Z"
            fill="url(#brideSkin)"
          />
          {/* Hair Bun / Front Waves */}
          <path
            d="M110 120 C110 85 155 90 170 125 C150 120 135 125 125 145 Z"
            fill="url(#darkHair)"
          />
          {/* Big Beautiful Eye & Lashes */}
          <ellipse cx="152" cy="148" rx="5" ry="4" fill="#3E2723" />
          <circle cx="153" cy="146" r="1.5" fill="#FFFFFF" />
          <path d="M146 142 Q154 138 160 144" stroke="#212121" strokeWidth="2" fill="none" />
          {/* Traditional Red Bindi / Pottu */}
          <circle cx="156" cy="138" r="2.5" fill="#D50000" />
          {/* Gentle Smile */}
          <path d="M158 165 Q164 168 168 164" stroke="#C2185B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Jhumka / Jimikki Earring */}
          <g transform="translate(133, 160)">
            <circle cx="0" cy="0" r="3" fill="url(#goldZari)" />
            <path d="M-4 4 L4 4 L2 9 L-2 9 Z" fill="url(#goldZari)" />
            <circle cx="0" cy="10" r="1.5" fill="#FFD54F" />
          </g>
        </g>

        {/* GROOM (Right side facing left) */}
        <g id="GroomCharacter" transform="translate(300, 40)">
          {/* Groom Silk Shirt Body */}
          <path
            d="M50 230 C70 215 130 215 155 230 C175 250 185 300 180 360 C120 370 70 370 45 360 Z"
            fill="url(#groomSilk)"
            stroke="#BDBDBD"
            strokeWidth="1.5"
          />
          {/* Gold Kasavu Border on Angavastram (Shoulder Cloth) */}
          <path
            d="M70 225 Q95 290 80 360"
            stroke="url(#goldZari)"
            strokeWidth="8"
            fill="none"
          />

          {/* Groom Neck */}
          <path d="M75 175 L80 230 L115 230 L115 175 Z" fill="url(#groomSkin)" />

          {/* Groom Face Profile */}
          <path
            d="M60 120 C55 145 60 170 75 185 C95 195 115 185 120 160 C125 135 110 110 85 110 Z"
            fill="url(#groomSkin)"
          />
          {/* Well-groomed Beard & Mustache */}
          <path
            d="M62 155 C58 175 75 192 95 188 C100 180 95 170 90 168 C80 168 70 162 68 155 Z"
            fill="url(#darkHair)"
          />
          {/* Smile */}
          <path d="M72 165 Q78 168 84 165" stroke="#BF360C" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Eye */}
          <ellipse cx="80" cy="144" rx="4.5" ry="3.5" fill="#212121" />
          <circle cx="81" cy="143" r="1.2" fill="#FFFFFF" />
          <path d="M73 138 Q82 134 89 139" stroke="#212121" strokeWidth="2.2" fill="none" />
          {/* Auspicious Sandalwood & Kumkum Thilak */}
          <line x1="84" y1="124" x2="84" y2="134" stroke="#FFF9C4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="84" cy="135" r="2" fill="#D50000" />

          {/* Smart Modern Groom Haircut */}
          <path
            d="M60 120 C55 90 90 75 125 95 C135 115 130 145 115 155 C115 135 110 125 95 120 Z"
            fill="url(#darkHair)"
          />
        </g>

        {/* Sacred Wedding Garlands (Malar Maalai) - Exchanged between them */}
        <g id="WeddingGarlands">
          {/* Red Rose & Jasmine Garland Loop on Bride */}
          <path
            d="M245 220 C240 270 260 330 280 340 C300 330 285 270 280 220"
            fill="none"
            stroke="url(#roseGarland)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Jasmine accents on Garland */}
          {[235, 260, 290, 320].map((gy, gi) => (
            <ellipse
              key={gi}
              cx="260"
              cy={gy}
              rx="10"
              ry="6"
              fill="url(#jasmineGarland)"
              transform={`rotate(${gi * 10} 260 ${gy})`}
            />
          ))}

          {/* Red Rose & Jasmine Garland Loop on Groom */}
          <path
            d="M340 220 C345 270 330 330 310 340 C290 330 305 270 310 220"
            fill="none"
            stroke="url(#roseGarland)"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>

        {/* Sacred Thaali / Mangalsutra Golden Pendant on Yellow Thread */}
        <path d="M240 225 Q255 240 270 230" fill="none" stroke="#FFD600" strokeWidth="3.5" />
        <circle cx="255" cy="236" r="3.5" fill="url(#goldZari)" stroke="#FF8F00" strokeWidth="1" />
      </svg>
    </div>
  );
};

// Traditional Auspicious Kolam / Rangoli Motif
export const KolamPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-16 h-16 opacity-30 stroke-current ${className}`}
      fill="none"
      strokeWidth="1.2"
    >
      <circle cx="50" cy="50" r="40" strokeDasharray="3,3" />
      <circle cx="50" cy="50" r="28" />
      <path d="M50 10 Q65 35 90 50 Q65 65 50 90 Q35 65 10 50 Q35 35 50 10 Z" />
      <circle cx="50" cy="50" r="6" />
    </svg>
  );
};

