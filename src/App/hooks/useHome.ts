import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/homesService";
import { Home } from "../entities/Home";

export function useHome() {
  const { data, isFetching } = useQuery<Home[] | null>({
    queryKey: ["Home"],
    queryFn: homeService.getAll,
    staleTime: Infinity,
  });

  return { homeData: data ?? [], isLoading: isFetching };
}
