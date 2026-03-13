Review security posture — secrets, injection, XSS, headers, environment variables.

## Context
Read these files first to understand the project:
- `CLAUDE.md` — project conventions
- `app/layout.tsx` — root layout, metadata, security headers
- `next.config.mjs` — Next.js configuration, headers, redirects
- `.gitignore` — what's excluded from version control
- `.env*` files — check for secrets exposure (if they exist)

## What to Check

1. **Secrets management** — No credentials in source:
   - .env files listed in .gitignore
   - No hardcoded API keys, MongoDB connection strings, or tokens in source files
   - No secrets in `next.config.mjs`
   - Environment variables not logged, rendered, or returned in responses
   - Check for any MongoDB Atlas connection strings in committed code

2. **Input handling** — All user-facing inputs validated:
   - Contact form inputs sanitized (if present)
   - Dynamic route params (`[slug]`) validated before use
   - No raw user input interpolated into HTML or database queries
   - Search/filter params sanitized

3. **Security headers** — Proper headers configured:
   - Content-Security-Policy (or meta CSP)
   - X-Frame-Options or CSP frame-ancestors
   - Strict-Transport-Security
   - X-Content-Type-Options
   - Check `next.config.mjs` headers configuration

4. **External links** — Safe outbound linking:
   - All external links have `rel="noopener noreferrer"`
   - CTA links to teamed.global use HTTPS
   - No open redirects via query params

5. **Client-side exposure** — Nothing sensitive on the client:
   - No server-only data leaking through `'use client'` components
   - No sensitive config in client bundles
   - MongoDB connection details never reach the browser

## Anti-Patterns to Flag
- MongoDB connection string hardcoded in source files
- `dangerouslySetInnerHTML` without sanitization
- Environment variable with fallback value that bypasses security
- API keys or tokens in committed files
- Missing `rel="noopener"` on external `target="_blank"` links

## Output Format
- **CRITICAL**: [issue] — [file:line] — [why it matters]
- **WARNING**: [issue] — [file:line] — [recommendation]
- **INFO**: [observation] — [file:line]

End with: Summary paragraph + Top 3 recommended actions.
