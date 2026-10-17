# SandSquircle UI — AI Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Multi-Platform](https://img.shields.io/badge/Platform-Antigravity%20%7C%20Claude%20Code%20%7C%20Cursor%20%7C%20Windsurf-teal)](https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI)
[![Stack](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind%20%7C%20Jetpack%20Compose%20%7C%20CSS-charcoal?color=111827)](https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI)
[![Aesthetic](https://img.shields.io/badge/Aesthetic-Warm%20Sand%20%26%20Soft--Squircle-F8F6F2?color=EAE2D8&labelColor=111827)](https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI)

> **Universal, installable AI Agent Skill for designing, scaffolding, and refactoring web apps, PWAs, fintech dashboards, and Android APKs into the SandSquircle design system.**

---

## 🎨 Design System Philosophy

**SandSquircle** is a daylight-first, high-contrast interface design system inspired by organic tactile physical cards resting on a warm earthen canvas.

### The 4 Cardinal Rules of SandSquircle

1. **Warm Daylight Canvas (`#F8F6F2`)**: **Never** use pure `#FFFFFF` for the page background. The screen canvas is always Warm Sand (`sand-100`), allowing crisp white cards and floating pill docks to sit with natural optical depth.
2. **Mobile-First App Shell**: Designed natively for hand-held tactile interfaces (`max-w-[460px] pb-28 mx-auto`), while expanding symmetrically for multi-column desktop command centers.
3. **Ultra-Diffused Elevation & Hairline Borders**: Every white surface uses `rounded-[26px]`, ambient shadow `0 10px 30px -4px rgba(0, 0, 0, 0.04)`, and a 1px `border-black/[0.03]` hairline border. Never use heavy gray borders or harsh drop shadows.
4. **High-Contrast Interactive Hierarchy**: Deep Charcoal (`#111827`) provides decisive authority for hero typography, dark gradient analytics cards, and primary CTAs, accented with vibrant Teal (`#0D9488`) for active navigation.

---

## ⚡ 1-Line Quick Installation

### Antigravity IDE (Global Installation)

**Linux / macOS (Terminal):**
```bash
curl -fsSL https://raw.githubusercontent.com/Repinkindia/SandSquircle-UI-SKILL-AI/main/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/Repinkindia/SandSquircle-UI-SKILL-AI/main/install.ps1 | iex
```

*Or via direct git clone into your Antigravity skills directory:*
```bash
# Linux / macOS:
git clone https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git ~/.gemini/antigravity/skills/sandsquircle

# Windows:
git clone https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git "$env:USERPROFILE\.gemini\antigravity\skills\sandsquircle"
```

---

### Project-Scoped Installation (For specific repos)

Install directly into `.agent/skills/sandsquircle` inside your active project:

**Linux / macOS:**
```bash
git clone https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git .agent/skills/sandsquircle
```

**Windows:**
```powershell
git clone https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git .agent\skills\sandsquircle
```

---

### Claude Code (`claude-code`)

Clone directly into your Claude Code skills or personal instructions root:
```bash
git clone https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git ~/.claude/skills/sandsquircle
```

---

### Cursor & Windsurf

Symlink or copy `SKILL.md` into your rules directory:
```bash
mkdir -p .cursor/rules
curl -fsSL https://raw.githubusercontent.com/Repinkindia/SandSquircle-UI-SKILL-AI/main/SKILL.md -o .cursor/rules/sandsquircle.mdc
```

---

## 🚀 Triggering the Skill in AI Prompts

Once installed, simply prompt your AI coding assistant with natural triggers:

- **Full Application Scaffolding**:
  > *"Use the sandsquircle skill to scaffold a personal finance dashboard with TopBar, Hero balance card, category grid, and floating pill dock."*
- **Interface Refactoring**:
  > *"Refactor this generic white dashboard into the SandSquircle daylight aesthetic using warm sand canvas and 26px soft squircle cards."*
- **Android Jetpack Compose**:
  > *"Apply the SandSquircle ComposeTheme.kt and custom sandSquircleCard modifier to my Android home screen."*
- **Component Recipes**:
  > *"Generate a transaction list with Paid, Overdue, and Pending status badges following sandsquircle component recipes."*

---

## 🗂 Architecture & Repository Structure

```text
sandsquircle/
├── SKILL.md                          # Universal skill specification & trigger instructions (<500 lines)
├── README.md                         # Documentation, visual tokens, and setup instructions
├── LICENSE                           # MIT License
├── .gitignore                        # Universal multi-platform ignores
├── install.sh                        # POSIX installer for Linux / macOS
├── install.ps1                       # PowerShell installer for Windows
├── references/
│   ├── tailwind.config.js            # Tailwind v3 & v4 token definitions (colors, radii, shadows)
│   ├── sandsquircle-tokens.css       # Standalone CSS custom properties & utility classes for vanilla/HTMX
│   ├── ComposeTheme.kt               # Jetpack Compose Material3 theme, modifiers & system bars
│   └── component-recipes.tsx         # Copy-pasteable React 18/19 TypeScript components
└── examples/
    └── demo-preview.html             # Zero-build standalone interactive HTML showcase
```

---

## 🎨 Color Palette & Design Tokens

### 1. Sand Canvas Foundation
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `sand-50` | `#FBF9F6` | Form input backgrounds & sub-panels |
| `sand-100` | `#F8F6F2` | **Primary Viewport / Screen Background** |
| `sand-200` | `#F4EFEA` | Subtle dividers and pill tracks |
| `sand-300` | `#EAE2D8` | Active borders and tab segments |
| `sand-400` | `#D8CDC0` | Disabled borders & hairlines |

### 2. Charcoal Ink Hierarchy
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `charcoal-900` | `#111827` | Primary typography, FAB, key CTAs |
| `charcoal-800` | `#1F2937` | Dark card gradient termination |
| `charcoal-700` | `#374151` | Section titles & form labels |
| `charcoal-500` | `#6B7280` | Subtitles, timestamps & inactive icons |
| `charcoal-200` | `#E5E7EB` | Hairline dividers |
| `charcoal-100` | `#F3F4F6` | Pill backgrounds |

### 3. Brand Teal & Semantic Status
| Semantic Role | Text | Background | Border |
| :--- | :--- | :--- | :--- |
| **Brand Teal Accent** | `#0D9488` | `#F0FDFA` | `#CCFBF1` |
| **Paid / Inflow (Emerald Mint)** | `#10B981` | `#ECFDF5` | `#D1FAE5` |
| **Overdue / Outflow (Crimson Coral)** | `#EF4444` | `#FEF2F2` | `#FEE2E2` |
| **Pending / Warning (Amber Sand)** | `#F59E0B` | `#FFFBEB` | `#FEF3C7` |

---

## 📐 Corner Radius Hierarchy

```
┌──────────────────────────────────────────────┐
│  Modals & Bottom Sheets: 32px (rounded-[32px])│
│  ┌────────────────────────────────────────┐  │
│  │ Dark Hero Cards: 28px (rounded-[28px]) │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Primary Cards: 26px              │  │  │
│  │  │  ┌────────────────────────────┐  │  │  │
│  │  │  │ Mini-Cards: 22px           │  │  │  │
│  │  │  │  ┌──────────────────────┐  │  │  │  │
│  │  │  │  │ Rows/Inputs: 16px    │  │  │  │  │
│  │  │  │  │  ┌────────────────┐  │  │  │  │  │
│  │  │  │  │  │ Tabs: 12px     │  │  │  │  │  │
│  │  │  │  │  └────────────────┘  │  │  │  │  │
│  │  │  │  └──────────────────────┘  │  │  │  │
│  │  │  └────────────────────────────┘  │  │  │
│  │  └──────────────────────────────────┘  │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
  Floating Pill Dock & FAB: 9999px (rounded-full)
  App Brand Icon: 22% (rounded-[22%])
```

---

## 🖥 Interactive Preview

To experience the design system live with working privacy toggles, tab filtering, and animated bottom-sheet modals:

1. Clone or download this repository.
2. Double-click or open `examples/demo-preview.html` in any web browser (Chrome, Edge, Safari, Firefox).
3. No build tools or Node.js required—runs instantly via CDN!

---

## 📄 License

Distributed under the [MIT License](LICENSE). Built for high-velocity software engineering and autonomous AI agent workflows.
