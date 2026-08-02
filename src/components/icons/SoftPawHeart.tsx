import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

/** Signature Soft Paw + Heart — brand mark */
export function SoftPawHeart({
  title = "Paws & Tasks",
  variant = "default",
  ...props
}: IconProps) {
  return (
    <BrandIcon
      name="softPawHeart"
      title={title}
      variant={variant}
      {...props}
    />
  );
}
