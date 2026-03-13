import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContentCard } from '@/components/ContentCard';

export const metadata: Metadata = {
  title: 'Resources — US Payroll Guide',
  description: 'Guides, articles, FAQs, glossary, and news for foreign companies navigating US payroll, compliance, and entity formation.',
};

const sections = [
  {
    title: 'Blog',
    description: 'In-depth articles on US payroll, entity formation, compliance obligations, and employment law — written specifically for UK and European companies entering the US market.',
    href: '/resources/blog',
    cta: 'Browse articles',
    badge: '3 articles',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: 'Guides',
    description: 'Step-by-step walkthroughs for the critical decisions — choosing an entity type, registering as an employer, running your first US payroll, and filing Form 5472.',
    href: '/resources/guides',
    cta: 'View all guides',
    badge: '5 guides',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'FAQ',
    description: 'Answers to the most common questions from UK and European companies about hiring, payroll, entity formation, and compliance in the United States.',
    href: '/resources/faq',
    cta: 'Read FAQs',
    badge: '24 questions across 5 categories',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Glossary',
    description: 'US payroll, tax, and employment terms explained in plain English — for companies headquartered outside the United States. FICA, FUTA, EIN, W-4, and more.',
    href: '/resources/glossary',
    cta: 'Browse terms',
    badge: '21 terms',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
  {
    title: 'News & Updates',
    description: 'Regulatory changes, IRS guidance updates, tax law revisions, and new compliance requirements that affect foreign-owned US businesses.',
    href: '/resources/news',
    cta: 'Latest updates',
    badge: 'Updated regularly',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Resource Library
          </p>
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
              <ContentCard
                href={section.href}
                icon={section.icon}
                title={section.title}
                description={section.description}
                badge={{ label: section.badge }}
                cta={section.cta}
              />
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
