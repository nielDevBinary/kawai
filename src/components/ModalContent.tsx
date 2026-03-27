import { Info, Play } from "lucide-react";
import type { Anime } from "../types";

interface ModalContentProps {
  anime: Anime;
  showTrailer: boolean;
  setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>;
  hasTrailer: boolean;
}

export const ModalContent = ({
  anime,
  showTrailer,
  setShowTrailer,
  hasTrailer,
}: ModalContentProps) => {
  return (
    <div className="md:col-span-7 p-6 md:p-10 space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {anime.genres.map((g) => (
            <span
              key={g.name}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/20"
            >
              {g.name}
            </span>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
          {anime.title_english || anime.title}
        </h2>

        <p className="text-neutral-400 italic text-sm">{anime.title}</p>
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-sm font-medium text-neutral-300">
        <div>
          <span className="text-white font-bold text-lg">
            {anime.score ?? "?"}/10
          </span>
        </div>
        <div>{anime.episodes ?? "?"} Episodes</div>
        <div>{anime.year ?? "Ongoing"}</div>
        <div className="uppercase tracking-tighter">{anime.status}</div>
      </div>

      {/* Synopsis */}
      <div>
        <h4 className="text-lg font-bold text-white">Synopsis</h4>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-6">
          {anime.synopsis}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-6">
        {hasTrailer && (
          <button
            onClick={() => setShowTrailer((prev) => !prev)}
            className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-neutral-200 text-black rounded-full font-bold transition-all transform hover:scale-105"
          >
            <Play className="w-5 h-5" />
            {showTrailer ? "Show Poster" : "Watch Trailer"}
          </button>
        )}

        <button className="flex items-center gap-2 px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-bold transition-all">
          <Info className="w-5 h-5" />
          More Info
        </button>
      </div>
    </div>
  );
};
