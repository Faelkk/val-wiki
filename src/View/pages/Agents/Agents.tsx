import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import Card from "./components/Card";
import { useAgentsController } from "./useAgentsController";

const Agents = () => {
  const { agents, isLoading } = useAgentsController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (agents && !isLoading)
    return (
      <>
        <Container>
          <section className="">
            <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Agentes</h2>

            <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-6">
              {agents &&
                agents.map((agente) => {
                  return <Card key={agente.uuid} agente={agente} />;
                })}
            </div>
          </section>
        </Container>
      </>
    );
};

export default Agents;
