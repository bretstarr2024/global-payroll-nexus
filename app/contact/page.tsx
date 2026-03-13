import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact | Get Expert Help with Global Employment',
  description: 'Need help with international payroll, EOR, or global employment compliance? Connect with experts who do this every day.',
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Get expert help
          </h1>
          <p className="text-lg text-nexus-gray-700 max-w-xl mx-auto mb-8">
            Whether you need an EOR, global payroll, contractor compliance advice, or entity setup guidance — talk to people who do this every day.
          </p>
          <a
            href="https://www.teamed.global/contact-teamed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:no-underline text-lg px-8 py-4"
          >
            Talk to Teamed
          </a>
          <p className="text-sm text-nexus-gray-500 mt-4">
            Free consultation. No obligation. Real answers from real people.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
