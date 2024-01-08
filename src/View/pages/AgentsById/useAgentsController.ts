/* eslint-disable react-hooks/rules-of-hooks */
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAgentsById } from "../../../App/hooks/useAgentsById";
import { isUUID } from "../../../App/utils/isUUID";



export function useAgentsByIdController() {
    const { id } = useParams();
    const [error, setIsError] = useState(false);
    
    const { agentsById, isLoading,refetch } = useAgentsById(id!);

    

    if (!id || !isUUID(id)) {
        if (!error) {
            setIsError(true);
        }
        return { agentsById: null, isLoading: false, error };
    }

    useEffect(() => {
      refetch()
    },[id,refetch])



    return { agentsById, isLoading, };
}