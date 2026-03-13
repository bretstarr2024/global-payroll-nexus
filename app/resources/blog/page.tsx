import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContentCard, MetaPill } from '@/components/ContentCard';

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
  {
    slug: 'understanding-fica-futa-suta',
    title: 'FICA, FUTA, and SUTA: US Payroll Taxes Explained for Foreign Employers',
    excerpt: 'US payroll taxes are split across federal and state levels. Here\'s what each one is, who pays it, how much it costs, and when it\'s due.',
    category: 'US Payroll',
    date: '2026-03-01',
    readTime: '9 min read',
  },
  {
    slug: 'state-nexus-remote-employees',
    title: 'State Nexus and Remote Employees: When One Hire Triggers Multi-State Compliance',
    excerpt: 'Hiring a remote employee in a new state can trigger tax registration, withholding, and unemployment insurance obligations.',
    category: 'Compliance',
    date: '2026-02-25',
    readTime: '10 min read',
  },
  {
    slug: 'us-health-insurance-foreign-employers',
    title: 'US Health Insurance: What Foreign Employers Need to Know Before Making an Offer',
    excerpt: 'There\'s no NHS in America. Employer-sponsored health insurance is expected by almost every US hire.',
    category: 'Benefits',
    date: '2026-02-20',
    readTime: '11 min read',
  },
  {
    slug: 'registered-agent-guide',
    title: 'Registered Agents: What They Do, Why You Need One, and How to Choose',
    excerpt: 'Every US entity needs a registered agent in its state of incorporation — and in every state where it operates.',
    category: 'Entity Formation',
    date: '2026-02-15',
    readTime: '7 min read',
  },
  {
    slug: 'ein-application-foreign-companies',
    title: 'How to Get an EIN as a Foreign Company (Without an SSN)',
    excerpt: 'Foreign applicants can\'t use the IRS online EIN tool. Here\'s the step-by-step process for getting your Employer Identification Number.',
    category: 'Entity Formation',
    date: '2026-02-10',
    readTime: '8 min read',
  },
  {
    slug: 'transfer-pricing-foreign-subsidiaries',
    title: 'Transfer Pricing for Foreign-Owned US Subsidiaries: A Practical Guide',
    excerpt: 'If your UK parent company charges fees, provides loans, or shares services with your US subsidiary, you need a transfer pricing policy.',
    category: 'Compliance',
    date: '2026-02-05',
    readTime: '11 min read',
  },
  {
    slug: 'at-will-employment-european-employers',
    title: 'At-Will Employment: What European Employers Get Wrong About US Hiring (and Firing)',
    excerpt: 'The US has no statutory notice periods, no unfair dismissal protections, and no redundancy pay. But "at-will" doesn\'t mean "no rules."',
    category: 'Benefits',
    date: '2026-01-30',
    readTime: '9 min read',
  },
  {
    slug: 'multi-state-payroll-compliance',
    title: 'Multi-State Payroll: How to Stay Compliant When Your US Team Is Distributed',
    excerpt: 'Running payroll in multiple states means multiple tax registrations, different withholding rules, and varying employment laws.',
    category: 'US Payroll',
    date: '2026-01-25',
    readTime: '10 min read',
  },
  {
    slug: 'corporate-transparency-act-foreign-companies',
    title: 'The Corporate Transparency Act: New Reporting Rules for Foreign-Owned US Entities',
    excerpt: 'The Corporate Transparency Act requires most US entities to report beneficial ownership information to FinCEN.',
    category: 'Compliance',
    date: '2026-01-20',
    readTime: '9 min read',
  },
  {
    slug: 'us-contractor-vs-employee-foreign-companies',
    title: 'Contractor vs Employee in the US: Classification Rules Foreign Companies Must Understand',
    excerpt: 'Misclassifying a US worker as an independent contractor when they should be an employee can trigger back taxes, penalties, and lawsuits.',
    category: 'Compliance',
    date: '2026-01-15',
    readTime: '10 min read',
  },
  {
    slug: 'us-business-bank-account-foreign-company',
    title: 'Opening a US Business Bank Account as a Foreign Company: What to Expect',
    excerpt: 'US banks are cautious with foreign-owned entities. Here\'s what documentation you need, which banks work with foreign companies, and how to avoid common delays.',
    category: 'Entity Formation',
    date: '2026-01-10',
    readTime: '8 min read',
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
              <ContentCard
                href={`/resources/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
                cta="Read article"
                meta={
                  <>
                    <MetaPill>{post.category}</MetaPill>
                    <MetaPill variant="muted">{post.date}</MetaPill>
                    <MetaPill variant="muted">{post.readTime}</MetaPill>
                  </>
                }
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
