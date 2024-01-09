import { useState } from "react";
import { Agents } from "../../../../App/entities/Agents";

interface CardAbilitiesProps {
  agentesById: Agents;
}

const CardAbilities = ({ agentesById }: CardAbilitiesProps) => {
  const [abilityActive, setAbilityActive] = useState(agentesById.abilities[0]);

  return (
    <section className="pb-3 rounded-sm bg-[#14191f] lg:w-[50%]">
      <div className="mt-5">
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

      <div className="mt-4 p-5 flex flex-col gap-4">
        <span className="text-fuscous-gray-300 font-bold uppercase ">
          Habilidades
        </span>
        <div className="flex  gap-6">
          {agentesById.abilities.map((abilities) => {
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
                    className="w-12 h-12"
                  />
                </button>
              );
          })}
        </div>
        <div className="flex flex-col">
          <span className="text-fuscous-gray-50 text-[1.2rem] uppercase tracking-[.07rem] font-bold">
            {abilityActive?.displayName}
          </span>
          <span className="text-fuscous-gray-50">
            {abilityActive?.description}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CardAbilities;
