import Link from "next/link";

export default function CampaignAssetsPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6 sm:p-10">
      <div className="rounded-[2rem] border border-[#CBD9E4]/50 bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Social Media Assets</p>
        <h1 className="mt-4 text-3xl font-bold text-[#102A43]">Shareable campaign assets</h1>
        <p className="mt-4 text-base leading-8 text-[#42516F]">
          Find ready-to-use social media graphics, post copy, and messaging that help amplify the campaign across platforms.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[#42516F]">
          <p>
            These assets are designed for youth groups to share on Instagram, Twitter, and Facebook with a consistent campaign voice.
          </p>
          <p>
            They include suggested captions, hashtags, and visual ideas that make it easy to build momentum and draw attention to tobacco control issues.
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
