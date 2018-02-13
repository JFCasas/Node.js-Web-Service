const express = require('express');
const router = express.Router();

let visitsController = require('../controllers/VisitsController');

//let prueba = require('../middlewares/prueba')

const authenticateOwner = require('../middlewares/authenticateOwner');

const jwtMiddleware = require('express-jwt')

router.route('/')

	.get(

		jwtMiddleware({secret:'dfhwgfreufewefeiyPosteriormenteehrhg'}),

		visitsController.myVisits

		)

	.post(visitsController.create)

router.route('/:id')

	.delete(
		visitsController.find,
		authenticateOwner,
		visitsController.destroy
		)


module.exports = router;