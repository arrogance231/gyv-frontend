import Link from "next/link";

export default function CampaignTemplatesPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6 sm:p-10">
      <div className="rounded-[2rem] border border-[#CBD9E4]/50 bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Media Templates</p>
        <h1 className="mt-4 text-3xl font-bold text-[#102A43]">Creative and press templates</h1>
        <p className="mt-4 text-base leading-8 text-[#42516F]">
          Access media templates to help your campaign make a stronger impression with journalists, partners, and supporters.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[#42516F]">
          <p>
            These templates include press release outlines, campaign briefing notes, and social media visuals you can adapt for local use.
          </p>
          <p>
            They help campaign teams stay consistent while sharing clear messages about why tobacco control matters for young people.
          </p>
        </div>
        <Link
          href={`/campaigns/${params.slug}`}
          className="mt-8 inline-flex rounded-full bg-[#1D5975] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]"
        >
          Back to campaign details
        </Link>
      </div>
    </main>
  );
}
