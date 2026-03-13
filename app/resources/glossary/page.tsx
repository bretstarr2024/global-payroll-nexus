import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Glossary | Global Employment & Payroll Terms Defined',
  description: 'A comprehensive glossary of global employment, payroll, and compliance terminology. Clear definitions for EOR, PEO, PAYE, social contributions, and more.',
};

const glossaryTerms = [
  { term: 'Employer of Record (EOR)', definition: 'A third-party organisation that serves as the legal employer for workers in a country where the client company does not have a legal entity. The EOR handles payroll, tax withholding, benefits, and compliance.' },
  { term: 'Professional Employer Organization (PEO)', definition: 'A company that provides co-employment services, sharing employer responsibilities with the client. Common in the US, less so internationally. Unlike an EOR, a PEO requires the client to have a local entity.' },
  { term: 'Gross-to-Net', definition: 'The calculation that converts an employee\'s total (gross) compensation into their take-home (net) pay after all deductions including income tax, social security, and other statutory contributions.' },
  { term: 'Statutory Deductions', definition: 'Mandatory deductions from employee pay required by law, including income tax, social security contributions, health insurance premiums, and pension contributions. These vary by country.' },
  { term: 'Employer Contributions', definition: 'Costs that the employer must pay on top of the employee\'s gross salary. Includes employer-side social security, health insurance, pension, and other mandatory payments. Can range from 8% (US) to 45%+ (France) of gross salary.' },
  { term: 'Misclassification', definition: 'The incorrect classification of a worker as an independent contractor when the working relationship meets the legal definition of employment. Can result in back taxes, penalties, and legal liability.' },
  { term: 'Permanent Establishment (PE)', definition: 'A tax concept where a company\'s activities in a foreign country create a taxable presence, even without a formal entity. Having employees via EOR can sometimes trigger PE risk depending on their activities.' },
  { term: 'IR35', definition: 'UK tax legislation that determines whether a contractor is genuinely self-employed or should be treated as an employee for tax purposes. Since April 2021, the hiring company (not the contractor) is responsible for making this determination.' },
  { term: '13th Month Salary', definition: 'A mandatory bonus payment equal to one month\'s salary, required by law in many countries including the Philippines, Brazil, and several European nations. Usually paid in December.' },
  { term: 'GEMO (Global Employment Management Operations)', definition: 'A managed service model where a provider handles payroll, compliance, and employment administration for companies that have their own legal entities in multiple countries.' },
  { term: 'Crossover Point', definition: 'The headcount at which the cost of using an EOR exceeds the cost of operating your own legal entity in a given country. Typically falls between 8-15 employees depending on the jurisdiction.' },
  { term: 'Right-to-Work Check', definition: 'The legal requirement to verify that a prospective employee has the legal right to work in the country where they will be employed. Requirements and documentation vary by jurisdiction.' },
];

export default function GlossaryPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Glossary
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Global employment glossary
          </h1>
          <p className="text-lg text-nexus-gray-700 max-w-2xl mb-12">
            Key terms in international payroll, EOR, and employment compliance — clearly defined.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {glossaryTerms.map((item, index) => (
            <AnimatedSection key={item.term} delay={index * 0.03}>
              <div className="card" id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <h2 className="text-lg font-bold text-nexus-gray-900 mb-2">{item.term}</h2>
                <p className="text-nexus-gray-700">{item.definition}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
