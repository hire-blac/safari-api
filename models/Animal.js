const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// specie schema
const specieSchema = new Schema({
  specie: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true,
    default: 0
  }
})
// specie model
const Specie = mongoose.model("specie", specieSchema)


// animal schema
const animalSchema = new Schema({
  specie: {
    type: mongoose.Schema.ObjectId,
    ref:Specie,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
},{timestamps:true})

// animal model
const Animal = mongoose.model("animal", animalSchema)

// export models
module.exports = {Specie, Animal}