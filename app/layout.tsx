import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://uspayrollguide.com'),
  title: {
    default: 'US Payroll Guide | Payroll & Compliance for Foreign-Owned Companies',
    template: '%s | US Payroll Guide',
  },
  description: 'The definitive resource for UK and European companies expanding to the US. Entity formation, payroll setup, Form 5472 compliance, and employment law — explained by specialists.',
  keywords: ['US payroll', 'foreign-owned company', 'Form 5472', 'US entity formation', 'US employment law', 'EOR vs entity', 'multi-state payroll', 'transfer pricing'],
  authors: [{ name: 'US Payroll Guide' }],
  creator: 'US Payroll Guide',
  publisher: 'US Payroll Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uspayrollguide.com',
    siteName: 'US Payroll Guide',
    title: 'US Payroll Guide | Payroll & Compliance for Foreign-Owned Companies',
    description: 'The definitive resource for UK and European companies expanding to the US. Entity formation, payroll, compliance, and employment law.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'US Payroll Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Payroll Guide | Payroll & Compliance for Foreign-Owned Companies',
    description: 'The definitive resource for UK and European companies expanding to the US.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
