import { Spray, SpraysFetch } from "../../entities/Sprays";
import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get<SpraysFetch | null>("/sprays?language=pt-BR")

    return data?.data as Spray[]
}