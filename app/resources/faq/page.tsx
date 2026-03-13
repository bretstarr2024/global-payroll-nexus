import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ — US Payroll Guide',
  description: 'Answers to common questions about US payroll, entity formation, Form 5472, compliance, and employment law for foreign-owned companies.',
};

const faqCategories = [
  {
    category: 'Entity Formation',
    faqs: [
      { question: 'Do I need a US entity to hire employees in America?', answer: 'Yes, if you want to run your own payroll. You need a registered US entity (LLC or C-Corp) with an EIN to withhold taxes, file payroll returns, and comply with federal and state employment law. The alternative is using an Employer of Record (EOR), which employs workers through their entity on your behalf.' },
      { question: 'Which US state should a foreign company incorporate in?', answer: 'Delaware is the most common choice because of its business-friendly court system and flexible corporate law. But if all your employees are in one state (like California), incorporating there may be simpler — incorporating in Delaware still requires you to register as a foreign entity in each state where you operate.' },
      { question: 'How long does it take to set up a US subsidiary?', answer: 'Entity formation takes 1-3 weeks. Being fully operational — with an EIN, bank account, registered agent, payroll, and state tax registrations — typically takes 6-10 weeks. An EOR can bridge the gap while you set up.' },
      { question: 'LLC or C-Corp — which should a foreign company choose?', answer: 'C-Corp if you plan to raise US venture capital or want clean corporate separation. LLC if you want simplicity and pass-through taxation for a small team. Both require Form 5472 filing if there are intercompany transactions.' },
    ],
  },
  {
    category: 'US Payroll',
    faqs: [
      { question: 'What payroll taxes does a US employer pay?', answer: 'FICA (7.65% — Social Security 6.2% + Medicare 1.45%), FUTA (effectively 0.6% on the first $7,000 per employee), and state unemployment insurance (typically 1-5%, varies by state and employer history).' },
      { question: 'How often do I need to run payroll?', answer: 'Most states allow biweekly (every two weeks) or semi-monthly (twice a month) pay schedules. Some states like California have specific frequency requirements. Check your state\'s rules before setting up.' },
      { question: 'Can I pay US employees from a UK bank account?', answer: 'No. US payroll must be run through a US bank account. Federal and state tax deposits, direct deposit payments, and payroll tax filings all require a US banking relationship.' },
      { question: 'What payroll provider should a foreign company use?', answer: 'For small foreign-owned companies (1-50 employees), Gusto, Rippling, and ADP Run are popular choices. Choose a provider that handles multi-state tax registration, Form W-2s, and quarterly filings automatically.' },
    ],
  },
  {
    category: 'Foreign-Ownership Compliance',
    faqs: [
      { question: 'What is Form 5472?', answer: 'An IRS information return required for any US entity that is 25% or more foreign-owned and has reportable transactions with related foreign parties. Penalty for failure to file: $25,000 per form, per year.' },
      { question: 'What counts as a "reportable transaction" for Form 5472?', answer: 'Any monetary transaction between the US entity and its foreign related parties — including loans, capital contributions, management fees, royalties, expense reimbursements, and payments for services or IP.' },
      { question: 'Does my EOR file Form 5472 for me?', answer: 'No. An Employer of Record handles payroll and employment compliance. Form 5472 is an entity-level IRS filing obligation that you or your US tax advisor must handle separately.' },
      { question: 'What is transfer pricing and why does it matter?', answer: 'Transfer pricing is the pricing of transactions between related entities (e.g., your UK parent and US subsidiary). The IRS requires these to be "arm\'s length" — priced as if the entities were unrelated. You must maintain documentation supporting your transfer pricing policies.' },
    ],
  },
  {
    category: 'Benefits & Employment Law',
    faqs: [
      { question: 'Is health insurance required in the US?', answer: 'Employers with 50+ full-time employees must offer health coverage or face penalties under the ACA. Smaller employers aren\'t required to, but offering health benefits is a strong expectation — most competitive US employers provide it.' },
      { question: 'What is "at-will" employment?', answer: 'The default in most US states. Either party can end the employment relationship at any time, for any lawful reason, without notice. This is one of the biggest differences from UK/EU employment law, where statutory notice and unfair dismissal protections apply.' },
      { question: 'Do US employees get statutory holiday?', answer: 'No. The US has no federal requirement for paid vacation, sick leave, or holiday. Benefits are negotiated between employer and employee. However, many states and cities have enacted their own paid sick leave laws.' },
      { question: 'What is a 401(k)?', answer: 'An employer-sponsored retirement savings plan that allows employees to contribute pre-tax earnings. Employers may offer matching contributions. It\'s the US equivalent of a workplace pension — and a key benefit for attracting US talent.' },
    ],
  },
  {
    category: 'State-Specific',
    faqs: [
      { question: 'Which states have no income tax?', answer: 'Texas, Florida, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, and New Hampshire (on earned income). However, "no income tax" doesn\'t mean "no tax" — these states may have higher sales tax, franchise tax, or other business taxes.' },
      { question: 'What is "nexus" and why does it matter?', answer: 'Nexus is a sufficient connection between a business and a state that triggers tax and compliance obligations. Having even one employee in a state typically creates nexus, requiring you to register for income tax withholding, unemployment insurance, and other state obligations.' },
      { question: 'Can I hire in a different state from where my company is incorporated?', answer: 'Yes, but you must register as a "foreign entity" in each state where you have employees. This means state tax registration, unemployment insurance, and compliance with that state\'s employment laws — on top of your incorporation state obligations.' },
      { question: 'Why do so many companies incorporate in Delaware?', answer: 'Delaware\'s Court of Chancery specializes in business law, its corporate statutes are flexible and well-tested, and it offers strong privacy protections. For foreign companies, Delaware also has no state corporate income tax for entities that don\'t operate within the state.' },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(c => c.faqs);

export default function FaqPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="mb-2">
            <Link href="/resources" className="text-sm text-text-muted hover:text-primary">
              &larr; Resources
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Frequently Asked Questions
          </h1>
          <div className="answer-block">
            <p>
              Answers to the most common questions from UK and European companies about setting up, hiring, and staying compliant in the United States.
            </p>
          </div>
        </AnimatedSection>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: allFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />

        <div className="mt-12 space-y-12">
          {faqCategories.map((cat, index) => (
            <AnimatedSection key={cat.category} delay={index * 0.08}>
              <h2 className="text-2xl font-bold text-text mb-6">{cat.category}</h2>
              <FaqAccordion items={cat.faqs} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">Have a question we haven&apos;t answered?</p>
            <a
              href="https://www.teamed.global/contact-teamed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:no-underline"
            >
              Ask a US Payroll Specialist
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
