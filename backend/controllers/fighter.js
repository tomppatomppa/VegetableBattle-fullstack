const router = require('express').Router()
const Fighter = require('../models/Fighter')

router.get('/', async (request, response) => {
  const fighters = await Fighter.find({})

  response.json(fighters)
})

router.post('/', async (request, response) => {
  const { name } = request.body
  if (!name) {
    return response.status(400).json({
      error: 'invalid Username',
    })
  }
  console.log(request.body)

  const existingFighter = await Fighter.findOne({ name })
  if (existingFighter) {
    return response.status(400).json({
      error: 'Already Exists',
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

router.put('/', async (request, response) => {
  const { name, wins, status } = request.body
  let updateScore

  if (wins) {
    updateScore = 'wins'
  } else if (!wins) {
    updateScore = 'losses'
  }
  const fighter = await Fighter.findOneAndUpdate(
    { name },
    { $inc: { [updateScore]: 1 }, $set: { status: status } },
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  )
  response.json(fighter)
})
module.exports = router
