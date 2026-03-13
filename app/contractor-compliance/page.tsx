import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contractor Compliance Guide | Misclassification Risks & How to Stay Compliant',
  description: 'Understand contractor misclassification risks, country-specific rules, and how to protect your business. Covers IR35, ABC test, and global contractor compliance frameworks.',
};

export default function ContractorCompliancePage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Compliance Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Contractor Compliance: Misclassification Risks and How to Avoid Them
          </h1>
          <div className="border-l-4 border-nexus-purple pl-6 mb-6">
            <p className="text-lg text-nexus-gray-700 leading-relaxed">
              Contractor misclassification occurs when a company treats someone as an independent contractor when the working relationship actually meets the legal definition of employment. The penalties are serious: back taxes, social contributions, fines, and legal liability. Every country has its own tests and thresholds.
            </p>
          </div>
          <p className="text-sm text-nexus-gray-500 mb-12">
            Last updated: March 2026 &middot; 11 min read
          </p>
        </AnimatedSection>

        <div className="prose-custom">
          <AnimatedSection>
            <h2>Why this matters now</h2>
            <p>
              Governments worldwide are tightening enforcement. The UK&apos;s IR35 reforms shifted liability to hiring companies. The EU is proposing a directive that would presume employment unless proven otherwise. The IRS has stepped up audits of worker classification.
            </p>
            <p>
              The global shift to remote work made it easy to engage contractors across borders. The compliance infrastructure didn&apos;t keep up. Many companies are sitting on significant unrecognised risk.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>How misclassification is determined</h2>
            <p>
              Every country uses different criteria, but common factors include:
            </p>
            <ul>
              <li><strong>Control.</strong> Do you direct how, when, and where the work is done?</li>
              <li><strong>Integration.</strong> Is the worker integrated into your organisation (company email, team meetings, reporting lines)?</li>
              <li><strong>Economic dependence.</strong> Does the worker derive most of their income from you?</li>
              <li><strong>Equipment and tools.</strong> Do you provide the tools and workspace?</li>
              <li><strong>Substitution.</strong> Can the worker send someone else to do the job?</li>
              <li><strong>Exclusivity.</strong> Is the worker prohibited from working for others?</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Country-specific frameworks</h2>
            <ul>
              <li><strong>UK (IR35):</strong> The hiring company must assess whether the contractor would be an employee if engaged directly. If inside IR35, PAYE and NICs apply.</li>
              <li><strong>US (ABC Test / IRS 20-factor):</strong> California&apos;s AB5 law uses a strict ABC test. Federal classification uses a multi-factor economic reality test.</li>
              <li><strong>Germany:</strong> Courts apply a comprehensive test focused on integration into the business. Penalties include back-payment of social security contributions.</li>
              <li><strong>EU Directive (proposed):</strong> Would create a rebuttable presumption of employment for platform workers, with broader implications for contractor engagement.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>How to protect your business</h2>
            <ol>
              <li><strong>Audit current contractor relationships.</strong> Apply each country&apos;s classification test to every contractor engagement.</li>
              <li><strong>Fix the contract.</strong> Ensure contracts reflect the actual working relationship — and that the relationship matches what the contract says.</li>
              <li><strong>Convert where necessary.</strong> If a contractor is really an employee, convert them. An EOR can make this fast.</li>
              <li><strong>Use structured risk products.</strong> Some providers offer contractor compliance coverage that includes misclassification insurance and remediation support.</li>
              <li><strong>Review regularly.</strong> Classification isn&apos;t a one-time exercise. Relationships evolve, and what started as a genuine contractor engagement can drift into employment.</li>
            </ol>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 p-6 bg-nexus-gray-100 rounded-2xl border border-nexus-gray-200">
              <h3 className="text-lg font-bold text-nexus-gray-900 mb-2">Concerned about contractor risk?</h3>
              <p className="text-nexus-gray-700 mb-4">
                Get an expert assessment of your contractor engagements and understand your exposure.
              </p>
              <a
                href="https://www.teamed.global/contractors"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:no-underline"
              >
                Learn about contractor compliance solutions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
