import Link from "next/link";
import { notFound } from "next/navigation";

const letters = {
  "open-letter-to-ministers": {
    title: "Open Letter to Ministers",
    date: "2025-11-12",
    recipient: "Ministers of Health and Education",
    subject: "Urgent request for strengthened youth tobacco prevention measures",
    body: [
      "We write as representatives of youth advocacy networks to respectfully request immediate action to strengthen protections against tobacco and nicotine use among young people.",
      "Current evidence points to rising use of flavored tobacco products and e-cigarettes among adolescents. These trends threaten educational outcomes, student health, and equitable access to supportive services.",
      "We urge the government to adopt comprehensive campus smoke-free policies, ban youth-oriented flavor marketing, and ensure coordinated prevention education across schools and community programs.",
      "Young people are ready to partner with policymakers in designing responsive solutions. We request a formal consultation process with youth stakeholders and a clear timetable for implementation.",
    ],
    closing: "Respectfully submitted on behalf of Global Youth Voices",
    signature: "Global Youth Voices Secretariat",
    cc: "Youth Health Coalition, National Student Council",
  },
  "statement-on-flavored-products": {
    title: "Statement on Flavored Products",
    date: "2026-02-03",
    recipient: "Honorable Members of the National Health Authority",
    subject: "Formal statement urging prohibition of youth-targeted flavored tobacco products",
    body: [
      "Flavored tobacco and nicotine products continue to attract young people and undermine progress toward tobacco-free futures. This statement calls for a legally enforceable prohibition of products that are explicitly designed to appeal to youth.",
      "Scientific evidence demonstrates that flavors increase the likelihood of initiation, conceal the harshness of nicotine exposure, and sustain dependency. Policymakers have a responsibility to shield young people from these targeted tactics.",
      "We recommend the immediate adoption of product standards that eliminate youth-appealing flavors, combined with rigorous enforcement and public awareness campaigns.",
      "This statement is offered as part of a shared commitment to protect the health and potential of the next generation.",
    ],
    closing: "With full regard for public health and youth leadership",
    signature: "Global Youth Voices Policy Council",
    cc: "Ministry of Justice, National Prevention Taskforce",
  },
};

export default async function OfficialCommunicationDocument({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const letter = letters[slug];
  if (!letter) notFound();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="rounded-[1.75rem] border border-[#E5F0FA] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Official Communication</p>
        <h1 className="mt-3 text-4xl font-bold text-[#102A43]">{letter.title}</h1>
        <div className="mt-4 space-y-2 text-sm text-[#42516F]">
          <p><span className="font-semibold">Date:</span> {letter.date}</p>
          <p><span className="font-semibold">To:</span> {letter.recipient}</p>
          <p><span className="font-semibold">Subject:</span> {letter.subject}</p>
        </div>

        <section className="mt-8 space-y-5 text-sm leading-7 text-[#42516F]">
          {letter.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <div className="mt-8 space-y-4 text-sm text-[#42516F]">
          <p>{letter.closing}</p>
          <p className="font-semibold">{letter.signature}</p>
          <p className="text-xs text-[#7B8794]"><span className="font-semibold">Cc:</span> {letter.cc}</p>
        </div>

        <div className="mt-10 border-t border-[#E5F0FA] pt-6">
          <Link href="/resources/official-communications" className="inline-flex w-fit rounded-full bg-[#1282AA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]">
            Back to Official Communications
          </Link>
        </div>
      </div>
    </main>
  );
}
