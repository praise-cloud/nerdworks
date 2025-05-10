'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import GenreTabs from './genreTabs';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-3 text-white shadow-md">
      <nav className="mx-auto flex items-center justify-between gap-20">
        {/* Logo + Search */}
        <div className="flex items-center gap-10 flex-1 py-2 ">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/logo-icon.svg" // Replace with actual logo path or use static image
              alt="Nerdwork Logo"
              width={130}
              height={130}
            />
          </Link>
          <Input
            placeholder="Search comics"
            className="w-full max-w-xs bg-muted text-sm"
          />

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/library" className="hover:text-primary">Library</Link>
          <Link href="/creator/dashboard" className="hover:text-primary">Create</Link>
          <Link href="/sell" className="hover:text-primary">Sell</Link>
        </div>
        </div>

        {/* Sign In Button */}
        <div>
          <Link href="/login">
            <Button variant="default">Sign in</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
