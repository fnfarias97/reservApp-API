import { NewClub, Pitch } from './types'
import { Sports } from './enums'

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }
  return nameFromRequest
}

const parseCity = (cityFromRequest: any): string => {
  if (!isString(cityFromRequest)) {
    throw new Error('Incorrect or missing city')
  }
  return cityFromRequest
}

// TODO: improve validation
const parseTelephone = (telephoneFromRequest: any): string => {
  if (!isString(telephoneFromRequest)) {
    throw new Error('Incorrect or missing telephone')
  }
  return telephoneFromRequest
}

const parseAddress = (addressFromRequest: any): string => {
  if (!isString(addressFromRequest)) {
    throw new Error('Incorrect or missing address')
  }
  return addressFromRequest
}

const parsePitches = (pitchesFromRequest: any): [Pitch] => {
  if (!isArray(pitchesFromRequest) || pitchesFromRequest.length === 0) {
    throw new Error('Pitches should be sent inside of an array')
  }
  for (const pitch of pitchesFromRequest) {
    if (!isPitch(pitch)) {
      throw new Error('Incorrect or missing pitches')
    }
  }
  return pitchesFromRequest
}

const isString = (string: any): boolean => { return typeof string === 'string' }
const isNumber = (num: any): boolean => { return typeof num === 'number' }
const isArray = (array: any): boolean => { return Array.isArray(array) }
const isSport = (sport: any): boolean => { return Object.values(Sports).includes(sport) }

const isPitch = (pitch: any): boolean => {
  if (!isNumber(pitch.teamSize)) {
    throw new Error('Pitch has no team size info')
  }

  if (!isArray(pitch.sports)) {
    throw new Error('Pitch has no related sports Array')
  }
  for (const sport of pitch.sports) {
    if (!isSport(sport)) {
      throw new Error('Pitch has invalid sports')
    }
  }

  if (!isString(pitch.ceiling)) {
    throw new Error('Pitch has no ceiling info')
  }
  return true
}

/* function instanceOfPitch (data: any): data is Pitch {
  return 'sports' in data
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
} */

const toNewClub = (object: any): NewClub => {
  const newClub: NewClub = {
    name: parseName(object.name),
    city: parseCity(object.city),
    telephone: parseTelephone(object.telephone),
    address: parseAddress(object.address),
    pitches: parsePitches(object.pitches)
  }
  return newClub
}
export default toNewClub
