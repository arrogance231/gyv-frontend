import Link from "next/link";

const events = [
  {
    slug: "global-youth-voices-summit",
    title: "Global Youth Voices Summit",
    date: "12 Jul · Nairobi",
    detail: "A day of strategy, media training, and youth-led storytelling for the next wave of campaigners.",
    image: "/no-tobacco.jpg",
    highlights: [
      "Workshops on campaign storytelling",
      "Peer-led media training sessions",
      "Action planning for smoke-free advocacy",
    ],
  },
  {
    slug: "smoke-free-schools-week",
    title: "Smoke-Free Schools Week",
    date: "23 Aug · Online",
    detail: "A collaborative week of school assemblies, digital actions, and peer-led advocacy toolkits.",
    image: "/no-tobacco.jpg",
    highlights: [
      "Daily digital action prompts",
      "School toolkit downloads",
      "Live Q&A with advocacy leaders",
    ],
  },
  {
    slug: "accountability-roundtable",
    title: "Accountability Roundtable",
    date: "05 Sep · Geneva",
    detail: "A policy-focused exchange where youth advocates meet decision-makers and legal experts.",
    image: "/no-tobacco.jpg",
    highlights: [
      "Roundtable conversations with officials",
      "Policy briefing sessions",
      "Commitment tracking and next steps",
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 sm:px-10">
      <div className="space-y-8 rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-lg">
        <section className="rounded-[2rem] border border-[#D9E7F0] bg-[#F5FBFF] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Events</p>
          <h1 className="mt-4 text-4xl font-bold text-[#102A43]">Campaigns in motion</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#42516F]">
            These events are designed for youth organizers and partners to connect, train, and move tobacco control campaigns forward.
          </p>
        </section>

        <div className="space-y-6">
          {events.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-[1.75rem] border border-[#E5F0FA] bg-[#F7FBFF] shadow-sm">
              <div className="grid gap-6 p-6 sm:grid-cols-[160px_1fr] sm:p-8">
                <div className="flex flex-col items-start gap-4 rounded-[1.5rem] border border-[#D9E7F0] bg-white p-4 text-sm font-semibold text-[#1282AA] shadow-sm">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#1282AA] opacity-80">Event date</span>
                  <span className="text-lg font-bold text-[#102A43]">{event.date.split(" · ")[0]}</span>
                  <span className="text-sm text-[#42516F]">{event.date.split(" · ")[1]}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#102A43]">{event.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#42516F]">{event.detail}</p>
                    </div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]"
                    >
                      Join the action
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {event.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-[#D9E7F0] bg-white p-4 text-sm leading-6 text-[#42516F] shadow-sm">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-[1.75rem] border border-[#D9E7F0] bg-[#EAF4FB] p-6 text-sm leading-7 text-[#42516F] shadow-sm">
          <h2 className="font-semibold text-[#102A43]">Why this events page?</h2>
          <p className="mt-3">
            It uses the same approachable campaign style with bold cards, clear dates, and action-focused highlights to keep events both expressive and easy to scan.
          </p>
        </section>

        <Link href="/" className="inline-flex rounded-full bg-[#1D5975] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]">
          Back to home
        </Link>
      </div>
    </main>
  );
}
