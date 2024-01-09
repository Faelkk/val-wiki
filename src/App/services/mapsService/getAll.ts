import { httpClient } from "../httpClient";

export async function getAll() {
    const {data} = await httpClient.get("/maps?language=pt-BR")

    return data.data
}