const router = require('express').Router();
const Fighter = require('../models/Fighter');

router.get('/', async (request, response) => {
  const fighters = await Fighter.find({});
  response.json(fighters);
});

router.post('/', async (request, response) => {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({
      error: 'invalid Username',
    });
  }
  const existingFighter = await Fighter.findOne({ name });

  if (existingFighter) {
    return response.status(400).json({
      error: 'Fighter already Exists',
    });
  }
  const fighter = new Fighter({
    name,
    wins: 0,
    losses: 0,
  });
  const savedFighter = await fighter.save();
  response.status(201).json(savedFighter);
});

router.put('/', async (request, response) => {
  const { name, wins } = request.body;
  let didLoseOrWin = wins ? 'wins' : 'losses';

  const fighter = await Fighter.findOneAndUpdate(
    { name },
    { $inc: { [didLoseOrWin]: 1 } },
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  );
  response.json(fighter);
});
module.exports = router;
