import Link from "next/link";

export default function CampaignsPage() {
  const campaigns = [
    {
      slug: "smoke-free-campuses",
      title: 'Expand smoke-free campuses and end youth e-cigarette marketing',
      supporters: 'Advocated by 3 youth organizations',
      signatures: '449 supporters',
      image: '/no-tobacco.jpg',
      summary: 'A campaign to expand smoke-free policies in schools and prevent e-cigarette marketing that targets students.',
    },
    {
      slug: "ban-flavored-products",
      title: 'Ban flavored nicotine products for safer schools and communities',
      supporters: 'Advocated by 535 youth organizations',
      signatures: '69,713 supporters',
      image: '/no-tobacco.jpg',
      summary: 'A campaign demanding stronger restrictions on flavored tobacco and vaping products that attract young people.',
    },
    {
      slug: "industry-marketing-oversight",
      title: 'Demand stronger oversight on tobacco industry youth-targeted ads',
      supporters: 'Advocated by 1,432 youth organizations',
      signatures: '59,675 supporters',
      image: '/no-tobacco.jpg',
      summary: 'A campaign pushing for tighter rules on tobacco industry advertising aimed at youth and digital audiences.',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl p-6 sm:p-10">
      <div className="mb-10 rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Campaigns</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1D5975] sm:text-5xl">Campaigns advocated by youth organizations and partners</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#42516F]">
          Explore live tobacco control campaigns where youth are demanding smoke-free campuses, stronger flavor bans, and better protections from industry marketing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {campaigns.map((campaign) => (
          <article key={campaign.slug} className="overflow-hidden rounded-[1.5rem] border border-[#CBD9E4]/50 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="h-44 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${campaign.image})` }}>
              <div className="flex h-full items-start justify-end p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#1D5975] shadow-sm">→</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[#42516F]">{campaign.supporters}</p>
              <h2 className="mt-4 text-xl font-semibold text-[#102A43]">{campaign.title}</h2>
              <p className="mt-4 text-sm text-[#627D98]">{campaign.signatures}</p>
              <p className="mt-4 text-sm text-[#42516F]">{campaign.summary}</p>
              <Link href={`/campaigns/${campaign.slug}`} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1D5975] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]">
                View Campaign
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
