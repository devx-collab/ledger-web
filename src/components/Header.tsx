'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image src="/icon.png" alt={site.name} width={36} height={36} className="rounded-lg" />
          <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname === link.href.slice(0, -1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? 'text-accent-light' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/pricing/"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#04130d] transition hover:bg-accent-light"
        >
          Get Premium
        </Link>
      </div>
    </header>
  );
}
