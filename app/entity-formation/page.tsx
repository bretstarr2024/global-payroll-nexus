import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ComplianceCallout } from '@/components/ComplianceCallout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Entity Formation Guide | How to Set Up a US Subsidiary as a Foreign Company',
  description: 'Step-by-step guide to forming a US entity as a foreign company. LLC vs C-Corp, Delaware incorporation, EIN application, bank accounts, timelines and costs explained plainly.',
};

const tocItems = [
  { id: 'why-entity', label: 'Why form a US entity?' },
  { id: 'llc-vs-ccorp', label: 'LLC vs C-Corp' },
  { id: 'state-selection', label: 'Choosing a state' },
  { id: 'registered-agent', label: 'Registered agents' },
  { id: 'ein-application', label: 'EIN application' },
  { id: 'bank-account', label: 'Bank account setup' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'costs', label: 'What it costs' },
  { id: 'compliance-obligations', label: 'Compliance obligations' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Can a foreign company own 100% of a US LLC or corporation?',
    answer: 'Yes. There are no restrictions on foreign ownership of US LLCs or C-Corps. A UK or EU parent company can own 100% of a US subsidiary. However, this foreign ownership triggers specific IRS reporting requirements — most notably Form 5472 — that domestic companies don\'t face.',
  },
  {
    question: 'Do I need to be physically present in the US to form an entity?',
    answer: 'No. You can form a US entity entirely remotely. State filings can be submitted online or by mail, and a registered agent handles your in-state presence requirement. The EIN application can be done by fax or phone. Bank account opening is the one step that may require a US visit, though some banks now allow remote account opening for foreign-owned entities.',
  },
  {
    question: 'How long does the entire process take from start to finish?',
    answer: 'If everything goes smoothly: 6-10 weeks. State formation takes 1-2 weeks, EIN application 4-8 weeks (for foreign applicants using the fax method), and bank account opening 1-2 weeks. The EIN is typically the bottleneck. You cannot open a bank account or run payroll without it.',
  },
  {
    question: 'Should I use a formation agent like Stripe Atlas or Firstbase?',
    answer: 'These services are designed primarily for US-based founders starting new companies. They can work for foreign subsidiaries, but they often default to Delaware C-Corp structures that may not be optimal for a subsidiary of a foreign parent. A specialist international tax advisor is a better starting point — they\'ll recommend the right structure for your specific situation.',
  },
  {
    question: 'What is the annual cost of maintaining a US entity with no employees?',
    answer: 'Budget roughly $3,000-$5,000/year for a dormant entity. This covers the state annual report/franchise tax ($300-$500 in most states, but Delaware\'s franchise tax can be $400-$200,000+ depending on structure), registered agent fees ($100-$300/year), and accounting/tax filing fees ($1,500-$3,000/year). Add Form 5472 preparation costs of $500-$1,500 per form if you have intercompany transactions.',
  },
  {
    question: 'Can I hire US employees without forming an entity?',
    answer: 'Yes, through an Employer of Record (EOR). The EOR employs your US workers through their own entity, handling payroll, taxes, and compliance. This is faster and simpler but comes with per-employee-per-month fees. Most companies start with an EOR and form their own entity once they reach 8-15 US employees.',
  },
];

