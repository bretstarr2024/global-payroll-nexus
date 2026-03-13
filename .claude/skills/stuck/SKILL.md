---
name: stuck
description: Break out of fix-deploy-still-broken loops with methodical 6-phase investigation
user-invocable: true
---

# /stuck

When the same bug survives multiple fix attempts, this forces a methodical investigation before any more code changes.

## The 6 Phases

| Phase | Name | Mode | Purpose |
|-------|------|------|---------|
| 1 | Define the Loop | Read-only | Articulate what you tried, what happened, and why your mental model is wrong |
| 2 | Ground Truth Audit | Read-only | Re-read actual files, trace render/data chains, check real state |
| 3 | Widen the Aperture | Read-only | Systematically check 12+ things you haven't considered |
| 4 | Build Evidence Chain | Read-only | Construct an unbroken chain from root cause to visible symptom |
| 5 | Propose with Proof | Write | Present exact changes with evidence before editing |
| 6 | Verify | Write | Build, test, confirm root cause matches the fix |

**No edits are allowed in Phases 1–4.** The whole point is to understand before acting.

---

## Phase 1: Define the Loop

Answer these explicitly:
1. What is the **exact symptom**? (screenshot, error message, wrong output)
2. What have you **already tried**? (list each attempt)
3. What did you **expect** each fix to do?
4. What **actually happened** after each fix?
5. What assumption must be **wrong** if none of the fixes worked?

## Phase 2: Ground Truth Audit

Re-read the actual source files involved. Do NOT rely on memory or earlier reads.
- Trace the **render chain**: layout.tsx → page.tsx → components → data
- Trace the **data chain**: MongoDB query → server component → client props → render
- Check **Tailwind config** for custom values being used in components
- Check **next.config.mjs** for any relevant configuration
- Check **package.json** for version mismatches

## Phase 3: Widen the Aperture

Check these systematically (mark each as checked):
- [ ] Is it a **caching issue**? (`.next/` stale, browser cache, ISR)
- [ ] Is it a **server vs client** boundary issue? (`'use client'` missing/extra)
- [ ] Is it a **hydration mismatch**? (server HTML ≠ client render)
- [ ] Is it a **Tailwind purge** issue? (dynamic class names being purged)
- [ ] Is it a **import path** issue? (wrong file, stale barrel export)
- [ ] Is it a **TypeScript type** hiding the real data shape?
- [ ] Is it an **environment variable** issue? (missing, wrong prefix)
- [ ] Is it a **middleware** issue? (route matching, redirects)
- [ ] Is it a **metadata/layout** inheritance issue?
- [ ] Is it a **Framer Motion** lifecycle issue? (animation vs mount timing)
- [ ] Is it a **MongoDB field path** issue? (`data.x` vs `x` at top level)
- [ ] Is it a **build vs dev** difference? (works in dev, breaks in build)

## Phase 4: Build Evidence Chain

Construct an unbroken chain:
```
Root Cause → [intermediate step] → [intermediate step] → Visible Symptom
```

Every link must be verified by reading actual code. No guessing.

## Phase 5: Propose with Proof

Present:
1. The root cause (with file:line evidence)
2. The exact changes needed (diff format)
3. Why this fix addresses the root cause (not just the symptom)
4. What could go wrong with this fix

Get user approval before editing.

## Phase 6: Verify

1. Make the changes
2. Run `npm run build`
3. Confirm the symptom is resolved
4. Check for regressions in related pages
