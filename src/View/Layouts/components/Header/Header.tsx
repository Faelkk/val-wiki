import { Link } from "react-router-dom";

import useWindowWidth from "../../../../App/hooks/useWindowWidth";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useModalMenu from "../../../Components/Modal/useModal";
import TitleHeader from "./components/TitleHeader";
import ModalHeader from "./components/ModalHeader";

const Header = () => {
  const width = useWindowWidth();
  const { handleOpenModalMenu, handleCloseModalMenu, isModalMenuOpen } =
    useModalMenu();

  return (
    <>
      <header className="bg-[#14191f] p-6 w-full flex justify-center h-[72px] border-b border-blueVariation2-950 ">
        <section className="flex items-center justify-between w-[80%]">
          <div className="">
            <TitleHeader
              classNameH1="text-fuscous-gray-50"
              classNameImg="h-10 w-10"
              currentColor="#FFFFFF"
            />
          </div>

          {width <= 768 ? (
            <button className="text-fuscous-gray-50 p-4">
              <HamburgerMenuIcon
                aria-label="BtnOpenModal"
                onClick={handleOpenModalMenu}
                className="h-6 w-6"
              />
            </button>
          ) : (
            <nav className="flex ">
              <ul className="flex items-center justify-center gap-6 ">
                <li className="text-fuscous-gray-400  hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/agents">Agentes</Link>
                </li>
                <li className="text-fuscous-gray-400 hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/weapons">Armas</Link>
                </li>

                <li className="text-fuscous-gray-400 hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/cards">Cards</Link>
                </li>
                <li className="text-fuscous-gray-400 hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/Buddies">Chaveiro</Link>
                </li>

                <li className="text-fuscous-gray-400 hover:text-fuscous-gray-50 transition-colors">
                  {" "}
                  <Link to="/maps">Mapas</Link>
                </li>

                <li className="text-fuscous-gray-400 hover:text-fuscous-gray-50 transition-colors">
                  <Link to="/sprays">Sprays</Link>
                </li>
              </ul>
            </nav>
          )}
        </section>
      </header>

      {isModalMenuOpen && width <= 768 && (
        <ModalHeader
          handleCloseModalMenu={handleCloseModalMenu}
          isModalMenuOpen={isModalMenuOpen}
        />
      )}
    </>
  );
};

export default Header;
