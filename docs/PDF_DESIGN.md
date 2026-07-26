# PDF Design System & Ungated Resources Strategy

Visual and product guidelines for Pathfinder PDF toolkits, plus the ungated “tasting menu” used to deliver immediate value on the website.

**Related:** [TOOLKIT_CATALOG.md](./TOOLKIT_CATALOG.md) · [PRD.md](./PRD.md) · [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 1. Project overview

PDFs are archetype-based digital products: clean, modern, utility-focused. Each path has a distinct palette for segment recognition, while typography, mascots, and layout rules keep brand cohesion.

**Goals**

1. Ship printable, high-utility PDFs that match web brand quality  
2. Host an ungated resources webpage so visitors see value before email opt-in  
3. Use 5 “tasting menu” PDFs to tease each path and convert into full Pathfinder bundles  

---

## 2. Global typography & layout rules

| Element | Spec |
| --- | --- |
| Headers & main titles | **Georgia**, italicized for primary titles (editorial feel) |
| Body & checklist items | Clean sans-serif — prefer **DM Sans** (match web UI); Helvetica/Inter acceptable in export tools |
| Checkboxes | Empty square borders, **2px solid**, colored with the path **secondary accent** (print-friendly) |
| Visual elements | **Paws & Tasks cartoon mascots only** |
| Do not use | Geometric line-art patterns / decorative grids that fight the sleek, app-like interface |

### Shared layout principles

- Generous margins for printing (min ~0.5–0.75")  
- One job per page/section (mirrors web UX rule)  
- Checklist-first when possible (fastest time-to-value)  
- End each ungated PDF with a soft CTA back to Pathfinder / full kit  

---

## 3. Path color tokens

Use these as CSS variables when designing HTML→PDF templates (and as hex swatches in Figma/Canva/export tools).

### 3.1 The Newcomer (Welcome Kit)

**Vibe:** Reassuring, calm, foundational — reduce cognitive load for anxious new pet parents.

| Color role | Hex | Variable | Usage |
| --- | --- | --- | --- |
| Background | `#F7F9FC` | `--color-newcomer-bg` | Gentle cool off-white |
| Primary accent | `#82A0D8` | `--color-newcomer-primary` | Headers, primary CTAs |
| Secondary accent | `#FFD670` | `--color-newcomer-secondary` | Checkboxes, optimistic highlights |
| Text | `#2C3E50` | `--color-newcomer-text` | Deep slate body copy |

### 3.2 The Guide (Behavior & Habit Mastery)

**Vibe:** Structured, focused, active — encourage 5-minute daily practice.

| Color role | Hex | Variable | Usage |
| --- | --- | --- | --- |
| Background | `#FAFAFA` | `--color-guide-bg` | Crisp high-focus blank slate |
| Primary accent | `#E07A5F` | `--color-guide-primary` | Punchy coral headers/milestones |
| Secondary accent | `#3D5A80` | `--color-guide-secondary` | Navy grids & checkboxes |
| Text | `#293241` | `--color-guide-text` | Near-black instructional clarity |

### 3.3 The Guardian (Health & Nutrition Vault)

**Vibe:** Organic, holistic, trustworthy — longevity, diet, well-being.

| Color role | Hex | Variable | Usage |
| --- | --- | --- | --- |
| Background | `#F4F1EA` | `--color-guardian-bg` | Warm oat / recycled-paper feel |
| Primary accent | `#3B5B43` | `--color-guardian-primary` | Forest green titles/authority |
| Secondary accent | `#D99C5B` | `--color-guardian-secondary` | Earthy orange borders/checkboxes |
| Text | `#2F3630` | `--color-guardian-text` | Deep pine/green-grey body |

### 3.4 The Best Friend (Lifestyle & Play Bundle)

**Vibe:** Vibrant, playful, shareable — Instagram meme adjacency.

| Color role | Hex | Variable | Usage |
| --- | --- | --- | --- |
| Background | `#FFFDF7` | `--color-bestfriend-bg` | Bright warm cream |
| Primary accent | `#4ECDC4` | `--color-bestfriend-primary` | Energetic teal headers/hook box |
| Secondary accent | `#FFB7B2` | `--color-bestfriend-secondary` | Playful pink checkboxes/decoration |
| Text | `#1A1A1A` | `--color-bestfriend-text` | Off-black to ground bright accents |

---

## 4. Product-led growth: ungated tasting menu

### Logic

Ungated direct downloads reduce time-to-value. Visitors experience design/content quality immediately, which increases willingness to trade email for the larger Pathfinder bundles.

The 5 free PDFs are a **tasting menu**: highly actionable, visually strong, quick to consume — at least one tease per path, plus one high-value closer.

### Webpage goal

Host a public resources page (e.g. `/resources` or `/free-tools`) that:

1. Displays/previews each tasting-menu PDF  
2. Offers immediate download (no email gate)  
3. Shows a path-specific hook CTA → Pathfinder / full kit opt-in  

### The 5 recommended ungated PDFs

| # | Asset | Teases path | Why it works | Hook CTA |
| --- | --- | --- | --- | --- |
| 1 | **Home Safety Checklist for Pet Owners** | Newcomer | High-anxiety pain point; room-by-room checklist = instant relief | “Want the complete guide to bringing them home? Take the Pathfinder to unlock the full Welcome Kit.” |
| 2 | **Pet Care Schedule Templates** | Guide* | Brand-aligned structure for feeding/walks/training times | “Now that your schedule is set, need help filling it with the right training? Unlock Behavior & Habit Mastery.” |
| 3 | **Pet Health Record Sheets** | Guardian | Pure utility; printable ledger builds trust | “Keep their records safe, and learn how to extend their longevity. Unlock the Health & Nutrition Vault.” |
| 4 | **DIY Pet Toy Templates** | Best Friend | Visual, fun, bridges IG content → product | “Loved making this? Get recipes, travel guides, and more in the Lifestyle & Play Bundle.” |
| 5 | **Pet Behavior Troubleshooting Guide** | Guide (closer) | Behavior pain is a top content trigger; proves authority | “Fixing the problem is step one. Building a lifelong habit is step two. Take the Pathfinder for daily progress trackers.” |

\*Schedule templates live under Newcomer in the full catalog, but the tasting-menu narrative positions them as a bridge into Guide/training habits. Keep filename/path tagging explicit when shipping (`tease_path` metadata).

### Suggested first build

**Ship first: Home Safety Checklist for Pet Owners (Newcomer).**

Reasons:

1. Matches hero “Welcome Home” promise and Newcomer anxiety  
2. Checklist format is fastest to design/print and easiest to preview on a webpage  
3. Uses the calm Newcomer palette well (low cognitive load)  
4. Creates a natural upsell into the full Welcome Kit / Pathfinder  

Then: Health Record Sheets → DIY Toy Templates → Care Schedule → Behavior Troubleshooting (closer).

---

## 5. Hosting & display (target architecture)

```text
/resources (or /free-tools)
  ├─ card grid of 5 ungated PDFs (preview + Download)
  ├─ hook CTA per card → Pathfinder / subscribe
  └─ files served from public/resources/*.pdf
       (separate from gated /toolkits/{pathId}.pdf bundles)
```

| Asset type | Suggested path | Gate |
| --- | --- | --- |
| Tasting menu PDFs | `public/resources/{slug}.pdf` | Ungated |
| Full path bundles | `public/toolkits/{pathId}.pdf` | Email via Pathfinder / hero |

---

## 6. Build checklist (tasting menu)

| Status | Slug | Title | Palette |
| --- | --- | --- | --- |
| [ ] | `home-safety-checklist` | Home Safety Checklist for Pet Owners | Newcomer |
| [ ] | `pet-care-schedule-templates` | Pet Care Schedule Templates | Guide narrative / Newcomer catalog |
| [ ] | `pet-health-record-sheets` | Pet Health Record Sheets | Guardian |
| [ ] | `diy-pet-toy-templates` | DIY Pet Toy Templates | Best Friend |
| [ ] | `pet-behavior-troubleshooting` | Pet Behavior Troubleshooting Guide | Guide |

Update checkboxes here and in [TOOLKIT_CATALOG.md](./TOOLKIT_CATALOG.md) as each ships.
