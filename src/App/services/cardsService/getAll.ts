import { PlayerCardsFetch, playerCard } from "../../entities/Cards";
import { httpClient } from "../httpClient";

export async function getAll() {
  const { data } = await httpClient.get<PlayerCardsFetch | null>(
    "/playercards?language=pt-BR"
  );

  return data?.data as playerCard[];
}
