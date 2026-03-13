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
      { question: 'What is a registered agent and do I need one?', answer: 'A registered agent is a person or company designated to receive legal and official documents on behalf of your business entity. Every US entity must have one in each state where it\'s registered. Foreign companies without a US office should use a professional registered agent service ($100-300/year per state).' },
      { question: 'Can I form a US entity entirely from outside the United States?', answer: 'Yes. You can form an LLC or C-Corp in any US state without being physically present. You\'ll need a registered agent in the state of incorporation, and you can file formation documents online or through an attorney. The EIN application (by fax) and bank account opening may be more challenging remotely.' },
      { question: 'What is a Certificate of Good Standing?', answer: 'A document from the Secretary of State confirming that your entity is in compliance with state requirements (annual reports, franchise taxes). Banks, partners, and some states require it when you register as a foreign entity. You can request one from your state of incorporation, typically for $10-50.' },
      { question: 'Do I need to hold board meetings for my US C-Corp?', answer: 'Yes. C-Corps are expected to hold annual shareholder meetings and regular board meetings. You should keep minutes of major decisions, resolutions, and officer appointments. While enforcement is rare, maintaining corporate formalities protects the corporate veil — especially important for foreign-owned subsidiaries.' },
    ],
  },
  {
    category: 'US Payroll',
    faqs: [
      { question: 'What payroll taxes does a US employer pay?', answer: 'FICA (7.65% — Social Security 6.2% + Medicare 1.45%), FUTA (effectively 0.6% on the first $7,000 per employee), and state unemployment insurance (typically 1-5%, varies by state and employer history).' },
      { question: 'How often do I need to run payroll?', answer: 'Most states allow biweekly (every two weeks) or semi-monthly (twice a month) pay schedules. Some states like California have specific frequency requirements. Check your state\'s rules before setting up.' },
      { question: 'Can I pay US employees from a UK bank account?', answer: 'No. US payroll must be run through a US bank account. Federal and state tax deposits, direct deposit payments, and payroll tax filings all require a US banking relationship.' },
      { question: 'What payroll provider should a foreign company use?', answer: 'For small foreign-owned companies (1-50 employees), Gusto, Rippling, and ADP Run are popular choices. Choose a provider that handles multi-state tax registration, Form W-2s, and quarterly filings automatically.' },
      { question: 'What is a Form W-2 and when do I need to file it?', answer: 'Form W-2 reports each employee\'s annual wages and tax withholdings. Employers must provide W-2s to employees by January 31 each year and file copies with the Social Security Administration. Your payroll provider typically handles this automatically.' },
      { question: 'What is supplemental wage withholding?', answer: 'Supplemental wages include bonuses, commissions, and overtime. The federal supplemental withholding rate is a flat 22% (or 37% for amounts over $1 million). States have their own supplemental rates. This is simpler than calculating based on the employee\'s W-4, and most payroll providers handle it automatically.' },
      { question: 'How do I handle payroll when employees are in different time zones?', answer: 'Pay schedule and payday are set at the company level, not per time zone. However, you must comply with each state\'s payday requirements. Some states require more frequent pay. Your payroll provider handles the tax calculations per state regardless of time zone.' },
      { question: 'What records do I need to keep for US payroll?', answer: 'The IRS requires payroll records for at least 4 years, including: employee names, addresses, and SSNs; dates and amounts of tax deposits; copies of filed returns; W-4 forms. The FLSA requires 3 years for wage records. Some states require longer retention periods.' },
    ],
  },
  {
    category: 'Foreign-Ownership Compliance',
    faqs: [
      { question: 'What is Form 5472?', answer: 'An IRS information return required for any US entity that is 25% or more foreign-owned and has reportable transactions with related foreign parties. Penalty for failure to file: $25,000 per form, per year.' },
      { question: 'What counts as a "reportable transaction" for Form 5472?', answer: 'Any monetary transaction between the US entity and its foreign related parties — including loans, capital contributions, management fees, royalties, expense reimbursements, and payments for services or IP.' },
      { question: 'Does my EOR file Form 5472 for me?', answer: 'No. An Employer of Record handles payroll and employment compliance. Form 5472 is an entity-level IRS filing obligation that you or your US tax advisor must handle separately.' },
      { question: 'What is transfer pricing and why does it matter?', answer: 'Transfer pricing is the pricing of transactions between related entities (e.g., your UK parent and US subsidiary). The IRS requires these to be "arm\'s length" — priced as if the entities were unrelated. You must maintain documentation supporting your transfer pricing policies.' },
      { question: 'What is a pro forma Form 1120?', answer: 'A US corporate income tax return filed by a foreign-owned disregarded entity (typically a single-member LLC) solely for the purpose of attaching Form 5472. The entity reports zero income but must file this return to satisfy the Form 5472 requirement. It\'s due April 15, or October 15 with an extension.' },
      { question: 'What is the Corporate Transparency Act and does it apply to my company?', answer: 'The CTA requires most US entities to report beneficial ownership information to FinCEN. If your US entity is foreign-owned, you must report the natural persons who ultimately own or control it. Most small foreign-owned entities do not qualify for an exemption and must file within 30 days of formation (for new entities).' },
      { question: 'Can the IRS assess penalties for late Form 5472 even if I owe no tax?', answer: 'Yes. Form 5472 is an information return — it reports transactions, not income. The $25,000 penalty applies regardless of whether the US entity owes any tax. There is no reasonable-cause exception for foreign-owned entities, and the penalty is automatic.' },
      { question: 'Do I need a US tax advisor or can my UK accountant handle US compliance?', answer: 'You need a US tax advisor (CPA or tax attorney) who understands foreign-owned entity compliance. UK accountants typically don\'t handle Form 5472, pro forma 1120, transfer pricing documentation, or state tax filings. Many firms specialise in serving foreign-owned US entities.' },
    ],
  },
  {
    category: 'Benefits & Employment Law',
    faqs: [
      { question: 'Is health insurance required in the US?', answer: 'Employers with 50+ full-time employees must offer health coverage or face penalties under the ACA. Smaller employers aren\'t required to, but offering health benefits is a strong expectation — most competitive US employers provide it.' },
      { question: 'What is "at-will" employment?', answer: 'The default in most US states. Either party can end the employment relationship at any time, for any lawful reason, without notice. This is one of the biggest differences from UK/EU employment law, where statutory notice and unfair dismissal protections apply.' },
      { question: 'Do US employees get statutory holiday?', answer: 'No. The US has no federal requirement for paid vacation, sick leave, or holiday. Benefits are negotiated between employer and employee. However, many states and cities have enacted their own paid sick leave laws.' },
      { question: 'What is a 401(k)?', answer: 'An employer-sponsored retirement savings plan that allows employees to contribute pre-tax earnings. Employers may offer matching contributions. It\'s the US equivalent of a workplace pension — and a key benefit for attracting US talent.' },
      { question: 'What is COBRA and do I need to offer it?', answer: 'COBRA requires employers with 20+ employees to offer departing employees the option to continue their health insurance for up to 18 months. The former employee pays the full premium (you don\'t subsidise it), but you must administer the process. Some states have "mini-COBRA" laws for smaller employers.' },
      { question: 'Do I need to offer severance pay when terminating a US employee?', answer: 'No. There is no federal or state requirement for severance pay. Employers offer it voluntarily — usually in exchange for a signed release of claims (waiving the right to sue). If you do offer severance, consult a US employment lawyer to ensure the release is enforceable.' },
      { question: 'What is the WARN Act?', answer: 'The Worker Adjustment and Retraining Notification Act requires employers with 100+ employees to provide 60 days\' written notice before mass layoffs or plant closings. Some states have their own WARN-equivalent laws with lower employee thresholds (California: 75, New York: 50, New Jersey: 100).' },
      { question: 'Can I use UK-style employment contracts for US employees?', answer: 'Not recommended. UK contracts with fixed notice periods, probationary periods, and detailed termination procedures can create contractual obligations that override at-will flexibility. Use a US-style offer letter that explicitly states employment is at-will.' },
    ],
  },
  {
    category: 'State-Specific',
    faqs: [
      { question: 'Which states have no income tax?', answer: 'Texas, Florida, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, and New Hampshire (on earned income). However, "no income tax" doesn\'t mean "no tax" — these states may have higher sales tax, franchise tax, or other business taxes.' },
      { question: 'What is "nexus" and why does it matter?', answer: 'Nexus is a sufficient connection between a business and a state that triggers tax and compliance obligations. Having even one employee in a state typically creates nexus, requiring you to register for income tax withholding, unemployment insurance, and other state obligations.' },
      { question: 'Can I hire in a different state from where my company is incorporated?', answer: 'Yes, but you must register as a "foreign entity" in each state where you have employees. This means state tax registration, unemployment insurance, and compliance with that state\'s employment laws — on top of your incorporation state obligations.' },
      { question: 'Why do so many companies incorporate in Delaware?', answer: 'Delaware\'s Court of Chancery specializes in business law, its corporate statutes are flexible and well-tested, and it offers strong privacy protections. For foreign companies, Delaware also has no state corporate income tax for entities that don\'t operate within the state.' },
      { question: 'Which states are the most expensive to operate in?', answer: 'California, New York, and Massachusetts tend to have the highest total employment costs due to mandatory paid leave programs, high minimum wages, state disability insurance, and strict regulatory requirements. However, they also offer access to the strongest talent pools.' },
      { question: 'Do I need workers\' compensation insurance?', answer: 'Almost certainly yes. Workers\' compensation is required in nearly all states (Texas and a few others allow opt-out in limited circumstances). It covers employees injured on the job. You must obtain coverage before your first employee starts work. Premiums vary by state, industry, and payroll size.' },
      { question: 'What is a state withholding allowance certificate?', answer: 'Some states (like California with its DE 4, or Illinois with its IL-W-4) have their own version of the federal W-4. Employees in these states fill out both the federal W-4 and the state form. Other states simply follow the federal W-4 for state withholding purposes.' },
      { question: 'Can an employee work in one state and live in another?', answer: 'Yes, and this creates complexity. Generally, you withhold tax for the state where the employee works. If they live in a different state, they may owe tax in both states (with credits). Some states have reciprocity agreements that simplify this — for example, New Jersey and Pennsylvania.' },
    ],
  },
  {
    category: 'Contractor Classification',
    faqs: [
      { question: 'Can I hire US contractors without a US entity?', answer: 'Yes. You can engage US-based independent contractors without forming a US entity. You\'ll need to collect a W-9 form and issue a 1099-NEC at year-end for payments of $600 or more. However, if the contractor should actually be classified as an employee, you face significant legal and tax liability.' },
      { question: 'What is the difference between a W-2 employee and a 1099 contractor?', answer: 'A W-2 employee has taxes withheld, receives benefits, and is protected by employment laws. A 1099 contractor manages their own taxes, is not entitled to benefits, and has more autonomy over how and when they work. Misclassifying an employee as a 1099 contractor can result in back taxes, penalties, and lawsuits.' },
      { question: 'What is California\'s ABC test?', answer: 'California\'s AB5 law presumes all workers are employees unless the hiring company can prove three things: (A) the worker is free from control and direction, (B) the work is outside the company\'s usual business, and (C) the worker has an independently established business. Prong B is the most restrictive and catches many arrangements that would be acceptable in other states.' },
      { question: 'How long can I keep someone as an independent contractor?', answer: 'There is no fixed legal time limit, but long-term, ongoing engagements without a defined project scope are a strong indicator of employment. If a contractor has been working with you for 6-12+ months on continuous tasks, the relationship increasingly looks like employment under both IRS and state tests.' },
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
