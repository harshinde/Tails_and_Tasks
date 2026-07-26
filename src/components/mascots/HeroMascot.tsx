"use client";

export function HeroMascot() {
  return (
    <div className="hero-mascot" aria-hidden="true">
      <svg
        viewBox="0 0 360 420"
        className="hero-mascot__svg"
        role="img"
        focusable="false"
      >
        <defs>
          <radialGradient id="heroWash" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#F4E4D4" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#E8D2C0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F9F6F0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="furMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2D2B0" />
            <stop offset="100%" stopColor="#D9A889" />
          </linearGradient>
          <linearGradient id="earInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8A994" />
            <stop offset="100%" stopColor="#D48A72" />
          </linearGradient>
        </defs>

        <ellipse cx="180" cy="330" rx="120" ry="28" fill="#2C2A28" opacity="0.08" />
        <ellipse cx="180" cy="250" rx="150" ry="140" fill="url(#heroWash)" />

        {/* Tail */}
        <g className="hero-mascot__tail">
          <path
            d="M268 250c36 8 58 40 48 78"
            fill="none"
            stroke="#C99274"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </g>

        {/* Body */}
        <ellipse cx="180" cy="268" rx="86" ry="78" fill="url(#furMain)" />
        <ellipse cx="180" cy="286" rx="52" ry="44" fill="#F7E6D4" />

        {/* Head group */}
        <g className="hero-mascot__head">
          <ellipse cx="118" cy="148" rx="28" ry="48" fill="#C99274" transform="rotate(-18 118 148)" />
          <ellipse cx="242" cy="148" rx="28" ry="48" fill="#C99274" transform="rotate(18 242 148)" />
          <ellipse cx="118" cy="152" rx="14" ry="28" fill="url(#earInner)" transform="rotate(-18 118 152)" />
          <ellipse cx="242" cy="152" rx="14" ry="28" fill="url(#earInner)" transform="rotate(18 242 152)" />

          <ellipse cx="180" cy="178" rx="78" ry="72" fill="url(#furMain)" />
          <ellipse cx="180" cy="198" rx="42" ry="32" fill="#F7E6D4" />

          {/* Eyes */}
          <g className="hero-mascot__eyes">
            <ellipse cx="152" cy="168" rx="9" ry="11" fill="#2C2A28" />
            <ellipse cx="208" cy="168" rx="9" ry="11" fill="#2C2A28" />
            <circle cx="155" cy="164" r="3" fill="#F9F6F0" />
            <circle cx="211" cy="164" r="3" fill="#F9F6F0" />
          </g>

          {/* Nose + smile */}
          <ellipse cx="180" cy="194" rx="12" ry="9" fill="#2C2A28" />
          <path
            d="M164 208c8 12 24 12 32 0"
            fill="none"
            stroke="#2C2A28"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* Collar badge */}
        <rect x="150" y="236" width="60" height="18" rx="9" fill="#7B9482" />
        <circle cx="180" cy="245" r="7" fill="#D48A72" />
      </svg>
    </div>
  );
}
