import { useQuery } from "@tanstack/react-query";
import { cardsService } from "../services/cardsService";
import { playerCard } from "../entities/Cards";

export function useCards() {
  const { data, isFetching } = useQuery<playerCard[] | null>({
    queryKey: ["Cards"],
    queryFn: cardsService.getAll,
    staleTime: Infinity,
  });

  return { PlayersCards: data ?? [], isLoading: isFetching };
}
