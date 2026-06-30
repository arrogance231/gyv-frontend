import { notFound } from "next/navigation";
import CampaignActions from "../../../components/campaign-actions";

const campaigns = [
  {
    slug: "smoke-free-campuses",
    title: "Expand smoke-free campuses and end youth e-cigarette marketing",
    supporters: "Advocated by 3 youth organizations",
    supportersCount: "449 supporters",
    summary: "A campaign to expand smoke-free policies in schools and prevent e-cigarette marketing that targets students.",
  },
  {
    slug: "ban-flavored-products",
    title: "Ban flavored nicotine products for safer schools and communities",
    supporters: "Advocated by 535 youth organizations",
    supportersCount: "69,713 supporters",
    summary: "A campaign demanding stronger restrictions on flavored tobacco and vaping products that attract young people.",
  },
  {
    slug: "industry-marketing-oversight",
    title: "Demand stronger oversight on tobacco industry youth-targeted ads",
    supporters: "Advocated by 1,432 youth organizations",
    supportersCount: "59,675 supporters",
    summary: "A campaign pushing for tighter rules on tobacco industry advertising aimed at youth and digital audiences.",
  },
];

export default async function CampaignDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campaign = campaigns.find((item) => item.slug === slug);
  if (!campaign) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9FCFE] px-6 pb-16 pt-6 sm:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-lg">
        <div className="relative h-72 overflow-hidden bg-black md:h-[26rem]">
          <img src="/no-tobacco.jpg" alt={campaign.title} className="absolute inset-0 h-full w-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-black/30" />
          <span className="absolute left-6 top-6 inline-flex rounded-full bg-[#F0C906]/90 px-4 py-2 text-sm font-semibold text-[#1D5975]">Campaign</span>
          <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{campaign.title}</h1>
            <p className="mt-4 max-w-2xl text-sm text-white/80">{campaign.supporters} · {campaign.supportersCount}</p>
          </div>
        </div>

        <div className="space-y-8 p-8">
          <CampaignActions
            actions={[
              {
                label: "📜 Declaration",
                summary: "Each declaration documents the campaign goals, the policy ask, and the youth-led case for smoke-free campuses and tighter industry rules.",
                items: [
                  {
                    title: "Smoke-free campus policy",
                    summary: "A declaration calling for comprehensive smoke-free rules across schools and universities.",
                    href: `/campaigns/${campaign.slug}/declaration/smoke-free-campus-policy`,
                  },
                  {
                    title: "Youth e-cigarette marketing ban",
                    summary: "A declaration demanding bans on youth-targeted e-cigarette advertising and flavor promotions.",
                    href: `/campaigns/${campaign.slug}/declaration/youth-e-cigarette-marketing-ban`,
                  },
                  {
                    title: "Enforcement and education support",
                    summary: "A declaration urging better enforcement, prevention education, and community support programs.",
                    href: `/campaigns/${campaign.slug}/declaration/enforcement-and-education-support`,
                  },
                ],
                href: `/campaigns/${campaign.slug}/declaration`,
                buttonText: "Read all declarations",
              },
              {
                label: "✉️ Letters to Ministries",
                summary: "Sample letters help youth advocates communicate directly with ministries of health, education, and youth empowerment.",
                items: [
                  {
                    title: "Ministry of Education letter",
                    summary: "A template asking education leaders to strengthen campus smoke-free protections.",
                    href: `/campaigns/${campaign.slug}/letters/ministry-of-education-letter`,
                  },
                  {
                    title: "Ministry of Health letter",
                    summary: "A template requesting stronger enforcement of tobacco and vaping regulations.",
                    href: `/campaigns/${campaign.slug}/letters/ministry-of-health-letter`,
                  },
                  {
                    title: "Youth advocacy support letter",
                    summary: "A template encouraging ministries to back youth-led prevention and awareness work.",
                    href: `/campaigns/${campaign.slug}/letters/youth-advocacy-support-letter`,
                  },
                ],
                href: `/campaigns/${campaign.slug}/letters`,
                buttonText: "View all letters",
              },
              {
                label: "📱 Social Media Assets",
                summary: "Social media assets provide shareable campaign visuals and messaging for youth groups to build momentum online.",
                items: [
                  {
                    title: "Instagram campaign pack",
                    summary: "A set of visuals and captions for Instagram awareness posts.",
                    href: `/campaigns/${campaign.slug}/assets/instagram-campaign-pack`,
                  },
                  {
                    title: "Twitter/X narrative kit",
                    summary: "A ready-to-use thread and hashtag package for Twitter/X engagement.",
                    href: `/campaigns/${campaign.slug}/assets/twitter-x-narrative-kit`,
                  },
                  {
                    title: "TikTok awareness storyboard",
                    summary: "A short-form content plan to raise awareness through videos.",
                    href: `/campaigns/${campaign.slug}/assets/tiktok-awareness-storyboard`,
                  },
                ],
                href: `/campaigns/${campaign.slug}/assets`,
                buttonText: "Browse all assets",
              },
              {
                label: "🎨 Media Templates",
                summary: "Media templates support press outreach with briefing notes, release outlines, and partnership messaging.",
                items: [
                  {
                    title: "Press release template",
                    summary: "A polished press release outline for campaign announcements.",
                    href: `/campaigns/${campaign.slug}/templates/press-release-template`,
                  },
                  {
                    title: "Stakeholder briefing note",
                    summary: "A concise note for partners and decision makers.",
                    href: `/campaigns/${campaign.slug}/templates/stakeholder-briefing-note`,
                  },
                  {
                    title: "Event outreach card",
                    summary: "A media template for inviting supporters to campaign events.",
                    href: `/campaigns/${campaign.slug}/templates/event-outreach-card`,
                  },
                ],
                href: `/campaigns/${campaign.slug}/templates`,
                buttonText: "Open all templates",
              },
            ]}
          />

          <section className="rounded-[1.5rem] border border-[#CBD9E4]/50 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#102A43]">Campaign summary</h2>
            <p className="mt-4 text-base leading-7 text-[#42516F]">{campaign.summary}</p>
            <p className="mt-4 text-sm text-[#627D98]">
              This page provides a quick overview of the campaign and key assets for youth-led tobacco control advocacy.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]">
                Join the cause
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
