---
name: end-session
description: Session closeout — commits, generates YAML ledger + handoff, updates roadmap for Global Payroll Nexus
user-invocable: true
---

# /end-session

Procedural closeout that ensures no knowledge is lost between sessions. Execute all steps in order — never skip.

## Step 1: Canonicalize state
- Update `docs/roadmap.md` with what was done this session and what's next
- Resolve contradictions between docs, code, and configs
- Mark deferred items with rationale
- Verify sync chains:
  - TypeScript types ↔ Tailwind config ↔ component props
  - Country data ↔ country page routes ↔ sitemap.ts
  - FAQ content ↔ FAQPage schema markup
  - CTA links ↔ Teamed URLs
  - Layout metadata ↔ page-level metadata

## Step 2: Verify builds
- Run `npm run build`
- **This is a gate** — if the build fails, attempt to fix or ask the user
- Do not proceed to commit until build passes

## Step 3: Verify data structure consistency
- Check if any MongoDB schema or data model changes were made this session
- If yes, verify field paths match the `data.*` convention (GTM Kernel data lives under `data` field)
- Record result in ledger

## Step 4: Version and commit
- Determine version bump (SemVer: PATCH for fixes/content, MINOR for new pages/features, MAJOR for breaking changes)
- Stage relevant files (never `git add -A` — be specific)
- Use atomic, imperative commit messages (`feat:`, `fix:`, `docs:`, `content:`, `style:`, `refactor:`)
- Push to remote

## Step 5: Deploy
- If a deploy hook or process is configured, trigger it
- If not configured yet, note "Deploy: manual — no hook configured" in ledger

## Step 6: Generate session ledger (YAML)
Save to `docs/sessions/session-{number}-ledger.yaml`:

```yaml
session_id: "[ROMAN NUMERAL]"
date: "[YYYY-MM-DD]"
branch: main
version: "[X.Y.Z]"  # SemVer with reason

deployment:
  platform: "[platform or 'not configured']"
  status: "[triggered/manual/skipped]"

build_verification:
  next_build: PASS

data_structure_consistency:
  status: "[not modified / verified / divergence found]"

commits:
  - hash: "[short hash]"
    message: "[commit message]"

artifacts_updated:
  - "[file paths changed]"

decisions_made:
  - decision: "[what was decided]"
    rationale: "[why]"
    reversible: true/false

known_risks:
  - risk: "[description]"
    mitigation: "[plan]"
    severity: low/medium/high

explicitly_deferred:
  - "[item — reason]"

next_actions:
  - "[what to do next session]"

invariants:
  - "Site NOT branded as Teamed — independent resource"
  - "CTAs link to teamed.global/contact-teamed"
  - "Content voice: Chloe persona"
  - "AEO-first pattern on all content pages"
  - "MongoDB data under `data` field, not top-level"
```

## Step 7: Write human-readable handoff
Update `docs/HANDOFF.md` (cumulative, newest session at top). Must be **self-contained** — copy-pasteable into a fresh Claude Code session with enough context to resume.

## Step 8: Continuity guardrails
Record in the ledger:
- Invariants that must never be violated
- Decisions that become expensive to reverse
- Things to validate early next session

## Step 9: Final integrity checklist
Verify all of the following:
- [ ] All knowledge persisted (ledger + handoff)
- [ ] Working tree clean
- [ ] Pushed to remote
- [ ] Build passing
- [ ] Ledger written to `docs/sessions/`
- [ ] `docs/HANDOFF.md` updated
- [ ] `docs/roadmap.md` updated
