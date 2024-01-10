import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import { useMapsController } from "./UseMapsController";
import SwiperSlideMaps from "./components/SwiperSlideMaps";

const Maps = () => {
  const { maps, isLoading } = useMapsController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (maps && !isLoading) {
    return (
      <Container>
        <h1 className="text-[1.8rem] text-fuscous-gray-100 p-4">Mapas</h1>
        <SwiperSlideMaps maps={maps} />
      </Container>
    );
  }

  return null;
};

export default Maps;
