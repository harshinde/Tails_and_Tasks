import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Resend } from "resend";
import { getBundleById } from "@/lib/bundles";
import { getResendFromEmail } from "@/lib/resend";
import type { BundleId } from "@/lib/types";

interface DeliverToolkitArgs {
  resend: Resend;
  firstName: string;
  email: string;
  bundleId: BundleId;
}

export async function upsertLeadContact(
  resend: Resend,
  args: { firstName: string; email: string; bundleId: BundleId },
) {
  const attempts = [
    {
      email: args.email,
      firstName: args.firstName,
      unsubscribed: false,
      properties: { bundle_id: args.bundleId },
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
}: DeliverToolkitArgs) {
  const bundle = getBundleById(bundleId);
  if (!bundle) {
    throw new Error("Unknown bundle selected.");
  }

  const attachment = await loadToolkitAttachment(bundleId);
  const subject = `Your ${bundle.name} toolkit is ready, ${firstName}`;

  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #2C2A28; line-height: 1.5; max-width: 560px; margin: 0 auto;">
      <p style="font-size: 28px; font-weight: 700; margin: 0 0 8px;">Paws &amp; Tasks</p>
      <p style="font-size: 18px; margin: 0 0 20px;">Hey ${escapeHtml(firstName)},</p>
      <p style="font-family: Arial, sans-serif; font-size: 16px; color: #444;">
        Great choice picking <strong>${escapeHtml(bundle.title)}</strong>.
        Your <strong>${escapeHtml(bundle.name)}</strong> digital toolkit is on its way.
      </p>
      ${
        attachment
          ? `<p style="font-family: Arial, sans-serif; font-size: 16px; color: #444;">You'll find your PDF attached to this email.</p>`
          : `<p style="font-family: Arial, sans-serif; font-size: 16px; color: #444;">We're finalizing the PDF files — this confirmation locks in your ${escapeHtml(bundle.name)} path so we can deliver it next.</p>`
      }
      <p style="font-family: Arial, sans-serif; font-size: 14px; color: #777; margin-top: 28px;">
        Building better habits, one path at a time.<br />
        — Paws &amp; Tasks
      </p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: email,
    subject,
    html,
    tags: [
      { name: "bundle_id", value: bundleId },
      { name: "source", value: "pathfinder" },
    ],
    attachments: attachment ? [attachment] : undefined,
  });

  if (error) {
    throw new Error(error.message || "Unable to send toolkit email.");
  }

  return data;
}

async function loadToolkitAttachment(bundleId: BundleId) {
  const filename = `${bundleId}.pdf`;
  const filePath = path.join(process.cwd(), "public", "toolkits", filename);

  try {
    const content = await readFile(filePath);
    return {
      filename,
      content,
    };
  } catch {
    return null;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
