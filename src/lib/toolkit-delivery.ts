import type { Resend } from "resend";
import { getBundleById, SITE_URL } from "@/lib/bundles";
import { buildToolkitEmail } from "@/lib/email-templates/toolkit-email";
import { getResendFromEmail } from "@/lib/resend";
import type { BundleId, LeadSource } from "@/lib/types";

interface ContactArgs {
  firstName: string;
  email: string;
  pathId: BundleId;
  source: LeadSource;
  q1Answer?: string | null;
  q2Answer?: string | null;
}

interface DeliverToolkitArgs {
  resend: Resend;
  firstName: string;
  email: string;
  bundleId: BundleId;
  source: LeadSource;
}

export async function upsertLeadContact(resend: Resend, args: ContactArgs) {
  const properties: Record<string, string> = {
    bundle_id: args.pathId,
    path_id: args.pathId,
    source: args.source,
  };

  if (args.q1Answer) properties.q1_answer = args.q1Answer;
  if (args.q2Answer) properties.q2_answer = args.q2Answer;

  const attempts = [
    {
      email: args.email,
      firstName: args.firstName,
      unsubscribed: false,
      properties,
    },
    {
      email: args.email,
      firstName: args.firstName,
      unsubscribed: false,
      properties: {
        bundle_id: args.pathId,
        source: args.source,
      },
    },
    {
      email: args.email,
      firstName: args.firstName,
      unsubscribed: false,
    },
  ] as const;

  let lastError: string | null = null;

  for (const payload of attempts) {
    const { data, error } = await resend.contacts.create(payload);

    if (!error) {
      return data;
    }

    lastError = error.message || "Unable to save contact in Resend.";
    const message = lastError.toLowerCase();
    const isDuplicate =
      message.includes("already exists") ||
      message.includes("contact already") ||
      message.includes("duplicate");

    if (isDuplicate) {
      // Existing contact is enough for MVP; continue to toolkit email.
      return null;
    }
  }

  throw new Error(lastError || "Unable to save contact in Resend.");
}

export async function sendToolkitEmail({
  resend,
  firstName,
  email,
  bundleId,
  source,
}: DeliverToolkitArgs) {
  const bundle = getBundleById(bundleId);
  if (!bundle) {
    throw new Error("Unknown bundle selected.");
  }

  const attachment = await loadToolkitAttachment(bundleId);
  const template = buildToolkitEmail({
    firstName,
    bundle,
    source,
    hasAttachment: Boolean(attachment),
  });

  const { data, error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: email,
    subject: template.subject,
    html: template.html,
    text: template.text,
    tags: [
      { name: "bundle_id", value: bundleId },
      { name: "source", value: source },
    ],
    attachments: attachment ? [attachment] : undefined,
  });

  if (error) {
    throw new Error(error.message || "Unable to send toolkit email.");
  }

  return data;
}

/**
 * Prefer a public URL attachment (Workers-friendly).
 * Resend fetches the file from `path` when sending.
 */
async function loadToolkitAttachment(bundleId: BundleId) {
  const filename = `${bundleId}.pdf`;
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    SITE_URL
  ).replace(/\/$/, "");
  const url = `${base}/toolkits/${filename}`;

  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) return null;
    return {
      filename,
      path: url,
    };
  } catch {
    return null;
  }
}
