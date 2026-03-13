'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const primaryNav = [
  { name: 'EOR Guide', href: '/employer-of-record' },
  { name: 'Global Payroll', href: '/global-payroll' },
];

const countryDropdownItems = [
  { name: 'Hire in the UK', href: '/countries/united-kingdom', description: 'Employment law, payroll, and compliance' },
  { name: 'Hire in Germany', href: '/countries/germany', description: 'Entity requirements and social contributions' },
  { name: 'Hire in the USA', href: '/countries/united-states', description: 'State-by-state payroll complexity' },
  { name: 'Hire in France', href: '/countries/france', description: 'Labour law and mandatory benefits' },
  { name: 'All Countries', href: '/countries', description: 'Browse all country guides' },
];

const learnDropdownItems = [
  { name: 'EOR vs Entity', href: '/eor-vs-entity', description: 'When to use an EOR vs setting up your own entity' },
  { name: 'Contractor Compliance', href: '/contractor-compliance', description: 'Misclassification risks and how to avoid them' },
  { name: 'Payroll Compliance', href: '/payroll-compliance', description: 'Statutory requirements across jurisdictions' },
  { name: 'Glossary', href: '/resources/glossary', description: 'Global employment terms defined' },
];

const secondaryNav = [
  { name: 'Resources', href: '/resources' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const countryTimeout = useRef<NodeJS.Timeout | null>(null);
  const learnTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-nexus-gray-200">
      <nav className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 hover:no-underline shrink-0">
          {/* Geometric logo placeholder — purple gradient circle */}
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <span className="text-white font-bold text-sm">GN</span>
          </div>
          <span className="text-lg font-bold text-nexus-gray-900 hidden sm:inline">
            Global<span className="text-gradient">Payroll</span>Nexus
          </span>
          <span className="text-lg font-bold sm:hidden">
            <span className="text-gradient">GPN</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-nexus-gray-700 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all hover:no-underline"
            >
              {item.name}
            </Link>
          ))}

          {/* Country Guides dropdown */}
          <div
            ref={countryRef}
            className="relative"
            onMouseEnter={() => {
              if (countryTimeout.current) clearTimeout(countryTimeout.current);
              setCountryDropdownOpen(true);
            }}
            onMouseLeave={() => {
              countryTimeout.current = setTimeout(() => setCountryDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-nexus-gray-700 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all"
            >
              Country Guides
              <motion.svg
                animate={{ rotate: countryDropdownOpen ? 180 : 0 }}
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

            <AnimatePresence>
              {countryDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-nexus-gray-200 overflow-hidden"
                >
                  <div className="p-2">
                    {countryDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setCountryDropdownOpen(false)}
                        className="block px-4 py-3 rounded-lg hover:bg-nexus-gray-100 transition-colors hover:no-underline group"
                      >
                        <span className="block text-sm font-medium text-nexus-gray-900 group-hover:text-nexus-purple transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-xs text-nexus-gray-500 mt-0.5">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Learn dropdown */}
          <div
            ref={learnRef}
            className="relative"
            onMouseEnter={() => {
              if (learnTimeout.current) clearTimeout(learnTimeout.current);
              setLearnDropdownOpen(true);
            }}
            onMouseLeave={() => {
              learnTimeout.current = setTimeout(() => setLearnDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-nexus-gray-700 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all"
            >
              Learn
              <motion.svg
                animate={{ rotate: learnDropdownOpen ? 180 : 0 }}
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

            <AnimatePresence>
              {learnDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-lg border border-nexus-gray-200 overflow-hidden"
                >
                  <div className="p-2">
                    {learnDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setLearnDropdownOpen(false)}
                        className="block px-4 py-3 rounded-lg hover:bg-nexus-gray-100 transition-colors hover:no-underline group"
                      >
                        <span className="block text-sm font-medium text-nexus-gray-900 group-hover:text-nexus-purple transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-xs text-nexus-gray-500 mt-0.5">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {secondaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-nexus-gray-700 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all hover:no-underline"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="https://www.teamed.global/contact-teamed"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium text-nexus-dark bg-nexus-lime rounded-lg hover:bg-nexus-lime-dark transition-colors hover:no-underline"
          >
            Get Expert Help
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-nexus-gray-700 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all"
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
            className="lg:hidden border-t border-nexus-gray-200 bg-white overflow-hidden"
          >
            <div className="container-wide py-4">
              <div className="mb-4">
                <p className="text-xs font-semibold text-nexus-gray-500 uppercase tracking-wider mb-2 px-2">Guides</p>
                <div className="space-y-1">
                  {primaryNav.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 text-base font-medium text-nexus-gray-900 hover:text-nexus-purple hover:bg-nexus-gray-100 rounded-lg transition-all hover:no-underline"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-nexus-gray-500 uppercase tracking-wider mb-2 px-2">Country Guides</p>
                <div className="space-y-1">
                  {countryDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 2) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-nexus-gray-100 transition-all hover:no-underline"
                      >
                        <span className="block text-base font-medium text-nexus-gray-900">{item.name}</span>
                        <span className="block text-sm text-nexus-gray-500">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-nexus-gray-500 uppercase tracking-wider mb-2 px-2">Learn</p>
                <div className="space-y-1">
                  {learnDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 7) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-nexus-gray-100 transition-all hover:no-underline"
                      >
                        <span className="block text-base font-medium text-nexus-gray-900">{item.name}</span>
                        <span className="block text-sm text-nexus-gray-500">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-nexus-gray-200"
              >
                <a
                  href="https://www.teamed.global/contact-teamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-base font-medium text-nexus-dark bg-nexus-lime rounded-lg hover:bg-nexus-lime-dark transition-colors hover:no-underline"
                >
                  Get Expert Help
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
