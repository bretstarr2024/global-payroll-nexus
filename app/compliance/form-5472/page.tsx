import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ComplianceCallout } from '@/components/ComplianceCallout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Form 5472 Guide | Filing Requirements, Penalties & Compliance for Foreign-Owned US Entities',
  description: 'The definitive guide to IRS Form 5472 for foreign-owned US entities. Who must file, what reportable transactions means, the $25,000 penalty, common mistakes, and how to stay compliant.',
};

const tocItems = [
  { id: 'what-is-form-5472', label: 'What is Form 5472?' },
  { id: 'who-must-file', label: 'Who must file' },
  { id: 'reportable-transactions', label: 'Reportable transactions' },
  { id: 'filing-mechanics', label: 'How to file' },
  { id: 'deadlines', label: 'Filing deadlines' },
  { id: 'penalty', label: 'The $25,000 penalty' },
  { id: 'penalty-abatement', label: 'Penalty abatement' },
  { id: 'common-mistakes', label: 'Common mistakes' },
  { id: 'what-accountants-miss', label: 'What your accountant may miss' },
  { id: 'walkthrough', label: 'Form walkthrough' },
  { id: 'staying-compliant', label: 'Staying compliant' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Is Form 5472 the same as FBAR or FATCA?',
    answer: 'No. These are entirely different reporting requirements. FBAR (FinCEN 114) reports foreign bank accounts held by US persons. FATCA (Form 8938) reports foreign financial assets of US persons. Form 5472 goes the other direction — it reports transactions between a US entity and its foreign owners or related parties. A foreign-owned US entity may need to file Form 5472 but would not typically file FBAR or FATCA (those apply to US persons with foreign accounts/assets).',
  },
  {
    question: 'How many Forms 5472 do I need to file?',
    answer: 'One Form 5472 for each foreign related party with whom the US entity had reportable transactions during the year. If the US entity transacted only with its direct foreign parent, that is one Form 5472. If it also transacted with a sister company in Germany and a related entity in Singapore, that is three Forms 5472. Each related party gets its own form.',
  },
  {
    question: 'What if my US entity had no transactions with the foreign parent this year?',
    answer: 'If there were genuinely no reportable transactions — no funding, no management fees, no services, no use of property, nothing — then Form 5472 is not required for that year. However, this is rare. Even a dormant entity typically receives some funding from its parent. Review the full list of reportable transactions carefully before concluding you have none.',
  },
  {
    question: 'Can I file Form 5472 electronically?',
    answer: 'Form 5472 is filed as an attachment to Form 1120 (or pro forma Form 1120). If you e-file the Form 1120, the Form 5472 is included as a PDF attachment. If you paper-file, the Form 5472 is physically attached to the return. Either method is acceptable. Most CPAs e-file.',
  },
  {
    question: 'Does the foreign parent also have a US filing obligation?',
    answer: 'The Form 5472 filing obligation falls on the US reporting corporation (or the US disregarded entity). The foreign parent does not separately file Form 5472. However, the foreign parent provides information that appears on the form — name, address, country of incorporation, tax ID number in the home country — so coordination between the US entity and the parent is necessary.',
  },
  {
    question: 'What if I just found out I should have been filing Form 5472 for prior years?',
    answer: 'File the delinquent forms as soon as possible. The IRS has procedures for late filing, and acting quickly demonstrates good faith. You should file amended or delinquent pro forma Forms 1120 with the Form 5472 attachments for each missed year. Consider requesting penalty abatement based on reasonable cause — the argument that you relied on professional advisors who failed to identify the requirement can sometimes succeed, though it is not guaranteed.',
  },
  {
    question: 'Is there a de minimis threshold for reportable transactions?',
    answer: 'No. There is no minimum dollar amount. A $100 capital contribution is just as reportable as a $10 million one. However, the Form 5472 reports aggregate amounts by transaction type for the year, not individual transactions. So if the parent made five separate capital contributions totaling $200,000, you report $200,000 in the capital contributions line — you do not need to list each individual transfer.',
  },
  {
    question: 'My US entity is a C-Corp, not an LLC. Do I still need Form 5472?',
    answer: 'Yes. Form 5472 applies to any US corporation (including C-Corps) that is at least 25% foreign-owned and has reportable transactions with foreign related parties. The filing requirement is not limited to LLCs or disregarded entities. In fact, Form 5472 originally applied only to corporations — the extension to disregarded entities came later in 2017.',
  },
];

