import { useQuery } from "@tanstack/react-query";
import { buddiesService } from "../services/BuddiesService";
import { Buddies } from "../entities/Buddies";

export function useBuddies() {
  const { data, isFetching } = useQuery<Buddies[] | null>({
    queryKey: ["Buddies"],
    queryFn: buddiesService.getAll,
    staleTime: Infinity,
  });

  return { Buddies: data ?? [], isLoading: isFetching };
}
