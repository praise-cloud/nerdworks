import NavigationBar from "@/components/common/navbar"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/60 to-transparent" />

        {/* Overlay Content */}
        <div className="relative z-20 px-4 text-center max-w-2xl w-full md:pt-50 mt-50">
          <div className="inline-block bg-blue-600 text-sm font-medium rounded-full px-4 py-1 mb-4">
            Comic con 2025 is here, <span className="underline">Register now</span>
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

          <p className="text-xs md:text-sm text-gray-400">
            Step into the ultimate nerd verse: <br className="sm:hidden" />
            Explore exclusive comics on the Nerdwork+ platform. <br className="hidden sm:inline" />
            Attend the most exciting comic conventions. <br className="hidden sm:inline" />
            Connect with one of the largest nerd communities.
          </p>
        </div>
      </section>

      {/*  */}
    </div>
  )
}
