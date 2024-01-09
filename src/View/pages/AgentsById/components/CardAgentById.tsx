import { Agents } from "../../../../App/entities/Agents";
import CardAbilities from "./CardAbilities";
import CardGeneralInfo from "./CardGeneralInfo";

interface CardAgentByIdProps {
  agentsById: Agents;
}

const CardAgentById = ({ agentsById }: CardAgentByIdProps) => {
  if (!agentsById) return null;

  return (
    <>
      <section className="flex my-10 items-center justify-center ">
        <section className="flex items-center lg:items-stretch flex-col lg:flex-row  w-[95%] md:w-[80%]  p-3 rounded-md gap-10 g-[#14191f] ">
          <CardGeneralInfo agentsById={agentsById as Agents} />
          <CardAbilities agentsById={agentsById as Agents} />
        </section>
      </section>
    </>
  );
};

export default CardAgentById;