export default function EntityFormationPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Comprehensive Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              US Entity Formation: How to Set Up a US Subsidiary as a Foreign Company
            </h1>
            {/* Answer-first block */}
            <div className="answer-block">
              <p className="text-lg text-text-secondary leading-relaxed">
                To set up a US subsidiary, you&apos;ll form either an LLC or a C-Corp in a US state (typically Delaware or the state where you&apos;ll operate), appoint a registered agent, obtain an EIN from the IRS, and open a US bank account. The process takes 6-10 weeks and costs $2,000-$5,000 upfront. Foreign-owned entities face additional IRS reporting obligations that most formation guides don&apos;t mention.
              </p>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Last updated: March 2026 &middot; 18 min read
            </p>
          </div>
        </AnimatedSection>

        {/* TL;DR */}
        <AnimatedSection>
          <div className="card mb-12 max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">TL;DR</p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>Most foreign subsidiaries should form a <strong>single-member LLC</strong> (disregarded entity) owned by the foreign parent, or a <strong>C-Corp</strong> if US investors or US-based equity compensation are planned.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span><strong>Delaware</strong> is the default choice for holding companies and investor-backed structures. If you&apos;ll only operate in one state, forming there directly avoids paying two sets of fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>The <strong>EIN application</strong> is the biggest bottleneck — allow 4-8 weeks for foreign applicants.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>Foreign-owned entities must file <Link href="/compliance" className="text-primary hover:text-primary-deep underline">Form 5472</Link> annually. The penalty for not filing is <strong>$25,000 per form</strong>.</span>
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
            <section id="why-entity" className="mb-12">
              <h2>Why form a US entity?</h2>
              <p>
                If you&apos;re a UK or European company hiring in the US, you have two paths: use an <Link href="/employer-of-record" className="text-primary hover:text-primary-deep">Employer of Record</Link> (EOR), or set up your own US entity.
              </p>
              <p>
                An EOR is faster and simpler for small teams. But once you reach 8-15 US employees, the economics shift. A US entity also gives you:
              </p>
              <ul>
                <li><strong>Direct control</strong> over your employment relationships, contracts, and benefits</li>
                <li><strong>Credibility</strong> with US customers, partners, and candidates who expect to contract with a US company</li>
                <li><strong>Banking and invoicing</strong> in USD without currency conversion on every transaction</li>
                <li><strong>IP domiciling options</strong> — some companies hold US-developed IP in the US entity</li>
                <li><strong>A path to US investors</strong> — VCs overwhelmingly prefer to invest in Delaware C-Corps</li>
              </ul>
              <p>
                The downside: you take on US tax filing obligations, compliance complexity, and ongoing maintenance costs. None of this is insurmountable, but it does need to be done properly.
              </p>
            </section>

            <section id="llc-vs-ccorp" className="mb-12">
              <h2>LLC vs C-Corp: which structure for a foreign subsidiary?</h2>
              <p>
                This is the first decision, and it matters more than most people realise.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Single-member LLC (disregarded entity)</h3>
              <p>
                A single-member LLC owned by a foreign parent is treated as a &quot;disregarded entity&quot; for US federal tax purposes. This means:
              </p>
              <ul>
                <li>The LLC itself doesn&apos;t file a US corporate income tax return (Form 1120)</li>
                <li>Income and expenses flow through to the foreign parent</li>
                <li>You still file a <strong>pro forma Form 1120</strong> and <strong>Form 5472</strong> to report transactions between the US entity and its foreign owner</li>
                <li>Simpler ongoing administration than a C-Corp</li>
              </ul>
              <p>
                <strong>Best for:</strong> subsidiaries that are cost centres (employing US staff, running US operations) rather than profit centres, where US investors are not involved, and where you don&apos;t plan to issue US equity compensation.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">C-Corporation</h3>
              <p>
                A C-Corp is a separate taxable entity. It files its own US corporate income tax return and pays US corporate tax (21% federal rate) on its profits.
              </p>
              <ul>
                <li>Required if you want US investors — VCs expect Delaware C-Corp structure</li>
                <li>Needed for US stock option plans (ISOs) for US employees</li>
                <li>Creates transfer pricing complexity between the US entity and foreign parent</li>
                <li>More expensive to maintain (separate tax return, potential double taxation)</li>
              </ul>
              <p>
                <strong>Best for:</strong> companies planning to raise US capital, issue stock options to US employees, or operate the US entity as a standalone profit centre.
              </p>

              <ComplianceCallout title="Watch out">
                <p className="text-text-secondary">
                  Multi-member LLCs with foreign owners are taxed as partnerships by default, which creates additional complexity (Schedule K-1, withholding obligations). If you&apos;re bringing in a US co-founder or partner, get tax advice before choosing this structure.
                </p>
              </ComplianceCallout>
            </section>

            <section id="state-selection" className="mb-12">
              <h2>Choosing a state of incorporation</h2>
              <p>
                You&apos;ll hear &quot;just incorporate in Delaware&quot; from almost everyone. That advice is correct in some cases and wasteful in others.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Delaware</h3>
              <p>
                Delaware&apos;s Court of Chancery specialises in corporate law, and decades of case law make outcomes more predictable. This matters for:
              </p>
              <ul>
                <li>Companies raising venture capital (investors insist on Delaware)</li>
                <li>Complex corporate governance situations</li>
                <li>Holding companies that don&apos;t operate in any single state</li>
              </ul>
              <p>
                Delaware franchise tax ranges from $400/year (minimum) to over $200,000/year depending on authorised shares and par value. If you form a Delaware C-Corp, <strong>make sure your lawyer uses the Assumed Par Value Capital Method</strong> for franchise tax calculation — the default method can result in absurdly high tax bills.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Your operating state</h3>
              <p>
                If your US employees will all be in California, and you have no plans for VC funding, forming directly in California avoids paying both Delaware fees and California foreign qualification fees. You&apos;d save $800-$1,500/year in duplicated fees.
              </p>
              <p>
                <strong>The practical rule:</strong> if you need investors or complex governance, Delaware. If you&apos;re just employing people in one state, form in that state.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Wyoming and Nevada</h3>
              <p>
                These states market themselves as tax-friendly alternatives. They have no state income tax, but this benefit is irrelevant if your operations or employees are in other states — you&apos;ll owe tax where the work happens, not where you incorporated. For most foreign subsidiaries, Wyoming and Nevada offer no meaningful advantage over Delaware or your operating state.
              </p>
            </section>

            <section id="registered-agent" className="mb-12">
              <h2>Registered agents</h2>
              <p>
                Every US entity must have a registered agent in its state of formation — a person or company authorised to receive legal documents and official state correspondence on your behalf.
              </p>
              <p>
                As a foreign-owned company, you&apos;ll almost certainly use a commercial registered agent service rather than designating an individual. Costs run $100-$300/year.
              </p>
              <p>
                Common providers include CT Corporation, CSC Global, Northwest Registered Agent, and Incfile. Any reputable service works. The main thing is to keep the appointment current — if your registered agent lapses, you can lose good standing and miss legal notices.
              </p>
            </section>

            <section id="ein-application" className="mb-12">
              <h2>EIN application (the bottleneck)</h2>
              <p>
                An Employer Identification Number (EIN) is the US equivalent of a tax registration number. You need it before you can open a bank account, run payroll, or file taxes.
              </p>
              <p>
                For US-based applicants, EINs are issued instantly online. For foreign applicants, it&apos;s different:
              </p>
              <ul>
                <li><strong>Online application:</strong> not available for entities with foreign responsible parties</li>
                <li><strong>Phone application:</strong> call the IRS at +1 267-941-1099 (not toll-free), Monday-Friday 6am-11pm ET. If you get through, you may receive the EIN during the call. Getting through is the challenge.</li>
                <li><strong>Fax application (Form SS-4):</strong> fax to +1 855-641-6935. Processing takes 4-8 weeks. This is the most reliable method.</li>
              </ul>
              <ComplianceCallout title="Plan ahead">
                <p className="text-text-secondary">
                  The EIN is the single biggest delay in the entity formation process. If you&apos;re planning to have US employees start on a specific date, work backwards from that date and add buffer. File the SS-4 by fax the day after your state formation is confirmed.
                </p>
              </ComplianceCallout>
            </section>

            <section id="bank-account" className="mb-12">
              <h2>Bank account setup</h2>
              <p>
                Opening a US bank account as a foreign-owned entity is more difficult than it should be. Many banks are cautious about foreign ownership due to anti-money-laundering (AML) requirements.
              </p>
              <p>
                <strong>What you&apos;ll need:</strong>
              </p>
              <ul>
                <li>Certificate of formation / articles of incorporation</li>
                <li>EIN confirmation letter from the IRS</li>
                <li>Operating agreement (LLC) or bylaws (corporation)</li>
                <li>Passport and proof of address for all beneficial owners (25%+ ownership)</li>
                <li>Parent company documentation (certificate of incorporation, articles)</li>
              </ul>
              <p>
                <strong>Banks that commonly work with foreign-owned entities:</strong> Mercury, Relay, Silicon Valley Bank (now part of First Citizens), and major banks like JPMorgan Chase and Bank of America — though the big banks often require an in-person visit to a US branch.
              </p>
              <p>
                Mercury and Relay are popular with foreign-owned startups because they allow fully remote account opening. The trade-off is that they&apos;re fintech companies partnering with banks, not banks themselves — which can matter for larger operations.
              </p>
            </section>

            <section id="timeline" className="mb-12">
              <h2>Realistic timeline</h2>
              <p>
                Here&apos;s what the process actually looks like, end to end:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Step</th>
                      <th className="py-3 pr-4 text-text font-semibold">Duration</th>
                      <th className="py-3 text-text font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Structure and state selection</td>
                      <td className="py-3 pr-4">1-2 weeks</td>
                      <td className="py-3">Requires tax advice for your specific situation</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">State filing</td>
                      <td className="py-3 pr-4">1-5 business days</td>
                      <td className="py-3">Delaware is typically 1-2 days; some states take longer</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">EIN application (fax)</td>
                      <td className="py-3 pr-4">4-8 weeks</td>
                      <td className="py-3">The bottleneck. Submit immediately after state filing.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Bank account opening</td>
                      <td className="py-3 pr-4">1-3 weeks</td>
                      <td className="py-3">Requires EIN. Remote options: Mercury, Relay</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">State tax registrations</td>
                      <td className="py-3 pr-4">1-2 weeks</td>
                      <td className="py-3">Withholding tax, unemployment insurance, etc.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-text">Total</td>
                      <td className="py-3 pr-4 font-semibold text-text">6-10 weeks</td>
                      <td className="py-3">Can be compressed to 4 weeks if EIN is obtained by phone</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="costs" className="mb-12">
              <h2>What it costs</h2>
              <p>
                Transparent breakdown of the costs involved:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Item</th>
                      <th className="py-3 pr-4 text-text font-semibold">One-time</th>
                      <th className="py-3 text-text font-semibold">Annual</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">State formation filing fee</td>
                      <td className="py-3 pr-4">$90-$500</td>
                      <td className="py-3">&mdash;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Registered agent</td>
                      <td className="py-3 pr-4">&mdash;</td>
                      <td className="py-3">$100-$300</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Legal fees (formation documents)</td>
                      <td className="py-3 pr-4">$1,000-$3,000</td>
                      <td className="py-3">&mdash;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Annual state fees / franchise tax</td>
                      <td className="py-3 pr-4">&mdash;</td>
                      <td className="py-3">$300-$800+</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">US tax return preparation</td>
                      <td className="py-3 pr-4">&mdash;</td>
                      <td className="py-3">$1,500-$5,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Form 5472 preparation</td>
                      <td className="py-3 pr-4">&mdash;</td>
                      <td className="py-3">$500-$1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-text">Year 1 total (typical)</td>
                      <td className="py-3 pr-4 font-semibold text-text" colSpan={2}>$3,500-$10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                These are the entity costs alone. <Link href="/us-payroll" className="text-primary hover:text-primary-deep">Payroll costs</Link> and <Link href="/benefits" className="text-primary hover:text-primary-deep">employee benefits</Link> are on top of this.
              </p>
            </section>

            <section id="compliance-obligations" className="mb-12">
              <h2>Compliance obligations for foreign-owned entities</h2>
              <p>
                This is where foreign-owned US entities differ from domestic ones — and where most formation guides stop short.
              </p>
              <p>
                As a foreign-owned entity, you have reporting obligations that domestic companies don&apos;t:
              </p>
              <ul>
                <li><strong><Link href="/compliance/form-5472" className="text-primary hover:text-primary-deep">Form 5472</Link>:</strong> annual report of transactions between your US entity and its foreign owner (or other related foreign parties). This includes management fees, funding, intercompany charges — essentially any money or value moving between the entities.</li>
                <li><strong>Pro forma Form 1120:</strong> even if your disregarded LLC has no taxable income, you file this as the &quot;carrier&quot; for your Form 5472.</li>
                <li><strong>Transfer pricing documentation:</strong> if the US entity transacts with the foreign parent, the IRS expects these transactions to be at arm&apos;s length — meaning priced as if the parties were unrelated.</li>
                <li><strong>FIRPTA considerations:</strong> if the US entity holds real property, a sale or disposition triggers withholding and reporting under FIRPTA (Foreign Investment in Real Property Tax Act).</li>
              </ul>
              <ComplianceCallout title="Penalty warning">
                <p className="text-text-secondary">
                  The penalty for failing to file Form 5472 is <strong>$25,000 per form, per year</strong>. If the IRS sends a notice and you don&apos;t respond within 90 days, an additional $25,000 penalty applies for each 30-day period of non-compliance. These penalties are not theoretical — they are assessed automatically. Read our <Link href="/compliance" className="text-primary hover:text-primary-deep">full compliance guide</Link> for details.
                </p>
              </ComplianceCallout>
            </section>

            {/* CTA */}
            <AnimatedSection>
              <div className="card bg-surface mt-8 mb-12">
                <h3 className="text-xl font-semibold text-text mb-3">Need help setting up a US entity?</h3>
                <p className="text-text-secondary mb-4">
                  Teamed helps foreign companies establish and run compliant US operations — from entity formation through payroll, benefits, and ongoing compliance. If you&apos;re expanding to the US and want it done properly, we should talk.
                </p>
                <a
                  href="https://www.teamed.global/contact-teamed"
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to an expert
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
