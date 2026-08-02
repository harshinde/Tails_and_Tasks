import { iconClassName, type IconProps } from "@/components/icons/types";

/** Two soft overlapping paws for community / join */
export function CommunityJoin({
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
      <g opacity="0.55">
        <ellipse cx="8" cy="7.2" rx="1.2" ry="1.5" fill="currentColor" />
        <ellipse cx="10.5" cy="6.3" rx="1.2" ry="1.5" fill="currentColor" />
        <ellipse cx="13" cy="7.2" rx="1.2" ry="1.5" fill="currentColor" />
        <path
          d="M10.5 14.2c-2.4-1.55-3.8-3.1-3.8-4.75 0-1.15.85-2 1.9-2 .6 0 1.15.28 1.5.72.15.18.3.18.45 0 .35-.44.9-.72 1.5-.72 1.05 0 1.9.85 1.9 2 0 1.65-1.4 3.2-3.45 4.75Z"
          fill="currentColor"
        />
      </g>
      <g>
        <ellipse cx="12.2" cy="10.4" rx="1.25" ry="1.55" fill="currentColor" />
        <ellipse cx="14.8" cy="9.4" rx="1.25" ry="1.55" fill="currentColor" />
        <ellipse cx="17.4" cy="10.4" rx="1.25" ry="1.55" fill="currentColor" />
        <path
          d="M14.8 18.3c-2.55-1.65-4-3.3-4-5.05 0-1.2.9-2.1 2-2.1.65 0 1.2.3 1.6.75.15.18.3.18.45 0 .4-.45.95-.75 1.6-.75 1.1 0 2 .9 2 2.1 0 1.75-1.45 3.4-3.65 5.05Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
