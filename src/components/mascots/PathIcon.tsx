"use client";

import type { BundleId } from "@/lib/types";

interface PathIconProps {
  bundleId: BundleId;
  active?: boolean;
}

export function PathIcon({ bundleId, active = false }: PathIconProps) {
  return (
    <div
      className={`path-icon path-icon--${bundleId}${active ? " is-active" : ""}`}
      aria-hidden="true"
    >
      {bundleId === "newcomer" && <NewcomerIcon />}
      {bundleId === "guide" && <GuideIcon />}
      {bundleId === "guardian" && <GuardianIcon />}
      {bundleId === "best-friend" && <BestFriendIcon />}
    </div>
  );
}

function NewcomerIcon() {
  return (
    <svg viewBox="0 0 120 120" className="path-icon__svg">
      <ellipse cx="60" cy="78" rx="34" ry="28" fill="#FFD4C2" />
      <circle cx="60" cy="48" r="26" fill="#FFE4D6" />
      <ellipse cx="40" cy="34" rx="10" ry="16" fill="#FF6B35" />
      <ellipse cx="80" cy="34" rx="10" ry="16" fill="#FF6B35" />
      <circle cx="51" cy="46" r="3.5" fill="#2D3E50" />
      <circle cx="69" cy="46" r="3.5" fill="#2D3E50" />
      <ellipse cx="60" cy="56" rx="5" ry="3.5" fill="#2D3E50" />
      <g className="path-icon__spark">
        <path d="M92 28l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FF6B35" />
      </g>
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg viewBox="0 0 120 120" className="path-icon__svg">
      <ellipse cx="60" cy="78" rx="34" ry="28" fill="#B8DEDC" />
      <circle cx="60" cy="48" r="26" fill="#D0EBE9" />
      <ellipse cx="38" cy="36" rx="9" ry="18" fill="#008080" />
      <ellipse cx="82" cy="36" rx="9" ry="18" fill="#008080" />
      <circle cx="51" cy="46" r="3.5" fill="#2D3E50" />
      <circle cx="69" cy="46" r="3.5" fill="#2D3E50" />
      <ellipse cx="60" cy="56" rx="5" ry="3.5" fill="#2D3E50" />
      <g className="path-icon__tick">
        <path
          d="M86 70c8-2 16 6 12 14"
          fill="none"
          stroke="#008080"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="98" cy="86" r="8" fill="#008080" />
        <path
          d="M94 86l3 3 6-6"
          fill="none"
          stroke="#FAF0E6"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function GuardianIcon() {
  return (
    <svg viewBox="0 0 120 120" className="path-icon__svg">
      <ellipse cx="60" cy="78" rx="34" ry="28" fill="#C5D5DB" />
      <circle cx="60" cy="48" r="26" fill="#D8E4E8" />
      <ellipse cx="40" cy="34" rx="10" ry="16" fill="#3D6B7A" />
      <ellipse cx="80" cy="34" rx="10" ry="16" fill="#3D6B7A" />
      <circle cx="51" cy="46" r="3.5" fill="#2D3E50" />
      <circle cx="69" cy="46" r="3.5" fill="#2D3E50" />
      <ellipse cx="60" cy="56" rx="5" ry="3.5" fill="#2D3E50" />
      <g className="path-icon__heart">
        <path
          d="M92 34c0-5 4-9 9-9 3 0 5 1 7 3 2-2 4-3 7-3 5 0 9 4 9 9 0 10-16 18-16 18S92 44 92 34z"
          fill="#FF6B35"
        />
      </g>
    </svg>
  );
}

function BestFriendIcon() {
  return (
    <svg viewBox="0 0 120 120" className="path-icon__svg">
      <ellipse cx="60" cy="78" rx="34" ry="28" fill="#F0D9B0" />
      <circle cx="60" cy="48" r="26" fill="#F7E6C4" />
      <ellipse cx="38" cy="36" rx="9" ry="18" fill="#E8A04A" />
      <ellipse cx="82" cy="36" rx="9" ry="18" fill="#E8A04A" />
      <circle cx="51" cy="46" r="3.5" fill="#2D3E50" />
      <circle cx="69" cy="46" r="3.5" fill="#2D3E50" />
      <ellipse cx="60" cy="56" rx="5" ry="3.5" fill="#2D3E50" />
      <g className="path-icon__ball">
        <circle cx="96" cy="78" r="12" fill="#FF6B35" />
        <path
          d="M88 78h16M96 70v16M90 72l12 12M90 84l12-12"
          stroke="#FAF0E6"
          strokeWidth="1.6"
        />
      </g>
    </svg>
  );
}
