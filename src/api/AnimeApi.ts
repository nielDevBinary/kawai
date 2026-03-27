import type { Anime } from "../types";
import { api } from "./BaseService";

export const getTrending = async (page: number = 1): Promise<Anime[]> => {
  const response = await api().get(`/top/anime?page=${page}&limit=24`);
  return response.data.data;
};

export const searchAnime = async (query: string): Promise<Anime[]> =>{
  const response = await api().get(`/anime?q=${query}&limit=24&order_by=score&sort=desc`);
  return response.data.data
}