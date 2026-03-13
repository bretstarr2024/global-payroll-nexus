import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog — US Payroll Guide',
  description: 'Articles on US payroll, entity formation, compliance, and employment law for UK and European companies expanding to the United States.',
};

const posts = [
  {
    slug: 'why-foreign-companies-get-form-5472-wrong',
    title: 'Why Foreign Companies Get Form 5472 Wrong (and How to Avoid $25K Penalties)',
    excerpt: 'Form 5472 is the most commonly missed filing for foreign-owned US entities. Here\'s what triggers it, what counts as a reportable transaction, and how to stay compliant.',
    category: 'Compliance',
    date: '2026-03-10',
    readTime: '8 min read',
  },
  {
    slug: 'llc-vs-c-corp-foreign-company',
    title: 'LLC vs C-Corp: Which Is Right for Your Foreign-Owned US Subsidiary?',
    excerpt: 'The entity type you choose affects taxation, liability, fundraising, and compliance obligations. A practical comparison for non-US parent companies.',
    category: 'Entity Formation',
    date: '2026-03-08',
    readTime: '10 min read',
  },
  {
    slug: 'first-us-hire-payroll-checklist',
    title: 'Your First US Hire: The Complete Payroll Setup Checklist',
    excerpt: 'From EIN application to first paycheck — every step a foreign company needs to take before paying a US employee, in order.',
    category: 'US Payroll',
    date: '2026-03-05',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="mb-2">
            <Link href="/resources" className="text-sm text-text-muted hover:text-primary">
              &larr; Resources
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Blog</h1>
          <div className="answer-block">
            <p>
              In-depth articles on US payroll, entity formation, foreign-ownership compliance, and employment law — written specifically for UK and European companies expanding to the United States.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.08}>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="card card-hover group block hover:no-underline"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.date}</span>
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-text-secondary">{post.excerpt}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
