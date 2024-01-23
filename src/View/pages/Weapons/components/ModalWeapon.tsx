import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Weapon, skins } from "../../../../App/entities/Weapon";
import Modal from "../../../Components/Modal/Modal";

interface ModalWeaponsProps {
  isModalMenuOpen: boolean;
  navigationWasClicked: boolean;
  activeWeaponModal: Weapon | null;
  activeWeaponSkin: skins | null;
  handlePrevSkin: (activeWeaponModal: Weapon) => void;
  handleNextSkin: (activeWeaponModal: Weapon) => void;
  onCloseModalMenu: () => void;
}

const ModalWeapon = ({
  activeWeaponModal,
  isModalMenuOpen,
  activeWeaponSkin,
  navigationWasClicked,
  onCloseModalMenu,
  handlePrevSkin,
  handleNextSkin,
}: ModalWeaponsProps) => {
  if (activeWeaponModal) {
    const activeWeaponImg = navigationWasClicked
      ? activeWeaponSkin?.displayIcon
      : activeWeaponModal?.displayIcon;

    const activeWeaponName = navigationWasClicked
      ? activeWeaponSkin?.displayName
      : activeWeaponModal?.displayName;

    return (
      <Modal
        classNameContent="lowScreen:w-[300px] small:w-[400px] md:w-[600px] lg:w-[800px]"
        title={
          <span className="text-fuscous-gray-950 text-[1.3rem] md:text-[1.5rem]">
            {activeWeaponName}
          </span>
        }
        open={isModalMenuOpen}
        onClose={onCloseModalMenu}
      >
        <section className="">
          <figure className="flex flex-col-reverse  items-center justify-center relative">
            <div className="flex justify-between w-full">
              <div className="h-full md:absolute md:left-0 md:top-0 items-center flex justify-center">
                <button
                  className=""
                  onClick={() => handlePrevSkin(activeWeaponModal)}
                >
                  <ArrowLeftIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="h-full  items-center flex justify-center md:absolute md:right-0 md:top-0">
                <button
                  className=""
                  onClick={() => handleNextSkin(activeWeaponModal)}
                >
                  <ArrowRightIcon className="w-8 h-8" />
                </button>
              </div>
            </div>

            {activeWeaponImg ? (
              <img
                className="lowScreen:w-[200px] small:w-[250px] md:w-[300px] small:h-[80px] md:h-[120px] lg:w-[400px] object-contain"
                src={activeWeaponImg}
                alt={activeWeaponName}
              />
            ) : (
              <span>Imagem não encontrada</span>
            )}
          </figure>

          <div className="flex flex-col small:flex-row justify-between mt-8">
            <div className="font-semibold text-fuscous-gray-600">
              {activeWeaponModal?.shopData?.categoryText ? (
                <>
                  <span className="">Categoria:</span>{" "}
                  <span>{activeWeaponModal?.shopData?.categoryText}</span>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="font-semibold text-fuscous-gray-600">
              {activeWeaponModal?.shopData?.cost ? (
                <>
                  <span>Custo:</span>{" "}
                  <span>{activeWeaponModal?.shopData?.cost}$</span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </Modal>
    );
  }
  return null;
};

export default ModalWeapon;
