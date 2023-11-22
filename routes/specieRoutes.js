const { Router } = require("express");
const specieController = require('../controllers/specieController');
const isAuthenticated = require("../middlewares/authMiddleware");

// create router object
const router = Router()

// routes
router.get('/species', isAuthenticated, specieController.allSpecies)
router.post('/species', specieController.newSpecie)

router.get('/species/:id', specieController.getSpecie)
router.put('/species/:id', specieController.updateSpecie)
router.delete('/species/:id', specieController.deleteSpecie)

module.exports = router