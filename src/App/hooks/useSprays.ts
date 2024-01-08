import { useQuery } from "@tanstack/react-query";
import { spraysService } from "../services/spraysService";

export function useSprays() {
    const {data,isFetching} = useQuery({
        queryKey: ['Sprays'],
        queryFn: spraysService.getAll,
         staleTime: Infinity,
    })

    return {Buddies: data ?? [], isLoading: isFetching}
}