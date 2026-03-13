# Session Handoff: US Payroll Guide

**Last Updated:** 2026-03-13 (Session IV)

---

## Session IV — 2026-03-13

### What was done this session
1. **New shared `ContentCard` component** (`components/ContentCard.tsx`) — standardized card design used across the entire site. Supports vertical and horizontal layouts, optional icons, metadata pills, badges, and arrow CTAs.
2. **`MetaPill` helper** — reusable pill component for category tags, dates, and read times.
3. **Resources hub page upgraded** (`app/resources/page.tsx`) — rich cards with icons, descriptions, item counts ("3 articles", "24 questions across 5 categories"), and arrow CTAs ("Browse articles", "View all guides").
4. **Resources nav now links to hub** — clicking "Resources" in header navigates to `/resources`; dropdown still opens on hover. Added "View all resources →" at bottom of dropdown.
5. **Standardized card design across all pages:**
   - Homepage pillars → `ContentCard` with icons, warm highlight for compliance
   - Homepage states → `ContentCard` with `StateIcon`, centered layout
   - Blog listing → `ContentCard` with `MetaPill` for category/date/readTime
   - Guides listing → `ContentCard` with `MetaPill` for category/readTime
   - States index → `ContentCard` horizontal layout with region badges

### Current state
- **Build**: PASSING (36 pages)
- **Deploy**: Vercel — us-payroll-guide.vercel.app (auto-deploy on push)
- **Domain**: uspayrollguide.com — NOT YET REGISTERED
- **Git**: github.com/bretstarr2024/global-payroll-nexus (repo name still needs updating)
- **Content**: All static, in-page. Blog posts hardcoded in components. No MongoDB integration yet.
- **Version**: 1.2.0

### What's next (priority order)
1. Register uspayrollguide.com and add as custom domain in Vercel
2. Rename GitHub repo
3. Add Organization + BreadcrumbList JSON-LD
4. Add OG images for social sharing
5. Strengthen internal linking between pillar pages and resources
6. Add last-updated timestamps
7. Run /audit baseline

---

## Session III — 2026-03-13

### What was done this session
1. **Replaced placeholder state icons with accurate geographic outlines** — sourced from ProPublica via `coryetzkorn/state-svg-defs` (MIT license)
2. **New `StateIcon` component** (`components/StateIcon.tsx`) — shared component with real SVG paths for all 10 states, uses `currentColor` fill to inherit brand colors
3. **Updated homepage** (`app/page.tsx`) — removed inline fake SVG paths, imports `StateIcon`
4. **Updated states index** (`app/states/page.tsx`) — replaced 2-letter text abbreviations with `StateIcon` silhouettes

### Current state
- **Build**: PASSING (36 pages)
- **Deploy**: Vercel — us-payroll-guide.vercel.app (auto-deploy on push)
- **Domain**: uspayrollguide.com — NOT YET REGISTERED
- **Git**: github.com/bretstarr2024/global-payroll-nexus (repo name still needs updating)
- **Content**: All static, in-page. Blog posts hardcoded in components. No MongoDB integration yet.
- **Version**: 1.1.1

### What's next (priority order)
1. Register uspayrollguide.com and add as custom domain in Vercel
2. Rename GitHub repo
3. Add Organization + BreadcrumbList JSON-LD
4. Add OG images for social sharing
5. Strengthen internal linking between pillar pages and resources
6. Add last-updated timestamps
7. Run /audit baseline

---

## Session II — 2026-03-13

### What was done this session
1. **Deployed to Vercel** — site is live at `us-payroll-guide.vercel.app`, auto-deploys on push to main
2. **Full Resources section** built — replaces standalone Glossary nav item:
   - `/resources` — Hub page linking to all resource types
   - `/resources/blog` — Blog listing with 3 seed articles (Form 5472, LLC vs C-Corp, First US Hire Checklist)
   - `/resources/blog/[slug]` — Full blog post template with AEO pattern (answer-first, FAQ accordion, CTA)
   - `/resources/faq` — 24 FAQs across 5 categories with FAQPage schema
   - `/resources/glossary` — Glossary moved here (old `/glossary` redirects)
   - `/resources/guides` — Links to all pillar guide pages
   - `/resources/news` — 5 seed regulatory/compliance news items
