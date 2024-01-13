export interface PlayerCardsFetch {
  status: number;
  data: playerCard[];
}

export interface playerCard {
  displayName: string;
  displayIcon: string;
  largeArt: string;
  uuid: string;
}
