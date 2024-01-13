import { ChangeEvent, useMemo, useState } from "react";
import { Spray } from "../../../App/entities/Sprays";
import { useSprays } from "../../../App/hooks/useSprays";
import usePagination from "../../../App/hooks/usePagination";

export function useSpraysController () {
    const { Sprays, isLoading } = useSprays();
    const {visibleItems,handleShowMore} = usePagination()
    const [searchSpray,setSearchSpray] = useState('')
    const spraysFiltered = useMemo(() => Sprays?.filter((spray: Spray) => spray.displayName.toLowerCase().includes(searchSpray.toLowerCase())),[Sprays,searchSpray])

    function handleChangeSearchSpray(event: ChangeEvent<HTMLInputElement>) {
        setSearchSpray(event.target.value)
    }

   

    return { visibleItems,spraysFiltered,searchSpray,isLoading,handleChangeSearchSpray,handleShowMore}
}