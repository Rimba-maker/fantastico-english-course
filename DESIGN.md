---
version: alpha
name: Fantastico-design-system
description: A Stripe-inspired design language retinted for Fantastico English Course — trades Stripe's electric-indigo, gradient-mesh fintech identity for a navy-trust + gold-achievement palette that fits a certification-driven education brand (bootcamp asrama + online, TOEFL/IELTS prep, B2B instansi programs). Keeps Stripe's structural bones (editorial thin-display type, tabular numerics, pill buttons, 8px spacing scale, card system) but swaps the gradient hero for a flat navy band, swaps dashboard-mockup components for real photography, and adds the semantic tokens the PRD's own pages need (kalender status badges, native-speaker badge, "⭐ Terpopuler" tier).

colors:
  primary: "#1E3A5F"
  primary-deep: "#17304F"
  primary-press: "#102138"
  primary-soft: "#3B5D82"
  primary-bg-subdued-hover: "#DCE6EF"
  brand-dark-900: "#0F1E30"
  gold: "#C9A227"
  gold-soft: "#E8D08A"
  ink: "#1A1A1A"
  ink-secondary: "#334155"
  ink-mute: "#64748B"
  ink-mute-2: "#64748B"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f6f9fc"
  canvas-cream: "#FBF6E8"
  hairline: "#e3e8ee"
  hairline-input: "#a8c3de"
  status-available: "#16A34A"
  status-almost-full: "#D97706"
  status-full: "#94A3B8"
  shadow-navy: "#0B1626"

typography:
  display-xxl:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: -1.4px
  display-xl:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.64px
  display-md:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 26px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: -0.26px
  heading-lg:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.22px
  heading-md:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-tabular:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.2px
    fontFeature: tnum
  button-md:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  button-sm:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  micro-cap:
    fontFamily: "Inter, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.4px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px

components:
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-primary-pill-pressed:
    backgroundColor: "{colors.primary-press}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-on-dark:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  card-feature-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-gold-band:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-photo-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-native-speaker:
    backgroundColor: "{colors.gold-soft}"
    textColor: "{colors.primary-press}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  badge-status-available:
    backgroundColor: "{colors.status-available}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  badge-status-almost-full:
    backgroundColor: "{colors.status-almost-full}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  badge-status-full:
    backgroundColor: "{colors.status-full}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  pill-tag-soft:
    backgroundColor: "{colors.primary-bg-subdued-hover}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---

## Overview

This system keeps Stripe's editorial structure — thin-weight display type, tabular numerics, pill buttons, an 8px spacing scale, a disciplined card system — but retints it for a certification-driven education brand instead of a fintech one. Two changes carry the whole shift: **indigo becomes navy** (`{colors.primary}` — `#1E3A5F`, the PRD's own trust color, validated by the fact that navy/blue is the standard signal for certification and institutional trust in education branding) and **the gradient mesh becomes a flat navy hero band** — the multi-stop cream/orange/lavender/indigo/ruby wash reads as "fintech atmosphere," not "language school," so it's replaced with a calmer flat or single-tone navy field, optionally lifted with a subtle radial glow behind the headline, never the organic blob mesh.

**Gold** (`{colors.gold}` — `#C9A227`) is the system's second and only other accent — reserved for achievement: certificates, "⭐ Terpopuler" tier badges, the Native Speaker badge, TOEFL/IELTS score emphasis. It never appears as a body-text color or a second CTA color; like Stripe's indigo, it stays sparing so it keeps its meaning.

**Photography replaces product-UI mockups.** Stripe's composited dashboard/IDE mockups have no equivalent here — Fantastico has no software product to screenshot. `card-photo-feature` takes that visual slot instead, holding real photography (tutors, dorm/English Area, live-class screenshots) per the PRD's own Image References table (Section 17).

Tabular figures (`tnum`) stay, but the brief widens from "money only" to **any number that has to be scanned and compared**: Rupiah prices, TOEFL/IELTS scores, intake dates in the kalender grid.

