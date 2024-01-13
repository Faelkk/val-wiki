import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAgentsById } from "../../../App/hooks/useAgentsById";
import { isUUID } from "../../../App/utils/isUUID";



export function useAgentsByIdController() {
    const { id } = useParams();
    const { agentsById, isLoading,refetch } = useAgentsById(id!);
    const [error, setIsError] = useState(false);
    
    useEffect(() => {
        refetch()
      },[id,refetch])

    

    if (!id || !isUUID(id)) {
        if (!error) {
            setIsError(true);
        }
        return { agentsById: null, isLoading: false, error };
    }

 



    return { agentsById, isLoading, };
}