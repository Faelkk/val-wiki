import { Buddies, BuddiesFetch } from "../../entities/Buddies";
import { httpClient } from "../httpClient";

export async function getAll() {
  const { data } = await httpClient.get<BuddiesFetch | null>(
    "/buddies?language=pt-BR"
  );

  return data?.data as Buddies[];
}
