import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

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
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
