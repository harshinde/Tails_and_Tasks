import { iconClassName, type IconProps } from "@/components/icons/types";

/** Leash looped into a soft circle with paw */
export function BestFriendIcon({
  className,
  size = 24,
  title = "The Best Friend",
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
      <circle
        cx="12"
        cy="12.25"
        r="6.25"
        fill="#E0F2F1"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 3.5c2.1 0 3.5 1.15 3.5 2.7 0 1.1-.7 2-1.7 2.45"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="6.2" r="1.55" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.3 11.1c0-.45.3-.75.6-.75s.6.3.6.75-.3.75-.6.75-.6-.3-.6-.75Zm2.2 0c0-.45.3-.75.6-.75s.6.3.6.75-.3.75-.6.75-.6-.3-.6-.75ZM12 14.55c-1.35-.85-2.1-1.7-2.1-2.55 0-.55.4-1 .95-1 .3 0 .55.15.75.4.08.08.15.08.22 0 .2-.25.45-.4.75-.4.55 0 .95.45.95 1 0 .85-.75 1.7-2.1 2.55Z"
        fill="currentColor"
      />
    </svg>
  );
}
