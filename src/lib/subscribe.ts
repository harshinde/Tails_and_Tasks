import type { BundleId, LeadSource, SubscribePayload } from "@/lib/types";

const VALID_BUNDLES: BundleId[] = [
  "newcomer",
  "guide",
  "guardian",
  "best-friend",
];

const VALID_SOURCES: LeadSource[] = ["homepage_hero", "modal_quiz"];

export function parseSubscribePayload(body: unknown):
  | { ok: true; data: SubscribePayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const firstName =
    typeof raw.firstName === "string" ? raw.firstName.trim() : "";
  const email =
    typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const source = raw.source as LeadSource | undefined;

  if (!firstName) {
    return { ok: false, error: "First name is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "A valid email is required." };
  }

  if (!source || !VALID_SOURCES.includes(source)) {
    return { ok: false, error: "A valid source is required." };
  }

  const quizRaw =
    raw.quizData && typeof raw.quizData === "object"
      ? (raw.quizData as Record<string, unknown>)
      : {};

  const q1 =
    typeof quizRaw.q1_answer === "string" && quizRaw.q1_answer.trim()
      ? quizRaw.q1_answer.trim()
      : null;
  const q2 =
    typeof quizRaw.q2_answer === "string" && quizRaw.q2_answer.trim()
      ? quizRaw.q2_answer.trim()
      : null;

  let pathId: BundleId | null =
    typeof raw.pathId === "string" && VALID_BUNDLES.includes(raw.pathId as BundleId)
      ? (raw.pathId as BundleId)
      : null;

  // Hero fast-track maps to the Welcome / newcomer kit.
  if (source === "homepage_hero") {
    pathId = "newcomer";
  }

  if (source === "modal_quiz") {
    if (!pathId) {
      return { ok: false, error: "A valid path selection is required." };
    }
    if (!q1 || !q2) {
      return { ok: false, error: "Quiz answers are required." };
    }
  }

  return {
    ok: true,
    data: {
      source,
      firstName,
      email,
      pathId,
      quizData: {
        q1_answer: q1,
        q2_answer: q2,
      },
    },
  };
}
