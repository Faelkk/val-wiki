
import { WeaponFetch } from "../../entities/Weapon";
import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get<WeaponFetch | null>("/weapons?language=pt-BR")

    return data?.data
}