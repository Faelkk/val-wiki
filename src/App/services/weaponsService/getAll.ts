import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get("/weapons?language=pt-BR")

    return data.data
}