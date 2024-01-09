import Spinner from "../../Components/Spinner";
import Card from "./components/Card";
import { useAgentsController } from "./useAgentsController";

const Agents = () => {
  const { agents, isLoading } = useAgentsController();

  if (agents)
    return (
      <>
        {isLoading && (
          <div className="flex items-center justify-center h-full w-full">
            <Spinner className="text-blueVariation-900 fill-white w-10 h-10" />
          </div>
        )}
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
              {agents &&
                agents.map((agente) => {
                  return <Card key={agente.uuid} agente={agente} />;
                })}
            </div>
          </section>
        </section>
      </>
    );
};

export default Agents;
