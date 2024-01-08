import { Link } from "react-router-dom";
import { Agents, AgentsFetch } from "../../../../App/entities/Agents";
import { useAgentsController } from "../../Agents/useAgentsController";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "../../../../App/utils/cn";

interface HeaderAgentsProps {
  agentsById: Agents;
}

const HeaderAgents = ({ agentsById }: HeaderAgentsProps) => {
  const { agents } = useAgentsController();
  const agentsTyped = agents as AgentsFetch | null;

  if (agentsTyped?.data && agentsById)
    return (
      <header className="w-full flex justify-center">
        <nav className="flex flex-col relative   md:flex-row items-center justify-between w-[90%]">
          <div className="absolute top-0 left-0 md:static">
            <Link to="/agents" className="flex gap-3">
              <ArrowLeftIcon className="text-fuscous-gray-100 h-6 w-6" />
              <span className="text-fuscous-gray-100 font-bold">Voltar</span>
            </Link>
          </div>
          <div className="overflow-x-auto md:ml-6 custom-scrollbarHeader p-3 bg-fuscous-gray-980 rounded-sm mt-10 md:mt-0">
            <ul className="flex gap-4 whitespace-nowrap  ">
              {agentsTyped?.data.map((agente) => {
                return (
                  <li
                    key={agente.uuid}
                    className={cn(
                      "flex-shrink-0  hover:scale-110 transition-transform",
                      agente.uuid === agentsById.uuid
                        ? "border-b-[2px] border-blueVariation-500"
                        : ""
                    )}
                  >
                    <Link to={`/agents/${agente.uuid}`}>
                      <img
                        src={agente.displayIcon}
                        alt={agente.displayName}
                        className="w-10 h-10 object-cover"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    );
};

export default HeaderAgents;