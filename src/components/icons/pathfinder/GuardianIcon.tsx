import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

export function GuardianIcon(props: IconProps) {
  return (
    <BrandIcon
      name="guardian"
      title={props.title ?? "The Guardian"}
      {...props}
    />
  );
}
