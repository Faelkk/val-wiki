import { urlVideoHome } from "../../../../mocks/urlHomeVideo";
import LinksNavigation from "../../../Components/LinksNavigation";

const HomeInfoMore = () => {
  const { urlHomeVideo } = urlVideoHome;
  return (
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
              src={urlHomeVideo}
            />
          </div>
        </div>
        <div className="w-full rounded-sm relative">
          <h2 className="text-fuscous-gray-50 font-bold text-[1.8rem] tracking-wide uppercase">
            Saiba mais
          </h2>
          <p className="text-fuscous-gray-400  text-[1rem] lg:text-[1.1rem]  mt-4 w-full ">
            Explore o nosso site dedicado ao universo de Valorant, onde você
            pode acessar informações de forma rápida e descomplicada. Navegue
            por detalhes abrangentes sobre agentes, skins, mapas, chaveiros e
            cards, todos consolidados em um ambiente intuitivo. Aprofunde-se no
            mundo do Valorant conosco e encontre tudo o que você precisa,
            tornando a sua experiência de busca ainda mais satisfatória e
            completa.
          </p>

          <LinksNavigation
            classNameUL="flex flex-wrap mt-3 lg:mt-0 gap-4 lg:absolute lg:bottom-0"
            classNameLI="text-fuscous-gray-200 w-[95px] uppercase font-semibold tracking-wide text-center bg-fuscous-gray-950 p-2 rounded-sm list-none hover:text-fuscous-gray-50 transition-colors"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeInfoMore;
