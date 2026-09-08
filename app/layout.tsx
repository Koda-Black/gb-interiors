import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gb-interiors.tzarkprovince.chatgpt.site'),
  title: {
    default: 'GB Interiors | Premium Interior Design in Nigeria',
    template: '%s | GB Interiors',
  },
  description: 'GB Interiors reimagines homes, restaurants, hotels, offices and every space in between with premium design, furniture and end-to-end execution across Nigeria.',
  applicationName: 'GB Interiors',
  authors: [{ name: 'GB Interiors' }],
  creator: 'GB Interiors',
  publisher: 'GB Interiors',
  category: 'Interior design',
  keywords: [
    'interior designer Lagos',
    'interior designer Benin City',
    'interior design Nigeria',
    'luxury interiors Nigeria',
    'restaurant interior design',
    'hotel interior design',
    'office interior design',
    'bespoke furniture Nigeria',
    'GB Interiors',
  ],
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'GB Interiors',
    title: 'GB Interiors | Spaces, Reimagined Beautifully',
    description: 'Premium interiors, bespoke furniture and end-to-end project delivery from Lagos and Benin to spaces across Nigeria.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'GB Interiors — Spaces, reimagined beautifully' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GB Interiors | Spaces, Reimagined Beautifully',
    description: 'Premium interiors, bespoke furniture and end-to-end project delivery across Nigeria.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f6f3',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

