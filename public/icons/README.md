# Paws & Tasks — Icon Assets

**Source of truth for SVG icons** used on the website and in PDF / email kits.

Drop clean SVG files into this folder. Once present they are served at:

`https://pawsandtasks.com/icons/<filename>.svg`

Locally: `/icons/<filename>.svg`

## Expected set (priority)

| File | Name | Primary use |
| --- | --- | --- |
| `soft-paw-heart.svg` | Soft Paw + Heart | Logo mark, favicon, success, PDF header/footer |
| `checklist-paw.svg` | Checklist Paw | Checklist sections, kit moments |
| `completed-check.svg` | Completed Check | Success states, finished checklist items |
| `free-resource-gift.svg` | Free Resource / Gift | Hero signup / free kit moments |
| `email-envelope-paw.svg` | Email Envelope + Paw | Signup / email delivery context |
| `download-instant.svg` | Download / Instant Access | PDF inbox / download messaging |
| `progress-tracker.svg` | Progress Tracker | Pathfinder quiz progress |
| `path-newcomer.svg` | The Newcomer | Pathfinder card |
| `path-guide.svg` | The Guide | Pathfinder card |
| `path-guardian.svg` | The Guardian | Pathfinder card |
| `path-best-friend.svg` | The Best Friend | Pathfinder card |
| `community-join.svg` | Community / Join | “Join 10,000+”, community moments |

Filenames may match your export names as long as this README is updated. Prefer kebab-case `.svg`.

## Design language

- Soft rounded terminals, ~1.5–2px stroke
- Default: Teal `#008080`
- Active / CTA / Selected: Warm Orange `#FF6B35`
- Success: Green `#10B981` or teal + check
- Prefer line versions for UI; lightly filled for hero/marketing
- Prefer `currentColor` strokes/fills in SVGs when possible so CSS can theme them

## Related docs

- [DESIGN.md](../../docs/DESIGN.md) — brand system + icons usage summary
- [ICONOGRAPHY.md](../../docs/ICONOGRAPHY.md) — full iconography spec + agent instructions
- React wrappers (temporary until assets land): `src/components/icons/`
