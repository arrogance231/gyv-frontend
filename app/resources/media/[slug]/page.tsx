import Link from "next/link";
import { notFound } from "next/navigation";

const mediaItems = {
  "press-youth-stories": {
    title: "Press: Youth Stories",
    type: "Article",
    published: "2026-05-12",
    author: "Global Youth Voices Editorial Team",
    summary: "A feature article showcasing young leaders, their policy priorities, and the impact of youth-led tobacco prevention efforts.",
    sections: [
      {
        heading: "Introduction",
        content: "Young people are speaking out with clarity and conviction on tobacco control. This article profiles stories from multiple communities and explains why these voices matter to policymakers.",
      },
      {
        heading: "Voices from the Field",
        content: "From school campaigns to national advocacy, the article highlights how youth organizers are building awareness and demanding stronger protections. Their perspectives illuminate the real-world effects of current policy choices.",
      },
      {
        heading: "Policy Context",
        content: "The piece connects lived experience to policy solutions, outlining the need for campus protections, flavor restrictions, and education investments. It makes the case for evidence-based action grounded in youth leadership.",
      },
      {
        heading: "Call to Action",
        content: "The closing section invites readers to support youth-led advocacy, share accurate information, and engage with decision-makers to keep young people healthy and empowered.",
      },
    ],
  },
  "short-film-voices-for-health": {
    title: "Short Film: Voices for Health",
    type: "Video",
    published: "2026-05-02",
    director: "Global Youth Voices Media Team",
    summary: "A short film featuring youth testimonies, policy context, and a compelling call to action for health-protective laws.",
    segments: [
      {
        heading: "Opening Narrative",
        content: "The film begins with young speakers describing how tobacco advertising and flavored products influence their communities, setting the stage for a broader conversation about public health.",
      },
      {
        heading: "Youth Testimony",
        content: "The central segment features youth advocates sharing personal stories, research findings, and the demands they bring to government and school leaders.",
      },
      {
        heading: "Key Messages",
        content: "The film presents three clear messages: protect youth from predatory marketing, strengthen campus safeguards, and center youth voices in policy development.",
      },
      {
        heading: "Closing Call",
        content: "The final scene calls on viewers to support meaningful change and to recognize young people as essential partners in building healthier communities.",
      },
    ],
  },
};

export default async function MediaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = mediaItems[slug];
  if (!item) notFound();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="rounded-[1.75rem] border border-[#E5F0FA] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Media Resource</p>
        <h1 className="mt-3 text-4xl font-bold text-[#102A43]">{item.title}</h1>
        <div className="mt-4 space-y-2 text-sm text-[#42516F]">
          <p><span className="font-semibold">Type:</span> {item.type}</p>
          <p><span className="font-semibold">Published:</span> {item.published}</p>
          <p><span className="font-semibold">{item.type === 'Article' ? 'Author' : 'Director'}:</span> {item.type === 'Article' ? item.author : item.director}</p>
        </div>
        <p className="mt-6 text-sm leading-7 text-[#42516F]">{item.summary}</p>

        <div className="mt-8 space-y-8">
          {(item.type === "Article" ? item.sections : item.segments).map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-[#102A43]">{section.heading}</h2>
              <p className="mt-4 text-sm leading-7 text-[#42516F]">{section.content}</p>
            </section>
          ))}
        </div>

        {item.type === "Video" ? (
          <div className="mt-10 rounded-3xl border border-[#E5F0FA] bg-[#F9FCFE] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Video Preview</p>
            <div className="mt-4 h-64 rounded-3xl bg-[#DDEBF7] p-6 text-sm text-[#102A43]">
              <p className="font-semibold">Video presentation available through official campaign channels.</p>
              <p className="mt-3">This section summarizes the film’s key scenes, messaging, and suggested use for advocacy screenings and digital outreach.</p>
            </div>
          </div>
        ) : null}

        <div className="mt-10 border-t border-[#E5F0FA] pt-6">
          <Link href="/resources/media" className="inline-flex w-fit rounded-full bg-[#1282AA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]">
            Back to Media
          </Link>
        </div>
      </div>
    </main>
  );
}
