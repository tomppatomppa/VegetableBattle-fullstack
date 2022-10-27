const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  wins: Number,
  losses: Number,
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Vegetable = mongoose.model('Vegetable', schema);
module.exports = Vegetable;
