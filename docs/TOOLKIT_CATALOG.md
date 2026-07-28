# Toolkit Product Catalog — Paws & Tasks

Checklist of digital product ideas mapped to the four live Pathfinder archetypes.

**Purpose:** Prioritize and track PDF toolkit assets for email delivery today, and flag candidates for interactive experiences later.

**Related docs:** [PRD](./PRD.md) · [Architecture](./ARCHITECTURE.md) · [PDF Design & Ungated Strategy](./PDF_DESIGN.md)

**Status key**

| Mark | Meaning |
| --- | --- |
| `[ ]` | Not started |
| `[~]` | In progress / draft |
| `[x]` | Shipped (PDF live at `/toolkits/...` or interactive) |

**Delivery modes (per idea)**

- **PDF** — static download / Resend attachment (MVP default)
- **Interactive** — future web-app experience (tracker, planner, wizard)
- **Both** — start as PDF; evolve into interactive later

Current attachment hook expects files at:

```text
public/toolkits/newcomer.pdf   ← hero “Welcome Home” email asset (MVP)
public/toolkits/guide.pdf
public/toolkits/guardian.pdf
public/toolkits/best-friend.pdf
```

### Decision: one hero email asset

Hero fast-track (`source=homepage_hero`) always sends **a single file**: `public/toolkits/newcomer.pdf`, branded as the **Welcome Home Starter Kit**.

That PDF is a **compiled pack of 5 sections** (not five separate attachments in MVP):

| # | Section (from catalog) | Role in the kit |
| --- | --- | --- |
| 1 | Home Safety Checklist for Pet Owners | Safety / anxiety relief |
| 2 | Pet Care Schedule Templates | Daily structure (brand fit) |
| 3 | 50 Essential Pet Care Checklists | Broad “what to do” coverage |
| 4 | Pet Health Record Sheets | Universal health utility |
| 5 | Pet Behavior Troubleshooting Guide | High-intent behavior help |

Design this pack with the **Newcomer palette** ([PDF_DESIGN.md](./PDF_DESIGN.md)). Later we may split sections into standalone files; MVP keeps **one attachment**.

MVP may also ship other path bundles as single `/{pathId}.pdf` files, then split into individual assets / interactive modules over time.

---

## 1. The Newcomer — Welcome Kit

*Focus: Foundational setup, basic care, home preparation, and early safety for new pet owners.*  
*Path ID:* `newcomer`  
*Suggested bundle file:* `public/toolkits/newcomer.pdf`  
*Hero email asset:* **Yes — Welcome Home Starter Kit** (compiled 5 sections below; see Decision above)

| Status | Product idea | Description | Delivery |
| --- | --- | --- | --- |
| [ ] | Pet Adoption Workbook | Checklists and guides to help prospective owners prepare their homes and choose the right pet. | Both |
| [ ] | Pet Adoption Contract Templates | Legally sound templates covering important aspects of adoption for rescues and shelters. | PDF |
| [ ] | Pet Breed Comparison Guide | Detailed comparisons of characteristics, care needs, and lifestyle suitability across breeds. | PDF |
| [ ] | Home Safety Checklist for Pet Owners | Detailed lists of potential hazards and preventive measures to keep pets safe indoors. **★ Ungated tasting menu #1 (build first)** · **◆ Welcome Home kit §1** | PDF |
| [ ] | 50 Essential Pet Care Checklists | Checklists covering feeding, grooming, and health check-ups to keep owners organized. **◆ Welcome Home kit §3** | Both |
| [ ] | Pet-Safe Cleaning Guide | Methods and product recommendations for cleaning homes without harmful chemicals. | PDF |
| [ ] | Pet-Friendly Home Organization Tips | Storage solutions for pet supplies, feeding areas, and maintaining a tidy home. | PDF |
| [ ] | Pet-Friendly Apartment Living Guide | Strategies for managing space constraints and creating a pet-friendly environment in small homes. | PDF |
| [ ] | Guide to Pet-Friendly Home Renovations | Planning tips for creating pet-safe spaces and choosing durable materials during remodels. | PDF |
| [ ] | Guide to Pet-Friendly Home Office Setups | Tips for creating a comfortable workspace that accommodates both pet and owner. | PDF |
| [ ] | Pet-Friendly Home Decor Ideas | Tips for selecting pet-safe furniture, materials, and stylish design elements. | PDF |
| [ ] | Pet Care Schedule Templates | Customizable daily, weekly, and monthly routine templates for various pets. **★ Ungated tasting menu #2** · **◆ Welcome Home kit §2** | Both |
| [ ] | Pet Caregiver Instruction Sheets | Detailed care instructions, emergency contacts, and daily routines for professional pet sitters. | Both |
| [ ] | Pet-Sitting Guide for Friends & Family | Handover guide including feeding schedules and emergency contacts for informal sitters. | PDF |
| [ ] | Pet Boarding Checklists | Packing lists and vital questions to ask boarding facilities to ensure a safe stay. | PDF |
| [ ] | Pet Waste Management Solutions | Litter box tips, outdoor disposal methods, and products for maintaining a clean environment. | PDF |
| [ ] | Pet Owner Budget Planner | Expense trackers, budget templates, and cost-saving tips to manage pet care costs. | Both |
| [ ] | Guide to Adopting Exotic Pets | Legal considerations, care requirements, and tips for choosing exotic pets. | PDF |
| [ ] | Guide to Raising Backyard Chickens | Comprehensive advice on coop building, feeding, healthcare, and egg production. | PDF |

