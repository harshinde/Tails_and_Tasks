import { Resend } from "resend";

/** Cursor secret may be `resend_api_key`; local/prod often uses `RESEND_API_KEY`. */
export function getResendApiKey() {
  return process.env.RESEND_API_KEY || process.env.resend_api_key || "";
}

export function getResendFromEmail() {
  return (
    process.env.RESEND_FROM_EMAIL ||
    "Paws & Tasks <hello@pawsandtasks.com>"
  );
}

export function createResendClient() {
  const apiKey = getResendApiKey();
  if (!apiKey) return null;
  return new Resend(apiKey);
}
