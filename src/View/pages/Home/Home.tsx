import { Link } from "react-router-dom";
import TitleValorant from "../../../assets/titleValorant";
import bgVideoUrl from "../../../assets/videos/254cf66c-7f37-465a-9333-d53465138840.mp4";

const Home = () => {
  return (
    <main className="relative h-full flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        src={bgVideoUrl}
      />

      <div className="text-center z-20 fixed">
        <TitleValorant
          currentColor="#FFF"
          className="w-[300px] small2:w-[400px]  md:w-[600px] lg:w-[800px] h-32 mx-auto my-8"
        />

        <button className="border border-fuscous-gray-900 p-2 mt-8 hover:scale-105 transition-transform">
          <Link
            to="https://www.youtube.com/watch?v=e_E9W2vsRbQ"
            className="bg-redVariation2-450 w-[250px] h-[52px] flex items-center justify-center text-fuscous-gray-50  font-bold uppercase "
            target="_blank"
          >
            Assista o trailer
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Home;
