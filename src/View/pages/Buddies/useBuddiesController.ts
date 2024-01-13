import { ChangeEvent, useMemo, useState } from "react";
import usePagination from "../../../App/hooks/usePagination";
import { useBuddies } from "../../../App/hooks/useBuddies";
import { Buddies } from "../../../App/entities/Buddies";

export function useBuddiesController() {
  const [searchBuddies, setSearchBuddies] = useState("");

  const { Buddies, isLoading } = useBuddies();
  const { visibleItems, handleShowMore } = usePagination();

  const buddiesFiltered = useMemo(
    () =>
      Buddies?.filter((chaveiro: Buddies) =>
        chaveiro.displayName.toLowerCase().includes(searchBuddies.toLowerCase())
      ),
    [Buddies, searchBuddies]
  );

  function handleChangeSearchBuddies(event: ChangeEvent<HTMLInputElement>) {
    setSearchBuddies(event.target.value);
  }

  return {
    Buddies,
    isLoading,
    visibleItems,
    buddiesFiltered,
    searchBuddies,
    handleChangeSearchBuddies,
    handleShowMore,
  };
}
