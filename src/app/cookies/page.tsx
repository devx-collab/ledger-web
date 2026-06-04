import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { site } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.cookies;

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="June 4, 2026">
      <p>
        This policy explains how {site.url} (the marketing website) uses cookies and similar
        technologies. It does not cover the {site.name} mobile app, which does not use browser
        cookies.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help sites
        remember preferences or measure traffic.
      </p>

      <h2>How we use cookies today</h2>
      <p>
        Currently, this site is a static marketing presence with minimal tracking. Essential
        technical cookies may be set by your hosting provider (e.g. load balancing). We do not use
        advertising cookies at launch.
      </p>

      <h2>Analytics (future)</h2>
      <p>
        If we add privacy-friendly analytics (e.g. Plausible or Google Analytics with consent), we
        will update this page and, where required, show a consent banner before non-essential cookies
        are placed.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. Blocking cookies may affect some
        website functionality.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.legalEmail}`}>{site.legalEmail}</a>
      </p>
    </LegalLayout>
  );
}
