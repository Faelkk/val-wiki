import { useEffect, useState } from "react";
import { Ability, Agent } from "../../../../../App/entities/Agents";
import { useAgentsAbilitiesVideo } from "../../../../../App/hooks/useAgentsAbilitiesVideo";

export function useCardAbilities(agentsById: Agent) {
  const { abilitiesVideo, isLoading } = useAgentsAbilitiesVideo();

  const [abilityActive, setAbilityActive] = useState(
    (agentsById as { abilities: Ability[] }).abilities[0]
  );
  const [indexAbilityActive, setIndexAbilityActive] = useState(0);
  const [urlAbilityVideo, setAbilityUrlVideo] = useState("");

  const nameAgent = agentsById?.displayName.toLowerCase();

  function handleClick(abilities: Ability, index: number) {
    setAbilityActive(abilities);
    setIndexAbilityActive(index);
  }

  function getAbilityUrlVideo(agentName: string, indexAbility: number) {
    const agent = abilitiesVideo?.filter((eachAgent) => {
      return eachAgent.name.toLowerCase() === agentName;
    });

    if (agent && agent[0].abilities) {
      const AbilityArray = Object.values(agent[0].abilities);
      const ability = AbilityArray[indexAbility];
      if (ability) {
        setAbilityUrlVideo(ability as string);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (abilitiesVideo) getAbilityUrlVideo(nameAgent, indexAbilityActive | 0);
  });

  return {
    abilitiesVideo,
    isLoading,
    urlAbilityVideo,
    abilityActive,
    indexAbilityActive,
    handleClick,
  };
}
