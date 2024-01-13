import { Spray } from "../../../../App/entities/Sprays";

interface SprayCardsProps {
  spray: Spray;
}

const SprayCards = ({ spray }: SprayCardsProps) => {
  return (
    <div className="flex w-[300px] flex-col items-center p-3 rounded-md bg-blueVariation-920">
      <h2 className=" text-fuscous-gray-100 font-bold text-center">
        {spray.displayName}
      </h2>
      <img
        alt={spray.displayName}
        src={spray.displayIcon}
        className="w-[200px]  object-scale-down mt-4"
      />
    </div>
  );
};

export default SprayCards;
