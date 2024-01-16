import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container";
import IconScrollClick from "../../Components/IconScrollClick";
import Loading from "../../Components/Loading";
import InputHeader from "../../Components/inputHeader";
import BuddiesCards from "./components/BuddiesCards";

import { useBuddiesController } from "./useBuddiesController";
import scrollToBottom from "../../../App/utils/scrollToBottom";
import scrollToTop from "../../../App/utils/scrollToTop";
import NoFilteredContentFound from "../../Components/NoFilteredContentFound";

const Buddies = () => {
  const {
    isLoading,
    searchBuddies,
    visibleItems,
    buddiesFiltered,
    handleChangeSearchBuddies,
    handleShowMore,
  } = useBuddiesController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <>
      <Container>
        <header className="flex flex-col lg:flex-row justify-between items-center m-8  ">
          <h1 className="text-[1.8rem] text-fuscous-gray-100 p-4">Chaveiros</h1>
          <InputHeader
            handleChangeSearchValue={handleChangeSearchBuddies}
            placeholder="Pesquise por algum chaveiro..."
            searchInputValue={searchBuddies}
          />
        </header>

        {buddiesFiltered.length > 0 ? (
          <main>
            <div className="grid grid-cols-1 pp:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md place-items-center">
              {buddiesFiltered.slice(0, visibleItems).map((buddies) => {
                return <BuddiesCards buddies={buddies} key={buddies.uuid} />;
              })}
            </div>

            {visibleItems < buddiesFiltered.length && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMore}
                  className="mt-12  w-[50%] pp:w-[30%] bg-white lg:w-[15%] h-[52px] rounded-md"
                >
                  Mostrar mais
                </button>
              </div>
            )}
          </main>
        ) : (
          <NoFilteredContentFound inputValue={searchBuddies} />
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

export default Buddies;
