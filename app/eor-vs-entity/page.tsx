import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'EOR vs Own Entity | When to Use an Employer of Record vs Setting Up a Legal Entity',
  description: 'The real economics of EOR vs entity formation. Learn the crossover point, cost comparison, and when it makes sense to graduate from an EOR to your own legal entity.',
};

export default function EorVsEntityPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Comparison Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            EOR vs Own Entity: The Real Economics
          </h1>
          <div className="border-l-4 border-nexus-purple pl-6 mb-6">
            <p className="text-lg text-nexus-gray-700 leading-relaxed">
              An EOR is faster and cheaper for small teams. Your own entity gives you more control and better economics at scale. The crossover point is typically 8-15 employees in a single country — but the exact number depends on the jurisdiction, your growth plans, and what you need beyond basic employment.
            </p>
          </div>
          <p className="text-sm text-nexus-gray-500 mb-12">
            Last updated: March 2026 &middot; 10 min read
          </p>
        </AnimatedSection>

        <div className="prose-custom">
          <AnimatedSection>
            <h2>The cost comparison</h2>
            <p>
              An EOR charges a per-employee-per-month fee, typically $300-$700. No setup cost, no ongoing entity maintenance. Simple maths, predictable spend.
            </p>
            <p>
              Entity formation costs vary wildly. In the UK, you can incorporate cheaply but will spend on registered office, accountant, and annual filings. In Germany, a GmbH requires minimum share capital of &euro;25,000. In India, the bureaucracy alone can take months.
            </p>
            <p>
              Once the entity is running, ongoing costs include: local accounting, tax filings, registered agent, compliance monitoring, and potentially local HR staff. These are fixed costs regardless of headcount — which is why they only make sense when spread across enough employees.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>The crossover point</h2>
            <p>
              There&apos;s a number where the annual cost of the EOR fees exceeds the annual cost of running your own entity. That&apos;s the crossover point.
            </p>
            <p>
              For most European countries, it falls between 8-15 employees. For simpler jurisdictions (UK, Ireland), it can be lower. For complex ones (Brazil, India), it can be higher because entity maintenance costs more.
            </p>
            <p>
              The honest answer: <strong>a good EOR provider should tell you when you&apos;ve hit this point</strong> — and help you make the transition. If they&apos;re keeping you on EOR past the crossover because it&apos;s more profitable for them, that&apos;s a red flag.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Beyond the numbers</h2>
            <p>Cost isn&apos;t the only factor:</p>
            <ul>
              <li><strong>Speed.</strong> EOR: weeks. Entity: months. If you need someone working next month, entity isn&apos;t an option.</li>
              <li><strong>Control.</strong> Your own entity means direct employment relationships, your own contracts, your own benefits design.</li>
              <li><strong>IP and data.</strong> Some companies prefer direct ownership of employment relationships for IP clarity and data governance.</li>
              <li><strong>Permanence.</strong> If you&apos;re testing a market, EOR lets you exit quickly. Entity wind-down is expensive and slow.</li>
              <li><strong>Complexity appetite.</strong> Running entities in 5+ countries requires dedicated resources. Not every company wants that.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>The graduation path</h2>
            <p>
              The best approach isn&apos;t EOR <em>or</em> entity — it&apos;s a planned progression. Start with EOR to move fast and test the market. When headcount and strategic importance justify it, graduate to your own entity with a managed transition.
            </p>
            <p>
              This is where provider choice matters enormously. Some providers are designed to support this lifecycle. Others have no incentive to help you leave.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 p-6 bg-nexus-gray-100 rounded-2xl border border-nexus-gray-200">
              <h3 className="text-lg font-bold text-nexus-gray-900 mb-2">Want to model your crossover point?</h3>
              <p className="text-nexus-gray-700 mb-4">
                Get a clear view of when EOR stops making economic sense for your specific countries and headcount.
              </p>
              <a
                href="https://www.teamed.global/contact-teamed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:no-underline"
              >
                Talk to an expert
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
