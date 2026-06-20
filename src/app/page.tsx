import Image from 'next/image';
import Link from 'next/link';
import { SoftwareAppJsonLd } from '@/components/JsonLd';
import { StoreBadges } from '@/components/StoreBadges';
import { features, freeVsPro, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <SoftwareAppJsonLd />

      <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-accent/10 blur-2xl" aria-hidden />
              <Image
                src="/icon.png"
                alt="Vaultio app icon"
                width={96}
                height={96}
                className="relative rounded-2xl shadow-2xl shadow-accent/20"
                priority
              />
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Private · Offline · On your device
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Your net worth.
            <br />
            <span className="text-accent-light">Unlocked.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {site.description}
          </p>

          <StoreBadges className="mt-10" />

          <p className="mt-8 text-sm text-faint">
            No bank linking · No subscription · Lifetime Premium available
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { stat: '0', label: 'Bank connections required' },
            { stat: '100%', label: 'Data stored on your device' },
            { stat: '1×', label: 'Pay once for Premium — no monthly fee' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-bg/80 p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-accent">{item.stat}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            Built for people who want control
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Track assets and liabilities manually — the way serious spreadsheets work, in a
            beautiful mobile app.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  ✓
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features/"
              className="text-sm font-semibold text-accent-light underline-offset-4 hover:underline"
            >
              See all features →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">Free vs Premium</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-8">
              <h3 className="font-display text-xl font-bold text-muted">Free</h3>
              <ul className="mt-6 space-y-3">
                {freeVsPro.free.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="text-faint">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <h3 className="font-display text-xl font-bold text-accent-light">Premium</h3>
              <ul className="mt-6 space-y-3">
                {freeVsPro.pro.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-text">
                    <span className="text-accent">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-2xl font-bold text-accent">
                {site.price}{' '}
                <span className="text-sm font-medium text-muted">{site.priceNote}</span>
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing/"
              className="inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-[#04130d] transition hover:bg-accent-light"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center">
        <h2 className="font-display text-3xl font-bold">Ready when the stores are</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          We&apos;re finalizing App Store and Google Play listings. Bookmark this page — download
          links go live here first.
        </p>
        <StoreBadges className="mt-10" />
      </section>
    </>
  );
}
