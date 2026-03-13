'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guidesDropdownItems = [
  { name: 'Entity Formation', href: '/entity-formation', description: 'Setting up a US subsidiary as a foreign company' },
  { name: 'US Payroll', href: '/us-payroll', description: 'Running payroll in the US — taxes, providers, compliance' },
  { name: 'Foreign-Ownership Compliance', href: '/compliance', description: 'Form 5472, transfer pricing, pro forma 1120' },
  { name: 'Employee Benefits', href: '/benefits', description: 'Health insurance, 401(k), PTO, and employment law' },
];

const statesDropdownItems = [
  { name: 'Delaware', href: '/states/delaware' },
  { name: 'California', href: '/states/california' },
  { name: 'New York', href: '/states/new-york' },
  { name: 'Texas', href: '/states/texas' },
  { name: 'Florida', href: '/states/florida' },
  { name: 'All States', href: '/states' },
];

const resourcesDropdownItems = [
  { name: 'Blog', href: '/resources/blog', description: 'Articles on US payroll, compliance, and employment law' },
  { name: 'Guides', href: '/resources/guides', description: 'Step-by-step guides for entity formation, payroll, and more' },
  { name: 'FAQ', href: '/resources/faq', description: 'Answers to common questions from foreign companies' },
  { name: 'Glossary', href: '/resources/glossary', description: 'US payroll and compliance terms explained' },
  { name: 'News & Updates', href: '/resources/news', description: 'Regulatory changes and compliance updates' },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handlers = {
    onMouseEnter: () => {
      if (timeout.current) clearTimeout(timeout.current);
      setOpen(true);
    },
    onMouseLeave: () => {
      timeout.current = setTimeout(() => setOpen(false), 150);
    },
  };

  return { open, setOpen, ref, handlers };
}

function DropdownButton({ label, open }: { label: string; open: boolean }) {
  return (
    <button
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface-alt rounded-lg transition-all"
    >
      {label}
      <motion.svg
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </motion.svg>
    </button>
  );
}

function DropdownPanel({ open, width, children }: { open: boolean; width: string; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className={`absolute top-full left-0 mt-1 ${width} bg-white rounded-xl shadow-lg border border-border overflow-hidden`}
        >
          <div className="p-2">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const guides = useDropdown();
  const states = useDropdown();
  const resources = useDropdown();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (guides.ref.current && !guides.ref.current.contains(event.target as Node)) {
        guides.setOpen(false);
      }
      if (states.ref.current && !states.ref.current.contains(event.target as Node)) {
        states.setOpen(false);
      }
      if (resources.ref.current && !resources.ref.current.contains(event.target as Node)) {
        resources.setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 hover:no-underline shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <span className="text-white font-bold text-sm">US</span>
          </div>
          <span className="text-lg font-bold text-text hidden sm:inline">
            US Payroll <span className="text-primary">Guide</span>
          </span>
          <span className="text-lg font-bold text-primary sm:hidden">USP</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Guides dropdown */}
          <div ref={guides.ref} className="relative" {...guides.handlers}>
            <DropdownButton label="Guides" open={guides.open} />
            <DropdownPanel open={guides.open} width="w-80">
              {guidesDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => guides.setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-surface-alt transition-colors hover:no-underline group"
                >
                  <span className="block text-sm font-medium text-text group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="block text-xs text-text-muted mt-0.5">
                    {item.description}
                  </span>
                </Link>
              ))}
            </DropdownPanel>
          </div>

          {/* States dropdown */}
          <div ref={states.ref} className="relative" {...states.handlers}>
            <DropdownButton label="States" open={states.open} />
            <DropdownPanel open={states.open} width="w-56">
              {statesDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => states.setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-text hover:text-primary hover:bg-surface-alt rounded-lg transition-colors hover:no-underline"
                >
                  {item.name}
                </Link>
              ))}
            </DropdownPanel>
          </div>

          {/* Resources dropdown */}
          <div ref={resources.ref} className="relative" {...resources.handlers}>
            <DropdownButton label="Resources" open={resources.open} />
            <DropdownPanel open={resources.open} width="w-80">
              {resourcesDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => resources.setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-surface-alt transition-colors hover:no-underline group"
                >
                  <span className="block text-sm font-medium text-text group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="block text-xs text-text-muted mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </DropdownPanel>
          </div>

          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface-alt rounded-lg transition-all hover:no-underline"
          >
            About
          </Link>

          {/* CTA */}
          <a
            href="https://www.teamed.global/contact-teamed"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium text-dark bg-accent rounded-lg hover:bg-accent-dark transition-colors hover:no-underline"
          >
            Talk to a Specialist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-text-secondary hover:text-primary hover:bg-surface-alt rounded-lg transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <div className="container-wide py-4">
              <div className="mb-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-2">Guides</p>
                <div className="space-y-1">
                  {guidesDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-alt transition-all hover:no-underline"
                      >
                        <span className="block text-base font-medium text-text">{item.name}</span>
                        <span className="block text-sm text-text-muted">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-2">State Guides</p>
                <div className="grid grid-cols-2 gap-1">
                  {statesDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 text-base font-medium text-text hover:text-primary hover:bg-surface-alt rounded-lg transition-all hover:no-underline"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-2">Resources</p>
                <div className="space-y-1">
                  {resourcesDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 10) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-surface-alt transition-all hover:no-underline"
                      >
                        <span className="block text-base font-medium text-text">{item.name}</span>
                        <span className="block text-sm text-text-muted">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-border"
              >
                <a
                  href="https://www.teamed.global/contact-teamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-base font-medium text-dark bg-accent rounded-lg hover:bg-accent-dark transition-colors hover:no-underline"
                >
                  Talk to a US Payroll Specialist
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
