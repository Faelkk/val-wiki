import { useAgents } from "../../../App/hooks/useAgents";


export function useAgentsController() {
    const {agents,isLoading} = useAgents()
    

    return {agents,isLoading}
}
