import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ComplianceCallout } from '@/components/ComplianceCallout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Payroll Guide | How to Run Payroll in the United States as a Foreign Company',
  description: 'Complete guide to running US payroll as a foreign-owned company. Federal and state taxes, FICA, FUTA, pay schedules, W-4, I-9, multi-state complexity, and choosing a provider.',
};

const tocItems = [
  { id: 'overview', label: 'How US payroll works' },
  { id: 'federal-taxes', label: 'Federal tax withholding' },
  { id: 'fica', label: 'FICA (Social Security & Medicare)' },
  { id: 'futa', label: 'FUTA (unemployment tax)' },
  { id: 'state-taxes', label: 'State-level taxes' },
  { id: 'multi-state', label: 'Multi-state complexity' },
  { id: 'pay-schedules', label: 'Pay schedules' },
  { id: 'w4-i9', label: 'W-4 and I-9 forms' },
  { id: 'foreign-company-specifics', label: 'What foreign companies need' },
  { id: 'choosing-provider', label: 'Choosing a provider' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Can a foreign company run US payroll without a US entity?',
    answer: 'Not directly. To run payroll in the US, you need a US entity with an EIN, or you use an Employer of Record (EOR) that employs your workers through their entity. You cannot legally pay US employees from a foreign entity — there is no mechanism to withhold and remit US federal and state taxes from abroad.',
  },
  {
    question: 'How often do I need to pay US employees?',
    answer: 'This depends on your state. Some states allow monthly pay periods, but most require semi-monthly (twice per month) or bi-weekly (every two weeks) payroll. California, for example, requires semi-monthly pay for most employees. Check the specific requirements for each state where you have employees.',
  },
  {
    question: 'What is the employer cost on top of salary in the US?',
    answer: 'Budget 10-15% on top of gross salary for mandatory employer costs. This includes the employer portion of FICA (7.65%), FUTA (up to 0.6% on the first $7,000), state unemployment insurance (0.5-5%+ depending on state and experience rating), and workers\' compensation insurance (varies by role and state). Benefits like health insurance are additional but not technically mandatory for small employers.',
  },
  {
    question: 'Do I need to file payroll taxes in every state where I have an employee?',
    answer: 'Yes. If you have even one employee in a state, you must register with that state\'s tax authority, withhold state income tax (if applicable), pay state unemployment tax, and file quarterly and annual returns. Each state has its own forms, rates, deadlines, and online systems. This is the primary reason most foreign companies use a payroll provider.',
  },
  {
    question: 'What happens if I pay a US worker as a contractor instead of an employee?',
    answer: 'If the worker is actually an employee under US law (based on the degree of control, economic dependence, and integration into your business), you face misclassification penalties. These include back taxes, penalties for failure to withhold, potential lawsuits from the worker, and state-level fines. The IRS, Department of Labor, and state agencies all enforce worker classification rules independently.',
  },
  {
    question: 'Can I pay US employees in GBP or EUR?',
    answer: 'No. US employees must be paid in USD. You can fund your US bank account through international wire transfers, but the actual payroll must be disbursed in US dollars. Your payroll provider will debit your US bank account in USD.',
  },
];

