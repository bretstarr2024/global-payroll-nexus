import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog | Global Payroll & Employment Insights',
  description: 'Articles, analysis, and practical guides on international payroll, employer of record services, contractor compliance, and global hiring.',
};

export default function BlogPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Insights & analysis
          </h1>
          <p className="text-lg text-nexus-gray-700 max-w-2xl mb-12">
            Practical guides and expert analysis on global payroll, EOR, and international employment compliance.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center py-16 text-nexus-gray-500">
            <p className="text-lg">Blog posts coming soon.</p>
            <p className="text-sm mt-2">We&apos;re building the most comprehensive resource for global employment knowledge.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
