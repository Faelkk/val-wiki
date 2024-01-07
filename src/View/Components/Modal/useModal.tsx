import { useState } from "react";

const useModalMenu = () => {
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
};

export default useModalMenu;
