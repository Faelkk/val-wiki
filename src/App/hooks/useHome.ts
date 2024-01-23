import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/homesService";

export function useHome() {
  const { data, isFetching } = useQuery({
    queryKey: ["Home"],
    queryFn: homeService.getAll,
    staleTime: Infinity,
  });

  return { homeData: data ?? [], isLoading: isFetching };
}
