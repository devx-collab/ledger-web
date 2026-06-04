import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

const routes = ['', 'features', 'pricing', 'faq', 'privacy', 'terms', 'cookies', 'support'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');

  return routes.map((route) => ({
    url: route ? `${base}/${route}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === 'pricing' || route === 'features' ? 0.9 : 0.7,
  }));
}
