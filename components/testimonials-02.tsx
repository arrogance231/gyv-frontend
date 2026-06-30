import type { TestimonialType } from "@/components/testimonial-list"
import { TestimonialList } from "@/components/testimonial-list"

export default function Testimonials02() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative rounded-[1.5rem] overflow-hidden bg-black">
        {/* background image (subtle) */}
        <img
          src="/no-tobacco.jpg"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-6xl text-center text-white">
            {/* Tiles row 1 */}
            <div className="mb-6">
              <TestimonialList data={TESTIMONIALS_1} tileMode />
            </div>

            {/* Tiles row 2 */}
            <div className="mb-10">
              <TestimonialList data={TESTIMONIALS_2} direction="right" tileMode />
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)] z-20">
              Uniting Youth Voices, Making Big Tobacco Pay
            </h2>
            <div className="mt-6">
              <a
                href="#campaigns"
                className="inline-block rounded-full bg-[#F0C906] px-7 py-3 text-sm font-semibold text-[#1D5975] shadow-md hover:bg-[#f2c93a]"
              >
                Join The Movement
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TESTIMONIALS_1: TestimonialType[] = [
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Youth+1",
    authorName: "Ari, Student Organizer",
    authorTagline: "Youth-led smoke-free schools campaign",
    url: "#youth-1",
    quote: "Tobacco control is not just policy, it’s protecting our classmates from addiction.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Youth+2",
    authorName: "Mina, Health Advocate",
    authorTagline: "Campus policy lead",
    url: "#youth-2",
    quote: "When we speak together, governments have to listen and act on safer campuses.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Youth+3",
    authorName: "Jay, Peer Educator",
    authorTagline: "Community tobacco prevention organizer",
    url: "#youth-3",
    quote: "Every flavor ban, every warning sign, is a win for our generation’s health.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=Youth+4",
    authorName: "Leah, Campaign Volunteer",
    authorTagline: "Digital justice advocate",
    url: "#youth-4",
    quote: "This movement is about young people demanding accountability from the industry.",
  },
]

const TESTIMONIALS_2: TestimonialType[] = [
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=News+1",
    authorName: "WHO Alert",
    authorTagline: "Global tobacco control update",
    url: "#news-1",
    quote: "New guidance urges stronger school protections and tighter youth vaping restrictions.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=News+2",
    authorName: "Policy Brief",
    authorTagline: "Regional accountability report",
    url: "#news-2",
    quote: "Local leaders are advancing liability measures against harmful industry marketing.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=News+3",
    authorName: "Campaign Bulletin",
    authorTagline: "Youth movement update",
    url: "#news-3",
    quote: "Smoke-Free Schools Week is mobilizing students across campuses nationwide.",
  },
  {
    authorAvatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=News+4",
    authorName: "Press Release",
    authorTagline: "Industry oversight report",
    url: "#news-4",
    quote: "A new report highlights how digital advertising targets young people with addictive products.",
  },
]