export default function USPayrollPage() {
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
              US Payroll: How to Run Payroll in the United States as a Foreign Company
            </h1>
            {/* Answer-first block */}
            <div className="answer-block">
              <p className="text-lg text-text-secondary leading-relaxed">
                Running US payroll requires a US entity with an EIN, registration with federal and state tax authorities, and systems to handle withholding for federal income tax, Social Security, Medicare, and state-level taxes. As a foreign-owned company, you also face reporting obligations that domestic employers don&apos;t. Most foreign companies use a payroll provider rather than attempting to manage this in-house.
              </p>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Last updated: March 2026 &middot; 20 min read
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
                <span>US payroll involves <strong>federal income tax withholding</strong>, <strong>FICA</strong> (Social Security + Medicare, 7.65% each for employer and employee), <strong>FUTA</strong> (federal unemployment), and <strong>state taxes</strong> that vary wildly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>You must register separately in <strong>every state</strong> where you have employees. Each state has its own rules, rates, and filing deadlines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>Budget <strong>10-15% on top of gross salary</strong> for mandatory employer-side taxes and insurance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>As a foreign-owned entity, you have additional <Link href="/compliance" className="text-primary hover:text-primary-deep underline">IRS reporting obligations</Link> that most domestic payroll providers aren&apos;t aware of.</span>
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
            <section id="overview" className="mb-12">
              <h2>How US payroll works — the big picture</h2>
              <p>
                If you&apos;re coming from the UK or Europe, US payroll will feel both familiar and frustratingly different. The core concept is the same: you calculate gross pay, deduct taxes and contributions, and pay the employee the net amount. But the US adds layers of complexity that don&apos;t exist in most other countries.
              </p>
              <p>
                The main differences:
              </p>
              <ul>
                <li><strong>No centralised system.</strong> Unlike HMRC in the UK or a single national tax authority in most EU countries, the US has the IRS (federal) plus separate tax authorities in all 50 states, DC, and various local jurisdictions. You register and file with each one independently.</li>
                <li><strong>Employee-driven withholding.</strong> Employees tell you how much federal tax to withhold via the W-4 form. You don&apos;t calculate it based on a code from the tax authority like UK PAYE.</li>
                <li><strong>Employer taxes are separate.</strong> The employer pays its own share of Social Security, Medicare, and unemployment taxes — these are not part of the employee&apos;s deduction.</li>
                <li><strong>Benefits are employer-provided.</strong> Health insurance, retirement plans, and paid leave are largely employer decisions, not government mandates. This means more flexibility but also more responsibility. See our <Link href="/benefits" className="text-primary hover:text-primary-deep">US benefits guide</Link>.</li>
              </ul>
            </section>

            <section id="federal-taxes" className="mb-12">
              <h2>Federal income tax withholding</h2>
              <p>
                Every employer must withhold federal income tax from each employee&apos;s pay and remit it to the IRS. The amount withheld depends on:
              </p>
              <ul>
                <li>The employee&apos;s W-4 elections (filing status, dependents, additional withholding)</li>
                <li>Gross pay for the period</li>
                <li>The IRS withholding tables (Publication 15-T)</li>
              </ul>
              <p>
                Federal income tax is progressive, with 2026 brackets ranging from 10% to 37%. But you don&apos;t need to calculate this yourself — your payroll provider or software handles it based on W-4 inputs.
              </p>
              <p>
                <strong>Deposit schedules:</strong> the IRS determines your deposit frequency based on the total taxes you report. New employers typically deposit monthly. Larger employers deposit semi-weekly. These deposits cover both the employee&apos;s withheld income tax and the employer/employee shares of FICA.
              </p>
            </section>

            <section id="fica" className="mb-12">
              <h2>FICA: Social Security and Medicare</h2>
              <p>
                FICA (Federal Insurance Contributions Act) is the US equivalent of National Insurance. It funds Social Security (retirement, disability) and Medicare (healthcare for over-65s).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Component</th>
                      <th className="py-3 pr-4 text-text font-semibold">Employee share</th>
                      <th className="py-3 pr-4 text-text font-semibold">Employer share</th>
                      <th className="py-3 text-text font-semibold">Wage base (2026)</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Social Security</td>
                      <td className="py-3 pr-4">6.2%</td>
                      <td className="py-3 pr-4">6.2%</td>
                      <td className="py-3">$176,100</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Medicare</td>
                      <td className="py-3 pr-4">1.45%</td>
                      <td className="py-3 pr-4">1.45%</td>
                      <td className="py-3">No limit</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Additional Medicare</td>
                      <td className="py-3 pr-4">0.9%</td>
                      <td className="py-3 pr-4">None</td>
                      <td className="py-3">Over $200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                <strong>For UK companies:</strong> FICA at 7.65% (employer share) is roughly half of UK employer National Insurance (13.8%). But remember, US employers also typically pay for health insurance — which is already covered by NI in the UK.
              </p>
            </section>

            <section id="futa" className="mb-12">
              <h2>FUTA: Federal Unemployment Tax</h2>
              <p>
                FUTA (Federal Unemployment Tax Act) funds the federal unemployment system. The tax rate is 6.0% on the first $7,000 of each employee&apos;s wages per year. However, employers receive a credit of up to 5.4% for state unemployment taxes paid, reducing the effective FUTA rate to 0.6% in most cases.
              </p>
              <p>
                <strong>The maths:</strong> 0.6% &times; $7,000 = $42 per employee per year. It&apos;s not a significant cost, but you must file Form 940 annually and make deposits if your liability exceeds $500.
              </p>
            </section>

            <section id="state-taxes" className="mb-12">
              <h2>State-level payroll taxes</h2>
              <p>
                This is where US payroll gets genuinely complex. Each state has its own set of payroll taxes:
              </p>
              <ul>
                <li><strong>State income tax withholding:</strong> 41 states (plus DC) have a state income tax. Rates range from flat rates around 3% to progressive rates up to 13.3% (California). Nine states — including Texas, Florida, and Washington — have no state income tax.</li>
                <li><strong>State unemployment insurance (SUI):</strong> every state requires this. Rates vary by state and your &quot;experience rating&quot; (claims history). New employers typically start at a default rate, often 2-4%.</li>
                <li><strong>Disability insurance:</strong> some states (California, New Jersey, New York, Rhode Island, Hawaii) require employer contributions to short-term disability funds.</li>
                <li><strong>Paid family leave:</strong> an increasing number of states mandate paid family and medical leave programmes, funded through payroll deductions.</li>
                <li><strong>Local taxes:</strong> some cities and counties impose their own payroll or income taxes. New York City, Philadelphia, San Francisco, and others have local tax requirements.</li>
              </ul>
              <ComplianceCallout title="Registration requirement">
                <p className="text-text-secondary">
                  You must register as an employer with each state&apos;s tax authority <strong>before</strong> your first employee starts working there. This registration gets you a state withholding tax account and a state unemployment insurance account. Processing times vary — some states take 2-3 weeks. Do not leave this to the last minute.
                </p>
              </ComplianceCallout>
            </section>

            <section id="multi-state" className="mb-12">
              <h2>Multi-state complexity</h2>
              <p>
                If you have employees in multiple states — which is likely if you&apos;re hiring remote US workers — payroll complexity multiplies. For each state, you need:
              </p>
              <ul>
                <li>State employer registrations</li>
                <li>State-specific withholding calculations</li>
                <li>Quarterly state tax filings</li>
                <li>Annual state reconciliation returns</li>
                <li>Compliance with state-specific wage and hour laws</li>
              </ul>
              <p>
                Some practical realities:
              </p>
              <ul>
                <li><strong>Employees who move states</strong> trigger new registration requirements. Remote workers relocating is a common issue.</li>
                <li><strong>Reciprocity agreements</strong> exist between some states, simplifying withholding when an employee lives in one state and works in another.</li>
                <li><strong>Nexus implications:</strong> having an employee in a state can create corporate income tax nexus, meaning your entity may need to file a state corporate tax return and pay state corporate income tax there too.</li>
              </ul>
              <p>
                This is the single biggest argument for using a payroll provider rather than trying to handle US payroll manually.
              </p>
            </section>

            <section id="pay-schedules" className="mb-12">
              <h2>Pay schedules</h2>
              <p>
                In the UK, monthly payroll is standard. In the US, pay frequency varies and is regulated at the state level:
              </p>
              <ul>
                <li><strong>Weekly:</strong> common in construction and hourly roles</li>
                <li><strong>Bi-weekly (every 2 weeks):</strong> the most common schedule in the US. Results in 26 pay periods per year.</li>
                <li><strong>Semi-monthly (1st and 15th):</strong> required in some states for certain employees. Results in 24 pay periods per year.</li>
                <li><strong>Monthly:</strong> allowed in some states but not all. Not the default.</li>
              </ul>
              <p>
                <strong>For foreign companies accustomed to monthly payroll:</strong> check the laws in each state where you have employees. California, for example, requires semi-monthly payment for most employees. Running monthly payroll there would violate state law.
              </p>
            </section>

            <section id="w4-i9" className="mb-12">
              <h2>W-4 and I-9: essential onboarding forms</h2>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Form W-4 (Employee&apos;s Withholding Certificate)</h3>
              <p>
                Every new employee completes a W-4 to indicate their federal income tax withholding preferences. The form captures filing status (single, married, head of household), dependents, other income, deductions, and any additional withholding the employee requests.
              </p>
              <p>
                Your payroll system uses this information to calculate federal income tax withholding each pay period. Employees can update their W-4 at any time. Many states also have their own withholding allowance certificates.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Form I-9 (Employment Eligibility Verification)</h3>
              <p>
                The I-9 verifies that an employee is legally authorised to work in the United States. This is a federal requirement for <strong>every</strong> employee, regardless of citizenship or nationality.
              </p>
              <ul>
                <li>Section 1 must be completed by the employee on or before the first day of work</li>
                <li>Section 2 must be completed by the employer within 3 business days of the start date</li>
                <li>The employer must physically examine original identity and work authorisation documents (a list of acceptable documents is on the form)</li>
              </ul>
              <ComplianceCallout title="I-9 compliance">
                <p className="text-text-secondary">
                  I-9 errors are one of the most common compliance failures for new employers. Penalties for I-9 violations range from $252 to $2,507 per form for first offences, and up to $2,507 per form for substantive violations. Keep I-9s on file for at least 3 years after the hire date or 1 year after termination, whichever is later.
                </p>
              </ComplianceCallout>
            </section>

            <section id="foreign-company-specifics" className="mb-12">
              <h2>What foreign-owned companies specifically need to know</h2>
              <p>
                Everything above applies to all US employers. Here&apos;s what&apos;s different when the parent company is foreign:
              </p>
              <ul>
                <li><strong>Form 5472 reporting:</strong> any transaction between your US entity and its foreign owner — including payroll funding — must be reported on <Link href="/compliance/form-5472" className="text-primary hover:text-primary-deep">Form 5472</Link>. When the parent company wires money to the US entity to cover payroll, that&apos;s a reportable transaction.</li>
                <li><strong>Intercompany transaction documentation:</strong> keep clear records of every transfer between the foreign parent and US entity. Characterise each transfer (capital contribution, loan, management fee, etc.) and ensure consistency.</li>
                <li><strong>Transfer pricing:</strong> if the US entity pays management fees to the parent or vice versa, these must be at arm&apos;s-length rates. The IRS scrutinises related-party transactions involving foreign entities.</li>
                <li><strong>Payroll provider awareness:</strong> most US payroll providers (Gusto, ADP, Paychex) are designed for domestic companies. They handle the payroll mechanics fine but won&apos;t help you with Form 5472, transfer pricing, or foreign ownership reporting. You need a separate accountant who understands international tax.</li>
                <li><strong>Social security treaties:</strong> if your UK or EU employees work temporarily in the US (or vice versa), totalization agreements between countries can prevent double social security taxation. You&apos;ll need Certificate A1 (EU) or Certificate of Coverage (UK-US treaty).</li>
              </ul>
              <ComplianceCallout title="Common mistake">
                <p className="text-text-secondary">
                  Many foreign companies sign up with a US payroll provider, assume everything is handled, and miss their Form 5472 filing entirely. The payroll provider runs payroll correctly but has no visibility into — and no responsibility for — your foreign ownership reporting obligations. This gap costs companies $25,000 or more in penalties every year. Read our <Link href="/compliance" className="text-primary hover:text-primary-deep underline">compliance guide</Link> to avoid this.
                </p>
              </ComplianceCallout>
            </section>

            <section id="choosing-provider" className="mb-12">
              <h2>Choosing a US payroll provider</h2>
              <p>
                Unless you have a US-based finance team with payroll expertise, you&apos;ll use a payroll provider. The market breaks down into:
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Full-service payroll providers</h3>
              <ul>
                <li><strong>Gusto:</strong> popular with small businesses and startups. Clean interface, good onboarding tools, handles multi-state. From ~$40/month base + $6/employee/month.</li>
                <li><strong>Rippling:</strong> more comprehensive (HR + IT + payroll). Good for companies that want one system. Pricing starts around $8/employee/month for payroll.</li>
                <li><strong>ADP / Paychex:</strong> established providers with deeper support for complex situations. More expensive, less modern interfaces, but proven at scale.</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">What to look for as a foreign company</h3>
              <ul>
                <li><strong>Multi-state support:</strong> can they handle registrations and filings in all states where you have employees?</li>
                <li><strong>Remote onboarding:</strong> can employees complete W-4 and I-9 electronically? (I-9 still requires physical document examination or use of an authorised E-Verify agent.)</li>
                <li><strong>International wire support:</strong> can the provider debit from a US bank account funded by international wires?</li>
                <li><strong>Benefits integration:</strong> will they integrate with health insurance, 401(k), and other <Link href="/benefits" className="text-primary hover:text-primary-deep">benefits</Link> you offer?</li>
                <li><strong>Year-end reporting:</strong> do they handle W-2 preparation and filing?</li>
              </ul>
              <p>
                Remember: the payroll provider handles payroll. They do not handle your foreign-ownership tax obligations. You still need an accountant experienced with foreign-owned US entities.
              </p>
            </section>

            {/* CTA */}
            <AnimatedSection>
              <div className="card bg-surface mt-8 mb-12">
                <h3 className="text-xl font-semibold text-text mb-3">Running US payroll as a foreign company?</h3>
                <p className="text-text-secondary mb-4">
                  Teamed handles payroll, compliance, and the foreign-ownership reporting that most providers miss. Whether you&apos;re setting up your first US employee or scaling an existing team, we make sure nothing falls through the cracks.
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
