import { Dispatch, SetStateAction, useState } from "react";
import { Weapon } from "../../../App/entities/Weapon";

export function useDropdownMenu(
  setWeaponsFiltered: Dispatch<SetStateAction<Weapon[] | null>>
) {
  const [isDropdownMenuOpen, setIsDropdownMenu] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] =
    useState("todas as armas");

  function handleCloseModalDropdown() {
    setIsDropdownMenu(false);
  }
  function handleOpenModalDropdown() {
    setIsDropdownMenu(true);
  }

  function handleClickCategoryFilter(
    CategoryWeaponId: string,
    weapons: Weapon[]
  ) {
    const WeaponsFiltered = weapons.filter(
      (weapon) => weapon.shopData?.category === CategoryWeaponId
    );
    setWeaponsFiltered(WeaponsFiltered);
  }

  function handleClickDropdown(
    CategoryWeaponId: string,
    CategoryWeaponName: string,
    weapons: Weapon[]
  ) {
    setActiveCategoryFilter(CategoryWeaponName);
    handleClickCategoryFilter(CategoryWeaponId, weapons);
    handleCloseModalDropdown();
  }

  return {
    isDropdownMenuOpen,
    activeCategoryFilter,
    handleCloseModalDropdown,
    handleOpenModalDropdown,
    handleClickDropdown,
  };
}
