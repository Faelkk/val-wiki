import { ChangeEvent, useMemo, useState } from "react";
import usePagination from "../../../App/hooks/usePagination";

import { useCards } from "../../../App/hooks/useCards";
import { playerCard } from "../../../App/entities/Cards";

export function usePlayerCardController() {
  const [searchPlayerCards, setSearchPlayerCards] = useState("");

  const { PlayersCards, isLoading } = useCards();
  const { visibleItems, handleShowMore } = usePagination();

  const PlayerCardsFiltered = useMemo(
    () =>
      PlayersCards?.filter((card: playerCard) =>
        card.displayName.toLowerCase().includes(searchPlayerCards.toLowerCase())
      ),
    [PlayersCards, searchPlayerCards]
  );

  function handleChangeSearchPlayerCards(event: ChangeEvent<HTMLInputElement>) {
    setSearchPlayerCards(event.target.value);
  }

  return {
    PlayersCards,
    isLoading,
    visibleItems,
    PlayerCardsFiltered,
    searchPlayerCards,
    handleChangeSearchPlayerCards,
    handleShowMore,
  };
}
