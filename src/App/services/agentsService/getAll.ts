import { AgentsFetch } from "../../entities/Agents";
import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get<AgentsFetch | null>("/agents?isPlayableCharacter=true&language=pt-BR")
    
    return data?.data
}