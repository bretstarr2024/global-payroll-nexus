import type { Metadata } from 'next';
import { StickyTOC } from '@/components/StickyTOC';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Employer of Record (EOR) Guide | What It Is, How It Works, When You Need One',
  description: 'A comprehensive guide to Employer of Record services. Learn what an EOR does, how it works, when to use one vs setting up an entity, and how to choose the right provider.',
};

const tocItems = [
  { id: 'what-is-eor', label: 'What is an EOR?' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'when-to-use', label: 'When to use an EOR' },
  { id: 'eor-vs-entity', label: 'EOR vs entity' },
  { id: 'choosing-provider', label: 'Choosing a provider' },
  { id: 'costs', label: 'What it costs' },
  { id: 'risks', label: 'Risks and limitations' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  {
    question: 'Who is the legal employer when using an EOR?',
    answer: 'The EOR is the legal employer of record in the target country. They hold the employment contract, manage payroll, and handle statutory obligations. You retain day-to-day management of the employee\'s work, goals, and performance.',
  },
  {
    question: 'How quickly can an EOR hire someone in a new country?',
    answer: 'Most EOR providers can onboard an employee within 1-2 weeks, compared to 3-6 months for entity setup. The exact timeline depends on the country, the complexity of the role, and whether right-to-work checks are straightforward.',
  },
  {
    question: 'What happens to IP ownership with an EOR?',
    answer: 'IP assignment clauses must be built into the employment contract. A good EOR will ensure IP assignment is enforceable under local law. This is one of the most important details to get right — ask your provider how they handle it in each jurisdiction.',
  },
  {
    question: 'Can I convert an EOR employee to my own entity later?',
    answer: 'Yes. This is called "graduating" from EOR to your own entity. The process involves terminating the EOR employment (following local law), then re-hiring through your new entity. A good provider will help manage this transition to ensure continuity of employment.',
  },
  {
    question: 'What is the difference between an EOR and a PEO?',
    answer: 'An EOR is the sole legal employer. A PEO (Professional Employer Organization) co-employs workers alongside your company. PEOs are common in the US but less prevalent internationally. For global hiring, EOR is the standard model.',
  },
];

export default function EmployerOfRecordPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
              Comprehensive Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
              Employer of Record (EOR): The Complete Guide
            </h1>
            {/* Answer-first block */}
            <div className="border-l-4 border-nexus-purple pl-6 mb-6">
              <p className="text-lg text-nexus-gray-700 leading-relaxed">
                An Employer of Record (EOR) is a third-party organisation that legally employs workers on your behalf in countries where you don&apos;t have a legal entity. The EOR handles payroll, taxes, benefits, and employment compliance. You manage the employee&apos;s day-to-day work.
              </p>
            </div>
            <p className="text-sm text-nexus-gray-500">
              Last updated: March 2026 &middot; 15 min read
            </p>
          </div>
        </AnimatedSection>

        {/* Content with sidebar TOC */}
        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block w-56 shrink-0">
            <StickyTOC items={tocItems} />
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-3xl prose-custom">
            <section id="what-is-eor" className="mb-12">
              <h2>What is an Employer of Record?</h2>
              <p>
                An Employer of Record (EOR) is a company that serves as the legal employer for your international hires. When you want to employ someone in a country where you don&apos;t have a registered entity, the EOR steps in as the employer on paper — handling employment contracts, payroll, tax withholding, statutory benefits, and compliance with local labour law.
              </p>
              <p>
                You retain full control over the employee&apos;s work: what they do, how they do it, who they report to, and how their performance is evaluated. The EOR handles the legal and administrative infrastructure that makes that employment possible.
              </p>
              <p>
                Think of it as the difference between <strong>managing</strong> someone and <strong>employing</strong> someone. You do the first. The EOR does the second.
              </p>
            </section>

            <section id="how-it-works" className="mb-12">
              <h2>How an EOR works</h2>
              <p>
                The mechanics are straightforward:
              </p>
              <ol>
                <li><strong>You identify the hire.</strong> You find and select the candidate. The EOR doesn&apos;t recruit for you.</li>
                <li><strong>The EOR creates a compliant employment contract</strong> under local law, including compensation, benefits, IP assignment, and termination provisions.</li>
                <li><strong>The employee is onboarded</strong> through the EOR&apos;s local entity. Right-to-work checks, tax registration, and benefits enrolment happen here.</li>
                <li><strong>Payroll runs monthly</strong> (or per local cycle). The EOR calculates gross-to-net, withholds taxes and social contributions, and pays the employee in local currency.</li>
                <li><strong>You manage the work.</strong> Day-to-day direction, goals, reviews, and team integration remain with you.</li>
              </ol>
            </section>

            <section id="when-to-use" className="mb-12">
              <h2>When to use an EOR</h2>
              <p>
                An EOR makes sense when:
              </p>
              <ul>
                <li>You need to hire in a country where you have no legal entity</li>
                <li>You&apos;re testing a new market and want to hire before committing to entity setup</li>
                <li>You have a small number of employees (typically fewer than 8-15) in a given country</li>
                <li>Speed matters — you need someone working in weeks, not months</li>
                <li>You don&apos;t have the internal resources to manage compliance in unfamiliar jurisdictions</li>
              </ul>
            </section>

            <section id="eor-vs-entity" className="mb-12">
              <h2>EOR vs setting up your own entity</h2>
              <p>
                This is the most common question, and the honest answer is: <strong>it depends on the numbers.</strong>
              </p>
              <p>
                An EOR charges a per-employee-per-month fee. An entity has fixed costs (formation, registered office, local accountant, compliance, annual filings) regardless of headcount. At some point, the economics cross over.
              </p>
              <p>
                The typical crossover point is <strong>8-15 employees in a single country</strong>, depending on the jurisdiction and the complexity of your operations. Below that, EOR is almost always more cost-effective. Above it, the maths starts favouring your own entity.
              </p>
              <p>
                <a href="/eor-vs-entity">Read the full EOR vs Entity comparison &rarr;</a>
              </p>
            </section>

            <section id="choosing-provider" className="mb-12">
              <h2>How to choose an EOR provider</h2>
              <p>
                Not all EOR providers are the same. The questions that matter:
              </p>
              <ul>
                <li><strong>Own entities vs partners?</strong> Some providers operate their own legal entities; others use third-party partners. Own entities generally mean more control and accountability.</li>
                <li><strong>Country coverage.</strong> Do they operate in the countries you need, now and in the next 12-24 months?</li>
                <li><strong>Support model.</strong> Will you have a named contact who knows your business, or a ticket queue?</li>
                <li><strong>Compliance depth.</strong> Can they handle complex situations — terminations, disputes, audits — or only straightforward hires?</li>
                <li><strong>Graduation path.</strong> When you outgrow EOR, will they help you transition to your own entity, or will they try to keep you on EOR because it&apos;s more profitable for them?</li>
              </ul>
            </section>

            <section id="costs" className="mb-12">
              <h2>What an EOR costs</h2>
              <p>
                EOR pricing typically falls into two models:
              </p>
              <ul>
                <li><strong>Flat fee per employee per month.</strong> Ranges from $300-$700/month depending on the provider and country. This is the most common model.</li>
                <li><strong>Percentage of salary.</strong> Some providers charge a percentage of the employee&apos;s gross salary, typically 10-20%. Less common and harder to budget.</li>
              </ul>
              <p>
                On top of the EOR fee, you pay the employee&apos;s gross salary plus employer-side statutory costs (social contributions, insurance, etc.). These vary dramatically by country — employer costs in France can add 45%+ on top of gross salary, while the UK is closer to 15%.
              </p>
            </section>

            <section id="risks" className="mb-12">
              <h2>Risks and limitations</h2>
              <p>
                An EOR isn&apos;t a magic solution. Things to watch for:
              </p>
              <ul>
                <li><strong>Permanent establishment risk.</strong> In some jurisdictions, having employees (even via EOR) can create tax obligations for your company. Get local tax advice.</li>
                <li><strong>IP ownership.</strong> If the EOR contract doesn&apos;t properly assign IP to your company under local law, you could have issues. This is especially critical for engineering and creative roles.</li>
                <li><strong>Employee experience.</strong> Your employee&apos;s payslip comes from the EOR, not your company. This can create an odd feeling. Good communication and strong onboarding help.</li>
                <li><strong>Termination complexity.</strong> Ending employment through an EOR follows local law, which may include notice periods, severance, and unfair dismissal protections you&apos;re not used to.</li>
              </ul>
            </section>

            <section id="faq" className="mb-12">
              <h2>Frequently asked questions</h2>
              <FaqAccordion items={faqs} className="mt-6" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
