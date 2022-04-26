import express from 'express'
import * as clubsServices from '../services/clubsServices'
import toNewClub from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(clubsServices.getClubsWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const club = clubsServices.findById(+req.params.id)
  return (club != null)
    ? res.send(club)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newClub = toNewClub(req.body)
    const addedClub = clubsServices.addClub(newClub)

    res.json(addedClub)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send(err.message)
    }
  }
})

export default router
