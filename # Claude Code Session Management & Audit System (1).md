\# Claude Code Session Management & Audit System

A guide to the \`/begin-session\`, \`/end-session\`, and \`/audit\` skills — what they do, how they work, and how to adapt them for any project.

\---

\#\# Table of Contents

1\. \[Overview\](\#overview)  
2\. \[The Session Lifecycle\](\#the-session-lifecycle)  
3\. \[/begin-session — Starting a Session\](\#begin-session--starting-a-session)  
4\. \[/end-session — Closing a Session\](\#end-session--closing-a-session)  
5\. \[/audit — Comprehensive Code Review\](\#audit--comprehensive-code-review)  
6\. \[/stuck — Breaking Fix Loops\](\#stuck--breaking-fix-loops)  
7\. \[File Structure\](\#file-structure)  
8\. \[Adapting for a New Project\](\#adapting-for-a-new-project)  
9\. \[Writing Review Commands\](\#writing-review-commands)  
10\. \[Quick Start Checklist\](\#quick-start-checklist)

\---

\#\# Overview

This system turns Claude Code into a disciplined engineering partner with \*\*session continuity\*\* — the ability to pick up exactly where you left off, maintain a running record of decisions, and run structured code reviews across your entire codebase.

It consists of four slash-command skills:

| Skill | Purpose | Mode |  
|-------|---------|------|  
| \`/begin-session\` | Load context from last session, check health, present briefing | Read-only |  
| \`/end-session\` | Commit, deploy, generate ledger \+ handoff, update roadmap | Write-heavy |  
| \`/audit\` | Run 8 parallel code reviews, consolidate findings | Read-only |  
| \`/stuck\` | Break out of fix-deploy-still-broken loops | Read-only until Phase 5 |

The session skills create a \*\*paper trail\*\* — YAML ledgers, markdown handoffs, and roadmap updates — that let you (or another developer, or a fresh Claude Code context) resume work with full history.

\---

\#\# The Session Lifecycle

\`\`\`  
┌─────────────────────────────────────────────────────────┐  
│                    SESSION LIFECYCLE                      │  
│                                                          │  
│  /begin-session                                          │  
│    ├── Read last ledger \+ handoff                        │  
│    ├── Git health check                                  │  
│    ├── Build verification                                │  
│    ├── Load memory \+ roadmap                             │  
│    └── Present structured briefing                       │  
│              │                                           │  
│              ▼                                           │  
│     \[ Do the actual work \]                               │  
│              │                                           │  
│         (optionally)                                     │  
│     /audit  ──── Run 8 parallel reviews                  │  
│     /stuck  ──── Debug persistent issues                 │  
│              │                                           │  
│              ▼                                           │  
│  /end-session                                            │  
│    ├── Canonicalize state (roadmap, docs, sync chains)   │  
│    ├── Verify builds                                     │  
│    ├── Check data structure consistency                  │  
│    ├── Version bump \+ commit \+ push                      │  
│    ├── Deploy (trigger hook)                             │  
│    ├── Generate YAML session ledger                      │  
│    ├── Write human-readable handoff                      │  
│    └── Final integrity checklist                         │  
└─────────────────────────────────────────────────────────┘  
\`\`\`

\---

\#\# /begin-session — Starting a Session

\#\#\# What it does

Gives you a structured briefing so you never start a session cold. It reads the last session's artifacts, checks that everything is healthy, and presents a single scannable summary.

\#\#\# Steps (all read-only)

1\. \*\*Locate latest session artifacts\*\* — finds the most recent \`docs/sessions/session-\*-ledger.yaml\` and reads \`docs/HANDOFF.md\`  
2\. \*\*Git health check\*\* — branch, working tree status, HEAD commit, remote sync  
3\. \*\*Build verification\*\* — runs the project's build command, reports pass/fail without attempting fixes  
4\. \*\*Load memory\*\* — reads Claude Code's auto-memory file for persistent patterns and warnings  
5\. \*\*Check roadmap\*\* — reads \`docs/roadmap.md\` for current priorities  
6\. \*\*Check donor/reference codebases\*\* — notes relevant files from related projects (if applicable)  
7\. \*\*Present structured briefing\*\* — outputs everything in a standard format

\#\#\# Output format

\`\`\`markdown  
\# Session \[NUMBER\] Briefing

\#\# Last Session (\[ID\] — \[DATE\])  
\[2-3 sentence summary\]

\#\# Environment State  
\- Branch: main  
\- Working tree: clean/dirty  
\- HEAD: \[hash\] \[message\]  
\- Remote sync: up to date

\#\# Build Status  
\- next build: PASS/FAIL  
\- index-content: PASS/SKIP

\#\# Carry-Forward Items  
\[From last session's next\_actions\]

\#\# Blocked Items / Deferred Items / Known Risks / Open Questions  
\[From ledger fields\]

\#\# Guardrails & Invariants  
\[Project-specific rules that must never be violated\]

\#\# Current Priorities (from roadmap)  
\[Top 2-3 items\]

\---  
What would you like to work on this session?  
\`\`\`

\#\#\# Key rules

\- \*\*Strictly read-only\*\* — never modifies files or takes corrective action  
\- Reports problems (build failures, dirty working tree) and lets the user decide  
\- Ends with a single question: "What would you like to work on?"

\---

\#\# /end-session — Closing a Session

\#\#\# What it does

Procedural closeout that ensures no knowledge is lost between sessions. It commits, deploys, and generates the artifacts that \`/begin-session\` will read next time.

\#\#\# Steps (executed in order, never skipped)

\#\#\#\# Step 1: Canonicalize state  
\- Update \`docs/roadmap.md\` with what was done and what's next  
\- Resolve contradictions between docs, code, and configs  
\- Mark deferred items with rationale  
\- Verify sync chains (e.g., TypeScript types ↔ database schema ↔ API routes ↔ rendering)

\#\#\#\# Step 2: Verify builds  
\- Run the full build command  
\- \*\*This is a gate\*\* — if builds fail, attempt to fix or ask the user

\#\#\#\# Step 3: Verify data structure consistency  
\- Check if any database schema changes were made this session  
\- If yes, run a structural audit against the database to detect field divergence  
\- If divergence is found and was introduced this session, \*\*backfill before committing\*\*  
\- Record the result in the ledger

\#\#\#\# Step 4: Version and commit  
\- Determine version bump (SemVer: PATCH / MINOR / MAJOR)  
\- Use atomic, imperative commit messages (\`feat:\`, \`fix:\`, \`docs:\`, etc.)  
\- Push to remote

\#\#\#\# Step 5: Deploy  
\- Trigger the deploy hook (since auto-deploy is disabled)

\#\#\#\# Step 6: Generate session ledger (YAML)  
Saved to \`docs/sessions/session-{number}-ledger.yaml\` with these fields:

\`\`\`yaml  
session\_id: "LXV"  
date: "2026-02-28"  
branch: main  
version: "0.41.0"  *\# MINOR: New feature description*

deployment:  
 platform: vercel  
 job\_id: "abc123"  
 status: triggered

build\_verification:  
 next\_build: PASS  
 index\_content: SKIP

data\_structure\_consistency:  
 status: "not modified"

commits:  
 \- hash: "a1b2c3d"  
   message: "feat: Add new widget"

artifacts\_updated:  
 \- "app/widget/page.tsx"

decisions\_made:  
 \- decision: "Used approach X over Y"  
   rationale: "Better performance characteristics"  
   reversible: true

known\_risks:  
 \- risk: "Widget doesn't handle edge case Z"  
   mitigation: "Add validation next session"  
   severity: low

explicitly\_deferred:  
 \- "Accessibility audit — waiting for content to stabilize"

next\_actions:  
 \- "Add tests for widget component"

invariants:  
 \- "Database: tsc collection in MongoDB Atlas (never aeo)"  
 \- "Deploy hook required after every git push"  
\`\`\`

\#\#\#\# Step 7: Write human-readable handoff  
Updates \`docs/HANDOFF.md\` (cumulative, newest session at top). Must be \*\*self-contained\*\* — copy-pasteable into a fresh Claude Code session with enough context to resume.

\#\#\#\# Step 8: Continuity guardrails  
Records invariants, decisions that become expensive to reverse, and things to validate early next session.

\#\#\#\# Step 9: Final integrity checklist  
Verifies: all knowledge persisted, working tree clean, pushed, deployed, ledger written, handoff updated, roadmap updated.

\---

\#\# /audit — Comprehensive Code Review

\#\#\# What it does

Runs 8 specialized code reviews \*\*in parallel\*\* using Claude Code's Task tool (subagents), then consolidates all findings into a single prioritized report.

\#\#\# The 8 review domains

| \# | Domain | What it checks |  
|---|--------|---------------|  
| 1 | \*\*Security\*\* | Auth, secrets, injection vectors, XSS, CORS, privacy |  
| 2 | \*\*Architecture\*\* | App Router structure, server/client boundaries, module flow |  
| 3 | \*\*API Contracts\*\* | Request validation, response shapes, error handling, auth |  
| 4 | \*\*Frontend\*\* | Hydration safety, accessibility, responsive design, SEO |  
| 5 | \*\*Performance\*\* | Bundle size, query patterns, rendering, Lighthouse metrics |  
| 6 | \*\*Pipeline\*\* | Idempotency, error recovery, cost controls, content quality |  
| 7 | \*\*MongoDB Queries\*\* | Index usage, unbounded fetches, connection handling |  
| 8 | \*\*Data Integrity\*\* | Schema consistency, race conditions, data flow |

\#\#\# How it works

1\. All 8 reviews launch as parallel Task agents — each reads its review command file from \`.claude/commands/\` and executes the checklist  
2\. Each agent returns findings classified as \*\*CRITICAL\*\*, \*\*WARNING\*\*, or \*\*INFO\*\* with \`file:line\` references  
3\. Results are deduplicated (same issue flagged by multiple reviews) and cross-referenced against \`docs/HANDOFF.md\` to filter resolved items  
4\. A consolidated report is presented

\#\#\# Output format

\`\`\`markdown  
\# Audit Report — \[DATE\]

\#\# Summary  
\- Total findings: 47  
\- Critical: 3  
\- Warning: 18  
\- Info: 26

\#\# Critical Findings  
\[Grouped by review domain, with file:line references\]

\#\# Warnings  
\[Grouped by review domain\]

\#\# Informational  
\[Grouped by review domain\]

\#\# Top 5 Recommended Actions  
\[Prioritized across all 8 reviews\]

\#\# Per-Domain Summaries  
\[1-2 sentence summary \+ finding count for each domain\]  
\`\`\`

\#\#\# Key rules

\- \*\*Read-only\*\* — never fixes anything, only reports  
\- Deduplicates cross-domain findings  
\- If an agent fails or times out, notes it and continues with the others

\---

\#\# /stuck — Breaking Fix Loops

\#\#\# What it does

When the same bug survives multiple fix attempts, \`/stuck\` forces a methodical investigation before any more code changes. It's designed to break the "try something → deploy → still broken" cycle.

\#\#\# The 6 phases

| Phase | Name | Mode | Purpose |  
|-------|------|------|---------|  
| 1 | Define the Loop | Read-only | Articulate what you tried, what happened, and why your mental model is wrong |  
| 2 | Ground Truth Audit | Read-only | Re-read actual files, trace render/data chains, query the real database |  
| 3 | Widen the Aperture | Read-only | Systematically check 12+ things you haven't considered |  
| 4 | Build Evidence Chain | Read-only | Construct an unbroken chain from root cause to visible symptom |  
| 5 | Propose with Proof | Write | Present exact changes with evidence before editing |  
| 6 | Verify | Write | Build, test, confirm root cause matches the fix |

\*\*No edits are allowed in Phases 1–4.\*\* The whole point is to understand before acting.

\---

\#\# File Structure

Here's where everything lives:

\`\`\`  
.claude/  
├── skills/  
│   ├── begin-session/  
│   │   └── SKILL.md          \# /begin-session definition  
│   ├── end-session/  
│   │   └── SKILL.md          \# /end-session definition  
│   ├── audit/  
│   │   └── SKILL.md          \# /audit definition  
│   └── stuck/  
│       └── SKILL.md          \# /stuck definition  
├── commands/  
│   ├── review-security.md     \# Security review checklist  
│   ├── review-architecture.md \# Architecture review checklist  
│   ├── review-api-contracts.md\# API contracts review checklist  
│   ├── review-frontend.md     \# Frontend review checklist  
│   ├── review-performance.md  \# Performance review checklist  
│   ├── review-pipeline.md     \# Pipeline review checklist  
│   ├── review-queries.md      \# MongoDB queries review checklist  
│   └── review-data-integrity.md \# Data integrity review checklist  
docs/  
├── HANDOFF.md                 \# Cumulative session handoff (newest at top)  
├── roadmap.md                 \# Session-by-session roadmap  
├── sessions/  
│   ├── session-i-ledger.yaml  \# Session I ledger  
│   ├── session-ii-ledger.yaml \# Session II ledger  
│   └── ...                    \# One YAML ledger per session  
\`\`\`

\---

\#\# Adapting for a New Project

\#\#\# Step 1: Create the skill files

Create \`.claude/skills/\` with subdirectories for each skill. Each needs a \`SKILL.md\` with YAML frontmatter:

\`\`\`yaml  
\---  
name: begin-session  
description: Read-only session startup — loads last session's ledger and handoff, checks git and build health, presents a structured briefing  
user-invocable: true  
\---  
\`\`\`

\#\#\# Step 2: Adapt /begin-session

Things to change for your project:

| Section | What to customize |  
|---------|-------------------|  
| \*\*Project description\*\* | Replace the stack/framework/hosting description |  
| \*\*Build command\*\* | Replace \`npm run build\` with your project's build command |  
| \*\*Session artifact paths\*\* | Keep \`docs/sessions/\` and \`docs/HANDOFF.md\` (or change to your preference) |  
| \*\*Memory file path\*\* | Claude Code auto-memory follows a convention based on your project directory |  
| \*\*Donor/reference codebases\*\* | Remove if not applicable, or point to your own reference repos |  
| \*\*Guardrails\*\* | Replace with your project's invariants (database names, deploy process, etc.) |  
| \*\*Roadmap path\*\* | Keep \`docs/roadmap.md\` or change to match your docs structure |

\*\*Minimal version\*\* — if you strip it to essentials:

\`\`\`markdown  
\---  
name: begin-session  
description: Session startup briefing  
user-invocable: true  
\---

\# /begin-session

Read-only. Never modify files.

\#\# Steps  
1\. Read latest \`docs/sessions/session-\*-ledger.yaml\` and \`docs/HANDOFF.md\`  
2\. Run \`git status\`, \`git log \-1\`, check remote sync  
3\. Run your build command — report pass/fail, don't fix  
4\. Read \`docs/roadmap.md\` for priorities  
5\. Present briefing: last session summary, environment state, build status,  
  carry-forward items, risks, priorities  
6\. Ask: "What would you like to work on this session?"  
\`\`\`

\#\#\# Step 3: Adapt /end-session

Things to change:

| Section | What to customize |  
|---------|-------------------|  
| \*\*Sync chains\*\* | Replace with YOUR project's data flow chains (types ↔ DB ↔ API ↔ UI) |  
| \*\*Build command\*\* | Your project's build/test command |  
| \*\*Data consistency check\*\* | Adapt to your database (or remove if no database) |  
| \*\*Deploy step\*\* | Replace with your deploy process (Vercel hook, \`fly deploy\`, \`aws deploy\`, etc.) |  
| \*\*Version tracking\*\* | Keep SemVer in ledger, or adapt to your versioning scheme |  
| \*\*Invariants\*\* | Your project's non-negotiable rules |

\*\*Key principle to preserve:\*\* The session ledger YAML format is powerful because it's machine-readable. Future \`/begin-session\` calls parse it. Keep the structure even if you change the fields.

\*\*For projects without a database:\*\* Remove Step 3 entirely (data structure consistency). Set \`data\_structure\_consistency: "N/A"\` in the ledger template.

\*\*For projects without deploy hooks:\*\* Replace Step 5 with your deploy process, or mark it as manual: "Remind user to deploy via \[process\]."

\#\#\# Step 4: Adapt /audit

This is where the most customization happens. The audit skill itself is generic — it just launches N review commands in parallel and consolidates results. The \*\*review commands\*\* are where your project-specific knowledge lives.

\*\*Pick your review domains.\*\* Not every project needs all 8\. Here's a guide:

| Domain | Include if your project has... |  
|--------|-------------------------------|  
| Security | Any public API endpoints, auth, user input |  
| Architecture | A non-trivial codebase (\>20 files) |  
| API Contracts | REST/GraphQL API routes |  
| Frontend | A web frontend (React, Vue, Svelte, etc.) |  
| Performance | Performance-sensitive features, heavy deps |  
| Pipeline | Background jobs, cron tasks, data pipelines |  
| Database Queries | A database (any kind) |  
| Data Integrity | Multiple data stores or schema migrations |

\*\*Minimum viable audit\*\* for most web projects: Security \+ Architecture \+ Frontend \+ Performance (4 reviews).

\#\#\# Step 5: Write your review commands

Each review command lives in \`.claude/commands/review-{domain}.md\` and follows this structure:

\`\`\`markdown  
\[One-line description of what this review checks\]

\#\# Context  
Read these files first to understand the project:  
\- \`path/to/key/file.ts\` — what it is  
\- \`path/to/another/file.ts\` — what it is

\#\# What to Check

1\. \*\*Category name\*\* — Description of what to look for:  
  \- Specific check item  
  \- Another check item  
  \- What "good" looks like vs what "bad" looks like

2\. \*\*Another category\*\* — ...

\#\# Anti-Patterns to Flag  
\- \[Pattern\] — why it's bad  
\- \[Pattern\] — why it's bad

\#\# Output Format  
Report findings as:  
\- \*\*CRITICAL\*\*: \[issue\] — \[file:line\] — \[why it matters\]  
\- \*\*WARNING\*\*: \[issue\] — \[file:line\] — \[recommendation\]  
\- \*\*INFO\*\*: \[observation\] — \[file:line\]

End with: Summary paragraph \+ Top 3 recommended actions.  
\`\`\`

\*\*Tips for effective review commands:\*\*

1\. \*\*Be specific about files to read.\*\* Don't say "check the API routes" — list the exact file paths. The review agent needs to know where to look.  
2\. \*\*Include anti-patterns.\*\* These are the fastest way to catch real bugs. Draw from your project's actual history of mistakes.  
3\. \*\*Include "what good looks like."\*\* The agent needs to know your conventions to judge whether code follows them.  
4\. \*\*Reference your project's real data.\*\* If you have specific collection names, index names, env var names — include them. The more concrete, the better.  
5\. \*\*Keep the CRITICAL/WARNING/INFO severity system.\*\* It makes the consolidated audit report scannable.

\#\#\# Step 6: Create the docs structure

\`\`\`bash  
mkdir \-p docs/sessions  
touch docs/HANDOFF.md  
touch docs/roadmap.md  
\`\`\`

Initialize \`docs/HANDOFF.md\`:

\`\`\`markdown  
\# Session Handoff: \[Project Name\]

\*\*Last Updated:\*\* \[Date\] (Session I)

\---

No sessions recorded yet.  
\`\`\`

\#\#\# Step 7: Update the audit skill to reference your commands

In \`.claude/skills/audit/SKILL.md\`, update the table of review commands to match the files you created in \`.claude/commands/\`.

\---

\#\# Writing Review Commands

\#\#\# Example: Security review for a generic Next.js app

\`\`\`markdown  
Review security posture — auth, secrets, injection, API safety.

\#\# Context  
\- \`CLAUDE.md\` — project conventions  
\- \`app/api/\` — all API route handlers  
\- \`middleware.ts\` — auth middleware  
\- \`lib/db.ts\` — database connection

\#\# What to Check

1\. \*\*Authentication\*\* — Every protected route must verify auth:  
  \- Check middleware.ts route matcher covers all protected paths  
  \- API routes that modify data must verify session/token  
  \- Public endpoints (webhooks, health checks) are explicitly listed

2\. \*\*Input validation\*\* — All public endpoints must validate input:  
  \- request.json() wrapped in try/catch  
  \- String fields have length limits  
  \- Email fields validated with regex or library  
  \- No raw user input in database queries

3\. \*\*Secrets\*\* — No credentials in source:  
  \- .env files in .gitignore  
  \- No hardcoded API keys or connection strings  
  \- Environment variables not logged or returned in responses

4\. \*\*Headers\*\* — Security headers configured:  
  \- X-Frame-Options or CSP frame-ancestors  
  \- Content-Security-Policy  
  \- Strict-Transport-Security

\#\# Anti-Patterns to Flag  
\- \`...body\` spread into database without field allowlisting  
\- User input interpolated into HTML without escaping  
\- Missing auth check on data-modifying endpoint  
\- Environment variable with fallback that bypasses security

\#\# Output Format  
\- \*\*CRITICAL\*\*: \[issue\] — \[file:line\] — \[why it matters\]  
\- \*\*WARNING\*\*: \[issue\] — \[file:line\] — \[recommendation\]  
\- \*\*INFO\*\*: \[observation\] — \[file:line\]

End with: Summary paragraph \+ Top 3 recommended actions.  
\`\`\`

\#\#\# Example: Performance review for a Python/Django app

\`\`\`markdown  
Review performance — database queries, caching, serialization, response times.

\#\# Context  
\- \`settings.py\` — Django config, database, cache backends  
\- \`models.py\` files — ORM models and managers  
\- \`views.py\` files — request handlers  
\- \`serializers.py\` files — DRF serializers

\#\# What to Check

1\. \*\*N+1 queries\*\* — Check views for:  
  \- QuerySets accessed in template loops without select\_related/prefetch\_related  
  \- Serializer nested relationships without optimized querysets  
  \- Use django-debug-toolbar or .query count checks

2\. \*\*Missing indexes\*\* — Check models for:  
  \- Fields used in filter()/exclude() without db\_index=True  
  \- Fields used in order\_by() without indexes  
  \- Compound filters that need composite indexes

3\. \*\*Caching\*\* — Check for:  
  \- Expensive queries that could use cache framework  
  \- Cache invalidation on write paths  
  \- Template fragment caching on repeated expensive renders

4\. \*\*Serialization\*\* — Check for:  
  \- Serializers fetching all fields when only a few are needed  
  \- Large nested serializers on list endpoints  
  \- Missing pagination on list views

\#\# Anti-Patterns to Flag  
\- .all() without pagination on list endpoints  
\- select\_related/prefetch\_related missing on serializer querysets  
\- Cache.set() without corresponding invalidation  
\- Raw SQL without parameterized queries

\#\# Output Format  
\- \*\*CRITICAL\*\*: \[issue\] — \[file:line\] — \[why it matters\]  
\- \*\*WARNING\*\*: \[issue\] — \[file:line\] — \[recommendation\]  
\- \*\*INFO\*\*: \[observation\] — \[file:line\]

End with: Summary paragraph \+ Top 3 recommended actions.  
\`\`\`

\---

\#\# Quick Start Checklist

To add this system to a new project:

\- \[ \] Create \`.claude/skills/begin-session/SKILL.md\` — adapt from template above  
\- \[ \] Create \`.claude/skills/end-session/SKILL.md\` — adapt from template above  
\- \[ \] Create \`.claude/skills/audit/SKILL.md\` — update the review command table  
\- \[ \] Create \`.claude/skills/stuck/SKILL.md\` — mostly project-agnostic, just update database/deploy references  
\- \[ \] Create \`.claude/commands/review-\*.md\` — one file per review domain (minimum 4 recommended)  
\- \[ \] Create \`docs/sessions/\` directory  
\- \[ \] Create \`docs/HANDOFF.md\` with initial content  
\- \[ \] Create \`docs/roadmap.md\` with project phases  
\- \[ \] Update \`CLAUDE.md\` with project-specific invariants (database names, deploy process, forbidden patterns)  
\- \[ \] Run \`/begin-session\` to verify everything loads correctly

\*\*Time to set up:\*\* 30-60 minutes for the initial adaptation. The review commands take the most time because they need project-specific knowledge.

\*\*Payoff:\*\* Every session after the first starts with full context, ends with a clean paper trail, and can be audited on demand. No more "what did we do last time?" or "is this code any good?"

