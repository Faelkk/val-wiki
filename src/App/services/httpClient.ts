import axios from "axios";
import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_VALORANT_API_URL,
});

httpClient.interceptors.request.use(async (data) => {
    await sleep(500)
    return data
})