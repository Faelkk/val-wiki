import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import scrollToBottom from "../../../App/utils/scrollToBottom";
import scrollToTop from "../../../App/utils/scrollToTop";
import Container from "../../Components/Container";
import IconScrollClick from "../../Components/IconScrollClick";
import Loading from "../../Components/Loading";
import InputHeader from "../../Components/inputHeader";
import CardsMap from "./components/CardsMap";
import { usePlayerCardController } from "./usePlayerCardController";
import NoFilteredContentFound from "../../Components/NoFilteredContentFound";

const PlayerCards = () => {
  const {
    isLoading,
    PlayerCardsFiltered,
    handleChangeSearchPlayerCards,
    handleShowMore,
    searchPlayerCards,
    visibleItems,
  } = usePlayerCardController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (PlayerCardsFiltered) {
    return (
      <>
        <Container>
          <header className="flex flex-col lg:flex-row justify-between items-center m-8 ">
            <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Cards</h2>
            <InputHeader
              handleChangeSearchValue={handleChangeSearchPlayerCards}
              placeholder="Pesquise por algum spray..."
              searchInputValue={searchPlayerCards}
            />
          </header>

          {PlayerCardsFiltered.length > 0 ? (
            <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md place-items-center">
              {PlayerCardsFiltered.slice(0, visibleItems).map((playerCard) => {
                return (
                  <CardsMap PlayerCard={playerCard} key={playerCard.uuid} />
                );
              })}
            </div>
          ) : (
            <NoFilteredContentFound inputValue={searchPlayerCards} />
          )}

          {visibleItems < PlayerCardsFiltered.length && (
            <div className="flex justify-center">
              <button
                onClick={handleShowMore}
                className="mt-12 w-[50%] pp:w-[30%] bg-white lg:w-[15%] h-[52px] rounded-md"
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
  }
};

export default PlayerCards;
