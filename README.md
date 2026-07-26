# Tails & Tasks — Pathfinder Landing Page

Interactive lead-capture landing page that segments Instagram pet parents into toolkit bundles via a lightweight Pathfinder quiz.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## UX states

1. **Hero** — brand hook + “Start the Pathfinder”
2. **Segmentation grid** — Newcomer / Guide / Guardian / Best Friend
3. **Opt-in modal** — first name + email, scoped to selected bundle
4. **Success** — inbox confirmation + Instagram Story graphic download

## Analytics events

Custom events are pushed to `window.dataLayer` and mirrored on `window.__pathfinderEvents`:

| Event | Trigger |
| --- | --- |
| `page_view` | Landing load (`utm_source`, `utm_campaign`) |
| `pathfinder_started` | Primary CTA click |
| `bundle_selected` | Path card click (`bundle_id`, `bundle_name`) |
| `lead_captured` | Successful form submit (`bundle_id`, `email_domain`) |
| `story_asset_downloaded` | Story graphic download (`bundle_id`) |

## Lead API

`POST /api/lead` accepts `{ firstName, email, bundleId }` and returns the email ↔ bundle association shape for future ESP / app sync (Mailchimp, ConvertKit, etc.).

## Stack

- Next.js (App Router) + React
- CSS (Tailwind v4 + custom design tokens)
- SVG mascot micro-animations (Lottie/Rive-ready slots)

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
