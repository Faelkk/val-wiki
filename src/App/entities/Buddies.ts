export interface BuddiesFetch {
  status: number;
  data: Buddies[];
}

export interface Buddies {
  displayName: string;
  displayIcon: string;
  uuid: string;
}
