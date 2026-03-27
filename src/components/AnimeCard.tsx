import { Star } from "lucide-react";
import type { Anime } from "../types";


interface AnimeCardProps {
  anime: Anime;
  onClick: (anime: Anime) => void;
}


export const AnimeCard = ({anime, onClick}:AnimeCardProps) => {
  return (
        <div 
      onClick={() => onClick(anime)}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={anime.images.webp.large_image_url} 
          alt={anime.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center gap-1 text-xs font-semibold text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-white" />
            {anime.score || 'N/A'}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-neutral-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full">
            {anime.type}
          </span>
        </div>
        <h3 className="text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-neutral-300 transition-colors">
          {anime.title_english || anime.title}
        </h3>
      </div>
    </div>
  )
}
