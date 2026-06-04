import { ReactNode } from 'react';

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20">
      <header className="border-b border-border pb-8 pt-16">
        <h1 className="font-display text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-faint">Last updated: {updated}</p>
      </header>
      <div className="prose-legal mt-10">{children}</div>
    </article>
  );
}
