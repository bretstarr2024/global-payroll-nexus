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
    title: 'IRS Increases Form 5472 Enforcement for 2026 Tax Year',
    summary: 'The penalty for failure to file Form 5472 remains at $25,000 per form, per year. The IRS has signaled increased enforcement activity targeting foreign-owned disregarded entities that fail to file. The Large Business & International division announced additional examiner resources dedicated to international information returns.',
  },
  {
    date: '2026-03-08',
    category: 'Tax',
    title: 'IRS Releases 2026 Applicable Federal Rates for Intercompany Loans',
    summary: 'The IRS published March 2026 Applicable Federal Rates (AFR): short-term 4.25%, mid-term 4.41%, long-term 4.63%. Foreign-owned companies with intercompany loans must charge at least the AFR to meet arm\'s-length requirements. Below-AFR loans may trigger deemed income and transfer pricing adjustments.',
  },
  {
    date: '2026-03-05',
    category: 'State Law',
    title: 'California Minimum Wage Increases to $16.50/Hour',
    summary: 'California\'s statewide minimum wage rose to $16.50/hour effective January 1, 2026. Fast food workers earn $20/hour under AB 1228, and healthcare workers\' minimum is phasing up to $25/hour. Foreign employers with California-based employees must update payroll immediately.',
  },
  {
    date: '2026-03-01',
    category: 'Payroll',
    title: 'Social Security Wage Base Rises to $174,900 for 2026',
    summary: 'The Social Security wage base for 2026 has increased to $174,900, up from $168,600 in 2024. Employers pay 6.2% on wages up to this threshold. Payroll systems should already reflect this change — verify with your provider to avoid under-withholding.',
  },
  {
    date: '2026-02-25',
    category: 'Compliance',
    title: 'FinCEN Issues Updated Guidance on Beneficial Ownership Reporting for Foreign-Owned Entities',
    summary: 'FinCEN clarified that foreign-owned US entities must trace ownership through all intermediate entities to identify natural person beneficial owners. Foreign passports and government-issued IDs are accepted. The FAQ update addresses common questions from non-US parent companies about reporting obligations under the Corporate Transparency Act.',
  },
  {
    date: '2026-02-20',
    category: 'State Law',
    title: 'New York Paid Prenatal Leave Takes Effect',
    summary: 'New York became the first US state to mandate paid prenatal leave — 20 hours of paid time off for prenatal medical appointments and procedures, separate from existing sick leave and PFL. Employers with New York-based employees must update their leave policies.',
  },
  {
    date: '2026-02-15',
    category: 'State Law',
    title: 'Colorado Expands Paid Family Leave Requirements',
    summary: 'Colorado\'s FAMLI program now covers employers of all sizes. Foreign-owned companies with Colorado employees must register and begin premium contributions. Employees can take up to 12 weeks of paid leave for qualifying events.',
  },
  {
    date: '2026-02-10',
    category: 'Tax',
    title: 'IRS Updates Form W-4 for 2026: Key Changes for Employers',
    summary: 'The 2026 Form W-4 includes updated withholding tables reflecting inflation adjustments. Employers should ensure new hires complete the 2026 version. Existing employees don\'t need to submit a new W-4 unless they want to change their withholding.',
  },
  {
    date: '2026-02-05',
    category: 'Compliance',
    title: 'DOL Raises Salary Threshold for Overtime Exemption',
    summary: 'The Department of Labor finalized the new salary threshold for overtime exemption under the FLSA. Salaried employees must earn at least $58,656/year ($1,128/week) to be classified as exempt from overtime. Foreign employers must reclassify employees below this threshold or begin paying overtime.',
  },
  {
    date: '2026-02-01',
    category: 'Entity Formation',
    title: 'Beneficial Ownership Information Reporting: What Foreign Companies Need to Know',
    summary: 'The Corporate Transparency Act requires most US entities to report beneficial ownership information to FinCEN. Foreign-owned entities have specific reporting obligations that differ from domestic companies. New entities must file within 30 days of formation.',
  },
  {
    date: '2026-01-28',
    category: 'State Law',
    title: 'Washington State Expands Pay Transparency Requirements',
    summary: 'Washington now requires employers with 15+ employees to include salary ranges in all job postings, including remote positions accessible to Washington residents. Foreign companies posting US roles remotely should review their job listings for compliance.',
  },
  {
    date: '2026-01-25',
    category: 'Payroll',
    title: 'IRS Announces 2026 Standard Mileage Rate: 70 Cents Per Mile',
    summary: 'The IRS standard mileage rate for business use of a vehicle increased to 70 cents per mile for 2026. Employers who reimburse employees for business driving should update their expense policies. The rate is used to calculate deductible costs of operating a vehicle for business purposes.',
  },
  {
    date: '2026-01-20',
    category: 'Compliance',
    title: 'EEOC Issues Updated Guidance on AI in Hiring Decisions',
    summary: 'The Equal Employment Opportunity Commission published guidance warning that AI-powered hiring tools can violate Title VII if they disproportionately screen out candidates based on protected characteristics. Foreign employers using automated screening for US hires should audit their tools for disparate impact.',
  },
  {
    date: '2026-01-15',
    category: 'Tax',
    title: 'Transfer Pricing Documentation: IRS Issues New Guidance for Small Foreign-Owned Entities',
    summary: 'New IRS guidance clarifies documentation requirements for foreign-owned US entities with annual intercompany transactions under $500,000. Simplified documentation may be acceptable, but Form 5472 filing remains mandatory. The guidance provides a safe harbour for small entities that maintain basic contemporaneous records.',
  },
  {
    date: '2026-01-10',
    category: 'State Law',
    title: 'Illinois Passes Paid Leave for All Workers Act',
    summary: 'Illinois now requires employers to provide 40 hours of paid leave per year for any reason — not limited to sick leave. Employees begin accruing leave on day one. Foreign companies with Illinois employees must update their PTO policies to comply.',
  },
  {
    date: '2026-01-05',
    category: 'Payroll',
    title: 'FUTA Credit Reduction States: 3 States Face Higher Federal Unemployment Rates',
    summary: 'Three states still carry outstanding federal unemployment loan balances, triggering FUTA credit reductions for 2025. Employers in affected states pay up to 2.1% more in FUTA per employee. Check if your states are affected before filing Form 940.',
  },
  {
    date: '2025-12-20',
    category: 'Compliance',
    title: 'IRS Announces New Filing Deadline for Foreign-Owned Disregarded Entities',
    summary: 'The IRS confirmed that foreign-owned single-member LLCs must file a pro forma Form 1120 with Form 5472 by April 15 of the following tax year (or the extended deadline if an extension is filed). Late filing triggers the $25,000 automatic penalty with no reasonable-cause exception.',
  },
  {
    date: '2025-12-15',
    category: 'Entity Formation',
    title: 'Delaware Raises Annual Franchise Tax for C-Corps',
    summary: 'Delaware\'s annual franchise tax for C-Corporations has increased for the 2026 tax year. The minimum tax remains $400 (for the Authorized Shares method) but maximum thresholds have been adjusted. Foreign-owned C-Corps incorporated in Delaware should review their franchise tax calculation method.',
  },
  {
    date: '2025-12-10',
    category: 'State Law',
    title: 'Massachusetts Paid Family and Medical Leave Premium Rates Updated for 2026',
    summary: 'Massachusetts PFML contribution rates for 2026 are 0.88% of wages (split between employer and employee). The maximum weekly benefit rises to $1,170.64. Employers with Massachusetts employees should verify their payroll provider has updated the withholding rates.',
  },
  {
    date: '2025-12-01',
    category: 'Tax',
    title: 'OECD Pillar Two: Global Minimum Tax Implications for US Subsidiaries of Foreign Companies',
    summary: 'As more countries implement the OECD\'s 15% global minimum tax (Pillar Two), foreign parent companies should evaluate how their US subsidiaries are affected. US-based subsidiaries already subject to 21% corporate tax generally meet the minimum threshold, but qualified refundable tax credits may create complications.',
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
