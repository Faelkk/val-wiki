import { useState } from "react";
import { Weapon } from "../../../../App/entities/Weapon";

export function useModalWeaponController() {
    const [isModalWeaponOpen,setIsModalWeaponOpen] = useState(false)
    const [activeWeaponModal,setActiveWeaponModal] = useState<Weapon | null>(null)


    const handleOpenModalWeapon = (weapon: Weapon ) => {
        setIsModalWeaponOpen(true)
        setActiveWeaponModal(weapon)      
    }

    const handleCloseModalWeapon = () => {
        setIsModalWeaponOpen(false)
        setActiveWeaponModal(null)
    }



    return {isModalWeaponOpen,activeWeaponModal,handleCloseModalWeapon,handleOpenModalWeapon}
}