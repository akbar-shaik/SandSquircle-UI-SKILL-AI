# SandSquircle UI — AI Agent Style Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Multi-Platform](https://img.shields.io/badge/Platform-Antigravity%20%7C%20Claude%20Code%20%7C%20Cursor%20%7C%20Windsurf-teal)](https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI)
[![Stack](https://img.shields.io/badge/Ecosystem-WebUI%20%7C%20Android%20%7C%20iOS%20%7C%20React%20Native%20%7C%20Flutter-charcoal?color=111827)](https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI)
[![Aesthetic](https://img.shields.io/badge/Aesthetic-Warm%20Sand%20%26%20Soft--Squircle-F8F6F2?color=EAE2D8&labelColor=111827)](https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI)

> **Universal, installable AI Agent Skill enabling any AI coding assistant to extract and apply the SandSquircle UI style system (Buttons, Colors, Theme, Cards, and Subtle UI Components) across ANY application domain without copying the money-manager layout.**

---

## 📸 Visual Style Showcase

<p align="center">
  <img src="assets/preview-mobile.png" width="340" alt="SandSquircle Mobile App Shell" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/preview-modal.png" width="340" alt="SandSquircle 32px Squircle Modal" />
</p>

<p align="center">
  <img src="assets/preview-desktop.png" width="720" alt="SandSquircle Desktop & Web App Canvas" />
</p>

---

## ⚠️ Core Directive for AI Agents: Style Extraction vs. Layout Copying

> [!IMPORTANT]
> **The Money-Manager / Ledger Demo is an ILLUSTRATIVE STYLE SHOWCASE ONLY.**
> **DO NOT** copy the money-manager layout (balance metric, receivable/payable split pills, ledger rows, transaction categories) for unrelated applications.
>
> **For different apps, different layouts must be created by AI.**
> AI agents using this skill must extract and apply **ONLY** the 5 style pillars below, while creating custom, domain-specific layouts tailored to each individual app brief.

---

## 🎨 The 5 Core Style Pillars to Extract & Apply

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

### 1. Button Style
- **Primary CTA**: Deep Charcoal (`#111827`) background with Warm Sand text (`#FBF9F6`), `rounded-2xl`, bold typography, subtle shadow, and tactile `active:scale-[0.98]` feedback.
- **Secondary Action**: Brand Teal (`#0D9488` hover `#0F766E`) button with `rounded-2xl` and `active:scale-[0.98]`.
- **Circular Action Trigger**: `w-10 h-10 rounded-full bg-white` with hairline border `border-black/[0.04]` and `active:scale-95`.
- **Elevated FAB**: Charcoal-900 floating action circle with `shadow-elevated-fab` and `ring-4 ring-sand-100`.

### 2. Colors
- **Warm Sand Canvas Foundation**: `sand-50` (`#FBF9F6`), `sand-100` (`#F8F6F2` primary canvas), `sand-200` (`#F4EFEA`), `sand-300` (`#EAE2D8`), `sand-400` (`#D8CDC0`).
- **Charcoal Ink Hierarchy**: `charcoal-900` (`#111827` primary ink), `charcoal-800` (`#1F2937`), `charcoal-700` (`#374151`), `charcoal-500` (`#6B7280`), `charcoal-400` (`#9CA3AF`), `charcoal-200` (`#E5E7EB`), `charcoal-100` (`#F3F4F6`).
- **Brand Teal Accents**: `teal-600` (`#0D9488`), `teal-700` (`#0F766E`), `teal-50` (`#F0FDFA`).
- **Semantic Status Pills**:
  - `emeraldMint` (Positive / Active / Success): Text `#10B981`, BG `#ECFDF5`, Border `#D1FAE5`
  - `crimsonCoral` (Negative / Danger / Inactive): Text `#EF4444`, BG `#FEF2F2`, Border `#FEE2E2`
  - `amberSand` (Warning / Pending / Alert): Text `#F59E0B`, BG `#FFFBEB`, Border `#FEF3C7`

### 3. Theme
- **Warm Daylight Foundation**: **Never** use pure `#FFFFFF` for the page background. The screen canvas is always Warm Sand (`#F8F6F2`), allowing white cards to float with natural depth.
- **Typography (Plus Jakarta Sans)**: Weights 400, 500, 600, 700, 800. Headings use negative letter spacing (`tracking-tight`).
- **Diffused Soft Elevation**: Ambient shadow `0 10px 30px -4px rgba(0, 0, 0, 0.04)` (`shadow-soft-card`).
- **Hairline Borders**: Crisp `1px solid rgba(0, 0, 0, 0.03)` on white surfaces; `rgba(255, 255, 255, 0.1)` on dark surfaces.

### 4. Card Style
- **Primary White Cards**: `rounded-[26px]` continuous squircle, white background, soft shadow, hairline border.
- **Dark Gradient Hero Cards**: `rounded-[28px]` squircle with gradient `from-charcoal-900 to-charcoal-800`, white text, and frosted sub-boxes.
- **Dialogs & Bottom Sheets**: `rounded-[32px]` squircle with backdrop blur.
- **Mini Sub-Cards**: `rounded-[22px]`.
- **Row Items / List Containers**: `rounded-2xl` (16px).

### 5. Other UI Subtle Components
- **Squircle Logo / Icon Badges**: `rounded-[22%]` (or 22% squircle), Charcoal-900 background with Teal or Sand glyph.
- **Status Badges with 6px Dot**: `rounded-full` pill with a 6px status dot.
- **Underline-Offset Links**: `text-teal-600 hover:text-teal-700 font-semibold underline-offset-4 hover:underline`.
- **Form Inputs**: `bg-sand-50 border border-sand-300 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-charcoal-900 focus:bg-white`.
- **Segmented Chips / Tabs**: `rounded-xl bg-sand-200/80 p-1 flex gap-1` with `rounded-lg bg-white shadow-sm` active item.
- **Frosted Glass Containers**: `bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10`.
- **Floating Pill Dock**: `rounded-full bg-white/95 backdrop-blur-md shadow-pill-dock border border-black/[0.04] px-5 py-3`.

---

## 💡 How AI Agents Apply SandSquircle to Different App Types

| App Domain | Custom Layout Strategy (DO NOT copy money manager) | SandSquircle Style Pillars Applied |
| :--- | :--- | :--- |
| **E-Commerce Storefront** | Grid of products, filter sidebar, cart drawer, checkout stepper | Product cards use `rounded-[26px]` + `shadow-soft-card`. Primary CTA `"Add to Bag"` is Charcoal-900. Stock badge uses `emeraldMint`. |
| **Social / Community Chat** | Channel sidebar, message stream, compose box, profile modal | Chat bubbles use `rounded-2xl` in white and charcoal. Avatars use `22% squircle`. Unread counts use `teal-600` badge. |
| **Developer Tools / SaaS** | Multi-column console, API key tables, dark code snippets | Code blocks use Dark Hero gradient (`rounded-2xl`). Copy buttons use circular icon style. Server status uses 6px dot badge. |
| **Fitness / Health Tracker** | Workout calendar, streak counters, exercise list, metric graphs | Daily streak hero card (`rounded-[28px]`). Rest day badge uses `amberSand`. Circular checkmark buttons for completed sets. |
| **Music / Audio Streaming** | Playlist grid, track list rows, bottom now-playing pill bar | Floating pill dock functions as the audio player bar. Play/Pause FAB uses Charcoal-900 with `ring-4 ring-sand-100`. |

---

## ⚡ 1-Line Installation for All Major AI Agents

### 1. Google Antigravity IDE

**Global Installation (All Workspaces):**
```bash
# Linux / macOS:
curl -fsSL https://raw.githubusercontent.com/akbar-shaik/SandSquircle-UI-SKILL-AI/main/install.sh | bash

# Windows PowerShell:
irm https://raw.githubusercontent.com/akbar-shaik/SandSquircle-UI-SKILL-AI/main/install.ps1 | iex
```

*Or via direct git clone:*
```bash
git clone https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI.git ~/.gemini/antigravity/skills/sandsquircle
```

**Project-Level Installation (Current Workspace Only):**
```bash
# Linux / macOS:
./install.sh --local

# Windows PowerShell:
.\install.ps1 -Local
```

---

### 2. Claude Code (`claude-code`)

Clone directly into your personal Claude Code skills directory:
```bash
git clone https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI.git ~/.claude/skills/sandsquircle
```
*Or add to your project's `CLAUDE.md`:*
```markdown
## Design System
Follow the SandSquircle UI style system in `.agent/skills/sandsquircle/SKILL.md`.
Extract ONLY the 5 style pillars (Button style, Colors, Theme, Card style, Subtle UI components).
Do not copy the money manager demo layout; design custom layouts suited to this app.
```

---

### 3. Cursor & Cursor Cloud Agents

Add SandSquircle as a project rule:
```bash
mkdir -p .cursor/rules
curl -fsSL https://raw.githubusercontent.com/akbar-shaik/SandSquircle-UI-SKILL-AI/main/SKILL.md -o .cursor/rules/sandsquircle.mdc
```
Cursor automatically discovers and activates the skill whenever you mention styling, cards, buttons, or SandSquircle.

---

### 4. Windsurf

Add SandSquircle to your project rules:
```bash
curl -fsSL https://raw.githubusercontent.com/akbar-shaik/SandSquircle-UI-SKILL-AI/main/SKILL.md >> .windsurfrules
```

---

### 5. GitHub Copilot, Cline, Roo Code & Aider

Clone the skill into your project root:
```bash
git clone https://github.com/akbar-shaik/SandSquircle-UI-SKILL-AI.git .agent/skills/sandsquircle
```
Then instruct the agent:
> *"Read `.agent/skills/sandsquircle/SKILL.md` and style this application using the 5 SandSquircle style pillars (buttons, colors, theme, cards, subtle UI)."*

---

## 📱 Multi-Platform Implementation References

| Platform / Framework | Tech Stack | Reference Implementation |
| :--- | :--- | :--- |
| **Modern WebUI** | React / Next.js / Vue / Svelte / Tailwind | [`references/tailwind.config.js`](references/tailwind.config.js) & [`references/component-recipes.tsx`](references/component-recipes.tsx) |
| **Vanilla Web** | HTML / HTMX / PHP / Django / Rails | [`references/sandsquircle-tokens.css`](references/sandsquircle-tokens.css) |
| **Android Native** | Kotlin / Jetpack Compose Material 3 | [`references/ComposeTheme.kt`](references/ComposeTheme.kt) |
| **iOS Native** | Swift / SwiftUI (Continuous Squircles) | [`references/SandSquircleTheme.swift`](references/SandSquircleTheme.swift) |
| **Cross-Platform Mobile** | React Native & Expo | [`references/ReactNativeTheme.ts`](references/ReactNativeTheme.ts) |
| **Cross-Platform Mobile** | Flutter (Material 3 ThemeData) | [`references/sand_squircle_theme.dart`](references/sand_squircle_theme.dart) |
| **Universal Design Tokens** | W3C DTCG Format (Figma / Tools) | [`references/tokens.json`](references/tokens.json) |

---

## 📄 License

Distributed under the [MIT License](LICENSE).
Built for high-velocity software engineering and autonomous AI agent workflows.
