import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Payroll Compliance Guide | Statutory Requirements Across Jurisdictions',
  description: 'Understand payroll compliance requirements across international jurisdictions. Tax withholding, social contributions, filing deadlines, and common compliance failures.',
};

export default function PayrollCompliancePage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Compliance Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Payroll Compliance: What You Need to Get Right
          </h1>
          <div className="border-l-4 border-nexus-purple pl-6 mb-6">
            <p className="text-lg text-nexus-gray-700 leading-relaxed">
              Payroll compliance means calculating, withholding, and remitting the correct amounts for income tax, social security, and other statutory contributions — on time, in every jurisdiction where you have employees. Getting it wrong means penalties, back-payments, and audit exposure.
            </p>
          </div>
          <p className="text-sm text-nexus-gray-500 mb-12">
            Last updated: March 2026 &middot; 9 min read
          </p>
        </AnimatedSection>

        <div className="prose-custom">
          <AnimatedSection>
            <h2>The compliance landscape</h2>
            <p>
              Every country has its own system for funding social protections — healthcare, pensions, unemployment insurance, disability coverage. As an employer, you&apos;re responsible for calculating the correct deductions, paying your share of contributions, and filing with the relevant authorities.
            </p>
            <p>
              The challenge isn&apos;t understanding any single country. It&apos;s managing the cumulative complexity across all of them simultaneously, especially when rules change mid-year.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Common compliance failures</h2>
            <ul>
              <li><strong>Late filing.</strong> Missing a statutory filing deadline, even by a day, can trigger automatic penalties in many jurisdictions.</li>
              <li><strong>Incorrect employer contributions.</strong> Under-calculating social security or pension contributions is a common and expensive mistake.</li>
              <li><strong>Failing to account for rate changes.</strong> Tax bands and contribution rates change, sometimes multiple times per year.</li>
              <li><strong>Wrong currency or payment method.</strong> Some countries require payment through specific banking channels or in local currency only.</li>
              <li><strong>Missing mandatory payments.</strong> 13th month salary, holiday pay, severance reserves — these are legally required in many countries and easy to miss if you&apos;re applying domestic assumptions.</li>
              <li><strong>Payslip errors.</strong> Many countries have strict requirements for what must appear on a payslip, including specific line items and calculations.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>How to stay compliant</h2>
            <ol>
              <li><strong>Use local expertise.</strong> Don&apos;t try to interpret foreign tax law yourself. Use a local payroll provider, accountant, or EOR with proven in-country experience.</li>
              <li><strong>Build a compliance calendar.</strong> Map every filing deadline, rate change date, and statutory payment obligation across all your countries.</li>
              <li><strong>Audit regularly.</strong> Run quarterly audits comparing what you paid against what you should have paid. Catch discrepancies early.</li>
              <li><strong>Document everything.</strong> If a tax authority asks questions, your best defence is a clean audit trail showing exactly how you calculated and remitted every payment.</li>
              <li><strong>Stay current.</strong> Subscribe to regulatory updates in every jurisdiction. Rules change, and ignorance isn&apos;t a defence.</li>
            </ol>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 p-6 bg-nexus-gray-100 rounded-2xl border border-nexus-gray-200">
              <h3 className="text-lg font-bold text-nexus-gray-900 mb-2">Need compliant payroll across multiple countries?</h3>
              <p className="text-nexus-gray-700 mb-4">
                One process, one team, one audit trail — across every country and employment model.
              </p>
              <a
                href="https://www.teamed.global/global-payroll"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:no-underline"
              >
                Learn about managed global payroll
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
