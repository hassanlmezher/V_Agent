---
name: Nexora
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e7'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#e4e1e7'
  inverse-on-surface: '#303034'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#8d36db'
  on-tertiary-container: '#f2dfff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#131317'
  on-background: '#e4e1e7'
  surface-variant: '#353439'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-badge:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-md: 3rem
  margin-lg: 6rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-modern, high-performance aesthetic for a forward-facing digital flagship agency. The visual narrative combines dark-mode precision, subtle glassmorphism, and neon-spectral lighting to evoke technological superiority, creative mastery, and architectural polish.

### Brand Attributes & Tone
- **Atmospheric & Immersive:** Grounded in deep near-black voids, allowing high-chroma violet and cyan accents to project luminescence.
- **Engineered Luxury:** Clean geometric proportions, razor-thin hairline borders, and calibrated transparency replace heavy skeuomorphism with refined digital materiality.
- **Kinetic Precision:** Micro-interactions emphasize swift transitions, subtle backlighting shifts, and fluid responsiveness.

### Design Movement
The visual style draws from **Dark Glassmorphism** layered with **Futuristic Minimalist Tech**. Surfaces leverage low-alpha backdrops with structural backdrop blurs (`backdrop-filter: blur(16px)`), framed with linear gradient strokes that simulate directional illumination.

## Colors

The color architecture is built for ultra-dark viewing environments, prioritizing deep tonal contrast and luminous accent focal points.

### Background & Surface Hierarchy
- **Canvas Base:** `#0B0B0F` — The foundational dark backdrop.
- **Surface Elevation 1:** `#13131A` — Navbars, side drawers, and background panels.
- **Surface Elevation 2 (Card Base):** `rgba(26, 26, 36, 0.75)` — Interactive cards with 16px backdrop blur.
- **Border Default:** `rgba(255, 255, 255, 0.08)` — Hairline containment strokes.
- **Border Accent / Glow:** `rgba(124, 58, 237, 0.2)` transitioning to `rgba(6, 182, 212, 0.2)` on active or hovering elements.

### Accent Linear Gradients
- **Primary Kinetic Gradient:** `linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)` for primary CTAs, hero typography fills, and progress indicators.
- **Surface Edge Sheen:** `linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(255, 255, 255, 0.05) 100%)`.

### Typography Tones
- **Text High-Contrast:** `#F8FAFC` — Primary headings, titles, active labels.
- **Text Muted:** `#94A3B8` — Body copy, subheadings, secondary data.
- **Text Ghost:** `#475569` — Disabled states, subtle metadata, structural rules.

## Typography

The typographic hierarchy balances technical precision and display scale.

- **Display & Headings:** `Space Grotesk` introduces modern geometric proportion with clean glyph finishes, lending an architectural, avant-garde digital tone. Headlines carry tight negative tracking to maintain punchy optical density at larger sizes.
- **Body & Continuous Copy:** `Inter` handles informational density, documentation, and long-form narrative. Neutral neutralities maximize legibility against near-black backgrounds.
- **Labels, Metrics & Monospace Details:** `JetBrains Mono` handles micro-meta details, technical specs, counters, and project date stamps, reinforcing the technical agency narrative.

## Layout & Spacing

The layout utilizes a 12-column responsive fluid grid anchored by strict vertical rhythm and generous atmospheric margins.

### Grid & Breakpoints
- **Desktop (≥ 1280px):** 12 columns, 2rem gutters (`gutter-lg`), maximum container width 1360px centered with dynamic page margins (`margin-lg`).
- **Tablet (768px – 1279px):** 8 columns, 1.5rem gutters (`gutter`), 3rem side margins (`margin-md`).
- **Mobile (< 768px):** 4 columns, 1rem gutters (`gutter-sm`), 1rem margins (`margin-sm`).

### Rhythm Rules
- Component internal padding strictly draws from `space-xs` through `space-xl`.
- Spatial division between major showcase sections requires prominent vertical breathing room (`5rem` to `8rem`), allowing glass containers and gradient aura effects to isolate naturally.

## Elevation & Depth

