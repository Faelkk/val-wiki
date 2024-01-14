import LinksNavigation from "../../../../Components/LinksNavigation";
import Modal from "../../../../Components/Modal/Modal";
import TitleHeader from "./TitleHeader";

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
      classNameContent="w-full max-w-[300px]  sm:max-w-[400px]"
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
        <LinksNavigation
          classNameUL="flex flex-col gap-4"
          classNameLI="text-fuscous-gray-950 text-[1.2rem]  transition-colors list-none"
          onClick={handleCloseModalMenu}
        />
      </div>
    </Modal>
  );
};

export default ModalHeader;
