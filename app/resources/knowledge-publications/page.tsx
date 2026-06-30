import Link from "next/link";

export default function KnowledgePublications() {
  const items = [
    {
      title: 'Youth Advocacy Toolkit',
      type: 'Brief',
      slug: 'youth-advocacy-toolkit',
      summary: 'A practical guide for youth organizations to translate evidence into policy action.',
    },
    {
      title: 'Policy Brief: School Protections',
      type: 'Brief',
      slug: 'policy-brief-school-protections',
      summary: 'A concise policy brief designed for decision-makers on campus tobacco controls.',
    },
    {
      title: 'Factsheet: Youth Vaping Trends',
      type: 'Factsheet',
      slug: 'factsheet-youth-vaping-trends',
      summary: 'A clear data summary of youth vaping prevalence, risk factors, and policy implications.',
    },
  ];

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-[#1282AA]">Knowledge Publications</h1>
      <p className="mt-2 text-sm text-muted-foreground">Briefs and factsheets to help advocates and partners.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} className="rounded-lg border border-[#1D5975]/10 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-[#1D5975]">{it.type}</div>
            <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-[#272E3F]">{it.summary}</p>
            <Link href={`/resources/knowledge-publications/${it.slug}`} className="mt-3 inline-block text-sm font-semibold text-[#1282AA]">
              View
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
