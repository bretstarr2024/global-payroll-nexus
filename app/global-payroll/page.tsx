import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Global Payroll Guide | How International Payroll Works',
  description: 'Understand how global payroll works across jurisdictions, currencies, and compliance frameworks. Gross-to-net calculations, statutory deductions, and multi-country payroll management.',
};

export default function GlobalPayrollPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Comprehensive Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Global Payroll: How International Payroll Actually Works
          </h1>
          <div className="border-l-4 border-nexus-purple pl-6 mb-6">
            <p className="text-lg text-nexus-gray-700 leading-relaxed">
              Global payroll is the process of paying employees across multiple countries while complying with each country&apos;s tax laws, social contribution requirements, and employment regulations. It covers gross-to-net calculations, statutory deductions, currency conversion, local payslip generation, and authority filings — in every jurisdiction where you have people.
            </p>
          </div>
          <p className="text-sm text-nexus-gray-500 mb-12">
            Last updated: March 2026 &middot; 12 min read
          </p>
        </AnimatedSection>

        <div className="prose-custom">
          <AnimatedSection>
            <h2>Why global payroll is harder than domestic payroll</h2>
            <p>
              Domestic payroll is one set of rules. Global payroll is a different set of rules for every country — and they change constantly.
            </p>
            <p>
              In the UK, you deal with PAYE, National Insurance, and pension auto-enrolment. In Germany, it&apos;s income tax, solidarity surcharge, church tax, and four branches of social insurance. In Brazil, there are 13th and 14th salary payments, FGTS deposits, and INSS contributions.
            </p>
            <p>
              Every country has its own calendar (monthly, bi-weekly, weekly), its own filing deadlines, its own authority portals, and its own penalties for getting it wrong.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2>The core components of global payroll</h2>
            <ul>
              <li><strong>Gross-to-net calculations</strong> — converting total compensation to take-home pay after all deductions</li>
              <li><strong>Statutory deductions</strong> — income tax, social security, health insurance, pension contributions</li>
              <li><strong>Employer contributions</strong> — the costs above gross salary that employers must pay (often 20-50% on top)</li>
              <li><strong>Currency and banking</strong> — paying in local currency via local banking rails</li>
              <li><strong>Payslips</strong> — generated per local requirements (format, language, mandatory line items)</li>
              <li><strong>Authority filings</strong> — tax returns, social security declarations, year-end reporting</li>
              <li><strong>Audit trails</strong> — documentation that proves compliance if questioned</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Models for managing global payroll</h2>
            <p>There are four common approaches:</p>
            <ol>
              <li><strong>EOR-managed payroll</strong> — the EOR runs payroll through their entities. Simplest when you don&apos;t have your own entity.</li>
              <li><strong>Payroll aggregator</strong> — a single platform that coordinates local payroll providers in each country. One invoice, multiple providers behind the scenes.</li>
              <li><strong>In-house with local partners</strong> — you manage payroll centrally but use local accountants or payroll bureaux in each country.</li>
              <li><strong>Fully in-house</strong> — you build internal payroll teams for each jurisdiction. Only viable at significant scale.</li>
            </ol>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Common mistakes in global payroll</h2>
            <ul>
              <li>Assuming US payroll logic applies everywhere</li>
              <li>Miscalculating employer costs (especially in high-contribution countries like France or Belgium)</li>
              <li>Missing filing deadlines for statutory reporting</li>
              <li>Paying in the wrong currency or via the wrong banking channel</li>
              <li>Failing to account for 13th month salary, holiday pay, or other statutory payments</li>
              <li>Not updating for mid-year tax or contribution rate changes</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 p-6 bg-nexus-gray-100 rounded-2xl border border-nexus-gray-200">
              <h3 className="text-lg font-bold text-nexus-gray-900 mb-2">Need help with global payroll?</h3>
              <p className="text-nexus-gray-700 mb-4">
                Managing payroll across multiple countries and employment models doesn&apos;t have to mean multiple providers and constant fire-fighting.
              </p>
              <a
                href="https://www.teamed.global/global-payroll"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:no-underline"
              >
                Learn about managed global payroll
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
