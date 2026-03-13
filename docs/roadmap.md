# US Payroll Guide — Roadmap

**Last Updated:** 2026-03-13 (Session III)

---

## Phase 1: Foundation ✅ COMPLETE
- [x] Next.js 14 scaffold with App Router
- [x] Strategic pivot from Global Payroll Nexus → US Payroll Guide
- [x] New brand kit (slate blue, Inter font, coral warnings, lime CTAs)
- [x] Tailwind CSS + brand system configured
- [x] Shared components: Header, Footer, AnimatedSection, StickyTOC, FaqAccordion, ComplianceCallout
- [x] Session management infrastructure installed
- [x] Product brief created (docs/product-brief.md)
- [x] All pillar pages written: Entity Formation, US Payroll, Compliance, Benefits
- [x] Form 5472 deep-dive page
- [x] 10 state guides (DE, CA, NY, TX, FL, MA, WA, IL, CO, GA)
- [x] Glossary (21 terms)
- [x] About, Contact, Privacy, Terms pages
- [x] Sitemap + robots.txt (uspayrollguide.com)
- [x] FAQPage schema on all FAQ sections
- [x] Old routes deleted (employer-of-record, global-payroll, countries, resources, etc.)
- [x] Build passes cleanly
- [x] CLAUDE.md updated for new site
- [x] Deployed to Vercel (us-payroll-guide.vercel.app)
- [x] GitHub repo connected for auto-deploy on push

## Phase 2: Content & AEO Refinement ✅ COMPLETE
- [x] Full Resources section: hub, blog, FAQ, glossary, guides, news
- [x] Blog with 3 seed articles (Form 5472, LLC vs C-Corp, First US Hire Checklist)
- [x] FAQ hub with 24 questions across 5 categories + FAQPage schema
- [x] Glossary moved under /resources/glossary (redirect from /glossary)
- [x] News & updates feed (5 seed items)
- [x] Guides index page linking to all pillar content
- [x] Nav restructured: "Glossary" → "Resources" dropdown
- [x] Sitemap updated with all new routes (36 pages total)
- [x] Homepage visual fixes: hero contrast, CTA button, card hover, state icons, background animation
- [ ] Add Organization + BreadcrumbList JSON-LD schema
- [ ] Add "Last updated" timestamps to all content pages
- [ ] Strengthen internal linking between pillar pages
- [ ] Review and refine Chloé voice consistency across all content
- [ ] Add OG images for social sharing

## Phase 3: State Guide Expansion
- [ ] Add remaining high-demand states (New Jersey, Pennsylvania, North Carolina, etc.)
- [ ] Add state comparison functionality
- [ ] State-specific compliance checklists
- [x] State SVG icons — accurate ProPublica outlines via StateIcon component (Session III)

## Phase 4: Dynamic Content
- [ ] Connect MongoDB for blog/resource content (replace static blog post data)
- [ ] Glossary search/filter functionality
- [ ] Blog pagination and category filtering
- [ ] News feed from external regulatory sources

## Phase 5: Optimization & Polish
- [ ] Performance audit (Core Web Vitals)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Mobile experience polish
- [ ] SEO technical audit (canonical URLs, meta, OG)
- [ ] Analytics integration (Google Analytics)

## Phase 6: Growth
- [ ] Newsletter/lead capture
- [ ] Comparison tools (EOR providers, state-by-state costs)
- [ ] Calculator tools (FICA, total employer cost)
- [ ] Chat widget consideration

---

## Deferred / Parking Lot
- Video generation pipeline — not needed yet
- Chat widget — future consideration
- Dashboard/analytics — future consideration
- Check HQ product integration — invisible until product launches
- Domain registration (uspayrollguide.com) — user action required
- GitHub repo rename from global-payroll-nexus — user action required
