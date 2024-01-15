import { Agent } from "../../../../../App/entities/Agents";
import { useCardAbilities } from "./useCardAbilities";

interface CardAbilitiesProps {
  agentsById: Agent;
}

const CardAbilities = ({ agentsById }: CardAbilitiesProps) => {
  const { abilityActive, urlAbilityVideo, handleClick } =
    useCardAbilities(agentsById);

  if (agentsById && agentsById.abilities) {
    return (
      <section className="flex flex-col  rounded-sm  lg:w-[50%]">
        <div className="w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload"
            className="w-full object-cover h-[400px]"
            src={urlAbilityVideo}
          />
        </div>

        <div className="mt-4 flex-1 bg-[#14191f] p-2 small:p-6 flex flex-col gap-4 ">
          <span className="text-fuscous-gray-300 font-bold uppercase ">
            Habilidades
          </span>
          <div className="flex gap-2 md:gap-6">
            {agentsById.abilities.map((abilities, index) => {
              if (abilities.displayIcon !== null)
                return (
                  <button
                    className="border-[1px]  p-2 rounded-sm hover:scale-105 transition-transform"
                    onClick={() => handleClick(abilities, index)}
                    key={abilities.displayName}
                  >
                    <img
                      src={abilities.displayIcon}
                      alt={abilities.displayName}
                      className="small:w-12 small:h-12"
                    />
                  </button>
                );
            })}
          </div>
          <div className="flex flex-col ">
            <span className="text-fuscous-gray-50 text-[1.3rem] uppercase tracking-[.07rem] font-bold mb-2">
              {abilityActive?.displayName}
            </span>
            <span className="text-fuscous-gray-50 text-[.9rem] ">
              {abilityActive?.description}
            </span>
          </div>
        </div>
      </section>
    );
  }
};

export default CardAbilities;