**Newcomer count:** 19

---

## 2. The Guide — Behavior & Habit Mastery

*Focus: Training routines, behavior modification, socialization, and 5-minute daily practice intervals.*  
*Path ID:* `guide`  
*Suggested bundle file:* `public/toolkits/guide.pdf`  
*Strategic note:* Highest-priority path for future interactive daily practice tracker beta.

| Status | Product idea | Description | Delivery |
| --- | --- | --- | --- |
| [ ] | Pet Training Progress Tracker | Goal-setting templates, progress charts, and reward systems to motivate successful training. | Both |
| [ ] | Pet Training Guide | Comprehensive strategies covering basic obedience, advanced tricks, and behavior modification. | PDF |
| [ ] | Pet Behavior Troubleshooting Guide | Practical solutions and training tips for common problems like barking or scratching. **★ Ungated tasting menu #5 (closer)** · **◆ Welcome Home kit §5** | PDF |
| [ ] | Pet Behavior Modification Worksheets | Tracking sheets and progress logs to help owners address specific behavior issues. | Both |
| [ ] | Pet Socialization Guide | Tips for safely introducing pets to new environments, animals, and people. | PDF |
| [ ] | Guide to Training Service Animals | Training techniques and certification requirements for selecting and raising service animals. | PDF |
| [ ] | Guide to Training Therapy Animals | Step-by-step techniques and certification processes for raising therapy animals. | PDF |

**Guide count:** 7

---

## 3. The Guardian — Health & Nutrition Vault

*Focus: Medical records, diet, longevity, preventative care, and emergency preparedness.*  
*Path ID:* `guardian`  
*Suggested bundle file:* `public/toolkits/guardian.pdf`

| Status | Product idea | Description | Delivery |
| --- | --- | --- | --- |
| [ ] | Pet Wellness Journal | Comprehensive journal to monitor a pet's health, diet, exercise, and behavior over time. | Both |
| [ ] | Pet Health Record Sheets | Track medical history, vaccinations, vet visits, and medications in one centralized place. **★ Ungated tasting menu #3** · **◆ Welcome Home kit §4** | Both |
| [ ] | Pet Nutrition Planner | Meal planning templates, dietary guidelines, and tracking sheets for balanced pet diets. | Both |
| [ ] | Pet Medication Tracker | A log for pet owners to track medications, dosages, and administration schedules accurately. | Both |
| [ ] | Pet First Aid Manual | Detailed manual covering common emergencies, first aid checklists, and illness recognition tips. | PDF |
| [ ] | Pet Emergency Preparedness Plan | Evacuation checklists, emergency contacts, and first aid guidance for disaster scenarios. | PDF |
| [ ] | Pet Breed Health Guides | Breed-specific guides detailing common health issues, preventive care, and tailored care tips. | PDF |
| [ ] | Pet Allergy Management Guide | Tips for reducing allergens, selecting hypoallergenic pets, and managing owner allergies. | PDF |
| [ ] | Pet Anxiety Management Guide | Guidance on recognizing anxiety signs, calming techniques, and recommended soothing products. | PDF |
| [ ] | Seasonal Pet Care Guide | Seasonal checklists for adjusting grooming, diet, and safety routines throughout the year. | PDF |
| [ ] | Senior Pet Care Guide | Specialized care tips covering age-related health issues, diet adjustments, and senior exercise routines. | PDF |
| [ ] | Pet Fitness and Exercise Tracker | Activity logs and progress charts to help owners keep their pets active and healthy. | Both |
| [ ] | Pet-Friendly Exercise Plans | Tailored routines and recommended activities to keep different types of pets fit. | PDF |
| [ ] | Pet Grooming Planner | Schedules, techniques, and product recommendations to maintain pet hygiene. | Both |
| [ ] | Pet Spa Day Guide | Grooming tips, relaxation techniques, and DIY product recommendations for pampering pets. | PDF |
| [ ] | Pet Insurance Comparison Worksheet | Tool to compare insurance plans, coverage details, and costs to choose the best policy. | Both |
| [ ] | Pet Care Apps and Tools Guide | Recommendations for the best digital tools covering health tracking, training, and services. | PDF |
| [ ] | Pet Loss Support Guide | Grief management tips, emotional healing resources, and support group information. | PDF |
| [ ] | Pet Memorial Planning Guide | Ideas for memorial services, keepsakes, and ways to honor a beloved pet. | PDF |

