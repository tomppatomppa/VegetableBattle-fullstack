const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const fighterRouter = require('./controllers/fighter')

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/fighters', fighterRouter)

module.exports = app
