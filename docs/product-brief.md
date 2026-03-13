# US Payroll for Foreign Companies — Niche Authority Site Product Brief

**Author:** Bret Starr
**Date:** 2026-03-13
**Status:** Draft
**Internal Reference:** Teamed US Payroll Platform & Opportunity (Tom Daniel-Price, Feb 2026)

---

## Table of Contents

1. [Business Context](#1-business-context)
2. [Site Strategy](#2-site-strategy)
3. [Brand Kit](#3-brand-kit)
4. [Content Architecture](#4-content-architecture)
5. [Development Brief](#5-development-brief)
6. [Autonomous Website Strategy](#6-autonomous-website-strategy)
7. [Open Questions](#7-open-questions)

---

## 1. Business Context

### The Opportunity

Teamed (teamed.global) has identified a specific, underserved market: **UK and European companies expanding into the US** who need to set up entities, run compliant payroll, and navigate foreign-ownership obligations that most US payroll providers ignore entirely.

The US is the single most common expansion market for UK/European companies. Every one of them faces the same problem — and none of the existing providers wrap it all together.

### The Gap No One Owns

US payroll platforms (Gusto, Rippling, Warp, ADP) handle payroll processing and multi-state tax compliance. Global EOR/payroll providers (Deel, Remote, Papaya Global) do the same plus partial entity management. **None of them proactively track:**

- **Form 5472** — required for foreign-owned US entities, $25k penalty per missed filing
- **Transfer pricing alerts** — intercompany transactions between parent and US subsidiary
- **Intercompany transaction logging** — documentation required for IRS compliance
- **Entity management & formation** — end-to-end US subsidiary setup
- **GEMO pathway** — graduated expansion from EOR → entity → full global employment management

This is the compliance gap Teamed owns.

### The Strategic Play

US payroll is not a standalone service — it's the **entry point** into Teamed's full platform:

```
ENTRY              →  EXPAND           →  GROW              →  FULL PLATFORM
US Payroll for        HR &                Entity               GEMO
Foreign Companies     Compliance          Management           Platform
```

A company that comes to Teamed for US payroll is exactly the kind of company that needs HR support, entity management, and eventually the full GEMO platform as they expand further.

### What Exists Today

Tom built a working prototype of the Teamed-branded US payroll platform using Check HQ as invisible infrastructure. Check handles regulated payroll processing (money movement, tax calculations, filings, government remittances). Teamed builds the experience layer on top. The prototype is functional across three user roles — operator, client admin, and employee.

**Current status:** Prototype only. Check HQ production application not yet started. 6–8 weeks from decision to first live payroll.

### Why This Site, Now

The product isn't live yet. But the **market education opportunity is immediate**. UK/European companies expanding to the US are searching for answers right now — about entity formation, Form 5472, multi-state tax registration, US employment law, benefits (ICHRA, 401k), and how to avoid the $25k penalties that catch foreign-owned companies off guard.

This site warms the waters. It builds authority, captures demand, and positions Teamed as the obvious answer — so when the product launches, the audience is already there.

### Teamed Company Context (from GTM Kernel)

- **Company:** Teamed Ltd, London-based, venture-backed (Blackfinch)
- **Founded:** 2018
- **Size:** 11-50 employees, $10-50M revenue range
- **Founders:** Antony Vallee (CEO), Tom Daniel-Price (Co-founder & CRO)
- **Category:** Global EOR / employment services
- **Mission:** Make global employment honest.
- **Vision:** A world where your employment provider is on your side.

---

## 2. Site Strategy

### What This Site Is

An **independent, AEO-first authority resource** focused exclusively on US payroll, entity formation, and employment compliance for foreign-owned companies. It is not a product site (yet). It is a knowledge resource that:

1. **Gets cited by AI answer engines** — structured, factual, answer-first content on the specific questions foreign companies ask when expanding to the US
2. **Builds trust before the product exists** — establishes Teamed's expertise in the foreign-ownership compliance gap
3. **Captures early-stage demand** — companies researching US expansion find this site months before they need a payroll provider
4. **Converts to Teamed** — when ready, visitors are warm leads who already trust the source

### What This Site Is Not

- Not a Teamed product page (no dashboards, no pricing, no "sign up")
- Not a broad global payroll encyclopedia (that was the old site — too wide, too shallow)
- Not a competitor comparison tool (yet — that's Phase 3)
- Not a blog (content is structured, evergreen, reference-grade — not chronological posts)

### Relationship to Teamed

The site is **editorially independent but Teamed-attributed**. Think of it like a consultancy's published research — the content stands on its own merit, but the source is clear.

- Site header: site brand (not "Teamed")
- Site footer: "Published by Teamed — global employment, done properly." with link to teamed.global
- Expert CTAs: "Talk to a US payroll specialist" → teamed.global/contact-teamed
- Content voice: Chloé persona (from Teamed kernel) — advisory, direct, radically transparent
- No "we" referring to Teamed in body content — the site speaks as an independent resource

### Target Audience

**Primary:** UK and European companies (20–500 employees) expanding into the US for the first time.

**Buyer profiles:**

| Role | Why They're Here | What They Need |
|------|-----------------|----------------|
| **CFO / Finance Director** | Responsible for US subsidiary costs, tax compliance, transfer pricing | Cost clarity, penalty avoidance, entity structure guidance |
| **Head of People / HR Director** | Tasked with hiring first US employees | Employment law, benefits, onboarding, payroll setup |
| **General Counsel / Legal** | Evaluating entity formation, compliance risk | Form 5472, corporate structure, IRS obligations |
| **COO / Operations** | Managing the US expansion operationally | End-to-end setup, provider selection, timeline |
| **Founder / CEO** | Making the go/no-go decision on US expansion | Total cost picture, risk overview, what-to-expect guide |

**Key insight from Tom's briefing:** These mid-market clients don't have a US-based CFO or in-house compliance team. They need someone to own the entire US employment stack — not just process payroll, but actively manage the obligations that come with being a foreign-owned employer in the US.

### Primary Success Metric

**Qualified leads generated** — contact form submissions, consultation requests, and email captures from site visitors who match the ICP (UK/EU companies expanding to the US).

### Secondary Success Metrics

- AEO visibility: citations in AI-generated answers for target queries
- Organic traffic growth for US payroll + foreign company keyword clusters
- Email list growth (for launch announcement when product goes live)
- Time-on-site and page depth (engagement with educational content)
- Inbound links from relevant sources (law firms, accountancy firms, trade press)

---

## 3. Brand Kit

### Site Name

**Working name:** US Payroll Guide
**Domain candidates:** uspayrollguide.com, uspayrollcompliance.com, expandtoamerica.com

> **Decision needed:** Final site name. Should be descriptive, SEO-friendly, and feel like an authoritative resource rather than a product brand. "US Payroll Guide" is the working default.

### Visual Identity

The site draws from Teamed's brand system but is not identical to it. The goal is **credible, calm, mid-market authority** — the kind of site a CFO would send to their board.

**Color Palette:**

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#2D5A7B` | Headers, primary actions, trust anchors — a slate blue that says "financial services" not "startup" |
| `--primary-deep` | `#1E3F56` | Dark backgrounds, hero sections |
| `--accent` | `#C1FA6B` | CTAs, highlights, key callouts (borrowed from Teamed's lime) |
| `--accent-warm` | `#FF8E6E` | Warning/alert elements, penalty callouts, compliance risk flags (Teamed's coral) |
| `--dark` | `#0F1B24` | Dark sections, footer |
| `--surface` | `#F7F9FB` | Light backgrounds, card surfaces |
| `--text` | `#1A2B3B` | Body text |
| `--text-muted` | `#5A7184` | Secondary text, captions |
| `--white` | `#FFFFFF` | Card backgrounds, content areas |
| `--border` | `#E2E8F0` | Subtle borders, dividers |

**Rationale:** The original site used Teamed's purple (#966EFF) as primary. That's great for Teamed's own brand, but for an independent authority site about US payroll compliance, slate blue communicates trust, stability, and financial seriousness. The lime accent and coral warning color carry over from Teamed for visual continuity.

**Typography:**

| Role | Font | Weights |
|------|------|---------|
| Headings | **Inter** | 600 (semibold), 700 (bold) |
| Body | **Inter** | 400 (regular), 500 (medium) |

**Rationale:** Montserrat (the original choice from Teamed's brand) is a display font — great for Teamed's marketing site, too personality-heavy for a compliance reference resource. Inter is the standard for modern, readable, professional web content. Single font family, fewer weights = better performance.

**Visual Language:**

- Clean, structured layouts with generous white space
- Data tables and comparison matrices as primary visual elements (not illustrations)
- Compliance checklists and step-by-step timelines
- No stock photos. No smiling remote workers. No abstract geometric shapes.
- Icons: minimal, line-weight, monochrome — functional not decorative
- Border-left accent blocks for key facts and answer-first intros
- Penalty/risk callouts in coral with warning icon

**Logo:**

FPO — no logo designed yet. Use text-only site name in Inter Bold as placeholder. The logo should feel like a reference publication, not a SaaS product.

### Content Voice (Chloé — adapted from Teamed kernel)

The site's author persona is **Chloé** — the calm, seasoned advisor who has already weathered the storms of US expansion. She is the General Counsel or CFO-advisor who pulls you aside and tells you what you actually need to know.

**Tone: Reassuringly direct**

- Clear, not clever. Plain English. No jargon. Immediate understanding.
- Outcome-led. Frame around benefit: certainty, speed, safety, relief.
- Radically transparent. Explain costs, processes, and risks with zero ambiguity.
- Credibility through complexity. Prove expertise by leaning into the toughest challenges (Form 5472, transfer pricing, multi-state nexus).

**We are:**
- Advisory, not salesy
- Direct, not corporate
- Confident, not arrogant
- Practical, not theoretical
- Specific to US + foreign-owned, not generic global HR

**We are not:**
- Startup-y or hyperbolic ("revolutionising", "game-changing")
- Generic HR-tech ("empowering your workforce", "unlocking potential")
- Enterprise-stiff ("leverage synergies", "drive efficiencies")
- Fear-based ("you WILL get fined" — instead: "here's the penalty schedule and how to stay compliant")

**Guardrails (from Teamed kernel, adapted):**
- Never use fear-based marketing that exaggerates compliance penalties to pressure readers
- Never hide behind "from $..." pricing that obscures real costs
- Never position Teamed as the only option — the site is educational first, Teamed-attributed second
- Always show the numbers: costs, timelines, penalty amounts, crossover points

---

## 4. Content Architecture

### Organizing Principle: The US Expansion Journey

The site is organized around **the journey a foreign company takes when expanding to the US** — not product features, not arbitrary topic clusters. Every piece of content maps to a stage of that journey.

### Content Pillars

#### Pillar 1: Entity Formation & Structure
*"Should we set up a US entity, and how?"*

| Page | Core Question |
|------|--------------|
| **US Entity Formation Guide** (pillar) | How to set up a US subsidiary as a foreign company — LLC vs C-Corp, state selection, registered agent, timeline, costs |
| Delaware vs Other States | Why everyone says Delaware, and when it's actually the wrong choice |
| LLC vs C-Corp for Foreign Parents | Tax implications, liability, investor expectations |
| EOR vs Entity for US Hiring | When to use an EOR vs set up your own entity (with real crossover economics) |
| US Entity Costs | Realistic total cost breakdown: formation, registered agent, state fees, annual compliance |

#### Pillar 2: US Payroll for Foreign-Owned Companies
*"How do we actually pay people in the US?"*

| Page | Core Question |
|------|--------------|
| **US Payroll Guide for Foreign Companies** (pillar) | End-to-end guide: federal + state tax withholding, pay schedules, payroll providers, W-4, direct deposit |
| Multi-State Payroll | When employees are in different states — nexus, registration, withholding rules |
| US Payroll Tax Breakdown | Federal income tax, FICA, FUTA, SUTA — what each is, who pays, rates |
| Choosing a US Payroll Provider | What to look for, what questions to ask, what foreign companies specifically need |
| US Pay Schedules & Requirements | Weekly, biweekly, semi-monthly — state-by-state requirements |

#### Pillar 3: Foreign-Ownership Compliance (THE DIFFERENTIATOR)
*"What obligations do we have as a foreign-owned US employer?"*

| Page | Core Question |
|------|--------------|
| **Foreign-Owned Entity Compliance Guide** (pillar) | The obligations US payroll providers don't tell you about — Form 5472, transfer pricing, pro forma 1120 |
| Form 5472 Guide | What it is, who must file, deadlines, the $25,000 penalty, how to stay compliant |
| Transfer Pricing for US Subsidiaries | Intercompany transactions, arm's-length pricing, documentation requirements |
| Pro Forma 1120 | When and why foreign-owned single-member LLCs must file |
| FIRPTA & Foreign Investment Compliance | Real estate and investment-related obligations for foreign-owned entities |

#### Pillar 4: US Benefits & Employment Law
*"What do US employees expect, and what are we legally required to provide?"*

| Page | Core Question |
|------|--------------|
| **US Employee Benefits Guide** (pillar) | Health insurance, retirement, PTO — what's required vs. expected vs. competitive |
| ICHRA Guide | Individual Coverage Health Reimbursement Arrangement — the mid-market health benefits option |
| 401(k) for Small US Operations | Setting up retirement benefits when you have 5–50 US employees |
| US Employment Law Basics | At-will employment, FLSA, ADA, FMLA — what UK/EU companies find surprising |
| US vs UK/EU Employment Law | Side-by-side comparison of the things that trip up European companies |

#### Pillar 5: State-Specific Guides
*"What do I need to know about hiring in [state]?"*

Start with the 10 states most common for UK/EU expansion:

| State | Why It Matters |
|-------|---------------|
| **Delaware** | Most common incorporation state for foreign-owned entities |
| **California** | Largest talent pool, strictest employment laws |
| **New York** | Financial services, media, HQ presence |
| **Texas** | No state income tax, growing tech hub |
| **Florida** | No state income tax, growing presence |
| **Massachusetts** | Biotech, education, tech |
| **Washington** | Tech (Seattle), no state income tax |
| **Illinois** | Midwest hub, complex tax requirements |
| **Colorado** | Growing tech scene, unique employment laws |
| **Georgia** | Logistics, manufacturing, growing hub |

Each state guide covers: employer registration, tax rates, employment law specifics, benefits requirements, and common pitfalls for foreign-owned entities.

### AEO-First Content Layout

Every content page follows this pattern (adapted from the AEO brief used on other Teamed properties):

1. **Answer-first intro** (2–4 sentences in a `border-left` accent block) — directly answers the core question
2. **TL;DR bullets** — key takeaways scannable by AI and humans
3. **Sticky TOC** — for pillar pages with 3+ sections
4. **Structured content sections** — each section answers a sub-question with evidence
5. **Compliance callout blocks** — penalties, deadlines, and requirements highlighted in coral
6. **FAQ accordion** (FAQPage schema) — real questions foreign companies ask
7. **"Last updated" timestamp** — signals freshness to AI engines
8. **Internal linking** — up (to pillar), across (to sibling pages), down (to deeper guides)
9. **Expert CTA** — "Talk to a US payroll specialist" → teamed.global/contact-teamed (appropriate to content stage, not spammy)

### Structured Data Strategy

- **Article schema** on all pillar and guide pages
- **FAQPage schema** on every page with FAQ section
- **Organization schema** (site brand, with Teamed as publisher)
- **BreadcrumbList** site-wide
- **HowTo schema** on step-by-step guides (entity formation, payroll setup)

### Internal Linking Rules

Every page includes:
- 1 link "up" to its pillar page or home
- 2–4 contextual links to sibling pages (same pillar or adjacent topic)
- 1 link to relevant Teamed page where naturally appropriate
- Cross-pillar links where the content genuinely connects (e.g., entity formation page links to Form 5472 page)

---

## 5. Development Brief

### Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Frontend | Next.js 14 (App Router, SSG) | Static generation for performance, React Server Components for content |
| Styling | Tailwind CSS | Utility-first, minimal CSS, fast iteration |
| Animation | Framer Motion | Subtle, purposeful animations — scroll reveals, section transitions, accordion open/close. Keeps the site feeling modern and polished without being flashy. |
| Hosting | Vercel | Edge network, SSG-optimized, zero-config deploys |
| Database | MongoDB (future) | Blog posts, resource library, email captures — not needed at launch |
| CRM | HubSpot (API-only, future) | Lead capture → CRM sync when product launches |
| Analytics | GA4 (lightweight) | No render-blocking scripts |

### Key Architecture Decisions

1. **No CMS** — custom-coded pages, maintained through Claude Code sessions
2. **SSG-first** — all content pages statically generated at build time
3. **Framer Motion for animations** — subtle scroll reveals, section transitions, accordion interactions. Purposeful, not decorative. Import specific modules to minimize bundle impact.
4. **No client-side JavaScript on content pages** — server components by default. `'use client'` only where absolutely required (FAQ accordion interactivity, mobile nav toggle).
5. **Single font** — Inter via `next/font/google`, weights 400/500/600/700 only
6. **Image strategy** — AVIF primary, WebP fallback, `next/image` everywhere, no stock photos at launch (icon/illustration-based)
7. **Performance targets** — LCP < 1.5s, CLS < 0.05, TTFB < 100ms at edge

### Key Routes

```
/                                    → Home: "US Payroll & Compliance for Foreign-Owned Companies"
/entity-formation                    → Pillar: Entity formation guide
/entity-formation/delaware-vs-states → Delaware incorporation analysis
/entity-formation/llc-vs-c-corp      → Structure comparison for foreign parents
/entity-formation/eor-vs-entity      → EOR vs entity decision framework
/entity-formation/costs              → Total cost breakdown

/us-payroll                          → Pillar: US payroll guide
/us-payroll/multi-state              → Multi-state payroll guide
/us-payroll/tax-breakdown            → Federal + state tax breakdown
/us-payroll/choosing-a-provider      → Provider selection guide
/us-payroll/pay-schedules            → Pay schedule requirements by state

/compliance                          → Pillar: Foreign-ownership compliance
/compliance/form-5472                → Form 5472 deep dive
/compliance/transfer-pricing         → Transfer pricing for US subsidiaries
/compliance/pro-forma-1120           → Pro forma 1120 guide
/compliance/firpta                   → FIRPTA obligations

/benefits                            → Pillar: US employee benefits
/benefits/ichra                      → ICHRA guide
/benefits/401k                       → 401(k) for small operations
/benefits/employment-law             → US employment law basics
/benefits/us-vs-uk-eu                → US vs UK/EU comparison

/states                              → State index
/states/[slug]                       → State-specific guides (10 states)

/resources                           → Resource hub
/glossary                            → US payroll/compliance glossary
/about                               → About this resource + Teamed attribution
/contact                             → Contact / consultation request
/privacy                             → Privacy policy
/terms                               → Terms
```

### What Changes from the Current Codebase

The current codebase is a broad global payroll site. The rebuild requires:

| Current | New |
|---------|-----|
| Global payroll / EOR / contractor compliance pillars | US-specific: entity formation, US payroll, foreign-ownership compliance, benefits |
| 8+ country guides (UK, DE, US, FR, etc.) | 10 US state guides (DE, CA, NY, TX, FL, etc.) |
| Generic FAQs about EOR and global payroll | Specific FAQs about Form 5472, transfer pricing, US entity setup |
| Teamed purple (#966EFF) primary | Slate blue (#2D5A7B) primary — financial trust |
| Montserrat font | Inter font |
| Framer Motion (heavy, every section) | Framer Motion (subtle, purposeful — scroll reveals, transitions) |
| "Global Payroll Nexus" branding | New site brand (TBD) |
| Generic CTAs to teamed.global | Specific CTAs: "Talk to a US payroll specialist" |

---

## 6. Autonomous Website Strategy

### Why This Exists

UK and European companies expanding to the US are searching for answers right now — about entity formation, Form 5472, multi-state tax registration, US employment law, and benefits options. These searches happen across AI answer engines (ChatGPT, Perplexity, Claude), Google, Reddit, and peer conversations.

No single resource currently owns this problem-space with the depth and specificity these buyers need. The big EOR players (Deel, Remote) have surface-level US content. The US payroll platforms (Gusto, Rippling) don't address foreign-ownership obligations at all. Accounting firms have the knowledge but bury it in PDFs and jargon.

This site will be an **AEO-first authority resource** that:

1. **Gets cited and ranked** — answer-first content structure optimized for AI answer engines and organic search
2. **Captures demand upstream** — reaches companies at "should we expand to the US?" not just "which payroll provider?"
3. **Builds trust before the product exists** — so when Teamed US launches, the audience is already warm
4. **Operates autonomously** — content authored and maintained through Claude Code sessions, guided by the GTM Kernel and buyer question research

### Demand-State Coverage

The current niche has no site covering the full buyer journey. This site fills each stage:

| Demand State | Example Questions | Content Strategy |
|-------------|-------------------|------------------|
| **Unaware** | "What's different about hiring in the US vs UK?" | Industry trend content, surprising-fact articles |
| **Problem-Aware** | "Do I need a US entity to hire one person in America?" | Problem-definition content, decision frameworks |
| **Researching** | "How does US payroll tax work?", "What is Form 5472?" | Educational pillar pages, deep-dive guides |
| **Validating** | "What happens if I miss a Form 5472 filing?", "best state to incorporate foreign company" | Compliance guides, penalty explainers, case examples |
| **Comparing** | "EOR vs entity for US hiring", "Deel vs Teamed for US payroll" | Comparison pages, feature breakdowns (Phase 3) |
| **Buying** | "US payroll provider for UK company", "managed US payroll for foreign companies" | Provider selection guides, consultation CTAs |

### Content Differentiation (from competitive gap analysis)

The site's messaging anchors on the compliance gap no competitor covers:

- **Foreign-ownership compliance is the gap everyone ignores** — "Gusto won't tell you about Form 5472. Deel won't track your transfer pricing. Your US accountant might not even know what a foreign-owned single-member LLC must file."
- **$25,000 is not a scare tactic — it's the published IRS penalty** — "Per form, per year. And it's per entity, not per company. If you have two US LLCs and miss both, that's $50,000."
- **The US is not one market — it's 50** — "Each state has different employer registration requirements, tax withholding rates, employment laws, and benefits mandates. Multi-state is where it gets complicated."
- **EOR has a crossover point** — "At roughly 8–15 US employees, the economics shift. We'll show you exactly where that line is for your situation."
- **Managed, not self-serve** — "Mid-market companies expanding from the UK don't need another dashboard. They need someone who owns the US employment stack end-to-end."

### Conversion Architecture

| Content Stage | Primary CTA | Secondary CTA |
|--------------|-------------|---------------|
| Educational / early-stage | Subscribe for US expansion updates | Browse guides |
| Mid-funnel (compliance, entity) | Download checklist (gated) | Talk to an expert |
| Late-funnel (provider selection, costs) | Book a US payroll consultation | See how Teamed helps |

All CTAs link to teamed.global (contact page or relevant product page). Forms are short, server-side capture. No embedded third-party form scripts.

### Autonomous Operating Model

The site is maintained through Claude Code sessions:

1. **Content generation** — new pages authored against buyer questions researched for this niche
2. **Compliance monitoring** — IRS rule changes, state law updates trigger content refreshes
3. **AEO optimization** — content structure refined based on AI citation patterns
4. **GTM Kernel alignment** — messaging validated against Teamed's voice, values, and guardrails
5. **Session-based operations** — each Claude Code session can add pages, update content, adjust CTAs, and deploy

---

## 7. Open Questions

1. **Site name and domain** — "US Payroll Guide" is the working name. Final decision needed. Domain availability to be checked.
2. **Teamed attribution level** — How visible should Teamed be? Options range from "Published by Teamed" footer line to "A Teamed Resource" in header. Needs alignment with Tom and marketing.
3. **Email capture at launch** — Do we want a "Get notified when Teamed US launches" list? This is the most direct pre-product value but tips the hand on product timing.
4. **Check HQ mention** — Tom's briefing describes Check as invisible infrastructure. Should the site ever mention Check, or is it always "Teamed-powered"? For the authority site, this may not matter since we're not describing the product yet.
5. **Competitive comparison pages** — Phase 1 focuses on educational content. When do we add "Deel vs Teamed for US payroll" and similar comparison pages? Likely Phase 3, after product launch.
6. **Content from Tom's briefing** — The briefing is marked "Internal — Confidential." Which details can inform public content (competitive gaps, penalty amounts, compliance obligations) vs. what must stay internal (Check HQ relationship, pricing model, Ambar Cloud as first client)?
7. **GTM Kernel enrichment** — The kernel's ICP, positioning, and competitor sections appear sparse. Should these be enriched for the US payroll niche specifically before content authoring begins? Or does the briefing PDF provide sufficient strategic context?
8. **Legal review** — Compliance content about IRS penalties, tax obligations, and employment law should be reviewed by Teamed's Head of Legal (Joanna Castens) before publication. What is the review workflow?
9. **State guide scope** — Starting with 10 states. Should we prioritize differently? Does Teamed have data on where their existing clients are expanding?
10. **Timeline** — What is the target for having the authority site live? This informs whether we do a minimal launch (3–5 pillar pages) or wait for full content coverage.
