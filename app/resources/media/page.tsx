export default function MediaResources() {
  const items = [
    { title: 'Press: Youth Stories', type: 'Article' },
    { title: 'Short Film: Voices for Health', type: 'Video' },
  ]

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-[#1282AA]">Media</h1>
      <p className="mt-2 text-sm text-muted-foreground">Press articles, photo libraries, and short videos for media outreach and storytelling.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} className="rounded-lg border border-[#1D5975]/10 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-[#1D5975]">{it.type}</div>
            <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-[#272E3F]">Useful media assets or coverage to amplify the movement.</p>
            <a href="#" className="mt-3 inline-block text-sm font-semibold text-[#1282AA]">View</a>
          </article>
        ))}
      </div>
    </main>
  )
}
