
export interface Anime {
  mal_id: number;
  url: string;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    }
  };
  title: string;
  title_english: string | null;
  type: string;
  episodes: number | null;
  status: string;
  score: number;
  synopsis: string;
  genres: Array<{ name: string }>;
  year: number | null;
  trailer: {
    youtube_id: string | null;
    embed_url: string | null;
  };
}

export interface RecommendationResponse {
  animes: Array<{
    title: string;
    reason: string;
    match_percentage: number;
  }>;
}