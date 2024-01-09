import { useState } from "react";
import { Agents } from "../../../../App/entities/Agents";

interface CardAbilitiesProps {
  agentsById: Agents;
}

const CardAbilities = ({ agentsById }: CardAbilitiesProps) => {
  const [abilityActive, setAbilityActive] = useState(
    agentsById?.abilities?.[0] || null
  );

  if (agentsById && agentsById.abilities)
    return (
      <section className="flex flex-col  rounded-sm  lg:w-[50%]">
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload"
            className="w-full object-cover h-[400px] "
          >
            <source src="https://blitz-cdn-videos.blitz.gg/valorant/agents/astra/abilities/Astra_C.mp4#t=0.1" />
          </video>
        </div>

        <div className="mt-4 flex-1 bg-[#14191f] p-2 small:p-6 flex flex-col gap-4 ">
          <span className="text-fuscous-gray-300 font-bold uppercase ">
            Habilidades
          </span>
          <div className="flex gap-2 md:gap-6">
            {agentsById.abilities.map((abilities) => {
              if (abilities.displayIcon !== null)
                return (
                  <button
                    className="border-[1px]  p-2 rounded-sm"
                    onClick={() => setAbilityActive(abilities)}
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
};

export default CardAbilities;
