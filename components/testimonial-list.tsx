import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/testimonial"

export type TestimonialType = {
  /** URL to the person's profile picture or avatar image */
  authorAvatar: string
  /** Full display name of the person giving the testimonial */
  authorName: string
  /** Short tagline, title, or description of the person */
  authorTagline: string
  /** Link to the person's profile, website, or social media page */
  url: string
  /** The testimonial text content or recommendation message */
  quote: string
}

export function TestimonialList({
  direction,
  data,
  tileMode,
}: {
  direction?: "right" | "left"
  data: TestimonialType[]
  tileMode?: boolean
}) {
  const TILE_GRADIENTS = [
    "from-fuchsia-500 to-rose-500",
    "from-sky-500 to-cyan-500",
    "from-emerald-500 to-lime-500",
    "from-amber-500 to-orange-500",
  ]
  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />

      <MarqueeContent direction={direction}>
        {data.map((item, index) => {
          const grad = TILE_GRADIENTS[index % TILE_GRADIENTS.length]
          return (
            <MarqueeItem
              key={`${item.authorName}-${index}`}
              className={tileMode ? "mx-4 h-full" : "mx-0 h-full w-xs border-r border-line"}
            >
              <a
                className={tileMode ? "block h-full" : "block h-full transition-[background-color] hover:bg-accent/15"}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tileMode ? (
                  <div className={`relative aspect-square w-40 sm:w-44 md:w-48 lg:w-56 rounded-2xl p-4 text-white bg-gradient-to-br ${grad} shadow-xl`}> 
                    <img src={item.authorAvatar} alt={item.authorName} className="absolute top-3 left-3 h-8 w-8 rounded-full border-2 border-white/30 object-cover" />

                    <div className="flex h-full items-center justify-center px-3">
                      <p className="text-sm font-semibold leading-6 text-white text-left">“{item.quote}”</p>
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs uppercase tracking-wider opacity-90">VOICE {index + 1}</div>
                  </div>
                ) : (
                  <TestimonialItem {...item} />
                )}
              </a>
            </MarqueeItem>
          )
        })}
      </MarqueeContent>
    </Marquee>
  )
}

function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote,
}: TestimonialType) {
  return (
    <Testimonial>
      <TestimonialQuote className="min-h-14">
        <p>{quote}</p>
      </TestimonialQuote>

      <TestimonialAuthor>
        <TestimonialAvatar>
          <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
          <TestimonialAvatarRing />
        </TestimonialAvatar>

        <TestimonialAuthorName>{authorName}</TestimonialAuthorName>
        <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
      </TestimonialAuthor>
    </Testimonial>
  )
}
