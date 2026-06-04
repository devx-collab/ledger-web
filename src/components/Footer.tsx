import Image from 'next/image';
import Link from 'next/link';
import { legalLinks, navLinks, site } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="" width={40} height={40} className="rounded-xl" />
            <span className="font-display text-xl font-bold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.tagline}</p>
          <p className="mt-2 text-xs text-faint">Package: {site.packageId}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-faint">Product</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-faint">Legal</h3>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-faint">
        © {year} {site.company}. All rights reserved. ·{' '}
        <a href={`mailto:${site.supportEmail}`} className="hover:text-muted">
          {site.supportEmail}
        </a>
      </div>
    </footer>
  );
}
