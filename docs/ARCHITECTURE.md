# Architecture: Paws & Tasks Pathfinder

Lightweight tech + UX architecture for the live MVP.

**Companion docs:** [PRD.md](./PRD.md) · [TOOLKIT_CATALOG.md](./TOOLKIT_CATALOG.md)

---

## 1. System overview

```text
Instagram / ads / direct
        │
        ▼
┌──────────────────────────┐
│  pawsandtasks.com        │
│  Next.js (App Router)    │
│  Cloudflare Workers      │
│  (OpenNext adapter)      │
└────────────┬─────────────┘
             │ POST /api/subscribe
             ▼
┌──────────────────────────┐
│  Resend                  │
│  • Contacts + properties │
│  • Transactional email   │
│  • Optional PDF attach   │
└──────────────────────────┘
```

**DNS / domain:** Cloudflare  
**Compute / hosting:** Cloudflare Workers (`tails-and-tasks`)  
**Email / lead store:** Resend  
**Source of truth for leads (MVP):** Resend Contacts (not a custom DB)

---

## 2. UX architecture

### Page composition

Single marketing page with two stacked regions (+ modal + optional success view):

```text
┌─────────────────────────────────────────────┐
│ HERO                                        │
│  Brand · headline · subcopy                 │
│  Fast-track form (or inline success)        │
│  Mascot (SVG idle animation)                │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ PATHFINDER GRID                             │
│  Prompt + 2×2 path cards                    │
└─────────────────────────────────────────────┘
        │ card click
        ▼
┌─────────────────────────────────────────────┐
│ QUIZ MODAL (overlay)                        │
│  Step 1: Q1 options                         │
│  Step 2: Q2 options                         │
│  Step 3: name + email                       │
└─────────────────────────────────────────────┘
        │ quiz success
        ▼
┌─────────────────────────────────────────────┐
│ SUCCESS VIEW (replaces page)                │
│  Confirmation + Story graphic download      │
│  Back to Instagram                          │
└─────────────────────────────────────────────┘
```

### Frontend state machine

| State | Where | Notes |
| --- | --- | --- |
| `home` | Default | Hero + grid visible |
| `modalOpen` | Overlay on `home` | Quiz steps 1–3 local to modal |
| `success` | Full view | Only after quiz lead capture |

Hero success does **not** leave `home`; it swaps the form for inline confirmation.

### Modal step state

```text
activePathId: BundleId
currentStep: 1 | 2 | 3
quizAnswers: { q1: string, q2: string }
```

Transitions: option click advances step; Back reverses; Escape/backdrop closes.

### Key UI components

| Component | Responsibility |
| --- | --- |
| `PathfinderApp` | Page orchestration, analytics, API calls |
| `HeroSection` | Brand hero + fast-track form |
| `SegmentationGrid` | Path selection cards |
| `QuizModal` | 3-step quiz + lead form |
| `SuccessView` | Post-quiz confirmation + Story download |
| `HeroMascot` / `PathIcon` / `StoryMascot` | SVG visuals + micro-motion |

---

## 3. Technical architecture

### Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 App Router + React 19 |
| Styling | Tailwind v4 + custom CSS tokens in `globals.css` |
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` |
| Email/ESP | Resend Node SDK |
| Language | TypeScript |

### Repo map (relevant)

```text
src/
  app/
    page.tsx                 # mounts PathfinderApp
    layout.tsx               # fonts + metadata
    api/
      subscribe/route.ts     # primary lead endpoint
      lead/route.ts          # back-compat shim
  components/                # UI
  lib/
    bundles.ts               # path/bundle catalog
    quiz.ts                  # path-specific questions
    subscribe.ts             # request validation
    subscribe-handler.ts     # shared API handler
    toolkit-delivery.ts      # Resend contact + email
    analytics.ts             # client event helper
    types.ts                 # shared types
wrangler.jsonc               # Workers config (name: tails-and-tasks)
open-next.config.ts
```

### API contract

#### `POST /api/subscribe`

Request:

```json
{
  "source": "homepage_hero | modal_quiz",
  "firstName": "Ada",
  "email": "ada@example.com",
  "pathId": "guide",
  "quizData": {
    "q1_answer": "string|null",
    "q2_answer": "string|null"
  }
}
```

Server rules:

- Validate name + email  
- `homepage_hero` → force `pathId = newcomer`  
- `modal_quiz` → require `pathId` + both quiz answers  
- Create Resend contact (with property fallbacks if some keys missing)  
- Send toolkit email for resolved `pathId`  
- Return `{ ok, lead, emailId }`

#### `POST /api/lead`

Compatibility shim mapping older `{ firstName, email, bundleId }` into subscribe-shaped handling.

### Resend integration

```text
subscribe handler
   ├─ upsertLeadContact()
   │    properties: source, path_id, bundle_id, q1_answer?, q2_answer?
   └─ sendToolkitEmail()
        optional attachment via public URL:
        NEXT_PUBLIC_SITE_URL/toolkits/{pathId}.pdf
```

Secrets:

- `RESEND_API_KEY` (Worker secret / `.env.local` / `.dev.vars`)
- Optional `RESEND_FROM_EMAIL`
- Optional `NEXT_PUBLIC_SITE_URL`

### Analytics architecture

Client-only helper `trackEvent(name, payload)`:

1. Append to `window.__pathfinderEvents`  
2. Push to `window.dataLayer`  
3. Log in development  

No server-side analytics warehouse in MVP.

---

## 4. Deployment architecture

```text
GitHub (harshinde/Tails_and_Tasks)
        │ push / PR / merge
        ▼
Cloudflare Workers Builds
  build:  npx opennextjs-cloudflare build
  deploy: npx opennextjs-cloudflare deploy
        │
        ▼
Worker: tails-and-tasks
Domain: pawsandtasks.com
```

**Important:** Build must run OpenNext (`opennextjs-cloudflare build`), not only `next build`. Plain `wrangler deploy` without OpenNext output fails.

Local commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Next.js Node dev server |
| `npm run preview` | OpenNext + Workers runtime preview |
| `npm run deploy` | Build + deploy Worker |

---

## 5. Security & privacy (MVP)

- Resend API key never exposed to the browser  
- Form posts only to same-origin `/api/subscribe`  
- Email validation server-side  
- No passwords / PII beyond name + email + quiz answers  
- Broadcast unsubscribe handled by Resend when using Contacts/Broadcasts

---

## 6. Extension points

| Future need | Suggested hook |
| --- | --- |
| Real PDFs | Drop files into `public/toolkits/{pathId}.pdf` |
| Segments | Map `path_id` / quiz answers into Resend Segments |
| App user port | Export Contacts (`email` + `path_id`) into app DB |
| A/B tests | Branch on `trackEvent` + experiment cookie/flag |
| Lottie/Rive | Swap SVG mascot components; keep same state machine |
| Stronger IG branding | Update `INSTAGRAM_URL`, Story SVG copy/handle |

---

## 7. Current operational checklist

1. Domain verified in Resend (`pawsandtasks.com`)  
2. Worker secret `RESEND_API_KEY` set  
3. Resend Contact Properties created (`source`, `path_id`, `bundle_id`, `q1_answer`, `q2_answer`)  
4. Workers Build commands use OpenNext  
5. Smoke-test hero + quiz paths after each deploy
