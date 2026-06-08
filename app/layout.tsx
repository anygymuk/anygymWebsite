import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.any-gym.com'),
  title: {
    default: 'anygym — Universal Gym Membership',
    template: '%s | anygym',
  },
  description:
    'Unlock a world of fitness. Access hundreds of UK gyms with a single subscription. Find, book, and go with anygym.',
  keywords: [
    'gym membership',
    'UK gyms',
    'fitness',
    'universal gym pass',
    'anygym',
    'multi-gym membership',
  ],
  openGraph: {
    title: 'anygym — Universal Gym Membership',
    description:
      'Access thousands of UK gyms with a single subscription. One membership, every gym.',
    url: 'https://www.any-gym.com',
    siteName: 'anygym',
    images: [
      {
        url: '/screenshots/anygym-linkedin-banner.png',
        width: 1200,
        height: 630,
        alt: 'anygym universal gym membership',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'anygym — Universal Gym Membership',
    description:
      'Access thousands of UK gyms with a single subscription. One membership, every gym.',
    images: ['/screenshots/anygym-linkedin-banner.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'anygym',
      url: 'https://www.any-gym.com',
      logo: 'https://www.any-gym.com/logos/anygym-gradient.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@any-gym.com',
        contactType: 'customer service',
      },
    },
    {
      '@type': 'WebSite',
      name: 'anygym',
      url: 'https://www.any-gym.com',
      description:
        'Universal gym membership for the UK. Access thousands of gyms with a single subscription.',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
