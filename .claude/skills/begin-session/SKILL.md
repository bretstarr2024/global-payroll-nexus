---
name: begin-session
description: Read-only session startup — loads last session's ledger and handoff, checks git and build health, presents a structured briefing for Global Payroll Nexus
user-invocable: true
---

# /begin-session

**Read-only. Never modify files.**

You are resuming work on **Global Payroll Nexus** (globalpayrollnexus.com) — a niche AEO authority site for Teamed (teamed.global), built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Content follows the "Chloe" voice persona. MongoDB is connected via GTM Kernel (cluster0.qcieh.mongodb.net).

## Steps

### 1. Load last session artifacts
- Find the most recent `docs/sessions/session-*-ledger.yaml`
- Read `docs/HANDOFF.md`
- If no session artifacts exist, note this is effectively Session I

### 2. Git health check
- Run `git status` (never `-uall`)
- Run `git log -5 --oneline`
- Check if branch is ahead/behind remote
- Report: branch name, clean/dirty, HEAD commit, remote sync status

### 3. Build verification
- Run `npm run build`
- Report PASS or FAIL — do **not** attempt fixes

### 4. Load memory
- Read Claude Code auto-memory at `~/.claude/projects/-Volumes-Queen-Amara-Teamed-Payroll-Niche-Site/memory/MEMORY.md`
- Note any persistent warnings or patterns

### 5. Check roadmap
- Read `docs/roadmap.md` for current priorities
- If no roadmap exists, note it needs creation

### 6. Present structured briefing

```markdown
# Session [NUMBER] Briefing — Global Payroll Nexus

## Last Session ([ID] — [DATE])
[2-3 sentence summary from ledger/handoff]

## Environment State
- Branch: [branch]
- Working tree: clean/dirty
- HEAD: [hash] [message]
- Remote sync: [status]

## Build Status
- next build: PASS/FAIL

## Carry-Forward Items
[From last session's next_actions]

## Blocked / Deferred / Known Risks
[From ledger fields]

## Guardrails & Invariants
- Site is NOT branded as Teamed — independent resource
- All CTAs link to teamed.global/contact-teamed
- Content voice: Chloe persona (reassuringly direct, advisory, radically transparent)
- AEO-first content pattern on every page (answer-first intro, TL;DR, sticky TOC, FAQ schema)
- Brand colors: purple #966EFF, coral #FF8E6E, lime #C1FA6B, dark #121213
- Font: Montserrat
- GTM Kernel ID: 97279a23-51b0-45c0-a45d-606f1d65ea17
- MongoDB data lives under `data` field (not top-level)

## Current Priorities (from roadmap)
[Top 2-3 items]

---
What would you like to work on this session?
```

## Key Rules
- **Strictly read-only** — never modify files or take corrective action
- Reports problems (build failures, dirty working tree) and lets the user decide
- Ends with a single question: "What would you like to work on?"
