"use client";

import type { BundleId } from "@/lib/types";

interface StoryMascotProps {
  bundleId: BundleId;
  title: string;
}

const ACCENTS: Record<BundleId, { wash: string; fur: string; detail: string }> = {
  newcomer: { wash: "#F4D9C8", fur: "#E8C4A8", detail: "#D48A72" },
  guide: { wash: "#D7E2D5", fur: "#C9D6C8", detail: "#7B9482" },
  guardian: { wash: "#DCE3EB", fur: "#CDD6E0", detail: "#8A9BB0" },
  "best-friend": { wash: "#F0E2B8", fur: "#E8D7A8", detail: "#C4A35A" },
};

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
          <stop offset="70%" stopColor="#F9F6F0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F9F6F0" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`grain-${bundleId}`}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.6" fill="#2C2A28" opacity="0.05" />
        </pattern>
      </defs>

      <rect width="360" height="640" fill="#F9F6F0" />
      <rect width="360" height="640" fill={`url(#grain-${bundleId})`} />
      <ellipse cx="180" cy="280" rx="160" ry="180" fill={`url(#storyWash-${bundleId})`} />

      <text
        x="180"
        y="78"
        textAnchor="middle"
        fill="#2C2A28"
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
        fill="#2C2A28"
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
        fill="#2C2A28"
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
        <ellipse cx="84" cy="112" rx="8" ry="10" fill="#2C2A28" />
        <ellipse cx="136" cy="112" rx="8" ry="10" fill="#2C2A28" />
        <ellipse cx="110" cy="134" rx="11" ry="8" fill="#2C2A28" />
        <path
          d="M94 148c8 12 24 12 32 0"
          fill="none"
          stroke="#2C2A28"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="82" y="186" width="56" height="16" rx="8" fill={colors.detail} />
      </g>

      <text
        x="180"
        y="540"
        textAnchor="middle"
        fill="#2C2A28"
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
