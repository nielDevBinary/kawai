import { ArrowRight } from "lucide-react";
import { AnimeCard } from "../components/AnimeCard";
import { useEffect, useState } from "react";
import type { Anime } from "../types";
import { getTrending } from "../api/AnimeApi";
import { AnimeModal } from "../components/AnimeModal";
import { Link } from "react-router-dom";

export const Home = () => {
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
  }, [selectedAnime]);
  return (
    <div className="space-y-12 ">
      <section className="relative h-[60vh] md:h-[80vh] w-full rounded-3xl overflow-hidden group">
        <img
          src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/4MEWI2K4D5HSFIIAXRURHLBXQU.jpg"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          alt="Featured Anime"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 max-w-2xl">

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
            YOUR ANIME ODYSSEY BEGINS
          </h1>
          <p className="text-neutral-300 text-lg">
            Discover curated masterpieces and AI-driven recommendations tailored
            to your unique taste.
          </p>
          <Link to={"/trending"} className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-full hover:bg-neutral-200 transition-all transform hover:translate-x-2 w-70">
            Explore Trending <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      <section className="">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <span className="w-8 h-1 bg-white rounded-full" />
            Top Picks For You
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {trending.slice(0, 10).map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onClick={setSelectedAnime}
            />
          ))}
        </div>
      </section>

      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </div>
  );
};
