import { useEffect, useState } from "react";
import type { Anime } from "../types";
import { X } from "lucide-react";
import {ModalContent} from './ModalContent'

interface AnimeModalProps {
  anime: Anime;
  onClose: () => void;
}
export const AnimeModal = ({ anime, onClose}:AnimeModalProps) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const hasTrailer = Boolean(anime.trailer?.embed_url);
  
    // 🔥 Scroll Lock Profesional
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, []);

  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl custom-scrollbar">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Hero Backdrop / Trailer */}
          <div className="md:col-span-5 relative aspect-[2/3] md:aspect-auto bg-black">
            {showTrailer && hasTrailer ? (
              <iframe
                src={anime.trailer?.embed_url ?? undefined}
                title={`${anime.title} trailer`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img 
                  src={anime.images.webp.large_image_url} 
                  alt={anime.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r" />
              </>
            )}
          </div>

          {/* Content */}
          <ModalContent
            anime={anime}
            showTrailer={showTrailer}
            setShowTrailer={setShowTrailer}
            hasTrailer={hasTrailer}
          />
        </div>
      </div>
    </div>
  );
};
