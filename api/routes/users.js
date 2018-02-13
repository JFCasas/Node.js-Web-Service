const express = require('express');
const router = express.Router();



let User = require('../models/User');

let usersController = require('../controllers/UsersController');

let sessionsController = require('../controllers/SessionsController');

//let prueba = require('../middlewares/prueba')




router.route('/')

	.get(usersController.myPlaces)

	.post(
		usersController.create,
		sessionsController.generateToken,
		sessionsController.sendToken)



module.exports = router;