import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for US Payroll Guide.',
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow prose-custom">
        <h1>Terms of Use</h1>
        <p className="text-sm text-text-muted">Last updated: March 2026</p>

        <h2>General</h2>
        <p>
          US Payroll Guide is an informational resource published by Teamed Ltd. By using this site, you agree to these terms.
        </p>

        <h2>Not legal or tax advice</h2>
        <p>
          The content on this site is for general informational purposes only. It does not constitute legal, tax, or accounting advice. US tax law, employment law, and compliance requirements are complex and change frequently.
        </p>
        <p>
          <strong>Always consult a qualified US tax advisor, attorney, or accountant</strong> before making decisions about entity formation, payroll, or compliance. The information here is designed to help you ask better questions — not to replace professional advice.
        </p>

        <h2>Accuracy</h2>
        <p>
          We make reasonable efforts to ensure the information on this site is accurate and up to date. However, we cannot guarantee that all information is current, complete, or free from error. Tax rates, filing deadlines, and legal requirements change. We update our guides regularly but cannot guarantee real-time accuracy.
        </p>

        <h2>External links</h2>
        <p>
          This site contains links to external websites, including teamed.global and government agency websites. We are not responsible for the content, accuracy, or availability of external sites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          Teamed Ltd and US Payroll Guide accept no liability for any loss or damage arising from the use of information on this site. Use the information at your own risk and always verify with a qualified professional.
        </p>

        <h2>Copyright</h2>
        <p>
          All content on this site is copyright Teamed Ltd unless otherwise stated. You may share and reference our content with proper attribution, but you may not republish it in full without permission.
        </p>
      </div>
    </div>
  );
}
