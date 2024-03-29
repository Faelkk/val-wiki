import { Link } from "react-router-dom";
import { Agent } from "../../../../App/entities/Agents";
import ImageSkeleton from "../../../Components/Skeleton";

interface CardProps {
  agente: Agent;
}

const Card = ({ agente }: CardProps) => {
  return (
    <Link to={`/agents/${agente.uuid}`} className="relative">
      <div className="h-64   overflow-hidden relative bg-agent before:content-[''] border-[1px] border-blueVariation2-500 before:block before:w-full before:h-full before:absolute before:top-0 before:border-[2rem] before:border-[#0F141A] before:box-border  ">
        <ImageSkeleton
          className="w-[80%] object-cover object-top-top h-[28rem] absolute my-4 mx-12 opacity-0"
          src={agente.fullPortrait!}
          alt={`Imagem do agente ${agente.displayName}`}
        />
        <h2 className="absolute left-4 bottom-4 text-fuscous-gray-50 font-semibold uppercase text-[1.5rem] tracking-wide">
          {agente.displayName}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
