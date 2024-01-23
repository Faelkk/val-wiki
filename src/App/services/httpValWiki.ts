import axios from "axios";
import { sleep } from "../utils/sleep";

export const httpClientValWiki = axios.create({
  baseURL: import.meta.env.VITE_VALORANT_API_VAL_WIKI,
});

httpClientValWiki.interceptors.request.use(async (config) => {
  await sleep(500);
  const jwtToken = import.meta.env.VITE_JWT_SERVICE;

  config.headers.Authorization = `Bearer ${jwtToken}`;

  return config;
});
