import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { StateIcon } from '@/components/StateIcon';

export const metadata: Metadata = {
  title: 'US State Guides | Employer Registration, Taxes & Employment Law by State',
  description: 'State-by-state guides for foreign companies hiring in the US. Employer registration, tax rates, employment law, and compliance requirements for each state.',
};

const states = [
  { name: 'Delaware', slug: 'delaware', detail: 'Most popular incorporation state for foreign-owned entities', region: 'Mid-Atlantic' },
  { name: 'California', slug: 'california', detail: 'Largest talent pool, strictest employment laws', region: 'West' },
  { name: 'New York', slug: 'new-york', detail: 'Financial services, media, and corporate HQ hub', region: 'Northeast' },
  { name: 'Texas', slug: 'texas', detail: 'No state income tax, growing tech ecosystem', region: 'South' },
  { name: 'Florida', slug: 'florida', detail: 'No state income tax, growing business presence', region: 'South' },
  { name: 'Massachusetts', slug: 'massachusetts', detail: 'Biotech, education, and technology hub', region: 'Northeast' },
  { name: 'Washington', slug: 'washington', detail: 'No state income tax, major tech presence (Seattle)', region: 'West' },
  { name: 'Illinois', slug: 'illinois', detail: 'Midwest hub, complex tax requirements', region: 'Midwest' },
  { name: 'Colorado', slug: 'colorado', detail: 'Growing tech scene, unique employment laws', region: 'West' },
  { name: 'Georgia', slug: 'georgia', detail: 'Logistics, manufacturing, and growing tech hub', region: 'South' },
];

export default function StatesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              State-by-State Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              US State Guides for Foreign Companies
            </h1>
            <div className="answer-block">
              <p>
                The US is not one market — it&apos;s 50. Each state has its own employer registration requirements, tax withholding rates, employment laws, and benefits mandates. These guides cover what foreign companies need to know about hiring in each state.
              </p>
            </div>
            <p className="text-sm text-text-muted">
              Last updated: March 2026
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {states.map((state, index) => (
            <AnimatedSection key={state.slug} delay={index * 0.05}>
              <Link
                href={`/states/${state.slug}`}
                className="card group flex items-start gap-4 hover:no-underline hover:border-primary/30"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <StateIcon state={state.name} className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                    {state.name}
                  </h2>
                  <p className="text-sm text-text-secondary mt-1">{state.detail}</p>
                  <span className="text-xs text-text-muted mt-1 block">{state.region}</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-6 bg-surface-alt rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-text mb-2">Not sure which state?</h3>
            <p className="text-text-secondary mb-4">
              Where to incorporate and where to register as an employer are two different decisions. Most foreign companies incorporate in Delaware but register in whichever state(s) their employees live and work.
            </p>
            <Link href="/entity-formation" className="text-sm font-medium text-primary hover:text-primary-deep">
              Read the entity formation guide &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
