import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

export function BestFriendIcon(props: IconProps) {
  return (
    <BrandIcon
      name="bestFriend"
      title={props.title ?? "The Best Friend"}
      {...props}
    />
  );
}
