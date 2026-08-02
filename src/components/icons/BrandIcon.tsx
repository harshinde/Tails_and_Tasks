import type { CSSProperties } from "react";
import { ICON_ASSETS, type IconAssetKey } from "@/components/icons/assets";
import { iconClassName, type IconProps } from "@/components/icons/types";

export type BrandIconProps = IconProps & {
  name: IconAssetKey;
};

/** Renders a `public/icons` asset via CSS mask so `currentColor` theming works. */
export function BrandIcon({
  name,
  className,
  size = 24,
  title,
  variant = "default",
}: BrandIconProps) {
  const dimension = typeof size === "number" ? `${size}px` : size;
  const style = {
    ["--icon-url" as string]: `url("${ICON_ASSETS[name]}")`,
    width: dimension,
    height: dimension,
  } as CSSProperties;

  return (
    <span
      className={iconClassName(variant, `icon-asset ${className ?? ""}`.trim())}
      style={style}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    />
  );
}
