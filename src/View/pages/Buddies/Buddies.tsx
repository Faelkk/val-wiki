import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import InputHeader from "../../Components/inputHeader";
import { useBuddiesController } from "./useBuddiesController";

const Buddies = () => {
  const {
    isLoading,
    searchBuddies,
    visibleItems,
    Buddies,
    buddiesFiltered,
    handleChangeSearchBuddies,
    handleShowMore,
  } = useBuddiesController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  console.log(Buddies);

  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center m-8  ">
        <h1 className="text-[1.8rem] text-fuscous-gray-100 p-4">Chaveiros</h1>
        <InputHeader
          handleChangeSearchValue={handleChangeSearchBuddies}
          placeholder="Pesquise por algum chaveiro..."
          searchInputValue={searchBuddies}
        />
      </header>
    </Container>
  );
};

export default Buddies;
