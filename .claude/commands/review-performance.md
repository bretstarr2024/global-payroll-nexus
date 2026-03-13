Review performance — bundle size, rendering, image optimization, Lighthouse metrics.

## Context
Read these files first:
- `package.json` — dependencies (check for heavy packages)
- `next.config.mjs` — image optimization, compression settings
- `app/layout.tsx` — font loading strategy
- `tailwind.config.cjs` — custom config size
- `components/AnimatedSection.tsx` — animation library usage

## What to Check

1. **Bundle size** — Keep the client bundle lean:
   - Framer Motion: check if full library imported vs specific modules
   - No unnecessary client-side JavaScript on content pages
   - Dynamic imports (`next/dynamic`) used for heavy components
   - Tree-shaking friendly imports (named imports, not `import *`)

2. **Font loading** — Optimized web font strategy:
   - Montserrat loaded via `next/font/google` (not external stylesheet)
   - Font display: swap configured
   - Only necessary weights loaded (not all 18 Montserrat weights)
   - Font preloading in place

3. **Image optimization** — Proper Next.js image handling:
   - `next/image` used instead of `<img>` tags
   - Width/height or fill props set (prevents CLS)
   - Proper `sizes` attribute for responsive images
   - WebP/AVIF format serving enabled
   - Lazy loading on below-fold images

4. **Rendering strategy** — Right approach per page:
   - Content pages should be statically generated (SSG)
   - No unnecessary `force-dynamic` or `revalidate: 0`
   - Country pages use `generateStaticParams`
   - Proper use of ISR where content may change

5. **Core Web Vitals** — LCP, FID, CLS:
   - Largest Contentful Paint: hero content loads fast, no render-blocking resources
   - First Input Delay: minimal JS on initial load
   - Cumulative Layout Shift: all images/fonts have dimensions, no layout jumps
   - Framer Motion animations don't cause layout shifts (use `transform` not `width`/`height`)

6. **CSS efficiency** — Tailwind optimized:
   - No duplicate utility classes
   - Custom CSS kept minimal (Tailwind handles most)
   - No unused CSS imports
   - `@apply` used sparingly (anti-pattern when overused)

## Anti-Patterns to Flag
- `import { motion } from 'framer-motion'` (should use specific subpath)
- `<img>` tags instead of `next/image`
- All Montserrat weights loaded when only 2-3 are used
- `'use client'` on pages that are pure content (blocks SSG)
- External font stylesheets (Google Fonts CDN link)
- CSS-in-JS libraries alongside Tailwind

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
