import { iconClassName, type IconProps } from "@/components/icons/types";

/** Checklist with paw as a checkmark accent */
export function ChecklistPaw({
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
      <rect
        x="4"
        y="3.5"
        width="16"
        height="17"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 9h8M8 13h5.5M8 17h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="17.25" cy="16.5" r="3.1" fill="#E0F2F1" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16.2 15.65c0-.38.26-.65.52-.65s.52.27.52.65-.26.65-.52.65-.52-.27-.52-.65Zm1.55 0c0-.38.26-.65.52-.65s.52.27.52.65-.26.65-.52.65-.52-.27-.52-.65ZM17.25 18.15c-.95-.6-1.5-1.2-1.5-1.8 0-.42.32-.75.7-.75.22 0 .42.12.56.28.05.05.1.05.14 0 .14-.16.34-.28.56-.28.38 0 .7.33.7.75 0 .6-.55 1.2-1.5 1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
