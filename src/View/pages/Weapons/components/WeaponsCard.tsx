import { Weapon } from "../../../../App/entities/Weapon";

interface WeaponsCardProps {
  weapon: Weapon;
  onClick: (weapon: Weapon) => void;
}

const WeaponsCard = ({ weapon, onClick }: WeaponsCardProps) => {
  return (
    <div
      className="flex flex-col cursor-pointer justify-center items-center  relative h-[250px] border-[1px] border-blueVariation2-500  bg-agent bg-no-repeat bg-cover lg:before:content-[''] lg:before:block lg:before:w-full lg:before:h-full lg:before:absolute lg:before:top-0 lg:before:border-[2rem] lg:before:border-[#0F141A] lg:before:box-border"
      onClick={() => onClick(weapon)}
    >
      <h2 className="absolute bottom-0 left-0 text-[1.8rem] text-fuscous-gray-100 p-4 font-semibold ">
        {weapon.displayName}
      </h2>
      <img
        src={weapon.displayIcon}
        className=" w-[320px] lg:w-[400px] object-contain h-[150px]"
      />
    </div>
  );
};

export default WeaponsCard;
