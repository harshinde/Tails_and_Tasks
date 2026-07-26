# Paws & Tasks — Pathfinder Landing Page

Interactive lead-capture landing page that segments Instagram pet parents into toolkit bundles via a lightweight Pathfinder quiz.

## Quick start

```bash
npm install
cp .env.example .env.local   # add your Resend key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` or `resend_api_key` | Yes | Resend API key (Cursor Secret or `.env.local`) |
| `RESEND_FROM_EMAIL` | No | Defaults to `Paws & Tasks <hello@pawsandtasks.com>` |

## UX states

1. **Hero** — brand hook + “Start the Pathfinder”
2. **Segmentation grid** — Newcomer / Guide / Guardian / Best Friend
3. **Opt-in modal** — first name + email, scoped to selected bundle
4. **Success** — inbox confirmation + Instagram Story graphic download

## Lead capture + PDF delivery (Resend)

`POST /api/lead` will:

1. Create a Resend **Contact** (`email`, `firstName`, optional `bundle_id` property)
2. Send a toolkit email from your verified `pawsandtasks.com` domain
3. Attach `public/toolkits/{bundleId}.pdf` when that file exists

Add PDFs as:

```text
public/toolkits/newcomer.pdf
public/toolkits/guide.pdf
public/toolkits/guardian.pdf
public/toolkits/best-friend.pdf
```

Until those files exist, the confirmation email still sends (without attachment).

## Analytics events

Custom events are pushed to `window.dataLayer` and mirrored on `window.__pathfinderEvents`:

| Event | Trigger |
| --- | --- |
| `page_view` | Landing load (`utm_source`, `utm_campaign`) |
| `pathfinder_started` | Primary CTA click |
| `bundle_selected` | Path card click (`bundle_id`, `bundle_name`) |
| `lead_captured` | Successful form submit (`bundle_id`, `email_domain`) |
| `story_asset_downloaded` | Story graphic download (`bundle_id`) |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
