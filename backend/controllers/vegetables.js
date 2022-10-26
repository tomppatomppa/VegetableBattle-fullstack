const axios = require('axios');

const router = require('express').Router();

router.post('/', async (req, response) => {
  const { search } = req.body;
  const url = `https://fineli.fi/fineli/api/v1/foods?q=${search}`;
  const result = await axios.get(url);
  response.json(result.data);
});
module.exports = router;
