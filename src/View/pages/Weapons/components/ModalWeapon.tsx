import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Weapon } from "../../../../App/entities/Weapon";
import Modal from "../../../Components/Modal/Modal";

interface ModalWeaponsProps {
  onCloseModalMenu: () => void;
  isModalMenuOpen: boolean;
  activeWeaponModal: Weapon | null;
}

const ModalWeapon = ({
  activeWeaponModal,
  isModalMenuOpen,
  onCloseModalMenu,
}: ModalWeaponsProps) => {
  console.log(activeWeaponModal);

  return (
    <Modal
      classNameContent="lowScreen:w-[300px] small:w-[400px] md:w-[600px] lg:w-[800px]"
      title={
        <span className="text-fuscous-gray-950 text-[1.5rem]">
          {activeWeaponModal?.displayName}
        </span>
      }
      open={isModalMenuOpen}
      onClose={onCloseModalMenu}
    >
      <section className="">
        <figure className="flex items-center justify-center relative">
          <div className="">
            <button className="absolute left-0 top-0">
              <ArrowLeftIcon className="w-8 h-8" />
            </button>
            <button className="absolute right-0 top-0">
              <ArrowRightIcon className="w-8 h-8" />
            </button>
          </div>
          <img
            className="lowScreen:w-[200px] small:w-[250px] md:w-[300px] small:h-[80px] md:h-[120px] lg:w-[400px] object-contain"
            src={activeWeaponModal?.displayIcon}
            alt={activeWeaponModal?.displayName}
          />
        </figure>
        <div className="flex flex-col small:flex-row justify-between mt-4">
          <div className="font-semibold text-fuscous-gray-600">
            <span className="">Categoria:</span>{" "}
            <span>{activeWeaponModal?.shopData.categoryText}</span>
          </div>
          <div className="font-semibold text-fuscous-gray-600">
            <span>Custo:</span> <span>{activeWeaponModal?.shopData.cost}$</span>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalWeapon;