3. **Nav restructured** — "Glossary" replaced with "Resources" dropdown (Blog, Guides, FAQ, Glossary, News)
4. **Homepage visual fixes:**
   - Hero headline: full white text with lime accent (was translucent)
   - Secondary CTA: solid slate blue button (was invisible white-on-white)
   - Guide cards: lift + shadow + border color on hover
   - State cards: uniform size, centered, SVG state outline icons
   - Bottom CTA headline: explicit white text
   - Dark section backgrounds: brighter blotches (20% opacity) with floating CSS animation
5. **Sitemap updated** — 36 pages (up from 27)

### Current state
- **Build**: PASSING (36 pages)
- **Deploy**: Vercel — us-payroll-guide.vercel.app (auto-deploy on push)
- **Domain**: uspayrollguide.com — NOT YET REGISTERED
- **Git**: github.com/bretstarr2024/global-payroll-nexus (repo name still needs updating)
- **Content**: All static, in-page. Blog posts hardcoded in components. No MongoDB integration yet.
- **Version**: 1.1.0

### What's next (priority order)
1. Register uspayrollguide.com and add as custom domain in Vercel
2. Rename GitHub repo
3. Add Organization + BreadcrumbList JSON-LD
4. Add OG images for social sharing
5. Replace placeholder state SVGs with accurate outlines
6. Strengthen internal linking between pillar pages and resources
7. Add last-updated timestamps
8. Run /audit baseline

---

## Session I — 2026-03-13

### What this site is
**US Payroll Guide** (uspayrollguide.com) — a niche authority-building website for **Teamed** (teamed.global). Focused on US payroll, entity formation, and compliance for **UK & European companies expanding to the United States**. AEO-first (Answer Engine Optimization) — designed to get cited by AI systems and warm the market for Teamed's US payroll platform.

### Strategic context
Tom Daniel-Price (Teamed CEO) identified the US payroll opportunity: foreign companies expanding to the US face a compliance minefield (Form 5472, FICA, FUTA, state nexus, transfer pricing) that no single resource explains well. The site's key differentiator is **foreign-ownership compliance** — the gap no competitor covers.

Check HQ is Teamed's invisible payroll-as-a-service infrastructure — never mentioned publicly.

### What was done this session
1. **Strategic pivot** from "Global Payroll Nexus" (generic international payroll encyclopedia) to "US Payroll Guide" (focused US payroll for foreign companies)
2. **Product brief** created at `docs/product-brief.md` — the governing document for all site decisions
3. **New brand kit**: Slate blue (#2D5A7B), Inter font, coral (#FF8E6E) for compliance warnings, lime (#C1FA6B) for CTAs
4. **Complete site rebuild** — 36 files changed, 27 pages generated:
   - 4 pillar pages: Entity Formation, US Payroll, Compliance, Benefits
   - Form 5472 deep-dive
   - 10 state guides (DE, CA, NY, TX, FL, MA, WA, IL, CO, GA)
   - 21-term glossary for foreign companies
   - About, Contact, Privacy, Terms
   - ComplianceCallout component (coral warning blocks)
   - FAQPage schema on all FAQ sections
5. **Old routes deleted**: employer-of-record, global-payroll, eor-vs-entity, contractor-compliance, payroll-compliance, countries, resources
6. **CLAUDE.md updated** for new site structure
7. **Session management infrastructure** installed: /begin-session, /end-session, /audit, /stuck skills + 6 review commands
8. **Build passes** cleanly (27 pages, 0 errors)
9. **Pushed to GitHub** (main branch, commit 87c159c)

### Invariants (never violate)
- Site NOT branded as Teamed — independent resource
- CTAs link to teamed.global/contact-teamed
- Content voice: Chloé persona (reassuringly direct, advisory)
- AEO-first pattern on all content pages
- Check HQ never mentioned publicly
- Framer Motion retained for animations
- Brand: slate blue #2D5A7B, lime #C1FA6B, coral #FF8E6E, Inter font
