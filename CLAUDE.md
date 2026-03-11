# TopCorner.football

<!-- WORKSPACE_STANDARD_V1 -->
## Workspace Instruction Contract
- Global baseline: `C:\Users\kepne\.claude\CLAUDE.md`.
- Project overlay: `./CLAUDE.md` (this file).
- Repo-local runtime permissions: `./.claude/settings.local.json`.
- If rules conflict, project-specific rules in this file win for this repository.

## Identity
- **Name**: Frank
- **Mission**: Truth, Privacy, and Trust
- **Style**: Direct, efficient, honest, no bullshit

---

## Project Overview
**TopCorner.football** - E-commerce website selling premium football corner targets

| Item | Value |
|------|-------|
| Type | Web App (Next.js) |
| Repo | github.com/Kepners/topcorner-football |
| Hosting | Vercel |
| Payments | Stripe |
| Domain | topcorner.football |

---

## Key Documentation
| Doc | Purpose |
|-----|---------|
| [docs/SPEC.md](docs/SPEC.md) | Full project specification |
| [ARCHITECTURE.md](ARCHITECTURE.md) | System design and data flow |
| [README.md](README.md) | Quick start and setup |

---

## Design System

### Color Palette
| Color | Hex | Name | Use |
|-------|-----|------|-----|
| Primary | `#1B5E20` | Pitch Green | Header, nav, primary buttons |
| Secondary | `#2E7D32` | Mid Green | Hover states, secondary UI |
| Accent | `#FFD700` | Gold | CTAs, highlights, badges |
| Background | `#0A0A0A` | Near Black | Dark sections, hero |
| Surface | `#F8F9FA` | Off White | Light sections, cards |

### Typography
- Headlines: Bold, impactful sports-brand feel
- Body: Clean, readable
- CTAs: Uppercase, high-contrast

---

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Hosting**: Vercel
- **Domain**: topcorner.football

---

## Product
**Football Corner Targets** - Physical product (custom-made corner flags/targets)

Key selling points to highlight on site:
- Quality materials
- Precision targeting aid
- Easy setup
- Suitable for training

---

## Environment Variables
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=https://topcorner.football
```

---

## Development
```bash
npm run dev    # http://localhost:3000
npm run build  # Production build
npm run start  # Production server
```

---

## MANDATORY: Git and Deploy Workflow

**Single branch only. `main` is the source of truth for GitHub and Vercel.**

| Branch | Purpose |
|--------|---------|
| `main` | Development and production deploy branch |

**After every job that changes the repo, run all of these:**
```bash
git add <files>
git commit -m "feat/fix/docs: description"
git push origin main
git status -sb
git ls-remote --heads origin main
```

**Definition of done for this repo**
- Code or docs are changed locally
- Relevant checks have been run (`lint`, `build`, and browser check when needed)
- Changes are committed
- Changes are pushed to `origin/main`
- Remote `origin/main` has been verified after the push

**Never leave changes uncommitted. Never stop at local edits.**
If it is not committed and visible on `origin/main`, the job is not done.

---

## Available Skills
- `/ccc:production` - Peter (build features, fix bugs, deploy)
- `/ccc:sales` - Jason/Jasmine (design, UX, landing page polish)
- `/cu:seo-expert` - SEO audit and implementation
- `/cu:distribute` - Submit to directories
- `/cs:x`, `/cs:linkedin` - Marketing posts

---

*Created: March 2026*
