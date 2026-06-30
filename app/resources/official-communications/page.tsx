export default function OfficialCommunications() {
  const items = [
    { title: 'Open Letter to Ministers', date: '2025-11-12' },
    { title: 'Statement on Flavored Products', date: '2026-02-03' },
  ]

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-[#1282AA]">Official Communications</h1>
      <p className="mt-2 text-sm text-muted-foreground">Letters, statements, and formal communications addressed to governments and institutions.</p>

      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <article key={it.title} className="rounded-lg border border-[#1D5975]/10 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-bold">{it.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{it.date}</p>
            <p className="mt-2 text-sm text-[#272E3F]">A formal communication submitted to government bodies outlining demands and evidence.</p>
            <a href="#" className="mt-3 inline-block text-sm font-semibold text-[#1282AA]">Read</a>
          </article>
        ))}
      </div>
    </main>
  )
}
