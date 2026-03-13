import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Guides — US Payroll Guide',
  description: 'Step-by-step guides for US entity formation, payroll setup, Form 5472 filing, and compliance for foreign-owned companies.',
};

const guides = [
  {
    title: 'Entity Formation Guide',
    description: 'LLC vs C-Corp, state selection, registered agents, and the full setup process for foreign-owned US subsidiaries.',
    href: '/entity-formation',
    category: 'Entity Formation',
    readTime: '15 min read',
  },
  {
    title: 'US Payroll Setup Guide',
    description: 'Federal and state tax withholding, FICA, FUTA, pay schedules, multi-state registration, and choosing a payroll provider.',
    href: '/us-payroll',
    category: 'Payroll',
    readTime: '18 min read',
  },
  {
    title: 'Foreign-Ownership Compliance Guide',
    description: 'Form 5472, transfer pricing, pro forma 1120, and the obligations most US payroll providers don\'t tell you about.',
    href: '/compliance',
    category: 'Compliance',
    readTime: '12 min read',
  },
  {
    title: 'Form 5472 Deep Dive',
    description: 'Who files it, what triggers it, what counts as a reportable transaction, and how to avoid $25,000 penalties.',
    href: '/compliance/form-5472',
    category: 'Compliance',
    readTime: '10 min read',
  },
  {
    title: 'Employee Benefits & Employment Law',
    description: 'Health insurance, 401(k), PTO, at-will employment, and the things that surprise UK and European companies most.',
    href: '/benefits',
    category: 'Employment Law',
    readTime: '14 min read',
  },
];

export default function GuidesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="mb-2">
            <Link href="/resources" className="text-sm text-text-muted hover:text-primary">
              &larr; Resources
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Guides</h1>
          <div className="answer-block">
            <p>
              Comprehensive, step-by-step guides for every stage of setting up and running US operations as a foreign-owned company. Start with entity formation and work your way through.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <AnimatedSection key={guide.href} delay={index * 0.08}>
              <Link
                href={guide.href}
                className="card card-hover group block hover:no-underline h-full"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-xs text-text-muted">{guide.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {guide.title}
                </h2>
                <p className="text-text-secondary text-sm">{guide.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
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
    </div>
  );
}
