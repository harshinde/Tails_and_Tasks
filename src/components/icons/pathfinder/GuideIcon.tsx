import { iconClassName, type IconProps } from "@/components/icons/types";

/** Soft star / treat for daily practice */
export function GuideIcon({
  className,
  size = 24,
  title = "The Guide",
  variant = "default",
}: IconProps) {
  return (
    <svg
      className={iconClassName(variant, className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      fill="none"
    >
      <path
        d="M12 3.75 13.95 8.7l5.3.45-4.05 3.45 1.25 5.15L12 15.3l-4.45 2.45 1.25-5.15-4.05-3.45 5.3-.45L12 3.75Z"
        fill="#E0F2F1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.5" r="2.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
