---
name: sandsquircle
description: Apply the SandSquircle UI design style system (Warm Sand & Charcoal Soft-Squircle aesthetic) to any web app, mobile app (Android, iOS, React Native, Flutter), PWA, or desktop application. Extract and apply ONLY the 5 core style pillars—(1) button style, (2) colors, (3) theme, (4) card style, and (5) subtle UI components—while creating custom, domain-specific layouts for each app. NEVER copy the money-manager layout for unrelated apps.
version: 1.2.0
---

# SandSquircle UI Style System

SandSquircle is a universal **Visual Style & Component Language** defined by warm organic earthen foundations, high-contrast charcoal ink, diffused ambient elevation, tactile touch physics, and continuous squircle curvature.

---

## ⚠️ CRITICAL ARCHITECTURAL DIRECTIVE: DO NOT COPY THE MONEY-MANAGER LAYOUT

> [!IMPORTANT]
> **The Money-Manager / Ledger Demo is an ILLUSTRATIVE STYLE SHOWCASE ONLY.**
> **DO NOT** replicate financial metrics, ledger transaction rows, receivable/payable split pills, or money-management category grids unless the user explicitly asks for a personal finance or ledger application.
>
> When designing for any other application (e.g., E-Commerce, Social, Chat, Healthcare, Productivity, SaaS, DevTools, Streaming Media, Education):
> - **DO NOT** copy the demo app's information architecture, layout structure, or financial widgets.
> - **DO** architect custom, domain-appropriate layouts, screens, navigation patterns, and workflows tailored specifically to that product's brief (following the principle of grounding designs in their subject matter).
> - **DO** strictly apply the **5 Core SandSquircle Style Pillars** detailed below to all custom elements.

---

## The 5 Core Style Pillars to Extract & Apply

Whenever an AI agent uses SandSquircle, it must extract and apply **ONLY** these 5 style dimensions:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      THE 5 SANDSQUIRCLE STYLE PILLARS                  │
├─────────────────┬─────────────────┬──────────────────┬─────────────────┤
│ 1. Button Style │ 2. Colors       │ 3. Theme         │ 4. Card Style   │
│ Charcoal-900 &  │ Warm Sand #F8F6 │ Daylight Canvas, │ 26px Squircle,  │
│ Teal CTAs, Fab, │ Charcoal Ink,   │ Hairline Borders,│ 28px Dark Hero, │
│ 0.96x Spring    │ Semantic Pills  │ Plus Jakarta Sans│ Diffused Shadow │
├─────────────────┴─────────────────┴──────────────────┴─────────────────┤
│ 5. Subtle UI Components: 22% Squircle Icons, 6px Dot Status Badges,    │
│    Underline-Offset Links, Frosted Glass Containers, Segmented Chips   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Pillar 1: Button Style & Tactile Physics

All interactive triggers in SandSquircle adhere to specific button archetypes:

1. **Primary Submission CTA**:
   - Styling: `bg-charcoal-900 text-sand-50 rounded-2xl font-bold py-3.5 px-5 shadow-md hover:bg-charcoal-800 transition-all`
   - Active tactile feedback: `active:scale-[0.98]`
2. **Secondary / Brand Action Button**:
   - Styling: `bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold py-3 px-4 shadow-sm transition-all`
   - Active tactile feedback: `active:scale-[0.98]`
3. **Circular Action / Header Button**:
   - Styling: `w-10 h-10 rounded-full bg-white shadow-soft-card border border-black/[0.04] text-charcoal-700 hover:text-charcoal-900 flex items-center justify-center transition-all`
   - Active tactile feedback: `active:scale-95`
4. **Floating Action Button (FAB)**:
   - Styling: `rounded-full bg-charcoal-900 text-white shadow-elevated-fab ring-4 ring-sand-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95`
5. **Ghost / Tertiary Link Button**:
   - Styling: `text-charcoal-700 hover:text-charcoal-900 font-bold px-3 py-2 rounded-xl hover:bg-sand-200/60 transition-colors`

---

### Pillar 2: Color Palette

Apply the exact hexadecimal color tokens across all platforms:

