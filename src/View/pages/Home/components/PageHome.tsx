import YouTube from "react-youtube";
import TitleValorant from "../../../../assets/titleValorant";
import { Link } from "react-router-dom";

const PageHome = () => {
  return (
    <div className="mt-4 lg:mt-8 flex justify-center ">
      <section className="w-[90%] gap-8 lg:w-[95%] flex flex-col lg:flex-row justify-center items-center lg:justify-between mb-4">
        <div className="flex flex-col  h-full w-[100%] relative  rounded-sm  ">
          <h2 className="mt-4 lg:mt-0">
            <TitleValorant
              currentColor="#FFF"
              className=" lowScreen:w-[250px] small:w-[300px] pp:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[95%]"
            />
          </h2>
          <p className="text-fuscous-gray-400  text-[1rem] lg:text-[1.1rem] mt-12 w-full ">
            VALORANT é um FPS tático 5x5 competitivo focado em personagens que
            se passa no mundo todo. Faça jogadas incríveis e supere seus
            oponentes com habilidades táticas, mecânica de tiro e trabalho em
            equipe.
          </p>

          <div className="w-full lg:absolute bottom-4">
            <Link
              to="   https://www.youtube.com/watch?v=e_E9W2vsRbQ"
              className="flex items-center justify-center mt-8 bg-redVariation2-450  h-[52px] w-full small2:w-[250px]  rounded-sm text-fuscous-gray-100 font-bold uppercase border  border-fuscous-gray-500 hover:bg-[#b9414b] transition-colors"
            >
              Assista o trailer
            </Link>
          </div>
        </div>

        <div className="w-full ">
          <YouTube
            iframeClassName="block w-[100%] h-full object-contain"
            videoId="e_E9W2vsRbQ"
            className="w-full object-contain h-[300px] md:h-[400px]"
          />
        </div>
      </section>
    </div>
  );
};

export default PageHome;
