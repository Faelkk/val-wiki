import { Agents } from "../../../../App/entities/Agents";

interface CardAbilitiesProps {
  agentesById: Agents;
}

const CardAbilities = ({ agentesById }: CardAbilitiesProps) => {
  return (
    <section>
      <div>
        <video>
          <source src="https://blitz-cdn-videos.blitz.gg/valorant/agents/astra/abilities/Astra_C.mp4#t=0.1" />
        </video>
      </div>

      <div>
        {agentesById.abilities.map((abilities) => {
          if (abilities.displayIcon !== undefined)
            return (
              <div>
                <img src={abilities.displayIcon} />
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default CardAbilities;
