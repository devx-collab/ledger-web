import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { StoreBadges } from '@/components/StoreBadges';
import { features, freeVsPro } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.features;

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything you need to track net worth"
        description="Vaultio combines manual precision with a calm, private interface — no feeds, no ads, no bank passwords."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="flex gap-5 rounded-2xl border border-border bg-surface p-6"
            >
              <span className="font-display text-2xl font-bold text-accent/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold">{f.title}</h2>
                <p className="mt-2 text-muted leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-2xl font-bold">How accounts work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 text-center text-sm text-muted">
            <div className="rounded-xl border border-border p-6">
              <p className="font-semibold text-text">1. Add an account</p>
              <p className="mt-2">Savings, stocks, property, loans — each with its own currency.</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <p className="font-semibold text-text">2. Add holdings</p>
              <p className="mt-2">Quantity × price for assets; outstanding balance for liabilities.</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <p className="font-semibold text-text">3. See net worth</p>
              <p className="mt-2">Dashboard, charts, and PDF reports reflect your totals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="font-display text-2xl font-bold">Free vs Premium</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-left">
          <ul className="space-y-2 text-sm text-muted">
            {freeVsPro.free.map((x) => (
              <li key={x}>Free: {x}</li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm text-text">
            {freeVsPro.pro.map((x) => (
              <li key={x}>Pro: {x}</li>
            ))}
          </ul>
        </div>
        <Link
          href="/pricing/"
          className="mt-10 inline-block text-accent-light font-semibold hover:underline"
        >
          Compare plans →
        </Link>
      </section>

      <section className="border-t border-border px-5 py-16 text-center">
        <StoreBadges />
      </section>
    </>
  );
}
