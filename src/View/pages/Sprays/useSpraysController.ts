import { ChangeEvent, useMemo, useState } from "react";
import { Spray } from "../../../App/entities/Sprays";
import { useSprays } from "../../../App/hooks/useSprays";

export function useSpraysController () {
    const { Sprays, isLoading } = useSprays();


    const [searchSpray,setSearchSpray] = useState('')
    

    const spraysFiltered = useMemo(() => Sprays?.filter((spray: Spray) => spray.displayName.toLowerCase().includes(searchSpray.toLowerCase())),[Sprays,searchSpray])

    function handleChangeSearchSpray(event: ChangeEvent<HTMLInputElement>) {
        setSearchSpray(event.target.value)
    }


    return { spraysFiltered,searchSpray,isLoading,handleChangeSearchSpray}
}