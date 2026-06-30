import Link from "next/link";
import { notFound } from "next/navigation";

const documents = {
  "youth-advocacy-toolkit": {
    title: "Youth Advocacy Toolkit",
    subtitle: "A structured guide for building evidence-based youth policy campaigns.",
    date: "2026-04-08",
    sections: [
      {
        heading: "Executive Summary",
        content: "This toolkit provides young advocates with a clear framework for translating research, lived experience, and community priorities into persuasive policy proposals. It is designed for local youth groups, school partnerships, and advocacy networks seeking strategic support in their campaigning efforts.",
      },
      {
        heading: "Evidence and Context",
        content: "Youth tobacco use remains a critical public health concern. This section summarizes recent data on youth vaping, smoking prevalence, and the social factors that shape risk. It highlights why coordinated youth-led advocacy is essential for protecting future generations.",
      },
      {
        heading: "Strategy and Engagement",
        content: "The guidance includes stakeholder mapping, message development, and engagement approaches for government, school leaders, and community partners. It emphasizes respectful, professional outreach while centering youth expertise and lived experience.",
      },
      {
        heading: "Policy Recommendations",
        content: "Policy actions include stronger campus smoke-free protections, restrictions on youth-targeted product marketing, and improved access to prevention education. Each recommendation is paired with supporting evidence and a practical implementation outline.",
      },
    ],
  },
  "policy-brief-school-protections": {
    title: "Policy Brief: School Protections",
    subtitle: "A concise policy brief for decision-makers on campus tobacco and vaping safeguards.",
    date: "2026-03-20",
    sections: [
      {
        heading: "Background",
        content: "Schools and educational settings play a central role in supporting student health. This brief outlines the current policy gaps in campus tobacco protections and the urgent need for clear, enforceable rules that reduce youth exposure and normalize health-promoting environments.",
      },
      {
        heading: "Key Findings",
        content: "Evidence shows that smoke-free and vape-free school policies reduce product use, lower exposure to secondhand aerosol, and support healthier student outcomes. The brief presents findings from local surveys, international guidance, and education-sector best practices.",
      },
      {
        heading: "Policy Options",
        content: "Recommended policy options include comprehensive campus bans, staff training requirements, and partnerships with community health services. The brief explains how each option supports safety, equity, and consistent implementation across school systems.",
      },
      {
        heading: "Next Steps",
        content: "To move forward, schools should adopt a formal implementation plan, engage student-led advisory groups, and monitor progress through regular review. A phased approach will ensure clarity and sustainable enforcement.",
      },
    ],
  },
  "factsheet-youth-vaping-trends": {
    title: "Factsheet: Youth Vaping Trends",
    subtitle: "A concise summary of youth vaping patterns and policy implications.",
    date: "2026-01-15",
    sections: [
      {
        heading: "Current Trends",
        content: "Recent data indicates a steady rise in vaping among adolescents, with particular increases in urban schools and among students aged 14 to 17. The factsheet highlights the most current prevalence estimates and demographic trends.",
      },
      {
        heading: "Risk Factors",
        content: "Key risk factors include product flavors, social media exposure, and limited awareness of health harms. The factsheet explores how these influences shape understanding and behavior among young people.",
      },
      {
        heading: "Health Impact",
        content: "Nicotine exposure during adolescence can impair brain development and increase the likelihood of future tobacco use. This section provides an evidence-based summary of health risks relevant to educators, parents, and policymakers.",
      },
      {
        heading: "Policy Implications",
        content: "Effective policy responses include flavor restrictions, age verification enforcement, and educational campaigns grounded in youth voices. The factsheet concludes with actionable policy recommendations for local and national authorities.",
      },
    ],
  },
};

export default async function KnowledgePublicationDocument({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const document = documents[slug];
  if (!document) notFound();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="flex flex-col gap-3 rounded-[1.75rem] border border-[#E5F0FA] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Knowledge Publication</p>
        <h1 className="text-4xl font-bold text-[#102A43]">{document.title}</h1>
        <p className="text-sm text-[#42516F]">{document.subtitle}</p>
        <p className="text-sm font-medium text-[#627D98]">Published {document.date}</p>

        {document.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-2xl font-semibold text-[#102A43]">{section.heading}</h2>
            <p className="mt-4 text-sm leading-7 text-[#42516F]">{section.content}</p>
          </section>
        ))}

        <div className="mt-10 flex flex-col gap-3 border-t border-[#E5F0FA] pt-6">
          <p className="text-sm text-[#42516F]">This document is formatted for clarity and professional presentation to support official advocacy and decision-making.</p>
          <Link href="/resources/knowledge-publications" className="inline-flex w-fit rounded-full bg-[#1282AA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]">
            Back to Knowledge Publications
          </Link>
        </div>
      </div>
    </main>
  );
}
