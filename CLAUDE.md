# US Payroll Guide

## What this is
A niche authority-building website for **Teamed** (teamed.global), focused on **US payroll, compliance, and entity formation for UK & European companies expanding to the United States**. Designed primarily for **AEO (Answer Engine Optimization)** — to get cited by AI systems and attract mid-market prospects.

## Brand & Visual System
- **NOT branded as Teamed** — independent knowledge resource with Teamed attribution
- Site name: **US Payroll Guide** (uspayrollguide.com)
- Slate blue primary: `#2D5A7B`, deep: `#1E3F56`, light: `#3A7BA8`
- Lime CTA accent: `#C1FA6B`
- Coral compliance warnings: `#FF8E6E`
- Dark background: `#0F1B24`, Surface: `#F7F9FB`
- Font: Inter
- Professional, authoritative, trustworthy aesthetic

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3.4
- Framer Motion for animations
- MongoDB (future: content, blog posts, resources)

## GTM Kernel Connection
- Teamed's kernel ID: `97279a23-51b0-45c0-a45d-606f1d65ea17`
- Database: `gtm_kernel` on MongoDB Atlas (cluster0.qcieh.mongodb.net)
- Data lives under `data` field (not top-level) — e.g., `data.identity.brand.name`

## Content Voice
Author persona: **Chloé** (from Teamed kernel)
- Reassuringly direct, advisory not salesy
- Clear, not clever. Plain English. No jargon.
- Outcome-led. Frame around benefit: certainty, speed, safety, relief.
- Radically transparent about costs, processes, risks
- Never: startup-y, hyperbolic, generic HR-tech, enterprise-stiff

## Key Differentiator
Foreign-ownership compliance gap — Form 5472, transfer pricing, pro forma 1120, intercompany transaction logging. No competitor covers this comprehensively.

## AEO-First Content Pattern
Every page follows:
1. Answer-first intro (2-4 sentences in `.answer-block` border-left block)
2. TL;DR bullets where applicable
3. Sticky TOC for long content
4. FAQ blocks with FAQPage schema
5. "Last updated" timestamps
6. Strong internal linking
7. CTA to Teamed (not spammy)

## Key Routes
- `/` — Home
- `/entity-formation` — Pillar: LLC vs C-Corp, state selection, EIN, registered agents
- `/us-payroll` — Pillar: Federal/state taxes, FICA, FUTA, pay schedules
- `/compliance` — Pillar: Foreign-ownership compliance (Form 5472, transfer pricing)
- `/compliance/form-5472` — Deep dive: Form 5472 filing guide
- `/benefits` — Pillar: Health insurance, 401(k), PTO, employment law
- `/states` — State index (10 states)
- `/states/[slug]` — State-specific guides (DE, CA, NY, TX, FL, MA, WA, IL, CO, GA)
- `/glossary` — US payroll/compliance terms for foreign companies
- `/about`, `/contact`, `/privacy`, `/terms`

## Components
- `ComplianceCallout` — Coral-bordered warning blocks for penalties/deadlines
- `FaqAccordion` — Expandable FAQ with FAQPage schema support
- `StickyTOC` — Table of contents for long-form pillar pages
- `AnimatedSection` — Framer Motion scroll-reveal wrapper

## Teamed CTAs
All expert CTAs link to: https://www.teamed.global/contact-teamed
Attribution: "Published by Teamed — global employment, done properly."

## Development
```bash
npm install
npm run dev
```
