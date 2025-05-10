'use client';

import { cn } from '@/lib/utils';
import { genres } from '@/lib/genres'; // Static genre list

export default function GenreTabs() {
  return (
    <nav className="w-full border-b border-zinc-800 overflow-x-auto">
      <ul className="flex gap-6 px-6  py-3 text-md whitespace-nowrap text-white">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={cn(
              'text-white cursor-pointer border-b-2 border-transparent hover:border-white transition'
            )}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
