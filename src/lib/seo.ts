import type { Metadata } from 'next';
import { site } from './site';

const defaultKeywords = [
  'net worth tracker',
  'offline net worth app',
  'personal finance ledger',
  'track net worth without bank',
  'private wealth tracker',
  'asset liability tracker',
  'net worth calculator app',
  'offline finance app India',
  'Ledger net worth',
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeo): Metadata {
  const fullTitle = title === site.name ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;
  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: '/icon.png', width: 512, height: 512, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/icon.png'],
    },
    robots: { index: true, follow: true },
  };
}

export const pageSeo = {
  home: buildMetadata({
    title: site.name,
    description: site.description,
    path: '/',
    keywords: ['download net worth tracker', 'Ledger app'],
  }),
  features: buildMetadata({
    title: 'Features',
    description:
      'Explore Ledger features: offline net worth tracking, accounts, holdings, charts, PDF export, multi-currency, and secure backup.',
    path: '/features/',
    keywords: ['net worth chart app', 'manual portfolio tracker'],
  }),
  pricing: buildMetadata({
    title: 'Pricing',
    description:
      'Ledger Premium is a one-time purchase for lifetime access. No subscription. Compare Free vs Pro plans.',
    path: '/pricing/',
    keywords: ['lifetime premium finance app', 'one time purchase net worth'],
  }),
  faq: buildMetadata({
    title: 'FAQ',
    description: 'Frequently asked questions about Ledger — privacy, offline storage, pricing, and store availability.',
    path: '/faq/',
  }),
  privacy: buildMetadata({
    title: 'Privacy Policy',
    description: 'How Ledger handles your data: local storage, optional backup, purchases via app stores.',
    path: '/privacy/',
  }),
  terms: buildMetadata({
    title: 'Terms of Service',
    description: 'Terms of Service for using the Ledger mobile application and website.',
    path: '/terms/',
  }),
  cookies: buildMetadata({
    title: 'Cookie Policy',
    description: 'Cookie and similar technology policy for the Ledger marketing website.',
    path: '/cookies/',
  }),
  support: buildMetadata({
    title: 'Support',
    description: 'Contact Ledger support for help, feedback, and data-related requests.',
    path: '/support/',
  }),
} as const;
