import { NextResponse } from "next/server";
import { createResendClient } from "@/lib/resend";
import {
  sendToolkitEmail,
  upsertLeadContact,
} from "@/lib/toolkit-delivery";
import type { BundleId } from "@/lib/types";

const VALID_BUNDLES: BundleId[] = [
  "newcomer",
  "guide",
  "guardian",
  "best-friend",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      email?: string;
      bundleId?: string;
    };

    const firstName = body.firstName?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const bundleId = body.bundleId as BundleId | undefined;

    if (!firstName) {
      return NextResponse.json(
        { error: "First name is required." },
        { status: 400 },
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 },
      );
    }

    if (!bundleId || !VALID_BUNDLES.includes(bundleId)) {
      return NextResponse.json(
        { error: "A valid bundle selection is required." },
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

    await upsertLeadContact(resend, { firstName, email, bundleId });
    const emailResult = await sendToolkitEmail({
      resend,
      firstName,
      email,
      bundleId,
    });

    return NextResponse.json({
      ok: true,
      lead: {
        email,
        bundleId,
        createdAt: new Date().toISOString(),
      },
      emailId: emailResult?.id ?? null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to capture lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
