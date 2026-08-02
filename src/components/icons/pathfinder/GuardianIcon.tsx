import { iconClassName, type IconProps } from "@/components/icons/types";

/** Soft shield with heart — health / longevity */
export function GuardianIcon({
  className,
  size = 24,
  title = "The Guardian",
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
        d="M12 3.5 18.5 6.25v5.4c0 4.15-2.7 7.15-6.5 8.85-3.8-1.7-6.5-4.7-6.5-8.85V6.25L12 3.5Z"
        fill="#E0F2F1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.6c-1.85-1.2-2.95-2.45-2.95-3.7 0-.9.65-1.55 1.45-1.55.5 0 .95.25 1.2.65.1.15.25.15.35 0 .25-.4.7-.65 1.2-.65.8 0 1.45.65 1.45 1.55 0 1.25-1.1 2.5-2.7 3.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
