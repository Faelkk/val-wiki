import { Navigate } from "react-router-dom";
import { useAgentsByIdController } from "./useAgentsController";
import HeaderAgents from "./components/HeaderAgents";
import CardAgentById from "./components/CardAgentById";
import { Agent } from "../../../App/entities/Agents";
import { useAgents } from "../../../App/hooks/useAgents";
import Loading from "../../Components/Loading";

const AgentsById = () => {
  const { agentsById, isLoading, error } = useAgentsByIdController();
  const { agents } = useAgents();
  const agentsByIdTyped = agentsById as Agent;

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (error) return <Navigate to="/pageNotFound" />;

  if (agentsById && agents && !isLoading)
    return (
      <>
        {agentsByIdTyped && (
          <section className="h-full">
            <HeaderAgents agentsById={agentsByIdTyped} agents={agents} />
            <CardAgentById agentsById={agentsByIdTyped} />
          </section>
        )}
      </>
    );
};

export default AgentsById;
