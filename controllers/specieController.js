const { Specie } = require("../models/Animal")

// controller to get all animal species
module.exports.allSpecies = async (req, res) => {
  const species = await Specie.find()
  res.json({species})
}

// add new specie
module.exports.newSpecie = (req, res) => {
  Specie.create({
    specie: request.body.specie
  })
  .then(specie => {
    res.json({specie})
  }).catch(err => {
    console.log(err.message);
    res.json({"error": err.message})
  })
}

// get single specie
module.exports.getSpecie = async (req, res) => {
  const id = req.params.id
  const specie = await Specie.findById(id)
  res.json({specie})
}

// get single specie
module.exports.updateSpecie = (req, res) => {
  
  res.json({
    message: "Single specie updated"
  })
}

// get single specie
module.exports.deleteSpecie = (req, res) => {
  
  res.json({
    message: "specie deleted"
  })
}