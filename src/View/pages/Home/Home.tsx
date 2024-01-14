import YouTube from "react-youtube";
import TitleValorant from "../../../assets/titleValorant";
import Container from "../../Components/Container";
import { urlVideoHome } from "../../../mocks/urlHomeVideo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="">
      <Container className="my-4 h-full w-full max-[1400px] default:max-w-[1600px] bg-blueVariation-920">
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
                VALORANT é um FPS tático 5x5 competitivo focado em personagens
                que se passa no mundo todo. Faça jogadas incríveis e supere seus
                oponentes com habilidades táticas, mecânica de tiro e trabalho
                em equipe.
              </p>
              <div className="w-full lg:absolute bottom-4">
                <button className="flex mt-8 bg-redVariation2-450  h-[52px] w-full small2:w-[250px]  rounded-sm text-fuscous-gray-100 font-bold uppercase border  border-fuscous-gray-500 hover:bg-[#b9414b] transition-colors">
                  <a
                    className="w-full h-full flex justify-center items-center text-[1rem]"
                    href="https://www.youtube.com/watch?v=e_E9W2vsRbQ"
                    target="_blank"
                  >
                    Assista o trailer
                  </a>
                </button>
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

        <section className="flex justify-center mt-4">
          <div className=" w-[90%] gap-8 lg:w-[95%] flex flex-col-reverse lg:flex-row justify-center  lg:justify-between mb-4  ">
            <div className="relative w-full border-[2px] border-blueVariation-700">
              <div className=" before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:border-[2rem] before:border-blueVariation-920 before:box-border  transition-all ">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload"
                  className="w-full object-cover h-[300px] md:h-[400px] "
                  src={urlVideoHome.urlHomeVideo}
                />
              </div>
            </div>
            <div className="w-full rounded-sm relative">
              <h2 className="text-fuscous-gray-50 font-bold text-[1.8rem] tracking-wide uppercase">
                Saiba mais
              </h2>
              <p className="text-fuscous-gray-400  text-[1rem] lg:text-[1.1rem]  mt-4 w-full ">
                Explore o nosso site dedicado ao universo de Valorant, onde você
                pode acessar informações de forma rápida e descomplicada.
                Navegue por detalhes abrangentes sobre agentes, skins, mapas,
                chaveiros e cards, todos consolidados em um ambiente intuitivo.
                Aprofunde-se no mundo do Valorant conosco e encontre tudo o que
                você precisa, tornando a sua experiência de busca ainda mais
                satisfatória e completa.
              </p>

              <ul className="flex flex-wrap mt-3 lg:mt-0 gap-4 lg:absolute lg:bottom-0">
                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center  bg-fuscous-gray-950 p-2 rounded-sm  list-none hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/agents">Agentes</Link>
                </li>
                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/weapons">Arsenal</Link>
                </li>

                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/cards">Cards</Link>
                </li>
                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/Buddies">Chaveiro</Link>
                </li>

                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/maps">Mapas</Link>
                </li>

                <li className="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/sprays">Sprays</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
