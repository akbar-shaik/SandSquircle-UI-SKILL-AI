---
name: sandsquircle
description: Implement, scaffold, or redesign web apps, dashboards, PWAs, and mobile APKs using the SandSquircle UI design system (Warm Sand & Charcoal Soft-Squircle aesthetic). Use whenever the user mentions SandSquircle, DueWise UI, warm sand theme, soft-squircle cards, or asks to redesign an interface into a minimalist daylight aesthetic.
version: 1.0.0
---

# SandSquircle UI Design System

A minimalist, high-contrast, daylight-first design system crafted for mobile-first web applications, PWAs, fintech dashboards, and Android APKs. SandSquircle combines warm organic sand canvases, high-contrast charcoal typography, diffused ambient shadows, and organic squircle geometry.

---

## 1. Core Philosophy & Cardinal Rules

1. **Warm Daylight Canvas (Rule #1)**:
   - **Never** use pure `#FFFFFF` as the page or viewport background.
   - Always set the canvas/screen background to Warm Sand: `bg-sand-100` (`#F8F6F2`).
   - This ensures crisp `#FFFFFF` cards, floating pill docks, and surface containers float naturally with organic depth rather than blending into an unstyled void.

2. **Mobile-First Responsive App Shell**:
   - Default layout wrapper:
     ```html
     <div class="min-h-screen bg-sand-100 text-charcoal-900 font-sans antialiased">
       <main class="w-full max-w-[460px] min-h-screen px-4 pb-28 mx-auto flex flex-col">
         <!-- Content goes here -->
       </main>
     </div>
     ```
   - For wide multi-column desktop dashboards, retain the `bg-sand-100` canvas and `rounded-[26px]` card geometry while expanding to an adaptive 2-to-3 column grid (`max-w-6xl` or `max-w-7xl mx-auto px-6`).

3. **Ultra-Diffused Elevation & Hairline Borders**:
   - Every floating card uses:
     - `rounded-[26px]` (or `rounded-[28px]` / `rounded-[32px]`)
     - `shadow-soft-card` (`0 10px 30px -4px rgba(0, 0, 0, 0.04)`)
     - `border border-black/[0.03]`
   - **Never** use heavy gray borders (`border-gray-300`) or harsh, dark drop shadows.

4. **High-Contrast Interactive Hierarchy**:
   - **Charcoal-900 (`#111827`)**: Primary typography, high-priority dark gradient hero cards, floating action buttons (FABs), and primary submission CTAs.
   - **Teal-600 (`#0D9488`)**: Active navigation states, brand accents, secondary CTA links, and overline indicators.
   - **Muted Charcoal-500 (`#6B7280`)**: Secondary metadata, timestamps, and subtitles.

---

## 2. Color Token Reference

### Sand Canvas Palette (Warm Daylight Foundations)
| Token | Hex | Tailwind Class | Primary Usage |
| :--- | :--- | :--- | :--- |
| `sand-50` | `#FBF9F6` | `bg-sand-50` | Input field backgrounds, modal sub-panels |
| `sand-100` | `#F8F6F2` | `bg-sand-100` | **Primary Viewport / Screen Canvas** |
| `sand-200` | `#F4EFEA` | `bg-sand-200` | Card dividers, pill track backgrounds |
| `sand-300` | `#EAE2D8` | `bg-sand-300` | Subtle active borders, segmented tabs |
| `sand-400` | `#D8CDC0` | `bg-sand-400` | Disabled states, muted hairline dividers |

### Charcoal Ink Palette (Contrast & Depth)
| Token | Hex | Tailwind Class | Primary Usage |
| :--- | :--- | :--- | :--- |
| `charcoal-900` | `#111827` | `text-charcoal-900` / `bg-charcoal-900` | Primary headings, FAB, primary CTA button |
| `charcoal-800` | `#1F2937` | `text-charcoal-800` / `bg-charcoal-800` | Dark hero cards gradient end |
| `charcoal-700` | `#374151` | `text-charcoal-700` | Section titles, form labels |
| `charcoal-500` | `#6B7280` | `text-charcoal-500` | Body subtitles, captions, inactive icons |
| `charcoal-400` | `#9CA3AF` | `text-charcoal-400` | Input placeholder text, disabled icons |
| `charcoal-200` | `#E5E7EB` | `border-charcoal-200` | Crisp structural borders (when needed) |
| `charcoal-100` | `#F3F4F6` | `bg-charcoal-100` | Subtle pill tag backgrounds |

### Brand Teal Palette
| Token | Hex | Tailwind Class | Primary Usage |
| :--- | :--- | :--- | :--- |
| `teal-50` | `#F0FDFA` | `bg-teal-50` | Active tab pill background, icon squircle |
| `teal-600` | `#0D9488` | `text-teal-600` / `bg-teal-600` | Active icon color, brand accents, pills |
| `teal-700` | `#0F766E` | `text-teal-700` / `bg-teal-700` | Hover states for teal action buttons |

### Semantic Status Badges
| Status | Text Color | Background | Border | Tailwind Tokens |
| :--- | :--- | :--- | :--- | :--- |
| **Paid / Inflow / Positive** | `#10B981` | `#ECFDF5` | `#D1FAE5` | `text-emeraldMint-text bg-emeraldMint-bg border-emeraldMint-border` |
| **Overdue / Outflow / Danger** | `#EF4444` | `#FEF2F2` | `#FEE2E2` | `text-crimsonCoral-text bg-crimsonCoral-bg border-crimsonCoral-border` |
| **Pending / Partial / Warning** | `#F59E0B` | `#FFFBEB` | `#FEF3C7` | `text-amberSand-text bg-amberSand-bg border-amberSand-border` |

---

## 3. Typography Scale (Plus Jakarta Sans)

SandSquircle uses **Plus Jakarta Sans** for modern, crisp readability:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

| Element | Tailwind Classes | Exact Specs |
| :--- | :--- | :--- |
| **Hero Metric** | `text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal-900` | 32px–36px, Weight 800, -0.02em |
| **Card / Page Heading** | `text-xl font-extrabold text-charcoal-900 tracking-tight` | 20px, Weight 800, -0.015em |
| **Modal / Section Header** | `text-base font-bold text-charcoal-900` | 16px, Weight 700 |
| **List Item Title** | `text-sm font-bold text-charcoal-900` | 14px, Weight 700 |
| **Section Overline** | `text-xs font-semibold text-charcoal-500 uppercase tracking-wider` | 12px, Weight 600, +0.05em |
| **Form Label** | `text-xs font-bold text-charcoal-700 mb-1 block` | 12px, Weight 700 |
| **Micro Badge / Nav** | `text-[10px] sm:text-[11px] font-bold tracking-wide` | 10px–11px, Weight 700 |

---

## 4. Corner Radius Hierarchy

Consistent squircle curvature establishes the physical layer hierarchy:

| Surface Level | Radius | Tailwind Class | Example Component |
| :--- | :--- | :--- | :--- |
| **Modals & Bottom Sheets** | 32px | `rounded-[32px]` | Dialogs, Quick Action sheets |
| **Dark Gradient Hero Cards** | 28px | `rounded-[28px]` | Charcoal analytics & summary cards |
| **Standard Primary Cards** | 26px | `rounded-[26px]` | White balance & content cards |
| **Metric Mini-Cards** | 22px | `rounded-[22px]` | Inflow/Outflow sub-metric cards |
| **List Rows & Form Inputs** | 16px | `rounded-2xl` | Transaction rows, inputs, standard buttons |
| **Segmented Tabs & Chips** | 12px | `rounded-xl` | Time period filters, filter chips |
| **App Logo Squircle** | 22% | `rounded-[22%]` | Brand squircle icons |
| **Pills & Floating Action** | 9999px | `rounded-full` | Floating bottom dock, FAB, status badges |

---

## 5. Signature Component Patterns

### 1. Top Bar (`SandSquircleTopBar`)
- Left: 22% squircle brand icon (`w-10 h-10 bg-charcoal-900 text-sand-50 rounded-[22%]`).
- Center: Teal uppercase overline (`text-[10px] font-bold text-teal-600 tracking-widest uppercase`) + Bold greeting (`text-lg font-extrabold text-charcoal-900`).
- Right: Circular white action buttons with hairline border (`w-10 h-10 rounded-full bg-white shadow-soft-card border border-black/[0.03]`) + pinging notification dot.

### 2. Light Balance Hero Card (`SandSquircleHeroCard`)
- `bg-white rounded-[26px] p-6 shadow-soft-card border border-black/[0.03]`.
- Top: Overline ("TOTAL NET POSITION") with Privacy Eye toggle button.
- Center: Hero metric (`$48,290.00` or `••••••••` masked state).
- Bottom: 2-column semantic split mini-cards (`emeraldMint` Receivable vs `crimsonCoral` Payable) with 22px squircle geometry.

### 3. Dark Gradient Analytics Card (`SandSquircleDarkHeroCard`)
- `bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-[#0B0F19] text-white rounded-[28px] p-6 shadow-xl border border-white/10`.
- Top: Subtle white/10 frosted badge ("MONTHLY CASH RUNWAY").
- Center: White bold metric + positive percentage pill (`bg-emerald-500/20 text-emerald-300`).
- Bottom: Frosted glass sub-metrics in `bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10`.

### 4. 5-Column Quick Action Category Grid (`SandSquircleCategoryGrid`)
- Horizontal flex or 5-column grid (`grid grid-cols-5 gap-2 sm:gap-3`).
- Each item: `w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-soft-card border border-black/[0.03] flex items-center justify-center transition-transform hover:scale-105 active:scale-95`.
- Label underneath: `text-[11px] font-bold text-charcoal-700 text-center tracking-tight`.

### 5. Transaction List Row (`SandSquircleListRow`)
- `bg-white rounded-2xl p-4 shadow-soft-card border border-black/[0.03] flex items-center justify-between transition-transform active:scale-[0.99]`.
- Left: 16px squircle icon with soft background tint (`bg-sand-100` or `bg-teal-50`).
- Center: Title (`text-sm font-bold text-charcoal-900`) + Subtitle/Date (`text-xs text-charcoal-500`).
- Right: Amount (`text-sm font-extrabold`) + Status pill badge (`SandSquircleStatusBadge`).

### 6. Floating Pill Dock (`SandSquircleFloatingDock`)
- Positioned fixed at bottom center: `fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[420px] z-40`.
- Shell: `bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-pill-dock border border-black/[0.04] flex items-center justify-between`.
- Center FAB: `-mt-5 w-12 h-12 rounded-full bg-charcoal-900 text-white shadow-elevated-fab ring-4 ring-sand-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95`.
- 4 Navigation Tabs: 2 left of FAB, 2 right of FAB. Active tab uses `text-teal-600 bg-teal-50/80 rounded-full px-3 py-1.5`.

### 7. Quick Action Modal / Bottom Sheet (`SandSquircleModal`)
- Outer backdrop: `fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4`.
- Dialog container: `bg-white w-full max-w-lg rounded-t-[32px] sm:rounded-[32px] p-6 shadow-modal-sheet border border-black/[0.04]`.
- Top: Pill drag indicator (`w-12 h-1.5 bg-charcoal-200 rounded-full mx-auto mb-4`).
- Inputs: `bg-sand-50 rounded-2xl border border-sand-300 px-4 py-3 text-sm focus:ring-2 focus:ring-charcoal-900 focus:bg-white`.
- Primary CTA: `w-full bg-charcoal-900 text-sand-50 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-charcoal-800 active:scale-[0.98]`.

---

## 6. Implementation Workflow & Reference Files

When building or refactoring interfaces into SandSquircle, inspect these reference files:

1. **Tailwind Projects (React, Next.js, Vite, Vue)**:
   - Load tokens from [`references/tailwind.config.js`](file:///references/tailwind.config.js).
   - Copy or adapt components from [`references/component-recipes.tsx`](file:///references/component-recipes.tsx).
2. **Vanilla / Non-Tailwind Web Apps (HTML, HTMX, Svelte, Go, Rails)**:
   - Include [`references/sandsquircle-tokens.css`](file:///references/sandsquircle-tokens.css) in your `<head>`.
   - Use pre-built `.ss-shell`, `.ss-card`, `.ss-pill-dock`, and `.ss-fab` utility classes.
3. **Android Jetpack Compose APKs**:
   - Import [`references/ComposeTheme.kt`](file:///references/ComposeTheme.kt) into your Android app package.
   - Wrap screens with `SandSquircleTheme { ... }` and use `Modifier.sandSquircleCard()`.
4. **Interactive Sandbox Preview**:
   - Inspect and open [`examples/demo-preview.html`](file:///examples/demo-preview.html) for a complete working implementation.

---

## 7. Anti-Patterns to Avoid

| Anti-Pattern | Why It Breaks the System | Correct Alternative |
| :--- | :--- | :--- |
| Pure white canvas (`bg-white`) | Eliminates contrast with cards; feels generic and harsh | Always use `bg-sand-100` (`#F8F6F2`) |
| Standard 8px/12px corners | Destroys the organic squircle signature aesthetic | Use 26px for cards, 32px for modals, 16px for rows |
| Heavy gray borders (`border-gray-300`) | Adds visual clutter and looks dated | Use `border-black/[0.03]` with `shadow-soft-card` |
| Saturated blue primary buttons | Conflicts with the high-contrast Warm Sand palette | Use deep `charcoal-900` for primary CTAs and `teal-600` for active accents |
| Sticky rectangular bottom nav bars | Occupies screen height and feels industrial | Use floating rounded-full pill dock (`shadow-pill-dock`) |
