import { useSprays } from "../../../App/hooks/useSprays";
import Container from "../../Components/Container";
import Loading from "../../Components/Loading";

const Sprays = () => {
  const { Sprays, isLoading } = useSprays();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (Sprays)
    return (
      <Container>
        <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Sprays</h2>

        <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md place-items-center">
          {Sprays.map((spray) => {
            return (
              <div className="flex w-[300px] flex-col items-center p-3 rounded-md bg-blueVariation-920">
                <h2 className=" text-fuscous-gray-100 font-bold text-center">
                  {spray.displayName}
                </h2>
                <img
                  alt={spray.displayName}
                  src={spray.displayIcon}
                  className="w-[200px]  object-scale-down   mt-4"
                />
              </div>
            );
          })}
        </div>
      </Container>
    );
};

export default Sprays;
