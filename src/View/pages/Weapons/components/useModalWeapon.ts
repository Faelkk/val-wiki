import { useState } from "react";
import { Weapon, skins } from "../../../../App/entities/Weapon";

export function useModalWeaponController() {
  const [isModalWeaponOpen, setIsModalWeaponOpen] = useState(false);
  const [activeWeaponModal, setActiveWeaponModal] = useState<Weapon | null>(
    null
  );
  const [navigationWasClicked, setNavigationWasClicked] = useState(false);
  const [selectedSkinIndex, setSelectedSkinIndex] = useState(0);
  const [activeWeaponSkin, setActiveWeaponSkin] = useState<skins | null>(null);

  const handleOpenModalWeapon = (weapon: Weapon) => {
    setIsModalWeaponOpen(true);
    setActiveWeaponModal(weapon);
    setActiveWeaponSkin(weapon.skins[0]);
  };

  const handleCloseModalWeapon = () => {
    setIsModalWeaponOpen(false);
    setActiveWeaponModal(null);
    setNavigationWasClicked(false);
    setActiveWeaponModal(null);
    setActiveWeaponSkin(null);
    setSelectedSkinIndex(0);
  };

  const handlePrevSkin = (weapon: Weapon) => {
    setSelectedSkinIndex((prevIndex) =>
      prevIndex === 0 ? activeWeaponModal!.skins.length - 1 : prevIndex - 1
    );
    setActiveWeaponSkin(weapon.skins[selectedSkinIndex]);
    setNavigationWasClicked(true);
  };

  const handleNextSkin = (weapon: Weapon) => {
    setNavigationWasClicked(true);

    setSelectedSkinIndex((prevIndex) =>
      prevIndex === activeWeaponModal!.skins.length - 1 ? 0 : prevIndex + 1
    );
    setActiveWeaponSkin(weapon.skins[selectedSkinIndex]);
  };

  return {
    activeWeaponSkin,
    selectedSkinIndex,
    navigationWasClicked,
    isModalWeaponOpen,
    activeWeaponModal,
    handleCloseModalWeapon,
    handleOpenModalWeapon,
    handlePrevSkin,
    handleNextSkin,
  };
}
