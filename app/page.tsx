import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

const pillarPages = [
  {
    title: 'Employer of Record Guide',
    description: 'What an EOR does, when you need one, and how to choose the right provider for your business.',
    href: '/employer-of-record',
    icon: '🏛',
  },
  {
    title: 'Global Payroll Explained',
    description: 'How international payroll works across jurisdictions, currencies, and compliance frameworks.',
    href: '/global-payroll',
    icon: '💰',
  },
  {
    title: 'EOR vs Own Entity',
    description: 'The real economics of EOR versus setting up your own legal entity, and when to make the switch.',
    href: '/eor-vs-entity',
    icon: '⚖️',
  },
  {
    title: 'Contractor Compliance',
    description: 'Misclassification risks, country-specific rules, and how to stay on the right side of the law.',
    href: '/contractor-compliance',
    icon: '🛡',
  },
];

const countryHighlights = [
  { name: 'United Kingdom', href: '/countries/united-kingdom', flag: '🇬🇧' },
  { name: 'Germany', href: '/countries/germany', flag: '🇩🇪' },
  { name: 'United States', href: '/countries/united-states', flag: '🇺🇸' },
  { name: 'France', href: '/countries/france', flag: '🇫🇷' },
  { name: 'Netherlands', href: '/countries/netherlands', flag: '🇳🇱' },
  { name: 'Spain', href: '/countries/spain', flag: '🇪🇸' },
  { name: 'India', href: '/countries/india', flag: '🇮🇳' },
  { name: 'Brazil', href: '/countries/brazil', flag: '🇧🇷' },
];

const faqs = [
  {
    q: 'What is an Employer of Record?',
    a: 'An Employer of Record (EOR) is a third-party organisation that legally employs workers on your behalf in countries where you don\'t have a legal entity. The EOR handles payroll, taxes, benefits, and compliance while you manage the employee\'s day-to-day work.',
  },
  {
    q: 'How does global payroll differ from domestic payroll?',
    a: 'Global payroll requires navigating different tax regimes, social contribution systems, currencies, banking rails, and employment laws in every country. Each jurisdiction has its own statutory deductions, filing deadlines, and payslip requirements.',
  },
  {
    q: 'When should a company use an EOR instead of setting up an entity?',
    a: 'An EOR typically makes sense when you have fewer than 8-15 employees in a single country, need to hire quickly (weeks vs months), or want to test a new market before committing to the cost and complexity of entity formation.',
  },
  {
    q: 'What is contractor misclassification?',
    a: 'Contractor misclassification occurs when a company treats someone as an independent contractor when the working relationship actually meets the legal definition of employment. Penalties can include back taxes, social contributions, fines, and legal liability.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-nexus-dark text-white">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-nexus-purple blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-nexus-coral blur-3xl" />
          <div className="absolute top-40 right-40 w-32 h-32 rounded-full bg-nexus-lime blur-2xl" />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-32">
          <AnimatedSection>
            <p className="text-nexus-lime font-medium text-sm uppercase tracking-wider mb-4">
              The global employment knowledge hub
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
              International payroll and{' '}
              <span className="text-gradient">global employment</span>{' '}
              compliance, explained.
            </h1>
            <p className="text-xl text-nexus-gray-300 max-w-2xl mb-8 leading-relaxed">
              Country-by-country payroll guides, EOR comparisons, compliance frameworks, and practical answers to the questions that keep HR and finance leaders up at night.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/employer-of-record" className="btn-primary hover:no-underline">
                Start with EOR Guide
              </Link>
              <Link href="/countries" className="btn-outline border-white/20 text-white hover:border-nexus-lime hover:text-nexus-lime hover:no-underline">
                Browse Country Guides
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Answer block — AEO-first */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="border-l-4 border-nexus-purple pl-6 mb-8">
              <p className="text-lg text-nexus-gray-700 leading-relaxed">
                <strong className="text-nexus-gray-900">Global Payroll Nexus</strong> is an independent knowledge resource for companies hiring internationally. We cover employer of record services, multi-country payroll, contractor compliance, and entity formation — with country-specific guidance you can actually use.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillar pages */}
      <section className="section-padding bg-nexus-offwhite">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nexus-gray-900 mb-4">
              Start here
            </h2>
            <p className="text-lg text-nexus-gray-700 mb-10 max-w-2xl">
              Deep-dive guides on the topics that matter most when managing international employment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {pillarPages.map((page, index) => (
              <AnimatedSection key={page.href} delay={index * 0.1}>
                <Link
                  href={page.href}
                  className="card group block hover:no-underline hover:border-nexus-purple/30"
                >
                  <span className="text-3xl mb-3 block">{page.icon}</span>
                  <h3 className="text-xl font-bold text-nexus-gray-900 group-hover:text-nexus-purple transition-colors mb-2">
                    {page.title}
                  </h3>
                  <p className="text-nexus-gray-700">{page.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-nexus-purple">
                    Read guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Country guides */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nexus-gray-900 mb-4">
              Country guides
            </h2>
            <p className="text-lg text-nexus-gray-700 mb-10 max-w-2xl">
              Payroll rules, employer costs, statutory benefits, and hiring requirements — country by country.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {countryHighlights.map((country, index) => (
              <AnimatedSection key={country.href} delay={index * 0.05}>
                <Link
                  href={country.href}
                  className="card group flex items-center gap-3 hover:no-underline hover:border-nexus-purple/30 p-4"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-nexus-gray-900 group-hover:text-nexus-purple transition-colors">
                    {country.name}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/countries"
                className="text-sm font-medium text-nexus-purple hover:text-nexus-purple-deep"
              >
                View all country guides &rarr;
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section-padding bg-nexus-offwhite">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nexus-gray-900 mb-10 text-center">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          {/* FAQ JSON-LD */}
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
                  <h3 className="text-lg font-semibold text-nexus-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-nexus-gray-700">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden bg-nexus-dark text-white section-padding">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-nexus-purple blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-nexus-coral blur-3xl" />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need help with international employment?
            </h2>
            <p className="text-lg text-nexus-gray-300 mb-8 max-w-xl mx-auto">
              Whether you need an EOR, global payroll, or entity setup guidance — get expert advice from people who do this every day.
            </p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:no-underline text-lg px-8 py-4"
            >
              Talk to an Expert
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
