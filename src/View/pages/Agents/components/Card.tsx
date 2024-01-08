import { Link } from "react-router-dom";
import { Agents } from "../../../../App/entities/Agents";

interface CardProps {
  agente: Agents;
}

const Card = ({ agente }: CardProps) => {
  console.log(agente);

  return (
    <Link to={`/${agente.uuid}`} className="relative">
      <div className="h-64 border-[1px] border-blueVariation2-500  overflow-hidden relative bg-agent before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:border-[2rem] before:border-[#0F141A] before:box-border">
        <img
          className="w-[80%] object-cover object-top-top h-[28rem] absolute my-4 mx-12 "
          src={agente.fullPortrait}
        />
        <h2 className="absolute left-4 bottom-4 text-fuscous-gray-50 font-semibold uppercase text-[1.5rem] tracking-wide">
          {agente.displayName}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
