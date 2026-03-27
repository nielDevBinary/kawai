import { useState, useTransition, type FormEvent } from "react";
import type { Anime } from "../types";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import { searchAnime } from "../api/AnimeApi";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeModal } from "../components/AnimeModal";

export default function Search() {
  const [searchResults, setSearchResults] = useState<Anime[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      const results = await searchAnime(searchQuery);

      startTransition(() => {
        setSearchResults(results);
      });
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-16 bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-14 py-4 text-lg focus:outline-none focus:border-white transition-colors"
        />

        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-neutral-500" />

        <button
          type="submit"
          disabled={isSearching || isPending}
          className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors disabled:opacity-50"
        >
          Search
        </button>
      </form>

      {isSearching || isPending ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-white" />
          <p className="text-neutral-400">Scanning our archives...</p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {searchResults.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onClick={setSelectedAnime}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <SearchIcon className="w-16 h-16 mx-auto text-neutral-800 mb-4" />
          <p className="text-neutral-500 text-lg">
            buscando tu siguiente obsesión.
          </p>
        </div>
      )}

      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </div>
  );
}
