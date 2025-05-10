import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock data for comics (replace with API data in production)
const comics = [
  { id: 1, title: "In My Head", chapters: 10, image: "/images/comics/comic_1.svg", isNew: true },
  { id: 2, title: "Totem: Vessel of the Gods", chapters: 10, image: "/images/comics/comic_2.svg", isNew: false },
  { id: 3, title: "Ylofu: Easter Special", chapters: 1, image: "/images/comics/comic_3.svg", isNew: true },
  { id: 4, title: "Celestial Eyes", chapters: 5, image: "/images/comics/comic_4.svg", isNew: false },
  { id: 5, title: "This Side Up", chapters: 10, image: "/images/comics/comic_5.svg", isNew: true },
  { id: 6, title: "Kugali: An African comic anthology", chapters: 10, image: "/images/comics/comic_6.svg", isNew: false },
  { id: 7, title: "Penelope of Sparta", chapters: 10, image: "/images/comics/comic_7.svg", isNew: false },
  { id: 8, title: "Shuri", chapters: 10, image: "/images/comics/comic_8.svg", isNew: false },
  { id: 9, title: "The Ambassadors", chapters: 1, image: "/images/comics/comic_9.svg", isNew: true },
  { id: 10, title: "Dream", chapters: 5, image: "/images/comics/comic_10.svg", isNew: false },
  { id: 11, title: "Wakanda: Okoye", chapters: 10, image: "/images/comics/comic_11.svg", isNew: false },
  { id: 12, title: "Chirinkshe", chapters: 10, image: "/images/comics/comic_12.svg", isNew: true },
];

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
              <Link href={`comics/${comic.id}`} className="block">
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