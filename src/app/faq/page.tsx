import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { faqItems } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.faq;

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Common questions"
        description="Quick answers about privacy, pricing, and how Ledger works."
      />

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-surface px-6 py-4 open:border-accent/25"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Still need help?{' '}
          <Link href="/support/" className="font-semibold text-accent-light hover:underline">
            Contact support
          </Link>
        </p>
      </section>
    </>
  );
}