**Key Characteristics:**
- Flat navy hero band (no gradient mesh) — optionally a soft radial glow behind the headline, never an organic multi-color wash.
- Single-navy CTA hierarchy: filled `{colors.primary}` pill is the only filled button on marketing surfaces; gold never fills a button.
- Inter thin (weight 300) on display tiers only; body text runs at 400 for legibility across a general audience (parents, students, HR contacts), not just professionals reading dense UI copy.
- Tabular-figure type (`tnum`) for prices, test scores, and calendar dates.
- Photography-driven feature cards (`card-photo-feature`) in place of dashboard mockups.
- Pill-shaped buttons (`{rounded.pill}` 9999px) — same tight, decisive geometry as Stripe.
- Gold-parchment band (`card-gold-band`, `{colors.canvas-cream}` — now a pale gold tint, not literal cream) for the same warm-interlude role Stripe's cream band played.
- Three semantic status colors (`status-available` green, `status-almost-full` amber, `status-full` slate) driving the Kalender Akademik's 12-month status badges.

## Colors

### Brand & Accent
- **Navy** (`{colors.primary}` — `#1E3A5F`): The brand's CTA and trust color — replaces Stripe's electric indigo. Filled-pill button, link emphasis, nav accents.
- **Navy Deep** (`{colors.primary-deep}` — `#17304F`): Deeper navy for gradient mid-stops (if a hero glow is used) and tag text.
- **Navy Press** (`{colors.primary-press}` — `#102138`): Pressed-state lift of the primary; also used as text-on-gold for the native-speaker badge.
- **Navy Soft** (`{colors.primary-soft}` — `#3B5D82`): Lighter navy for UI accents, hover states, secondary chart/graphic tones.
- **Navy Subdued** (`{colors.primary-bg-subdued-hover}` — `#DCE6EF`): Pale navy fill for soft tag backgrounds.
- **Brand Dark 900** (`{colors.brand-dark-900}` — `#0F1E30`): The deepest navy — fill for the featured pricing tier (maps directly onto the PRD's "⭐ Terpopuler" tier) and any dark hero band.
- **Gold** (`{colors.gold}` — `#C9A227`): The achievement accent. Certificates, terpopuler stars, score emphasis, native-speaker badge fill. Never a button color, never body text.
- **Gold Soft** (`{colors.gold-soft}` — `#E8D08A`): Pale gold for badge backgrounds under gold-family text.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f6f9fc`): Cool-tinted off-white for feature bands.
- **Canvas Gold-Tint** (`{colors.canvas-cream}` — `#FBF6E8`): Pale gold-parchment band — repurposed from Stripe's unrelated cream stop so the "warm interlude" band ties back to the brand's actual accent family instead of an arbitrary color.
- **Hairline** (`{colors.hairline}` — `#e3e8ee`): 1px borders on cards and tables.
- **Hairline Input** (`{colors.hairline-input}` — `#a8c3de`): Slightly cooler hairline for form inputs.

### Text
- **Ink** (`{colors.ink}` — `#1A1A1A`): Default body text — near-black per the PRD, not navy-as-text like Stripe.
- **Ink Secondary** (`{colors.ink-secondary}` — `#334155`): Secondary text on white.
- **Ink Mute** (`{colors.ink-mute}` — `#64748B`): Helper text, captions, table labels — the PRD's own `--color-muted`.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on navy / dark surfaces.

### Semantic (new — the PRD's Kalender Akademik needs this; Stripe's marketing system has none)
- **Available** (`{colors.status-available}` — `#16A34A`): Kalender "🟢 Tersedia" badge — the PRD's own `--color-success`.
- **Almost Full** (`{colors.status-almost-full}` — `#D97706`): Kalender "🟡 Hampir Penuh" badge — pairs with the PRD's subtle-pulse urgency treatment.
- **Full** (`{colors.status-full}` — `#94A3B8`): Kalender "⚪ Penuh" badge — muted/inactive, no pulse.

## Typography

### Font Family
**Inter** (open-source, Google Fonts), weight 300 for display tiers, 400 for body, 500 for buttons, 600 for the micro-caption/eyebrow role. Stripe's original Sohne is a proprietary licensed font with no open equivalent worth chasing for a project this size — Inter at thin weight already approximates the editorial rhythm closely, so it's the primary family here, not just a fallback.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 56px | 300 | 1.03 | -1.4px | Hero headline |
| `{typography.display-xl}` | 48px | 300 | 1.15 | -0.96px | Section opener |
| `{typography.display-lg}` | 32px | 300 | 1.1 | -0.64px | Card title / sub-section |
| `{typography.display-md}` | 26px | 300 | 1.12 | -0.26px | Compact card title |
| `{typography.heading-lg}` | 22px | 300 | 1.1 | -0.22px | Pricing tier name |
| `{typography.heading-md}` | 20px | 400 | 1.4 | -0.2px | Section sub-heading |
| `{typography.heading-sm}` | 18px | 400 | 1.4 | 0 | Mini-section label |
| `{typography.body-lg}` | 16px | 400 | 1.5 | 0 | Marketing body lead |
| `{typography.body-md}` | 15px | 400 | 1.5 | 0 | Default body |
| `{typography.body-tabular}` | 14px | 400 | 1.4 | -0.2px | Price / score / date tables (uses `tnum`) |
| `{typography.button-md}` | 16px | 500 | 1.0 | 0 | Pill button label |
| `{typography.button-sm}` | 14px | 500 | 1.0 | 0 | Compact pill label |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Helper, table labels |
| `{typography.micro}` | 11px | 400 | 1.4 | 0 | Fine print |
| `{typography.micro-cap}` | 11px | 600 | 1.15 | 0.4px | All-caps eyebrow / badge label |

### Principles
- **Thin weight stays on display only.** Display and pricing-tier-name tiers (56–22px) render at 300. Everything a general reader actually reads in paragraph form (body, headings below 22px, captions) runs at 400+ — Stripe's all-300 system suits developers skimming UI copy; Fantastico's audience includes parents and students reading full sentences, so legibility wins below the headline tier.
- **Negative tracking on display only**, same curve as Stripe's original (-1.4px at 56px down to -0.2px at 22px).
- **Tabular figures for anything scanned as a column** — prices, TOEFL/IELTS scores, calendar intake dates. `font-feature-settings: "tnum"`.
- **No `ss01` stylistic set.** That feature was tied to Sohne's specific single-story-`a` character substitution; Inter doesn't carry the same brand meaning, so it's dropped rather than cargo-culted.
- **11px is the functional-text floor.** `micro-cap` was originally 10px (matching Stripe's own eyebrow scale) but that's below the legibility floor for badge/label text people actually read (status badges, native-speaker badge) — bumped to 11px after an accessibility audit flagged it.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **Section padding**: 64–96px on marketing pages.
- **Card internal padding**: 32px on feature/pricing cards; 24px on photo-feature cards.

### Grid & Container
- Marketing pages center in a ~1200px container.
- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints (maps onto the PRD's 3–4 tier program cards).
- Kalender Akademik grid: 12-up → 4-up (tablet) → 2-up (mobile) month cards.

### Whitespace Philosophy
Unchanged from Stripe: generous 96px section gaps, tightening to 32px where users compare and act (pricing tables, kalender grid).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface |
| 1 | `box-shadow: rgba(11,22,38,0.08) 0 1px 3px` | Card lift on white |
| 2 | `box-shadow: rgba(11,22,38,0.08) 0 8px 24px, rgba(11,22,38,0.04) 0 2px 6px` | Floating panels, month-detail modal |
| 3 | Flat navy hero band, optional soft radial glow | The hero's depth medium — a calm navy field, not an atmospheric multi-color mesh |

Shadow tint (`{colors.shadow-navy}` — `#0B1626`) replaces Stripe's `shadow-blue`, kept as a near-black navy so shadows read as "depth," not as a second brand color.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Hairline tags, table chrome |
| `{rounded.sm}` | 6px | Form inputs |
| `{rounded.md}` | 8px | Compact cards, alerts |
| `{rounded.lg}` | 12px | Pricing cards, feature cards, photo cards |
| `{rounded.xl}` | 16px | Month-detail modal chrome |
| `{rounded.pill}` | 9999px | All buttons, badges, tags |

### Photography Geometry
Real photography is the primary visual medium (tutors, dorm/English Area, live-class screenshots — see PRD Section 17). Photos sit inside `{rounded.lg}` 12px containers, inset 4:3 or 3:2, with a subtle Level 1 shadow — no faux-UI chrome, since there's no software product to mock up.

## Icons

**Lucide**, one family, one stroke weight (`strokeWidth={1.75}` for standalone/decorative icons, `{2}`–`{2.5}` for small inline icons next to text where a thin stroke would disappear). No emoji, no Unicode glyphs standing in for icons — every pictogram on the site is a drawn Lucide icon.

- **React islands** (`.tsx`): import directly from `lucide-react` (e.g. `import { Target } from "lucide-react"`).
- **Static `.astro` files**: `import { Icon } from "astro-icon/components"`, then `<Icon name="lucide:target" />` — zero runtime JS, inlined at build time via `@iconify-json/lucide`.
- Icon color follows the surrounding text color by default (`text-navy`, `text-ink-mute`, etc.) unless the icon itself carries meaning — status icons (kalender badges) and achievement icons (checkmarks, the featured-tier star) use their semantic color (`status-available` green, `gold`) regardless of surrounding text color.
- Reuse the same icon for the same concept across pages (e.g. `Languages` for "Akses Native Speaker" appears identically in the homepage trust bar and the Kenapa Fantastico grid) — don't pick a different icon per instance of the same idea.
- This was a deliberate late addition, not part of the original retint: the PRD's own copy used emoji throughout (trust bar, program tiers, facility lists, tutor template), which is protected content, not a stylistic accident — replacing it was a scoped decision made after flagging the tension, not a silent redesign.

## Components

### Buttons
Unchanged in structure from Stripe — `button-primary-pill` (navy fill), `button-secondary` (navy outline on white), `button-on-dark` (for use on the navy hero/featured-tier band), all same pill geometry, `8px 16px` padding, never below that.

### Cards & Containers

**`card-pricing-featured`** — the inverted dark navy tier, used for every "⭐ Terpopuler" program (Bootcamp 3 Bulan, Online 2 Bulan). This is a direct, no-translation-needed reuse of Stripe's featured-pricing-tier pattern.

**`card-gold-band`** — warm interlude card (renamed from Stripe's `card-cream-band`), now filled with the gold-tinted parchment surface instead of an unrelated cream, so the "warmth break" ties back to the achievement accent.

**`card-photo-feature`** — replaces Stripe's `card-dashboard-mockup`. Holds a real photo instead of a composited product screenshot; same card chrome (canvas background, `{rounded.lg}`, Level 1–2 shadow).

### Badges (new — the PRD calls for these explicitly, Stripe's system has no equivalent)

**`badge-native-speaker`** — gold-soft fill, navy-press text, pill shape, micro-cap type. Used on Profil Guru & Tutor cards and the homepage trust bar.

**`badge-status-available` / `badge-status-almost-full` / `badge-status-full`** — filled pills in the three semantic status colors, driving the Kalender Akademik's 12 month cards. `almost-full` is the one that gets the PRD's subtle-pulse urgency animation; the other two stay static.

### Inputs & Forms
Unchanged — `text-input` / `text-input-focused`, navy border on focus instead of indigo.

### Navigation
**`nav-bar`** (renamed from `nav-bar-on-mesh`, since there's no mesh to float over) — same structure: canvas background, logo left, nav center, CTA pill right.

### Pills, Tags, and Chips
**`pill-tag-soft`** — subdued navy tag, same role as Stripe's, retinted.

### Signature Components

**Flat Navy Hero** — replaces Stripe's gradient-mesh backdrop. A single navy field (or navy-to-navy-deep soft radial glow behind the headline text), full-bleed across the top of marketing pages. No organic blob shapes, no multi-color wash.

**Tabular-Figure Data Type** — every price, test score, and calendar date uses `font-feature-settings: "tnum"` — the brand's quiet "we measure things" signal, now serving the PRD's own "hasil terukur" positioning instead of Stripe's financial-infrastructure one.

**`link-on-light`** — unchanged in structure, retinted to navy/ink-mute.

**`footer-light`** — background bumped from Stripe's pure `{colors.canvas}` to `{colors.canvas-soft}`: several pages (FAQ, Alumni, Fasilitas) end on a plain white section with no closing band, so a canvas-white footer would have zero visual boundary against the content above it. The soft off-white tint gives every page a consistent "footer zone" cue without needing a hard border. Audited and intentional, not drift.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (navy) for filled CTAs and link emphasis — one filled button per band, same discipline as Stripe's indigo rule.
- Reserve `{colors.gold}` for achievement moments only — certificates, terpopuler badges, score emphasis, native-speaker badge. Never a CTA fill.
- Render display tiers (56–22px) at weight 300 with negative tracking; drop to 400 for everything below that.
- Use `font-feature-settings: "tnum"` on every price, score, and calendar-date cell.
- Use real photography for feature cards — tutors, dorm/English Area, live-class screenshots — never a fabricated product-UI mockup.
- Use a Lucide icon (via `lucide-react` or `astro-icon`) for every pictogram, including new copy that arrives with an emoji prefix — translate it to the matching Lucide icon rather than keeping the emoji.

### Don't
- Don't bring back the gradient mesh — it's Stripe's fintech signature, not this brand's.
- Don't use emoji or Unicode glyphs (▾ ✓ ✕ ⭐ etc.) as icons — every icon on the site is a drawn Lucide icon, one family, one stroke weight.
- Don't add a third accent color beyond navy and gold — the semantic status trio (green/amber/slate) exists only for the kalender badges, not as general-purpose brand color.
- Don't use navy as a button color together with gold on the same surface — pick one accent per component.
- Don't render price, score, or date cells without `tnum`.
- Don't replace the pill shape with rounded-rectangles for buttons or badges.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full-bleed navy hero; kalender grid at 12-up (or 6×2) |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up; kalender 6-up |
| Tablet | 768–1023px | Pricing 2-up; kalender 4-up |
| Mobile | < 768px | Pricing 1-up; kalender 2-up; hamburger nav; display drops 56 → 36px |

### Touch Targets
- Pill buttons and badges hit ≥ 40×40px on mobile via padding scaling; buttons size up to 44×44px on small screens for WCAG AAA.
- Form fields stay at 40px minimum height.

### Collapsing Strategy
- Display tiers stair-step 56 → 48 → 32 → 26 → 22px through the breakpoints, same curve as Stripe's original.
- Pricing tiers stair-step 4-up → 2-up → 1-up.
- Kalender month cards stair-step 12/6-up → 4-up → 2-up.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`{colors.primary}`, `{button-primary-pill}-pressed`, `{rounded.pill}`).
3. Add new variants as separate entries.
4. Default body to `{typography.body-md}` (15px, weight 400); use `{typography.body-tabular}` for price/score/date cells.
5. Apply `tnum` per-element on numeric content — no global stylistic-set requirement.
6. The flat navy hero is the brand's signature band — a gradient-mesh hero would break it, same way a bare-canvas hero would have broken Stripe's.
7. Gold appears once per screen at most, at the moment that matters (a certificate, a terpopuler badge, a score) — if it starts showing up more than that, pull it back.
