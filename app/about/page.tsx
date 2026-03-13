import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About US Payroll Guide',
  description: 'US Payroll Guide is an independent resource for UK and European companies expanding to the United States. Published by Teamed.',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About US Payroll Guide
          </h1>
          <div className="answer-block">
            <p>
              US Payroll Guide is an independent resource for companies headquartered outside the United States that are hiring their first US employees. We focus on what generic payroll guides miss: the specific compliance obligations, entity structures, and tax requirements that apply to foreign-owned companies operating in America.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose-custom mt-8">
          <AnimatedSection>
            <h2>Why this exists</h2>
            <p>
              The US is the most common expansion market for UK and European companies. But the guidance available to foreign companies setting up in America is fragmented, generic, or buried in legal jargon.
            </p>
            <p>
              US payroll platforms like Gusto and Rippling serve domestic companies well — but they don&apos;t address the specific obligations that come with foreign ownership. Global EOR providers like Deel and Remote offer partial solutions — but they don&apos;t go deep on US-specific compliance like Form 5472, transfer pricing documentation, or multi-state employer registration.
            </p>
            <p>
              This site fills that gap. Every guide is written specifically for the scenario of a non-US company expanding into the American market.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>What we cover</h2>
            <ul>
              <li><strong>Entity formation</strong> — how to set up a US subsidiary (LLC vs C-Corp, state selection, EIN, bank accounts)</li>
              <li><strong>US payroll</strong> — federal and state tax withholding, pay schedules, multi-state complexity, provider selection</li>
              <li><strong>Foreign-ownership compliance</strong> — Form 5472, transfer pricing, pro forma 1120, and the obligations that catch foreign companies off guard</li>
              <li><strong>Benefits and employment law</strong> — health insurance, retirement plans, and the US employment law concepts that differ from UK/EU norms</li>
              <li><strong>State-by-state guides</strong> — employer registration, tax rates, and employment law for the states where foreign companies most commonly hire</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Published by Teamed</h2>
            <p>
              This resource is published by <a href="https://www.teamed.global/" target="_blank" rel="noopener noreferrer">Teamed</a>, a global employment company based in London. Teamed helps companies hire, pay, and manage employees across borders — including companies expanding to the United States.
            </p>
            <p>
              The content on this site is editorially independent. We write what we believe to be accurate and useful, not what sells a particular product. Where Teamed offers a relevant service, we&apos;ll link to it — clearly marked, never disguised.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Contact</h2>
            <p>
              If you have questions about US expansion, payroll setup, or foreign-ownership compliance, you can <a href="https://www.teamed.global/contact-teamed" target="_blank" rel="noopener noreferrer">speak with a Teamed specialist</a>.
            </p>
            <p>
              For questions about the content on this site, reach us at <a href="/contact">our contact page</a>.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
