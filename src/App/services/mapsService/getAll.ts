
import { MapsFetch } from "../../entities/Mapas";
import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get<MapsFetch | null | undefined>("/maps?language=pt-BR")

    return data?.data
}