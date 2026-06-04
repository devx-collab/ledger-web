export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-5 pb-12 pt-16 text-center md:pt-20">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-light">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
    </header>
  );
}
