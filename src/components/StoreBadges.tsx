import { site } from '@/lib/site';

function StoreButton({
  store,
  href,
  subtitle,
}: {
  store: 'apple' | 'google';
  href: string;
  subtitle: string;
}) {
  const isPlaceholder = href === '#';
  const label = store === 'apple' ? 'App Store' : 'Google Play';

  const inner = (
    <div
      className={`flex min-w-[200px] items-center gap-3 rounded-2xl border px-5 py-3.5 transition ${
        isPlaceholder
          ? 'cursor-default border-border bg-surface/60 opacity-80'
          : 'border-accent/30 bg-surface hover:border-accent/50 hover:bg-surface-elevated'
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-lg font-semibold text-accent-light">
        {store === 'apple' ? '' : '▶'}
      </span>
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-wide text-faint">
          {isPlaceholder ? 'Coming soon on' : 'Download on the'}
        </p>
        <p className="font-display text-base font-bold leading-tight">{label}</p>
        {isPlaceholder && (
          <p className="text-[11px] text-accent-light">{subtitle}</p>
        )}
      </div>
    </div>
  );

  if (isPlaceholder) {
    return (
      <div aria-label={`${label} — coming soon`} title="Store link will be added at launch">
        {inner}
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Download on ${label}`}>
      {inner}
    </a>
  );
}

export function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <StoreButton store="apple" href={site.appStoreUrl} subtitle="iOS launch in progress" />
      <StoreButton store="google" href={site.playStoreUrl} subtitle="Android launch in progress" />
    </div>
  );
}
