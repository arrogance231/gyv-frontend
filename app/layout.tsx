import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Youth Voices",
  description: "A youth advocacy wireframe for campaigns, declarations, events, and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[linear-gradient(135deg,_#f9fcfe_0%,_#fefef6_100%)] text-[#272E3F]">
        <header className="sticky top-0 z-50 border-b border-[#1D5975]/10 bg-white/90 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="/" className="text-lg font-bold uppercase tracking-[0.3em] text-[#1282AA]">
              GYV
            </Link>
            <div className="hidden items-center gap-8 text-sm font-semibold text-[#272E3F] md:flex">
              <Link href="/" className="rounded-full px-3 py-2 transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                Home
              </Link>
              <Link href="/campaigns" className="rounded-full px-3 py-2 transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                Campaigns
              </Link>
              <Link href="/declarations" className="rounded-full px-3 py-2 transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                Declarations
              </Link>
              <Link href="/events" className="rounded-full px-3 py-2 transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                Events
              </Link>
              <details className="group relative">
                <summary className="cursor-pointer list-none rounded-full px-3 py-2 transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                  Resources
                </summary>
                <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-[#1D5975]/10 bg-white p-2 shadow-xl">
                  <Link href="/resources/knowledge-publications" className="block rounded-xl px-3 py-2 text-sm text-[#272E3F] transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                    Knowledge Publications
                  </Link>
                  <Link href="/resources/official-communications" className="block rounded-xl px-3 py-2 text-sm text-[#272E3F] transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                    Official Communications
                  </Link>
                  <Link href="/resources/media" className="block rounded-xl px-3 py-2 text-sm text-[#272E3F] transition hover:bg-[#1282AA]/10 hover:text-[#1282AA]">
                    Media
                  </Link>
                </div>
              </details>
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t border-[#1D5975]/10 bg-white/80 px-6 py-8 text-center text-sm text-[#272E3F]">
          Global Youth Voices · Building a louder, healthier future for young people everywhere.
        </footer>
      </body>
    </html>
  );
}
