import { MetadataRoute } from 'next';

const BASE_URL = 'https://globalpayrollnexus.com';

const countries = [
  'united-kingdom', 'germany', 'united-states', 'france',
  'netherlands', 'spain', 'italy', 'ireland', 'portugal',
  'poland', 'sweden', 'denmark', 'belgium',
  'canada', 'brazil', 'mexico', 'colombia', 'argentina',
  'india', 'singapore', 'australia', 'japan', 'philippines', 'south-korea',
  'uae', 'israel', 'south-africa', 'nigeria',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/employer-of-record`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/global-payroll`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/eor-vs-entity`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/contractor-compliance`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/payroll-compliance`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/countries`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/resources`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/resources/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/resources/glossary`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const countryPages = countries.map((slug) => ({
    url: `${BASE_URL}/countries/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...countryPages];
}
