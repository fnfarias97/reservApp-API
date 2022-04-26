import { Sports } from './enums'

export interface Club {
  id: number
  name: string
  city: string
  telephone: string
  address: string
  pitches: Pitch[]
}

// export type NonSensitiveInfoClub = Pick<Club, 'id' | 'name' | 'city' | 'pitches'>
export type NonSensitiveInfoClub = Omit<Club, 'telephone' | 'address'>
export type NewClub = Omit<Club, 'id'>

export interface Pitch {
  sports: Sports[]
  teamSize: number
  ceiling: boolean
}
