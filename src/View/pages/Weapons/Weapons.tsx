import { Weapon } from "../../../App/entities/Weapon";

import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import WeaponsCard from "./components/WeaponsCard";
import WeaponsDropDownFilters from "./components/WeaponsDropDownFilters";
import { useWeaponsController } from "./useWeaponsController";

const Weapons = () => {
  const {
    Weapons,
    isLoading,
    weaponsFiltered,
    isDropdownMenuOpen,
    activeCategoryFilter,
    handleClickDropdown,
    handleOpenModalDropdown,
  } = useWeaponsController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (!isLoading)
    return (
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Armas</h2>
          {Weapons && (
            <WeaponsDropDownFilters
              weapons={Weapons}
              activeCategoryFilter={activeCategoryFilter}
              handleClickDropdown={handleClickDropdown}
              handleOpenModalDropdown={handleOpenModalDropdown}
              isDropdownMenuOpen={isDropdownMenuOpen}
            />
          )}
        </div>
        <section>
          {activeCategoryFilter === "todas as armas" && Weapons ? (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-md">
              {Weapons?.map((weapon: Weapon) => (
                <WeaponsCard weapon={weapon} key={weapon.uuid} />
              ))}
            </section>
          ) : (
            <section className="grid  grid-cols-1 lg:grid-cols-2 gap-4 rounded-md">
              {weaponsFiltered?.map((weapon: Weapon) => (
                <WeaponsCard weapon={weapon} key={weapon.uuid} />
              ))}
            </section>
          )}
        </section>
      </Container>
    );
};

export default Weapons;
