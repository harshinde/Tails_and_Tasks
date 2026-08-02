import { iconClassName, type IconProps } from "@/components/icons/types";

/** Rounded square with soft curved check */
export function CompletedCheck({
  className,
  size = 24,
  title,
  variant = "success",
}: IconProps) {
  return (
    <svg
      className={iconClassName(variant, `${className ?? ""} icon--draw-check`)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        fill="#E0F2F1"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        className="icon__check-path"
        d="M7.5 12.25 10.6 15.4c.2.2.5.2.7 0L16.75 8.8"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
