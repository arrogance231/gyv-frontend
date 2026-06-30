import Link from "next/link";

export default function MediaResources() {
  const items = [
    {
      title: 'Press: Youth Stories',
      type: 'Article',
      slug: 'press-youth-stories',
      summary: 'A feature article highlighting young advocates, data, and policy progress.',
    },
    {
      title: 'Short Film: Voices for Health',
      type: 'Video',
      slug: 'short-film-voices-for-health',
      summary: 'A short advocacy film with testimony, context, and calls to action.',
    },
  ];

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-[#1282AA]">Media</h1>
      <p className="mt-2 text-sm text-muted-foreground">Press articles, photo libraries, and short videos for media outreach and storytelling.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} className="rounded-lg border border-[#1D5975]/10 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-[#1D5975]">{it.type}</div>
            <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-[#272E3F]">{it.summary}</p>
            <Link href={`/resources/media/${it.slug}`} className="mt-3 inline-block text-sm font-semibold text-[#1282AA]">
              View
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
