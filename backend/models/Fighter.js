const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  wins: Number,
  ties: Number,
  losses: Number,
  status: String,
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Fighter = mongoose.model('Fighter', schema)
module.exports = Fighter
