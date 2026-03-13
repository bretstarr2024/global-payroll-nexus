# Session Handoff: US Payroll Guide

**Last Updated:** 2026-03-13 (Session I)

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

### Current state
- **Build**: PASSING (27 pages)
- **Deploy**: NOT CONFIGURED — no platform chosen
- **Domain**: uspayrollguide.com — not yet registered
- **Git**: github.com/bretstarr2024/global-payroll-nexus (repo name needs updating)
- **Content**: All static, in-page. No MongoDB integration yet.
- **Version**: 1.0.0

### Key files
- `docs/product-brief.md` — Governing product brief
- `docs/roadmap.md` — Phase-based roadmap
- `CLAUDE.md` — Project instructions for Claude Code
- `tailwind.config.cjs` — Brand kit implementation
- `app/globals.css` — Component classes (.answer-block, .compliance-callout, etc.)

### Invariants (never violate)
- Site NOT branded as Teamed — independent resource
- CTAs link to teamed.global/contact-teamed
- Content voice: Chloé persona (reassuringly direct, advisory)
- AEO-first pattern on all content pages
- Check HQ never mentioned publicly
- Framer Motion retained for animations

### What's next (priority order)
1. Configure deployment (Vercel or Railway)
2. Register/configure uspayrollguide.com domain
3. Rename GitHub repo
4. Add Organization + BreadcrumbList JSON-LD
5. Add OG images for social sharing
6. Run /audit baseline
7. Strengthen internal linking between pillar pages
8. Review Chloé voice consistency across all content
