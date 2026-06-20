export const site = {
  name: 'Vaultio',
  tagline: 'Your net worth. Private. Offline.',
  description:
    'Vaultio is a private, offline net worth tracker. Track accounts, assets, and liabilities on your device — no bank linking, no cloud required.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vaultio.app',
  supportEmail: 'info@sylvabit.com',
  legalEmail: 'info@sylvabit.com',
  company: 'Sylvabit',
  packageId: 'com.sylvabit.vaultio',
  /** Replace with live URLs when published */
  appStoreUrl: '#',
  playStoreUrl: '#',
  price: '$4.99',
  priceNote: 'One-time · Lifetime access',
} as const;

export const navLinks = [
  { href: '/features/', label: 'Features' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/support/', label: 'Support' },
] as const;

export const legalLinks = [
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms of Service' },
  { href: '/cookies/', label: 'Cookie Policy' },
] as const;

export const features = [
  {
    icon: 'shield',
    title: 'No bank linking',
    description: 'You enter your own numbers. Vaultio never connects to your bank or brokerage.',
  },
  {
    icon: 'offline',
    title: 'Offline-first',
    description: 'Your data lives in on-device storage. Open the app without waiting on a server.',
  },
  {
    icon: 'chart',
    title: 'Net worth over time',
    description: 'Snapshots build a history chart from 1 week to all time (Premium).',
  },
  {
    icon: 'accounts',
    title: 'Accounts & holdings',
    description: 'Organize savings, stocks, property, crypto, loans, and more in one place.',
  },
  {
    icon: 'currency',
    title: '150+ currencies',
    description: 'Set any base currency with Premium. Free tier includes INR.',
  },
  {
    icon: 'export',
    title: 'PDF reports & backup',
    description: 'Export reports and back up to Files or iCloud Drive (Premium).',
  },
] as const;

export const freeVsPro = {
  free: ['Up to 3 accounts', 'Base currency: INR', 'Charts: 1W & 1M'],
  pro: [
    'Unlimited accounts',
    'Any base currency',
    'Full chart history',
    'PDF export',
    'Backup & restore',
    'Priority support',
  ],
} as const;

export const faqItems = [
  {
    q: 'Does Vaultio connect to my bank?',
    a: 'No. Vaultio is manual-entry by design. You control every balance and holding — nothing is pulled from third-party aggregators.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On your device in local storage. Optional Premium backup exports a file you choose to save in Files or iCloud Drive.',
  },
  {
    q: 'Is Vaultio a subscription?',
    a: 'No. Premium is a one-time purchase for lifetime access on your account, processed through the App Store or Google Play.',
  },
  {
    q: 'What is included in the free version?',
    a: 'Up to 3 accounts, INR as base currency, and short-term chart ranges (1 week and 1 month).',
  },
  {
    q: 'When will the app be on the App Store and Google Play?',
    a: 'We are preparing for launch. Join updates via our support page — store links on this site will go live when published.',
  },
] as const;
