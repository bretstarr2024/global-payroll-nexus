import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Country Guides | Payroll, Employment Law & Hiring by Country',
  description: 'Country-by-country guides to payroll rules, employer costs, statutory benefits, and hiring requirements for international employment.',
};

const regions = [
  {
    name: 'Europe',
    countries: [
      { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧' },
      { name: 'Germany', slug: 'germany', flag: '🇩🇪' },
      { name: 'France', slug: 'france', flag: '🇫🇷' },
      { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱' },
      { name: 'Spain', slug: 'spain', flag: '🇪🇸' },
      { name: 'Italy', slug: 'italy', flag: '🇮🇹' },
      { name: 'Ireland', slug: 'ireland', flag: '🇮🇪' },
      { name: 'Portugal', slug: 'portugal', flag: '🇵🇹' },
      { name: 'Poland', slug: 'poland', flag: '🇵🇱' },
      { name: 'Sweden', slug: 'sweden', flag: '🇸🇪' },
      { name: 'Denmark', slug: 'denmark', flag: '🇩🇰' },
      { name: 'Belgium', slug: 'belgium', flag: '🇧🇪' },
    ],
  },
  {
    name: 'Americas',
    countries: [
      { name: 'United States', slug: 'united-states', flag: '🇺🇸' },
      { name: 'Canada', slug: 'canada', flag: '🇨🇦' },
      { name: 'Brazil', slug: 'brazil', flag: '🇧🇷' },
      { name: 'Mexico', slug: 'mexico', flag: '🇲🇽' },
      { name: 'Colombia', slug: 'colombia', flag: '🇨🇴' },
      { name: 'Argentina', slug: 'argentina', flag: '🇦🇷' },
    ],
  },
  {
    name: 'Asia-Pacific',
    countries: [
      { name: 'India', slug: 'india', flag: '🇮🇳' },
      { name: 'Singapore', slug: 'singapore', flag: '🇸🇬' },
      { name: 'Australia', slug: 'australia', flag: '🇦🇺' },
      { name: 'Japan', slug: 'japan', flag: '🇯🇵' },
      { name: 'Philippines', slug: 'philippines', flag: '🇵🇭' },
      { name: 'South Korea', slug: 'south-korea', flag: '🇰🇷' },
    ],
  },
  {
    name: 'Middle East & Africa',
    countries: [
      { name: 'United Arab Emirates', slug: 'uae', flag: '🇦🇪' },
      { name: 'Israel', slug: 'israel', flag: '🇮🇱' },
      { name: 'South Africa', slug: 'south-africa', flag: '🇿🇦' },
      { name: 'Nigeria', slug: 'nigeria', flag: '🇳🇬' },
    ],
  },
];

export default function CountriesPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-nexus-purple font-medium text-sm uppercase tracking-wider mb-3">
            Country Guides
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-nexus-gray-900 mb-6">
            Hire and pay people anywhere
          </h1>
          <p className="text-lg text-nexus-gray-700 max-w-2xl mb-12">
            Payroll rules, employer costs, statutory benefits, notice periods, and compliance requirements — everything you need to know before hiring in a new country.
          </p>
        </AnimatedSection>

        {regions.map((region) => (
          <AnimatedSection key={region.name} className="mb-12">
            <h2 className="text-2xl font-bold text-nexus-gray-900 mb-6">{region.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {region.countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/countries/${country.slug}`}
                  className="card group flex items-center gap-3 p-4 hover:no-underline hover:border-nexus-purple/30"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-nexus-gray-900 group-hover:text-nexus-purple transition-colors">
                    {country.name}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
