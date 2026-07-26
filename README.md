# Paws & Tasks — Pathfinder Landing Page

Interactive lead-capture landing page that segments Instagram pet parents into toolkit bundles via a lightweight Pathfinder quiz.

Hosted on **Cloudflare Workers** (OpenNext) at [pawsandtasks.com](https://pawsandtasks.com).

## Product docs

- [PRD (as-built)](./docs/PRD.md)
- [Tech & UX architecture](./docs/ARCHITECTURE.md)

## Quick start (local)

```bash
npm install
cp .env.example .env.local   # add your Resend key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview in the Cloudflare Workers runtime locally:

```bash
cp .dev.vars.example .dev.vars   # add Resend key
npm run preview
```

## Deploy to Cloudflare Workers

### One-time Cloudflare setup

1. Install Wrangler login on the machine that deploys (or use Workers Builds CI):
   ```bash
   npx wrangler login
   ```
2. In Cloudflare Dashboard → **Workers & Pages** → your worker (`tails-and-tasks`)  
   or create it on first `npm run deploy`.
3. Attach custom domain `pawsandtasks.com` (and optional `www`) to the Worker.
4. Add secrets (Workers → Settings → Variables and Secrets):
   - `RESEND_API_KEY` = your Resend API key (**Secret**)
   - optional override: `RESEND_FROM_EMAIL`
   - optional: `NEXT_PUBLIC_SITE_URL=https://pawsandtasks.com`

CLI alternative for the secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

### Deploy from this repo

```bash
npm run deploy
```

That builds with OpenNext and deploys the Worker named `tails-and-tasks` (see `wrangler.jsonc`).

### Git-connected deploys (recommended)

In Cloudflare → **Workers & Pages** → `tails-and-tasks` → **Settings → Build**:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx opennextjs-cloudflare deploy` |
| Non-production deploy | `npx opennextjs-cloudflare upload` |

Also set the `RESEND_API_KEY` secret under **Settings → Variables and Secrets** (already supported).

Do **not** use plain `npm run build` / `npx wrangler deploy` alone — that skips the OpenNext bundle and fails.
## Environment

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` or `resend_api_key` | Yes | Resend API key |
| `RESEND_FROM_EMAIL` | No | Defaults to `Paws & Tasks <hello@pawsandtasks.com>` |
| `NEXT_PUBLIC_SITE_URL` | No | Defaults to `https://pawsandtasks.com` (used for PDF attachment URLs) |

## UX states

1. **Hero** — brand hook + “Start the Pathfinder”
2. **Segmentation grid** — Newcomer / Guide / Guardian / Best Friend
3. **Opt-in modal** — first name + email, scoped to selected bundle
4. **Success** — inbox confirmation + Instagram Story graphic download

## Lead capture + PDF delivery (Resend)

`POST /api/subscribe` accepts:

```json
{
  "source": "homepage_hero | modal_quiz",
  "firstName": "Ada",
  "email": "ada@example.com",
  "pathId": "newcomer",
  "quizData": { "q1_answer": null, "q2_answer": null }
}
```

Behavior:

1. Create/update a Resend **Contact** with `path_id` / `source` (+ quiz answers when present)
2. Send a toolkit email from your verified `pawsandtasks.com` domain
3. Attach `https://pawsandtasks.com/toolkits/{pathId}.pdf` when that public file exists

Hero fast-track always maps to the **newcomer / Welcome Home** kit.  
`POST /api/lead` remains as a thin compatibility shim.

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
| `pathfinder_started` | Scroll/jump to Pathfinder section |
| `bundle_selected` | Path card click (`bundle_id`, `bundle_name`) |
| `quiz_step_completed` | Quiz answer selected (`step`, `answer`) |
| `hero_lead_captured` | Hero form success |
| `quiz_lead_captured` | Quiz modal form success |
| `lead_captured` | Any successful subscribe |
| `story_asset_downloaded` | Story graphic download (`bundle_id`) |

## Scripts

```bash
npm run dev        # Next.js local dev
npm run preview    # OpenNext + Workers local preview
npm run deploy     # Build + deploy to Cloudflare Workers
npm run build      # Next.js build only
npm run lint
```
