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
