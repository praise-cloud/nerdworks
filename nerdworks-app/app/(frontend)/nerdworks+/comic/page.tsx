import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock data for comics (replace with API data in production)
const comics = [
  { id: 1, title: "In My Head", chapters: 10, image: "/comics/comic_1.svg", isNew: true },
  { id: 2, title: "Totem: Vessel of the Gods", chapters: 10, image: "/comics/comic_2.svg", isNew: false },
  { id: 3, title: "Ylofu: Easter Special", chapters: 1, image: "/comics/comic_3.svg", isNew: true },
  { id: 4, title: "Celestial Eyes", chapters: 5, image: "/comics/comic_4.svg", isNew: false },
  { id: 5, title: "This Side Up", chapters: 10, image: "/comics/comic_5.svg", isNew: true },
  { id: 6, title: "Kugali: An African comic anthology", chapters: 10, image: "/comics/comic_6.svg", isNew: false },
  { id: 7, title: "Penelope of Sparta", chapters: 10, image: "/comics/comic_7.svg", isNew: false },
  { id: 8, title: "Shuri", chapters: 10, image: "/comics/comic_8.svg", isNew: false },
  { id: 9, title: "The Ambassadors", chapters: 1, image: "/comics/comic_9.svg", isNew: true },
  { id: 10, title: "Dream", chapters: 5, image: "/comics/comic_10.svg", isNew: false },
  { id: 11, title: "Wakanda: Okoye", chapters: 10, image: "/comics/comic_11.svg", isNew: false },
  { id: 12, title: "Chirinkshe", chapters: 10, image: "/comics/comic_12.svg", isNew: true },
];

const genres = [
  "Adventure", "Fantasy", "Mystery", "Sci-Fi", "Romance", "Thriller", "Superheroes", "Historical"
];

export default function ComicsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <Image
            src="/nerdwork-logo.png"
            alt="Nerdwork Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <Input
            type="text"
            placeholder="Search comics"
            className="w-64 bg-gray-700 text-white border-gray-600 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/library" className="text-gray-300 hover:text-white">
            Library
          </Link>
          <Link href="/create" className="text-gray-300 hover:text-white">
            Create
          </Link>
          <Link href="/sell" className="text-gray-300 hover:text-white">
            Sell
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Genre Tabs */}
      <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-800">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant="outline"
            className="text-gray-300 border-gray-600 hover:bg-gray-700"
          >
            {genre}
          </Button>
        ))}
      </div>

      {/* Comic Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {comics.map((comic) => (
            <div key={comic.id} className="relative">
              {comic.isNew && (
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              )}
              <Link href={`/comics/${comic.id}`}>
                <div className="relative w-full h-64">
                  <Image
                    src={comic.image}
                    alt={comic.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="mt-2 text-sm font-semibold">{comic.title}</h3>
                <p className="text-xs text-gray-400">{comic.chapters} chapters</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 p-4">
        <Button
          variant="outline"
          className="text-gray-300 border-gray-600 hover:bg-gray-700"
        >
          Previous
        </Button>
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            className={
              page === 1
                ? "bg-blue-600 text-white"
                : "text-gray-300 border-gray-600 hover:bg-gray-700"
            }
          >
            {page}
          </Button>
        ))}
        <span className="text-gray-400">...</span>
        <Button
          variant="outline"
          className="text-gray-300 border-gray-600 hover:bg-gray-700"
        >
          67
        </Button>
        <Button
          variant="outline"
          className="text-gray-300 border-gray-600 hover:bg-gray-700"
        >
          Next
        </Button>
      </div>
    </div>
  );
}