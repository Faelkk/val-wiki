import { useQuery } from "@tanstack/react-query";
import { mapsService } from "../services/mapsService";
import { Map } from "../entities/Mapas";

export function useMaps() {
    const {data,isFetching} = useQuery<Map[] | null | undefined>({
        queryKey: ['Maps'],
        queryFn: mapsService.getAll,
         staleTime: Infinity,
    })

    return {maps: data ?? [], isLoading: isFetching}
}