# PRD: Paws & Tasks Pathfinder (As-Built)

**Product:** Paws & Tasks  
**Surface:** Marketing landing page at [pawsandtasks.com](https://pawsandtasks.com)  
**Status:** Live MVP  
**Last updated:** 2026-07-26  
**Audience for this doc:** Product, design, engineering

---

## 1. Problem & opportunity

Paws & Tasks has an entertainment-first Instagram audience and needs a utility-led bridge into a digital product ecosystem.

Most visitors will not complete a long funnel. The landing page must:

1. Capture emails quickly (low friction)
2. Segment intent clearly (for toolkit delivery and future product bets)
3. Seed a growth loop (Instagram Story share)

---

## 2. Product objective

Convert Instagram traffic into tagged email leads by offering free, path-relevant PDF toolkits — via either:

- a **fast-track hero form** (Welcome Home kit), or
- a **short Pathfinder quiz** (custom toolkit by archetype)

### Success metrics (targets)

| Metric | Definition | Target |
| --- | --- | --- |
| Landing → email conversion | Unique visitors who successfully submit a lead | >20% |
| Segment clarity | Distribution across Newcomer / Guide / Guardian / Best Friend | Statistically readable sample |
| Viral coefficient | % of quiz completers who download the Story asset | Track; optimize later |

---

## 3. Users & jobs to be done

**Primary user:** Pet parent arriving from Instagram.

| Job | How the page serves it |
| --- | --- |
| Get something useful fast | Hero “Welcome Home” kit in one form submit |
| Feel understood | Path cards + 2 path-specific quiz questions |
| Share identity socially | 9:16 Story graphic download after quiz |

---

## 4. Scope delivered (MVP)

### In scope (shipped)

- Brand-forward landing page (watercolor / printmaking aesthetic)
- Hero fast-track lead capture (inline success)
- 2×2 Pathfinder segmentation grid
- 3-step quiz modal (Q1 → Q2 → email)
- Resend contact storage + transactional toolkit email
- Custom Resend properties for segmentation (`source`, `path_id`, quiz answers)
- Cloudflare Workers hosting + custom domain
- Client analytics event schema (`dataLayer` / `__pathfinderEvents`)
- Story graphic download after quiz completion

### Out of scope (explicitly deferred)

- Real Lottie/Rive mascot pipeline (SVG idle/micro-animations for now)
- A/B experimentation framework
- Full custom user database / auth
- Interactive web app features (e.g. daily practice tracker)
- Production PDF content authoring (attachment hooks exist; files optional)

---

## 5. User journeys

### Journey A — Hero fast-track

1. Land on homepage  
2. Enter first name + email  
3. Submit **Send My Free Kit**  
4. Form replaced by inline success copy  
5. Resend sends **one** attachment: `public/toolkits/newcomer.pdf` (**Welcome Home Starter Kit**)  
6. Contact stored with `source=homepage_hero`, `path_id=newcomer`

**Welcome Home pack contents (locked):** Home Safety Checklist · Pet Care Schedule Templates · 50 Essential Pet Care Checklists · Pet Health Record Sheets · Pet Behavior Troubleshooting Guide. See [PDF_DESIGN.md](./PDF_DESIGN.md) §4.

### Journey B — Pathfinder quiz

1. Scroll/jump to Pathfinder grid  
2. Select one of four paths  
3. Answer question 1  
4. Answer question 2  
5. Submit name + email  
6. Full-page success + Story download  
7. Path toolkit email sent via Resend  
8. Contact stored with `source=modal_quiz`, `path_id`, `q1_answer`, `q2_answer`

---

## 6. Information architecture & copy (current)

### Hero

- **Brand:** Paws & Tasks  
- **Headline:** Build Better Pet Habits, Five Minutes at a Time.  
- **Support:** Join our pet parents… Welcome Home starter kit… or Pathfinder below.  
- **CTA:** Send My Free Kit  
- **Secondary:** Take the Pathfinder below

### CTA hierarchy (user-facing)

| Surface | Primary CTA | Intent |
| --- | --- | --- |
| Hero fast-track | **Send My Free Kit** | Direct, honest Welcome Home delivery |
| Quiz email step | **Unlock My Custom Kit** | Earned / curiosity after stage + answers |
| Ungated `/resources` sample | **Unlock the full [Stage] Kit** | Upsell from tasting-menu PDF to email bundle |

### Pathfinder paths

| Path ID | Title | Bundle name |
| --- | --- | --- |
| `newcomer` | The Newcomer | Welcome Kit |
| `guide` | The Guide | Behavior & Habit Mastery |
| `guardian` | The Guardian | Health & Nutrition Vault |
| `best-friend` | The Best Friend | Lifestyle & Play Bundle |

### Quiz (high level)

Each path has two multiple-choice questions (pet context + priority/challenge), then lead capture with a path-specific headline.

---

## 7. Lead & email requirements

### Capture fields

| Field | Hero | Quiz |
| --- | --- | --- |
| First name | Required | Required |
| Email | Required | Required |
| Path | Forced `newcomer` | Selected card |
| Quiz answers | None | Required Q1 + Q2 |

### Resend contact properties (must exist in Audience → Properties)

| Key | Type | Purpose |
| --- | --- | --- |
| `source` | String | `homepage_hero` or `modal_quiz` |
| `path_id` | String | Path / toolkit segment |
| `bundle_id` | String | Compatibility alias of path |
| `q1_answer` | String | Quiz answer 1 |
| `q2_answer` | String | Quiz answer 2 |

### Email delivery

- From: `Paws & Tasks <hello@pawsandtasks.com>` (verified domain)
- Body: path-aware confirmation / toolkit message
- Attachment: `https://pawsandtasks.com/toolkits/{pathId}.pdf` when file exists; otherwise email still sends without attachment

---

## 8. Analytics events (instrumented)

| Event | Trigger |
| --- | --- |
| `page_view` | Page load (+ UTM params when present) |
| `pathfinder_started` | User jumps/scrolls to Pathfinder |
| `bundle_selected` | Path card click |
| `quiz_step_completed` | Quiz option selected |
| `hero_lead_captured` | Hero form success |
| `quiz_lead_captured` | Quiz form success |
| `lead_captured` | Any successful subscribe |
| `story_asset_downloaded` | Story graphic download |

Events are pushed to `window.dataLayer` and mirrored on `window.__pathfinderEvents`.

---

## 9. Brand & UX constraints

Canonical source: **[DESIGN.md](./DESIGN.md)** (PetBond Community).

- Visual language: warm cream canvas (`#FAF0E6`), teal trust (`#008080`), orange energy (`#FF6B35`), white surfaces
- Typography: Plus Jakarta Sans (headings) + Inter (body / UI)
- Brand name must remain a hero-level signal
- Cards only where they are the interaction container (path grid / quiz options)
- Motion: intentional, lightweight (mascot idle, hover micro-animations, quiz cross-fade)
- Motions must degrade under `prefers-reduced-motion`
- Path PDF toolkits keep separate archetype palettes — see [PDF_DESIGN.md](./PDF_DESIGN.md)

---

## 10. Non-functional requirements

| Area | Requirement |
| --- | --- |
| Hosting | Cloudflare Workers via OpenNext |
| Domain | `pawsandtasks.com` (Cloudflare DNS) |
| Secrets | `RESEND_API_KEY` only on server / Worker secrets |
| Performance | Prefer SVG/CSS motion over heavy media for MVP |
| Compliance | Resend manages unsubscribe for broadcasts; transactional opt-in copy on forms |

---

## 11. Future roadmap (not in this MVP)

1. Ship **`newcomer.pdf`** Welcome Home Starter Kit (5 compiled sections) — see [PDF_DESIGN.md](./PDF_DESIGN.md) §4 and [TOOLKIT_CATALOG.md](./TOOLKIT_CATALOG.md)
2. Ungated `/resources` webpage for tasting-menu PDFs (immediate value → full kit upsell)
3. Stronger Instagram handle + Story template branding  
4. A/B-ready analytics / experiment hooks  
5. Lottie/Rive mascot pipeline  
6. Port tagged leads into future app DB (especially Guide → daily practice tracker beta)

---

## 12. Open decisions / known gaps

- Instagram URL currently points at `@pawsandtasks` placeholder destination until handle is finalized  
- PDF files are optional until content is ready; hero expects eventual `public/toolkits/newcomer.pdf` as the single Welcome Home attachment  
- Duplicate email submits are treated as soft-success (contact may already exist; email still attempted)  
- Worker project name remains `tails-and-tasks` while product brand is Paws & Tasks
