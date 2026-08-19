export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/** A friendly cartoon robot — the hero's little AI/ML mascot. */
export function RobotMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 130"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* antenna */}
      <path d="M60 20V10" stroke="#2A2320" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="7" r="6" fill="#D98A6A" stroke="#2A2320" strokeWidth="3.5" />

      {/* head */}
      <rect x="20" y="20" width="80" height="58" rx="20" fill="#B75E3F" stroke="#2A2320" strokeWidth="4" />

      {/* eyes */}
      <circle cx="44" cy="48" r="9" fill="#FCF9F4" stroke="#2A2320" strokeWidth="3" />
      <circle cx="76" cy="48" r="9" fill="#FCF9F4" stroke="#2A2320" strokeWidth="3" />
      <circle cx="46" cy="49" r="3.2" fill="#2A2320" />
      <circle cx="78" cy="49" r="3.2" fill="#2A2320" />

      {/* smile */}
      <path d="M46 63q14 12 28 0" stroke="#2A2320" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* blush */}
      <circle cx="33" cy="58" r="4" fill="#D98A6A" opacity="0.7" />
      <circle cx="87" cy="58" r="4" fill="#D98A6A" opacity="0.7" />

      {/* ear bolts */}
      <circle cx="16" cy="46" r="7" fill="#FCF9F4" stroke="#2A2320" strokeWidth="3.5" />
      <circle cx="104" cy="46" r="7" fill="#FCF9F4" stroke="#2A2320" strokeWidth="3.5" />

      {/* body */}
      <rect x="28" y="82" width="64" height="40" rx="14" fill="#FCF9F4" stroke="#2A2320" strokeWidth="4" />

      {/* chest chip */}
      <rect x="47" y="94" width="26" height="18" rx="4" fill="#2A2320" />
      <path d="M52 100h16M52 106h16" stroke="#D98A6A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** A chunky cartoon cog — background flavor for the hero. */
export function Gear({ className = "" }: { className?: string }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="6" strokeLinejoin="round">
        {teeth.map((angle) => (
          <rect
            key={angle}
            x="52"
            y="4"
            width="16"
            height="22"
            rx="4"
            fill="currentColor"
            transform={`rotate(${angle} 60 60)`}
          />
        ))}
        <circle cx="60" cy="60" r="34" fill="currentColor" />
      </g>
      <circle cx="60" cy="60" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
}

/** A four-point cartoon sparkle — background flavor for the hero. */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 6 L61 39 L94 50 L61 61 L50 94 L39 61 L6 50 L39 39 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
