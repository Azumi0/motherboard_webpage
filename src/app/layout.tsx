import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'MOTHERBOARD sp. z o.o. | Senior IT Outsourcing & Software Delivery',
  description:
    'Premium IT outsourcing, team augmentation, and custom software delivery. Scale your business with senior Next.js developers, DevOps engineers, and technical leaders.',
  keywords: [
    'MOTHERBOARD sp z o o',
    'IT Outsourcing Poland',
    'Staff Augmentation',
    'Next.js Developers',
    'DevOps Engineers',
    'Custom Software Development',
    'VPN Setup',
    'Szczecin IT Company',
  ],
  authors: [{ name: 'MOTHERBOARD sp. z o.o.' }],
  openGraph: {
    title: 'MOTHERBOARD sp. z o.o. | Senior IT Outsourcing & Software Delivery',
    description:
      'Engineers, Leaders, and Full-Cycle IT Delivery on Demand. Senior developers, DevOps, and custom IT infrastructure.',
    url: 'https://motherboard.pl',
    siteName: 'MOTHERBOARD',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ITService',
  name: 'MOTHERBOARD sp. z o.o.',
  legalName: 'MOTHERBOARD sp. z o.o.',
  url: 'https://motherboard.pl',
  email: 'biuro@motherboard.pl',
  telephone: '+48883934010',
  vatID: '9552587539',
  taxID: '9552587539',
  identifier: '0001168436',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aleja Powstańców Wielkopolskich 78A / LU2',
    addressLocality: 'Szczecin',
    postalCode: '70-110',
    addressCountry: 'PL',
  },
  description:
    'Senior IT Outsourcing, Team Augmentation & Custom Software Solutions provider specializing in senior talent and custom web/IT infrastructure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
