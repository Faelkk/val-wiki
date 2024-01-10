export interface MapsFetch {
    data: Map[]
    status: number
}


export interface Map {
    displayName: string
    splash: string
    uuid: string
    narrativeDescription: string
}