import { Agents } from "../../../../App/entities/Agents";

interface CardGeneralInfoProps {
  agentesById: Agents;
}

const CardGeneralInfo = ({ agentesById }: CardGeneralInfoProps) => {
  return (
    <section>
      <img src={agentesById.fullPortraitV2} />
      <h2>{agentesById.displayName}</h2>
      <span>{agentesById.role?.displayName}</span>
      <p>{agentesById.description}</p>
    </section>
  );
};

export default CardGeneralInfo;
