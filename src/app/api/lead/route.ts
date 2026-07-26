import { NextResponse } from "next/server";
import { handleSubscribeRequest } from "@/lib/subscribe-handler";

/**
 * Back-compat shim. Prefer POST /api/subscribe.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      email?: string;
      bundleId?: string;
    };

    return await handleSubscribeRequest({
      source: "modal_quiz",
      firstName: body.firstName,
      email: body.email,
      pathId: body.bundleId ?? null,
      quizData: {
        q1_answer: "legacy_api",
        q2_answer: "legacy_api",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to capture lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
