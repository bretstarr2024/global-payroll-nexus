import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FaqAccordion } from '@/components/FaqAccordion';

const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  faqs: { question: string; answer: string }[];
}> = {
  'why-foreign-companies-get-form-5472-wrong': {
    title: 'Why Foreign Companies Get Form 5472 Wrong (and How to Avoid $25K Penalties)',
    excerpt: 'Form 5472 is the most commonly missed filing for foreign-owned US entities. Here\'s what triggers it, what counts as a reportable transaction, and how to stay compliant.',
    category: 'Compliance',
    date: '2026-03-10',
    readTime: '8 min read',
    content: `Most foreign companies expanding to the US focus on entity formation, payroll setup, and finding the right employees. What they often miss — until it's too late — is Form 5472.

## What is Form 5472?

Form 5472 is an IRS information return required for any US entity that is 25% or more foreign-owned and has "reportable transactions" with related foreign parties. It's attached to a pro forma Form 1120, even if the entity has zero taxable income.

## Why companies get it wrong

The most common reason? Their US accountant doesn't ask about intercompany transactions. If your UK parent company pays for your US subsidiary's software licences, reimburses expenses, provides a loan, or charges a management fee — those are all reportable transactions.

Many US accountants assume a single-member LLC owned by a foreign entity is a simple structure. It is — until the IRS asks where the money came from.

## The penalty

**$25,000 per form, per year.** And it compounds. If the IRS sends a notice and you don't respond within 90 days, the penalty can increase to $75,000. There is no reasonable-cause exception for foreign-owned entities — the penalty applies regardless of intent.

## What counts as a reportable transaction?

- Intercompany payments (management fees, royalties, cost-sharing)
- Loans between parent and subsidiary (in either direction)
- Capital contributions from the foreign parent
- Reimbursement of expenses
- Use of shared IP, trademarks, or services
- Any payment, receipt, or accrual between related parties

## How to stay compliant

1. **File Form 5472 with a pro forma 1120** every year, even if the entity has no income
2. **Track every intercompany transaction** — even informal ones
3. **Maintain transfer pricing documentation** supporting arm's-length pricing
4. **Brief your US accountant** on your corporate structure from day one
5. **Don't assume your EOR handles this** — they typically don't

## The bottom line

Form 5472 is not optional, not obscure, and not forgiving. If you're a foreign-owned US entity with any financial relationship to your parent company, you need to file it. Every year. On time.`,
    faqs: [
      { question: 'Who needs to file Form 5472?', answer: 'Any US corporation or disregarded entity (like a single-member LLC) that is 25% or more foreign-owned and has reportable transactions with related foreign parties during the tax year.' },
      { question: 'What is a "reportable transaction" for Form 5472?', answer: 'Any monetary transaction between the US entity and its foreign related parties — including loans, capital contributions, management fees, royalties, expense reimbursements, and payments for services or IP.' },
      { question: 'What is the penalty for not filing Form 5472?', answer: '$25,000 per form, per year for failure to file or filing an incomplete return. The penalty can increase to $75,000 if not corrected within 90 days of an IRS notice.' },
      { question: 'Does my EOR file Form 5472 for me?', answer: 'No. An Employer of Record handles payroll and employment compliance, but Form 5472 is an entity-level IRS filing obligation. You or your US tax advisor must file it separately.' },
    ],
  },
  'llc-vs-c-corp-foreign-company': {
    title: 'LLC vs C-Corp: Which Is Right for Your Foreign-Owned US Subsidiary?',
    excerpt: 'The entity type you choose affects taxation, liability, fundraising, and compliance obligations. A practical comparison for non-US parent companies.',
    category: 'Entity Formation',
    date: '2026-03-08',
    readTime: '10 min read',
    content: `Choosing between an LLC and a C-Corp is one of the first decisions you'll make when setting up a US subsidiary. Both provide liability protection. Both can employ US workers. But they differ significantly in taxation, compliance burden, and fundraising potential.

## The short answer

**Most foreign companies should start with a C-Corp** if they plan to raise US venture capital or want clean, predictable corporate taxation. **Choose an LLC** if you want pass-through taxation, operational flexibility, and a simpler structure for a small team.

## C-Corp: The venture-backed default

A C-Corporation is a separate legal and tax entity. It pays federal corporate income tax (21%) on profits, and shareholders pay tax again on dividends. This "double taxation" sounds bad, but for foreign-owned subsidiaries it often doesn't matter — you're reinvesting profits, not paying dividends.

**Advantages for foreign companies:**
- Required by most US venture capital investors
- Clean separation between parent and subsidiary taxation
- Well-understood by US banks, partners, and regulators
- Unlimited shareholders, multiple stock classes

**Drawbacks:**
- Double taxation on distributed profits
- More formal governance requirements (board, minutes, resolutions)
- Annual franchise tax in most states

## LLC: The flexible alternative

A Limited Liability Company is simpler to form and maintain. A single-member LLC owned by a foreign parent is treated as a "disregarded entity" for US federal tax purposes — it doesn't file its own income tax return.

**Advantages for foreign companies:**
- Simpler formation and maintenance
- No separate corporate tax return (for single-member LLCs)
- Flexible management structure
- Lower ongoing compliance costs

**Drawbacks:**
- Cannot raise institutional VC funding
- Must still file Form 5472 for reportable transactions
- Some states charge additional LLC fees (California's $800/year minimum)
- Tax treatment can be complex for multi-member foreign-owned LLCs

## Key decision factors

| Factor | C-Corp | LLC |
|--------|--------|-----|
| US fundraising planned? | Yes — required | Not suitable |
| Headcount > 20? | Usually better | Works fine |
| Transfer pricing complexity | Higher | Lower |
| Annual compliance cost | $3K-8K | $1K-4K |
| Form 5472 required? | Yes | Yes |

## Our recommendation

If you're a UK or European company hiring 1-5 US employees with no plans to raise US funding, an LLC is simpler and cheaper. If you're building a US commercial presence, plan to raise capital, or expect significant revenue, a C-Corp gives you more options and credibility.

Either way, **both entity types require Form 5472 filing** if there are reportable transactions with the foreign parent.`,
    faqs: [
      { question: 'Can a foreign company own a US LLC?', answer: 'Yes. A foreign company can be the sole member of a US LLC. The LLC will be treated as a "disregarded entity" for US federal tax purposes, but it must still file Form 5472 and comply with state requirements.' },
      { question: 'Do I need a US address to form an LLC or C-Corp?', answer: 'You need a registered agent with a physical address in the state of incorporation. You don\'t need to have a physical office, but you do need a registered agent service.' },
      { question: 'Which is cheaper to maintain — an LLC or C-Corp?', answer: 'Generally an LLC is cheaper. Annual compliance costs for an LLC typically run $1K-4K, while a C-Corp runs $3K-8K, primarily due to more complex tax filings and governance requirements.' },
    ],
  },
  'first-us-hire-payroll-checklist': {
    title: 'Your First US Hire: The Complete Payroll Setup Checklist',
    excerpt: 'From EIN application to first paycheck — every step a foreign company needs to take before paying a US employee, in order.',
    category: 'US Payroll',
    date: '2026-03-05',
    readTime: '12 min read',
    content: `Hiring your first US employee is a milestone. It's also a compliance minefield. Here's every step, in order, that a foreign company needs to complete before running US payroll.

## Before you hire

### 1. Form your US entity
You need a legal US entity (LLC or C-Corp) to employ workers directly. Choose your state of incorporation, appoint a registered agent, and file formation documents.

**Timeline:** 1-3 weeks depending on the state.

### 2. Get your EIN
Apply for an Employer Identification Number from the IRS using Form SS-4. Foreign applicants without an SSN or ITIN must apply by fax or mail (not online).

**Timeline:** 4-8 weeks by fax for foreign applicants.

### 3. Open a US bank account
You need a US business bank account to run payroll. Most banks require the EIN, formation documents, and a corporate resolution authorizing the account. Some banks require an in-person visit from an authorized signatory.

**Timeline:** 1-3 weeks.

### 4. Register for state taxes
Register with your state's tax authority for income tax withholding and unemployment insurance. If you have employees in multiple states, register in each state where employees work.

**Timeline:** 1-2 weeks per state.

## When you hire

### 5. Collect employee documents
- **Form W-4** (federal tax withholding)
- **Form I-9** (employment eligibility — must be completed within 3 business days of start date)
- **State W-4** (if applicable)
- **Direct deposit authorization**

### 6. Set up a payroll provider
Choose a payroll provider that handles federal and state tax withholding, FICA, FUTA, and state unemployment tax calculations, filings, and payments. Popular options for small foreign-owned companies: Gusto, Rippling, ADP Run.

### 7. Determine pay schedule
Most states allow biweekly or semi-monthly pay schedules. Some states (like California) have specific requirements. Check your state guide for details.

### 8. Establish benefits (if offering)
If you're offering health insurance, 401(k), or other benefits, set these up before the employee's start date. Many have enrollment windows and waiting periods.

## After first payroll

### 9. File Form 5472
If your US entity has any reportable transactions with the foreign parent (and it almost certainly does — even a capital contribution counts), file Form 5472 with a pro forma Form 1120 by the tax filing deadline.

### 10. Maintain records
Keep payroll records for at least 4 years (IRS requirement). Keep I-9 forms for 3 years after hire date or 1 year after termination, whichever is later.

## The bottom line

Running US payroll as a foreign company isn't just about paying people — it's about getting the tax registrations, compliance filings, and employment documentation right from day one. Miss a step and you're not just behind — you're potentially facing penalties.`,
    faqs: [
      { question: 'How long does it take to set up US payroll from scratch?', answer: 'Typically 6-10 weeks from entity formation to first paycheck, primarily due to the EIN application timeline for foreign applicants (4-8 weeks by fax).' },
      { question: 'Can I use an EOR while setting up my own entity?', answer: 'Yes, and this is common. Many foreign companies use an EOR to hire immediately while their entity formation, EIN, and bank account are being set up. Once ready, they transition the employee to their own payroll.' },
      { question: 'What payroll taxes does a US employer pay?', answer: 'Employers pay FICA (7.65% — Social Security 6.2% + Medicare 1.45%), FUTA (effectively 0.6% on first $7,000 per employee), and state unemployment insurance (varies by state and experience rating, typically 1-5%).' },
    ],
  },
  'understanding-fica-futa-suta': {
    title: 'FICA, FUTA, and SUTA: US Payroll Taxes Explained for Foreign Employers',
    excerpt: 'US payroll taxes are split across federal and state levels. Here\'s what each one is, who pays it, how much it costs, and when it\'s due.',
    category: 'US Payroll',
    date: '2026-03-01',
    readTime: '9 min read',
    content: `If you're used to UK employer National Insurance or European social contributions, US payroll taxes will feel both familiar and oddly fragmented. There's no single deduction — instead, you deal with three separate tax systems, each with its own rates, wage bases, and filing schedules.

## The three US payroll taxes at a glance

| Tax | What it funds | Who pays | Rate | Wage base |
|-----|--------------|----------|------|-----------|
| FICA — Social Security | Retirement, disability | Employer + Employee | 6.2% each | $174,900 (2026) |
| FICA — Medicare | Healthcare for 65+ | Employer + Employee | 1.45% each | No cap |
| FUTA | Federal unemployment | Employer only | 0.6% effective | $7,000 |
| SUTA | State unemployment | Employer (usually) | 1-5% typical | Varies by state |

## FICA: The big one

FICA stands for the Federal Insurance Contributions Act. It funds Social Security and Medicare — the US equivalents of the State Pension and NHS.

**Social Security:** Both employer and employee pay 6.2% on wages up to the annual wage base ($174,900 in 2026). Once an employee earns above that threshold, Social Security tax stops for the rest of the year.

**Medicare:** Both sides pay 1.45% on all wages — no cap. Employees earning over $200,000 pay an additional 0.9% Medicare surtax, but the employer portion stays at 1.45%.

**Total employer FICA cost: 7.65% of gross wages** (up to the Social Security wage base, then 1.45% on everything above it).

## FUTA: Simpler than it looks

The Federal Unemployment Tax Act funds the federal unemployment system. The nominal rate is 6.0% on the first $7,000 of each employee's wages per year. But employers who pay state unemployment taxes on time receive a 5.4% credit, making the effective rate **0.6%**.

**Maximum annual FUTA cost per employee: $42.** It's small, but you still need to file Form 940 annually.

## SUTA: The variable one

State Unemployment Tax Act rates vary significantly by state and by your company's experience rating (claims history). New employers typically start at a default rate, which decreases over time if you don't have unemployment claims.

**What makes SUTA complicated for foreign companies:**

- Rates range from under 1% to over 8% depending on the state
- Wage bases range from $7,000 (Arizona, California) to over $60,000 (Washington)
- You must register for SUTA in every state where you have employees
- New employer rates are typically between 2% and 4%
- Your rate changes annually based on your claims experience

## When are payroll taxes due?

- **FICA and federal income tax withholding:** Deposited semi-weekly or monthly, depending on the size of your payroll (determined by lookback period)
- **FUTA:** Deposited quarterly if liability exceeds $500
- **SUTA:** Varies by state — typically quarterly
- **Form 941:** Filed quarterly (employer's quarterly federal tax return)
- **Form 940:** Filed annually (FUTA tax return)
- **State quarterly returns:** Varies by state

## Common mistakes foreign employers make

- Forgetting to register for SUTA when hiring in a new state
- Miscalculating the Social Security wage base mid-year
- Missing the semi-weekly deposit deadline (which can trigger penalties)
- Assuming FUTA is automatic — you still need to file Form 940
- Not tracking which employees have hit the Social Security wage cap

## The bottom line

US payroll taxes add approximately 8-12% on top of gross wages, depending on the state. The amounts are predictable once you understand the structure — but the filing deadlines are strict and the penalties for late deposits are immediate.`,
    faqs: [
      { question: 'What is the total employer payroll tax rate in the US?', answer: 'Approximately 8-12% of gross wages. This includes FICA (7.65%), FUTA (0.6%), and state unemployment tax (typically 1-5%). The exact rate depends on your state and experience rating.' },
      { question: 'Do US employees pay payroll taxes too?', answer: 'Yes. Employees pay 7.65% in FICA taxes (6.2% Social Security + 1.45% Medicare), withheld from their paychecks. High earners pay an additional 0.9% Medicare surtax on wages above $200,000.' },
      { question: 'What happens if I miss a payroll tax deposit deadline?', answer: 'The IRS charges penalties ranging from 2% to 15% of the unpaid tax, depending on how late the deposit is. Penalties start at 2% for deposits 1-5 days late and escalate to 15% for amounts still unpaid 10+ days after an IRS notice.' },
      { question: 'Is SUTA the same in every state?', answer: 'No. Each state sets its own rates, wage bases, and experience rating systems. Rates can range from under 1% to over 8%, and wage bases range from $7,000 to over $60,000.' },
    ],
  },
  'state-nexus-remote-employees': {
    title: 'State Nexus and Remote Employees: When One Hire Triggers Multi-State Compliance',
    excerpt: 'Hiring a remote employee in a new state can trigger tax registration, withholding, and unemployment insurance obligations. Here\'s how nexus works and what it means for foreign employers.',
    category: 'Compliance',
    date: '2026-02-25',
    readTime: '10 min read',
    content: `You've set up your US entity in Delaware. Your first employee is in California. Now a great candidate in Texas wants to work remotely. Can you just hire them?

Yes — but the moment you do, you've created "nexus" in Texas. And that changes your compliance obligations.

## What is nexus?

Nexus is the legal concept that determines when a business has a sufficient connection to a state to trigger that state's tax and regulatory requirements. For employment purposes, having even one employee working in a state almost always creates nexus.

## What nexus triggers

When you create nexus in a new state, you typically need to:

- Register as a foreign entity in that state
- Register for state income tax withholding
- Register for state unemployment insurance (SUTA)
- Comply with that state's employment laws (minimum wage, paid leave, overtime rules)
- File state payroll tax returns quarterly
- Potentially pay state corporate income tax or franchise tax

## The remote work problem

Before widespread remote work, nexus was relatively simple — your employees worked where your offices were. Now, a single remote hire in a new state can trigger all of the obligations above.

**This is especially complex for foreign companies because:**

- You may not have a US-based HR team tracking state-by-state rules
- Your payroll provider may not automatically register you in new states
- State employment laws differ dramatically (California vs Texas, for example)
- Some states have aggressive enforcement of registration requirements

## State-by-state complexity

| Obligation | California | Texas | New York | Florida |
|-----------|-----------|-------|----------|---------|
| State income tax withholding | Yes | No state income tax | Yes | No state income tax |
| SUTA registration | Yes | Yes | Yes | Yes |
| Paid sick leave | Yes (statewide) | No state law | Yes (NYC) | No state law |
| Paid family leave | Yes (SDI/PFL) | No | Yes (NYPFL) | No |
| Disability insurance | Yes (SDI) | No | Yes (DBL) | No |
| Foreign entity registration | Yes | Yes | Yes | Yes |

## How to handle multi-state compliance

1. **Before hiring in a new state**, check that state's requirements for foreign entity registration, tax withholding, and employment law
2. **Use a payroll provider that supports multi-state** — Gusto, Rippling, and ADP all handle multi-state withholding, but you may still need to register manually
3. **Register for SUTA** in the new state before your first payroll run
4. **Review state-specific employment laws** — minimum wage, overtime, paid leave, and termination rules vary significantly
5. **Consider the total cost** — some states are significantly more expensive to operate in than others due to mandatory benefits and higher SUTA rates

## States that foreign companies should think twice about

- **California:** Highest regulatory burden — paid family leave, mandatory sick leave, strict overtime rules, $800 LLC minimum tax, aggressive enforcement
- **New York:** State and city income taxes, paid family leave, disability insurance, NYC-specific requirements
- **Massachusetts:** Paid family leave (PFML), state-run health insurance mandate, strict non-compete limitations

This doesn't mean you shouldn't hire there — it means you need to budget for the compliance overhead.

## The bottom line

Every remote hire in a new state is a compliance event, not just a payroll event. Register first, understand the state's requirements, and budget for the additional administrative cost.`,
    faqs: [
      { question: 'Does hiring one remote employee in a state create nexus?', answer: 'In almost all cases, yes. Having even one employee working in a state creates sufficient nexus to trigger that state\'s employment tax, withholding, and regulatory requirements.' },
      { question: 'What happens if I don\'t register in a state where I have an employee?', answer: 'You risk penalties for failure to withhold state income tax, failure to pay state unemployment insurance, and operating without proper foreign entity registration. States can assess back taxes, interest, and penalties — and some states actively enforce these rules.' },
      { question: 'Can I avoid nexus by hiring contractors instead of employees?', answer: 'Hiring independent contractors generally does not create employment nexus. However, misclassifying employees as contractors creates far greater liability. States like California (AB5) have strict rules about who qualifies as an independent contractor.' },
      { question: 'Do I need to register as a foreign entity in every state where I have employees?', answer: 'Yes. Most states require any company incorporated in another state (or another country) to register as a "foreign entity" before conducting business in that state. Having employees in a state constitutes conducting business.' },
    ],
  },
  'us-health-insurance-foreign-employers': {
    title: 'US Health Insurance: What Foreign Employers Need to Know Before Making an Offer',
    excerpt: 'There\'s no NHS in America. Employer-sponsored health insurance is expected by almost every US hire. Here\'s how it works, what it costs, and when you\'re legally required to offer it.',
    category: 'Benefits',
    date: '2026-02-20',
    readTime: '11 min read',
    content: `For European employers, one of the biggest cultural shocks in the US labour market is health insurance. There's no universal healthcare. No NHS. No public system that covers everyone. Instead, most Americans get health coverage through their employer.

If you want to attract competent US employees, health insurance isn't optional — it's table stakes.

## How US employer health insurance works

Employers select a group health insurance plan (or plans) through an insurance carrier or broker. The employer pays a portion of the premium — typically 70-80% — and the employee pays the rest through payroll deductions.

**Key terms you'll encounter:**

- **Premium:** The monthly cost of the plan. Employer and employee share this.
- **Deductible:** The amount the employee pays out-of-pocket before insurance covers costs. Plans with lower premiums tend to have higher deductibles.
- **Copay:** A fixed amount the employee pays for specific services (e.g., $30 for a doctor visit).
- **Coinsurance:** The percentage split between insurance and employee after the deductible is met (e.g., 80/20).
- **Out-of-pocket maximum:** The most an employee will pay in a year. After this, insurance covers 100%.

## What it costs

For a small employer (under 50 employees), expect to budget:

| Coverage type | Average monthly premium | Typical employer share |
|--------------|------------------------|----------------------|
| Single employee | $700-900 | $500-700 |
| Employee + spouse | $1,400-1,800 | $1,000-1,300 |
| Employee + family | $1,800-2,400 | $1,300-1,800 |

**Annual employer cost per employee: roughly $6,000-$15,000** depending on the plan and coverage tier.

## When it's legally required

The Affordable Care Act (ACA) requires employers with **50 or more full-time equivalent employees** to offer health insurance that meets minimum essential coverage standards. This is called the "employer mandate" or "pay or play" provision.

**If you have fewer than 50 employees, you are not legally required to offer health insurance.** But practically speaking, you need to. US candidates expect it, and you'll struggle to hire without it.

## Plan types

- **PPO (Preferred Provider Organisation):** Most flexibility. Employees can see any doctor. Higher premiums.
- **HMO (Health Maintenance Organisation):** Lower premiums but employees must use in-network providers and get referrals.
- **HDHP (High-Deductible Health Plan):** Lower premiums, higher deductibles. Often paired with an HSA (Health Savings Account).
- **EPO (Exclusive Provider Organisation):** Hybrid of PPO and HMO. In-network only, but no referrals needed.

## Alternatives for small foreign companies

If you're not ready to set up a group health plan, consider:

- **ICHRA (Individual Coverage HRA):** Reimburse employees tax-free for their own individual health insurance. No minimum group size. You set the budget.
- **QSEHRA (Qualified Small Employer HRA):** For companies with fewer than 50 employees. Set a monthly reimbursement allowance. Employees buy their own plan.
- **Health insurance stipend:** Simpler but less tax-efficient. Pay a monthly stipend for employees to buy their own coverage. The stipend is taxable income.

## Setting up health insurance

1. **Find a broker** who works with small groups and understands foreign-owned companies
2. **Choose plan tier(s)** — most small companies offer 1-2 plan options
3. **Set your contribution level** — industry standard is 50-80% of the employee-only premium
4. **Determine waiting period** — you can require up to 90 days before coverage begins
5. **Communicate clearly** — US employees will have detailed questions about coverage, networks, and costs

## Common mistakes foreign employers make

- Offering no health insurance and losing every US candidate
- Underbudgeting — health insurance often costs more than employers expect
- Not understanding COBRA — when an employee leaves, federal law (COBRA) may require you to offer continued coverage for up to 18 months at the employee's expense
- Ignoring state mandates — some states (Massachusetts, California) have additional requirements beyond the federal ACA

## The bottom line

Health insurance is the single most important benefit for US employees. Budget $6,000-$15,000 per employee per year, find a broker who works with small groups, and offer coverage from day one (or within 90 days). It's the cost of doing business in the US.`,
    faqs: [
      { question: 'Is health insurance required for small US employers?', answer: 'Not legally — the ACA employer mandate only applies to companies with 50+ full-time equivalent employees. But practically, you need to offer health insurance to attract US talent. It\'s a standard expectation.' },
      { question: 'What is an ICHRA and is it good for small foreign companies?', answer: 'An Individual Coverage Health Reimbursement Arrangement (ICHRA) lets you reimburse employees tax-free for individual health insurance premiums. It\'s excellent for small foreign companies — no minimum group size, you control the budget, and employees choose their own plan.' },
      { question: 'How much does employer health insurance cost in the US?', answer: 'For single-employee coverage, expect to pay $500-$700/month as the employer share. For family coverage, $1,300-$1,800/month. Annual cost per employee ranges from roughly $6,000 to $15,000.' },
      { question: 'What is COBRA?', answer: 'COBRA (Consolidated Omnibus Budget Reconciliation Act) requires employers with 20+ employees to offer departing employees the option to continue their health insurance for up to 18 months. The former employee pays the full premium — you don\'t subsidize it — but you must administer it.' },
    ],
  },
  'registered-agent-guide': {
    title: 'Registered Agents: What They Do, Why You Need One, and How to Choose',
    excerpt: 'Every US entity needs a registered agent in its state of incorporation — and in every state where it operates. Here\'s what they actually do and how to choose one.',
    category: 'Entity Formation',
    date: '2026-02-15',
    readTime: '7 min read',
    content: `A registered agent is one of those requirements that sounds trivial but can cause real problems if you get it wrong. Every US business entity must designate a registered agent in every state where it's registered. For foreign companies without a US office, this is often the first service you'll set up.

## What a registered agent does

A registered agent is a person or company designated to receive legal and official documents on behalf of your business. These include:

- Service of process (lawsuits, subpoenas)
- State correspondence (annual report notices, tax notices)
- IRS notices forwarded to the state-registered address
- Secretary of State communications
- Compliance reminders

The registered agent must have a physical address in the state (not a P.O. box) and be available during normal business hours to accept documents.

## Why foreign companies need a registered agent service

If you don't have a US office or US-based officer, you need a professional registered agent service. You can't use a P.O. box, a virtual office, or a UK address.

**What happens if you don't have one (or if your agent fails):**

- You could miss being served in a lawsuit — resulting in a default judgment against you
- The state may revoke your entity's good standing
- You could miss tax filing deadlines or compliance notices
- Re-registering after administrative dissolution is more expensive and time-consuming

## How to choose a registered agent

**What to look for:**

- Physical presence in every state where you need coverage
- Same-day digital forwarding of received documents
- Annual report reminder service
- Compliance tracking dashboard
- Transparent pricing with no hidden fees

**What it costs:**

- Single state: $100-300/year
- Multi-state (per state): $75-200/year with volume discounts
- Most services include document scanning and digital delivery

**Reputable providers:**

- CT Corporation (oldest, most established — used by large multinationals)
- CSC Global (similar to CT — strong for multi-state coverage)
- Northwest Registered Agent (popular with startups — good dashboard, competitive pricing)
- Registered Agents Inc (budget-friendly, solid for small companies)

## Common mistakes

- Using a personal address — if you move, you need to update the state filing
- Using a virtual office address — many states don't allow this for registered agents
- Forgetting to update when you change providers — the old agent will stop accepting mail, and you won't know
- Not registering an agent in every state where you have employees — each state requires its own registered agent

## The bottom line

A registered agent is a small cost ($100-300/year per state) that prevents large problems. Choose a professional service, set it up when you form your entity, and make sure it covers every state where you operate.`,
    faqs: [
      { question: 'Can I be my own registered agent?', answer: 'Technically yes, if you have a physical US address in the state and are available during business hours. But for foreign companies without a permanent US presence, a professional registered agent service is the practical choice.' },
      { question: 'What happens if I miss a lawsuit notice because I don\'t have a registered agent?', answer: 'If you\'re not properly served because you lack a registered agent, the court may enter a default judgment against your company — meaning you lose the case without ever knowing about it. This is one of the biggest risks of not having a reliable agent.' },
      { question: 'Do I need a registered agent in every state where I have employees?', answer: 'Yes. You must register as a foreign entity in each state where you operate, and each state registration requires a designated registered agent with a physical address in that state.' },
    ],
  },
  'ein-application-foreign-companies': {
    title: 'How to Get an EIN as a Foreign Company (Without an SSN)',
    excerpt: 'Foreign applicants can\'t use the IRS online EIN tool. Here\'s the step-by-step process for getting your Employer Identification Number by fax or mail.',
    category: 'Entity Formation',
    date: '2026-02-10',
    readTime: '8 min read',
    content: `An Employer Identification Number (EIN) is the US equivalent of a company tax reference number. You need one before you can open a bank account, run payroll, file tax returns, or do almost anything as a US business entity.

The problem for foreign companies: the IRS online EIN application requires a US Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). Most foreign applicants have neither.

## The process for foreign applicants

### Step 1: Form your US entity first
You need a legally formed US entity (LLC or C-Corp) before applying for an EIN. The EIN is issued to the entity, not to you personally.

### Step 2: Complete Form SS-4
Download IRS Form SS-4 (Application for Employer Identification Number). Key fields for foreign applicants:

- **Line 1:** Legal name of the entity as registered with the state
- **Line 3:** Executor, administrator, or "responsible party" — this should be a director or officer of the foreign parent company
- **Line 7b:** SSN or ITIN — write "Foreign" if the responsible party doesn't have one
- **Line 8a-8b:** LLC or Corporation, depending on your entity type
- **Line 10:** Reason for applying — check "Started new business"
- **Line 18:** Check "Yes" if the entity has a foreign owner

### Step 3: Submit by fax (preferred) or mail

**By fax:** Fax the completed SS-4 to the IRS at (855) 215-1627 (for applicants outside the US). The IRS will fax back your EIN within 4-6 weeks.

**By mail:** Mail to Internal Revenue Service, Attn: EIN International Operation, Cincinnati, OH 45999. Processing takes 8-12 weeks.

**By phone:** Call the IRS Business & Specialty Tax Line at (267) 941-1099 (not a toll-free number). Available Monday-Friday, 6am-11pm Eastern Time. A representative can issue an EIN over the phone if they can verify your information. This is the fastest method but can be difficult to reach.

### Step 4: Receive and secure your EIN

Your EIN is a 9-digit number in the format XX-XXXXXXX. Once issued, it never expires and is never reissued. Treat it like a company registration number — you'll use it on every US tax filing, bank account application, and payroll setup.

## Timeline expectations

| Method | Processing time | Notes |
|--------|----------------|-------|
| Phone | Same day | Hard to reach, limited hours |
| Fax | 4-6 weeks | Most reliable for foreign applicants |
| Mail | 8-12 weeks | Slowest, no tracking |

## Common problems

- **Online application rejected:** The IRS online tool requires an SSN/ITIN. Foreign applicants without one must use fax, mail, or phone.
- **Wrong responsible party:** The IRS wants a natural person (not a company) as the "responsible party." Use a director or officer name.
- **Fax not received:** The IRS fax system is notoriously unreliable. If you don't receive a response within 6 weeks, call to check status.
- **Multiple EINs:** If you form multiple entities, each needs its own EIN. Don't reuse an EIN across entities.

## What you can't do without an EIN

- Open a US business bank account
- Run payroll or file payroll tax returns
- File Form 5472 or any corporate tax return
- Apply for state tax registrations
- Set up health insurance or 401(k) plans

## Tips for speeding up the process

- Have your entity formation documents ready before calling or faxing
- Use a US-based attorney or accountant to call the IRS on your behalf — they can often get an EIN issued on the spot
- If using fax, send it early in the week (Monday or Tuesday) for fastest processing
- Keep a copy of the faxed SS-4 and the fax confirmation page

## The bottom line

Getting an EIN as a foreign company takes longer than most expect. Plan for 4-8 weeks by fax, start the process immediately after entity formation, and don't assume you can use the online tool without an SSN.`,
    faqs: [
      { question: 'Can a foreign company get an EIN online?', answer: 'No — the IRS online EIN application requires a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). Foreign applicants without either must apply by fax, mail, or phone.' },
      { question: 'How long does it take to get an EIN by fax?', answer: 'Typically 4-6 weeks. The IRS faxes back the EIN to the number provided on your Form SS-4. If you don\'t receive it within 6 weeks, call the IRS to check status.' },
      { question: 'Do I need a separate EIN for each US entity?', answer: 'Yes. Each legal entity (LLC, C-Corp, etc.) requires its own EIN. You cannot reuse an EIN across entities, even if they\'re under the same foreign parent.' },
      { question: 'Can my UK accountant apply for a US EIN on my behalf?', answer: 'Yes, with proper authorization. A Form 2848 (Power of Attorney) allows a designated representative to apply for and receive the EIN. US-based attorneys or CPAs can often get it issued immediately by phone.' },
    ],
  },
  'transfer-pricing-foreign-subsidiaries': {
    title: 'Transfer Pricing for Foreign-Owned US Subsidiaries: A Practical Guide',
    excerpt: 'If your UK parent company charges fees, provides loans, or shares services with your US subsidiary, you need a transfer pricing policy. Here\'s how to set one up without overcomplicating it.',
    category: 'Compliance',
    date: '2026-02-05',
    readTime: '11 min read',
    content: `Transfer pricing is one of those topics that sounds like it's only for large multinationals. It's not. If your UK parent company and your US subsidiary have any financial transactions between them — management fees, IP licences, shared services, loans, even expense reimbursements — the IRS expects those transactions to be priced at "arm's length."

## What is arm's-length pricing?

Arm's-length pricing means the price would be the same as if the two companies were unrelated. If your UK parent charges the US subsidiary a management fee, it should be roughly what an independent company would charge for the same service.

The IRS uses this principle to prevent companies from shifting profits between jurisdictions to reduce their overall tax burden.

## Why it matters for small foreign-owned companies

You might think: "We're a 10-person startup, not a multinational. Transfer pricing doesn't apply to us." It does. The IRS doesn't have a size threshold for transfer pricing rules. If you have intercompany transactions and a foreign owner, you need documentation.

**What triggers scrutiny:**

- Form 5472 disclosing large intercompany payments
- US subsidiary consistently showing losses while the parent is profitable
- Significant management fees without a clear services agreement
- Intercompany loans with no interest or below-market interest rates
- IP being used by the US entity without a licensing agreement

## Common intercompany transactions

- **Management fees:** The parent charges for executive oversight, strategy, HR support, or accounting
- **IP licensing:** The US entity uses the parent's software, trademarks, or technology
- **Shared services:** IT, marketing, finance, or legal shared across entities
- **Intercompany loans:** The parent funds the US entity's operations or startup costs
- **Cost-sharing arrangements:** Both entities share development costs for jointly used assets
- **Expense reimbursements:** One entity pays for something on behalf of the other

## How to set up a basic transfer pricing policy

### 1. Document all intercompany transactions
List every payment, loan, service, or asset shared between the foreign parent and the US subsidiary.

### 2. Establish arm's-length pricing
For each transaction type, determine what an unrelated party would charge:

- **Management fees:** Typically 3-7% of the subsidiary's revenue or costs, depending on services provided
- **IP licensing:** Based on comparable licensing agreements in the market
- **Intercompany loans:** Use the applicable federal rate (AFR) as a minimum interest rate
- **Cost-sharing:** Based on each entity's expected benefits from the shared asset

### 3. Create an intercompany agreement
Put it in writing. A simple intercompany services agreement should include:

- Services provided and by whom
- Pricing methodology and basis
- Payment terms
- Term and termination provisions
- Arm's-length statement

### 4. Maintain contemporaneous documentation
The IRS expects you to have documentation ready at the time of filing — not created after an audit begins. At minimum, keep:

- The intercompany agreement
- A description of the pricing methodology
- Comparable market data supporting the pricing
- Annual review and any adjustments

## Simplified approach for small companies

The IRS has provided some relief for small foreign-owned entities. The 2026 guidance clarifies that for entities with annual intercompany transactions under $500,000, simplified documentation may be acceptable. This doesn't eliminate the requirement — it reduces the depth of analysis needed.

**Minimum documentation for small entities:**

- Written intercompany agreement
- Description of services and pricing method
- Statement that pricing is arm's-length
- Explanation of how the price was determined

## Penalties for non-compliance

- **Section 6662(e) penalty:** 20% of the tax underpayment attributable to transfer pricing adjustments
- **Section 6662(h) penalty:** 40% penalty if the price is 400% or more (or 25% or less) of the arm's-length price
- **Penalty protection:** Maintaining contemporaneous documentation provides penalty protection even if the IRS disagrees with your pricing

## The bottom line

Transfer pricing isn't just for big companies. If your UK parent and US subsidiary have any financial relationship, put a simple intercompany agreement in place, price transactions at arm's length, and document everything. The cost of getting it right upfront is a fraction of the cost of an IRS adjustment.`,
    faqs: [
      { question: 'Do small foreign-owned companies need transfer pricing documentation?', answer: 'Yes. The IRS has no size threshold for transfer pricing rules. Any foreign-owned US entity with intercompany transactions needs documentation supporting arm\'s-length pricing. The 2026 IRS guidance provides simplified requirements for entities with under $500K in annual intercompany transactions.' },
      { question: 'What is the minimum interest rate for an intercompany loan?', answer: 'The IRS publishes Applicable Federal Rates (AFR) monthly. Intercompany loans must charge at least the AFR for the loan\'s term to be considered arm\'s length. Charging no interest (or below-AFR interest) on an intercompany loan can result in deemed income and penalties.' },
      { question: 'What happens if the IRS challenges my transfer pricing?', answer: 'The IRS can adjust the pricing and assess additional tax on the US subsidiary. Penalties of 20-40% of the underpayment may apply. However, if you maintained contemporaneous documentation, you get penalty protection — even if the IRS ultimately disagrees with your methodology.' },
    ],
  },
  'at-will-employment-european-employers': {
    title: 'At-Will Employment: What European Employers Get Wrong About US Hiring (and Firing)',
    excerpt: 'The US has no statutory notice periods, no unfair dismissal protections, and no redundancy pay requirements. But "at-will" doesn\'t mean "no rules." Here\'s what you actually need to know.',
    category: 'Benefits',
    date: '2026-01-30',
    readTime: '9 min read',
    content: `If you've only ever employed people in the UK or EU, the US concept of "at-will employment" will feel radical. No statutory notice periods. No unfair dismissal claims. No redundancy consultation. Either party can end the employment relationship at any time, for any lawful reason — or no reason at all.

But the "lawful reason" qualifier is where European employers get tripped up.

## What at-will actually means

In 49 out of 50 US states (Montana is the exception), employment is presumed to be "at-will." This means:

- The employer can terminate the employee at any time, with or without notice
- The employee can resign at any time, with or without notice
- No reason is required for termination (but some reasons are illegal)
- No severance is required (unless contractually promised)

## What at-will does NOT mean

At-will is not a blank cheque. You cannot terminate an employee for:

- **Discrimination:** Race, colour, religion, sex, national origin, age (40+), disability, genetic information, pregnancy, sexual orientation (in most jurisdictions)
- **Retaliation:** For filing a complaint, reporting safety violations, participating in an investigation, or exercising a legal right
- **Protected activity:** Jury duty, military service, voting, filing a workers' compensation claim
- **Violation of public policy:** Refusing to break the law, whistleblowing
- **Breach of contract:** If you've made specific promises in an offer letter or handbook

## Common mistakes European employers make

### 1. Treating US employees like UK employees
European employers often try to replicate UK-style employment contracts in the US — with notice periods, probationary periods, and detailed termination procedures. This can accidentally **weaken** your at-will position by creating contractual obligations that wouldn't otherwise exist.

### 2. Creating implied contracts
Language in offer letters or employee handbooks can create implied contracts. Phrases like "permanent position," "you will be terminated only for cause," or detailed progressive discipline policies can be interpreted as contractual commitments that override at-will.

### 3. Not documenting performance issues
While you can legally terminate without reason, it's best practice to document performance issues. If a terminated employee claims discrimination, documented performance problems provide a legitimate, non-discriminatory reason for the termination.

### 4. Offering excessive severance
European employers sometimes offer generous severance packages out of habit. In the US, there's no statutory requirement for severance. If you do offer it, get a signed release of claims in return — that's the primary purpose of US severance agreements.

## Best practices for European employers

1. **Use "at-will" language** in every offer letter and employment agreement. State explicitly that employment is at-will and can be terminated by either party at any time.
2. **Avoid detailed termination procedures** in your handbook — general guidelines are fine, but mandatory progressive discipline policies can create obligations
3. **Document performance issues** in writing, even if you don't need a "reason" to terminate
4. **Get a release** when providing severance — a signed agreement waiving the employee's right to sue
5. **Consult a US employment lawyer** before terminating anyone in a protected class (over 40, disabled, pregnant, minority, recently complained about something)
6. **Check state-specific rules** — some states require final paychecks on the same day as termination (California), while others allow until the next regular payday

## State variations that matter

| Rule | California | New York | Texas |
|------|-----------|----------|-------|
| Final paycheck timing | Same day if terminated | Next regular payday | Within 6 days |
| Accrued PTO payout | Required | Not required (unless policy says so) | Not required |
| Non-compete enforceable? | No (banned) | Limited | Yes |
| Pay transparency required? | Yes | Yes (NYC) | No |

## The bottom line

At-will employment gives US employers flexibility that doesn't exist in Europe. But it's not unregulated — anti-discrimination laws, retaliation protections, and state-specific rules create real constraints. The biggest risk for European employers is accidentally creating contractual obligations they don't intend.`,
    faqs: [
      { question: 'Can I fire a US employee for no reason?', answer: 'In at-will states (49 out of 50), yes — you can terminate without giving a reason. But you cannot terminate for an illegal reason (discrimination, retaliation, violation of public policy). It\'s best practice to document a legitimate reason even if you\'re not legally required to give one.' },
      { question: 'Do US employees get notice periods?', answer: 'Not by default. At-will employment means either party can end the relationship without notice. However, the federal WARN Act requires 60 days\' notice for mass layoffs (100+ employees). Some states have their own WARN-equivalent laws with lower thresholds.' },
      { question: 'Should I use UK-style employment contracts for US hires?', answer: 'No. UK-style contracts with fixed terms, notice periods, and detailed termination procedures can create binding obligations that override the flexibility of at-will employment. Use a US-style offer letter that clearly states employment is at-will.' },
      { question: 'Is severance pay required in the US?', answer: 'No. There is no federal or state requirement to provide severance pay. Employers offer severance voluntarily — usually in exchange for a signed release of claims (an agreement that the employee won\'t sue).' },
    ],
  },
  'multi-state-payroll-compliance': {
    title: 'Multi-State Payroll: How to Stay Compliant When Your US Team Is Distributed',
    excerpt: 'Running payroll in multiple states means multiple tax registrations, different withholding rules, and varying employment laws. Here\'s a practical guide for foreign employers.',
    category: 'US Payroll',
    date: '2026-01-25',
    readTime: '10 min read',
    content: `Most foreign companies start with one or two US employees in a single state. Within a year, they often have people in three, four, or five states. Each new state adds compliance complexity — and not just for payroll taxes.

## What changes with each new state

When you hire an employee in a new state, you typically need to:

1. Register as a foreign entity in that state
2. Register for state income tax withholding (if applicable)
3. Register for state unemployment insurance
4. Register for any mandatory state programs (paid family leave, disability insurance, transit tax)
5. Comply with that state's employment laws
6. File quarterly payroll returns in that state

## State income tax withholding

Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire (on earned income), South Dakota, Tennessee, Texas, Washington, and Wyoming.

For the other 41 states (plus D.C.), you must withhold state income tax from employee paychecks. Each state has its own:

- Tax brackets and rates
- Standard deductions and exemptions
- State W-4 form (some use the federal W-4, others have their own)
- Supplemental wage withholding rates

**Key complexity:** If an employee lives in one state and works in another, you may need to withhold in both states (with credits for taxes paid to the work state). Some states have reciprocity agreements that simplify this.

## State unemployment insurance (SUTA)

Every state requires employers to pay state unemployment tax. But rates and wage bases vary enormously:

| State | New employer rate | Wage base |
|-------|------------------|-----------|
| California | 3.4% | $7,000 |
| Texas | 2.7% | $9,000 |
| New York | 4.1% | $12,500 |
| Washington | Varies | $67,600 |
| Florida | 2.7% | $7,000 |
| Massachusetts | 2.42% | $15,000 |
| Colorado | 1.7% | $23,800 |

## Mandatory state programs

Several states require additional employer contributions beyond income tax and SUTA:

- **California SDI (State Disability Insurance):** Employee-paid, but employer must administer
- **New York DBL/PFL (Disability + Paid Family Leave):** Both employer and employee contributions
- **Massachusetts PFML (Paid Family and Medical Leave):** Employer and employee contributions
- **Washington PFML:** Employer and employee contributions
- **Colorado FAMLI:** Employer and employee contributions
- **Oregon Paid Leave:** Employer and employee contributions
- **Connecticut PFML:** Employee-paid, employer must administer

## Employment law variations

This is where multi-state compliance gets genuinely complicated:

**Minimum wage:**
- Federal: $7.25/hour
- California: $16.50/hour
- Washington: $16.66/hour
- New York City: $16.50/hour
- Texas: $7.25/hour (follows federal)

**Overtime rules:**
- Federal (FLSA): Time and a half after 40 hours/week
- California: Also time and a half after 8 hours/day, double time after 12 hours/day

**Paid sick leave:**
- Mandatory in: California, Washington, New York, Massachusetts, Colorado, and many cities
- No state law in: Texas, Florida, Georgia

**Pay transparency:**
- Required in: California, Colorado, New York City, Washington
- Not required in: Texas, Florida, Georgia

## How to manage multi-state payroll

### 1. Use a payroll provider that handles multi-state
Gusto, Rippling, ADP, and Paychex all handle multi-state withholding and filing. But verify that they will register you with each state — some require you to register first.

### 2. Keep a state compliance matrix
Maintain a spreadsheet tracking your obligations in each state: tax registrations, withholding accounts, SUTA accounts, mandatory programs, minimum wage, and employment law requirements.

### 3. Register proactively
Don't wait until you've run payroll to register with a new state. Register before the employee's first day — late registration can trigger penalties and back-dating of tax obligations.

### 4. Budget for the variation
A $100K salary costs different amounts in different states:

| Cost component | California | Texas | New York |
|---------------|-----------|-------|----------|
| FICA | $7,650 | $7,650 | $7,650 |
| FUTA | $42 | $42 | $42 |
| SUTA | $238 | $243 | $513 |
| State disability/PFL | ~$1,200 | $0 | ~$800 |
| Workers' comp | ~$500 | ~$300 | ~$700 |
| **Total employer burden** | **~$9,630** | **~$8,235** | **~$9,705** |

## The bottom line

Multi-state payroll isn't just about taxes — it's about understanding 50 different sets of employment laws. The tax part can be automated with a good payroll provider. The employment law part requires attention and, often, specialist advice.`,
    faqs: [
      { question: 'Do I need a separate state tax account for each state where I have employees?', answer: 'Yes. You need to register for income tax withholding and state unemployment insurance in each state where you have employees. Each state issues its own employer account numbers.' },
      { question: 'What if my employee moves to a different state?', answer: 'You need to register in the new state, update your payroll withholding, and begin complying with the new state\'s employment laws. Depending on the state, this can significantly change your cost and compliance obligations.' },
      { question: 'Can my payroll provider handle multi-state registrations?', answer: 'Many providers (Gusto, Rippling, ADP) offer state registration as a service, but it varies. Some handle it automatically, others require you to register first and then provide the account numbers. Verify with your provider before assuming they handle it.' },
      { question: 'Which state\'s employment laws apply if an employee works remotely?', answer: 'Generally, the employment laws of the state where the employee physically performs the work apply. This means remote employees are subject to the laws of the state where they live and work — not where your company is incorporated.' },
    ],
  },
  'corporate-transparency-act-foreign-companies': {
    title: 'The Corporate Transparency Act: New Reporting Rules for Foreign-Owned US Entities',
    excerpt: 'The Corporate Transparency Act requires most US entities to report beneficial ownership information to FinCEN. Foreign-owned companies have specific obligations — here\'s what you need to know.',
    category: 'Compliance',
    date: '2026-01-20',
    readTime: '9 min read',
    content: `The Corporate Transparency Act (CTA) introduced a new federal reporting requirement for most US business entities. Starting in 2024, companies must file Beneficial Ownership Information (BOI) reports with the Financial Crimes Enforcement Network (FinCEN). For foreign-owned US entities, the rules are particularly relevant — and the penalties for non-compliance are significant.

## What the CTA requires

Most US LLCs, corporations, and similar entities must report their beneficial owners to FinCEN. A "beneficial owner" is any individual who:

- Directly or indirectly exercises **substantial control** over the entity, OR
- Owns or controls at least **25%** of the ownership interests

## Why this matters for foreign-owned companies

If your UK parent company owns 100% of a US LLC or C-Corp, FinCEN needs to know who the real people are behind that ownership chain. This means reporting:

- The individual(s) at the foreign parent who exercise substantial control over the US entity
- Any individual who owns 25% or more of the foreign parent (if that parent owns the US entity)
- The person who filed the formation documents (the "company applicant")

**You can't just report the foreign parent company.** FinCEN wants names, dates of birth, addresses, and identification documents of the actual human beings.

## What you need to report

For each beneficial owner:

- Full legal name
- Date of birth
- Current residential address
- Unique identifying number from a passport, driver's licence, or state ID (plus an image of the document)

For the reporting company:

- Full legal name
- Any trade names or DBAs
- Current US address
- State of formation
- IRS Taxpayer Identification Number (EIN)

## Filing deadlines

| Entity type | Deadline |
|------------|---------|
| Existing entities (formed before 2024) | January 1, 2025 |
| Entities formed in 2024 | Within 90 days of formation |
| Entities formed in 2025+ | Within 30 days of formation |
| Updates to reported information | Within 30 days of the change |

## Exemptions

Some entities are exempt, including:

- Companies with more than 20 full-time US employees, more than $5 million in US revenue, and a physical US office (the "large operating company" exemption)
- Registered investment companies and certain regulated entities
- Tax-exempt organisations

**Most small foreign-owned US entities do NOT qualify for an exemption** and must file.

## Penalties

- **Civil penalties:** Up to $500 per day for each day a violation continues
- **Criminal penalties:** Up to $10,000 fine and/or up to 2 years imprisonment for willful violations
- **False information:** Knowingly providing false information carries the same criminal penalties

## How to file

BOI reports are filed electronically through FinCEN's BOI E-Filing system (boiefiling.fincen.gov). There is no fee to file.

**Practical steps for foreign-owned entities:**

1. Identify all beneficial owners by tracing the ownership chain through to natural persons
2. Collect required information and ID documents from each beneficial owner
3. File the BOI report within the applicable deadline
4. Set up a process to file updates within 30 days of any changes (new directors, ownership changes, address changes)

## Common complications for foreign companies

- **Ownership chains:** If the UK parent is itself owned by another entity, you may need to trace ownership further until you reach natural persons
- **Foreign identification:** FinCEN accepts foreign passports and government-issued IDs — beneficial owners don't need US identification
- **Multiple entities:** If you have multiple US entities, each one must file its own BOI report
- **Privacy concerns:** Some beneficial owners may be uncomfortable providing personal information to a US government agency. FinCEN maintains this data in a secure, non-public database — it's not publicly available
- **Changes in control:** If directors or officers change at the parent company, you have 30 days to update the BOI report

## The bottom line

The Corporate Transparency Act adds a new compliance requirement for virtually all foreign-owned US entities. It's not complex to file, but the deadlines are strict and the penalties are significant. Add BOI reporting to your US compliance checklist alongside Form 5472, payroll taxes, and state registrations.`,
    faqs: [
      { question: 'Does the Corporate Transparency Act apply to foreign-owned LLCs?', answer: 'Yes. Most foreign-owned US LLCs must file a Beneficial Ownership Information report with FinCEN, unless they meet one of the limited exemptions (such as the large operating company exemption requiring 20+ US employees and $5M+ US revenue).' },
      { question: 'Can I report the foreign parent company as the beneficial owner?', answer: 'No. FinCEN requires the identity of the natural persons (human beings) who ultimately own or control the entity. You must trace the ownership chain through any parent companies until you reach individuals.' },
      { question: 'Is the BOI report publicly available?', answer: 'No. Unlike the UK\'s Companies House, FinCEN\'s BOI database is not publicly accessible. The information is available only to law enforcement, certain financial institutions (with the company\'s consent), and authorised government agencies.' },
      { question: 'What happens if a director at my UK parent company changes?', answer: 'If the change affects a person reported as a beneficial owner (because they exercise substantial control), you must file an updated BOI report within 30 days of the change.' },
    ],
  },
  'us-contractor-vs-employee-foreign-companies': {
    title: 'Contractor vs Employee in the US: Classification Rules Foreign Companies Must Understand',
    excerpt: 'Misclassifying a US worker as an independent contractor when they should be an employee can trigger back taxes, penalties, and lawsuits. Here\'s how to get it right.',
    category: 'Compliance',
    date: '2026-01-15',
    readTime: '10 min read',
    content: `Many foreign companies entering the US market start by hiring contractors. It's faster, cheaper, and avoids the need for entity formation, payroll, and benefits. But if the IRS or a state agency decides your "contractor" is actually an employee, the consequences are severe.

## Why misclassification matters

When you classify a worker as an independent contractor, you:

- Don't withhold income tax
- Don't pay FICA (7.65%)
- Don't pay FUTA or SUTA
- Don't provide workers' compensation insurance
- Don't provide benefits (health insurance, 401(k), paid leave)

If the IRS reclassifies that worker as an employee, you owe all of the above — retroactively. Plus penalties and interest.

## The IRS test: Behavioural, financial, and relationship

The IRS uses three categories to determine worker classification:

### Behavioural control
Does the company control how the work is done?

- **Employee indicators:** Company provides training, sets work hours, dictates methods, requires on-site presence
- **Contractor indicators:** Worker controls when, where, and how they work; uses own methods; receives minimal instruction

### Financial control
Does the company control the business aspects of the work?

- **Employee indicators:** Company provides tools and equipment, reimburses expenses, pays by the hour/week/month, worker has no opportunity for profit or loss
- **Contractor indicators:** Worker has significant investment in equipment, can work for multiple clients, has unreimbursed expenses, bills by project, can profit or lose money

### Type of relationship
What is the nature of the working arrangement?

- **Employee indicators:** Written contract describes employment, worker receives benefits, relationship is indefinite/ongoing, work is a key aspect of the company's business
- **Contractor indicators:** Written contract describes independent relationship, worker provides services for a defined project, worker provides similar services to others

## State tests can be stricter

Several states use stricter tests than the IRS:

**California (ABC Test under AB5):**
A worker is presumed to be an employee unless the hiring entity can prove all three:

- A — The worker is free from control and direction
- B — The worker performs work outside the usual course of the hiring entity's business
- C — The worker has an independently established business of that kind

**Prong B is the killer.** If you're a software company and you hire a software developer as a contractor, you'll likely fail the ABC test in California — because their work is within the usual course of your business.

**Other states with stricter tests:** Massachusetts, New Jersey, Illinois.

## Consequences of misclassification

| Consequence | Amount |
|------------|--------|
| Back employment taxes (FICA, FUTA, SUTA) | 7.65%+ of all wages paid |
| IRS penalty for failure to withhold | 1.5% of wages + 20% of employee FICA |
| State back taxes and penalties | Varies by state |
| Unpaid benefits (health insurance, 401(k), overtime, etc.) | Varies |
| Workers' compensation violations | Varies — can include criminal penalties |
| Employee lawsuit for misclassification | Back pay, benefits, damages, legal fees |

## Safe practices for foreign companies

### 1. Use a written independent contractor agreement
Include: scope of work, project timeline, payment terms, statement that the contractor is responsible for their own taxes, intellectual property assignment.

### 2. Don't control how the work is done
You can define what needs to be delivered. You can't dictate hours, methods, tools, or location.

### 3. Allow the contractor to work for others
Requiring exclusivity is a strong indicator of employment.

### 4. Pay by project, not by hour
Fixed-fee projects with defined deliverables support contractor status. Hourly billing that mimics a salary does not.

### 5. Don't provide company tools, email, or titles
Giving a contractor a company laptop, email address, business cards, or a "VP of" title makes them look like an employee.

### 6. Limit the engagement duration
Long-term, indefinite engagements look like employment. Define a project scope and end date.

## When to convert a contractor to an employee

If you find yourself doing any of the following, it's time to convert:

- Setting their hours or requiring specific availability
- Providing training on how to do the work
- Including them in team meetings and company culture
- Keeping them engaged for more than 6-12 months continuously
- Relying on them as a core part of your team

## The bottom line

Using contractors can be a valid short-term strategy, but the line between contractor and employee is closely scrutinised in the US. When in doubt, classify as an employee — the cost of compliance is always less than the cost of misclassification.`,
    faqs: [
      { question: 'What is the ABC test for contractor classification?', answer: 'Used in California and several other states, the ABC test presumes a worker is an employee unless the company proves: (A) the worker is free from control, (B) the work is outside the company\'s usual business, and (C) the worker has an independently established business. Prong B is the most difficult to satisfy.' },
      { question: 'Can I hire US contractors without a US entity?', answer: 'Yes. You can engage US-based independent contractors without a US entity. You\'ll need to collect a W-9 form and issue a 1099-NEC at year-end for payments of $600 or more. However, misclassification risk still applies — if the contractor should be an employee, you\'ll need an entity (or an EOR) to employ them properly.' },
      { question: 'What happens if the IRS reclassifies my contractor as an employee?', answer: 'You\'ll owe back employment taxes (FICA, FUTA), penalties for failure to withhold, and potentially back benefits. The IRS may assess penalties of 1.5% of wages plus 20% of the employee\'s FICA share, in addition to the taxes owed.' },
      { question: 'How long can I keep someone as a contractor before they become an employee?', answer: 'There\'s no fixed time limit, but long-term, indefinite engagements are a red flag. If a contractor has been working with you continuously for 6-12+ months on ongoing tasks (rather than a defined project), the relationship increasingly looks like employment.' },
    ],
  },
  'us-business-bank-account-foreign-company': {
    title: 'Opening a US Business Bank Account as a Foreign Company: What to Expect',
    excerpt: 'US banks are cautious with foreign-owned entities. Here\'s what documentation you need, which banks work with foreign companies, and how to avoid common delays.',
    category: 'Entity Formation',
    date: '2026-01-10',
    readTime: '8 min read',
    content: `Opening a US business bank account is one of the first practical steps after forming your US entity — and one of the most frustrating. US banks are heavily regulated, and foreign-owned entities receive extra scrutiny. Many banks will simply decline your application.

## Why banks are cautious

US banks operate under anti-money laundering (AML) and Know Your Customer (KYC) regulations that require them to verify the identity and legitimacy of all account holders. Foreign-owned entities trigger additional due diligence because:

- The beneficial owners may not have US identification
- The bank can't easily verify foreign corporate documents
- Correspondent banking relationships with foreign countries add regulatory risk
- The bank must report certain foreign-owned accounts to regulatory agencies

## What you'll need

**Minimum documentation for most banks:**

- Certificate of Formation or Articles of Incorporation (from your state of incorporation)
- EIN confirmation letter (IRS Letter 147C or CP575)
- Operating Agreement (for LLCs) or Corporate Bylaws (for C-Corps)
- Corporate resolution authorising the account opening and designating signatories
- Government-issued photo ID for all signatories (passport accepted)
- Proof of US business address (some banks require this; a registered agent address may or may not be accepted)
- Completed W-8BEN-E form (Certificate of Status of Beneficial Owner for US Tax Withholding)

**Additional documents some banks may require:**

- Formation documents of the foreign parent company (certified and apostilled)
- Certificate of Good Standing (from the state of incorporation)
- Business plan or description of planned US operations
- Reference letter from your existing bank
- Source of funds documentation

## Which banks work with foreign-owned companies

Not every bank will accept foreign-owned entities as customers. Here's what to expect:

**More likely to accept:**
- Mercury — popular with startups, online onboarding, accepts foreign founders
- Relay — designed for small businesses, reasonable documentation requirements
- SVB (Silicon Valley Bank) — if you have VC backing or are in the tech sector
- Chase — will accept foreign-owned entities but requires an in-person visit at a branch
- HSBC — if the parent already banks with HSBC internationally

**Less likely to accept:**
- Most local community banks
- Credit unions
- Banks without international banking departments

## The in-person requirement

Some banks require at least one authorised signatory to visit a US branch in person to complete the account opening. This can be a logistical challenge for foreign companies.

**Workarounds:**
- Choose a bank that allows full remote onboarding (Mercury, Relay)
- Time the branch visit with another US trip (entity formation, employee onboarding)
- Authorise a US-based person (attorney, accountant) as a signatory
- Use a service that facilitates account opening on your behalf

## Timeline

| Step | Duration |
|------|----------|
| Gathering documentation | 1-2 weeks |
| Bank application and review | 1-3 weeks |
| Additional due diligence | 1-2 weeks (if required) |
| Account activation | 1-3 business days |
| **Total** | **3-8 weeks** |

## Common reasons for rejection

- Incomplete documentation (most common)
- Unable to verify beneficial owners
- Business type flagged as high-risk (cryptocurrency, cannabis, money services)
- No US business address or operations
- Bank's compliance team cannot verify the foreign parent

## Tips for a smooth process

1. **Have your EIN before applying** — most banks won't process the application without it
2. **Prepare all documents in advance** — including apostilled foreign parent documents if needed
3. **Choose a bank known to work with foreign entities** — don't waste time with banks that will decline you
4. **Be transparent about your structure** — banks appreciate clarity about ownership, purpose, and expected transaction volumes
5. **Open the account before you need it** — don't wait until you need to run payroll next week
6. **Start with a simple checking account** — you can add credit cards, merchant accounts, and other products later

## The bottom line

Opening a US bank account as a foreign company is achievable but requires patience and preparation. Budget 3-8 weeks, choose a bank that works with international clients, and have all your documentation ready before you start the application.`,
    faqs: [
      { question: 'Can I open a US bank account without visiting the US?', answer: 'Yes, with certain banks. Mercury and Relay both offer fully remote onboarding for foreign-owned entities. Larger banks like Chase typically require an in-person visit. Check the bank\'s requirements before applying.' },
      { question: 'Do I need an EIN before opening a US bank account?', answer: 'Yes. Almost every US bank requires an EIN to open a business account. Since EINs can take 4-8 weeks for foreign applicants, start the EIN process immediately after entity formation.' },
      { question: 'Can I use my registered agent\'s address as my bank address?', answer: 'Some banks accept a registered agent address, but many require a physical business address where operations are conducted. If you don\'t have a US office, you may need a virtual office address (separate from your registered agent) for banking purposes.' },
      { question: 'What is a W-8BEN-E form?', answer: 'A Certificate of Status of Beneficial Owner for US Tax Withholding and Reporting. Banks require this from entities with foreign ownership to determine tax withholding obligations on US-source income (such as interest earned on the account).' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug];
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} — US Payroll Guide`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <article className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="mb-2">
            <Link href="/resources/blog" className="text-sm text-text-muted hover:text-primary">
              &larr; Blog
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-text-muted">{post.date}</span>
            <span className="text-xs text-text-muted">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="answer-block">
            <p>{post.excerpt}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose-custom mt-10">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i}>{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('### ')) {
                return <h3 key={i}>{block.replace('### ', '')}</h3>;
              }
              if (block.startsWith('| ')) {
                const rows = block.split('\n').filter(r => !r.startsWith('|--'));
                const headers = rows[0]?.split('|').filter(Boolean).map(h => h.trim());
                const dataRows = rows.slice(1);
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          {headers?.map((h, j) => (
                            <th key={j} className="text-left py-2 px-3 border-b-2 border-border font-semibold text-text">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => (
                          <tr key={ri}>
                            {row.split('|').filter(Boolean).map((cell, ci) => (
                              <td key={ci} className="py-2 px-3 border-b border-border text-text-secondary">{cell.trim()}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (block.startsWith('- ')) {
                return (
                  <ul key={i}>
                    {block.split('\n').map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (block.match(/^\d+\. /)) {
                return (
                  <ol key={i} className="list-decimal">
                    {block.split('\n').map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s\*\*/, '').replace(/\*\*/, ' — ')}</li>
                    ))}
                  </ol>
                );
              }
              // Handle bold text
              const formatted = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
            })}
          </div>
        </AnimatedSection>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-text mb-6">Frequently asked questions</h2>
              <FaqAccordion items={post.faqs} />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: post.faqs.map((faq) => ({
                      '@type': 'Question',
                      name: faq.question,
                      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                    })),
                  }),
                }}
              />
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-8 bg-surface rounded-2xl text-center">
            <p className="text-lg font-semibold text-text mb-2">Need help with this?</p>
            <p className="text-text-secondary mb-4">Get specialist advice from people who do this every day.</p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:no-underline"
            >
              Talk to a US Payroll Specialist
            </a>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
