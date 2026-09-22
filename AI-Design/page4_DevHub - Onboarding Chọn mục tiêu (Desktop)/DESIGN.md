---
name: DevHub Technical Portfolio Engine
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#b76dff'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.03em
  label-ui:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets ambitious software engineers, tech leads, and technical founders seeking to convert raw repository metrics, commit timelines, and open-source contributions into executive-ready portfolios and parsed, ATS-compliant resumes. The brand voice balances surgical technical precision with premium editorial poise.

### Design Movement
The design movement is **Technical Modernism**—an intersection of minimalist high-density tooling (inspired by IDEs and enterprise cloud consoles) and luminous glass-tinged luxury. It combines:
- Deep obsidian and midnight indigo structural canvas tones.
- Meticulous micro-borders and hairline dividers simulating developer workspaces.
- Soft radiant indigo/violet ambient backlights signaling compilation and active compute states.
- High-contrast typography pairing stark geometric sans with monospaced data badges.

### Emotional Target
The user must feel immediate technical validation, effortless authority, and security. The UI avoids gimmicky 90s terminal nostalgia in favor of a clean, hyper-optimized engineering control plane that treats developer output with architectural dignity.

## Colors

The color system is native dark-mode first, anchored by an abyssal indigo-neutral base that mitigates eye fatigue while delivering infinite contrast ratios for technical syntax.

### Palette Architecture
- **Canvas Base (`#0B0F19`)**: Ground zero for page surfaces, evoking deep production terminals.
- **Card & Surface (`#111827` / `#1E293B`)**: Structural containers elevated through muted blue-gray density rather than harsh white fills.
- **Primary Accent (`#6366F1` - Electric Indigo)**: Primary conversion drivers, active links, and primary CTA buttons.
- **Secondary Accent (`#38BDF8` - Cyan Stream)**: Live sync status badges, pipeline indicators, and secondary metrics.
- **Tertiary Accent (`#A855F7` - Vivid Violet)**: Ambient lighting gradients, decorative glows, and premium feature callouts.
- **Micro-Borders & Dividers (`#334155` at 40-70% alpha)**: Razor-sharp lines that define layout partitions without visual clutter.
- **Text Systems**:
  - `High-Emphasis`: `#F8FAFC` (Slate 50) for headlines and metrics.
  - `Mid-Emphasis`: `#94A3B8` (Slate 400) for body copy and code annotations.
  - `Subtle/Disabled`: `#64748B` (Slate 500) for placeholder metadata and inactive states.

## Typography

Typography establishes an immediate hierarchy of human readability and programmatic rigour.

- **Primary Display & Headings (`Geist`)**: Chosen for its surgical neo-grotesque apertures and condensed geometric tracking at high scale. Headings demand tight letter-spacing (`-0.02em` to `-0.03em`) to anchor landing page value propositions.
- **Body & Content Flow (`Inter`)**: Highly legible across disparate display pixel densities, providing clean reading comfort for resume summaries, feature breakdowns, and ATS compatibility analyses.
- **Monospace Elements (`JetBrains Mono`)**: Strict alignment token for git hash references, technology stacks, contribution streaks, status flags, and syntax payloads. Always deployed with slight positive letter spacing to maintain legibility at sub-12px sizes.

## Layout & Spacing

The layout is built on a responsive 12-column grid for desktop viewports, transitioning to a single-column stacked hierarchy on mobile (~390px).

### Breakpoints & Fluid Adaptations
- **Desktop (1280px+)**: Max-width container of `1200px` centered on canvas. 12-column grid with 24px (`1.5rem`) gutters. Content uses split preview layouts (e.g., Markdown/GitHub profile code editor on the left, live rendered ATS-friendly resume on the right).
- **Tablet (768px - 1024px)**: 8-column layout. Horizontal panels reflow into vertically stacked tabs or segmented views. Outer margins contract to 24px.
- **Mobile (390px - 430px)**: 4-column layout. Margin snaps to 16px (`1rem`). Split previews collapse into swipeable view switches (Code vs. Resume View). Spacers scale proportionally to preserve vertical rhythm.

### Density Rules
Interactive toolbars, metadata chips, and code stats adopt high-density layout margins (`space-xs` to `space-sm`), while promotional feature blocks use breathing room (`space-lg` to `space-xl`) to establish hierarchy.

## Elevation & Depth

Visual hierarchy uses layered dark surfaces illuminated by directional ambient luminescence and hairline translucent outlines.

