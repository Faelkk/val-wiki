import { useWeapons } from "../../../App/hooks/useWeapon";
import { useModalWeaponController } from "./components/useModalWeapon";

export function useWeaponController() {
  const { Weapons, isLoading } = useWeapons();
  const {
    activeWeaponSkin,
    navigationWasClicked,
    isModalWeaponOpen,
    activeWeaponModal,
    handleCloseModalWeapon,
    handleOpenModalWeapon,
    handleNextSkin,
    handlePrevSkin,
  } = useModalWeaponController();

  return {
    Weapons,
    isLoading,
    activeWeaponSkin,
    navigationWasClicked,
    isModalWeaponOpen,
    activeWeaponModal,
    handleCloseModalWeapon,
    handleOpenModalWeapon,
    handleNextSkin,
    handlePrevSkin,
  };
}
