import { Agent } from "../../../../../App/entities/Agents";

import CardGeneralInfo from "../cardGeneralInfo/CardGeneralInfo";
import CardAbilities from "../cardAbilities/CardAbilities";

interface CardAgentByIdProps {
  agentsById: Agent;
}

const CardAgentById = ({ agentsById }: CardAgentByIdProps) => {
  if (!agentsById) return null;

  return (
    <>
      <section className="flex my-10 items-center justify-center ">
        <section className="flex items-center lg:items-stretch flex-col lg:flex-row  w-[95%] md:w-[80%]  p-3 rounded-md gap-10 g-[#14191f] ">
          <CardGeneralInfo agentsById={agentsById as Agent} />
          <CardAbilities agentsById={agentsById as Agent} />
        </section>
      </section>
    </>
  );
};

export default CardAgentById;