Depth is established through translucent planar layers, spectral backdrop blurs, and focused luminescence rather than opaque drop shadows.

### Glassmorphic Layers
- **Surface Elevation 0 (Base Canvas):** Pure deep tone `#0B0B0F`.
- **Surface Elevation 1 (Overlays & Drawers):** `#13131A` with subtle linear edge highlighting (`1px solid rgba(255, 255, 255, 0.05)`).
- **Surface Elevation 2 (Floating Glass):** `rgba(26, 26, 36, 0.65)` supplemented by `backdrop-filter: blur(16px)` and `-webkit-backdrop-filter: blur(16px)`. Border consists of a hairline stroke `rgba(124, 58, 237, 0.2)`.

### Chromatic Lighting & Shadows
- **Resting Elevation Shadow:** `0 12px 32px -8px rgba(0, 0, 0, 0.7)`.
- **Accent Glow State:** `0 0 24px 0 rgba(124, 58, 237, 0.25), 0 8px 32px 0 rgba(6, 182, 212, 0.15)`.
- **Hairline Boundary:** Strictly `1px` stroke thickness across all floating panels. Double borders or thick structural bounds are prohibited.

## Shapes

The geometric signature uses unified rounded bounds (`0.5rem` / `8px` default radius) across structural components, balanced with distinct pill geometries (`9999px`) for contextual micro-components.

### Shape Geometry Rules
- **Panels, Cards, and Inputs:** Level 2 radius (`0.5rem` / 8px for standard containers; `1rem` / 16px for large structural modules).
- **Badges, Tags, and Pill Buttons:** Fully rounded elliptical geometry (`9999px`) to create an ergonomic visual cadence against geometric headlines.
- **Nested Corner Rule:** When nesting elements inside cards, inner border radius follows `outer_radius - padding` to maintain concentric curvature.

## Components

### Buttons & Interactive CTAs
- **Primary Glowing Button:** Filled with `linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)`, text in `#F8FAFC`, pill geometry (`border-radius: 9999px`), with an ambient shadow `0 0 20px rgba(124, 58, 237, 0.4)`. On hover, scale to `1.02` with shadow expansion `0 0 28px rgba(6, 182, 212, 0.5)`.
- **Secondary Ghost Button:** Translucent base `rgba(255, 255, 255, 0.03)` with a `1px` border of `rgba(255, 255, 255, 0.12)`. On hover, the border shifts to `rgba(124, 58, 237, 0.4)` and background transitions to `rgba(124, 58, 237, 0.08)`.

### Glass Cards
- Background set to `rgba(26, 26, 36, 0.7)` with `backdrop-filter: blur(16px)`.
- Bounded by a `1px` hairline border using `rgba(124, 58, 237, 0.2)`.
- On hover, border transitions smoothly (250ms cubic-bezier) to `rgba(6, 182, 212, 0.4)`, generating a subtle radial cursor highlight.

### Chips & Pill Badges
- Pill geometry with `label-badge` typography uppercase tracking.
- Composed of an ultra-dark inner fill `rgba(19, 19, 26, 0.8)` bordered by `rgba(6, 182, 212, 0.3)` with an optional pulsing 6px radial status dot `#06B6D4`.

### Input Fields & Controls
- **Text Inputs:** Height 44px, background `rgba(19, 19, 26, 0.6)`, hairline border `rgba(255, 255, 255, 0.08)`, text `#F8FAFC`, placeholder `#475569`.
- **Focus State:** Border shifts to `#7C3AED` with an outer glow `0 0 0 3px rgba(124, 58, 237, 0.15)`. No default browser rings.
- **Checkboxes & Radios:** Custom 18px frames with `rgba(255, 255, 255, 0.1)` boundary; checked states adopt the purple-to-cyan gradient fill accompanied by an interior high-contrast check glyph.

### Kinetic Agency Additions
- **Metric Highlight Tiles:** Monospace counter indicators with subtle gradient typography clipping (`background-clip: text; -webkit-text-fill-color: transparent;`).
- **Interactive Cursor Spotlight:** Global subtle radial mask following mouse position to illuminate card hairline boundaries dynamically.