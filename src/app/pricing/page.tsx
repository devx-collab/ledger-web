import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { StoreBadges } from '@/components/StoreBadges';
import { freeVsPro, site } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.pricing;

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pay once. No subscription. Ever."
        description="Vaultio Premium is a single lifetime unlock. Your core tracker stays free."
      />

      <section className="mx-auto max-w-lg px-5 pb-12">
        <div className="rounded-3xl border border-accent/35 bg-gradient-to-b from-accent/10 to-surface p-10 text-center shadow-lg shadow-accent/5">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Lifetime Premium
          </p>
          <p className="mt-4 font-display text-5xl font-bold text-accent">{site.price}</p>
          <p className="mt-2 text-muted">{site.priceNote}</p>
          <ul className="mt-8 space-y-3 text-left text-sm text-text">
            {freeVsPro.pro.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Purchases are processed by Apple or Google. Refunds follow their respective store
          policies. See our{' '}
          <Link href="/terms/" className="text-accent-light underline">
            Terms
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-16">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-bold">Free plan includes</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {freeVsPro.free.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 text-center">
        <p className="mb-6 text-muted">Available soon on mobile stores</p>
        <StoreBadges />
      </section>
    </>
  );
}
