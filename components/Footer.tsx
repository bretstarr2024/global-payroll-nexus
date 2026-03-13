import Link from 'next/link';

const footerSections = [
  {
    title: 'Guides',
    links: [
      { name: 'Entity Formation', href: '/entity-formation' },
      { name: 'US Payroll', href: '/us-payroll' },
      { name: 'Foreign-Ownership Compliance', href: '/compliance' },
      { name: 'Form 5472 Guide', href: '/compliance/form-5472' },
      { name: 'Employee Benefits', href: '/benefits' },
    ],
  },
  {
    title: 'State Guides',
    links: [
      { name: 'Delaware', href: '/states/delaware' },
      { name: 'California', href: '/states/california' },
      { name: 'New York', href: '/states/new-york' },
      { name: 'Texas', href: '/states/texas' },
      { name: 'All States', href: '/states' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Glossary', href: '/glossary' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-wide section-padding">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-accent transition-colors hover:no-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center">
              <span className="text-white font-bold text-xs">US</span>
            </div>
            <span className="text-sm font-semibold text-white">
              US Payroll <span className="text-primary-light">Guide</span>
            </span>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} US Payroll Guide. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Published by{' '}
            <a
              href="https://www.teamed.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-accent transition-colors hover:no-underline"
            >
              Teamed
            </a>
            {' '}&mdash; global employment, done properly.
          </p>
        </div>
      </div>
    </footer>
  );
}
