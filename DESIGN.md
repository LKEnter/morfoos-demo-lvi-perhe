# Design

## Theme

Light, warm-neutral Scandinavian. Color strategy: **restrained** — near-white/near-black neutrals carrying the page, one committed deep-teal accent used deliberately (CTAs, links, icons, highlights, hover states), never spread thin across every element. Dark sections (nav, footer, closing CTA) act as the anchor weight that keeps the page from feeling like a flat brochure.

Physical scene: a homeowner in the Helsinki area, evening, phone or laptop, comparing two or three local contractors after a pipe worry or a renovation quote — they decide who to call in under 15 seconds. The page must read instantly as "an established, real, local business," not a template.

## Color

| Role | Token | Hex | OKLCH |
|---|---|---|---|
| Accent (primary) | `--color-accent` | `#0F766E` | `oklch(51.1% 0.086 186.4)` |
| Accent hover (darker) | `--color-accent-hover` | `#0B5D57` | `oklch(41% 0.075 186.4)` |
| Accent light (gradient endpoint) | `--color-accent-light` | `#2DD4BF` | `oklch(81.5% 0.13 179)` |
| Accent tint (bg wash) | `--color-accent-tint` | `#E6F2F1` | `oklch(94.5% 0.02 186.4)` |
| Dark | `--color-dark` | `#1F2933` | `oklch(27.6% 0.023 248.7)` |
| Dark elevated | `--color-dark-elevated` | `#2A3742` | `oklch(33% 0.023 248.7)` |
| White | `--color-white` | `#FFFFFF` | `oklch(100% 0 0)` |
| Light background | `--color-bg-light` | `#F8FAFA` | `oklch(98.4% 0.002 197.1)` |
| Border | `--color-border` | `#E5E7EB` | `oklch(92.8% 0.006 264.5)` |
| Ink (body text) | `--color-ink` | `#1F2933` | `oklch(27.6% 0.023 248.7)` |
| Ink muted (secondary text) | `--color-ink-muted` | `#4B5563` | `oklch(44.6% 0.022 257)` |

Contrast-checked: ink `#1F2933` on white = 14.9:1. Ink-muted `#4B5563` on white = 7.6:1 (safe for body copy, not washed-out gray). Accent `#0F766E` on white = 4.6:1 (passes for text/icons ≥ normal size at the border, always paired with white text on filled buttons at 5.7:1+). White text on dark `#1F2933` = 14.9:1.

## Typography

- Heading: **Montserrat** (600/700/800) — geometric, bold, confident; projects reliability and reads as trustworthy in what can be urgent home-repair moments.
- Body: **Open Sans** (400/500/600) — highly legible at small sizes, the register most homeowners will meet on a phone screen searching for help.
- Pairing rationale: geometric display (Montserrat) against a humanist workhorse body (Open Sans) — a real contrast axis, not two similar grotesques.
- Scale: hero clamp(2.5rem, 5vw + 1rem, 3.75rem); h2 clamp(2rem, 3vw + 1rem, 2.75rem); h3 1.5rem; body 1.0625rem; small 0.9375rem.
- Display letter-spacing: -0.02em (never below -0.04em floor). Body: -0.01em.
- Line length capped at 65-75ch on prose blocks. `text-wrap: balance` on all h1-h3, `text-wrap: pretty` on paragraph copy.

## Layout & Components

- Radius scale: 12px (cards, inputs), 16px (large image frames), full-pill (buttons, tags/badges). Never 24px+ on cards or sections.
- Shadow: one soft elevation only — `0 1px 2px rgba(31,41,51,.06), 0 8px 24px rgba(31,41,51,.08)`. Never combined with a visible border on the same element; cards use either a hairline border (flat, on light bg) or the soft shadow (elevated, on white), not both.
- Spacing rhythm: section padding clamps between 4.5rem and 7rem vertical; content max-width 1200px; generous whitespace between sections per the Scandinavian brief.
- Grid: `repeat(auto-fit, minmax(260px, 1fr))` for card rows; explicit CSS grid only for the two-column story/timeline and turnkey-process layouts.
- Buttons: pill radius, deep-teal fill + white text (primary), dark-outline/ghost (secondary on light bg) or white-outline (secondary on dark bg). Large tap targets (min 48px height) for mobile.
- Trust badges: pill-shaped, bordered, checkmark + short label — not cards, not a grid of icon tiles.

## Motion

Subtle only: fade + slight upward slide (12-16px) on scroll-reveal, staggered per section's own content (badges stagger individually, timeline entries stagger by year, cards stagger by column) rather than one uniform reveal applied everywhere. Card hover: gentle elevation increase + 2-4px lift, ease-out-quart, ~200ms. No bounce/elastic. Full `prefers-reduced-motion: reduce` fallback (crossfade / instant) throughout. Content is visible by default; motion enhances, never gates, visibility.

## Imagery

Unsplash, natural and specific: modern Finnish/Nordic homes, bright bathrooms, heating/heat-pump installations, an excavator on a real (clean) worksite, a technician with a homeowner, a plumbing-store/hardware-store interior. No generic close-up pipe/tool macro shots, no grimy industrial sites, no stock-photo corporate handshakes.
