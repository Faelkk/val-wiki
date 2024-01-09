import { Navigate } from "react-router-dom";
import { useAgentsByIdController } from "./useAgentsController";
import HeaderAgents from "./components/HeaderAgents";
import { AgentFetch, Agents } from "../../../App/entities/Agents";
import CardAgentById from "./components/CardAgentById";
import Spinner from "../../Components/Spinner";

const AgentsById = () => {
  const { agentsById, isLoading, error } = useAgentsByIdController();

  console.log(agentsById);

  const agentsByIdTyped = agentsById as AgentFetch;
  if (error) return <Navigate to="/pageNotFound" />;

  if (!agentsByIdTyped) return null;
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="text-blueVariation-900 fill-white w-10 h-10" />
        </div>
      )}
      <section className="my-4">
        <HeaderAgents agentsById={agentsByIdTyped.data as Agents} />
        <CardAgentById agentsByIdTyped={agentsByIdTyped} />
      </section>
    </>
  );
};

export default AgentsById;
