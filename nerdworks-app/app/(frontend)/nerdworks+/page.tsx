import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { comics } from '@/lib/comicData';

export default function ComicsPage() {
  return (
    <div className="min-h-screen text-white mt-10">
      {/* Comic Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {comics.map((comic) => (
            <div key={comic.id} className="relative">
              {comic.isNew && (
                <span className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              )}
              <Link href={`/nerdwork+/comics/${comic.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={comic.image}
                    alt={comic.title}
                    width={140}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-2 overflow-hidden">
                  <h3 className="text-md font-semibold line-clamp-2">{comic.title}</h3>
                  <p className="text-sm text-gray-400">{comic.chapters} chapters</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}