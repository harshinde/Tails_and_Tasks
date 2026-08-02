import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

export function NewcomerIcon(props: IconProps) {
  return (
    <BrandIcon
      name="newcomer"
      title={props.title ?? "The Newcomer"}
      {...props}
    />
  );
}
