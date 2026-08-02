import { iconClassName, type IconProps } from "@/components/icons/types";

/** Open gift box with ribbon and tiny paw */
export function FreeResourceGift({
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
        d="M4.5 10.5h15v8.25A1.75 1.75 0 0 1 17.75 20.5h-11.5A1.75 1.75 0 0 1 4.5 18.75V10.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 7.75h16.5v2.75H3.75V7.75Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.75V20.5M12 7.75c-.9-2.1-2.7-3.35-4.35-2.7-1.2.45-1.55 1.9-.75 3.05M12 7.75c.9-2.1 2.7-3.35 4.35-2.7 1.2.45 1.55 1.9.75 3.05"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.6" cy="15.4" r="2.35" fill="#E0F2F1" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16.7 14.7c0-.35.25-.6.5-.6s.5.25.5.6-.25.6-.5.6-.5-.25-.5-.6Zm1.45 0c0-.35.25-.6.5-.6s.5.25.5.6-.25.6-.5.6-.5-.25-.5-.6ZM17.6 17.15c-.85-.55-1.35-1.1-1.35-1.65 0-.4.3-.7.65-.7.2 0 .4.1.55.25.05.05.1.05.15 0 .15-.15.35-.25.55-.25.35 0 .65.3.65.7 0 .55-.5 1.1-1.35 1.65Z"
        fill="currentColor"
      />
    </svg>
  );
}
