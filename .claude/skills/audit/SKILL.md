---
name: audit
description: Run 6 parallel code reviews across Global Payroll Nexus and consolidate findings into a prioritized report
user-invocable: true
---

# /audit

Runs 6 specialized code reviews **in parallel** using subagents, then consolidates all findings into a single prioritized report.

## Review Domains

| # | Domain | Command File | What it checks |
|---|--------|-------------|----------------|
| 1 | **Security** | `.claude/commands/review-security.md` | Secrets, injection, XSS, headers, env vars |
| 2 | **Architecture** | `.claude/commands/review-architecture.md` | App Router structure, server/client boundaries, module flow |
| 3 | **Frontend** | `.claude/commands/review-frontend.md` | Accessibility, responsive design, SEO/AEO, hydration |
| 4 | **Performance** | `.claude/commands/review-performance.md` | Bundle size, rendering, Lighthouse metrics, image optimization |
| 5 | **Data Integrity** | `.claude/commands/review-data-integrity.md` | Schema consistency, data flow, MongoDB field paths |
| 6 | **Content & AEO** | `.claude/commands/review-content-aeo.md` | AEO patterns, structured data, FAQ schema, content voice |

## Execution

1. Launch all 6 reviews as parallel Agent tasks
2. Each agent reads its review command file from `.claude/commands/` and executes the checklist against the codebase
3. Each agent returns findings classified as **CRITICAL**, **WARNING**, or **INFO** with `file:line` references
4. Deduplicate findings (same issue flagged by multiple reviews)
5. Cross-reference against `docs/HANDOFF.md` to filter already-resolved items

## Output Format

```markdown
# Audit Report — [DATE]

## Summary
- Total findings: [N]
- Critical: [N]
- Warning: [N]
- Info: [N]

## Critical Findings
[Grouped by review domain, with file:line references]

## Warnings
[Grouped by review domain]

## Informational
[Grouped by review domain]

## Top 5 Recommended Actions
[Prioritized across all 6 reviews]

## Per-Domain Summaries
[1-2 sentence summary + finding count for each domain]
```

## Key Rules
- **Read-only** — never fixes anything, only reports
- Deduplicates cross-domain findings
- If an agent fails or times out, notes it and continues with the others
