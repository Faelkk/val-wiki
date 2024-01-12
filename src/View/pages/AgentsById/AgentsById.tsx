import { Navigate } from "react-router-dom";
import { useAgentsByIdController } from "./useAgentsController";
import HeaderAgents from "./components/HeaderAgents";
import CardAgentById from "./components/CardAgentById";
import Spinner from "../../Components/Spinner";
import { Agent } from "../../../App/entities/Agents";
import { useAgents } from "../../../App/hooks/useAgents";

const AgentsById = () => {
  const { agentsById, isLoading, error } = useAgentsByIdController();
  const { agents } = useAgents();
  const agentsByIdTyped = agentsById as Agent;

  if (isLoading)
    return (
      <>
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="text-blueVariation-900 fill-white w-10 h-10" />
        </div>
        ;
      </>
    );

  if (error) return <Navigate to="/pageNotFound" />;

  if (agentsById && agents && !isLoading)
    return (
      <>
        {agentsByIdTyped && (
          <section className="my-4">
            <HeaderAgents agentsById={agentsByIdTyped} agents={agents} />
            <CardAgentById agentsById={agentsByIdTyped} />
          </section>
        )}
      </>
    );
};

export default AgentsById;
