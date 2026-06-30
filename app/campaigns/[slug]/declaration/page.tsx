import Link from "next/link";
import { notFound } from "next/navigation";

const campaigns = [
  {
    slug: "smoke-free-campuses",
    title: "Expand smoke-free campuses and end youth e-cigarette marketing",
  },
  {
    slug: "ban-flavored-products",
    title: "Ban flavored nicotine products for safer schools and communities",
  },
  {
    slug: "industry-marketing-oversight",
    title: "Demand stronger oversight on tobacco industry youth-targeted ads",
  },
];

const declarations = [
  {
    slug: "smoke-free-campus-policy",
    title: "Smoke-free campus policy",
    summary: "A declaration calling for comprehensive smoke-free rules across schools and universities.",
    highlights: [
      "Define smoke-free zones for all campus buildings and outdoor learning spaces.",
      "Ensure enforcement is consistent across education institutions.",
    ],
  },
  {
    slug: "youth-e-cigarette-marketing-ban",
    title: "Youth e-cigarette marketing ban",
    summary: "A declaration demanding bans on youth-targeted e-cigarette advertising and flavor promotions.",
    highlights: [
      "Stop flavored products from being promoted near schools and youth spaces.",
      "Require clearer health warnings and stricter age-verification rules.",
    ],
  },
  {
    slug: "enforcement-and-education-support",
    title: "Enforcement and education support",
    summary: "A declaration urging better enforcement, prevention education, and community support programs.",
    highlights: [
      "Expand tobacco education in schools and youth programs.",
      "Fund community-led prevention outreach and enforcement monitoring.",
    ],
  },
];

export default function CampaignDeclarationPage({ params }: { params: { slug: string } }) {
  const campaign = campaigns.find((item) => item.slug === params.slug);
  if (!campaign) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 sm:px-10">
      <div className="rounded-[2rem] border border-[#CBD9E4]/50 bg-white p-8 shadow-lg">
        <div className="mb-10 rounded-[2rem] border border-[#D9E7F0] bg-[#F5FBFF] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Declarations</p>
          <h1 className="mt-4 text-4xl font-bold text-[#102A43]">Current campaign declarations</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#42516F]">
            These declarations outline the campaign's key policy asks and the youth-led reasoning behind each proposal.
          </p>
        </div>

        <div className="space-y-6">
          {declarations.map((declaration) => (
            <article key={declaration.slug} className="overflow-hidden rounded-[1.75rem] border border-[#E5F0FA] bg-[#F7FBFF] p-6 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold text-[#102A43]">{declaration.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#42516F]">{declaration.summary}</p>
                </div>
                <Link
                  href={`/campaigns/${campaign.slug}/declaration/${declaration.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]"
                >
                  View declaration
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {declaration.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-[#D9E7F0] bg-white p-4 text-sm text-[#42516F] shadow-sm">
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-[#D9E7F0] bg-[#EAF4FB] p-6 text-sm leading-7 text-[#42516F] shadow-sm">
          <h2 className="font-semibold text-[#102A43]">Why this page is different</h2>
          <p className="mt-3">
            This page is designed to show all active declarations in one place, with unique cards and highlights for each policy ask.
          </p>
        </div>

        <Link
          href={`/campaigns/${campaign.slug}`}
          className="mt-8 inline-flex rounded-full bg-[#1D5975] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]"
        >
          Back to campaign details
        </Link>
      </div>
    </main>
  );
}
