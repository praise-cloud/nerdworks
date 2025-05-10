'use client';

import { cn } from '@/lib/utils';
import { GENRES } from '@/lib/genres'; // Static genre list

export default function GenreTabs() {
  return (
    <nav className="w-full border-b border-zinc-800 overflow-x-auto">
      <ul className="flex gap-6 px-6 mx-20 py-3 text-[12px] whitespace-nowrap text-white">
        {GENRES.map((genre) => (
          <li
            key={genre.id}
            className={cn(
              'text-white cursor-pointer pb-1 border-b-2 border-transparent hover:border-white hover:text-white transition'
            )}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
