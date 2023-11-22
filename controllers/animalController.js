const { Animal } = require("../models/Animal")

// controller to get all animal Animals
module.exports.allAnimals = async (req, res) => {
  const animals = await Animal.find()
  res.json({animals})
}

// add new Animal
module.exports.newAnimal = (req, res) => {
  const {specie, name, age, sex} = req.bosy
  Animal.create({
    specie,
    name,
    sex,
    age
  })
  .then(animal => {
    res.json({animal})
  }).catch(err => {
    console.log(err.message);
    res.json({"error": err.message})
  })
}

// get single Animal
module.exports.getAnimal = async (req, res) => {
  const id = req.params.id
  const animal = await Animal.findById(id)
  res.json({animal})
}

// get single Animal
module.exports.updateAnimal = (req, res) => {
  
  res.json({
    message: "Single Animal updated"
  })
}

// get single Animal
module.exports.deleteAnimal = (req, res) => {
  const id = req.params.id
  Animal.findByIdAndDelete(id)
  .then(()=>{
    res.json({
      message: "Animal deleted"
    })
  })
}