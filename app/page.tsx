import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContentCard } from '@/components/ContentCard';
import { StateIcon } from '@/components/StateIcon';

const pillars = [
  {
    title: 'Entity Formation',
    description: 'LLC vs C-Corp, state selection, registered agents, and the full setup process for foreign-owned US subsidiaries.',
    href: '/entity-formation',
    cta: 'Read guide',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0-.75 3.75m0 0-.75 3.75" />
      </svg>
    ),
  },
  {
    title: 'US Payroll',
    description: 'Federal and state tax withholding, pay schedules, multi-state registration, and choosing the right payroll provider.',
    href: '/us-payroll',
    cta: 'Read guide',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Foreign-Ownership Compliance',
    description: 'Form 5472, transfer pricing, pro forma 1120 — the obligations most US payroll providers don\'t tell you about.',
    href: '/compliance',
    cta: 'Read guide',
    highlight: true,
    badge: { label: 'The gap no one covers', variant: 'warm' as const },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Benefits & Employment Law',
    description: 'Health insurance, 401(k), PTO, at-will employment, and the things that surprise UK and European companies most.',
    href: '/benefits',
    cta: 'Read guide',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const topStates = [
  { name: 'Delaware', href: '/states/delaware', detail: 'Most common for incorporation' },
  { name: 'California', href: '/states/california', detail: 'Largest talent pool' },
  { name: 'New York', href: '/states/new-york', detail: 'Financial & media hub' },
  { name: 'Texas', href: '/states/texas', detail: 'No state income tax' },
  { name: 'Florida', href: '/states/florida', detail: 'No state income tax' },
];

const faqs = [
  {
    q: 'Do I need a US entity to hire employees in America?',
    a: 'Yes, if you want to run your own payroll. You need a registered US entity (LLC or C-Corp) with an EIN to withhold taxes, file payroll returns, and comply with federal and state employment law. The alternative is using an Employer of Record (EOR), which employs workers through their entity on your behalf — but that has cost and control trade-offs.',
  },
  {
    q: 'What is Form 5472, and why should I care?',
    a: 'Form 5472 is an IRS information return required for any US entity that is 25% or more foreign-owned and has "reportable transactions" with related foreign parties. This includes intercompany payments, loans, and management fees. The penalty for failure to file is $25,000 per form, per year — and it applies even if no tax is owed.',
  },
  {
    q: 'How long does it take to set up a US subsidiary?',
    a: 'Entity formation itself takes 1-3 weeks depending on the state. But being fully operational — with an EIN, bank account, registered agent, payroll setup, and state tax registrations — typically takes 6-10 weeks. If you need to hire immediately, an EOR can bridge the gap while you set up.',
  },
  {
    q: 'Which US state should a foreign company incorporate in?',
    a: 'Delaware is the most common choice for foreign-owned companies because of its well-established business court system, privacy protections, and flexible corporate law. But it\'s not always the best choice — if all your employees are in California, incorporating in Delaware still requires you to register as a foreign entity in California, adding complexity and cost.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark text-white">
        <div className="hero-bg-blotches">
          <div className="hero-blotch hero-blotch-1 bg-primary" />
          <div className="hero-blotch hero-blotch-2 bg-accent-warm" />
          <div className="hero-blotch hero-blotch-3 bg-accent" />
        </div>
        <div className="container-wide relative z-10 py-20 md:py-32">
          <AnimatedSection>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
              For UK & European companies expanding to the US
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 text-white">
              US payroll and compliance for{' '}
              <span className="text-accent">foreign-owned companies</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Entity formation, payroll setup, Form 5472 compliance, and employment law — the guide your US accountant probably hasn&apos;t given you yet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/entity-formation" className="btn-primary hover:no-underline">
                Start with Entity Formation
              </Link>
              <Link href="/compliance" className="btn-secondary hover:no-underline">
                Foreign-Ownership Compliance
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Answer block */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="answer-block">
              <p>
                <strong className="text-text">US Payroll Guide</strong> is an independent resource for companies headquartered outside the United States that are hiring their first US employees. We cover entity formation, federal and state payroll, foreign-ownership compliance obligations, and US employment law — with the specificity that generic payroll guides miss.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Start here</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl">
              Four guides covering the full journey from &ldquo;should we expand to the US?&rdquo; to &ldquo;how do we stay compliant once we&apos;re there?&rdquo;
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.href} delay={index * 0.1}>
                <ContentCard
                  href={pillar.href}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                  highlight={pillar.highlight}
                  badge={pillar.badge}
                  cta={pillar.cta}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance callout */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="compliance-callout">
              <p className="text-sm font-semibold text-accent-warm-dark uppercase tracking-wider mb-2">The compliance gap</p>
              <p className="text-lg text-text mb-3">
                <strong className="text-accent-warm-dark">$25,000 per form, per year.</strong> That&apos;s the IRS penalty for failing to file Form 5472 — required for every foreign-owned US entity with reportable transactions. Most US payroll providers don&apos;t track this. Most US accountants don&apos;t proactively flag it.
              </p>
              <Link href="/compliance/form-5472" className="text-sm font-medium text-primary hover:text-primary-deep">
                Read the Form 5472 guide &rarr;
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* States */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">State guides</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl">
              Each US state has different employer registration requirements, tax rates, and employment laws.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {topStates.map((state, index) => (
              <AnimatedSection key={state.href} delay={index * 0.05}>
                <ContentCard
                  href={state.href}
                  icon={<StateIcon state={state.name} />}
                  title={state.name}
                  description={state.detail}
                  className="text-center [&>div:first-child]:mx-auto [&>div:first-child]:w-12 [&>div:first-child]:h-12 [&>div:first-child]:rounded-xl [&>h3]:text-base [&>h3]:font-semibold"
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="mt-8 text-center">
              <Link href="/states" className="text-sm font-medium text-primary hover:text-primary-deep">View all state guides &rarr;</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-10 text-center">Frequently asked questions</h2>
          </AnimatedSection>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
              }),
            }}
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="card">
                  <h3 className="text-lg font-semibold text-text mb-2">{faq.q}</h3>
                  <p className="text-text-secondary">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-dark text-white section-padding">
        <div className="hero-bg-blotches">
          <div className="hero-blotch hero-blotch-2 bg-primary" />
          <div className="hero-blotch hero-blotch-1 bg-accent-warm" />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Expanding to the US?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Get specialist advice on entity formation, US payroll setup, and foreign-ownership compliance — from people who do this every day.
            </p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:no-underline text-lg px-8 py-4"
            >
              Talk to a US Payroll Specialist
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
