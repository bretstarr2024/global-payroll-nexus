# Global Payroll Nexus

## What this is
A niche authority-building website for **Teamed** (teamed.global), focused on international payroll, EOR, and global employment compliance. Designed primarily for **AEO (Answer Engine Optimization)** — to get cited by AI systems and attract mid-market prospects.

## Brand & Visual System
- **NOT branded as Teamed** — this is an independent knowledge resource
- Working name: **Global Payroll Nexus** (globalpayrollnexus.com)
- Visual system inspired by Teamed's brand: purple/violet (#966EFF), coral (#FF8E6E), lime green accent (#C1FA6B), dark backgrounds (#121213)
- Font: Montserrat
- Clean, geometric, mid-market confident aesthetic

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3.4
- Framer Motion for animations
- MongoDB (future: content, blog posts, resources)

## GTM Kernel Connection
- Teamed's kernel ID: `97279a23-51b0-45c0-a45d-606f1d65ea17`
- Database: `gtm_kernel` on MongoDB Atlas (cluster0.qcieh.mongodb.net)
- All content should align with Teamed's kernel data (positioning, ICP, voice, competitors)

## Content Voice
Author persona: **Chloe** (from Teamed kernel)
- Reassuringly direct, advisory not salesy
- Clear, not clever. Plain English. No jargon.
- Outcome-led. Frame around benefit: certainty, speed, safety, relief.
- Radically transparent about costs, processes, risks
- Never: startup-y, hyperbolic, generic HR-tech, enterprise-stiff

## AEO-First Content Pattern
Every page follows:
1. Answer-first intro (2-4 sentences in border-left block)
2. TL;DR bullets where applicable
3. Sticky TOC for long content
4. FAQ blocks with FAQPage schema
5. "Last updated" timestamps
6. Strong internal linking
7. CTA to Teamed (not spammy)

## Key Routes
- `/` — Home
- `/employer-of-record` — Pillar: EOR guide
- `/global-payroll` — Pillar: Global payroll guide
- `/eor-vs-entity` — Pillar: Comparison
- `/contractor-compliance` — Pillar: Compliance guide
- `/payroll-compliance` — Pillar: Payroll compliance
- `/countries` — Country index
- `/countries/[slug]` — Country-specific guides
- `/resources` — Resource hub
- `/resources/blog` — Blog
- `/resources/glossary` — Glossary
- `/about`, `/contact`, `/privacy`, `/terms`

## Teamed CTAs
All expert CTAs link to: https://www.teamed.global/contact-teamed
Product-specific CTAs link to relevant Teamed pages (e.g., /global-payroll, /contractors)

## Development
```bash
npm install
npm run dev
```
