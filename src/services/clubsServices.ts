import { Club, NewClub, NonSensitiveInfoClub } from '../types'
import clubsData from './clubs.json'

const clubs: Club[] = clubsData as Club[]

export const getClubs = (): Club[] => clubs
export const getClubsWithoutSensitiveInfo = (): NonSensitiveInfoClub[] => {
  return clubs.map(({ id, name, city, pitches }) => {
    return {
      id,
      name,
      city,
      pitches
    }
  })
}

export const findById = (id: number): NonSensitiveInfoClub | undefined => {
  const club = clubs.find(club => club.id === id)
  if (club != null) {
    const { telephone, address, ...restOfClub } = club
    return restOfClub
  }
  return undefined
}

export const addClub = (newClub: NewClub): Club => {
  const clubToAdd = {
    id: Math.max(...clubs.map(c => c.id)) + 1,
    ...newClub
  }

  clubs.push(clubToAdd)
  return clubToAdd
}
