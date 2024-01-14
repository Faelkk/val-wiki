import Container from "../../Components/Container";
import HomeInfoMore from "./components/HomeInfoMore";
import PageHome from "./components/PageHome";

const Home = () => {
  return (
    <main className="">
      <Container className="my-4 h-full w-full max-[1400px] default:max-w-[1600px] bg-blueVariation-920">
        <PageHome />
        <HomeInfoMore />
      </Container>
    </main>
  );
};

export default Home;
