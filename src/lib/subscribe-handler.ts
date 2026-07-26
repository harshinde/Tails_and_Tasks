import { NextResponse } from "next/server";
import { createResendClient } from "@/lib/resend";
import { parseSubscribePayload } from "@/lib/subscribe";
import {
  sendToolkitEmail,
  upsertLeadContact,
} from "@/lib/toolkit-delivery";

export async function handleSubscribeRequest(body: unknown) {
  const parsed = parseSubscribePayload(body);

  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { firstName, email, pathId, source, quizData } = parsed.data;
  if (!pathId) {
    return NextResponse.json(
      { error: "A valid path selection is required." },
      { status: 400 },
    );
  }

  const resend = createResendClient();
  if (!resend) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Missing RESEND_API_KEY / resend_api_key.",
      },
      { status: 503 },
    );
  }

  await upsertLeadContact(resend, {
    firstName,
    email,
    pathId,
    source,
    q1Answer: quizData.q1_answer,
    q2Answer: quizData.q2_answer,
  });

  const emailResult = await sendToolkitEmail({
    resend,
    firstName,
    email,
    bundleId: pathId,
  });

  return NextResponse.json({
    ok: true,
    lead: {
      email,
      pathId,
      source,
      createdAt: new Date().toISOString(),
    },
    emailId: emailResult?.id ?? null,
  });
}
