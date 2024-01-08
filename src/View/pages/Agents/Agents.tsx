import { AgentsFetch } from "../../../App/entities/Agents";
import Card from "./components/Card";
import { useAgentsController } from "./useAgentsController";

const Agents = () => {
  const { agents, isLoading } = useAgentsController();
  const agentTyped = agents as AgentsFetch | null;

  if (isLoading) {
    return <p>Carregando...</p>;
  }
  if (agentTyped)
    return (
      <section
        className="flex flex-col
        static
      max-w-[1400px]
     w-[calc(100%_-_2rem)]
      my-4 mx-auto"
      >
        <section className="">
          <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Agentes</h2>

          <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-6 ">
            {agentTyped.data &&
              agentTyped.data.map((agente) => {
                return <Card key={agente.uuid} agente={agente} />;
              })}
          </div>
        </section>
      </section>
    );
};

export default Agents;
