import { iconClassName, type IconProps } from "@/components/icons/types";

/** Soft download arrow into tray with paw accent */
export function DownloadInstant({
  className,
  size = 24,
  title,
  variant = "default",
}: IconProps) {
  return (
    <svg
      className={iconClassName(variant, className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <path
        d="M12 4.5v9.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="m8.25 10.5 3.75 3.75 3.75-3.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16.25v1.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="17.75" cy="7.25" r="2.5" fill="#E0F2F1" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M16.9 6.55c0-.32.22-.55.45-.55s.45.23.45.55-.22.55-.45.55-.45-.23-.45-.55Zm1.35 0c0-.32.22-.55.45-.55s.45.23.45.55-.22.55-.45.55-.45-.23-.45-.55ZM17.75 8.75c-.75-.5-1.2-.95-1.2-1.45 0-.35.25-.6.55-.6.18 0 .34.1.45.22.04.04.08.04.12 0 .11-.12.27-.22.45-.22.3 0 .55.25.55.6 0 .5-.45.95-1.2 1.45Z"
        fill="currentColor"
      />
    </svg>
  );
}