**Guardian count:** 19

---

## 4. The Best Friend — Lifestyle & Play Bundle

*Focus: Enrichment, travel, community events, treats, and spoiling the pet.*  
*Path ID:* `best-friend`  
*Suggested bundle file:* `public/toolkits/best-friend.pdf`

| Status | Product idea | Description | Delivery |
| --- | --- | --- | --- |
| [ ] | DIY Pet Toy Templates | Easy-to-follow instructions and material lists for creating safe, engaging pet toys. **★ Ungated tasting menu #4** | PDF |
| [ ] | Pet Enrichment Activity Book | DIY projects, interactive games, and sensory activities to keep pets mentally stimulated. | Both |
| [ ] | Pet-Friendly Recipe Book | Step-by-step instructions and nutritional info for homemade, pet-safe treats and meals. | PDF |
| [ ] | Pet-Friendly Recipe Box | Curated collection of pet-friendly recipes for everyday meals and special occasions. | PDF |
| [ ] | The Ultimate Guide to Pet-Friendly Travel | Comprehensive advice for road trips, flights, accommodations, and packing for pets. | PDF |
| [ ] | Pet-Friendly Road Trip Planner | Route planning tips, pet-friendly stops, packing lists, and travel safety advice. | Both |
| [ ] | Pet Travel Journal | Document adventures with travel logs, photo pages, and memory-keeping templates. | Both |
| [ ] | Pet Costume Ideas and Patterns | Instructions and patterns for creating fun, safe pet costumes at home. | PDF |
| [ ] | Pet Play Area Design Guide | Ideas and safety tips for creating dedicated indoor and outdoor pet play zones. | PDF |
| [ ] | Guide to Pet-Friendly Landscaping | Design safe outdoor spaces with non-toxic plants and pet-friendly garden features. | PDF |
| [ ] | Guide to Creating Pet-Friendly Gardens | Tips for choosing safe plants, creating play areas, and ensuring outdoor garden safety. | PDF |
| [ ] | Pet Birthday Party Planner | Organization tools including themes, invitations, and checklists for pet celebrations. | PDF |
| [ ] | Pet-Friendly Holiday Planning Guide | Tips for pet-safe decorations, holiday travel, and festive safety considerations. | PDF |
| [ ] | Pet Event Planning Guide | Checklists, themes, and activity suggestions for pet parties and adoption fairs. | PDF |
| [ ] | Guide to Creating Pet Playgroups | Advice on choosing playmates, managing dynamics, and organizing safe interactions. | PDF |
| [ ] | Guide to Hosting Pet Playdates | Tips for organizing safe, fun playdates and ensuring positive experiences for all pets. | PDF |
| [ ] | Pet Owner Networking Guide | Strategies for finding and connecting with local pet communities and online groups. | PDF |
| [ ] | Pet Photography Editing Tips | Techniques for using basic software to enhance pet portraits and create fun edits. | PDF |
| [ ] | Pet Photography Calendar Templates | Customizable templates allowing owners to create calendars featuring their pets. | Both |
| [ ] | Guide to Starting a Pet Blog | Content ideas, platform recommendations, and audience growth tips for aspiring pet bloggers. | PDF |

**Best Friend count:** 20

---

## Totals

| Path | Ideas |
| --- | --- |
| Newcomer | 19 |
| Guide | 7 |
| Guardian | 19 |
| Best Friend | 20 |
| **Total** | **65** |

---

## Suggested build sequence

0. **Welcome Home email asset** — author/design **`public/toolkits/newcomer.pdf`** as one compiled pack of the 5 ◆ sections (hero Send My Free Kit)  
1. **Ungated tasting menu** — see [PDF_DESIGN.md](./PDF_DESIGN.md); can extract/preview sections from the Welcome Home pack (start public tease with **Home Safety Checklist**)  
2. **Other path MVP bundles** — `guide.pdf` / `guardian.pdf` / `best-friend.pdf` as single email assets each  
3. **Guide interactive pilot** — evolve Training Progress Tracker / Behavior Worksheets into the daily practice web experience  
4. **Per-asset library** — split compiled packs into standalone PDFs / interactive modules  
5. **Hosting options to evaluate**
   - Ungated previews/downloads on `/resources` (`public/resources/...`)  
   - Gated bundles on Workers (`/toolkits/...`) + Resend attachment/link  
   - Private download links / signed URLs later if gating is needed  
   - In-app interactive modules keyed off Resend `path_id` + quiz answers  

---

## Working notes

- Keep legal-sensitive assets (e.g. adoption contracts) clearly marked as templates, not legal advice.  
- Prefer checklist/template formats for early PDF velocity; long-form guides can follow.  
- Use Pathfinder quiz answers later to recommend *which* subset of a path’s catalog to emphasize in email.  
- Update checkbox status in this file as each asset ships.
