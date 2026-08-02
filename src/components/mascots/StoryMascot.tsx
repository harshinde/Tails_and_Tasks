"use client";

import type { BundleId } from "@/lib/types";

interface StoryMascotProps {
  bundleId: BundleId;
  title: string;
}

const ACCENTS: Record<BundleId, { wash: string; fur: string; detail: string }> = {
  newcomer: { wash: "#FFE4D6", fur: "#FFD4C2", detail: "#FF6B35" },
  guide: { wash: "#D0EBE9", fur: "#B8DEDC", detail: "#008080" },
  guardian: { wash: "#D8E4E8", fur: "#C5D5DB", detail: "#3D6B7A" },
  "best-friend": { wash: "#F7E6C4", fur: "#F0D9B0", detail: "#E8A04A" },
}

export function StoryMascot({ bundleId, title }: StoryMascotProps) {
  const colors = ACCENTS[bundleId];

  return (
    <svg
      viewBox="0 0 360 640"
      className="story-mascot"
      role="img"
      aria-label={`${title} story graphic`}
    >
      <defs>
        <radialGradient id={`storyWash-${bundleId}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor={colors.wash} stopOpacity="0.95" />
          <stop offset="70%" stopColor="#FAF0E6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FAF0E6" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`grain-${bundleId}`}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.6" fill="#2D3E50" opacity="0.05" />
        </pattern>
      </defs>

      <rect width="360" height="640" fill="#FAF0E6" />
      <rect width="360" height="640" fill={`url(#grain-${bundleId})`} />
      <ellipse cx="180" cy="280" rx="160" ry="180" fill={`url(#storyWash-${bundleId})`} />

      <text
        x="180"
        y="78"
        textAnchor="middle"
        fill="#2D3E50"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        letterSpacing="3"
      >
        PAWS &amp; TASKS
      </text>
      <text
        x="180"
        y="120"
        textAnchor="middle"
        fill="#2D3E50"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="34"
        fontWeight="700"
      >
        I&apos;m {title}
      </text>
      <text
        x="180"
        y="152"
        textAnchor="middle"
        fill="#2D3E50"
        opacity="0.72"
        fontFamily="Arial, sans-serif"
        fontSize="14"
      >
        pet parent path unlocked
      </text>

      <g transform="translate(70 190)">
        <ellipse cx="110" cy="210" rx="78" ry="70" fill={colors.fur} />
        <ellipse cx="110" cy="228" rx="46" ry="40" fill="#F7EDE2" />
        <ellipse
          cx="52"
          cy="96"
          rx="24"
          ry="42"
          fill={colors.detail}
          transform="rotate(-16 52 96)"
        />
        <ellipse
          cx="168"
          cy="96"
          rx="24"
          ry="42"
          fill={colors.detail}
          transform="rotate(16 168 96)"
        />
        <ellipse cx="110" cy="120" rx="70" ry="64" fill={colors.fur} />
        <ellipse cx="110" cy="138" rx="38" ry="28" fill="#F7EDE2" />
        <ellipse cx="84" cy="112" rx="8" ry="10" fill="#2D3E50" />
        <ellipse cx="136" cy="112" rx="8" ry="10" fill="#2D3E50" />
        <ellipse cx="110" cy="134" rx="11" ry="8" fill="#2D3E50" />
        <path
          d="M94 148c8 12 24 12 32 0"
          fill="none"
          stroke="#2D3E50"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="82" y="186" width="56" height="16" rx="8" fill={colors.detail} />
      </g>

      <text
        x="180"
        y="540"
        textAnchor="middle"
        fill="#2D3E50"
        fontFamily="Arial, sans-serif"
        fontSize="16"
      >
        Building better habits, one path at a time.
      </text>
      <text
        x="180"
        y="575"
        textAnchor="middle"
        fill={colors.detail}
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="700"
      >
        @pawsandtasks
      </text>
    </svg>
  );
}
