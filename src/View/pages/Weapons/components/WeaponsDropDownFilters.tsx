import { Weapon } from "../../../../App/entities/Weapon";
import DropdownMenu from "../../../Components/DropdownMenu/DropdownMenu";

interface WeaponsDropDownFilters {
  weapons: Weapon[];
  isDropdownMenuOpen: boolean;
  handleClickDropdown: (
    CategoryWeaponId: string,
    CategoryWeaponName: string,
    weapons: Weapon[]
  ) => void;
  handleOpenModalDropdown: () => void;
  activeCategoryFilter: string;
}

const WeaponsDropDownFilters = ({
  weapons,
  isDropdownMenuOpen,
  activeCategoryFilter,
  handleClickDropdown,
  handleOpenModalDropdown,
}: WeaponsDropDownFilters) => {
  const categoryWeapons = [
    {
      id: "AllWeapons",
      name: "todas as armas",
    },
    {
      id: "SMGs",
      name: "submetralhadoras",
    },
    {
      id: "Shotguns",
      name: "escopeta",
    },
    { id: "Rifles", name: "fuzis" },
    {
      id: "Sniper Rifles",
      name: "fuzis de precisão",
    },
    {
      id: "Pistols",
      name: "pistols",
    },
    {
      id: "Heavy Weapons",
      name: "armas pesadas",
    },
  ];

  const filteredCategoryWeapons = categoryWeapons.filter(
    (weaponCategory) => weaponCategory.name !== activeCategoryFilter
  );

  return (
    <div>
      <DropdownMenu
        open={isDropdownMenuOpen}
        onClose={handleOpenModalDropdown}
        activeCategoryFilter={activeCategoryFilter}
      >
        <div className="flex  items-center justify-center bg-white outline-none border-none">
          <div className="flex flex-col p-3 gap-[.3rem] outline-none border-none">
            {filteredCategoryWeapons.map((weaponCategory) => {
              return (
                <h2
                  className="uppercase text-fuscous-gray-950 text-[.9rem] cursor-pointer"
                  onClick={() =>
                    handleClickDropdown(
                      weaponCategory.id,
                      weaponCategory.name,
                      weapons
                    )
                  }
                  key={weaponCategory.id}
                >
                  {weaponCategory.name}
                </h2>
              );
            })}
          </div>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default WeaponsDropDownFilters;
