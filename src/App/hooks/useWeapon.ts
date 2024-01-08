import { useQuery } from "@tanstack/react-query";
import { weaponsService } from "../services/weaponsService";

export function useWeapons() {
    const {data,isFetching} = useQuery({
        queryKey: ['Weapons'],
        queryFn: weaponsService.getAll,
         staleTime: Infinity,
    })

    return {Buddies: data ?? [], isLoading: isFetching}
}