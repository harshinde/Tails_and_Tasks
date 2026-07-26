import type { AnalyticsEventName, AnalyticsPayload } from "./types";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __pathfinderEvents?: Array<{
      event: AnalyticsEventName;
      payload: AnalyticsPayload;
      at: string;
    }>;
  }
}

function getUtmParams() {
  if (typeof window === "undefined") {
    return { utm_source: undefined, utm_campaign: undefined };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
  };
}

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") return;

  const enriched = {
    ...payload,
    ...(["page_view"].includes(event) ? getUtmParams() : {}),
  };

  const entry = {
    event,
    payload: enriched,
    at: new Date().toISOString(),
  };

  window.__pathfinderEvents = window.__pathfinderEvents ?? [];
  window.__pathfinderEvents.push(entry);

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...enriched });

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, enriched);
  }
}
