import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ComplianceCallout } from '@/components/ComplianceCallout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foreign-Owned Entity Compliance | US Tax Obligations for Foreign Companies',
  description: 'Complete guide to US tax compliance for foreign-owned entities. Form 5472, pro forma 1120, transfer pricing, intercompany transactions, FIRPTA, and penalty schedules explained.',
};

const tocItems = [
  { id: 'why-this-matters', label: 'Why this matters' },
  { id: 'form-5472', label: 'Form 5472 overview' },
  { id: 'pro-forma-1120', label: 'Pro forma Form 1120' },
  { id: 'reportable-transactions', label: 'Reportable transactions' },
  { id: 'transfer-pricing', label: 'Transfer pricing' },
  { id: 'intercompany-logging', label: 'Intercompany transaction logging' },
  { id: 'firpta', label: 'FIRPTA basics' },
  { id: 'penalty-schedule', label: 'Penalty schedule' },
  { id: 'staying-compliant', label: 'How to stay compliant' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Does my US entity need to file Form 5472 if the only transaction was the parent company funding the bank account?',
    answer: 'Yes. A capital contribution from a foreign parent to a US entity is a reportable transaction. Even if no goods or services were exchanged, any transfer of money or property between the US entity and its foreign related party must be reported on Form 5472. This is the most commonly missed filing trigger for newly formed foreign-owned entities.',
  },
  {
    question: 'My US entity is an LLC. Do I still need to file a corporate tax return?',
    answer: 'Yes — a pro forma Form 1120 is required even though a single-member LLC owned by a foreign person is a disregarded entity for US tax purposes. The pro forma 1120 serves as the "carrier" for Form 5472. You file it with the items checked to indicate it is a pro forma return and attach your Form 5472(s).',
  },
  {
    question: 'Can the IRS really assess a $25,000 penalty without warning?',
    answer: 'Yes. The $25,000 penalty for failure to file Form 5472 is assessed automatically when the IRS identifies a non-filing. There is no requirement for the IRS to send a warning first. The penalty notice arrives in the post. You then have 90 days to respond before additional penalties begin accruing.',
  },
  {
    question: 'What if I filed my US tax return but forgot to attach Form 5472?',
    answer: 'The penalty still applies. Filing your income tax return (Form 1120) without the required Form 5472 attached is treated the same as not filing Form 5472 at all. You should file a corrected return with the Form 5472 as quickly as possible and consider requesting penalty abatement based on reasonable cause.',
  },
  {
    question: 'Does my US payroll provider handle Form 5472?',
    answer: 'No. US payroll providers (Gusto, ADP, Paychex, Rippling) handle payroll processing, tax withholding, and payroll tax filings. They have no visibility into your corporate ownership structure and no responsibility for Form 5472 or foreign-ownership reporting. You need a separate CPA or tax advisor who specialises in foreign-owned US entities.',
  },
  {
    question: 'What is the filing deadline for Form 5472?',
    answer: 'Form 5472 is filed with your US income tax return. For a calendar-year corporation or LLC filing a pro forma Form 1120, the due date is April 15 (or the next business day). With a 6-month extension (Form 7004), the extended deadline is October 15. The extension is automatic upon filing — but you must actually file it.',
  },
  {
    question: 'Do I need a transfer pricing study?',
    answer: 'If your US entity has transactions with the foreign parent — management fees, cost-sharing arrangements, licensing, loans — the IRS expects these to be priced at arm\'s length. A formal transfer pricing study is not required for very simple arrangements, but contemporaneous documentation of how you determined the pricing is strongly recommended. For material amounts, a benchmarking study prepared by a transfer pricing specialist is the safest approach.',
  },
  {
    question: 'What happens if the foreign parent pays US entity expenses directly?',
    answer: 'This is still a reportable transaction. If the UK parent pays a US vendor on behalf of the US entity, or pays the salary of a US employee directly, this creates an intercompany transaction that must be reported on Form 5472 and properly characterised (as a capital contribution, a loan, or an intercompany charge). Failing to track these transactions is one of the most common compliance gaps.',
  },
];

