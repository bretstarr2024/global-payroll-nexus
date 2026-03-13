Review frontend — accessibility, responsive design, SEO, hydration safety.

## Context
Read these files first:
- `CLAUDE.md` — brand system, visual conventions
- `app/layout.tsx` — root layout, fonts, global metadata
- `components/Header.tsx` — navigation
- `components/Footer.tsx` — footer
- `components/AnimatedSection.tsx` — animation wrapper
- `components/StickyTOC.tsx` — table of contents
- `components/FaqAccordion.tsx` — FAQ component
- `tailwind.config.cjs` — custom theme values

## What to Check

1. **Accessibility (WCAG 2.1 AA)** — Usable by everyone:
   - All images have meaningful `alt` text
   - Color contrast ratios meet AA (especially purple #966EFF on dark #121213)
   - Keyboard navigation works (focus styles, tab order)
   - ARIA labels on interactive elements
   - Skip-to-content link present
   - Heading hierarchy is logical (h1 → h2 → h3, no skips)
   - FAQ accordion is keyboard-accessible

2. **Responsive design** — Works across breakpoints:
   - Mobile-first approach in Tailwind classes
   - No horizontal overflow on mobile
   - Navigation collapses properly on small screens
   - Text is readable without zooming on mobile
   - Touch targets are minimum 44x44px
   - Sticky TOC behavior on mobile (hidden or adapted)

3. **SEO & AEO** — Optimized for search and AI engines:
   - Unique `<title>` and `meta description` on every page
   - OpenGraph and Twitter card metadata
   - Canonical URLs set
   - Structured data (JSON-LD) present: Organization, FAQPage, BreadcrumbList
   - Answer-first content pattern (border-left block in first 2-4 sentences)
   - `<time>` elements with "Last updated" timestamps
   - Internal linking between pillar pages

4. **Hydration safety** — No mismatches:
   - No `Date.now()` or `Math.random()` in render
   - No `window`/`document` access in server components
   - Framer Motion `AnimatePresence` properly handles SSR
   - Dynamic content wrapped in `Suspense` where needed

5. **Brand consistency** — Matches Global Payroll Nexus design system:
   - Font: Montserrat loaded and applied
   - Colors match spec: purple #966EFF, coral #FF8E6E, lime #C1FA6B, dark #121213
   - Not branded as "Teamed" anywhere visible — it's "Global Payroll Nexus"
   - CTAs styled with lime accent, link to teamed.global

## Anti-Patterns to Flag
- Missing `alt` on images
- Hardcoded pixel widths that break mobile
- `suppressHydrationWarning` used to mask real mismatches
- Missing metadata on any public page
- FAQ content without FAQPage schema markup
- "Teamed" branding appearing as if it's the site owner

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
