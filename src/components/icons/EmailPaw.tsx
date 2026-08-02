interface EmailPawProps {
  className?: string;
}

/** Email envelope + soft paw accent */
export function EmailPaw({ className }: EmailPawProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="6"
        y="12"
        width="36"
        height="26"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 16.5 24 27l16-10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36.5" cy="34.5" r="7.5" fill="#E0F2F1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M34.2 32.4c0-.7.5-1.2 1-1.2s1 .5 1 1.2-.5 1.2-1 1.2-1-.5-1-1.2Zm3.1 0c0-.7.5-1.2 1-1.2s1 .5 1 1.2-.5 1.2-1 1.2-1-.5-1-1.2ZM36.5 38.2c-1.7-1.1-2.7-2.2-2.7-3.3 0-.8.6-1.4 1.3-1.4.4 0 .8.2 1.1.5.1.1.2.1.3 0 .3-.3.7-.5 1.1-.5.7 0 1.3.6 1.3 1.4 0 1.1-1 2.2-2.7 3.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
