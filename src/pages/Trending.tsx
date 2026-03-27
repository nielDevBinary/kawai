import { useEffect, useState } from "react";
import { getTrending } from "../api/AnimeApi";
import type { Anime } from "../types";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeModal } from "../components/AnimeModal";

export const Trending = () => {
  const [trending, setTrending] = useState<Anime[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const top = await getTrending();
        setTrending(top);
      } catch (err) {
        console.error("Failed to load data", err);
      }
    };
    loadInitialData();
  }, []);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-4xl font-black tracking-tight">Global Rankings</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {trending.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onClick={setSelectedAnime}
          />
        ))}
      </div>

      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </div>
  );
};
