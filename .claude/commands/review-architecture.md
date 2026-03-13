Review architecture — App Router structure, server/client boundaries, module organization.

## Context
Read these files first:
- `CLAUDE.md` — project conventions and route structure
- `app/layout.tsx` — root layout
- `app/page.tsx` — home page
- `components/` — shared components (Header, Footer, AnimatedSection, StickyTOC, FaqAccordion)
- `next.config.mjs` — Next.js configuration
- `tailwind.config.cjs` — Tailwind configuration
- `package.json` — dependencies

## What to Check

1. **App Router conventions** — Proper Next.js 14 patterns:
   - Pages use default exports
   - Layouts properly nest and share state
   - Metadata exports present on all public pages
   - `generateStaticParams` used for dynamic routes (`[slug]`)
   - Proper use of `loading.tsx`, `error.tsx`, `not-found.tsx` where needed
   - Sitemap and robots properly configured

2. **Server/Client boundaries** — Correct component model:
   - `'use client'` only where needed (interactivity, hooks, browser APIs)
   - Server components used by default for content pages
   - No unnecessary `'use client'` on data-heavy pages
   - Framer Motion components properly wrapped as client components
   - Data fetching happens in server components, not client

3. **Component organization** — Clean module structure:
   - Shared components in `components/` directory
   - Page-specific components co-located with their page
   - No circular imports
   - Props interfaces defined for reusable components
   - Consistent naming conventions

4. **Route structure** — Matches CLAUDE.md specification:
   - All specified routes exist: `/`, `/employer-of-record`, `/global-payroll`, `/eor-vs-entity`, `/contractor-compliance`, `/payroll-compliance`, `/countries`, `/countries/[slug]`, `/resources`, `/resources/blog`, `/resources/glossary`, `/about`, `/contact`, `/privacy`, `/terms`
   - No orphan routes (routes not linked from navigation)
   - Country slugs match the static data

5. **Dependencies** — Lean and appropriate:
   - No unused dependencies in package.json
   - No duplicate functionality (e.g., two animation libraries)
   - Versions are pinned or locked

## Anti-Patterns to Flag
- `'use client'` on pages that don't need interactivity
- Data fetching inside client components
- Missing metadata exports on public pages
- Components >300 lines without extraction
- Import paths using `../../../` (should use `@/` alias)

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
