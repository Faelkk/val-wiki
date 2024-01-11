import Modal from "../../../../Components/Modal/Modal";
import TitleHeader from "./TitleHeader";
import { Link } from "react-router-dom";

interface ModalHeaderProps {
  isModalMenuOpen: boolean;
  handleCloseModalMenu: () => void;
}

const ModalHeader = ({
  isModalMenuOpen,
  handleCloseModalMenu,
}: ModalHeaderProps) => {
  return (
    <Modal
      open={isModalMenuOpen}
      onClose={handleCloseModalMenu}
      title={
        <TitleHeader
          classNameH1="text-fuscous-gray-950 text-[1.3rem]"
          classNameImg="h-10 w-10"
          currentColor="text-fuscous-gray-950 "
        />
      }
    >
      <div className="flex items-center justify-center">
        <ul className="flex flex-col gap-4">
          <li className="text-fuscous-gray-950 text-[1.2rem]  transition-colors list-none">
            <Link to="/agents" onClick={handleCloseModalMenu}>
              Agentes
            </Link>
          </li>
          <li className="text-fuscous-gray-950 text-[1.2rem] transition-colors list-none">
            <Link to="/weapons" onClick={handleCloseModalMenu}>
              Arsenal
            </Link>
          </li>

          <li className="text-fuscous-gray-950 text-[1.2rem] transition-colors list-none">
            {" "}
            <Link to="/cards" onClick={handleCloseModalMenu}>
              Cards
            </Link>
          </li>
          <li className="text-fuscous-gray-950 text-[1.2rem] transition-colors list-none">
            {" "}
            <Link to="/Buddies" onClick={handleCloseModalMenu}>
              Chaveiro
            </Link>
          </li>

          <li className="text-fuscous-gray-950 text-[1.2rem] transition-colors list-none">
            {" "}
            <Link to="/maps" onClick={handleCloseModalMenu}>
              Mapas
            </Link>
          </li>

          <li className="text-fuscous-gray-950 text-[1.2rem] transition-colors list-none">
            <Link to="/sprays" onClick={handleCloseModalMenu}>
              Sprays
            </Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ModalHeader;
