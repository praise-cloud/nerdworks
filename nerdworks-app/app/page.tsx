"use client"

import NavigationBar from "@/components/common/navbar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const communityImages = [
  "/images/community-1.svg",
  "/images/community-2.svg",
  "/images/community-3.svg",
  "/images/community-4.svg",
];

export default function Home() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  const topics = [
    "Pop Culture",
    "Video Games",
    "Comics",
    "Theater",
    "Anime",
    "Books",
    "Movies",
    "Music",
  ];

  return (
    <div className="flex flex-col w-full h-full mx-auto justify-center items-center">
      <div className="fixed top-0 left-0 w-full z-20 bg-transparent">
        <NavigationBar />
      </div>

      <section className="relative w-full h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.svg"
            alt="Nerdwork Hero"
            fill
            className="object-cover brightness-60"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/80 md:via-black/70 to-transparent" />

        <div className="relative z-20 px-4 text-center max-w-2xl w-full pt-20 md:pt-50 mt-50">
          <div className="inline-block bg-blue-800 text-sm font-medium rounded-full px-4 py-1 mb-4">
            Comic con 2025 is here,{" "}
            <Link href="/sign-up" className="underline">
              Register now
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            WHERE PASSION <br className="hidden sm:inline" /> MEETS COMMUNITY
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            From comics to conventions, find your people and immerse yourself in
            everything you love.
          </p>

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
              Explore exclusive comics on the Nerdwork+ platform.{" "}
              <br className="hidden sm:inline" />
              Attend the most exciting comic conventions.{" "}
              <br className="hidden sm:inline" />
              Connect with one of the largest nerd communities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full px-6 py-20 bg-black text-white md:px-50 lg:px-70">
        <div className="flex flex-row gap-4 justify-between items-center">
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-4 leading-tight">
              PEOPLE <br /> PASSION <br /> COMMUNITY
            </h2>
            <p className="text-white mb-6 max-w-sm w-full">
              No matter your passion, there's a community for you.
            </p>
            <div className="group relative">
              <ul className="space-y-3 mb-4 font-medium text-md">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-gray-400 hover:text-white cursor-pointer relative md:w-30"
                    onMouseEnter={() => setHoveredTopic(topic)}
                    onMouseLeave={() => setHoveredTopic(null)}
                  >
                    {topic}
                    {hoveredTopic === topic && (
                      <div className="absolute left-25 top-1/2 -translate-y-1/2 ml-4">
                        <Button size="sm">Join Community</Button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            {communityImages.map((src, idx) => {
              const rotationClass =
                idx % 2 === 0 ? "rotate-[1deg]" : "-rotate-[2deg]";
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
  );
}
