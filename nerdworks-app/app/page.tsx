import NavigationBar from "@/components/common/navbar"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from"next/link"

const communityImages = [
  "/images/community-1.svg",
  "/images/community-2.svg",
  "/images/community-3.svg",
  "/images/community-4.svg",
]

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-20 bg-transparent">
        <NavigationBar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.svg" // Replace with your actual image path
            alt="Nerdwork Hero"
            fill
            className="object-cover brightness-60"
            priority
          />
        </div>

        {/* Shadow Behind Text */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/80 md:via-black/70 to-transparent" />

        {/* Overlay Content */}
        <div className="relative z-20 px-4 text-center max-w-2xl w-full pt-20 md:pt-50 mt-50">
          <div className="inline-block bg-blue-800 text-sm font-medium rounded-full px-4 py-1 mb-4">
            Comic con 2025 is here, <Link href="/sign-up" className="underline">Register now</Link>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            WHERE PASSION <br className="hidden sm:inline" /> MEETS COMMUNITY
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            From comics to conventions, find your people and immerse yourself in everything you love.
          </p>

          {/* Email Signup */}
          <div className="flex flex-row items-center justify-center gap-2 mb-8">
            <Input
              type="email"
              placeholder="Email address"
              className="w-full max-w-sm bg-gray-800 border-none focus-visible:ring-2"
            />
            <Button className="bg-primary">Sign Up</Button>
          </div>

          <div className="flex w-full mx-auto max-w-sm md:max-w-xs justify-center items-center">
          <p className="text-xs md:text-sm text-gray-400">
            Step into the ultimate nerd verse: <br className="sm:hidden" />
            Explore exclusive comics on the Nerdwork+ platform. <br className="hidden sm:inline" />
            Attend the most exciting comic conventions. <br className="hidden sm:inline" />
            Connect with one of the largest nerd communities.
          </p>
          </div>
        </div>
      </section>

       {/* Community Section */}
       <section className="relative w-full px-6 md:px-16 py-16 bg-black text-white">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
          {/* Left Side Text & List */}
          <div className="flex-1">
            <h2 className="text-4xl font-black mb-4 leading-tight">
              PEOPLE <br /> PASSION <br /> COMMUNITY
            </h2>
            <p className="text-gray-400 mb-6 max-w-sm">
              No matter your passion, there’s a community for you.
            </p>
            <ul className="space-y-3 mb-4 font-medium">
              {[
                "Pop Culture",
                "Video Games",
                "Comics",
                "Theater",
                "Anime",
                "Books",
                "Movies",
                "Music"
              ].map((topic) => (
                <li key={topic} className="text-white hover:underline cursor-pointer">{topic}</li>
              ))}
            </ul>
            <Button>Join Community</Button>
          </div>

          {/* Right Side Images Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
          {communityImages.map((src, idx) => {
            const rotationClass = idx % 2 === 0 ? "rotate-[2deg]" : "-rotate-[3deg]";
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg shadow-lg ${rotationClass}`}
              >
                <Image
                  src={src}
                  alt={`community-${idx}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
          </div>
        </div>
      </section>
      </div>
  )
}
