import { AgentFetch, Agent } from "../../entities/Agents";
import { httpClient } from "../httpClient";

export async function getById(agentsId: string) {
  const { data } = await httpClient.get<AgentFetch | null>(
    `/agents/${agentsId}?isPlayableCharacter=true&language=pt-BR`
  );

  return data?.data as Agent;
}
