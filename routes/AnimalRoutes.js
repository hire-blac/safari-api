const { Router } = require("express");
const animalController = require('../controllers/animalController')

// create router object
const router = Router()

// routes
router.get('/animals', animalController.allAnimals)
router.post('/animals', animalController.newAnimal)

router.get('/animals/:id', animalController.getAnimal)
router.put('/animals/:id', animalController.updateAnimal)
router.delete('/animals/:id', animalController.deleteAnimal)

module.exports = router