#### A. Sand Canvas Foundation (Warm Earthen Daylight)
- `sand-50` (`#FBF9F6`): Form input fields, sub-panels, modal backgrounds
- `sand-100` (`#F8F6F2`): **Primary Screen & Viewport Canvas** (Mandatory background)
- `sand-200` (`#F4EFEA`): Card dividers, segmented tab tracks, avatar backgrounds
- `sand-300` (`#EAE2D8`): Active tab boundaries, subtle card borders
- `sand-400` (`#D8CDC0`): Muted outlines, disabled dividers

#### B. Charcoal Ink Hierarchy (High-Contrast Typography & Depth)
- `charcoal-900` (`#111827`): Primary typography, hero headings, FAB, primary CTA
- `charcoal-800` (`#1F2937`): Dark card gradient stop, button hover states
- `charcoal-700` (`#374151`): Section subtitles, form labels, secondary headers
- `charcoal-500` (`#6B7280`): Timestamps, metadata, inactive icons, helper text
- `charcoal-400` (`#9CA3AF`): Placeholder text, disabled glyphs
- `charcoal-200` (`#E5E7EB`): Modal drag handles, hairline dividers
- `charcoal-100` (`#F3F4F6`): Subtle badge backgrounds

#### C. Brand Teal Accents
- `teal-600` (`#0D9488`): Primary brand color, active navigation items, text links
- `teal-700` (`#0F766E`): Button hover and active link states
- `teal-50` (`#F0FDFA`): Active tab pill background, icon container tint

#### D. Semantic Status Pills
- **Positive / Success / Active**: Text `#10B981`, Background `#ECFDF5`, Border `#D1FAE5` (`emeraldMint`)
- **Negative / Danger / Inactive**: Text `#EF4444`, Background `#FEF2F2`, Border `#FEE2E2` (`crimsonCoral`)
- **Warning / Pending / In-Progress**: Text `#F59E0B`, Background `#FFFBEB`, Border `#FEF3C7` (`amberSand`)

---

### Pillar 3: Theme (Canvas, Elevation, Typography & Hairlines)

1. **Warm Canvas Rule (No Pure White Screens)**:
   - Always set `body` or root screen to `#F8F6F2` (`bg-sand-100`). Never use `#FFFFFF` as the page background.
