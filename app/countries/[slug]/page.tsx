import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/AnimatedSection';

// Country data — will be moved to DB/CMS later
const countries: Record<string, {
  name: string;
  flag: string;
  currency: string;
  language: string;
  employerCostRange: string;
  minWage: string;
  noticePeriod: string;
  probation: string;
  workingHours: string;
  annualLeave: string;
  overview: string;
}> = {
  'united-kingdom': {
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP (£)',
    language: 'English',
    employerCostRange: '13-15% above gross salary',
    minWage: '£11.44/hour (age 21+, April 2024)',
    noticePeriod: '1 week to 12 weeks (based on tenure)',
    probation: 'Typically 3-6 months (no statutory requirement)',
    workingHours: '48-hour maximum working week (opt-out available)',
    annualLeave: '28 days including bank holidays (statutory minimum)',
    overview: 'The UK is one of the most straightforward countries for international employment. English-language contracts, familiar legal concepts, and relatively low employer costs compared to continental Europe. However, IR35 contractor rules, auto-enrolment pensions, and statutory sick pay requirements add complexity.',
  },
  'germany': {
    name: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR (€)',
    language: 'German',
    employerCostRange: '20-22% above gross salary',
    minWage: '€12.41/hour (January 2024)',
    noticePeriod: '4 weeks to 7 months (based on tenure)',
    probation: 'Up to 6 months (statutory)',
    workingHours: '8 hours/day, 48 hours/week maximum',
    annualLeave: '20 days minimum (most employers offer 25-30)',
    overview: 'Germany has strong employee protections and complex social insurance requirements. Employer contributions cover health insurance, pension, unemployment, nursing care, and accident insurance. Works councils (Betriebsrat) may apply in larger organisations. Termination is heavily regulated.',
  },
  'united-states': {
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD ($)',
    language: 'English',
    employerCostRange: '8-12% above gross salary (varies by state)',
    minWage: '$7.25/hour federal (state minimums often higher)',
    noticePeriod: 'At-will employment (no statutory notice in most states)',
    probation: 'No statutory probation period',
    workingHours: 'No federal maximum (overtime after 40 hours/week)',
    annualLeave: 'No statutory minimum (market practice: 15-20 days)',
    overview: 'The US is technically at-will employment, but the complexity lies in the 50-state patchwork. Each state has different tax rates, workers\' compensation requirements, paid leave laws, and employment regulations. California alone has more employment law than many countries.',
  },
  'france': {
    name: 'France',
    flag: '🇫🇷',
    currency: 'EUR (€)',
    language: 'French',
    employerCostRange: '40-45% above gross salary',
    minWage: '€11.65/hour (SMIC, January 2024)',
    noticePeriod: '1-3 months (based on role and tenure)',
    probation: '2-4 months (renewable once)',
    workingHours: '35 hours/week (legally mandated)',
    annualLeave: '25 days minimum (plus RTT days for 35-hour week)',
    overview: 'France has some of the highest employer costs in Europe. Social contributions are substantial and cover health, pension, unemployment, family allowances, and more. The 35-hour working week, strong union presence, and complex termination procedures make France one of the most employee-friendly jurisdictions globally.',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = countries[slug];
  if (!country) return {};

  return {
    title: `Hire in ${country.name} | Payroll, Employment Law & Employer Costs`,
    description: `Complete guide to hiring in ${country.name}. Covers payroll rules, employer costs (${country.employerCostRange}), statutory benefits, notice periods, and compliance requirements.`,
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const country = countries[slug];

  if (!country) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Country Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            <span className="mr-3">{country.flag}</span>
            Hiring in {country.name}
          </h1>
          <div className="border-l-4 border-nexus-purple pl-6 mb-6">
            <p className="text-lg text-nexus-gray-700 leading-relaxed">
              {country.overview}
            </p>
          </div>
          <p className="text-sm text-nexus-gray-500 mb-12">
            Last updated: March 2026
          </p>
        </AnimatedSection>

        {/* Quick facts grid */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Currency', value: country.currency },
              { label: 'Language', value: country.language },
              { label: 'Employer costs', value: country.employerCostRange },
              { label: 'Minimum wage', value: country.minWage },
              { label: 'Notice period', value: country.noticePeriod },
              { label: 'Probation', value: country.probation },
              { label: 'Working hours', value: country.workingHours },
              { label: 'Annual leave', value: country.annualLeave },
            ].map((fact) => (
              <div key={fact.label} className="card p-4">
                <p className="text-xs font-semibold text-nexus-gray-500 uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-nexus-gray-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose-custom">
            <p className="text-nexus-gray-500 italic">
              Detailed content for this country guide is coming soon. In the meantime, the quick facts above cover the key employment parameters.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-12 p-6 bg-nexus-gray-100 rounded-2xl border border-nexus-gray-200">
            <h3 className="text-lg font-bold text-nexus-gray-900 mb-2">
              Need to hire in {country.name}?
            </h3>
            <p className="text-nexus-gray-700 mb-4">
              Get expert guidance on employment law, payroll setup, and compliance in {country.name}.
            </p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hover:no-underline"
            >
              Talk to an expert
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(countries).map((slug) => ({ slug }));
}
