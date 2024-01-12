export interface AgentsFetch {
    status: number
    data: Agent[]
  }

  export interface AgentFetch {
    status: number
    data: Agent
  }
  
  export interface Agent {
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags?: string[]
    displayIcon: string
    displayIconSmall: string
    bustPortrait?: string
    fullPortrait?: string
    fullPortraitV2?: string
    killfeedPortrait: string
    background?: string
    backgroundGradientColors: string[]
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role?: Role
    recruitmentData?: RecruitmentData
    abilities: Ability[]
    voiceLine: VoiceLine
   
  }
  
  export interface Role {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    assetPath: string
  }
  
  export interface RecruitmentData {
    counterId: string
    milestoneId: string
    milestoneThreshold: number
    useLevelVpCostOverride: boolean
    levelVpCostOverride: number
    startDate: string
    endDate: string
  }
  
  export interface Ability {
    slot: string
    displayName: string
    description: string
    displayIcon?: string
  }
  
  
export interface VoiceLine {
  mediaList: MediaList[]
}

export interface MediaList {
  id: number
  wave: string
}