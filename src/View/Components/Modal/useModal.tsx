import { useState } from "react";

export function useModalMenu() {
  const [isModalMenuOpen, setIsModalMenu] = useState(false);

  function handleCloseModalMenu() {
    setIsModalMenu(false);
  }
  function handleOpenModalMenu() {
    setIsModalMenu(true);
  }

  return {
    isModalMenuOpen,
    handleCloseModalMenu,
    handleOpenModalMenu,
  };
}
