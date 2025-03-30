import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
