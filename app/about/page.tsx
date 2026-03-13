import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Global Payroll Nexus',
  description: 'Global Payroll Nexus is an independent knowledge resource for companies hiring internationally. Built with expertise from global employment practitioners.',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            About Global Payroll Nexus
          </h1>
          <div className="prose-custom">
            <p>
              Global Payroll Nexus is an independent knowledge resource for companies hiring internationally. We exist because most information about global employment is either too vague to be useful, too salesy to be trusted, or too outdated to be safe.
            </p>
            <p>
              We publish country-by-country payroll guides, compliance frameworks, EOR comparisons, and practical analysis — written by people who actually do this work, not content marketers who googled it.
            </p>
            <h2>What we cover</h2>
            <ul>
              <li><strong>Employer of Record (EOR)</strong> — how it works, when to use it, how to choose a provider</li>
              <li><strong>Global Payroll</strong> — multi-country payroll mechanics, compliance, and provider models</li>
              <li><strong>Country Guides</strong> — employment law, employer costs, statutory benefits, and hiring requirements by country</li>
              <li><strong>Contractor Compliance</strong> — misclassification risks, classification frameworks, and how to stay legal</li>
              <li><strong>Entity Formation</strong> — when to set up your own entity and how the economics compare to EOR</li>
            </ul>
            <h2>Our editorial approach</h2>
            <p>
              We follow three rules:
            </p>
            <ol>
              <li><strong>Answer first.</strong> Every page leads with the answer, not the preamble. If you came here with a question, you should find the answer in the first paragraph.</li>
              <li><strong>Be specific.</strong> &ldquo;Employer costs vary by country&rdquo; is not useful. &ldquo;Employer costs in France add 40-45% on top of gross salary&rdquo; is.</li>
              <li><strong>Say what we don&apos;t know.</strong> Compliance is complex. When the answer depends on specific circumstances, we say so rather than oversimplifying.</li>
            </ol>
            <h2>Built with expertise</h2>
            <p>
              This site is built with knowledge and expertise from{' '}
              <a href="https://www.teamed.global/" target="_blank" rel="noopener noreferrer">
                Teamed
              </a>
              , a global employment platform that manages EOR, contractor compliance, global payroll, and entity services across 150+ countries.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
