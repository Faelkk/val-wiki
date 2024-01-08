import { Navigate } from "react-router-dom";
import { useAgentsByIdController } from "./useAgentsController";
import HeaderAgents from "./components/HeaderAgents";
import { AgentFetch, Agents } from "../../../App/entities/Agents";
import CardGeneralInfo from "./components/CardGeneralInfo";
import CardAbilities from "./components/CardAbilities";

const AgentsById = () => {
  const { agentsById, isLoading, error } = useAgentsByIdController();

  console.log(agentsById);

  const agentsByIdTyped = agentsById as AgentFetch;
  if (error) return <Navigate to="/pageNotFound" />;

  if (isLoading) return <span> Carregando...</span>;

  if (agentsByIdTyped)
    return (
      <section className="my-4">
        <HeaderAgents agentsById={agentsByIdTyped.data as Agents} />
        <CardGeneralInfo agentesById={agentsByIdTyped.data as Agents} />
        <CardAbilities agentesById={agentsByIdTyped.data as Agents} />
      </section>
    );
};

export default AgentsById;
