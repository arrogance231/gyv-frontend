import { notFound } from "next/navigation";
import Link from "next/link";

const events = [
  {
    slug: "global-youth-voices-summit",
    title: "Global Youth Voices Summit",
    date: "12 Jul · Nairobi",
    detail: "A day of strategy, media training, and youth-led storytelling for the next wave of campaigners.",
    description: "Join senior youth organizers for panels, storytelling workshops, and campaign planning sessions focused on smoke-free futures.",
    image: "/no-tobacco.jpg",
    bullets: [
      "Media training and message development",
      "Peer strategy sessions",
      "Local and global campaign planning",
    ],
  },
  {
    slug: "smoke-free-schools-week",
    title: "Smoke-Free Schools Week",
    date: "23 Aug · Online",
    detail: "A collaborative week of school assemblies, digital actions, and peer-led advocacy toolkits.",
    description: "Mobilize students and educators in a coordinated week of actions that make tobacco control visible on campuses.",
    image: "/no-tobacco.jpg",
    bullets: [
      "Digital actions for youth networks",
      "Assembly toolkits for school groups",
      "Live collaboration sessions",
    ],
  },
  {
    slug: "accountability-roundtable",
    title: "Accountability Roundtable",
    date: "05 Sep · Geneva",
    detail: "A policy-focused exchange where youth advocates meet decision-makers and legal experts.",
    description: "Bring campaign demands to influential tables where youth can hold policymakers and industry actors accountable.",
    image: "/no-tobacco.jpg",
    bullets: [
      "Policy briefings and roundtables",
      "Evidence sharing with decision makers",
      "Next-step accountability commitments",
    ],
  },
];

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 sm:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-[#1D5975]/10 bg-white shadow-lg">
        <div className="relative h-72 overflow-hidden bg-black">
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
            <span className="inline-flex rounded-full bg-[#F0C906]/90 px-4 py-2 text-sm font-semibold text-[#1D5975]">Event</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{event.title}</h1>
            <p className="mt-4 text-sm text-white/80">{event.date}</p>
          </div>
        </div>

        <div className="space-y-8 p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,1fr)_minmax(360px,460px)]">
            <div className="space-y-6 rounded-[1.75rem] border border-[#D9E7F0] bg-[#F5FBFF] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Event details</p>
              <h2 className="text-2xl font-semibold text-[#102A43]">{event.detail}</h2>
              <p className="text-sm leading-7 text-[#42516F]">{event.description}</p>
              <div className="space-y-3">
                {event.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-2xl border border-[#D9E7F0] bg-white p-4 text-sm text-[#42516F] shadow-sm">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1282AA]/10 text-[#1282AA]">•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#D9E7F0] bg-[#EAF4FB] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Need to know</p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-[#42516F]">
                <li>Location and registration details will be shared via campaign channels.</li>
                <li>Participation is open to youth advocates, organizers, and policy partners.</li>
                <li>Every event features action steps to keep momentum after the day ends.</li>
              </ul>
            </div>
          </div>

          <Link
            href="/events"
            className="inline-flex rounded-full bg-[#1D5975] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]"
          >
            Back to events
          </Link>
        </div>
      </div>
    </main>
  );
}
