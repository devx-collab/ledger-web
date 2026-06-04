import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { StoreBadges } from '@/components/StoreBadges';
import { site } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.support;

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="We're here to help"
        description="Questions about Ledger, Premium, privacy, or store availability — reach out anytime."
      />

      <section className="mx-auto max-w-2xl px-5 pb-12">
        <div className="grid gap-6">
          <a
            href={`mailto:${site.supportEmail}`}
            className="block rounded-2xl border border-accent/30 bg-surface p-8 transition hover:border-accent/50"
          >
            <h2 className="font-display text-xl font-bold">Email support</h2>
            <p className="mt-2 text-accent-light">{site.supportEmail}</p>
            <p className="mt-3 text-sm text-muted">
              Typical response within 2 business days. Include your device model and app version for
              faster help.
            </p>
          </a>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-xl font-bold">Legal & privacy</h2>
            <p className="mt-2 text-sm text-muted">
              <a href={`mailto:${site.legalEmail}`} className="text-accent-light">
                {site.legalEmail}
              </a>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy/" className="text-accent-light hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-accent-light hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-xl font-bold">Data requests</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Because financial data is stored on your device, deletion is performed in-app or by
              uninstalling. For purchase records, contact Apple or Google. For entitlement issues,
              email us with your store receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 text-center">
        <p className="mb-6 text-muted">Download (coming soon)</p>
        <StoreBadges />
      </section>
    </>
  );
}
