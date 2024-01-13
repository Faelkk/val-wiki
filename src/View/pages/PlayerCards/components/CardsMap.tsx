import { playerCard } from "../../../../App/entities/Cards";

interface CardsMapProps {
  PlayerCard: playerCard;
}

const CardsMap = ({ PlayerCard }: CardsMapProps) => {
  console.log(PlayerCard);

  return (
    <div className="flex w-[300px] flex-col items-center p-3 rounded-md bg-blueVariation-920">
      <h2 className=" text-fuscous-gray-100 font-bold text-center">
        {PlayerCard.displayName}
      </h2>
      <img
        alt={PlayerCard.displayName}
        src={PlayerCard.largeArt}
        className="w-[300px] h-[200px] object-scale-down mt-4"
      />
    </div>
  );
};

export default CardsMap;
