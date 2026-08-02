export type BundleId = "newcomer" | "guide" | "guardian" | "best-friend";

export type LeadSource = "homepage_hero" | "modal_quiz";

export type PathfinderView = "home" | "success";

export interface Bundle {
  id: BundleId;
  name: string;
  title: string;
  description: string;
  supporting: string;
  accent: string;
  watercolor: string;
}

export interface QuizAnswers {
  q1: string;
  q2: string;
}

export interface SubscribePayload {
  source: LeadSource;
  firstName: string;
  email: string;
  pathId: BundleId | null;
  quizData: {
    q1_answer: string | null;
    q2_answer: string | null;
  };
}

export type AnalyticsEventName =
  | "page_view"
  | "pathfinder_started"
  | "bundle_selected"
  | "quiz_step_completed"
  | "hero_lead_captured"
  | "quiz_lead_captured"
  | "lead_captured"
  | "story_asset_downloaded";

export type AnalyticsPayload = Record<string, string | number | undefined>;
