import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Global Payroll Nexus.',
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow prose-custom">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-nexus-gray-500">Last updated: March 2026</p>
        <p>
          Global Payroll Nexus (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect, how we use it, and your rights.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect standard web analytics data (page views, device type, referral source) through privacy-respecting analytics tools. We do not collect personally identifiable information unless you voluntarily provide it (e.g., through a contact form).
        </p>
        <h2>How we use information</h2>
        <p>
          Analytics data is used to understand which content is most useful and to improve the site. We do not sell, rent, or share your data with third parties for marketing purposes.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and analytics cookies to understand usage patterns. You can control cookie settings in your browser.
        </p>
        <h2>External links</h2>
        <p>
          This site contains links to external websites (including teamed.global). We are not responsible for the privacy practices of those sites.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this privacy policy? Contact us at privacy@globalpayrollnexus.com.
        </p>
      </div>
    </div>
  );
}
