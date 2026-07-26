import { NextResponse } from "next/server";
import type { BundleId } from "@/lib/types";

const VALID_BUNDLES: BundleId[] = [
  "newcomer",
  "guide",
  "guardian",
  "best-friend",
];

/**
 * MVP lead capture endpoint.
 * Persists the email ↔ bundle_id association shape expected by future app sync.
 * Swap the in-memory store for Mailchimp / ConvertKit / your database.
 */
const leads: Array<{
  firstName: string;
  email: string;
  bundleId: BundleId;
  createdAt: string;
}> = [];

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

    if (!firstName || firstName.length < 1) {
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

    const record = {
      firstName,
      email,
      bundleId,
      createdAt: new Date().toISOString(),
    };

    leads.push(record);

    // Ready for ESP webhook / CRM sync:
    // await convertKit.subscribe({ email, firstName, tags: [bundleId] })

    return NextResponse.json({
      ok: true,
      lead: {
        email: record.email,
        bundleId: record.bundleId,
        createdAt: record.createdAt,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to capture lead." },
      { status: 500 },
    );
  }
}
