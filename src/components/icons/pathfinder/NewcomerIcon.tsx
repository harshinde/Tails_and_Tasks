import { iconClassName, type IconProps } from "@/components/icons/types";

/** Soft house with paw in the doorway */
export function NewcomerIcon({
  className,
  size = 24,
  title = "The Newcomer",
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
        d="M4.75 11.25 12 4.75l7.25 6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5V18.5A1.5 1.5 0 0 0 8 20h8a1.5 1.5 0 0 0 1.5-1.5V10.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <rect x="9.75" y="14" width="4.5" height="6" rx="1.25" fill="#E0F2F1" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M11.1 15.55c0-.35.24-.6.48-.6s.48.25.48.6-.24.6-.48.6-.48-.25-.48-.6Zm1.55 0c0-.35.24-.6.48-.6s.48.25.48.6-.24.6-.48.6-.48-.25-.48-.6ZM12 18.05c-.9-.55-1.4-1.1-1.4-1.65 0-.38.28-.68.62-.68.2 0 .38.1.5.25.04.04.08.04.12 0 .12-.15.3-.25.5-.25.34 0 .62.3.62.68 0 .55-.5 1.1-1.4 1.65Z"
        fill="currentColor"
      />
    </svg>
  );
}
