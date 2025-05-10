'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/navLinks';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-3 text-white shadow-md">
      <nav className="mx-auto flex items-center justify-between gap-20">
        <div className="flex items-center gap-10 flex-1 py-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/logo-icon.svg"
              alt="Nerdwork Logo"
              width={130}
              height={130}
            />
          </Link>
          <Input
            placeholder="Search comics"
            className="w-full max-w-xs text-sm items-center h-10"
          />

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        </div>

        <div>
          <Link href="/login">
            <Button variant="default">Sign in</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}