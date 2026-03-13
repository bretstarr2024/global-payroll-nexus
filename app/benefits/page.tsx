import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ComplianceCallout } from '@/components/ComplianceCallout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'US Employee Benefits & Employment Law | Guide for Foreign Companies',
  description: 'Comprehensive guide to US employee benefits and employment law for foreign companies. Health insurance, 401(k), PTO, at-will employment, FLSA, ADA, FMLA and what surprises UK/EU employers.',
};

const tocItems = [
  { id: 'overview', label: 'Benefits landscape' },
  { id: 'health-insurance', label: 'Health insurance' },
  { id: 'retirement', label: '401(k) retirement plans' },
  { id: 'pto', label: 'PTO and leave' },
  { id: 'at-will', label: 'At-will employment' },
  { id: 'flsa', label: 'FLSA (wage & hour)' },
  { id: 'ada', label: 'ADA (disability)' },
  { id: 'fmla', label: 'FMLA (family leave)' },
  { id: 'surprises', label: 'What surprises UK/EU companies' },
  { id: 'building-package', label: 'Building a benefits package' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Is health insurance legally required for US employees?',
    answer: 'Only if you have 50+ full-time equivalent employees (the ACA employer mandate). Below that threshold, there is no federal requirement to offer health insurance. However, not offering it makes you uncompetitive in the US job market — most candidates expect employer-sponsored health coverage and will not accept a role without it.',
  },
  {
    question: 'How much does employer health insurance cost in the US?',
    answer: 'For 2026, average employer costs are roughly $7,500-$9,000/year for single coverage and $18,000-$23,000/year for family coverage. The employer typically pays 70-80% of the premium, with employees covering the rest. Costs vary significantly by state, plan type, and the demographics of your workforce.',
  },
  {
    question: 'Do US employees get statutory sick pay?',
    answer: 'There is no federal statutory sick pay requirement in the US. Some states and cities mandate paid sick leave — California requires at least 5 days, New York City requires up to 56 hours — but many states have no requirement at all. This is one of the biggest surprises for UK and EU companies.',
  },
  {
    question: 'Can I fire a US employee at any time for any reason?',
    answer: 'In principle, yes — at-will employment means either party can end the relationship at any time, for any lawful reason, without notice. In practice, there are significant exceptions: you cannot terminate for discriminatory reasons (race, sex, religion, age, disability, etc.), in retaliation for protected activity (whistleblowing, filing a complaint), or in violation of an employment contract. Always document performance issues and consult legal counsel before terminating.',
  },
  {
    question: 'What is a competitive PTO allowance in the US?',
    answer: 'The US average for professional roles is 15-20 days per year. For mid-market tech and professional services companies hiring in competitive markets, 20-25 days (or unlimited PTO policies) is increasingly standard. Remember there are also typically 10-11 paid public holidays. UK companies often match their home-country allowance (25+ days) which is seen as very generous in the US context.',
  },
  {
    question: 'Do I need to provide a notice period when terminating a US employee?',
    answer: 'Generally no. Unlike the UK and most EU countries, US at-will employment does not require a statutory notice period. Exceptions: the WARN Act requires 60 days\' notice for mass layoffs (100+ employees affected), and some states have mini-WARN acts with lower thresholds. Individual employment contracts can also specify notice periods, but this is not the default.',
  },
];

