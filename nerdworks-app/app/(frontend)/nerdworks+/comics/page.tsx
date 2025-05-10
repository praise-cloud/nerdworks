import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { comics } from '@/lib/comicData';
import { chapters } from '@/lib/chapterData';
import { notFound } from 'next/navigation';

export default function ComicDetailPage({ params }: { params: { id: string } }) {
  const comic = comics.find((c) => c.id === parseInt(params.id));
  if (!comic) return notFound();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="p-6 flex flex-col md:flex-row gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{comic.title}</h1>
          <p className="mt-2 text-sm text-gray-400">
            12+ Rating, {comic.chapters} chapters, Action Adventure
          </p>
          <p className="mt-4 text-sm">
            A techno-industrial dystopia, the sprawling megalopolis of Durban stretches across the country’s east coast, breeding ground for a cosmopolitan.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Author: John Uche, Started: April 2015, Status: Ongoing
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Genre: Action Adventure, Mythology, Supernatural, Gods, Yoruba, Dystopian
          </p>
          <div className="mt-4 flex gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700">Start Reading</Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Add to Library
            </Button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full md:w-[300px] h-[400px]">
          <Image
            src={comic.image}
            alt={comic.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white text-xs">
            <p>John Francis Goodluck</p>
            <p>Cinsel Peach</p>
            <p>Lord Blue</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="chapters" className="px-6">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="chapters">Chapters {comic.chapters}</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="store">Store</TabsTrigger>
        </TabsList>
        <TabsContent value="chapters" className="mt-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="flex justify-between items-center py-4 border-b border-gray-700"
            >
              <div>
                <h3 className="text-sm font-semibold">
                  #{chapter.number} {chapter.title}
                </h3>
                {chapter.description && (
                  <p className="text-xs text-gray-400 mt-1">{chapter.description}</p>
                )}
                <p className="text-xs text-gray-400 mt-1">{chapter.status}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">{chapter.date}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  {chapter.action}
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="comments">
          <p>Comments section coming soon.</p>
        </TabsContent>
        <TabsContent value="store">
          <p>Store section coming soon.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}