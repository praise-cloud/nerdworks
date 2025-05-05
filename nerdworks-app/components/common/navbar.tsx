"use client"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"

 const navigationItems = [
  {title: "Communities", href: "/"},
  {title: "Nerdworks+", href: "/nerdworks"},
  {title: "Comic Con 2025 Soon", href: "/events/comic-con"},
  {title: "Events", href: "/events"},
  {title: "Company", href: "/company"},
 ]

 export default function NaviagtionBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col p-10 mx-auto w-full justify-center items-center">
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center">
         <Link href="/">
          <Image
            src="/icons/logo-icon.svg"
            alt="logo"
            width={30}
            height={30}
            className="block w-30 cursor-pointer"
          />
         </Link>
        <div className="md:hidden ml-auto">
          <Image onClick={() => setIsMenuOpen(!isMenuOpen)} src="/icons/menu-icon.svg" alt="menu" width={24} height={24} className="cursor-pointer" />
        </div>
        </div>

        <div className={`md:flex ${isMenuOpen ? "flex" : "hidden"} w-full md:w-auto absolute md:static top-24 md:top-0 left-0 md:left-auto bg-gray-900 md:bg-transparent p-5 md:p-0`}>
          <ul className="flex flex-col md:flex-row mx-auto gap-5 md:gap-10 justify-center items-center w-full md:w-auto">

            {navigationItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-md font-semibold text-white hover:text-gray-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="hidden md:flex gap-5 justify-center items-center">
            <Button variant="outline">Login</Button>
            <Button className="bg-primary">Sign Up</Button>

        </div>
      </nav>
    </header>
  );
}