export default function BenefitsPage() {
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
              US Employee Benefits &amp; Employment Law: A Guide for Foreign Companies
            </h1>
            {/* Answer-first block */}
            <div className="answer-block">
              <p className="text-lg text-text-secondary leading-relaxed">
                The US has no universal healthcare, no mandatory pension contributions, no statutory minimum paid leave, and no required notice period for termination. For UK and EU companies, this means you&apos;re building a benefits package largely from scratch — and the choices you make directly affect your ability to hire good people. This guide covers what&apos;s legally required, what&apos;s expected, and what will surprise you.
              </p>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Last updated: March 2026 &middot; 22 min read
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
                <span><strong>Health insurance</strong> is not legally required for employers with fewer than 50 employees, but you cannot hire competitively without it. Budget $7,500-$9,000/employee/year for single coverage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>There is <strong>no federal paid leave requirement</strong> — no sick pay, no holiday entitlement, no parental leave (beyond 12 weeks unpaid FMLA for companies with 50+ employees).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span><strong>At-will employment</strong> means no notice periods and no redundancy pay — but anti-discrimination and retaliation laws still apply strongly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span>Budget <strong>20-30% on top of salary</strong> for a competitive benefits package (health, retirement, PTO) in addition to the <Link href="/us-payroll" className="text-primary hover:text-primary-deep underline">10-15% employer payroll taxes</Link>.</span>
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
              <h2>The US benefits landscape</h2>
              <p>
                If you&apos;re used to the UK or EU, where governments mandate most employment benefits, the US model will feel alien. In the US, benefits are primarily a market mechanism — employers offer them to attract and retain talent, not because the law requires them.
              </p>
              <p>
                This creates an odd dynamic: legally, you could hire US employees with nothing beyond minimum wage and zero benefits. Practically, you wouldn&apos;t fill a single role. The gap between legal requirements and market expectations is enormous.
              </p>
              <p>
                Here&apos;s what that means for you as a foreign employer:
              </p>
              <ul>
                <li>You have <strong>more flexibility</strong> than you&apos;re used to — you choose the benefits, the amounts, and the eligibility rules</li>
                <li>You also have <strong>more responsibility</strong> — there&apos;s no NHS, no statutory pension, no statutory sick pay to fall back on</li>
                <li>Your benefits package is a <strong>competitive differentiator</strong> in hiring — it matters as much as salary for many candidates</li>
                <li>The total cost of employment is <strong>higher than base salary suggests</strong> — budget 30-45% on top of gross salary for taxes plus benefits</li>
              </ul>
            </section>

            <section id="health-insurance" className="mb-12">
              <h2>Health insurance</h2>
              <p>
                This is the single most important benefit in the US. Americans rely on employer-sponsored health insurance for themselves and their families. Not offering it is effectively disqualifying for most professional roles.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Legal requirements</h3>
              <p>
                The Affordable Care Act (ACA) requires employers with <strong>50 or more full-time equivalent employees</strong> to offer affordable health insurance to full-time workers or face penalties. This is the &quot;employer mandate.&quot;
              </p>
              <p>
                Below 50 employees, there is no federal requirement to offer health insurance. But — and this cannot be overstated — the market expects it.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Options for smaller foreign-owned companies</h3>
              <p>
                For companies with fewer than 50 US employees, two main approaches:
              </p>
              <ul>
                <li>
                  <strong>Group health insurance:</strong> you purchase a plan from an insurance carrier (e.g., Blue Cross Blue Shield, Aetna, UnitedHealthcare) and offer it to all eligible employees. The employer typically pays 70-80% of the premium. This is the traditional approach.
                </li>
                <li>
                  <strong>ICHRA (Individual Coverage Health Reimbursement Arrangement):</strong> instead of buying a group plan, you give each employee a fixed monthly allowance to purchase their own individual health insurance plan on the ACA marketplace. The employee chooses their own plan; you reimburse up to the allowance amount tax-free.
                </li>
              </ul>
              <p>
                <strong>ICHRA is increasingly popular with foreign-owned companies</strong> because:
              </p>
              <ul>
                <li>No need to select and administer a group plan across multiple states</li>
                <li>Employees in different states choose plans available in their local market</li>
                <li>You set a fixed, predictable budget per employee</li>
                <li>Simpler to administer, especially for distributed teams</li>
                <li>No minimum participation requirements (group plans typically need 70%+ of eligible employees to participate)</li>
              </ul>
              <p>
                ICHRA providers like Venteur, Take Command, and PeopleKeep handle the administration. Typical costs: $5-$15/employee/month for the platform, plus the reimbursement allowance you set.
              </p>

              <ComplianceCallout title="Budget guidance">
                <p className="text-text-secondary">
                  A competitive health insurance allowance for a single employee is <strong>$500-$700/month</strong> ($6,000-$8,400/year). For employees with families, <strong>$1,200-$1,800/month</strong> ($14,400-$21,600/year). These numbers vary by state — healthcare in New York is more expensive than healthcare in Texas.
                </p>
              </ComplianceCallout>
            </section>

            <section id="retirement" className="mb-12">
              <h2>401(k) retirement plans</h2>
              <p>
                A 401(k) is the US equivalent of a workplace pension. It&apos;s a tax-advantaged retirement savings account funded primarily by employee contributions, with optional employer matching.
              </p>
              <p>
                <strong>There is no legal requirement to offer a 401(k)</strong> at the federal level, although some states (California, Illinois, and others) now require employers to offer a retirement plan or auto-enroll employees in a state-run programme.
              </p>
              <p>
                Like health insurance, a 401(k) is expected by most professional candidates:
              </p>
              <ul>
                <li><strong>Employee contributions:</strong> up to $23,500/year (2026 limit), deducted from pay pre-tax</li>
                <li><strong>Employer match:</strong> the typical match is 3-6% of salary. A common structure is &quot;100% match up to 4% of salary&quot; — meaning if the employee contributes 4%, you contribute 4%</li>
                <li><strong>Vesting schedules:</strong> you can require employees to stay for a period (typically 2-4 years) before your matching contributions fully vest. This acts as a retention tool.</li>
              </ul>
              <p>
                401(k) administration requires a plan provider. Options include Guideline, Human Interest, Vestwell, and traditional providers like Fidelity and Vanguard. Costs range from $50-$150/month base plus $4-$10/employee/month.
              </p>
              <p>
                <strong>For UK companies:</strong> a 4% employer match is roughly equivalent to the UK auto-enrolment minimum employer contribution (3%), so it&apos;s a comparable cost.
              </p>
            </section>

            <section id="pto" className="mb-12">
              <h2>PTO and leave</h2>
              <p>
                The US has no federal requirement for paid annual leave, paid sick leave, or paid parental leave. This is probably the single most shocking fact for UK and European companies.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Paid time off (vacation)</h3>
              <p>
                There is no federal or national minimum. The market standard for professional roles:
              </p>
              <ul>
                <li>Entry level: 10-15 days</li>
                <li>Mid-career: 15-20 days</li>
                <li>Senior: 20-25 days</li>
                <li>Many tech companies now offer &quot;unlimited PTO&quot; policies (where actual usage typically averages 15-18 days)</li>
              </ul>
              <p>
                On top of PTO, most employers offer 10-11 paid public holidays (New Year&apos;s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas, etc.).
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Sick leave</h3>
              <p>
                No federal requirement. However, a growing number of states and cities mandate paid sick leave:
              </p>
              <ul>
                <li>California: 5 days/40 hours minimum</li>
                <li>New York: up to 56 hours depending on employer size</li>
                <li>Washington: 1 hour per 40 hours worked</li>
                <li>Many other states and cities have their own requirements</li>
              </ul>
              <p>
                Many employers offer 5-10 sick days per year, or fold sick time into a combined PTO bank.
              </p>

              <h3 className="text-xl font-semibold text-text mt-8 mb-3">Parental leave</h3>
              <p>
                No federal paid parental leave exists. FMLA (covered below) provides 12 weeks of <strong>unpaid, job-protected</strong> leave, but only for companies with 50+ employees.
              </p>
              <p>
                Competitive employers typically offer 12-16 weeks of paid parental leave for the birthing parent and 4-8 weeks for non-birthing parents. Some states (California, New York, New Jersey, Washington, Massachusetts, and others) have state-funded paid family leave programmes.
              </p>
            </section>

            <section id="at-will" className="mb-12">
              <h2>At-will employment</h2>
              <p>
                The US default is &quot;at-will&quot; employment — either the employer or the employee can end the employment relationship at any time, for any lawful reason, with no notice period.
              </p>
              <p>
                For UK and EU companies accustomed to statutory notice periods, redundancy consultation, and unfair dismissal protections, this is a fundamental shift. In practice:
              </p>
              <ul>
                <li><strong>No statutory notice period.</strong> You can terminate employment immediately. Employees can resign immediately.</li>
                <li><strong>No statutory redundancy pay.</strong> There is no UK-style statutory redundancy payment. Severance is discretionary, though commonly offered (typically 1-2 weeks per year of service).</li>
                <li><strong>No unfair dismissal tribunal.</strong> There is no equivalent to the UK employment tribunal system for &quot;ordinary&quot; unfair dismissal.</li>
              </ul>
              <p>
                <strong>But at-will is not unlimited.</strong> You cannot terminate for:
              </p>
              <ul>
                <li>Discriminatory reasons (race, colour, religion, sex, national origin, age over 40, disability, genetic information)</li>
                <li>Retaliation (employee filed a complaint, participated in an investigation, requested accommodations)</li>
                <li>Exercising legal rights (taking FMLA leave, filing a workers&apos; comp claim, wage complaints)</li>
                <li>Violation of public policy (refusing to commit an illegal act)</li>
              </ul>
              <p>
                Employment litigation is common and expensive in the US. Even in an at-will state, document performance issues, follow a consistent process, and consult US employment counsel before terminating.
              </p>
            </section>

            <section id="flsa" className="mb-12">
              <h2>FLSA: Fair Labor Standards Act</h2>
              <p>
                The FLSA is the foundational US wage and hour law. It governs:
              </p>
              <ul>
                <li><strong>Minimum wage:</strong> $7.25/hour federally (many states are higher — California is $16.50, New York City is $16.50)</li>
                <li><strong>Overtime:</strong> non-exempt employees must be paid 1.5x their regular rate for hours worked over 40 in a workweek</li>
                <li><strong>Exempt vs non-exempt classification:</strong> salaried employees earning above a threshold ($58,656/year as of 2026) who perform executive, administrative, or professional duties are &quot;exempt&quot; from overtime. Everyone else is &quot;non-exempt&quot; and entitled to overtime.</li>
              </ul>
              <ComplianceCallout title="Common error">
                <p className="text-text-secondary">
                  Foreign companies often assume that all salaried employees are exempt from overtime. This is incorrect. Exemption depends on <strong>both</strong> the salary level and the nature of the work. Misclassifying a non-exempt employee as exempt — and failing to pay overtime — triggers back pay, penalties, and potential class action lawsuits. Get this right from day one.
                </p>
              </ComplianceCallout>
            </section>

            <section id="ada" className="mb-12">
              <h2>ADA: Americans with Disabilities Act</h2>
              <p>
                The ADA requires employers with 15 or more employees to provide &quot;reasonable accommodations&quot; to qualified employees with disabilities, unless doing so would cause &quot;undue hardship.&quot;
              </p>
              <p>
                Reasonable accommodations might include modified work schedules, ergonomic equipment, remote work arrangements, or adjusted job duties. The key is an interactive process — you must engage in good-faith discussion with the employee about what accommodations would enable them to perform their job.
              </p>
              <p>
                The ADA also prohibits disability-based discrimination in hiring, promotion, and termination.
              </p>
            </section>

            <section id="fmla" className="mb-12">
              <h2>FMLA: Family and Medical Leave Act</h2>
              <p>
                FMLA applies to employers with 50 or more employees within a 75-mile radius. It provides eligible employees with up to 12 weeks of <strong>unpaid, job-protected</strong> leave per year for:
              </p>
              <ul>
                <li>Birth and care of a newborn</li>
                <li>Placement of a child for adoption or foster care</li>
                <li>Care of a spouse, child, or parent with a serious health condition</li>
                <li>The employee&apos;s own serious health condition</li>
              </ul>
              <p>
                To be eligible, an employee must have worked for you for at least 12 months and at least 1,250 hours in the preceding 12 months.
              </p>
              <p>
                <strong>Critical point for UK companies:</strong> FMLA leave is <strong>unpaid</strong>. Compare this to UK statutory maternity pay (up to 39 weeks paid) and you&apos;ll see why competitive US employers offer supplementary paid leave policies.
              </p>
              <p>
                Several states have their own family leave laws that go beyond FMLA — California&apos;s CFRA, New York&apos;s PFL, and Washington&apos;s PFML, among others. These may provide paid leave, apply to smaller employers, or cover additional family members.
              </p>
            </section>

            <section id="surprises" className="mb-12">
              <h2>What surprises UK and EU companies about US employment</h2>
              <p>
                After working with dozens of European companies expanding to the US, here are the things that consistently catch people off guard:
              </p>

              <div className="space-y-6 mt-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">No statutory sick pay</h3>
                  <p className="text-text-secondary">In the UK, SSP is automatic. In the US, it depends on the state, your policy, and your company size. Some of your US employees may have no paid sick leave entitlement unless you create one.</p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">No mandatory notice period</h3>
                  <p className="text-text-secondary">An employee can resign on Monday and not come back on Tuesday. You can terminate someone with no notice. Two weeks&apos; notice is customary but not legally required. This shocks companies used to 1-3 month notice periods.</p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">Health insurance is your problem</h3>
                  <p className="text-text-secondary">There is no NHS equivalent. Your employees depend on you for health coverage. If you don&apos;t offer it, they&apos;re buying it themselves on the individual market at full price — often $500-$800/month for a single person.</p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">Employment litigation culture</h3>
                  <p className="text-text-secondary">The US has a far more litigious employment environment than the UK or EU. Wrongful termination claims, discrimination suits, and wage-and-hour class actions are common. Carry Employment Practices Liability Insurance (EPLI) and consult US counsel before making termination decisions.</p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">State-by-state variation</h3>
                  <p className="text-text-secondary">There is no &quot;US employment law&quot; — there&apos;s federal law, 50 state laws, and thousands of local ordinances. California employment law is dramatically different from Texas employment law. Every state where you have employees is a separate compliance environment.</p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">Benefits as a competitive weapon</h3>
                  <p className="text-text-secondary">Because so little is mandated, the benefits you offer are a genuine differentiator. UK companies that mirror their home-country generosity (25+ days PTO, paid parental leave, comprehensive health coverage) find it much easier to recruit top US talent.</p>
                </div>
              </div>
            </section>

            <section id="building-package" className="mb-12">
              <h2>Building a competitive benefits package</h2>
              <p>
                Here&apos;s a practical framework for a mid-market foreign company hiring 5-25 US employees:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 text-text font-semibold">Benefit</th>
                      <th className="py-3 pr-4 text-text font-semibold">Recommendation</th>
                      <th className="py-3 text-text font-semibold">Approx. cost per employee/year</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Health insurance</td>
                      <td className="py-3 pr-4">ICHRA with $600-$700/month allowance (single)</td>
                      <td className="py-3">$7,200-$8,400</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">401(k)</td>
                      <td className="py-3 pr-4">4% employer match</td>
                      <td className="py-3">~4% of salary</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">PTO</td>
                      <td className="py-3 pr-4">20-25 days + 10-11 holidays</td>
                      <td className="py-3">Built into salary</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Parental leave</td>
                      <td className="py-3 pr-4">12-16 weeks paid (birthing), 4-8 weeks (non-birthing)</td>
                      <td className="py-3">Variable</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Life &amp; disability insurance</td>
                      <td className="py-3 pr-4">1x salary life, short &amp; long-term disability</td>
                      <td className="py-3">$300-$600</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-text">Total benefits cost</td>
                      <td className="py-3 pr-4" colSpan={2}>
                        <span className="font-semibold text-text">$12,000-$18,000+ per employee per year</span> (on top of <Link href="/us-payroll" className="text-primary hover:text-primary-deep">payroll taxes</Link>)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                For a US employee earning $100,000 base salary, total employer cost including payroll taxes and benefits is typically $130,000-$145,000. This is comparable to total employer costs in the UK and most EU countries — the money just goes to different places.
              </p>
            </section>

            {/* CTA */}
            <AnimatedSection>
              <div className="card bg-surface mt-8 mb-12">
                <h3 className="text-xl font-semibold text-text mb-3">Need help building a US benefits package?</h3>
                <p className="text-text-secondary mb-4">
                  Teamed helps foreign companies set up competitive, compliant US benefits alongside payroll and <Link href="/entity-formation" className="text-primary hover:text-primary-deep">entity formation</Link>. We handle the complexity so your US employees get great benefits and you stay compliant.
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
