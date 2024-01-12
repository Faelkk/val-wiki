import { Weapon } from "../../../App/entities/Weapon";
import { useWeapons } from "../../../App/hooks/useWeapon";

import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import ModalWeapon from "./components/ModalWeapon";
import WeaponsCard from "./components/WeaponsCard";
import { useModalWeaponController } from "./components/useModalWeapon";

const Weapons = () => {
  const { Weapons, isLoading } = useWeapons();
  const {
    isModalWeaponOpen,
    activeWeaponModal,
    handleCloseModalWeapon,
    handleOpenModalWeapon,
  } = useModalWeaponController();

  if (isLoading) return <Loading isLoading={isLoading} />;

  if (!isLoading && Weapons)
    return (
      <>
        <Container>
          <h2 className="text-[1.8rem] text-fuscous-gray-100 p-4">Armas</h2>

          <section>
            <section className="grid  grid-cols-1 lg:grid-cols-2 gap-4 rounded-md">
              {Weapons?.map((weapon: Weapon) => (
                <WeaponsCard
                  weapon={weapon}
                  key={weapon.uuid}
                  onClick={handleOpenModalWeapon}
                />
              ))}
            </section>
          </section>
        </Container>

        {isModalWeaponOpen && (
          <ModalWeapon
            onCloseModalMenu={handleCloseModalWeapon}
            isModalMenuOpen={isModalWeaponOpen}
            activeWeaponModal={activeWeaponModal}
          />
        )}
      </>
    );
};

export default Weapons;
