import { useQuery } from "@tanstack/react-query";
import { mapsService } from "../services/mapsService";

export function useMaps() {
    const {data,isFetching} = useQuery({
        queryKey: ['Maps'],
        queryFn: mapsService.getAll,
         staleTime: Infinity,
    })

    return {Buddies: data ?? [], isLoading: isFetching}
}