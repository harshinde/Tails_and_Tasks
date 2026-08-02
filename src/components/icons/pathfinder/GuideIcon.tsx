import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

export function GuideIcon(props: IconProps) {
  return (
    <BrandIcon name="guide" title={props.title ?? "The Guide"} {...props} />
  );
}
