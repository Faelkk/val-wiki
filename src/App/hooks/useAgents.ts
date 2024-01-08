import { useQuery } from "@tanstack/react-query";
import { agentsService } from "../services/agentsService";

export function useAgents() {
    const {data,isFetching} = useQuery({
        queryKey: ['Agents'],
        queryFn: agentsService.getAll,
         staleTime: Infinity,
    })

    return {agents: data ?? [], isLoading: isFetching}
}