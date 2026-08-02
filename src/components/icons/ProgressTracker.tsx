import { iconClassName, type IconProps } from "@/components/icons/types";

interface ProgressTrackerProps extends IconProps {
  /** 0–1 progress ratio for filled segments */
  progress?: number;
  segments?: number;
}

/** Soft segmented progress bar with paw indicator */
export function ProgressTracker({
  className,
  size = 24,
  title,
  variant = "default",
  progress = 0.33,
  segments = 3,
}: ProgressTrackerProps) {
  const activeCount = Math.max(
    0,
    Math.min(segments, Math.round(progress * segments)),
  );

  return (
    <svg
      className={iconClassName(variant, className)}
      width={typeof size === "number" ? size * 3 : size}
      height={size}
      viewBox="0 0 72 24"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {Array.from({ length: segments }).map((_, index) => {
        const x = 4 + index * 20;
        const active = index < activeCount;
        return (
          <rect
            key={index}
            x={x}
            y="9"
            width="16"
            height="6"
            rx="3"
            fill={active ? "currentColor" : "#E0F2F1"}
            stroke="currentColor"
            strokeWidth="1.4"
            opacity={active ? 1 : 0.55}
          />
        );
      })}
      <g transform={`translate(${4 + Math.max(0, activeCount - 1) * 20 + 3} 2.5)`}>
        <circle cx="5" cy="5" r="5" fill="#FFF0E8" stroke="#FF6B35" strokeWidth="1.35" />
        <path
          d="M3.7 3.9c0-.35.24-.6.48-.6s.48.25.48.6-.24.6-.48.6-.48-.25-.48-.6Zm1.9 0c0-.35.24-.6.48-.6s.48.25.48.6-.24.6-.48.6-.48-.25-.48-.6ZM5 6.55c-.9-.55-1.4-1.1-1.4-1.65 0-.38.28-.68.62-.68.2 0 .38.1.5.25.04.04.08.04.12 0 .12-.15.3-.25.5-.25.34 0 .62.3.62.68 0 .55-.5 1.1-1.4 1.65Z"
          fill="#FF6B35"
        />
      </g>
    </svg>
  );
}