2. **Typography (Plus Jakarta Sans)**:
   - Font: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`.
   - Headings: `font-extrabold text-charcoal-900 tracking-tight` (negative letter spacing `-0.015em` to `-0.02em`).
   - Overlines: `text-xs font-semibold text-charcoal-500 uppercase tracking-wider`.
   - Body & Subtitles: `text-charcoal-700` or `text-charcoal-500`.
3. **Ultra-Diffused Elevation & Hairlines**:
   - Ambient Shadow: `box-shadow: 0 10px 30px -4px rgba(0, 0, 0, 0.04)` (`shadow-soft-card`).
   - Hover Shadow: `box-shadow: 0 14px 34px -4px rgba(0, 0, 0, 0.07)` (`shadow-soft-card-hover`).
   - Hairline Border: `border: 1px solid rgba(0, 0, 0, 0.03)` (`border-black/[0.03]`).

---

### Pillar 4: Card Style & Squircle Hierarchy

Containers must use continuous squircle corner curvature, establishing physical depth:

| Component Type | Corner Radius | Tailwind Spec | Visual Signature |
| :--- | :--- | :--- | :--- |
| **Primary White Card** | 26px | `rounded-[26px]` | `bg-white shadow-soft-card border border-black/[0.03] p-5 sm:p-6` |
| **Dark Gradient Hero Card** | 28px | `rounded-[28px]` | `bg-gradient-to-br from-charcoal-900 to-charcoal-800 text-white shadow-xl p-6 border border-white/10` |
| **Modal / Bottom Sheet** | 32px | `rounded-[32px]` | `bg-white shadow-modal-sheet border border-black/[0.04] p-6` |
| **Mini Summary Card** | 22px | `rounded-[22px]` | `bg-white/80 border border-sand-300 p-3.5` |
| **List Row / Field Container**| 16px | `rounded-2xl` | `bg-white p-4 shadow-soft-card border border-black/[0.03]` |
| **Segmented Chip / Tab** | 12px | `rounded-xl` | `p-1 bg-sand-200/80` track with `rounded-lg bg-white shadow-sm` active tab |

---

### Pillar 5: Subtle UI Components (Icons, Links, Graphics & Micro-Details)

1. **Squircle App / Section Logo Icon**:
   - `rounded-[22%]` (or 22% squircle), Charcoal-900 background with Teal-500 or Sand-50 icon.
2. **Semantic Status Badges with 6px Dot**:
   - Pill badge: `rounded-full px-2.5 py-1 text-[10px] font-bold inline-flex items-center gap-1.5`.
   - Includes a circular 6px dot indicator: `w-1.5 h-1.5 rounded-full`.
3. **Links & Text Triggers**:
   - `text-teal-600 hover:text-teal-700 font-semibold underline-offset-4 hover:underline transition-colors`.
4. **Form Inputs**:
   - `bg-sand-50 border border-sand-300 rounded-2xl px-4 py-3 text-sm text-charcoal-900 outline-none focus:ring-2 focus:ring-charcoal-900 focus:bg-white transition-all`.
5. **Frosted Glass Sub-Boxes**:
   - For dark cards: `bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10`.
6. **Sheet Drag Handle**:
   - `w-12 h-1.5 bg-charcoal-200 rounded-full mx-auto mb-4`.
7. **Floating Pill Dock**:
   - `rounded-full bg-white/95 backdrop-blur-md shadow-pill-dock border border-black/[0.04] px-5 py-3`.

---

## Domain Adaptation Examples: How to Apply to Different Apps

When building different app categories, design native domain layouts while applying the 5 SandSquircle style pillars:

### 1. E-Commerce / Storefront
- **Canvas**: `bg-sand-100` page foundation.
- **Product Cards**: `bg-white rounded-[26px] p-4 shadow-soft-card border border-black/[0.03]` with product photography, bold charcoal price, and emeraldMint `"In Stock"` pill badge.
- **Primary CTA**: Full-width Charcoal-900 `"Add to Bag"` button with `active:scale-[0.98]`.
- **Cart Sheet**: `rounded-t-[32px]` bottom modal with drag handle and sand-50 coupon input.

### 2. Social / Community / Chat
- **Canvas**: `bg-sand-100` background.
- **Message Bubbles**: Incoming messages in `bg-white rounded-2xl p-3.5 shadow-soft-card`, outgoing messages in `bg-charcoal-900 text-white rounded-2xl p-3.5`.
- **Avatar Icons**: `rounded-[22%]` squircle avatars or `rounded-full` with hairline border.
- **Channel List**: 16px rounded-2xl rows with teal unread count pills.

### 3. Developer Tools / SaaS Admin Portal
- **Canvas**: `bg-sand-100` full-width multi-column layout.
- **Sidebar Navigation**: White squircle sidebar with charcoal-900 active tab and teal accents.
- **Metric Grids**: 4-column `rounded-[26px]` stat cards with `+14.2%` emeraldMint badges.
- **Code Snippet Boxes**: Dark hero treatment (`from-charcoal-900 to-charcoal-800 rounded-2xl p-4 border border-white/10 font-mono text-xs`).

### 4. Health, Fitness & Habit Tracker
- **Canvas**: `bg-sand-100` warm canvas.
- **Hero Card**: Dark gradient hero card for weekly streak and calories burned.
- **Habit Rows**: 16px squircle list items with circular checkmark toggle buttons (`w-10 h-10 rounded-full`).
- **Status Pills**: `amberSand` for `"Rest Day"`, `emeraldMint` for `"Completed"`.

---

## Reference File Directory

- **Tailwind Config**: [`references/tailwind.config.js`](file:///references/tailwind.config.js)
- **Vanilla CSS**: [`references/sandsquircle-tokens.css`](file:///references/sandsquircle-tokens.css)
- **Component Primitives**: [`references/component-recipes.tsx`](file:///references/component-recipes.tsx)
- **Universal Tokens**: [`references/tokens.json`](file:///references/tokens.json)
- **Android Jetpack Compose**: [`references/ComposeTheme.kt`](file:///references/ComposeTheme.kt)
- **iOS SwiftUI**: [`references/SandSquircleTheme.swift`](file:///references/SandSquircleTheme.swift)
- **React Native**: [`references/ReactNativeTheme.ts`](file:///references/ReactNativeTheme.ts)
- **Flutter**: [`references/sand_squircle_theme.dart`](file:///references/sand_squircle_theme.dart)
- **Visual Demo (Illustrative Only)**: [`examples/demo-preview.html`](file:///examples/demo-preview.html)
