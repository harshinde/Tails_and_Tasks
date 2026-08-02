import { SITE_URL } from "@/lib/bundles";
import type { Bundle, BundleId, LeadSource } from "@/lib/types";

interface ToolkitEmailTheme {
  pageBg: string;
  cardBg: string;
  primary: string;
  secondary: string;
  text: string;
  muted: string;
  border: string;
}

const THEMES: Record<BundleId, ToolkitEmailTheme> = {
  newcomer: {
    pageBg: "#F7F9FC",
    cardBg: "#FFFFFF",
    primary: "#82A0D8",
    secondary: "#FFD670",
    text: "#2C3E50",
    muted: "#5A6B7C",
    border: "#E1E8F0",
  },
  guide: {
    pageBg: "#FAFAFA",
    cardBg: "#FFFFFF",
    primary: "#E07A5F",
    secondary: "#3D5A80",
    text: "#293241",
    muted: "#5C6773",
    border: "#E6E8EB",
  },
  guardian: {
    pageBg: "#F4F1EA",
    cardBg: "#FFFCFA",
    primary: "#3B5B43",
    secondary: "#D99C5B",
    text: "#2F3630",
    muted: "#5C655E",
    border: "#E4DDD0",
  },
  "best-friend": {
    pageBg: "#FFFDF7",
    cardBg: "#FFFFFF",
    primary: "#4ECDC4",
    secondary: "#FFB7B2",
    text: "#1A1A1A",
    muted: "#5C5C5C",
    border: "#EEE8DC",
  },
};

const WELCOME_HOME_CONTENTS = [
  "Home Safety Checklist",
  "Pet Care Schedule Templates",
  "10 Essential Newcomer Checklists",
  "Pet Health Record Sheets",
  "Behavior & Routine Guide",
];

export interface ToolkitEmailContent {
  subject: string;
  html: string;
  text: string;
}

export function buildToolkitEmail(args: {
  firstName: string;
  bundle: Bundle;
  source: LeadSource;
  hasAttachment: boolean;
}): ToolkitEmailContent {
  const { firstName, bundle, source, hasAttachment } = args;
  const theme = THEMES[bundle.id];
  const isWelcomeHome =
    source === "homepage_hero" || bundle.id === "newcomer";
  const kitLabel = isWelcomeHome ? "Welcome Home Starter Kit" : bundle.name;
  const safeName = escapeHtml(firstName);
  const safeKit = escapeHtml(kitLabel);

  const subject = `Your ${kitLabel} is ready, ${firstName}`;

  const intro = isWelcomeHome
    ? `Your foundational pack for safety, routines, health records, and early behavior is ready.`
    : `Great choice picking <strong style="color:${theme.text};">${escapeHtml(bundle.title)}</strong>. Your custom toolkit is ready for the next chapter with your pet.`;

  const attachmentLine = hasAttachment
    ? `Your PDF is attached to this email — open it, print what you need, and take it one small step at a time.`
    : `We're putting the finishing touches on your PDF. This email confirms your kit so we can deliver the file next.`;

  const contentsBlock = isWelcomeHome
    ? `
      <tr>
        <td style="padding:0 32px 8px 32px;">
          <p style="margin:0 0 12px 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${theme.primary};">
            Inside your kit
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 32px 28px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${WELCOME_HOME_CONTENTS.map(
              (item, index) => `
              <tr>
                <td style="padding:10px 14px;border:1px solid ${theme.border};${index === 0 ? `border-radius:12px 12px 0 0;` : ""}${index === WELCOME_HOME_CONTENTS.length - 1 ? `border-radius:0 0 12px 12px;` : ""}border-top:${index === 0 ? `1px solid ${theme.border}` : "none"};background:${theme.cardBg};">
                  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="width:18px;vertical-align:top;padding-top:2px;">
                        <div style="width:14px;height:14px;border:2px solid ${theme.secondary};border-radius:3px;background:#fff;">&nbsp;</div>
                      </td>
                      <td style="padding-left:10px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.4;color:${theme.text};">
                        ${escapeHtml(item)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`,
            ).join("")}
          </table>
        </td>
      </tr>`
    : "";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${theme.pageBg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:${theme.pageBg};">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;max-width:560px;background:${theme.cardBg};border:1px solid ${theme.border};border-radius:20px;overflow:hidden;">
          <tr>
            <td style="height:6px;background:${theme.primary};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="height:4px;background:${theme.secondary};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:36px 32px 8px 32px;">
              <p style="margin:0 0 18px 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.1;font-weight:700;color:${theme.text};">
                Paws &amp; Tasks
              </p>
              <p style="margin:0 0 10px 0;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.25;font-style:italic;color:${theme.primary};">
                Your ${safeKit} is ready
              </p>
              <p style="margin:0 0 22px 0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:${theme.text};">
                Hey ${safeName},
              </p>
              <p style="margin:0 0 16px 0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:${theme.muted};">
                ${intro}
              </p>
              <p style="margin:0 0 28px 0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:${theme.muted};">
                ${attachmentLine}
              </p>
            </td>
          </tr>
          ${contentsBlock}
          <tr>
            <td style="padding:0 32px 32px 32px;" align="left">
              <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="border-radius:999px;background:${theme.primary};">
                    <a href="${SITE_URL}" style="display:inline-block;padding:14px 22px;font-family:Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                      Visit Paws &amp; Tasks
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;border-top:1px solid ${theme.border};background:${theme.pageBg};">
              <p style="margin:0 0 6px 0;font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;color:${theme.muted};">
                Building better habits, one path at a time.
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:${theme.text};">
                — Paws &amp; Tasks
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:18px 0 0 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:1.4;color:${theme.muted};max-width:560px;">
          You received this because you requested a free toolkit from
          <a href="${SITE_URL}" style="color:${theme.primary};text-decoration:none;">pawsandtasks.com</a>.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  const text = [
    `Paws & Tasks`,
    ``,
    `Hey ${firstName},`,
    ``,
    `Your ${kitLabel} is ready.`,
    isWelcomeHome
      ? `Your foundational pack for safety, routines, health records, and early behavior is ready.`
      : `Great choice picking ${bundle.title}. Your custom toolkit is ready.`,
    ``,
    hasAttachment
      ? `Your PDF is attached to this email.`
      : `We're finalizing the PDF and will deliver it next.`,
    ``,
    ...(isWelcomeHome
      ? ["Inside your kit:", ...WELCOME_HOME_CONTENTS.map((item) => `- ${item}`), ""]
      : []),
    `Visit ${SITE_URL}`,
    ``,
    `Building better habits, one path at a time.`,
    `— Paws & Tasks`,
  ].join("\n");

  return { subject, html, text };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
