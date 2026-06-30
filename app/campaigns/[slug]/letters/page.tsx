import Link from "next/link";

export default function CampaignLettersPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6 sm:p-10">
      <div className="rounded-[2rem] border border-[#CBD9E4]/50 bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Letters to Ministries</p>
        <h1 className="mt-4 text-3xl font-bold text-[#102A43]">Model letter templates</h1>
        <p className="mt-4 text-base leading-8 text-[#42516F]">
          These letters are crafted for youth advocates to send to education, health, and government ministries.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[#42516F]">
          <p>
            Use the sample letters to request stronger protections against tobacco marketing, better enforcement of smoke-free policies, and support for campus prevention programs.
          </p>
          <p>
            Each template can be adapted for your local audience, and includes talking points that highlight the health and rights of young people.
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
