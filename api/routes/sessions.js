const express = require('express');
const router = express.Router();



let sessionsController = require('../controllers/SessionsController');



//let prueba = require('../middlewares/prueba')


router.route('/')

	.post(
		sessionsController.authenticate,
		sessionsController.generateToken,
		sessionsController.sendToken)

module.exports = router;