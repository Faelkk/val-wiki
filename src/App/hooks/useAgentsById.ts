import { useQuery } from "@tanstack/react-query";
import { agentsByIdService } from "../services/agentsByIdService";
import { AgentFetch } from "../entities/Agents";


export function useAgentsById(agentsId: string) {
    const {data,isFetching,refetch} = useQuery<AgentFetch | null>({
        queryKey: ['AgentsById'],
        queryFn: () => agentsByIdService.getById(agentsId),
         staleTime: Infinity,
    })

    return {agentsById: data ?? [], isLoading: isFetching,refetch}
}