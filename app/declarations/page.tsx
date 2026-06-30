import Link from "next/link";

const declarations = [
  {
    slug: "ban-novel-recreational-products",
    title: "Ban on novel recreational addictive products",
    summary: "Call for stricter controls on emerging nicotine and tobacco products that target young people.",
    details: [
      "Prevent new nicotine products from being marketed as lifestyle or youth-focused experiences.",
      "Close regulatory gaps around flavored and disposable vape devices.",
    ],
  },
  {
    slug: "financial-accountability-and-liability",
    title: "Stronger liability and financial accountability",
    summary: "Demand legal accountability for manufacturers and distributors that profit from harmful products.",
    details: [
      "Hold companies responsible for health costs related to youth addiction.",
      "Require transparent reporting on marketing spend targeting young audiences.",
    ],
  },
  {
    slug: "tobacco-depiction-regulation",
    title: "Regulate tobacco depiction in entertainment and digital media",
    summary: "Ask for limits on how tobacco and nicotine products are portrayed in media popular with youth.",
    details: [
      "Reduce glamorization of smoking and vaping in film, TV, and online content.",
      "Ensure age-appropriate warnings accompany product depiction in digital campaigns.",
    ],
  },
  {
    slug: "advance-global-tobacco-control",
    title: "Advance global tobacco control policies",
    summary: "Push for stronger international commitments and alignment with youth health priorities.",
    details: [
      "Support adoption of stricter tobacco control measures in regional health agreements.",
      "Raise youth voices in global policy forums and accountability mechanisms.",
    ],
  },
];

export default function DeclarationsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10 sm:px-10">
      <div className="space-y-8 rounded-[2rem] border border-[#1D5975]/10 bg-white p-8 shadow-lg">
        <div className="rounded-[2rem] border border-[#D9E7F0] bg-[#F5FBFF] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1282AA]">Declarations</p>
          <h1 className="mt-4 text-4xl font-bold text-[#102A43]">All current campaign declarations</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#42516F]">
            Explore the current policy asks and declaration statements that guide Global Youth Voices advocacy.
          </p>
        </div>

        <div className="space-y-6">
          {declarations.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[1.75rem] border border-[#E5F0FA] bg-[#F7FBFF] shadow-sm">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold text-[#102A43]">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#42516F]">{item.summary}</p>
                  </div>
                  <Link
                    href={`/campaigns/smoke-free-campuses/declaration/${item.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#1282AA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d6d91]"
                  >
                    Read declaration
                  </Link>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.details.map((detail) => (
                    <div key={detail} className="rounded-2xl border border-[#D9E7F0] bg-white p-4 text-sm leading-6 text-[#42516F] shadow-sm">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-[#D9E7F0] bg-[#EAF4FB] p-6 text-sm leading-7 text-[#42516F] shadow-sm">
          <h2 className="font-semibold text-[#102A43]">Why these declarations matter</h2>
          <p className="mt-3">
            Each declaration here is a core reason for why youth are demanding policy change — from products to media to global accountability.
          </p>
        </div>

        <Link href="/" className="inline-flex rounded-full bg-[#1D5975] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16639E]">
          Back to home
        </Link>
      </div>
    </main>
  );
}
