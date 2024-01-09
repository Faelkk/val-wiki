import { useEffect, useState } from "react";
import { Ability, Agents } from "../../../../../App/entities/Agents";
import { agentsAbilities } from "../../../../../mocks/urlAbilitysValorant";




export function useCardAbilities(agentsById: Agents) {
const [abilityActive, setAbilityActive] = useState((agentsById as { abilities: Ability[] }).abilities[0]);
  const [indexAbilityActive, setIndexAbilityActive] = useState(0);
  const [urlAbilityVideo,setAbilityUrlVideo] = useState('')

  const nameAgent = agentsById?.displayName.toLowerCase()

  function handleClick(abilities: Ability,index: number){
    setAbilityActive(abilities);
    setIndexAbilityActive(index);
  }

  function getAbilityUrlVideo(agentName: string,indexAbility: number) {
    const agent = agentsAbilities[agentName]
  
    if(agent && agent.abilities){
      const AbilityArray = Object.values(agent.abilities)
      const ability = AbilityArray[indexAbility]     
      if(ability) {     
        setAbilityUrlVideo(ability as string)
        
      } else {
        return null
      }
    }
    else {
      return null
    }
  }

  useEffect(() => {
    getAbilityUrlVideo(nameAgent,indexAbilityActive | 0)
  })


  return {urlAbilityVideo,abilityActive,indexAbilityActive,handleClick}

}
