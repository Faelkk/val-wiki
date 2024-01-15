import { Agent } from "../../../../App/entities/Agents";
interface CardGeneralInfoProps {
  agentsById: Agent;
}

const CardGeneralInfo = ({ agentsById }: CardGeneralInfoProps) => {
  if (!agentsById) return null;

  return (
    <>
      <section className="flex flex-col  lg:w-[50%]">
        <figure className="flex justify-center items-center bg-blueVariation2-950 rounded-sm relative border border-fuscous-gray-100">
          <img
            src={agentsById.fullPortraitV2}
            alt={agentsById.displayName}
            className="h-[400px] w-[300px] object-cover"
          />
        </figure>
        <section className="mt-4 bg-[#14191f] p-2  small:p-6 flex-1  relative ">
          <h2 className="text-fuscous-gray-50 text-2xl uppercase tracking-[.07rem] font-bold mt-2 mb-4">
            {agentsById.displayName}
          </h2>
          <span className="text-fuscous-gray-300 uppercase font-bold mb">
            {agentsById.role?.displayName}
          </span>
          <p className="text-fuscous-gray-50  mt-6 text-[1.1rem]">
            {agentsById.description}
          </p>
        </section>
      </section>
    </>
  );
};

export default CardGeneralInfo;
