import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Resources | Blog, Glossary, FAQ & Tools for Global Employment',
  description: 'Explore our library of global employment resources including blog articles, glossary terms, frequently asked questions, and payroll tools.',
};

const resourceSections = [
  {
    title: 'Blog',
    description: 'Analysis, guides, and updates on global payroll, EOR, and international employment.',
    href: '/resources/blog',
    icon: '📝',
  },
  {
    title: 'Glossary',
    description: 'Key terms in global employment, payroll, and compliance — clearly defined.',
    href: '/resources/glossary',
    icon: '📖',
  },
  {
    title: 'FAQ',
    description: 'Answers to the most common questions about international hiring and payroll.',
    href: '/resources/faq',
    icon: '❓',
  },
  {
    title: 'Tools & Calculators',
    description: 'Employer cost calculators, crossover modelling, and compliance checklists.',
    href: '/resources/tools',
    icon: '🧮',
  },
];

export default function ResourcesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Global employment resources
          </h1>
          <p className="text-lg text-nexus-gray-700 max-w-2xl mb-12">
            Everything you need to navigate international payroll, employment compliance, and global hiring — in one place.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {resourceSections.map((section, index) => (
            <AnimatedSection key={section.href} delay={index * 0.1}>
              <Link
                href={section.href}
                className="card group block hover:no-underline hover:border-nexus-purple/30"
              >
                <span className="text-3xl mb-3 block">{section.icon}</span>
                <h2 className="text-xl font-bold text-nexus-gray-900 group-hover:text-nexus-purple transition-colors mb-2">
                  {section.title}
                </h2>
                <p className="text-nexus-gray-700">{section.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-nexus-purple">
                  Browse {section.title.toLowerCase()}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
