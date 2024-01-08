import { useQuery } from "@tanstack/react-query";
import { cardsService } from "../services/cardsService";

export function useCards() {
    const {data,isFetching} = useQuery({
        queryKey: ['Cards'],
        queryFn: cardsService.getAll,
         staleTime: Infinity,
    })

    return {Buddies: data ?? [], isLoading: isFetching}
}