### 1. The Surface Tier (Tonal Stacking)
- **Base Canvas**: Solid `#0B0F19`.
- **Card Lower Tier**: `#111827` with 1px border `rgba(255, 255, 255, 0.08)`.
- **Card Interactive / Hover Tier**: `#1E293B` with 1px border `rgba(99, 102, 241, 0.35)`.
- **Floating Overlays & Dropdowns**: `#0F172A` at 90% opacity with `backdrop-filter: blur(16px)` and 1px border `rgba(255, 255, 255, 0.12)`.

### 2. Ambient Violet/Indigo Glows
Depth is amplified via muted multi-layered drop shadows tinted with the primary accent:
- **Default Card Shadow**: `0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)`
- **Luminous Hero Component Shadow**: `0 20px 50px -10px rgba(99, 102, 241, 0.18), 0 0 0 1px rgba(99, 102, 241, 0.2)`
- **Button Glow**: `0 0 20px -3px rgba(99, 102, 241, 0.45)`

### 3. Micro-Borders
Outlines are razor-thin (1px). They delineate nested panels without competing against syntax highlights or profile portraits.

## Shapes

The design system employs a refined radius scale (`roundedness: 2`) that balances modern consumer polish with technical software rigidity.

- **Micro Shapes (`rounded-sm` / 0.25rem - 4px)**: Monospaced tags, commit status dots, code line highlights.
- **Interactive Elements (`rounded-md` / 0.5rem - 8px)**: Inputs, text areas, standard buttons, dropdown triggers.
- **Card Containers (`rounded-lg` / 1rem - 16px)**: Portfolio showcase modules, ATS benchmark cards, code snippets.
- **Macro Enclosures (`rounded-xl` / 1.5rem - 24px)**: Hero visual showcases, interactive terminal mocks, floating conversion sticky bars.
- **Full Radius (`rounded-full`)**: GitHub avatar containers, status pill badges (`Live`, `Synced`, `ATS Score: 98/100`).

## Components

### Buttons
- **Primary CTA**: Deep indigo gradient (`linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)`) with white label text (`Inter medium`), hairline top border highlight (`rgba(255,255,255,0.2)`), subtle indigo shadow. Hover produces a 10% brightness lift and subtle scale (`1.01`).
- **Secondary / Developer Action**: Slate dark background (`#1E293B`), 1px border `rgba(255, 255, 255, 0.1)`, `Slate 100` text. Hover shifts border color to `#38BDF8` with a muted cyan glow.
- **Terminal Ghost Button**: Transparent surface, borderless, text in `Slate 400`, paired with inline monospace shortcut hint (e.g., `⌘K`).

### Cards & Code Containers
- **Portfolio Showcase Card**: Outer radius `rounded-xl` (`1.5rem`), background `#111827`, border `1px solid rgba(255, 255, 255, 0.07)`. Card headers feature IDE-inspired window controls (three subtle 8px dots) and active branch indicators (`JetBrains Mono`).
- **ATS Parsing Scorecard**: High-contrast slate card with an integrated radial progress gauge displaying parsing percentages, missing keywords, and section structure sanity checks.

### Chips & Badges
- **Tech Stack Badge**: JetBrains Mono 11px, vertical padding 2px, horizontal padding 8px, `rounded-md`. Background `rgba(99, 102, 241, 0.1)`, text `#A5B4FC`, micro-border `1px solid rgba(99, 102, 241, 0.2)`.
- **Live Sync Status Chip**: Rounded-full pill, dark slate backdrop, containing a pulsating 6px green/cyan dot followed by `"synced 2m ago"`.

### Form Inputs & Repository Selectors
- **Input Fields**: Inset dark background (`#0B0F19`), height 44px, text `#F8FAFC`, placeholder `#64748B`. Focused state applies `border: 1px solid #6366F1` and a soft indigo focus ring (`0 0 0 3px rgba(99, 102, 241, 0.2)`).
- **Checkboxes & Radios**: 16px square/circle with `rounded-sm` corners, slate border `rgba(255, 255, 255, 0.2)`. Checked state transitions instantly to primary indigo with an SVG checkmark icon in white.

### Lists & Activity Feeds
- **Git Commit Timeline**: Vertical connector line `1px solid #1E293B` flanked by monospaced commit hashes (`#64748B`), linked issue pills, and clean markdown-rendered summary text.