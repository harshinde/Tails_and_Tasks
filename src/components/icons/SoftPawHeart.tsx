interface SoftPawHeartProps {
  className?: string;
  title?: string;
}

/** Signature Soft Paw + Heart mark — color via currentColor */
export function SoftPawHeart({
  className,
  title = "Paws & Tasks",
}: SoftPawHeartProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Toe pads */}
      <ellipse cx="11.2" cy="9" rx="2.4" ry="3" fill="currentColor" />
      <ellipse cx="16" cy="7.4" rx="2.4" ry="3" fill="currentColor" />
      <ellipse cx="20.8" cy="9" rx="2.4" ry="3" fill="currentColor" />
      <ellipse cx="8.6" cy="13.8" rx="2.2" ry="2.8" fill="currentColor" />
      <ellipse cx="23.4" cy="13.8" rx="2.2" ry="2.8" fill="currentColor" />
      {/* Heart-shaped main pad */}
      <path
        d="M16 26.8c-4.6-3-7.4-6-7.4-9.2 0-2.2 1.6-3.8 3.6-3.8 1.1 0 2.2.5 2.9 1.3.3.3.5.3.8 0 .7-.8 1.8-1.3 2.9-1.3 2 0 3.6 1.6 3.6 3.8 0 3.2-2.8 6.2-6.4 9.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
