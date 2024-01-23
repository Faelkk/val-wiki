import { AgentAbilities } from "../../entities/AgentsAbilitiesVideo";
import { httpClientValWiki } from "../httpValWiki";

export async function getAll() {
  const { data } = await httpClientValWiki.get<AgentAbilities[] | null>(
    "/abilities"
  );

  return data;
}
