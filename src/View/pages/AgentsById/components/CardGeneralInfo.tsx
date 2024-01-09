import { Agents } from "../../../../App/entities/Agents";
interface CardGeneralInfoProps {
  agentesById: Agents;
}

const CardGeneralInfo = ({ agentesById }: CardGeneralInfoProps) => {
  return (
    <>
      <section className="flex flex-col  lg:w-[50%]">
        <figure className="flex justify-center items-center bg-blueVariation2-950 rounded-sm relative">
          <img
            src={agentesById.background}
            className="hidden w-[200px] h-[200px] object-cover left-0 "
          />
          <img
            src={agentesById.background}
            className="hidden w-[200px] h-[200px] object-cover left-0 "
          />
          <img
            src={agentesById.fullPortraitV2}
            alt={agentesById.displayName}
            className="h-[400px] w-[300px] object-cover"
          />
        </figure>
        <section className="mt-4 bg-[#14191f] p-2  small:p-6 flex-1  relative ">
          <h2 className="text-fuscous-gray-50 text-2xl uppercase tracking-[.07rem] font-bold mt-2 mb-4">
            {agentesById.displayName}
          </h2>
          <span className="text-fuscous-gray-300 uppercase font-bold mb">
            {agentesById.role?.displayName}
          </span>
          <p className="text-fuscous-gray-50  mt-6 text-[1.1rem]">
            {agentesById.description}
          </p>
        </section>
      </section>
    </>
  );
};

export default CardGeneralInfo;
