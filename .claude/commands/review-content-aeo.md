Review content & AEO patterns — structured data, FAQ schema, answer-first content, voice consistency.

## Context
Read these files first:
- `CLAUDE.md` — AEO-first content pattern, voice guidelines
- All page files in `app/` (each `page.tsx`)
- `components/FaqAccordion.tsx` — FAQ component
- `components/StickyTOC.tsx` — table of contents component

## What to Check

1. **AEO-first content pattern** — Every content page must follow:
   - Answer-first intro (2-4 sentences in a `border-left` styled block)
   - TL;DR bullet points where applicable
   - Sticky TOC for long content pages
   - FAQ section with accordion
   - "Last updated" timestamp visible on page
   - Strong internal linking to other pillar pages

2. **Structured data (JSON-LD)** — Machine-readable markup:
   - `FAQPage` schema on pages with FAQ sections
   - `Organization` schema (for Global Payroll Nexus, NOT Teamed)
   - `BreadcrumbList` schema for navigation hierarchy
   - `Article` or `WebPage` schema on content pages
   - JSON-LD is valid (properly escaped, correct @context)
   - Schema matches visible page content (no hidden/different content)

3. **Content voice — Chloe persona** — Consistent tone:
   - Reassuringly direct, advisory not salesy
   - Clear, not clever — plain English, no jargon
   - Outcome-led — frames around benefit: certainty, speed, safety, relief
   - Radically transparent about costs, processes, risks
   - Never: startup-y, hyperbolic, generic HR-tech, enterprise-stiff
   - No "we" referring to Teamed — site is independent resource

4. **CTA placement & messaging** — Helpful not spammy:
   - CTAs to Teamed feel natural, not forced
   - Link text is specific ("Talk to a global payroll expert") not generic ("Click here")
   - Not more than 2-3 CTAs per page
   - CTA URLs correct: https://www.teamed.global/contact-teamed
   - Product-specific CTAs link to relevant Teamed pages

5. **Meta content** — Every page has:
   - Unique, descriptive `<title>` (50-60 chars ideal)
   - Unique `meta description` (150-160 chars, includes primary keyword)
   - OpenGraph title, description, image
   - Appropriate keywords in headings and first paragraph

6. **Internal linking** — Content interconnection:
   - Pillar pages link to each other where contextually relevant
   - Country pages link back to relevant pillar content
   - Resource pages link to detailed guides
   - No orphan pages (pages with no inbound links)

## Anti-Patterns to Flag
- Content pages missing the answer-first intro block
- FAQ sections without FAQPage schema markup
- Salesy/hyperbolic language ("revolutionary", "game-changing", "best-in-class")
- Generic CTAs ("Learn more", "Click here")
- Missing structured data on content pages
- Inconsistent voice (switching between formal and casual)
- "We at Teamed" or similar — site should feel independent

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
