import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Resources — US Payroll Guide',
  description: 'Guides, articles, FAQs, glossary, and news for foreign companies navigating US payroll, compliance, and entity formation.',
};

const sections = [
  {
    title: 'Blog',
    description: 'In-depth articles on US payroll, entity formation, compliance obligations, and employment law for foreign-owned companies.',
    href: '/resources/blog',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    count: '3 articles',
  },
  {
    title: 'Guides',
    description: 'Step-by-step guides for specific processes — setting up your first US payroll, filing Form 5472, choosing a state of incorporation.',
    href: '/resources/guides',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    count: '4 guides',
  },
  {
    title: 'FAQ',
    description: 'Answers to the most common questions from UK and European companies about hiring, payroll, and compliance in the US.',
    href: '/resources/faq',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    count: '24 questions',
  },
  {
    title: 'Glossary',
    description: 'US payroll, tax, and employment terms explained for companies headquartered outside the United States.',
    href: '/resources/glossary',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    count: '21 terms',
  },
  {
    title: 'News & Updates',
    description: 'Regulatory changes, tax updates, and new compliance requirements that affect foreign-owned US businesses.',
    href: '/resources/news',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    count: 'Latest updates',
  },
];

export default function ResourcesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Resources</h1>
          <div className="answer-block">
            <p>
              Everything you need to navigate US payroll, compliance, and employment law as a foreign-owned company. Guides, articles, FAQs, and regulatory updates — written for decision-makers, not accountants.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <AnimatedSection key={section.href} delay={index * 0.08}>
              <Link
                href={section.href}
                className="card card-hover group block hover:no-underline h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {section.title}
                </h2>
                <p className="text-text-secondary text-sm mb-4">{section.description}</p>
                <span className="text-xs font-medium text-text-muted">{section.count}</span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:no-underline"
            >
              Talk to a US Payroll Specialist
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
