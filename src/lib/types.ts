export type BundleId = "newcomer" | "guide" | "guardian" | "best-friend";

export type PathfinderView = "hero" | "grid" | "success";

export interface Bundle {
  id: BundleId;
  name: string;
  title: string;
  description: string;
  accent: string;
  watercolor: string;
}

export interface LeadPayload {
  firstName: string;
  email: string;
  bundleId: BundleId;
}

export type AnalyticsEventName =
  | "page_view"
  | "pathfinder_started"
  | "bundle_selected"
  | "lead_captured"
  | "story_asset_downloaded";

export type AnalyticsPayload = Record<string, string | number | undefined>;
