Review data integrity — schema consistency, data flow, MongoDB field paths, content data.

## Context
Read these files first:
- `CLAUDE.md` — GTM Kernel connection details, database info
- `app/countries/[slug]/page.tsx` — country data usage
- `app/countries/page.tsx` — country index data
- Any `lib/` or `data/` files that define data structures
- Any files importing from MongoDB or using database connections

## What to Check

1. **MongoDB field paths** — Correct data access:
   - GTM Kernel data lives under `data` field, NOT top-level
   - Example: `data.identity.brand.name` not `identity.brand.name`
   - Kernel ID `97279a23-51b0-45c0-a45d-606f1d65ea17` used correctly
   - Database name `gtm_kernel` on cluster0.qcieh.mongodb.net
   - Connection string uses proper authentication

2. **Country data consistency** — Static data is accurate:
   - Country slugs match between data source, routes, and sitemap
   - All country pages have consistent field structure
   - Currency, tax, employment law data is not contradictory
   - `generateStaticParams` returns all valid slugs

3. **Content data flow** — Data reaches templates correctly:
   - FAQ data structure matches FaqAccordion component props
   - Country data structure matches country page template expectations
   - No null/undefined access on optional fields
   - TypeScript types (if defined) match actual data shapes

4. **Sitemap & robots consistency** — Discoverable content:
   - `app/sitemap.ts` includes all public pages
   - `app/robots.ts` allows crawling of content pages
   - URLs in sitemap match actual routes
   - No draft/unpublished pages in sitemap

5. **Internal link integrity** — No broken links:
   - Navigation links match actual routes
   - Cross-references between pillar pages use correct paths
   - CTA links use correct Teamed URLs (https://www.teamed.global/contact-teamed)
   - Anchor links in sticky TOC match actual heading IDs

## Anti-Patterns to Flag
- Accessing MongoDB data at top level instead of under `data.*`
- Country slug mismatch between data and routes
- Hardcoded data that contradicts other hardcoded data
- Missing null checks on optional nested data
- Sitemap listing routes that return 404
- Internal links using absolute URLs instead of relative paths

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
