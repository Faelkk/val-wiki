
import { useMaps } from "../../../App/hooks/useMaps";


export function useMapsController() {
    const {maps,isLoading} = useMaps()
    

    return {maps,isLoading}
}
