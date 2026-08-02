export type IconVariant =
  | "default"
  | "muted"
  | "hover"
  | "active"
  | "success"
  | "disabled"
  | "cta";

export interface IconProps {
  className?: string;
  size?: number | string;
  title?: string;
  variant?: IconVariant;
  filled?: boolean;
}

export const ICON_VARIANT_CLASS: Record<IconVariant, string> = {
  default: "icon--default",
  muted: "icon--muted",
  hover: "icon--hover",
  active: "icon--active",
  success: "icon--success",
  disabled: "icon--disabled",
  cta: "icon--cta",
};

export function iconClassName(
  variant: IconVariant = "default",
  className?: string,
) {
  return ["icon", ICON_VARIANT_CLASS[variant], className]
    .filter(Boolean)
    .join(" ");
}
