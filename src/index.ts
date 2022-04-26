import express from 'express'

import clubsRouter from './routes/clubs'

const app = express()
app.use(express.json()) // req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/api/clubs', clubsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
