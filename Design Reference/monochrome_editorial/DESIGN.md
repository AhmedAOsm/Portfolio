---
name: Monochrome Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '300'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '300'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '300'
    lineHeight: 36px
    letterSpacing: -0.01em
spacing:
  gutter: 2rem
  margin: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---

## Brand & Style

This design system embodies a stark, minimalist architectural aesthetic rooted in high-contrast black and white editorial design. The brand personality is uncompromising, sophisticated, and precise, evoking the feel of high-end architectural monographs and gallery catalogues. The UI relies on generous whitespace, strict geometric alignment, and crisp typographic hierarchy to let content and monochrome imagery command complete attention.

## Colors

The palette is strictly monochromatic, utilizing absolute black for structural lines and primary type, pristine white for expansive negative space, and precise neutral grays for subtle tonal separation. Color is used exclusively as a framing device for photography and typography.

## Typography

Typography acts as the primary structural element. Headlines feature clean, thin geometric sans-serifs with wide tracking on small labels and tight tracking on oversized titles. Body text is exceptionally neutral and legible, prioritizing comfortable reading lengths and generous line heights.

## Layout & Spacing

The layout is governed by a strict fluid grid system with generous margins and wide gutters that emphasize negative space. Elements align precisely to architectural column lines. On mobile viewports, outer margins scale down proportionally while preserving internal content rhythms.

## Elevation & Depth

Depth is conveyed entirely through flat architectural principles: crisp 1px borders, sharp tonal shifts between pure white and solid black blocks, and low-contrast ghost outlines. Drop shadows are completely absent to maintain the stark, graphic, print-like editorial quality.

## Shapes

All UI elements strictly feature 0px roundedness (sharp corners). The shape language relies entirely on precise 90-degree angles, rigid grid alignments, and stark rectangular containers that mirror architectural blueprints and minimalist framing.

## Components

- **Buttons:** Sharp-cornered, high-contrast rectangles. Primary actions use solid black fills with white text; secondary actions use transparent backgrounds with a 1px solid black border. Hover states invert the fill and text colors instantly without transitions.
- **Cards:** Borderless image containers or solid white blocks set against neutral backgrounds, edged with 1px black or light gray borders. Imagery fills the containers with zero padding.
- **Input Fields:** Minimalist text inputs defined solely by a single bottom border or a stark 1px box outline, featuring sans-serif placeholder text and strict square focus rings.
- **Checkboxes & Radios:** Square checkboxes and circular indicators rendered in solid black and white with 1px stroke weights, avoiding soft glow effects.
- **Chips:** Small, uppercase category tags utilizing `label-sm` typography encased in thin 1px borders with generous horizontal padding.
- **Lists:** Clean typographic rows separated by hairline 1px dividers, featuring flush-left titles and flush-right metadata.