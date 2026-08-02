import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

export function CompletedCheck({
  variant = "success",
  className,
  ...props
}: IconProps) {
  return (
    <BrandIcon
      name="completedCheck"
      variant={variant}
      className={`icon--draw-check ${className ?? ""}`.trim()}
      {...props}
    />
  );
}
