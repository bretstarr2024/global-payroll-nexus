import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact | Talk to a US Payroll Specialist',
  description: 'Get specialist advice on US entity formation, payroll setup, and foreign-ownership compliance for your company.',
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Get in touch
          </h1>
          <div className="answer-block">
            <p>
              Whether you&apos;re researching US expansion, setting up your first entity, or navigating compliance — get advice from specialists who work with foreign-owned US companies every day.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="card">
              <h2 className="text-xl font-bold text-text mb-3">Talk to a specialist</h2>
              <p className="text-text-secondary mb-6">
                For questions about US entity formation, payroll setup, foreign-ownership compliance, or Teamed&apos;s services.
              </p>
              <a
                href="https://www.teamed.global/contact-teamed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:no-underline"
              >
                Book a consultation
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="card">
              <h2 className="text-xl font-bold text-text mb-3">Content questions</h2>
              <p className="text-text-secondary mb-6">
                Found an error, have a suggestion, or want to contribute? We welcome corrections and feedback on our guides.
              </p>
              <a
                href="https://www.teamed.global/contact-teamed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline hover:no-underline"
              >
                Send us a message
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
