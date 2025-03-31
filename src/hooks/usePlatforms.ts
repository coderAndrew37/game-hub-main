import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import ms from "ms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["paltforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: { count: platforms.length, results: platforms, next: null },
  });
export default usePlatforms;
