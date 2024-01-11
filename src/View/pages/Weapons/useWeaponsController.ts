import { useState } from "react";
import { useDropdownMenu } from "../../Components/DropdownMenu/useDropdownMenu";
import { Weapon } from "../../../App/entities/Weapon";
import { useWeapons } from "../../../App/hooks/useWeapon";

export function useWeaponsController() {
  const { Weapons, isLoading } = useWeapons();
  const [weaponsFiltered, setWeaponsFiltered] = useState<Weapon[] | null>(null);

 
  const {
    isDropdownMenuOpen,
    activeCategoryFilter,
    handleOpenModalDropdown,
    handleClickDropdown,
  } = useDropdownMenu(setWeaponsFiltered);

  return {
    weaponsFiltered,
    isDropdownMenuOpen,
    activeCategoryFilter,
    Weapons,
    isLoading,
    handleClickDropdown,
    handleOpenModalDropdown,
    setWeaponsFiltered,
  };
}
