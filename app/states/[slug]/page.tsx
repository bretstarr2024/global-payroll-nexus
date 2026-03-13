import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FaqAccordion } from '@/components/FaqAccordion';

const stateData: Record<string, {
  name: string;
  capital: string;
  stateIncomeTax: string;
  corporateTax: string;
  employerRegistration: string;
  keyLaws: string[];
  overview: string;
  faqs: { question: string; answer: string }[];
}> = {
  delaware: {
    name: 'Delaware',
    capital: 'Dover',
    stateIncomeTax: '2.2% – 6.6% (graduated)',
    corporateTax: '8.7% flat rate',
    employerRegistration: 'Delaware Division of Revenue + Division of Unemployment Insurance',
    keyLaws: [
      'No sales tax',
      'Court of Chancery for business disputes (no jury)',
      'Flexible corporate law (DGCL)',
      'Privacy protections for officers/directors',
      'No state corporate income tax for companies that don\'t operate in Delaware',
    ],
    overview: 'Delaware is the most popular incorporation state for foreign-owned US entities — and for good reason. Its Court of Chancery, flexible corporate statute, and established case law make it the default choice for investors and legal advisors. But incorporating in Delaware doesn\'t mean you avoid other states: if your employees work in California, you still register there as a foreign entity.',
    faqs: [
      { question: 'Do I need employees in Delaware to incorporate there?', answer: 'No. You can incorporate in Delaware without having any employees or physical presence there. You need a registered agent with a Delaware address, but your operations can be anywhere. However, you will need to register as a "foreign entity" in any state where you have employees or conduct business.' },
      { question: 'What is the Delaware franchise tax?', answer: 'Delaware charges an annual franchise tax for all entities incorporated in the state. For LLCs, it\'s a flat $300/year. For C-Corps, it\'s calculated using either the Authorized Shares method or the Assumed Par Value Capital method — the lower of the two applies. Small companies typically owe $400-$1,000/year.' },
      { question: 'Should a foreign-owned company choose an LLC or C-Corp in Delaware?', answer: 'It depends on your funding plans and tax structure. A C-Corp is typically preferred if you plan to raise US venture capital. An LLC (taxed as a disregarded entity) is simpler for wholly-owned subsidiaries of foreign parents, but it triggers Form 5472 filing requirements for any reportable transactions with the foreign parent.' },
    ],
  },
  california: {
    name: 'California',
    capital: 'Sacramento',
    stateIncomeTax: '1% – 13.3% (highest state rate in the US)',
    corporateTax: '8.84% (minimum $800 franchise tax)',
    employerRegistration: 'EDD (Employment Development Department) + CA Franchise Tax Board',
    keyLaws: [
      'Strictest employment laws in the US',
      'Mandatory sick leave (40 hours/year minimum)',
      'Non-compete agreements are generally unenforceable',
      'Pay transparency requirements',
      'Final paycheck due on termination day (voluntary) or within 72 hours (resignation)',
      'Meal and rest break requirements strictly enforced',
    ],
    overview: 'California has the largest talent pool in the US but also the most complex employment law landscape. Foreign companies often underestimate the compliance burden: strict meal/rest break rules, non-compete ban, pay transparency, and the most aggressive wage-and-hour enforcement in the country. Budget for California-specific legal advice.',
    faqs: [
      { question: 'Are non-compete clauses enforceable in California?', answer: 'No. California Business and Professions Code Section 16600 makes non-compete agreements generally void and unenforceable. This is a significant difference from UK/EU employment law. You cannot prevent a California employee from working for a competitor after they leave.' },
      { question: 'What is the California $800 minimum franchise tax?', answer: 'Every LLC, LP, or corporation doing business in California must pay a minimum franchise tax of $800/year, regardless of income. This applies from the second year of existence. For the first year, newly formed LLCs are exempt, but C-Corps and S-Corps are not.' },
      { question: 'Do I need to register in California if I have one remote employee there?', answer: 'Generally, yes. Having an employee in California typically creates "nexus" — a sufficient connection to require registration, tax withholding, and compliance with California employment law. This applies even if the employee works from home.' },
    ],
  },
  'new-york': {
    name: 'New York',
    capital: 'Albany',
    stateIncomeTax: '4% – 10.9% (plus NYC: 3.078% – 3.876%)',
    corporateTax: '6.5% – 7.25% (business income base)',
    employerRegistration: 'NY Department of Taxation and Finance + NY DOL',
    keyLaws: [
      'NYC employees subject to additional city income tax',
      'Paid family leave (up to 12 weeks)',
      'Mandatory disability insurance',
      'Salary transparency law (NYC)',
      'Wage Theft Prevention Act (annual wage notices)',
    ],
    overview: 'New York is the primary hub for financial services, media, and corporate headquarters. Hiring here means navigating both state-level and New York City-level requirements — different tax rates, different employment laws, different compliance obligations. The combination of state + city taxes makes total employment costs higher than most other states.',
    faqs: [
      { question: 'Do NYC employees pay both state and city income tax?', answer: 'Yes. Employees who work in New York City are subject to both New York State income tax (up to 10.9%) and New York City income tax (up to 3.876%). This means total state/local income tax can exceed 14%, which significantly affects gross-to-net calculations and total employment cost.' },
      { question: 'What is New York Paid Family Leave?', answer: 'New York requires employers to provide paid family leave insurance, funded through employee payroll deductions. It provides up to 12 weeks of leave at 67% of the employee\'s average weekly wage (capped at 67% of the state average weekly wage). This is separate from FMLA and is more generous.' },
      { question: 'Do I need separate registration for New York State and New York City?', answer: 'For payroll tax purposes, you register with New York State. NYC income tax is withheld and reported through the state system. However, businesses operating in NYC may need to register separately with the NYC Department of Finance for other taxes (like the Unincorporated Business Tax if applicable).' },
    ],
  },
  texas: {
    name: 'Texas',
    capital: 'Austin',
    stateIncomeTax: 'None',
    corporateTax: 'No corporate income tax (franchise tax applies to entities with revenue > $2.47M)',
    employerRegistration: 'Texas Workforce Commission',
    keyLaws: [
      'No state income tax (major cost advantage)',
      'At-will employment (standard)',
      'Workers\' comp insurance is optional (unusual among states)',
      'Franchise (margin) tax applies to entities with revenue over $2.47M',
      'Growing tech hub (Austin, Dallas, Houston)',
    ],
    overview: 'Texas is increasingly popular with foreign companies because of its zero state income tax, business-friendly regulatory environment, and growing tech ecosystem across Austin, Dallas, and Houston. The absence of state income tax simplifies payroll significantly and reduces total employment cost compared to high-tax states like California or New York.',
    faqs: [
      { question: 'Does Texas really have no state income tax?', answer: 'Correct. Texas has no individual state income tax and no corporate income tax. There is a franchise (margin) tax that applies to businesses with total revenue exceeding $2.47M, but most small subsidiaries of foreign companies fall below this threshold.' },
      { question: 'Is workers\' compensation insurance required in Texas?', answer: 'No. Texas is unique in that workers\' compensation insurance is not mandatory for most private employers. However, going without it ("non-subscriber" status) exposes the employer to employee lawsuits for workplace injuries without the protections that workers\' comp provides. Most employment lawyers recommend carrying it.' },
      { question: 'What payroll taxes apply in Texas?', answer: 'Because there\'s no state income tax, Texas payroll obligations are limited to: federal income tax withholding, FICA (Social Security + Medicare), FUTA, and Texas unemployment insurance (SUTA). This makes Texas payroll simpler than most other states.' },
    ],
  },
  florida: {
    name: 'Florida',
    capital: 'Tallahassee',
    stateIncomeTax: 'None',
    corporateTax: '5.5% (applies to C-Corps with Florida nexus)',
    employerRegistration: 'Florida Department of Revenue + FL DEO (Reemployment Assistance)',
    keyLaws: [
      'No state individual income tax',
      'Corporate income tax at 5.5% for C-Corps',
      'At-will employment state',
      'No state-mandated paid sick leave (some local ordinances exist)',
      'Growing business presence, especially in Miami and Tampa',
    ],
    overview: 'Like Texas, Florida has no state individual income tax, which simplifies payroll and reduces employment costs. Florida\'s corporate income tax (5.5%) only applies to C-Corps — pass-through entities like single-member LLCs are not subject to it. The state is increasingly popular for foreign companies, particularly those with Latin American connections operating through Miami.',
    faqs: [
      { question: 'How does Florida compare to Texas for foreign companies?', answer: 'Both have no state income tax, which simplifies payroll. Key differences: Florida has a 5.5% corporate income tax for C-Corps (Texas does not, below $2.47M revenue). Florida\'s reemployment (unemployment) tax rates vary by employer experience rating. Both are at-will employment states with relatively business-friendly regulation.' },
      { question: 'Are there any local employment law requirements in Florida?', answer: 'Most employment regulation in Florida is at the state and federal level. However, some municipalities like Miami-Dade County have local ordinances covering things like wage theft prevention. Always check local requirements for the specific city/county where employees will work.' },
      { question: 'Does a foreign-owned LLC in Florida pay corporate income tax?', answer: 'Not typically. Florida\'s corporate income tax applies to C-Corps. A single-member LLC owned by a foreign parent is treated as a disregarded entity for federal tax purposes, and Florida follows federal classification. However, the LLC will still need to file Form 5472 with the IRS if it has reportable transactions with its foreign parent.' },
    ],
  },
  massachusetts: {
    name: 'Massachusetts',
    capital: 'Boston',
    stateIncomeTax: '5% flat (plus 4% surtax on income over $1M)',
    corporateTax: '8% on net income',
    employerRegistration: 'MA Department of Revenue + MA DUA (Unemployment)',
    keyLaws: [
      'Mandatory paid family and medical leave (PFML)',
      'Mandatory sick leave (40 hours/year)',
      'Non-compete agreements restricted (12-month max, garden leave required)',
      'Equal Pay Act (strict pay equity requirements)',
      'Strong employee protections overall',
    ],
    overview: 'Massachusetts is a hub for biotech, healthcare, education, and technology. It has strong employee protections and relatively complex employment law requirements, including mandatory paid family and medical leave funded through payroll contributions. The state\'s talent pool is excellent but comes with compliance obligations that foreign companies should plan for.',
    faqs: [
      { question: 'What is Massachusetts Paid Family and Medical Leave?', answer: 'PFML provides up to 26 weeks of combined family and medical leave per benefit year. It\'s funded through payroll contributions (split between employer and employee). The program is administered by the state and provides wage replacement at a percentage of the employee\'s average weekly wage.' },
      { question: 'Are non-competes enforceable in Massachusetts?', answer: 'Yes, but with restrictions since 2018. Non-competes must be limited to 12 months, must be supported by garden leave (50% of base salary during the restricted period) or other mutually-agreed consideration, and must be provided before the start date or with 10 business days\' notice for existing employees.' },
    ],
  },
  washington: {
    name: 'Washington',
    capital: 'Olympia',
    stateIncomeTax: 'None (but 7% capital gains tax on gains over $270K)',
    corporateTax: 'No corporate income tax (B&O tax applies instead)',
    employerRegistration: 'WA Employment Security Department + WA Department of Revenue',
    keyLaws: [
      'No state income tax (but B&O tax applies to gross receipts)',
      'Paid Family and Medical Leave (mandatory)',
      'Long-term care tax (WA Cares Fund)',
      'Non-compete restrictions (not enforceable below ~$120K salary)',
      'Seattle has additional local requirements',
    ],
    overview: 'Washington state is home to Seattle\'s major tech ecosystem and has no state income tax, making it attractive for hiring. However, the state\'s Business & Occupation (B&O) tax — levied on gross receipts, not net income — catches some foreign companies off guard. The state also has mandatory paid family leave and a unique long-term care payroll tax.',
    faqs: [
      { question: 'What is Washington\'s B&O tax?', answer: 'The Business & Occupation tax is levied on gross receipts (revenue), not net income. Rates vary by business activity: 0.471% for retailing, 0.484% for manufacturing, 1.5% for service activities. Unlike income tax, B&O tax applies regardless of profitability, which can be surprising for foreign companies used to profit-based taxation.' },
      { question: 'What is the WA Cares Fund?', answer: 'The WA Cares Fund is a long-term care insurance program funded through a 0.58% payroll tax on employee wages. It provides a lifetime benefit of up to $36,500 for long-term care services. Employees who had qualifying private long-term care insurance before November 2021 could opt out.' },
    ],
  },
  illinois: {
    name: 'Illinois',
    capital: 'Springfield',
    stateIncomeTax: '4.95% flat rate',
    corporateTax: '9.5% (7% income tax + 2.5% replacement tax)',
    employerRegistration: 'IL Department of Revenue + IL DES (Unemployment)',
    keyLaws: [
      'Biometric Information Privacy Act (BIPA) — strict biometric data rules',
      'Paid Leave for All Workers Act (40 hours/year)',
      'Day and Temporary Labor Services Act',
      'Complex local tax requirements (Chicago has additional obligations)',
    ],
    overview: 'Illinois, centered on Chicago, is a major Midwest business hub for logistics, manufacturing, and financial services. The state has a flat income tax rate of 4.95% and a combined corporate tax rate of 9.5%. Foreign companies should be aware of BIPA — one of the strictest biometric privacy laws in the US — and Chicago-specific requirements that add complexity.',
    faqs: [
      { question: 'What is BIPA and why does it matter?', answer: 'The Biometric Information Privacy Act (BIPA) regulates the collection, use, and storage of biometric data (fingerprints, facial recognition, etc.). It provides a private right of action with statutory damages of $1,000-$5,000 per violation. If you plan to use biometric timekeeping or security systems in Illinois, BIPA compliance is critical.' },
    ],
  },
  colorado: {
    name: 'Colorado',
    capital: 'Denver',
    stateIncomeTax: '4.4% flat rate',
    corporateTax: '4.4% flat rate',
    employerRegistration: 'CO Department of Revenue + CO DLE (Unemployment)',
    keyLaws: [
      'Equal Pay for Equal Work Act (salary transparency, pay equity)',
      'Paid Family and Medical Leave Insurance (FAMLI)',
      'Healthy Families and Workplaces Act (paid sick leave)',
      'Colorado Privacy Act',
      'Unique overtime rules (overtime after 12 hours in a day, not just 40/week)',
    ],
    overview: 'Colorado has a growing tech scene centered on Denver and Boulder, with a flat income tax rate of 4.4%. The state has been a leader in employment law reform, including mandatory pay transparency in job postings and paid family leave. Colorado\'s overtime rules differ from federal — overtime kicks in after 12 hours in a single day, regardless of weekly hours.',
    faqs: [
      { question: 'What are Colorado\'s pay transparency requirements?', answer: 'The Equal Pay for Equal Work Act requires employers to disclose salary ranges in all job postings, notify current employees of promotion opportunities, and maintain records of job descriptions and wage rates. This applies even to remote job postings if the role could be performed in Colorado.' },
      { question: 'How does Colorado FAMLI work?', answer: 'FAMLI (Family and Medical Leave Insurance) provides up to 12 weeks of paid leave (16 weeks for pregnancy/childbirth complications). It\'s funded through employer and employee payroll contributions (0.45% each). Benefits began January 2024 and are administered by the state.' },
    ],
  },
  georgia: {
    name: 'Georgia',
    capital: 'Atlanta',
    stateIncomeTax: '1% – 5.49% (transitioning to flat rate)',
    corporateTax: '5.75%',
    employerRegistration: 'GA Department of Revenue + GA DOL (Unemployment)',
    keyLaws: [
      'At-will employment (standard)',
      'No state-mandated paid sick leave',
      'Right-to-work state',
      'Film and entertainment industry tax credits (if relevant)',
      'Growing logistics and tech hub (Atlanta)',
    ],
    overview: 'Georgia, centered on Atlanta, is a major logistics and business hub with a relatively low cost of doing business. The state is transitioning from a graduated income tax to a flat rate system. Georgia is a right-to-work state with fewer employer mandates than coastal states, making compliance relatively straightforward for foreign companies.',
    faqs: [
      { question: 'What does "right-to-work" mean for employers?', answer: 'Georgia\'s right-to-work law means employees cannot be required to join a union or pay union dues as a condition of employment. This is relevant if you\'re in an industry where unions are common. It does not affect other employment law obligations.' },
      { question: 'Is Georgia a good state for a foreign company\'s first US hire?', answer: 'Georgia has lower regulatory complexity than states like California or New York, moderate tax rates, and a strong talent pool in Atlanta. If your first US employees will be in Georgia, it\'s a relatively straightforward state for compliance. You\'ll still need to register with the GA Department of Revenue and Department of Labor.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(stateData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const state = stateData[params.slug];
  if (!state) return { title: 'State Not Found' };
  return {
    title: `Hiring in ${state.name} | Employer Guide for Foreign Companies`,
    description: `Guide to hiring employees in ${state.name} as a foreign company. Tax rates, employer registration, employment law, and compliance requirements.`,
  };
}

export default function StatePage({ params }: { params: { slug: string } }) {
  const state = stateData[params.slug];

  if (!state) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-text mb-4">State Not Found</h1>
          <p className="text-text-secondary mb-6">We don&apos;t have a guide for this state yet.</p>
          <Link href="/states" className="btn-secondary hover:no-underline">Browse All States</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="mb-12">
            <Link href="/states" className="text-sm text-primary hover:text-primary-deep mb-4 inline-block">&larr; All States</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Hiring in {state.name}
            </h1>
            <div className="answer-block">
              <p>{state.overview}</p>
            </div>
            <p className="text-sm text-text-muted">Last updated: March 2026</p>
          </div>
        </AnimatedSection>

        <div className="prose-custom">
          <AnimatedSection>
            <h2>Key Facts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-8">
              <div className="card p-4">
                <p className="text-sm text-text-muted mb-1">State Income Tax</p>
                <p className="text-base font-semibold text-text">{state.stateIncomeTax}</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-text-muted mb-1">Corporate Tax</p>
                <p className="text-base font-semibold text-text">{state.corporateTax}</p>
              </div>
              <div className="card p-4 sm:col-span-2">
                <p className="text-sm text-text-muted mb-1">Employer Registration</p>
                <p className="text-base font-semibold text-text">{state.employerRegistration}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2>Key Employment Laws & Requirements</h2>
            <ul>
              {state.keyLaws.map((law, index) => (
                <li key={index}>{law}</li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2>What Foreign Companies Should Know</h2>
            <p>
              If you&apos;re a UK or European company hiring your first employee in {state.name}, you&apos;ll need to:
            </p>
            <ol>
              <li><strong>Register as an employer</strong> with {state.employerRegistration}</li>
              <li><strong>Set up state tax withholding</strong> — {state.stateIncomeTax === 'None' ? `${state.name} has no state income tax, simplifying payroll` : `withhold at the appropriate rate (${state.stateIncomeTax})`}</li>
              <li><strong>Comply with state employment laws</strong> — review the requirements above and consult a US employment attorney for {state.name}-specific guidance</li>
              <li><strong>Remember your federal obligations</strong> — Form 5472, federal payroll taxes, and foreign-owned entity compliance apply regardless of which state you operate in</li>
            </ol>
          </AnimatedSection>

          {state.faqs.length > 0 && (
            <AnimatedSection>
              <h2>Frequently Asked Questions</h2>
              <FaqAccordion items={state.faqs} className="mt-6 not-prose" />
            </AnimatedSection>
          )}

          <AnimatedSection>
            <div className="mt-12 p-6 bg-surface-alt rounded-2xl border border-border not-prose">
              <h3 className="text-lg font-bold text-text mb-2">Need help setting up in {state.name}?</h3>
              <p className="text-text-secondary mb-4">
                From entity registration to payroll setup and compliance — get specialist guidance for your US expansion.
              </p>
              <a
                href="https://www.teamed.global/contact-teamed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:no-underline"
              >
                Talk to a US payroll specialist
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