export default function CompliancePage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <p className="text-accent-warm font-medium text-sm uppercase tracking-wider mb-3">
              Critical Compliance Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Foreign-Owned Entity Compliance: US Tax Obligations Most Companies Miss
            </h1>
            {/* Answer-first block */}
            <div className="answer-block">
              <p className="text-lg text-text-secondary leading-relaxed">
                If your US entity is owned by a foreign company or individual, you have IRS reporting obligations that domestic companies don&apos;t face — and that most US service providers don&apos;t mention. The most important is <Link href="/compliance/form-5472" className="text-primary hover:text-primary-deep font-semibold">Form 5472</Link>, which reports transactions between your US entity and its foreign related parties. The penalty for not filing is $25,000 per form, per year, assessed automatically. This page covers everything you need to know to stay compliant.
              </p>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Last updated: March 2026 &middot; 25 min read
            </p>
          </div>
        </AnimatedSection>

        {/* TL;DR */}
        <AnimatedSection>
          <div className="card mb-12 max-w-3xl border-l-4 border-accent-warm">
            <p className="text-sm font-semibold text-accent-warm-dark uppercase tracking-wider mb-3">TL;DR — do not skip this</p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span>Every foreign-owned US entity must file <strong>Form 5472</strong> annually, reporting all transactions with foreign related parties. The penalty for failure to file is <strong>$25,000 per form</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span>Even a disregarded LLC must file a <strong>pro forma Form 1120</strong> as the carrier for Form 5472.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span>Intercompany transactions — including <strong>payroll funding, management fees, loans, and expense reimbursements</strong> — must be documented, characterised, and reported.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>Transfer pricing</strong> rules apply to all related-party transactions. The IRS can adjust non-arm&apos;s-length prices and assess penalties.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span>Your US payroll provider does <strong>not</strong> handle any of this. You need a CPA experienced with foreign-owned entities.</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Content with sidebar TOC */}
        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block w-56 shrink-0">
            <StickyTOC items={tocItems} />
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-3xl prose-custom">
            <section id="why-this-matters" className="mb-12">
              <h2>Why this matters more than you think</h2>
              <p>
                Here is the problem we see repeatedly: a UK or European company forms a US entity, sets up payroll, starts hiring — and nobody tells them about their foreign-ownership reporting obligations.
              </p>
              <p>
                The US payroll provider handles payroll taxes and filings. The formation agent handled the state filing. The bank opened the account. Everyone did their job. But <strong>none of them are responsible for Form 5472 or the foreign-ownership compliance layer</strong>.
              </p>
              <p>
                Two or three years later, the IRS sends a penalty notice for $25,000 — or $50,000, or $75,000 — for unfiled Forms 5472. The company had no idea the obligation existed.
              </p>
              <p>
                This is not a rare scenario. It is the <strong>most common compliance failure</strong> we see among foreign-owned US entities.
              </p>
              <ComplianceCallout title="The gap nobody warns you about">
                <p className="text-text-secondary">
                  US service providers — payroll companies, formation agents, banks — are built for domestic companies. They assume someone else is handling your foreign-ownership obligations. Nobody is, unless you specifically engage a CPA or tax advisor who understands foreign-owned entity compliance.
                </p>
              </ComplianceCallout>
            </section>

            <section id="form-5472" className="mb-12">
              <h2>Form 5472: the filing most foreign-owned entities miss</h2>
              <p>
                Form 5472, &quot;Information Return of a 25% Foreign-Owned U.S. Corporation or a Foreign Corporation Engaged in a U.S. Trade or Business,&quot; is the IRS&apos;s mechanism for tracking transactions between US entities and their foreign related parties.
              </p>
              <p>
                <strong>Who must file:</strong>
              </p>
              <ul>
                <li>Any US corporation that is at least 25% foreign-owned</li>
                <li>Any foreign-owned US disregarded entity (single-member LLC owned by a foreign person or entity) — this was expanded in 2017 and catches most foreign subsidiaries</li>
                <li>Any foreign corporation engaged in a US trade or business</li>
              </ul>
              <p>
                <strong>What it reports:</strong> all &quot;reportable transactions&quot; between the US entity and its foreign related parties during the tax year. This includes monetary transactions (payments, loans, capital contributions) and non-monetary transactions (use of property, services rendered).
              </p>
              <p>
                <strong>When it&apos;s due:</strong> filed with the US entity&apos;s income tax return (or pro forma Form 1120 for disregarded entities). For calendar-year entities, due April 15 (extendable to October 15).
              </p>
              <p>
                For a comprehensive deep-dive, read our <Link href="/compliance/form-5472" className="text-primary hover:text-primary-deep font-semibold">complete Form 5472 guide</Link>.
              </p>

              <ComplianceCallout title="Penalty: $25,000 per form">
                <p className="text-text-secondary">
                  The penalty for failure to file Form 5472, or filing a substantially incomplete Form 5472, is <strong>$25,000</strong>. If the IRS sends a notice and the failure continues for more than 90 days, an additional <strong>$25,000 penalty applies for each 30-day period</strong> (or fraction thereof) of continued non-compliance. There is no cap. A company that ignores IRS notices can accumulate $100,000+ in penalties per form, per year.
                </p>
              </ComplianceCallout>
            </section>

            <section id="pro-forma-1120" className="mb-12">
              <h2>Pro forma Form 1120</h2>
              <p>
                If your US entity is a single-member LLC owned by a foreign person or company — the most common structure for a foreign subsidiary — it is a &quot;disregarded entity&quot; for US tax purposes. It doesn&apos;t have its own tax liability and wouldn&apos;t normally file a US corporate income tax return.
              </p>
              <p>
                However, since 2017, foreign-owned disregarded entities must file a <strong>pro forma Form 1120</strong> solely as the carrier for their Form 5472 attachment(s). The Form 1120 itself is marked as a pro forma return — you check the relevant boxes, fill in the entity identification information, and attach the Form 5472(s).
              </p>
              <p>
                <strong>What goes on the pro forma 1120:</strong>
              </p>
              <ul>
                <li>Entity name, address, EIN</li>
                <li>Check boxes indicating it is a pro forma return filed solely for Form 5472</li>
                <li>The income statement lines can be zero (since the entity is disregarded)</li>
                <li>The attached Form 5472(s)</li>
              </ul>
              <p>
                The pro forma 1120 follows the same filing deadline and extension rules as a regular Form 1120. File Form 7004 for an automatic 6-month extension if you need more time.
              </p>
            </section>

            <section id="reportable-transactions" className="mb-12">
              <h2>What counts as a &quot;reportable transaction&quot;</h2>
              <p>
                This is broader than most people expect. A reportable transaction is any exchange of money, property, or services between the US entity and a foreign related party. Specifically:
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Monetary transactions</h3>
              <ul>
                <li><strong>Capital contributions:</strong> parent company wires money to the US entity to fund operations — this is a reportable transaction even though no goods or services were exchanged</li>
                <li><strong>Loans:</strong> the parent lends money to the US entity (or vice versa) — the loan principal, interest payments, and repayments are all reportable</li>
                <li><strong>Management fees:</strong> the parent charges the US entity for management services, or the US entity charges the parent for services rendered by US employees</li>
                <li><strong>Expense reimbursements:</strong> the parent pays a vendor on behalf of the US entity, or the US entity reimburses the parent for costs</li>
                <li><strong>Dividends and distributions:</strong> the US entity pays dividends or makes distributions to its foreign owner</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Non-monetary transactions</h3>
              <ul>
                <li><strong>Use of tangible property:</strong> the US entity uses equipment or office space belonging to the foreign parent</li>
                <li><strong>Use of intangible property:</strong> the US entity uses trademarks, patents, software, or know-how belonging to the foreign parent (or vice versa)</li>
                <li><strong>Services rendered:</strong> employees of the foreign parent provide services to the US entity (or vice versa), even if no payment is made</li>
              </ul>

              <ComplianceCallout title="The transaction most people miss">
                <p className="text-text-secondary">
                  When the UK parent company wires $50,000 to the US entity&apos;s bank account to cover payroll and operating costs, that is a reportable transaction. It must be characterised (as a capital contribution, a loan, or something else) and reported on Form 5472. <strong>This is the single most common transaction that goes unreported.</strong>
                </p>
              </ComplianceCallout>
            </section>

            <section id="transfer-pricing" className="mb-12">
              <h2>Transfer pricing</h2>
              <p>
                Transfer pricing is the pricing of transactions between related parties. The IRS requires these transactions to be at &quot;arm&apos;s length&quot; — meaning priced as if the parties were unrelated and negotiating at fair market value.
              </p>
              <p>
                This matters whenever:
              </p>
              <ul>
                <li>The US entity pays management fees to the foreign parent (or vice versa)</li>
                <li>The US entity licenses IP from the foreign parent</li>
                <li>Employees of one entity provide services to the other</li>
                <li>One entity provides a loan to the other (the interest rate must be arm&apos;s length)</li>
                <li>Cost-sharing arrangements exist between the entities</li>
              </ul>
              <p>
                <strong>The practical risk:</strong> if the IRS determines that intercompany pricing is not arm&apos;s length, it can adjust the pricing, assess additional tax, and impose penalties. The transfer pricing penalty under IRC Section 6662(e) is 20% of the underpayment attributable to the adjustment, increasing to 40% for &quot;gross valuation misstatements.&quot;
              </p>
              <p>
                <strong>What to do:</strong>
              </p>
              <ul>
                <li>Document the rationale for every intercompany price at the time the transaction occurs (not after the fact)</li>
                <li>For management fees, use a cost-plus method: calculate the actual cost of services provided, then add a reasonable markup (5-10% is common for routine services)</li>
                <li>For intercompany loans, charge an arm&apos;s-length interest rate — the Applicable Federal Rate (AFR) published monthly by the IRS is the floor</li>
                <li>For significant or complex arrangements, engage a transfer pricing specialist to prepare a benchmarking study</li>
              </ul>
            </section>

            <section id="intercompany-logging" className="mb-12">
              <h2>Intercompany transaction logging</h2>
              <p>
                You cannot complete Form 5472 accurately — or defend your transfer pricing — without clear, contemporaneous records of intercompany transactions.
              </p>
              <p>
                <strong>What to track for every intercompany transaction:</strong>
              </p>
              <ul>
                <li><strong>Date</strong> of the transaction</li>
                <li><strong>Amount</strong> (in USD and original currency, if applicable)</li>
                <li><strong>Direction</strong> (from parent to US entity, or vice versa)</li>
                <li><strong>Characterisation</strong> (capital contribution, loan, management fee, cost reimbursement, etc.)</li>
                <li><strong>Supporting documentation</strong> (wire transfer confirmations, invoices, intercompany agreements)</li>
                <li><strong>Pricing rationale</strong> (for services or IP: how was the price determined?)</li>
              </ul>
              <p>
                <strong>Practical recommendation:</strong> maintain an intercompany transaction log — a simple spreadsheet that records every transaction as it occurs. Update it monthly. Share it with your US CPA at year-end. This single habit prevents 90% of the compliance issues we see.
              </p>
              <p>
                You should also have written intercompany agreements in place <strong>before</strong> transactions occur. A management services agreement, an intercompany loan agreement, and/or a cost-sharing agreement — whatever matches your actual arrangements. These don&apos;t need to be complex, but they need to exist and reflect reality.
              </p>
            </section>

            <section id="firpta" className="mb-12">
              <h2>FIRPTA basics</h2>
              <p>
                FIRPTA (Foreign Investment in Real Property Tax Act) applies when a foreign person or entity disposes of a &quot;US real property interest.&quot; For most foreign-owned operating companies, FIRPTA is not a day-to-day concern — but it can become relevant in specific situations:
              </p>
              <ul>
                <li><strong>The US entity owns real estate:</strong> if you buy US property for office space and later sell it, FIRPTA withholding applies</li>
                <li><strong>Sale of the US entity:</strong> if the foreign parent sells its interest in the US entity, and the US entity holds US real property, the buyer must withhold 15% of the sale price under FIRPTA</li>
                <li><strong>US real property holding corporation:</strong> if 50% or more of the US entity&apos;s assets are US real property interests, it is classified as a USRPHC, which triggers FIRPTA on any sale of its shares or membership interests</li>
              </ul>
              <p>
                <strong>For most foreign-owned service companies:</strong> FIRPTA is unlikely to apply unless you own US real estate. But be aware of the rules before any property purchase or entity disposition.
              </p>
            </section>

            <section id="penalty-schedule" className="mb-12">
              <h2>Penalty schedule</h2>
              <p>
                These are the penalties specifically applicable to foreign-owned entity compliance. They are in addition to any general tax penalties that may apply.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Violation</th>
                      <th className="py-3 pr-4 text-text font-semibold">Penalty</th>
                      <th className="py-3 text-text font-semibold">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Failure to file Form 5472</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">$25,000 per form</td>
                      <td className="py-3">IRC &sect;6038A(d)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Continued failure after IRS notice (beyond 90 days)</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">$25,000 per 30-day period</td>
                      <td className="py-3">IRC &sect;6038A(d)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Failure to maintain records</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">$25,000 per year</td>
                      <td className="py-3">IRC &sect;6038A(d)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Transfer pricing penalty (substantial)</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">20% of underpayment</td>
                      <td className="py-3">IRC &sect;6662(e)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Transfer pricing penalty (gross valuation misstatement)</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">40% of underpayment</td>
                      <td className="py-3">IRC &sect;6662(h)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Failure to file pro forma Form 1120</td>
                      <td className="py-3 pr-4 font-semibold text-accent-warm-dark">$25,000 (treated as failure to file Form 5472)</td>
                      <td className="py-3">IRC &sect;6038A(d)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComplianceCallout title="These penalties are real">
                <p className="text-text-secondary">
                  We are not listing these to be alarming. We are listing them because we routinely see companies that were never told about these obligations. A company that fails to file Form 5472 for three years — with one reportable transaction per year — faces <strong>$75,000 in automatic penalties</strong> before the IRS even sends a notice. If they don&apos;t respond promptly, the penalties escalate further. Prevention costs a fraction of the penalty.
                </p>
              </ComplianceCallout>
            </section>

            <section id="staying-compliant" className="mb-12">
              <h2>How to stay compliant</h2>
              <p>
                The good news: compliance is not difficult if you set up the right processes from the start. Here is a practical checklist:
              </p>
              <ol>
                <li>
                  <strong>Engage a CPA experienced with foreign-owned entities.</strong> Not all US accountants understand these requirements. Ask specifically: &quot;Do you prepare Form 5472 returns? How many foreign-owned entity clients do you have?&quot; If they hesitate, find someone else.
                </li>
                <li>
                  <strong>Maintain an intercompany transaction log.</strong> Update it every time money moves between the foreign parent and the US entity. Include the date, amount, direction, and characterisation of every transaction.
                </li>
                <li>
                  <strong>Put intercompany agreements in writing.</strong> Before the first transaction occurs, document the arrangement (management services agreement, loan agreement, etc.). These don&apos;t need to be 50-page documents — 2-3 pages with clear terms will suffice.
                </li>
                <li>
                  <strong>Characterise every transfer.</strong> When the parent wires money to the US entity, decide at the time whether it&apos;s a capital contribution, a loan, or a payment for services. Document this decision. Don&apos;t leave it for year-end.
                </li>
                <li>
                  <strong>File on time.</strong> Set calendar reminders for tax deadlines. File extensions proactively (Form 7004 for a 6-month extension). The extension is automatic — there is no reason not to file one if you need more time.
                </li>
                <li>
                  <strong>Separate your CPA from your payroll provider.</strong> Your payroll provider handles payroll. Your CPA handles foreign-ownership compliance. Make sure both know the other exists and understand where their responsibilities begin and end.
                </li>
              </ol>
            </section>

            {/* CTA */}
            <AnimatedSection>
              <div className="card bg-surface mt-8 mb-12 border-l-4 border-accent-warm">
                <h3 className="text-xl font-semibold text-text mb-3">Don&apos;t leave foreign-ownership compliance to chance</h3>
                <p className="text-text-secondary mb-4">
                  Teamed handles the full compliance stack for foreign-owned US entities — from Form 5472 filing to intercompany documentation to transfer pricing support. We work alongside your existing payroll provider or provide end-to-end payroll and compliance. If you&apos;re not sure whether your current setup covers these obligations, let&apos;s review it together.
                </p>
                <a
                  href="https://www.teamed.global/contact-teamed"
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a compliance review
                </a>
              </div>
            </AnimatedSection>

            <section id="faq" className="mb-12">
              <h2>Frequently asked questions</h2>
              <FaqAccordion items={faqs} className="mt-6" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
