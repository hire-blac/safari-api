const { Router } = require("express");
const userController = require('../controllers/userController')

// create router object
const router = Router()

// routes\
router.post('/users/register', userController.register)
router.post('/users/login', userController.login)

module.exports = router