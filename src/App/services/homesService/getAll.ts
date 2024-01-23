import { httpClientValWiki } from "../httpValWiki";

export async function getAll() {
  const { data } = await httpClientValWiki.get("/home");

  return data;
}
