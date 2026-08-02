import { iconClassName, type IconProps } from "@/components/icons/types";

/** Signature Soft Paw + Heart — brand mark */
export function SoftPawHeart({
  className,
  size = 24,
  title = "Paws & Tasks",
  variant = "default",
  filled = true,
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
      <ellipse cx="8.2" cy="6.8" rx="1.7" ry="2.1" fill="currentColor" />
      <ellipse cx="12" cy="5.6" rx="1.7" ry="2.1" fill="currentColor" />
      <ellipse cx="15.8" cy="6.8" rx="1.7" ry="2.1" fill="currentColor" />
      <ellipse cx="6.4" cy="10.4" rx="1.55" ry="2" fill="currentColor" />
      <ellipse cx="17.6" cy="10.4" rx="1.55" ry="2" fill="currentColor" />
      <path
        d="M12 20.2c-3.6-2.35-5.7-4.7-5.7-7.15 0-1.7 1.25-2.95 2.8-2.95.9 0 1.7.4 2.25 1.05.2.25.4.25.6 0A2.8 2.8 0 0 1 14.9 10.1c1.55 0 2.8 1.25 2.8 2.95 0 2.45-2.1 4.8-5.7 7.15Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
