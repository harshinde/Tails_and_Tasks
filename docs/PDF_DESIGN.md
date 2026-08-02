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
4. Deliver hero fast-track as **one** email asset: `public/toolkits/newcomer.pdf` (Welcome Home Starter Kit)

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

## 4. Hero email asset — Welcome Home Starter Kit (`newcomer.pdf`)

### Decision (locked for MVP)

| Item | Decision |
| --- | --- |
| Trigger | Hero form **Send My Free Kit** (`source=homepage_hero`) |
| Resend `path_id` | `newcomer` |
| Files attached | **Exactly one:** `public/toolkits/newcomer.pdf` |
| Product name in email/UI | Welcome Home Starter Kit |
| Palette | Newcomer tokens (`--color-newcomer-*`) |

Do **not** attach five separate PDFs in the hero email for MVP. Compile the five sections into a single multipage PDF.

### Official section checklist (compiled into `newcomer.pdf`)

| § | Catalog item | Purpose | Shipped as |
| --- | --- | --- | --- |
| 1 | Home Safety Checklist for Pet Owners | Safety / reduce new-pet anxiety | §1 Home Safety Checklist |
| 2 | Pet Care Schedule Templates | Daily/weekly structure (brand fit) | §2 Pet Care Schedule Templates |
| 3 | 50 Essential Pet Care Checklists | Broad foundational coverage | §3 **10 Essential Newcomer Checklists** (focused MVP cut) |
| 4 | Pet Health Record Sheets | Universal medical/vaccine ledger | §4 Pet Health Record Sheets |
| 5 | Pet Behavior Troubleshooting Guide | High-intent behavior help | §5 Behavior & Routine Guide |

Arc for the pack: **safety → routine → organization → health → behavior**.

### Relationship to ungated tasting menu

- Ungated `/resources` can still publish **standalone teaser PDFs** (e.g. Home Safety alone).  
- Hero email remains the **compiled Welcome Home pack**.  
- Overlap is intentional: sample one section free → email unlocks the full starter kit.

---

## 5. Product-led growth: ungated tasting menu

### Logic

Ungated direct downloads reduce time-to-value. Visitors experience design/content quality immediately, which increases willingness to trade email for the larger Pathfinder bundles.

The 5 free PDFs are a **tasting menu**: highly actionable, visually strong, quick to consume — at least one tease per path, plus one high-value closer.

### Webpage goal

Host a public resources page (e.g. `/resources` or `/free-tools`) that:

1. Displays/previews each tasting-menu PDF  
2. Offers immediate download (no email gate)  
3. Shows a path-specific hook CTA → email opt-in for the full kit  

**CTA copy pairing**

| Surface | CTA |
| --- | --- |
| Hero | Send My Free Kit |
| Quiz step 3 | Unlock My Custom Kit |
| Resources sample card | Unlock the full [Stage] Kit |

Examples for resources hooks:

- Newcomer sample → **Unlock the full Welcome Kit**
- Guide sample → **Unlock the full Behavior & Habit Mastery Kit**
- Guardian sample → **Unlock the full Health & Nutrition Vault**
- Best Friend sample → **Unlock the full Lifestyle & Play Bundle**

### The 5 recommended ungated PDFs

| # | Asset | Teases path | Why it works | Hook CTA |
| --- | --- | --- | --- | --- |
| 1 | **Home Safety Checklist for Pet Owners** | Newcomer | High-anxiety pain point; room-by-room checklist = instant relief | “Want the complete guide to bringing them home? **Unlock the full Welcome Kit.**” |
| 2 | **Pet Care Schedule Templates** | Guide* | Brand-aligned structure for feeding/walks/training times | “Schedule set? **Unlock the full Behavior & Habit Mastery Kit.**” |
| 3 | **Pet Health Record Sheets** | Guardian | Pure utility; printable ledger builds trust | “Keep their records safe. **Unlock the full Health & Nutrition Vault.**” |
| 4 | **DIY Pet Toy Templates** | Best Friend | Visual, fun, bridges IG content → product | “Loved making this? **Unlock the full Lifestyle & Play Bundle.**” |
| 5 | **Pet Behavior Troubleshooting Guide** | Guide (closer) | Behavior pain is a top content trigger; proves authority | “Fixed the problem? **Unlock My Custom Kit** via the stage matcher for daily progress trackers.” |

\*Schedule templates live under Newcomer in the full catalog, but the tasting-menu narrative positions them as a bridge into Guide/training habits. Keep filename/path tagging explicit when shipping (`tease_path` metadata).

### Suggested first build

**Ship first: compiled `newcomer.pdf` (Welcome Home Starter Kit)** containing the 5 ◆ sections — this unblocks hero email delivery.

In parallel or next, extract **Home Safety Checklist** as the first ungated `/resources` tease.

Then tasting-menu standalones: Health Record Sheets → DIY Toy Templates → Care Schedule → Behavior Troubleshooting (closer).

---

## 6. Hosting & display (target architecture)

```text
/resources (or /free-tools)
  ├─ card grid of 5 ungated PDFs (preview + Download)
  ├─ hook CTA per card → “Unlock the full [Stage] Kit” → subscribe
  └─ files served from public/resources/*.pdf
       (separate from gated /toolkits/{pathId}.pdf bundles)
```

| Asset type | Suggested path | Gate |
| --- | --- | --- |
| Tasting menu PDFs | `public/resources/{slug}.pdf` | Ungated |
| Welcome Home + path bundles | `public/toolkits/{pathId}.pdf` | Email via hero / quiz (`newcomer.pdf` = hero asset) |

---

## 7. Build checklists

### 7.1 Welcome Home email asset (hero)

| Status | File | Contents |
| --- | --- | --- |
| [x] | `public/toolkits/newcomer.pdf` | §§1–5 compiled Welcome Home Starter Kit |

Source HTML + generator: `content/toolkits/newcomer_welcome_kit.html`, `scripts/generate_newcomer_pdf.py`

### 7.2 Ungated tasting menu

| Status | Slug | Title | Palette |
| --- | --- | --- | --- |
| [ ] | `home-safety-checklist` | Home Safety Checklist for Pet Owners | Newcomer |
| [ ] | `pet-care-schedule-templates` | Pet Care Schedule Templates | Guide narrative / Newcomer catalog |
| [ ] | `pet-health-record-sheets` | Pet Health Record Sheets | Guardian |
| [ ] | `diy-pet-toy-templates` | DIY Pet Toy Templates | Best Friend |
| [ ] | `pet-behavior-troubleshooting` | Pet Behavior Troubleshooting Guide | Guide |

Update checkboxes here and in [TOOLKIT_CATALOG.md](./TOOLKIT_CATALOG.md) as each ships.
