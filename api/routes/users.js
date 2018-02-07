const express = require('express');
const router = express.Router();



let User = require('../models/User');

let usersController = require('../controllers/UsersController');

//let prueba = require('../middlewares/prueba')


router.route('/')

	.get(usersController.index)

	.post(usersController.create)

module.exports = router;