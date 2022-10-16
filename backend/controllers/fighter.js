const router = require('express').Router()
const Fighter = require('../models/Fighter')

router.post('/', async (request, response) => {
  const { name } = request.body

  const existingFighter = await Fighter.findOne({ name })
  if (existingFighter) {
    return response.status(400).json({
      error: 'Fighter must be unique',
    })
  }
  const fighter = new Fighter({
    name,
    wins: 0,
    ties: 0,
    losses: 0,
    status: 'AVAILABLE',
  })
  const savedFighter = await fighter.save()
  response.status(201).json(savedFighter)
})
module.exports = router
