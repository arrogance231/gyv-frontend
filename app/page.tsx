import Timeline, {
  TimelineItem,
  TimelineItemDescription,
  TimelineItemTitle,
} from "@/components/8starlabs-ui/timeline";
import ScrollFade from "@/components/8starlabs-ui/scroll-fade";
import Testimonials02 from "@/components/testimonials-02";

const voices = [
  {
    text: "We are not just the future — we are the movement now.",
    color: "from-fuchsia-500 to-rose-500",
  },
  {
    text: "Protect our classrooms, protect our health, protect our freedom.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    text: "Big tobacco should answer for the harm they push on our generation.",
    color: "from-emerald-500 to-lime-500",
  },
  {
    text: "When youth speak with one voice, policy cannot look away.",
    color: "from-amber-500 to-orange-500",
  },
];

const updates = [
  {
    title: "Students Launch Campus Smoke-Free Pledges",
    blurb:
      "Youth advocates staged rapid-response actions at schools and colleges to demand stronger safeguards against flavored nicotine products.",
  },
  {
    title: "Local Leaders Back Youth-Led Accountability Campaigns",
    blurb:
      "New partnerships are connecting school clubs, health workers, and city officials around a shared demand for transparency.",
  },
  {
    title: "Digital Storytelling Drives Global Attention",
    blurb:
      "Short-form media campaigns are turning lived experience into public pressure and policy momentum.",
  },
];

const events = [
  {
    title: "Global Youth Voices Summit",
    date: "12 Jul · Nairobi",
    detail: "A day of strategy, media training, and youth-led storytelling for the next wave of campaigners.",
  },
  {
    title: "Smoke-Free Schools Week",
    date: "23 Aug · Online",
    detail: "A collaborative week of school assemblies, digital actions, and peer-led advocacy toolkits.",
  },
  {
    title: "Accountability Roundtable",
    date: "05 Sep · Geneva",
    detail: "A policy-focused exchange where youth advocates meet decision-makers and legal experts.",
  },
];

const declarations = [
  "A ban on novel recreational addictive products",
  "Stronger measures on liability and financial accountability",
  "Stricter regulation of tobacco depiction in entertainment and digital media",
  "Robust advancement of global tobacco control policies",
];

const milestones = [
  {
    title: "2015",
    text: "Global Youth Voices founded to amplify youth-led tobacco control advocacy.",
    href: "https://fctc.who.int/",
  },
  {
    title: "2016",
    text: "First major youth summit brings together 500+ young advocates from 40 countries.",
    href: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
  },
  {
    title: "2017",
    text: "Campaign launches against flavored nicotine products in schools worldwide.",
    href: "https://www.who.int/teams/health-promotion/tobacco-control",
  },
  {
    title: "2018",
    text: "Digital storytelling initiative reaches 5 million young people across social platforms.",
    href: "https://fctc.who.int/",
  },
  {
    title: "2019",
    text: "Youth-led accountability campaigns win first major policy victories in 15 countries.",
    href: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
  },
  {
    title: "2020",
    text: "Virtual activism during pandemic connects youth advocates across all continents.",
    href: "https://www.who.int/teams/health-promotion/tobacco-control",
  },
  {
    title: "2021",
    text: "GYV Declaration gains support from 50+ nations at international health forums.",
    href: "https://fctc.who.int/",
  },
  {
    title: "2022",
    text: "Smoke-Free Schools initiative becomes mandatory in 25 jurisdictions globally.",
    href: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
  },
  {
    title: "2023",
    text: "Youth voices shape new WHO tobacco control guidelines and regulatory frameworks.",
    href: "https://www.who.int/teams/health-promotion/tobacco-control",
  },
  {
    title: "2024",
    text: "Record 100,000+ youth activists mobilize for accountability and policy change.",
    href: "https://fctc.who.int/",
  },
];


const resources = [
  {
    title: "Knowledge Publications",
    items: ["Youth Advocacy Toolkit", "Policy Briefs", "Research Snapshots"],
  },
  {
    title: "Official Communications",
    items: ["Open Letters", "Press Statements", "Campaign Updates"],
  },
  {
    title: "Media",
    items: ["Photo Library", "Short Films", "Press Kits"],
  },
];

