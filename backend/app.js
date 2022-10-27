const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const vegetableRouter = require('./controllers/vegetable');
const fineliService = require('./controllers/fineli');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/vegetables', vegetableRouter);
app.use('/api/fineli', fineliService);

module.exports = app;