export default function Form5472Page() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <p className="text-accent-warm font-medium text-sm uppercase tracking-wider mb-3">
              Deep-Dive Compliance Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Form 5472: The Complete Guide for Foreign-Owned US Entities
            </h1>
            {/* Answer-first block */}
            <div className="answer-block">
              <p className="text-lg text-text-secondary leading-relaxed">
                IRS Form 5472 is an information return that reports transactions between a US entity and its foreign related parties. Every foreign-owned US corporation and every foreign-owned disregarded entity (single-member LLC) must file it annually if reportable transactions occurred. The penalty for not filing — or filing it late or incomplete — is $25,000 per form, per year, assessed automatically with no warning. This guide covers everything: who files, what triggers it, how to complete it, and how to avoid the penalties.
              </p>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Last updated: March 2026 &middot; 30 min read
            </p>
          </div>
        </AnimatedSection>

        {/* TL;DR */}
        <AnimatedSection>
          <div className="card mb-12 max-w-3xl border-l-4 border-accent-warm">
            <p className="text-sm font-semibold text-accent-warm-dark uppercase tracking-wider mb-3">Key facts</p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>What:</strong> an information return reporting transactions between a US entity and foreign related parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>Who:</strong> any 25%+ foreign-owned US corporation, or any foreign-owned single-member LLC (disregarded entity), with reportable transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>When:</strong> filed with Form 1120 (or pro forma 1120) — due April 15, extendable to October 15</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>Penalty:</strong> $25,000 per form for failure to file, plus $25,000 per 30-day period after IRS notice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-warm mt-1">&#8226;</span>
                <span><strong>No de minimis:</strong> there is no minimum transaction amount. A $1 transfer is reportable.</span>
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
            <section id="what-is-form-5472" className="mb-12">
              <h2>What is Form 5472?</h2>
              <p>
                Form 5472 — officially titled &quot;Information Return of a 25% Foreign-Owned U.S. Corporation or a Foreign Corporation Engaged in a U.S. Trade or Business&quot; — is an IRS information return. It does not calculate or assess any tax. Its purpose is disclosure: telling the IRS what transactions occurred between your US entity and its foreign related parties.
              </p>
              <p>
                The IRS uses this information to:
              </p>
              <ul>
                <li>Identify potential transfer pricing issues (are intercompany transactions priced at arm&apos;s length?)</li>
                <li>Track the flow of funds between US entities and foreign persons</li>
                <li>Ensure foreign-owned entities are meeting their US tax obligations</li>
                <li>Detect arrangements designed to shift profits out of the US</li>
              </ul>
              <p>
                Think of Form 5472 as a transparency requirement. The IRS wants to see what&apos;s happening between your US operation and its foreign connections. It&apos;s not a tax bill — it&apos;s a disclosure form. But the penalties for not filing it are severe enough that you&apos;d wish it were a tax bill instead.
              </p>
            </section>

            <section id="who-must-file" className="mb-12">
              <h2>Who must file Form 5472</h2>
              <p>
                Two categories of entities must file:
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">1. 25% foreign-owned US corporations</h3>
              <p>
                Any US corporation (C-Corp or S-Corp) in which a foreign person owns, directly or indirectly, at least 25% of the voting power or value of the stock. &quot;Foreign person&quot; includes individuals, companies, partnerships, trusts, and estates.
              </p>
              <p>
                For a typical foreign subsidiary — 100% owned by the foreign parent — this threshold is clearly met.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">2. Foreign-owned US disregarded entities (since 2017)</h3>
              <p>
                This is the category that catches most new foreign subsidiaries. In December 2016, the IRS issued final regulations (TD 9796) treating a domestic disregarded entity wholly owned by a foreign person as a domestic corporation <strong>solely for purposes of Form 5472 reporting</strong>.
              </p>
              <p>
                In plain English: if you formed a single-member LLC in the US and the owner is a foreign company or individual, you must file Form 5472 — even though the LLC is otherwise disregarded for tax purposes.
              </p>
              <p>
                This regulation took effect for tax years beginning on or after January 1, 2017. If your foreign-owned LLC was formed after that date and you have not been filing Form 5472, you are out of compliance.
              </p>

              <ComplianceCallout title="This is where most companies get caught">
                <p className="text-text-secondary">
                  The 2017 regulation expansion is responsible for the majority of Form 5472 penalties assessed against foreign-owned entities. Before 2017, a foreign-owned single-member LLC had minimal IRS filing obligations. After 2017, it must file a pro forma Form 1120 with Form 5472 attached. Many formation agents, attorneys, and even some accountants are still unaware of this change — or forget to mention it to clients forming foreign-owned LLCs.
                </p>
              </ComplianceCallout>
            </section>

            <section id="reportable-transactions" className="mb-12">
              <h2>What &quot;reportable transactions&quot; means — the complete list</h2>
              <p>
                A reportable transaction is any transaction between the US reporting entity and a &quot;foreign related party&quot; — which includes the 25%+ foreign owner, any entity the foreign owner controls, and any entity under common control with the US entity.
              </p>
              <p>
                The Form 5472 instructions list the following categories. If any amount is non-zero, the form must be filed:
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part IV: Monetary transactions</h3>
              <ul>
                <li><strong>Sales of stock in trade (inventory):</strong> goods sold between related parties</li>
                <li><strong>Sales of tangible property other than stock in trade:</strong> equipment, vehicles, furniture, etc.</li>
                <li><strong>Platform contribution transaction payments received/paid</strong></li>
                <li><strong>Cost sharing transaction payments received/paid</strong></li>
                <li><strong>Rents and royalties received/paid:</strong> for use of tangible or intangible property</li>
                <li><strong>Sales, purchases, and licensing of intangible property:</strong> patents, trademarks, software, know-how</li>
                <li><strong>Consideration received/paid for technical, managerial, engineering, construction, or scientific services</strong></li>
                <li><strong>Commissions received/paid</strong></li>
                <li><strong>Amounts borrowed/lent:</strong> principal amounts of intercompany loans</li>
                <li><strong>Interest received/paid:</strong> on intercompany loans</li>
                <li><strong>Insurance premiums received/paid</strong></li>
                <li><strong>Other amounts received/paid:</strong> catch-all for anything not listed above, including management fees, reimbursements, and general funding</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part V: Non-monetary and less-than-full-consideration transactions</h3>
              <ul>
                <li>Use of tangible or intangible property at less than arm&apos;s-length consideration</li>
                <li>Services provided at less than arm&apos;s-length consideration</li>
                <li>Capital contributions (including cash contributions from the foreign parent to the US entity)</li>
                <li>Loans and loan guarantees</li>
                <li>Any other non-monetary transaction or transaction at less than full consideration</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part VI: Additional information (for certain large filers)</h3>
              <p>
                Part VI applies if the US entity reports $50 million or more in gross receipts, or the foreign group has $500 million or more in global gross receipts. Most smaller foreign subsidiaries won&apos;t need to complete this section.
              </p>

              <ComplianceCallout title="The most common reportable transactions for new foreign subsidiaries">
                <p className="text-text-secondary">
                  For a typical new foreign-owned US entity in its first year, the reportable transactions are usually: <strong>(1) capital contributions</strong> — money wired from the parent to set up and fund the US entity, <strong>(2) management fees or cost reimbursements</strong> — if the parent company&apos;s staff provides services to the US entity, and <strong>(3) use of intangible property</strong> — if the US entity uses the parent company&apos;s brand, software, or processes. Even if only category (1) applies, you must file.
                </p>
              </ComplianceCallout>
            </section>

            <section id="filing-mechanics" className="mb-12">
              <h2>How to file Form 5472</h2>
              <p>
                Form 5472 is not filed on its own. It is attached to the US entity&apos;s income tax return:
              </p>
              <ul>
                <li><strong>For US corporations (C-Corp):</strong> attached to Form 1120 (US Corporation Income Tax Return)</li>
                <li><strong>For foreign-owned disregarded entities (LLC):</strong> attached to a pro forma Form 1120</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">The pro forma Form 1120 for disregarded entities</h3>
              <p>
                A disregarded entity does not normally file Form 1120. However, the Form 5472 requirement creates an exception. You file what is called a &quot;pro forma&quot; Form 1120 — a return that exists solely to carry the Form 5472 attachment.
              </p>
              <p>
                <strong>How to prepare it:</strong>
              </p>
              <ol>
                <li>Use the entity&apos;s own EIN (not the owner&apos;s)</li>
                <li>Write &quot;Foreign-owned U.S. DE&quot; (disregarded entity) across the top of the Form 1120</li>
                <li>Complete the identification section (name, address, EIN, date of incorporation, total assets)</li>
                <li>You may enter zeros on the income and deduction lines (since the entity is disregarded for income tax purposes)</li>
                <li>Check box E(3) on page 1 (&quot;Initial return&quot; for the first year, if applicable)</li>
                <li>Attach the completed Form 5472(s)</li>
                <li>Sign and date the return</li>
              </ol>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Completing Form 5472 itself</h3>
              <p>
                The form has six parts:
              </p>
              <ul>
                <li><strong>Part I:</strong> information about the US reporting corporation (name, address, EIN, type of entity, country of incorporation of the parent)</li>
                <li><strong>Part II:</strong> information about the 25%+ foreign shareholder (name, address, country, foreign tax ID)</li>
                <li><strong>Part III:</strong> information about related parties — complete this if transactions occurred with a related party other than the 25% owner identified in Part II</li>
                <li><strong>Part IV:</strong> monetary transactions — dollar amounts for each transaction type during the year</li>
                <li><strong>Part V:</strong> non-monetary and below-market transactions, including capital contributions</li>
                <li><strong>Part VI:</strong> additional information for large filers</li>
              </ul>
            </section>

            <section id="deadlines" className="mb-12">
              <h2>Filing deadlines</h2>
              <p>
                Form 5472 follows the filing deadline of the Form 1120 it is attached to:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Entity type</th>
                      <th className="py-3 pr-4 text-text font-semibold">Original due date</th>
                      <th className="py-3 text-text font-semibold">Extended due date</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">C-Corp (calendar year)</td>
                      <td className="py-3 pr-4">April 15</td>
                      <td className="py-3">October 15 (6-month automatic extension via Form 7004)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Disregarded entity (calendar year)</td>
                      <td className="py-3 pr-4">April 15</td>
                      <td className="py-3">October 15 (6-month automatic extension via Form 7004)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Fiscal year entity</td>
                      <td className="py-3 pr-4">15th day of the 4th month after fiscal year end</td>
                      <td className="py-3">6 months from the original due date</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                <strong>The extension is automatic</strong> — you just file Form 7004 by the original due date. There is no approval process. But you must actually file the Form 7004; simply intending to extend is not enough.
              </p>
              <p>
                <strong>For newly formed entities:</strong> if your entity was formed mid-year, the first filing covers the period from formation through the end of the tax year. For calendar-year entities formed in, say, September 2025, the first filing covers September-December 2025 and is due April 15, 2026.
              </p>
            </section>

            <section id="penalty" className="mb-12">
              <h2>The $25,000 penalty</h2>
              <p>
                The penalty structure for Form 5472 is one of the harshest in the Internal Revenue Code for an information return. Understanding how it works is important:
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Initial penalty: $25,000 per form</h3>
              <p>
                The initial penalty for failure to file Form 5472, or for filing a &quot;substantially incomplete&quot; Form 5472, is $25,000. This penalty is assessed per form — not per entity, not per year. If you should have filed three Forms 5472 (because you had transactions with three different foreign related parties) and filed none, the initial penalty is $75,000.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Continuation penalty: $25,000 per 30-day period</h3>
              <p>
                If the IRS sends a notice of failure to file and the failure continues for more than 90 days, an additional $25,000 penalty applies for each 30-day period (or fraction thereof) during which the failure continues after the 90-day period expires. This penalty compounds indefinitely.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">How it actually plays out</h3>
              <p>
                Here&apos;s a real-world scenario:
              </p>
              <ol>
                <li>Foreign parent forms a US LLC in 2023. Nobody files Form 5472 for 2023 or 2024.</li>
                <li>In mid-2025, the IRS matches EIN registration records with Form 5472 filings and identifies the gap.</li>
                <li>The IRS assesses a $25,000 penalty for 2023 and a $25,000 penalty for 2024. Total: $50,000.</li>
                <li>A penalty notice is mailed. The company doesn&apos;t receive it (common with foreign-owned entities whose US mail handling is unreliable).</li>
                <li>The 90-day response window expires. Additional $25,000 penalties begin accruing every 30 days for each year.</li>
                <li>By the time the company becomes aware, penalties may total $150,000+.</li>
              </ol>

              <ComplianceCallout title="$25,000 penalty — no exceptions, no warnings">
                <p className="text-text-secondary">
                  Unlike many IRS penalties, the Form 5472 penalty is not subject to a &quot;first time abatement&quot; administrative waiver. It is assessed automatically by the IRS&apos;s Automated Under-Reporter (AUR) system. The IRS does not need to audit you or send a prior warning. The penalty notice is the first communication you receive. Your only recourse is to request abatement based on &quot;reasonable cause&quot; — which requires demonstrating that you exercised ordinary business care and prudence.
                </p>
              </ComplianceCallout>
            </section>

            <section id="penalty-abatement" className="mb-12">
              <h2>Penalty abatement: can you get the penalty reduced or removed?</h2>
              <p>
                Yes, but it requires effort and is not guaranteed. The IRS may abate the Form 5472 penalty if you demonstrate &quot;reasonable cause&quot; — that you had a legitimate reason for the failure and acted with ordinary business care.
              </p>
              <p>
                <strong>Arguments that may succeed:</strong>
              </p>
              <ul>
                <li><strong>Reliance on professional advice:</strong> if you engaged a CPA or tax advisor and they failed to identify the Form 5472 requirement, this can support a reasonable cause argument. You&apos;ll need to show that you provided the advisor with complete information about the foreign ownership.</li>
                <li><strong>First-year filer unfamiliar with US requirements:</strong> foreign companies new to the US can sometimes argue lack of familiarity with the US tax system, particularly combined with other factors.</li>
                <li><strong>Prompt remediation:</strong> filing the delinquent Form 5472 as soon as you become aware of the requirement demonstrates good faith.</li>
              </ul>
              <p>
                <strong>Arguments that typically fail:</strong>
              </p>
              <ul>
                <li>&quot;I didn&apos;t know about the requirement&quot; — ignorance of the law is generally not reasonable cause on its own</li>
                <li>&quot;My formation agent didn&apos;t tell me&quot; — formation agents are not tax advisors, and the IRS doesn&apos;t accept this</li>
                <li>&quot;The entity had no income&quot; — Form 5472 is an information return; the entity&apos;s income level is irrelevant</li>
              </ul>
              <p>
                The abatement request is submitted in writing with your delinquent filing. If the initial request is denied, you can appeal through the IRS Office of Appeals. Some companies also pursue abatement through the Taxpayer Advocate Service (TAS) if standard channels fail.
              </p>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2>Common mistakes</h2>
              <p>
                After reviewing hundreds of Form 5472 situations, these are the errors we see most frequently:
              </p>

              <div className="space-y-6 mt-6">
                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">1. Not filing at all</h3>
                  <p className="text-text-secondary">The number one mistake. The entity was formed, payroll was set up, and nobody mentioned Form 5472. This typically results in $25,000+ in penalties per missed year.</p>
                </div>

                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">2. Filing Form 1120 without attaching Form 5472</h3>
                  <p className="text-text-secondary">The CPA prepares the income tax return but doesn&apos;t know (or forgets) that the entity is foreign-owned. The Form 1120 is filed, but the Form 5472 is missing. The IRS treats this the same as not filing at all.</p>
                </div>

                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">3. Not reporting capital contributions</h3>
                  <p className="text-text-secondary">The parent wires money to fund the US entity. Nobody reports it as a transaction on Form 5472 because &quot;it&apos;s just funding, not a sale or payment.&quot; Capital contributions are explicitly reportable in Part V of the form.</p>
                </div>

                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">4. Failing to characterise intercompany transfers</h3>
                  <p className="text-text-secondary">Money moves between the parent and the US entity, but nobody decides at the time whether it&apos;s a capital contribution, a loan, or a management fee. At year-end, the CPA asks &quot;what were these transfers?&quot; and the answer is &quot;we don&apos;t know.&quot; Without proper characterisation, the Form 5472 cannot be completed accurately.</p>
                </div>

                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">5. Missing the extension filing</h3>
                  <p className="text-text-secondary">The company knows about the Form 5472 requirement but cannot get the information together by April 15. Instead of filing Form 7004 for an automatic extension, they just... don&apos;t file. The penalty clock starts ticking on April 16. Filing a simple extension would have given them until October 15.</p>
                </div>

                <div className="card border-l-4 border-accent-warm">
                  <h3 className="text-lg font-semibold text-text mb-2">6. Incorrect or incomplete foreign shareholder information</h3>
                  <p className="text-text-secondary">Part II of Form 5472 requires detailed information about the foreign owner: legal name, address, country of incorporation, taxpayer identification number in the home country. Errors or omissions here can cause the IRS to treat the form as &quot;substantially incomplete&quot; — triggering the $25,000 penalty even though a form was filed.</p>
                </div>
              </div>
            </section>

            <section id="what-accountants-miss" className="mb-12">
              <h2>What your US accountant may miss</h2>
              <p>
                This is not a criticism of US accountants. It is a reality check. Most US CPAs work primarily with domestic companies. Foreign-owned entity compliance is a specialist area, and many general practitioners lack deep experience with it.
              </p>
              <p>
                <strong>Things we commonly see US accountants miss:</strong>
              </p>
              <ul>
                <li>
                  <strong>Not asking about foreign ownership.</strong> Standard new-client intake forms don&apos;t always ask whether the entity is foreign-owned. If you don&apos;t volunteer this information, your CPA may not know to look for Form 5472 obligations.
                </li>
                <li>
                  <strong>Not understanding the 2017 disregarded entity rules.</strong> Some CPAs still believe that single-member LLCs have no federal filing obligations. This was true before 2017 for domestic owners and is still true for them — but not for foreign owners.
                </li>
                <li>
                  <strong>Not requesting intercompany transaction details.</strong> If your CPA doesn&apos;t specifically ask for a breakdown of transactions between the US entity and the foreign parent, they cannot prepare Form 5472. And if they don&apos;t ask, it&apos;s a sign they may not be thinking about it.
                </li>
                <li>
                  <strong>Treating the US entity as fully domestic.</strong> If your CPA prepares the tax return as though the entity is domestically owned — missing the Form 5472 attachment, not considering transfer pricing, not filing the pro forma 1120 for a disregarded entity — the entire return is wrong.
                </li>
                <li>
                  <strong>Not flagging transfer pricing risk.</strong> Even if Form 5472 is filed, a CPA who doesn&apos;t practice in international tax may not recognise that your intercompany management fee, loan interest rate, or cost-sharing arrangement needs to be at arm&apos;s length.
                </li>
              </ul>
              <p>
                <strong>How to protect yourself:</strong> when engaging a US CPA, ask directly: &quot;How many foreign-owned entity clients do you have? Are you comfortable preparing Form 5472 and advising on transfer pricing?&quot; If they cannot give you a clear, confident answer, find a specialist.
              </p>
            </section>

            <section id="walkthrough" className="mb-12">
              <h2>Form 5472 walkthrough: a practical example</h2>
              <p>
                Let&apos;s walk through a typical scenario: Acme Ltd (a UK company) owns 100% of Acme US LLC (a Delaware single-member LLC). During 2025, the following transactions occurred:
              </p>
              <ul>
                <li>Acme Ltd contributed $150,000 in capital to fund US operations</li>
                <li>Acme Ltd invoiced Acme US LLC $36,000 for management services ($3,000/month)</li>
                <li>Acme US LLC used Acme Ltd&apos;s brand name and website platform (no separate charge)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part I: Reporting corporation</h3>
              <p>
                Name: Acme US LLC. Address: the US entity&apos;s address. EIN: the LLC&apos;s EIN. Country of incorporation of the parent: United Kingdom. Check the box indicating the entity is a disregarded entity filing a pro forma 1120.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part II: 25% foreign shareholder</h3>
              <p>
                Name: Acme Ltd. Address: the UK company&apos;s registered address. Country: United Kingdom. Taxpayer ID: the UK company&apos;s UTR (Unique Taxpayer Reference) or Companies House number.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part IV: Monetary transactions</h3>
              <p>
                Line 13 (Consideration paid for management services): $36,000 — this is the management fee paid by Acme US LLC to Acme Ltd.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Part V: Non-monetary and below-market transactions</h3>
              <p>
                Capital contributions received: $150,000. Additionally, the use of the parent&apos;s brand and platform at no charge should be noted as a non-monetary transaction (use of intangible property at less than arm&apos;s-length consideration).
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Pro forma Form 1120</h3>
              <p>
                Acme US LLC files a pro forma Form 1120 with &quot;Foreign-owned U.S. DE&quot; written across the top. The identification section is completed with the LLC&apos;s information. Income and deduction lines can be zero. The Form 5472 is attached. The return is signed and filed by April 15, 2026 (or October 15 with an extension).
              </p>
            </section>

            <section id="staying-compliant" className="mb-12">
              <h2>Staying compliant: the annual checklist</h2>
              <p>
                Follow this process each year and Form 5472 becomes routine rather than a crisis:
              </p>
              <ol>
                <li>
                  <strong>January-February:</strong> compile your intercompany transaction log for the prior year. Total each category: capital contributions, loans, management fees, cost reimbursements, use of property.
                </li>
                <li>
                  <strong>March:</strong> share the transaction log with your CPA. Provide Part II information (foreign shareholder details). Confirm any changes in ownership structure.
                </li>
                <li>
                  <strong>April 15:</strong> file Form 7004 for an automatic 6-month extension (if the return is not ready) or file the return with Form 5472 attached.
                </li>
                <li>
                  <strong>By October 15:</strong> file the final return with Form 5472 attached (if you extended).
                </li>
                <li>
                  <strong>Ongoing:</strong> log intercompany transactions as they occur throughout the year. Do not wait until year-end.
                </li>
              </ol>
              <p>
                The total time investment is a few hours per year if you maintain good records. The cost of professional preparation is typically $500-$1,500 per Form 5472. Compare that to the $25,000 penalty for not filing.
              </p>
            </section>

            {/* CTA */}
            <AnimatedSection>
              <div className="card bg-surface mt-8 mb-12 border-l-4 border-accent-warm">
                <h3 className="text-xl font-semibold text-text mb-3">Not sure if you&apos;re compliant?</h3>
                <p className="text-text-secondary mb-4">
                  If you have a foreign-owned US entity and you&apos;re not certain whether Form 5472 has been filed for every year since formation, act now. Teamed provides compliance reviews for foreign-owned US entities — we&apos;ll identify any gaps, file delinquent returns, and set up processes to keep you compliant going forward. The review costs far less than a single penalty.
                </p>
                <a
                  href="https://www.teamed.global/contact-teamed"
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a compliance review
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
