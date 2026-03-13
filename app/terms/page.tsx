import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Global Payroll Nexus.',
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow prose-custom">
        <h1>Terms of Use</h1>
        <p className="text-sm text-nexus-gray-500">Last updated: March 2026</p>
        <h2>General</h2>
        <p>
          Global Payroll Nexus provides informational content about international payroll, employment law, and global hiring. The information on this site is for general guidance only and does not constitute legal, tax, or professional advice.
        </p>
        <h2>No professional advice</h2>
        <p>
          The content on this site is intended to inform, not to replace professional advice. Employment law, payroll regulations, and tax requirements vary by jurisdiction and change frequently. Always consult qualified local professionals before making decisions about international employment.
        </p>
        <h2>Accuracy</h2>
        <p>
          We make reasonable efforts to ensure the information on this site is accurate and up-to-date. However, we cannot guarantee that all information is current or complete. Statutory rates, regulations, and requirements change — always verify with official sources.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          Global Payroll Nexus shall not be liable for any losses or damages arising from the use of information on this site. Your use of this site is at your own risk.
        </p>
        <h2>External links</h2>
        <p>
          This site contains links to third-party websites. We do not control or endorse the content of these sites and are not responsible for their accuracy or availability.
        </p>
      </div>
    </div>
  );
}
