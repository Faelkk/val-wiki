import { useQuery } from "@tanstack/react-query";
import { buddiesService } from "../services/BuddiesService";

export function useAgents() {
    const {data,isFetching} = useQuery({
        queryKey: ['Buddies'],
        queryFn: buddiesService.getAll,
         staleTime: Infinity,
    })

    return {Buddies: data ?? [], isLoading: isFetching}
}