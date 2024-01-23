import { useQuery } from "@tanstack/react-query";

import { AgentAbilities } from "../entities/AgentsAbilitiesVideo";
import { agentsAbilityVideoService } from "../services/agentsAbilityVideo";

export function useAgentsAbilitiesVideo() {
  const { data, isFetching } = useQuery<AgentAbilities[] | null>({
    queryKey: ["AbilitiesVideo"],
    queryFn: agentsAbilityVideoService.getAll,
    staleTime: Infinity,
  });

  return { abilitiesVideo: data, isLoading: isFetching };
}
