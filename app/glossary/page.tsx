import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'US Payroll & Compliance Glossary',
  description: 'Definitions of key US payroll, tax, and employment terms for foreign companies. Form 5472, FICA, EIN, FUTA, EOR, and more.',
};

const glossaryTerms = [
  { term: 'At-Will Employment', definition: 'The default employment relationship in most US states. Either the employer or employee can end the relationship at any time, for any lawful reason (or no reason), without notice. This is one of the biggest differences from UK/EU employment law, where statutory notice periods and unfair dismissal protections apply.' },
  { term: 'C-Corporation (C-Corp)', definition: 'A type of US business entity taxed separately from its owners. C-Corps pay corporate income tax on profits, and shareholders pay tax again on dividends ("double taxation"). Preferred by venture capital investors and often chosen by foreign companies planning to raise US funding.' },
  { term: 'EIN (Employer Identification Number)', definition: 'A 9-digit number assigned by the IRS to US business entities for tax identification purposes. Required to open a bank account, file tax returns, and run payroll. Foreign-owned entities apply using Form SS-4.' },
  { term: 'EOR (Employer of Record)', definition: 'A third-party company that legally employs workers on your behalf in countries or states where you don\'t have a legal entity. The EOR handles payroll, taxes, and compliance. You manage the employee\'s day-to-day work. Common as a bridge before setting up your own US entity.' },
  { term: 'FICA (Federal Insurance Contributions Act)', definition: 'The payroll tax that funds Social Security and Medicare. Both employer and employee contribute: 6.2% each for Social Security (up to the annual wage base, $168,600 in 2024) and 1.45% each for Medicare (no cap). Total employer FICA cost: 7.65% of gross wages.' },
  { term: 'FIRPTA (Foreign Investment in Real Property Tax Act)', definition: 'Requires withholding tax on the sale of US real property interests by foreign persons or entities. Relevant if a foreign-owned US entity buys or sells real estate.' },
  { term: 'FLSA (Fair Labor Standards Act)', definition: 'The federal law governing minimum wage, overtime pay, and child labor standards. Sets the federal minimum wage ($7.25/hour, though most states set higher minimums) and requires overtime pay at 1.5x for hours worked over 40 in a workweek for non-exempt employees.' },
  { term: 'FMLA (Family and Medical Leave Act)', definition: 'Federal law requiring employers with 50+ employees to provide up to 12 weeks of unpaid, job-protected leave for qualifying family and medical reasons. Many states have their own, often more generous, family leave laws.' },
  { term: 'Form 5472', definition: 'IRS information return required for any US corporation or disregarded entity that is 25% or more foreign-owned and has "reportable transactions" with related foreign parties. Penalty for failure to file: $25,000 per form, per year. One of the most commonly missed obligations for foreign-owned US entities.' },
  { term: 'Form W-4', definition: 'Employee\'s Withholding Certificate. Completed by each new employee to determine how much federal income tax to withhold from their paycheck. Replaced the allowance-based system in 2020 with a simplified format.' },
  { term: 'Form I-9', definition: 'Employment Eligibility Verification. Required for every employee hired in the US, regardless of citizenship. Verifies identity and authorization to work. Must be completed within 3 business days of the employee\'s start date.' },
  { term: 'FUTA (Federal Unemployment Tax Act)', definition: 'Federal payroll tax paid entirely by the employer, funding the federal unemployment system. Rate is 6.0% on the first $7,000 of each employee\'s wages, but with the standard credit for state unemployment contributions, the effective rate is typically 0.6%.' },
  { term: 'GEMO (Global Employment Management Organisation)', definition: 'A comprehensive model for managing employees across multiple countries, including entity management, payroll, compliance, and HR. Goes beyond simple EOR by providing end-to-end employment infrastructure.' },
  { term: 'ICHRA (Individual Coverage Health Reimbursement Arrangement)', definition: 'A health benefit arrangement where employers reimburse employees tax-free for individual health insurance premiums and medical expenses. Popular with small to mid-size companies that can\'t afford group health plans. No minimum or maximum contribution limits.' },
  { term: 'LLC (Limited Liability Company)', definition: 'A flexible US business entity that provides liability protection. By default, a single-member LLC owned by a foreign parent is treated as a "disregarded entity" for US federal tax purposes — meaning it doesn\'t file its own income tax return but must file Form 5472 for reportable transactions with its foreign owner.' },
  { term: 'Nexus', definition: 'A sufficient connection between a business and a state that triggers the obligation to register, collect/remit taxes, and comply with that state\'s employment laws. Having even one employee in a state typically creates nexus.' },
  { term: 'Pro Forma 1120', definition: 'A US corporate income tax return (Form 1120) filed by a foreign-owned disregarded entity solely for the purpose of attaching Form 5472. The entity reports zero income but must still file to satisfy the Form 5472 requirement.' },
  { term: 'Registered Agent', definition: 'A person or company designated to receive legal and tax documents on behalf of a business entity in a given state. Required in every state where the entity is registered. Many foreign companies use a registered agent service (typically $100-300/year per state).' },
  { term: 'SUTA (State Unemployment Tax Act)', definition: 'State-level unemployment insurance tax, paid by employers. Rates and wage bases vary significantly by state and by the employer\'s claims history (experience rating). New employers typically start at a default rate until they establish a claims history.' },
  { term: 'Transfer Pricing', definition: 'The pricing of transactions between related entities (e.g., a UK parent company and its US subsidiary). The IRS requires these transactions to be at "arm\'s length" — priced as if the entities were unrelated. Foreign-owned US entities must maintain documentation supporting their transfer pricing policies.' },
  { term: '401(k)', definition: 'An employer-sponsored retirement savings plan that allows employees to contribute pre-tax earnings. Employers may offer matching contributions. Named after Section 401(k) of the Internal Revenue Code. The standard retirement benefit in the US — roughly equivalent to a workplace pension in the UK.' },
];

export default function GlossaryPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Glossary
          </h1>
          <div className="answer-block">
            <p>
              Key US payroll, tax, and employment terms explained for companies headquartered outside the United States. If a term in our guides is unfamiliar, you&apos;ll find it here.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 space-y-6">
          {glossaryTerms.map((item, index) => (
            <AnimatedSection key={item.term} delay={Math.min(index * 0.03, 0.5)}>
              <div id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-24">
                <h2 className="text-lg font-bold text-text mb-1">{item.term}</h2>
                <p className="text-text-secondary leading-relaxed">{item.definition}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
