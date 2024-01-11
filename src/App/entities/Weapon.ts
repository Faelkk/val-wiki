export interface WeaponFetch {
    result: number
    data: Weapon[]
}

export interface Weapon {
    displayName: string
    displayIcon: string
    shopData: shopData
    uuid: string
}

export interface shopData{
    category: string
    categoryText: string
    cost: number
}