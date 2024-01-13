import { Buddies } from "../../../../App/entities/Buddies";

interface BuddiesCardsProps {
  buddies: Buddies;
}

const BuddiesCards = ({ buddies }: BuddiesCardsProps) => {
  console.log(buddies);

  return (
    <div className="flex w-[300px] flex-col items-center p-3 rounded-md bg-blueVariation-920">
      <h2 className="text-fuscous-gray-100 font-bold text-center">
        {buddies.displayName}
      </h2>
      <figure>
        <img
          src={buddies.displayIcon}
          alt={buddies.displayName}
          className="w-[200px] h-[200px]  object-scale-down mt-4"
        />
      </figure>
    </div>
  );
};

export default BuddiesCards;
