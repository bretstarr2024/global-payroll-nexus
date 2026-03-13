import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for US Payroll Guide.',
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow prose-custom">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-text-muted">Last updated: March 2026</p>

        <h2>Who we are</h2>
        <p>
          US Payroll Guide is published by Teamed Ltd, a company registered in England and Wales. Our website address is: https://uspayrollguide.com
        </p>

        <h2>What data we collect</h2>
        <p>
          We collect minimal data to operate this website:
        </p>
        <ul>
          <li><strong>Analytics data:</strong> We use Google Analytics to understand how visitors use the site. This includes anonymised page views, referral sources, and device types.</li>
          <li><strong>Contact form data:</strong> If you submit a contact form or consultation request, we collect your name, email address, company name, and any message you provide.</li>
        </ul>

        <h2>How we use your data</h2>
        <ul>
          <li>To improve the content and usability of this site</li>
          <li>To respond to consultation requests and enquiries</li>
          <li>To send relevant updates if you opt in to communications</li>
        </ul>

        <h2>Third parties</h2>
        <p>
          Contact form submissions may be shared with Teamed Ltd for the purpose of responding to your enquiry. We do not sell personal data to third parties.
        </p>

        <h2>Your rights</h2>
        <p>
          Under GDPR, you have the right to access, correct, or delete your personal data. Contact us at{' '}
          <a href="https://www.teamed.global/contact-teamed" target="_blank" rel="noopener noreferrer">teamed.global</a> to exercise these rights.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses essential cookies for functionality and analytics cookies (Google Analytics) for usage statistics. You can disable cookies in your browser settings.
        </p>
      </div>
    </div>
  );
}
