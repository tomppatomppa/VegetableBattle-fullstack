const router = require('express').Router();
const Vegetable = require('../models/Vegetable');

router.get('/', async (request, response) => {
  const vegetables = await Vegetable.find({});
  response.json(vegetables);
});

router.post('/', async (request, response) => {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({
      error: 'invalid Username',
    });
  }
  const existingVegetable = await Vegetable.findOne({ name });

  if (existingVegetable) {
    return response.status(400).json({
      error: 'Fighter already Exists',
    });
  }
  const vegetable = new Vegetable({
    name,
    wins: 0,
    losses: 0,
  });
  const savedVegetable = await vegetable.save();
  response.status(201).json(savedVegetable);
});

router.put('/', async (request, response) => {
  const { name, wins } = request.body;
  let didLoseOrWin = wins ? 'wins' : 'losses';

  const vegetable = await Vegetable.findOneAndUpdate(
    { name },
    { $inc: { [didLoseOrWin]: 1 } },
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  );
  response.json(vegetable);
});
module.exports = router;
