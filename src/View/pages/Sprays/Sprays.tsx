import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container";
import IconScrollClick from "../../Components/IconScrollClick";
import Loading from "../../Components/Loading";
import InputHeader from "./components/InputHeader";
import SprayCards from "./components/SprayCards";
import { useSpraysController } from "./useSpraysController";
import scrollToBottom from "../../../App/utils/scrollToBottom";
import { scrollToTop } from "../../../App/utils/scrollToTop";

const Sprays = () => {
  const {
    visibleItems,
    searchSpray,
    spraysFiltered,
    isLoading,
    handleShowMore,
    handleChangeSearchSpray,
  } = useSpraysController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (spraysFiltered)
    return (
      <>
        <Container>
          <header className="flex flex-col lg:flex-row justify-between items-center m-8 ">
            <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Sprays</h2>
            <InputHeader
              searchSpray={searchSpray}
              handleChangeSearchSpray={handleChangeSearchSpray}
            />
          </header>

          <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md place-items-center">
            {spraysFiltered.slice(0, visibleItems).map((spray) => {
              return <SprayCards spray={spray} key={spray.uuid} />;
            })}
          </div>

          {visibleItems < spraysFiltered.length && (
            <div className="flex justify-center">
              <button
                onClick={handleShowMore}
                className="mt-12  w-[50%] pp:w-[30%] bg-white lg:w-[15%] h-[52px] rounded-md"
              >
                Mostrar mais
              </button>
            </div>
          )}
        </Container>

        <div className="fixed bottom-0 right-0">
          <IconScrollClick onClick={scrollToBottom}>
            <ArrowDownIcon className="h-8 w-8 text-white" />
          </IconScrollClick>

          <IconScrollClick onClick={scrollToTop}>
            <ArrowUpIcon className="h-8 w-8 text-white" />
          </IconScrollClick>
        </div>
      </>
    );
};

export default Sprays;
