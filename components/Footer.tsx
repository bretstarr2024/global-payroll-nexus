import Link from 'next/link';

const footerSections = [
  {
    title: 'Guides',
    links: [
      { name: 'Employer of Record', href: '/employer-of-record' },
      { name: 'Global Payroll', href: '/global-payroll' },
      { name: 'EOR vs Entity', href: '/eor-vs-entity' },
      { name: 'Contractor Compliance', href: '/contractor-compliance' },
      { name: 'Payroll Compliance', href: '/payroll-compliance' },
    ],
  },
  {
    title: 'Countries',
    links: [
      { name: 'United Kingdom', href: '/countries/united-kingdom' },
      { name: 'Germany', href: '/countries/germany' },
      { name: 'United States', href: '/countries/united-states' },
      { name: 'France', href: '/countries/france' },
      { name: 'All Countries', href: '/countries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Glossary', href: '/resources/glossary' },
      { name: 'FAQ', href: '/resources/faq' },
      { name: 'Tools & Calculators', href: '/resources/tools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-nexus-dark text-white">
      <div className="container-wide section-padding">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-nexus-gray-500 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-nexus-gray-300 hover:text-nexus-lime transition-colors hover:no-underline"
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
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center">
              <span className="text-white font-bold text-xs">GN</span>
            </div>
            <span className="text-sm font-semibold text-white">
              Global<span className="text-nexus-purple">Payroll</span>Nexus
            </span>
          </div>
          <p className="text-sm text-nexus-gray-500">
            &copy; {new Date().getFullYear()} Global Payroll Nexus. All rights reserved.
          </p>
          <p className="text-xs text-nexus-gray-500">
            Built with expertise from{' '}
            <a
              href="https://www.teamed.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nexus-purple hover:text-nexus-lime transition-colors hover:no-underline"
            >
              Teamed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