export default function Home() {
  return (
    <main id="home" className="mx-auto flex max-w-7xl flex-col gap-[20vh] px-6 py-4 lg:px-8 lg:py-6">
        <section className="min-h-[calc(100vh-7rem)] rounded-[2.25rem] border border-[#1D5975]/10 bg-white p-8 shadow-[0_30px_100px_-35px_rgba(29,89,117,0.35)] lg:p-12">
          <div className="flex min-h-full flex-col justify-start pt-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-[#1282AA]/20 bg-[#1282AA]/10 px-3.5 py-2 text-sm font-semibold text-[#1282AA]">
                  Global Youth Voices · Youth advocacy for a healthier future
                </div>
                <div className="space-y-6">
                  <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-[#1282AA] sm:text-6xl lg:text-7xl">
                    Youth are turning outrage into action for smoke-free futures.
                  </h1>
                  <p className="max-w-xl text-xl leading-9 text-[#272E3F]">
                    We mobilize students, advocates, and young leaders to challenge harmful products, demand accountability, and build a world where health comes before profit.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#campaigns"
                    className="rounded-full bg-[#1282AA] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1D5975]"
                  >
                    Join the Movement
                  </a>
                  <a
                    href="#declarations"
                    className="rounded-full border border-[#1D5975]/20 px-7 py-4 text-sm font-semibold text-[#1D5975] transition hover:border-[#1282AA] hover:text-[#1282AA]"
                  >
                    Read the Declaration
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Youth-led",
                    "Accountability",
                    "Smoke-free schools",
                    "Digital justice",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#1D5975]/15 bg-[#1282AA]/10 px-4 py-2 text-sm font-semibold text-[#1282AA]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1D5975]/15 bg-[#1D5975] p-6 text-white shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1282AA]/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div>
                    <div className="mb-4 flex items-center justify-between text-sm text-slate-200">
                      <span>Voices in motion</span>
                      <span>youth-led</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {voices.map((voice, index) => (
                        <div
                          key={voice.text}
                          className={`rounded-[1.5rem] bg-gradient-to-br ${voice.color} p-5 text-sm font-semibold text-[#272E3F] shadow-lg`}
                        >
                          <div className="mb-4 h-10 w-10 rounded-full border border-white/70 bg-white/40" />
                          <p>“{voice.text}”</p>
                          <span className="mt-3 block text-xs uppercase tracking-[0.2em] opacity-70">
                            Voice {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#F0C906] p-6 text-[#1D5975] shadow-inner shadow-black/10">
                    <p className="text-2xl font-bold sm:text-3xl">
                      Uniting Youth Voices. Making Big Tobacco Pay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials (replicated below hero) */}
        <section className="">
          <Testimonials02 />
        </section>

        <section id="campaigns" className="min-h-[50vh] rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(29,89,117,0.25)] lg:p-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">
                News
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#1282AA]">
                Fresh stories that make young people stop and act.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#272E3F]">
              This is where advocacy meets urgency — sharp updates, real stories, and things young people can share immediately.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="rounded-[1.25rem] border border-[#1D5975]/10 bg-[#F9FCFE] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 h-2.5 w-16 rounded-full bg-[#F0C906]" />
                <h3 className="text-xl font-bold text-[#1D5975]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#272E3F]">{item.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="min-h-[50vh] rounded-[2rem] border border-[#1D5975]/10 bg-[#1D5975] p-8 text-white shadow-[0_25px_70px_-35px_rgba(29,89,117,0.35)] lg:p-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F0C906]">
                Events
              </p>
              <h2 className="mt-2 text-3xl font-bold">Momentum that moves from screens to streets.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-200">
              Every event is built to feel practical, energizing, and easy to join — whether you are organizing on campus or joining online.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="rounded-[1.25rem] border border-white/15 bg-white/10 p-6">
                <p className="text-sm font-semibold text-[#F0C906]">{event.date}</p>
                <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{event.detail}</p>
                <a href="#home" className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-[#F0C906] decoration-2 underline-offset-4">
                  Reserve a place
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="declarations" className="min-h-[70vh] rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(29,89,117,0.2)] lg:p-10">
          <div className="flex h-full flex-col justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">
                Declaration
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#1282AA]">
                Global Youth Voices Call on COP10: Ban Harmful Products, Demand Accountability
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#272E3F]">
                We are calling for bold, measurable action that protects young people from addictive products and the industries that profit from their harm.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {declarations.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[#1D5975]/10 bg-[#F9FCFE] p-5 text-[#272E3F] shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#1282AA] hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-3 h-2 w-12 rounded-full bg-[#F0C906]" />
                  <p className="text-base font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <a href="#resources" className="rounded-full bg-[#1282AA] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1D5975]">
                View the full statement
              </a>
            </div>
          </div>
        </section>

        <section className="min-h-auto rounded-[2rem] border border-[#1D5975]/10 bg-[#1D5975] p-8 text-white shadow-[0_25px_70px_-35px_rgba(29,89,117,0.35)] lg:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F0C906]">
              Key milestones
            </p>
            <h2 className="mt-2 text-3xl font-bold">A timeline of movement and momentum.</h2>
          </div>

          <ScrollFade intensity={0.1} className="pb-4">
            <Timeline
              orientation="horizontal"
              alternating
              horizItemWidth={220}
              horizItemSpacing={150}
              className="min-h-[340px] w-full"
            >
              {milestones.map((milestone) => (
                <TimelineItem
                  key={milestone.title}
                  variant="outline"
                  className="rounded-[1.25rem] border border-[#F0C906]/40 bg-[#ffffff14] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#F0C906]/60 bg-[#F0C906] text-sm font-bold text-[#1D5975]">
                      {milestone.title}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F0C906]">
                      Milestone
                    </span>
                  </div>
                  <TimelineItemTitle className="mt-3 text-base font-semibold text-white">
                    {milestone.title}
                  </TimelineItemTitle>
                  <TimelineItemDescription className="mt-2 text-sm leading-6 text-slate-200">
                    {milestone.text}
                  </TimelineItemDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </ScrollFade>
        </section>

        <section className="rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(29,89,117,0.2)] lg:p-10">
          <div className="rounded-[1.5rem] bg-gradient-to-r from-[#1D5975] to-[#1282AA] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F0C906]">
              Take action
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
              Young people deserve smoke-free schools, neighborhoods, and futures. Together we can fight flavored products, stop youth vaping, and hold the tobacco industry accountable.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#home" className="rounded-full bg-[#F0C906] px-6 py-3 text-sm font-semibold text-[#1D5975] transition hover:bg-[#f5d53b]">
                Join the Movement
              </a>
              <a href="#resources" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Resources
              </a>
            </div>
          </div>
        </section>

        <section id="resources" className="rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(29,89,117,0.2)] lg:p-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">
              Resources
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#1282AA]">
              Clear tools for advocacy, communication, and learning.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a href="/resources/knowledge-publications" className="group block rounded-[1.25rem] border border-[#1D5975]/10 bg-[#F9FCFE] p-6 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1D5975]">Knowledge Publications</h3>
              <p className="mt-3 text-sm text-[#272E3F]">Briefs, factsheets and concise research summaries to support advocacy.</p>
            </a>

            <a href="/resources/official-communications" className="group block rounded-[1.25rem] border border-[#1D5975]/10 bg-[#F9FCFE] p-6 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1D5975]">Official Communications</h3>
              <p className="mt-3 text-sm text-[#272E3F]">Open letters, statements, and formal communications addressed to governments and institutions.</p>
            </a>

            <a href="/resources/media" className="group block rounded-[1.25rem] border border-[#1D5975]/10 bg-[#F9FCFE] p-6 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1D5975]">Media</h3>
              <p className="mt-3 text-sm text-[#272E3F]">Press articles, photo libraries, and short videos for media outreach and storytelling.</p>
            </a>
          </div>
        </section>
      </main>
  );
}
