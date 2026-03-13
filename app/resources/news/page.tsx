import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'News & Updates — US Payroll Guide',
  description: 'Regulatory changes, tax updates, and compliance news affecting foreign-owned US businesses.',
};

const newsItems = [
  {
    date: '2026-03-12',
    category: 'Compliance',
    title: 'IRS Increases Form 5472 Penalties for 2026 Tax Year',
    summary: 'The penalty for failure to file Form 5472 remains at $25,000 per form, per year. The IRS has signaled increased enforcement activity targeting foreign-owned disregarded entities that fail to file.',
  },
  {
    date: '2026-03-01',
    category: 'Payroll',
    title: 'Social Security Wage Base Rises to $174,900 for 2026',
    summary: 'The Social Security wage base for 2026 has increased to $174,900, up from $168,600 in 2024. Employers pay 6.2% on wages up to this threshold.',
  },
  {
    date: '2026-02-15',
    category: 'State Law',
    title: 'Colorado Expands Paid Family Leave Requirements',
    summary: 'Colorado\'s FAMLI program now covers employers of all sizes. Foreign-owned companies with Colorado employees must register and begin premium contributions.',
  },
  {
    date: '2026-02-01',
    category: 'Entity Formation',
    title: 'Beneficial Ownership Information Reporting: What Foreign Companies Need to Know',
    summary: 'The Corporate Transparency Act requires most US entities to report beneficial ownership information to FinCEN. Foreign-owned entities have specific reporting obligations that differ from domestic companies.',
  },
  {
    date: '2026-01-15',
    category: 'Tax',
    title: 'Transfer Pricing Documentation: IRS Issues New Guidance for Small Foreign-Owned Entities',
    summary: 'New IRS guidance clarifies documentation requirements for foreign-owned US entities with annual intercompany transactions under $500,000. Simplified documentation may be acceptable, but Form 5472 filing remains mandatory.',
  },
];

export default function NewsPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="mb-2">
            <Link href="/resources" className="text-sm text-text-muted hover:text-primary">
              &larr; Resources
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">News & Updates</h1>
          <div className="answer-block">
            <p>
              Regulatory changes, tax updates, and new compliance requirements that affect foreign-owned US businesses. We track the changes so you don&apos;t have to.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {newsItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.06}>
              <div className="card">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent-warm bg-accent-warm/10 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-text-muted">{item.date}</span>
                </div>
                <h2 className="text-lg font-bold text-text mb-2">{item.title}</h2>
                <p className="text-text-secondary">{item.summary}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-text-secondary text-sm">
              Updates are published as regulations change. For time-sensitive compliance questions,{' '}
              <a href="https://www.teamed.global/contact-teamed" target="_blank" rel="noopener noreferrer">
                talk to a specialist
              </a>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
