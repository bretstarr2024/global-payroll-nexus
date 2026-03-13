import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://globalpayrollnexus.com'),
  title: {
    default: 'Global Payroll Nexus | International Payroll, EOR & Compliance Guide',
    template: '%s | Global Payroll Nexus',
  },
  description: 'The definitive resource for international payroll, employer of record, and global employment compliance. Country guides, compliance frameworks, and expert analysis.',
  keywords: ['global payroll', 'international payroll', 'employer of record', 'EOR', 'global employment', 'payroll compliance', 'international hiring'],
  authors: [{ name: 'Global Payroll Nexus' }],
  creator: 'Global Payroll Nexus',
  publisher: 'Global Payroll Nexus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalpayrollnexus.com',
    siteName: 'Global Payroll Nexus',
    title: 'Global Payroll Nexus | International Payroll, EOR & Compliance Guide',
    description: 'The definitive resource for international payroll, employer of record, and global employment compliance.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Global Payroll Nexus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Payroll Nexus | International Payroll, EOR & Compliance Guide',
    description: 'The definitive resource for international payroll, employer of record, and global employment compliance.',
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
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
