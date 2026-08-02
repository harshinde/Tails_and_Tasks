interface CompletedCheckProps {
  className?: string;
}

/** Soft completed-check mark for success states */
export function CompletedCheck({ className }: CompletedCheckProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="24" cy="24" r="18" fill="#E0F2F1" stroke="#008080" strokeWidth="2" />
      <path
        d="M15.5 24.5 21 30l11.5-13"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
