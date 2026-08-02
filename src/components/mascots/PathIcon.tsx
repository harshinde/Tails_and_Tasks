"use client";

import {
  BestFriendIcon,
  GuideIcon,
  GuardianIcon,
  NewcomerIcon,
} from "@/components/icons";
import type { IconVariant } from "@/components/icons/types";
import type { BundleId } from "@/lib/types";

interface PathIconProps {
  bundleId: BundleId;
  active?: boolean;
  selected?: boolean;
}

export function PathIcon({
  bundleId,
  active = false,
  selected = false,
}: PathIconProps) {
  const variant: IconVariant = selected ? "active" : active ? "hover" : "default";
  const className = `path-icon path-icon--${bundleId}${active || selected ? " is-active" : ""}`;

  const shared = {
    className,
    size: 48,
    variant,
  };

  if (bundleId === "newcomer") {
    return <NewcomerIcon {...shared} title="The Newcomer" />;
  }
  if (bundleId === "guide") {
    return <GuideIcon {...shared} title="The Guide" />;
  }
  if (bundleId === "guardian") {
    return <GuardianIcon {...shared} title="The Guardian" />;
  }
  return <BestFriendIcon {...shared} title="The Best Friend" />;
}
