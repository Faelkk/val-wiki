import { Home } from "../../entities/Home";
import { httpClientValWiki } from "../httpValWiki";

export async function getAll() {
  const { data } = await httpClientValWiki.get<Home[] | null>("/home");

  return data;
}
