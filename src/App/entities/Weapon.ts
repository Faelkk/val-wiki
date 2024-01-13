export interface WeaponFetch {
  result: number;
  data: Weapon[];
}

export interface Weapon {
  displayName: string;
  displayIcon: string;
  shopData: shopData;
  uuid: string;
  skins: skins[];
}

export interface shopData {
  category: string;
  categoryText: string;
  cost: number;
}
export interface skins {
  uuid: string;
  displayIcon: string;
  displayName: string;
  chromas: skinsChromas[] | skinsChromas;
}

export interface skinsChromas {
  displayIcon: string;
  displayName: string;
  uuid: string;
}
