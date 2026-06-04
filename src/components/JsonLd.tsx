import { site } from '@/lib/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    description: site.description,
    email: site.supportEmail,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareAppJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '4.99',
      priceCurrency: 'USD',
      description: 'One-time lifetime Premium unlock',
    },
    description: site.description,
    featureList: [
      'Offline net worth tracking',
      'No bank linking',
      'Accounts and holdings',
      'Net worth history charts',
      'PDF export',
      'Multi-currency support',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
