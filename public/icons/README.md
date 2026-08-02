# Paws & Tasks — Icon Assets

**Source of truth for SVG icons** used on the website and in PDF / email kits.

Served at:

`https://pawsandtasks.com/icons/<filename>.svg`

Locally: `/icons/<filename>.svg`

## Set (verified)

| File | Name | Primary use |
| --- | --- | --- |
| `01-soft-paw-heart.svg` | Soft Paw + Heart | Logo mark, favicon, success, PDF header/footer |
| `02-checklist-paw.svg` | Checklist Paw | Checklist sections, kit moments |
| `03-completed-check.svg` | Completed Check | Success states, finished checklist items |
| `04-gift-free-resource.svg` | Free Resource / Gift | Hero signup / free kit moments |
| `05-email-envelope-paw.svg` | Email Envelope + Paw | Signup / email delivery context |
| `06-download-access.svg` | Download / Instant Access | PDF inbox / download messaging |
| `07-progress-tracker.svg` | Progress Tracker | Pathfinder quiz progress |
| `08-newcomer-house.svg` | The Newcomer | Pathfinder card |
| `09-guide-star-treat.svg` | The Guide | Pathfinder card |
| `10-guardian-shield-heart.svg` | The Guardian | Pathfinder card |
| `11-best-friend-leash.svg` | The Best Friend | Pathfinder card |
| `12-community-two-paws.svg` | Community / Join | “Join 10,000+”, community moments |

## Design language

- Soft rounded terminals, ~1.5–2px stroke
- Default: Teal `#008080`
- Active / CTA / Selected: Warm Orange `#FF6B35`
- Success: Green `#10B981` or teal + check
- Prefer line versions for UI; lightly filled for hero/marketing

## Website wiring

React UI loads these files through `BrandIcon` (`src/components/icons/BrandIcon.tsx`) using CSS mask + `currentColor`, so variant classes can recolor them (teal / orange / success).

SVGs here use black fills with `fill-rule="evenodd"` (export backgrounds / white knockouts stripped) so CSS masks preserve hollow detail while the UI color comes from `currentColor`.

## Related docs

- [DESIGN.md](../../docs/DESIGN.md)
- [ICONOGRAPHY.md](../../docs/ICONOGRAPHY.md)
- React wrappers: `src/components/icons/`
