---
name: sandsquircle
description: Implement, scaffold, or redesign web apps, dashboards, PWAs, mobile APKs, iOS apps, and desktop interfaces using the SandSquircle UI design system (Warm Sand & Charcoal Soft-Squircle aesthetic). Use whenever the user mentions SandSquircle, DueWise UI, warm sand theme, soft-squircle cards, or asks to redesign an interface into a minimalist daylight aesthetic across WebUI, Mobile Apps (Compose, SwiftUI, React Native, Flutter), or Desktop Apps.
version: 1.1.0
---

# SandSquircle UI Design System

A minimalist, high-contrast, daylight-first design system crafted for **WebUI** (React, Next.js, Vue, Svelte, Tailwind, Vanilla HTML), **Mobile Apps** (Android Jetpack Compose, iOS SwiftUI, React Native/Expo, Flutter), and **Desktop & Enterprise Web Applications** (Electron, Tauri, multi-column dashboards).

SandSquircle pairs warm organic sand canvases, high-contrast charcoal typography, diffused ambient shadows, and organic squircle geometry.

---

## 1. Core Philosophy & Cardinal Rules

1. **Warm Daylight Canvas (Rule #1)**:
   - **Never** use pure `#FFFFFF` as the page or viewport background.
   - Always set the canvas/screen background to Warm Sand: `bg-sand-100` (`#F8F6F2`).
   - This ensures crisp `#FFFFFF` cards, floating pill docks, and surface containers float naturally with organic depth rather than blending into an unstyled void.

2. **Responsive Shell Hierarchy**:
   - **Mobile-First App & PWA Shell**: Centered container with bottom padding for pill docks:
     ```html
     <div class="min-h-screen bg-sand-100 text-charcoal-900 font-sans antialiased">
       <main class="w-full max-w-[460px] min-h-screen px-4 pb-28 mx-auto flex flex-col">
         <!-- Content goes here -->
       </main>
     </div>
     ```
   - **Desktop Web Apps & Enterprise Dashboards**: Retain the `bg-sand-100` canvas and `rounded-[26px]` card geometry, pairing a collapsible squircle sidebar navigation with an adaptive 12-column grid (`max-w-7xl mx-auto px-6 py-8`).

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

## 5. Project Adaptation Workflows

Depending on the target project stack, instruct the agent to inspect the relevant reference:

### Tier 1: Modern WebUI (React, Next.js, Vue, Svelte, Tailwind v3/v4)
1. Import configuration from [`references/tailwind.config.js`](file:///references/tailwind.config.js).
2. Copy or adapt production components from [`references/component-recipes.tsx`](file:///references/component-recipes.tsx) (`SandSquircleTopBar`, `SandSquircleHeroCard`, `SandSquircleFloatingDock`, `SandSquircleModal`).

### Tier 2: Vanilla Web & Non-Tailwind Stacks (HTML, HTMX, Svelte, Django, Rails, PHP)
1. Include [`references/sandsquircle-tokens.css`](file:///references/sandsquircle-tokens.css) in your document `<head>`.
2. Apply pre-built classes: `.ss-shell`, `.ss-card`, `.ss-card-dark`, `.ss-pill-dock`, `.ss-fab`, `.ss-input`, `.ss-btn-primary`, and `.ss-badge-paid`.

### Tier 3: Mobile Apps (Native & Cross-Platform)
1. **Android Jetpack Compose**:
   - Import [`references/ComposeTheme.kt`](file:///references/ComposeTheme.kt).
   - Wrap composables in `SandSquircleTheme { ... }` and use `Modifier.sandSquircleCard()`.
2. **iOS Native (SwiftUI)**:
   - Import [`references/SandSquircleTheme.swift`](file:///references/SandSquircleTheme.swift).
   - Use `SandSquircle.Colors.*` and `.sandSquircleCard()` with continuous squircle curvature.
3. **React Native & Expo**:
   - Import [`references/ReactNativeTheme.ts`](file:///references/ReactNativeTheme.ts).
   - Use `SandSquircleStyles.card`, `SandSquircleStyles.pillDock`, and `PressableScale`.
4. **Flutter (Material 3)**:
   - Import [`references/sand_squircle_theme.dart`](file:///references/sand_squircle_theme.dart).
   - Set `theme: sandSquircleThemeData` and wrap items with `SandSquircleCard(child: ...)`.

### Tier 4: Desktop Web Apps & Enterprise Dashboards (Electron, Tauri, Multi-Column)
1. Use `SandSquircleDesktopShell` from [`references/component-recipes.tsx`](file:///references/component-recipes.tsx).
2. Arrange analytics in `SandSquircleStatGrid` (4-column responsive grid).
3. Universal tokens for design handoff are available in W3C DTCG format at [`references/tokens.json`](file:///references/tokens.json).

---

## 6. Anti-Patterns to Avoid

| Anti-Pattern | Why It Breaks the System | Correct Alternative |
| :--- | :--- | :--- |
| Pure white canvas (`bg-white`) | Eliminates contrast with cards; feels generic and harsh | Always use `bg-sand-100` (`#F8F6F2`) |
| Standard 8px/12px corners | Destroys the organic squircle signature aesthetic | Use 26px for cards, 32px for modals, 16px for rows |
| Heavy gray borders (`border-gray-300`) | Adds visual clutter and looks dated | Use `border-black/[0.03]` with `shadow-soft-card` |
| Saturated blue primary buttons | Conflicts with the high-contrast Warm Sand palette | Use deep `charcoal-900` for primary CTAs and `teal-600` for active accents |
| Sticky rectangular bottom nav bars | Occupies screen height and feels industrial | Use floating rounded-full pill dock (`shadow-pill-dock`) |
